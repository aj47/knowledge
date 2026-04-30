---
kind: note
id: remotion-video-pipeline
title: Remotion Video Pipeline — Full Audit
context: search-only
updatedAt: 1774060818247
tags: 
---

# Remotion Video Pipeline — Full Audit

> Last updated: 2026-03-20
> Status: Audit complete, implementation pending

---

## 1. GOAL

Build a full Remotion-based video editing pipeline that:
1. Takes raw screen recordings from `~/Movies/`
2. Transcribes audio → word-level captions
3. Detects and removes silences (via FFmpeg — no native Remotion API exists)
4. Renders captions as TikTok-style animated overlays in Remotion
5. Exports a polished final video

---

## 2. WHAT WE ALREADY HAVE

### Projects
- **Primary**: `~/Development/aj-demos/animations/` — active Remotion v4.0.432 project
- **Secondary**: `~/Development/techfren-recap-remotion/` — older project

### Installed Remotion packages (aj-demos/animations)
| Package | Version |
|---|---|
| `remotion` | 4.0.432 |
| `@remotion/cli` | 4.0.432 |

### Source Videos in ~/Movies/
| File | Resolution |
|---|---|
| `2026-03-17 15-43-46.mp4` | 2560×1440 |
| `CameraOnly-2026-03-17 15-43-47.mp4` | 1920×1080 |
| `Desktop-2026-03-17 15-43-47.mp4` | 2560×1440 |

### Existing Transcripts
- `~/Movies/text_2026-03-17 15-43-46/en/` — Whisper CLI output
  - `.json` — word-level timestamps (usable directly)
  - `.srt` — subtitle format (parseable with `parseSrt()`)
  - `.vtt` — web format

### Existing Compositions (no caption or silence work yet)
- `gpt54-augment/` — full multi-scene composition with timeline, data, scenes
- `worktrees/` — another composition with timeline
- `figma-mcp/` — thumbnail only
- **Zero existing caption or silence detection code**

---

## 3. KEY RESEARCH FINDING: No Native Remotion Silence Detection

Remotion has **NO built-in silence detection API**. Confirmed after checking:
- `@remotion/media-utils` — no `getSilenceTimestamps()` or similar
- `@remotion/captions` — caption utilities only
- `@remotion/media-parser` — deprecated (replaced by Mediabunny), never had silence detection
- `https://www.remotion.dev/docs/silence-removal` — **does not exist**
- `https://www.remotion.dev/docs/media-utils/get-silence-timestamps` — **does not exist**

**Conclusion**: Silence detection must be done with FFmpeg CLI pre-render.

---

## 4. PACKAGES TO INSTALL

```bash
cd ~/Development/aj-demos/animations
npm i --save-exact \
  @remotion/captions \
  @remotion/install-whisper-cpp \
  @remotion/media-utils \
  @remotion/media
```

> Pin all to the same version as `remotion` (currently 4.0.432).
> `trimBefore`/`trimAfter` on `<OffthreadVideo>` require v4.0.319+. ✅ We are above that.

---

## 5. WHAT WE NEED TO CREATE (from scratch)

### 5a. Silence Detection Script — `scripts/detect-silences.mjs`

FFmpeg-based, runs before Remotion render. **No browser/Web Audio equivalent that works for rendering**.

```javascript
// scripts/detect-silences.mjs
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

/**
 * Detect silences using FFmpeg silencedetect filter
 * @param {string} inputPath - Path to video/audio file
 * @param {number} noiseLevel - dB threshold (e.g. -35 = 35dB below reference)
 * @param {number} minDuration - Minimum silence duration in seconds
 */
function detectSilences(inputPath, noiseLevel = -35, minDuration = 0.5) {
  const cmd = `ffmpeg -i "${inputPath}" -af "silencedetect=n=${noiseLevel}dB:d=${minDuration}" -f null - 2>&1`;
  let stderr = '';
  try {
    execSync(cmd, { stdio: ['ignore', 'ignore', 'pipe'] });
  } catch (e) {
    stderr = e.stderr?.toString() ?? e.stdout?.toString() ?? '';
  }

  // FFmpeg outputs to stderr even on success for null muxer
  const startMatches = [...stderr.matchAll(/silence_start: ([\d.]+)/g)];
  const endMatches = [...stderr.matchAll(/silence_end: ([\d.]+)/g)];

  const silences = [];
  for (let i = 0; i < startMatches.length; i++) {
    silences.push({
      startMs: parseFloat(startMatches[i][1]) * 1000,
      endMs: parseFloat(endMatches[i]?.[1] ?? '0') * 1000,
    });
  }
  return silences;
}

/**
 * Invert silence segments to get "keep" segments
 */
function silencesToKeepSegments(silences, totalDurationMs) {
  const segments = [];
  let cursor = 0;
  for (const s of silences) {
    if (s.startMs > cursor) {
      segments.push({ startMs: cursor, endMs: s.startMs });
    }
    cursor = s.endMs;
  }
  if (cursor < totalDurationMs) {
    segments.push({ startMs: cursor, endMs: totalDurationMs });
  }
  return segments;
}

// Usage:
const inputPath = process.argv[2] ?? process.env.HOME + '/Movies/2026-03-17 15-43-46.mp4';
const silences = detectSilences(inputPath);
const segments = silencesToKeepSegments(silences, /* get from ffprobe */ 0);
const output = { silences, segments };
writeFileSync('public/silence-data.json', JSON.stringify(output, null, 2));
console.log(`Found ${silences.length} silence segments`);
```

---

### 5b. Caption Converter — `scripts/whisper-to-captions.mjs`

We already have Whisper JSON output. This converts it to Remotion Caption[] format.

```javascript
// scripts/whisper-to-captions.mjs
import { readFileSync, writeFileSync } from 'fs';

const whisperJson = JSON.parse(readFileSync(process.argv[2], 'utf-8'));

// Whisper word-level JSON structure:
// { segments: [{ words: [{ word, start, end, probability }] }] }
const captions = whisperJson.segments.flatMap(seg =>
  (seg.words ?? []).map(w => ({
    text: w.word.trim(),
    startMs: Math.round(w.start * 1000),
    endMs: Math.round(w.end * 1000),
    timestampMs: Math.round(((w.start + w.end) / 2) * 1000),
    confidence: w.probability ?? 1,
  }))
);

writeFileSync('public/captions.json', JSON.stringify(captions, null, 2));
console.log(`Converted ${captions.length} word-level captions`);
```

---

### 5c. Remotion Composition — Caption + Silence-Cut Video

```typescript
// src/compositions/video-with-captions/VideoWithCaptions.tsx
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { OffthreadVideo, staticFile } from 'remotion';
import { createTikTokStyleCaptions } from '@remotion/captions';
import captionsData from '../../../public/captions.json';
import silenceData from '../../../public/silence-data.json';

// Each "keep" segment becomes a <Sequence> with trimBefore/trimAfter
export const VideoWithCaptions: React.FC = () => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  // Build sequences from non-silent segments
  let timelineCursor = 0; // in frames on the OUTPUT timeline
  const sequences = silenceData.segments.map((seg, i) => {
    const durationMs = seg.endMs - seg.startMs;
    const durationFrames = Math.round((durationMs / 1000) * fps);
    const from = timelineCursor;
    timelineCursor += durationFrames;

    return (
      <Sequence key={i} from={from} durationInFrames={durationFrames}>
        <OffthreadVideo
          src={staticFile('input.mp4')}
          trimBefore={Math.round((seg.startMs / 1000) * fps)}
          trimAfter={Math.round((seg.endMs / 1000) * fps)}
        />
      </Sequence>
    );
  });

  // TikTok-style captions (groups words into short bursts)
  const { pages } = createTikTokStyleCaptions({
    captions: captionsData,
    combineTokensWithinMilliseconds: 1200, // ~2-4 words per burst
  });

  // Find active caption page at current frame
  const currentMs = (frame / fps) * 1000;
  const activePage = pages.find(p => p.startMs <= currentMs && p.endMs >= currentMs);

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      {sequences}
      {activePage && (
        <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 120 }}>
          <div style={{
            fontFamily: 'Arial Black, sans-serif',
            fontSize: 72,
            fontWeight: 900,
            color: 'white',
            textAlign: 'center',
            textShadow: '0 4px 12px rgba(0,0,0,0.8)',
            padding: '12px 24px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 12,
            maxWidth: '80%',
          }}>
            {activePage.text}
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
```

---

### 5d. `calculateMetadata` for Dynamic Duration

Since silence segments determine the final length, compute it dynamically:

```typescript
import { calculateMetadata } from 'remotion';

export const videoMetadata = calculateMetadata({
  component: VideoWithCaptions,
  defaultProps: {},
  calculateMetadata: async ({ props }) => {
    const silenceData = await fetch(staticFile('silence-data.json')).then(r => r.json());
    const totalMs = silenceData.segments.reduce(
      (acc: number, s: { startMs: number; endMs: number }) => acc + (s.endMs - s.startMs), 0
    );
    return {
      durationInFrames: Math.round((totalMs / 1000) * 30),
      fps: 30,
      width: 2560,
      height: 1440,
    };
  },
});
```

---

## 6. @remotion/media-utils API (for browser-side analysis)

Exported functions — available in browser/Player only, NOT during server-side render:

```typescript
import {
  getAudioData,        // → { channelWaveforms: Float32Array[], sampleRate, durationInSeconds }
  getWaveformPortion,  // → Float32Array of amplitudes for a time window
  getVideoMetadata,    // → { width, height, durationInSeconds, fps }
  getAudioDurationInSeconds,
  visualizeAudio,      // → number[] for bar chart visualization
  visualizeAudioWaveform,
  useAudioData,        // React hook
  useWindowedAudioData,
} from '@remotion/media-utils';
```

**Custom browser-side silence detection** (for Player/Studio use only):
```typescript
async function getSilenceTimestamps(src: string, threshold = 0.01, minDurationMs = 300) {
  const data = await getAudioData(src);
  const { channelWaveforms, sampleRate } = data;
  const samplesPerMs = sampleRate / 1000;
  const minSamples = minDurationMs * samplesPerMs;

  // Average all channels
  const mono = new Float32Array(channelWaveforms[0].length);
  channelWaveforms.forEach(ch => ch.forEach((v, i) => (mono[i] += Math.abs(v))));
  mono.forEach((_, i) => (mono[i] /= channelWaveforms.length));

  const silences = [];
  let silenceStart = -1;
  for (let i = 0; i < mono.length; i++) {
    if (mono[i] < threshold && silenceStart === -1) silenceStart = i;
    if (mono[i] >= threshold && silenceStart !== -1) {
      if (i - silenceStart >= minSamples) {
        silences.push({
          startMs: (silenceStart / sampleRate) * 1000,
          endMs: (i / sampleRate) * 1000,
        });
      }
      silenceStart = -1;
    }
  }
  return silences;
}
```

> ⚠️ This approach works in browser/Player but NOT during Lambda or CLI rendering. Use FFmpeg for production.

---

## 7. @remotion/captions API Reference

```typescript
import {
  parseSrt,                    // Parse .srt file string → Caption[]
  parseVtt,                    // Parse .vtt file string → Caption[]
  serializeSrt,                // Caption[] → .srt string
  createTikTokStyleCaptions,   // Group captions into word-burst pages
} from '@remotion/captions';

// Caption type:
type Caption = {
  text: string;
  startMs: number;
  endMs: number;
  timestampMs: number;  // midpoint
  confidence: number;   // 0-1
};

// parseSrt usage:
const { captions } = parseSrt({ input: srtFileContent });

// createTikTokStyleCaptions usage:
const { pages } = createTikTokStyleCaptions({
  captions,
  combineTokensWithinMilliseconds: 1200, // group tokens within 1.2s into one page
});
// pages[i] = { text: string, startMs: number, endMs: number, tokens: Caption[] }
```

---

## 8. Video Component Reference (trimBefore/trimAfter)

```typescript
// OffthreadVideo — works everywhere including server-side render (RECOMMENDED)
import { OffthreadVideo } from 'remotion';
<OffthreadVideo
  src={staticFile('input.mp4')}
  trimBefore={60}   // Skip first 2s at 30fps
  trimAfter={120}   // Stop at 4s mark at 30fps (in SOURCE video frames)
/>

// NEW Video from @remotion/media — uses Mediabunny, frame-exact, buffering support
import { Video } from '@remotion/media';
<Video src={staticFile('input.mp4')} trimBefore={60} trimAfter={120} />

// Html5Video — older name, same as OffthreadVideo
import { Html5Video } from 'remotion'; // Also has trimBefore/trimAfter
```

> **trimBefore/trimAfter are in FRAMES (not milliseconds)**.
> Convert: `frames = seconds * fps`

---

## 9. RECOMMENDED BUILD ORDER

1. **Install packages**: `npm i @remotion/captions @remotion/media-utils @remotion/media`
2. **Run silence detection**: `node scripts/detect-silences.mjs ~/Movies/video.mp4` → `public/silence-data.json`
3. **Convert captions**: `node scripts/whisper-to-captions.mjs ~/Movies/text_.../en/output.json` → `public/captions.json`
4. **Build composition**: `src/compositions/video-with-captions/VideoWithCaptions.tsx`
5. **Register in Root.tsx**: Add `<Composition>` with `calculateMetadata`
6. **Test in Studio**: `npx remotion studio`
7. **Render**: `npx remotion render VideoWithCaptions output.mp4`

---

## 10. WHERE TO FIND THINGS

| What | Where |
|---|---|
| Remotion captions docs | https://www.remotion.dev/docs/captions |
| parseSrt docs | https://www.remotion.dev/docs/captions/parse-srt |
| createTikTokStyleCaptions docs | https://www.remotion.dev/docs/captions/create-tiktok-style-captions |
| Displaying captions guide | https://www.remotion.dev/docs/captions/displaying-captions |
| OffthreadVideo trimBefore docs | https://www.remotion.dev/docs/offthreadvideo (trimBefore/trimAfter props) |
| @remotion/media Video docs | https://www.remotion.dev/docs/media/video |
| media-utils API | https://www.remotion.dev/docs/media-utils |
| calculateMetadata docs | https://www.remotion.dev/docs/calculate-metadata |
| Whisper transcripts | ~/Movies/text_2026-03-17 15-43-46/en/ |
| Source videos | ~/Movies/ |
| Primary Remotion project | ~/Development/aj-demos/animations/ |
| FFmpeg silencedetect docs | https://ffmpeg.org/ffmpeg-filters.html#silencedetect |

---

## 11. IMPORTANT GOTCHAS

- `trimBefore`/`trimAfter` on `<OffthreadVideo>` are in **frames** not milliseconds
- FFmpeg `silencedetect` writes to **stderr** even on success (null muxer always exits non-zero)
- `@remotion/media-utils` functions (`getAudioData`) are **browser-only** — cannot run during Lambda/CLI renders
- `@remotion/media-parser` is **deprecated** — use Mediabunny if you need low-level parsing
- All Remotion packages must be on the **same version** — mix mismatch causes errors
- `createTikTokStyleCaptions` returns **pages**, each page has `startMs`/`endMs` from the original timestamps — you must account for silence removal offset in displayed captions
