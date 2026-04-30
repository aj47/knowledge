---
kind: note
id: claude-conversation-2026-01-08-obs-video-recording-lag-issues-b40eaf06
updatedAt: 1767844271985
createdAt: 1767842879502
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: b40eaf06-54e2-4b42-9607-b5e75b800e16
created_at: 2026-01-08T03:27:59.502230Z
updated_at: 2026-01-08T03:51:11.985808Z
title: "OBS video recording lag issues"
---

# OBS video recording lag issues

## Metadata

- Claude conversation UUID: `b40eaf06-54e2-4b42-9607-b5e75b800e16`
- Created: `2026-01-08T03:27:59.502230Z`
- Updated: `2026-01-08T03:51:11.985808Z`
- Message count: 22
- Transcript chars extracted: 26049

## Claude summary

**Conversation Overview**

The user experienced severe encoding lag in OBS Studio that worsened over recording duration, with 71% of frames being skipped due to encoding lag despite low CPU usage (4-7%) on their M1 Mac. Claude systematically diagnosed the issue through multiple troubleshooting steps. Initially, the problem appeared to be Spotlight indexing services (STExtractionService.privileged writing 1.41 GB) competing for disk I/O, but the core issue was revealed through OBS log analysis to be multiple simultaneous hardware encoder sessions overwhelming the M1's VideoToolbox capabilities.

The user was running four concurrent hardware encoding outputs: main recording at 1440x2560 @ 9000kbps, vertical canvas at the same resolution, Source Record plugin at an extremely high 3464x3190 resolution @ 2500kbps, and Vertical Backtrack. The Source Record plugin's 4K+ resolution was particularly problematic. Claude guided the user through checking OBS installation (confirmed native ARM64), testing different capture methods (window capture vs display capture), examining Activity Monitor for resource conflicts, and ultimately analyzing OBS logs to identify the multiple encoder bottleneck.

The troubleshooting process eliminated several potential causes including Rosetta emulation, disk write speed issues, Spotlight indexing conflicts, and problematic capture sources like Ghostty terminal. Claude also researched known M1 Mac OBS issues and found this to be a documented problem with Apple's VideoToolbox hardware encoder having limitations on concurrent sessions, with workarounds including using x264 software encoding or Apple ProRes hardware encoding for better stability.

## Quick excerpt

The user is showing OBS settings and experiencing lag that gets worse as recording duration increases. Let me analyze the settings shown: **Current Settings:** - Output Mode: Advanced - Video Encoder: Apple VT H264 Hardware Encoder - Audio Encoder: CoreAudio AAC - Rate Control: CBR - Bitrate: 8000 Kbps - Keyframe Interval: 2s - Profile: high - Use B-Frames: checked - Spatial AQ: Automatic The issue of lag increasing over time during recording is typically caused by a few things: 1. **Disk write 

## Transcript

## human\n\nim getting huge lag in my video recording in obs as the duration fills. why is this? these are my settings\n
## assistant\n\nThe user is showing OBS settings and experiencing lag that gets worse as recording duration increases. Let me analyze the settings shown:

**Current Settings:**
- Output Mode: Advanced
- Video Encoder: Apple VT H264 Hardware Encoder
- Audio Encoder: CoreAudio AAC
- Rate Control: CBR
- Bitrate: 8000 Kbps
- Keyframe Interval: 2s
- Profile: high
- Use B-Frames: checked
- Spatial AQ: Automatic

The issue of lag increasing over time during recording is typically caused by a few things:

1. **Disk write speed bottleneck** - Most common cause. As the file grows, if writing to a slow drive (especially HDD or a nearly-full SSD), the encoder buffer fills up and causes lag.

2. **Memory leak or buffer issues** - OBS can accumulate memory usage over long recordings.

3. **CBR with hardware encoder quirks** - Sometimes CBR can cause issues with certain hardware encoders.

4. **Recording format** - If they're using a format that requires more processing (like MP4 without remuxing), it can cause issues.

But the most likely culprit for "lag increasing as duration fills" is:
- **Recording to a slow drive**
- **Recording to an external USB drive that can't keep up**
- **Drive running out of space**
- **Recording format that requires more processing over time**

Let me give them targeted advice based on what I see and what's likely causing this.The lag increasing over time is almost always a **disk write bottleneck**. A few likely culprits:

**Most likely causes:**

1. **Recording to a slow or external drive** — If you're writing to an HDD, a USB drive, or even a nearly-full SSD, the write speed can't keep up as the file grows. The encoder buffer fills up, and OBS starts dropping frames/lagging.

2. **Recording format** — If you're recording directly to MP4, OBS has to do extra work. If OBS crashes or you stop unexpectedly, the file can also corrupt. Switch to **MKV or FLV** in your Recording tab, then remux to MP4 afterward (File → Remux Recordings).

3. **8 Mbps might be high for your disk** — That's 1 MB/s sustained write minimum. Sounds easy, but over long durations with other disk activity, it can stall.

**Quick fixes to try:**

- Switch your recording path to a fast internal SSD with plenty of free space (at least 50GB+)
- Change recording format to MKV
- Check if you have other apps hitting the same drive during recording
- In the Recording tab, consider using CQ (constant quality) instead of CBR if file size isn't critical — it can be more forgiving

**To confirm the issue:** Open OBS's View → Stats while recording. Watch "Disk Full / Encoding Overloaded" and "Frames missed due to rendering lag." If the disk-related stats climb, that's your answer.

What drive are you recording to?\n
## human\n\ndo these look normal?\n
## assistant\n\nThe user is showing me Activity Monitor sorted by Bytes Written. Let me analyze what's going on here.

The top process is **STExtractionService.privileged** with 1.41 GB written - that's a LOT. This is a macOS system service related to extracting/indexing content, often triggered by Spotlight indexing or when new files are being processed.

Other notable processes:
- kernel_task: 630.6 MB - normal, this is macOS kernel
- mobileassetd: 473.9 MB - software update related
- corespotlightd: 280.2 MB - Spotlight indexing
- mds_stores: 104.3 MB with 2.89 GB read - this is Spotlight metadata server

The issue here is clear: **Spotlight indexing** is going crazy. STExtractionService, corespotlightd, and mds_stores are all Spotlight-related processes. When you're recording video, you're creating new files that Spotlight wants to index. This causes:

1. Disk I/O contention - Spotlight is competing with OBS for disk writes
2. CPU usage from the extraction/indexing
3. This gets worse as recording duration increases because more data accumulates

This explains perfectly why the lag increases over time during recording!

The fix would be to either:
1. Exclude the OBS recording folder from Spotlight indexing
2. Temporarily disable Spotlight while recording
3. Record to an external drive that isn't indexed

This is a really common issue for content creators on Mac.There's your culprit: **STExtractionService.privileged** at 1.41 GB written.

That's a Spotlight indexing service. Combined with **corespotlightd** (280 MB) and **mds_stores** (2.89 GB read), your Mac is actively indexing files while you're trying to record. These processes are competing with OBS for disk I/O, and it gets worse over time as your recording file grows and Spotlight tries to process new content.

**Fix: Exclude your recording folder from Spotlight**

1. Open **System Settings → Siri & Spotlight → Spotlight Privacy** (or on older macOS: System Preferences → Spotlight → Privacy)
2. Click the **+** button
3. Add your OBS recording output folder

This stops Spotlight from indexing your recordings in real-time, freeing up disk bandwidth for OBS.

**Alternative quick test:** Before your next recording, temporarily disable Spotlight entirely in Terminal:
```bash
sudo mdutil -a -i off
```
Then re-enable after:
```bash
sudo mdutil -a -i on
```

If the lag disappears, you've confirmed the issue.

Also worth noting: Chrome at 756 MB read could be adding pressure too if you have it open while recording. Consider closing unnecessary apps during long recordings.\n
## human\n\nim seeing message "encoding overloaded"\n
## assistant\n\nThe user is now seeing "encoding overloaded" messages in OBS. This is a different issue from disk I/O - this means the encoder (in their case, Apple VT H264 Hardware Encoder) can't keep up with the encoding demands.

Looking back at their settings:
- Video Encoder: Apple VT H264 Hardware Encoder (hardware encoding)
- Rate Control: CBR
- Bitrate: 8000 Kbps
- Keyframe Interval: 2s
- Profile: high
- Use B-Frames: checked
- Rescale Output: Disabled, 1920x1080

"Encoding overloaded" specifically means the encoder is falling behind. With hardware encoding (Apple VT), this is less common than with software encoding (x264), but it can still happen if:

1. The hardware encoder is being taxed by other things
2. There's some bottleneck in the pipeline
3. The source is too demanding (high FPS, high resolution)
4. Other apps are using the video encoder hardware

Since they're using Apple's hardware encoder, the issue could be:
- Other apps using the VideoToolbox/hardware encoder
- The Mac's GPU being overtaxed
- Canvas/output resolution mismatch causing scaling overhead
- B-frames can add some overhead

Quick fixes:
1. Check their canvas resolution vs output resolution - if there's scaling happening, that adds load
2. Disable B-frames (can help reduce encoder load)
3. Lower output resolution
4. Check what else might be using the GPU
5. Lower framerate if they're at 60fps

Let me give them practical advice.That's a different problem — now your **encoder** can't keep up, not just the disk.

Since you're using Apple VT H264 Hardware Encoder, the GPU is doing the encoding. A few things to check:

**Quick fixes:**

1. **Uncheck "Use B-Frames"** — B-frames add encoding complexity. Try disabling it first.

2. **Check your canvas vs output resolution** — Go to Settings → Video. If your Base (Canvas) Resolution is higher than your Output (Scaled) Resolution, OBS has to scale every frame, which adds load. Match them if possible, or set scaling to a lower output (1280x720) to test.

3. **Lower framerate** — If you're recording at 60fps, try 30fps to cut encoding load in half.

4. **Close GPU-heavy apps** — Chrome is notorious for GPU usage. Any browser, video playback, or graphics apps competing for the same hardware encoder will cause issues.

5. **Try a different encoder** — In your Output settings, try switching to **x264** (software/CPU encoding) temporarily to see if the hardware encoder specifically is the bottleneck. If x264 works better, your GPU is overtaxed.

**What's your Base Canvas and Output Resolution set to in Settings → Video?** And what Mac/chip are you on? That'll help narrow it down — some older Intel Macs have weaker hardware encoders than Apple Silicon.\n
## human\n\nim on m1 and the cpu stays at 10-20% in activity monitor\n
## assistant\n\nThe user is on an M1 Mac, and their CPU usage is low (10-20%). They're getting "encoding overloaded" errors even though:
1. CPU is not stressed
2. They're using the Apple VT H264 Hardware Encoder (which uses the dedicated media engine on M1)

This is strange because M1's hardware encoder should handle 1080p at 8Mbps easily without breaking a sweat. Let me think about what could cause this...

Possible causes:
1. OBS version issue - older versions of OBS had issues with Apple Silicon hardware encoding
2. The hardware encoder might be getting bottlenecked by something else
3. Memory pressure
4. The source/scene complexity - lots of sources, browser sources, etc.
5. Rendering lag vs encoding lag - these are different things
6. Rosetta vs native ARM OBS - if they're running the Intel version through Rosetta, that could cause issues
7. Preview/display issues

On M1, the hardware encoder should be very efficient. The "encoding overloaded" message specifically means OBS can't encode frames fast enough. But with low CPU and a dedicated hardware encoder, this is unusual.

Key questions:
- Is OBS running as native Apple Silicon or through Rosetta?
- What sources are in their scene? Browser sources are notorious for causing issues
- What does the Stats window show specifically - is it rendering lag or encoding lag?

I should ask about:
1. Whether they're running native ARM OBS
2. What sources they have in their scene
3. The full stats window details

Actually, a common issue on M1 with OBS is browser sources and window captures causing problems due to how macOS handles screen capture permissions and compositing. Also, the Apple VT encoder on M1 should be rock solid for 1080p, so this points to something else going on.

Let me give them some targeted troubleshooting steps.That's weird — M1's hardware encoder should crush 1080p@8Mbps without breaking a sweat, and low CPU confirms it's not a processing issue.

A few M1-specific things to check:

**1. Are you running native ARM OBS or Rosetta?**
Open Activity Monitor, find OBS, check the "Kind" column. If it says "Intel," you're running through Rosetta, which can cause encoder issues. Download the native Apple Silicon version from obsproject.com if so.

**2. What sources are in your scene?**
On M1, certain sources cause problems:
- **Browser sources** — notorious for causing encoding lag, especially with hardware acceleration enabled in the browser source properties
- **Window capture** — can be buggy on macOS; Display Capture sometimes works better
- **Multiple sources layered** — each adds compositing load

**3. Check the Stats window more closely (View → Stats)**
Look at which specific line is climbing:
- "Frames missed due to rendering lag" = GPU/compositing issue
- "Frames missed due to encoding lag" = encoder issue
- "Skipped frames due to encoding lag" = encoder can't keep up

**Quick test:** Create a brand new empty scene with just a single Display Capture source, nothing else. Record for a few minutes. Does it still lag over time?

If the empty scene works fine, one of your sources is the problem.\n
## human\n\nwhat's b frames\n
## assistant\n\nThe user is asking what B-frames are. This is a straightforward technical question about video encoding that I can explain from my knowledge.B-frames (Bidirectional frames) are a video compression technique.

**How video frames work:**

- **I-frames (Intra)** — Complete full images, no references. Like a keyframe.
- **P-frames (Predicted)** — Store only what changed from the *previous* frame
- **B-frames (Bidirectional)** — Store what changed from *both* the previous AND next frames

Because B-frames can look both directions, they compress better (smaller file sizes at the same quality). But there's a tradeoff: the encoder has to buffer future frames before it can encode the current one, which adds latency and encoding complexity.

**For streaming:** B-frames are usually fine and help with quality-per-bitrate.

**For recording locally:** The extra compression efficiency matters less, and disabling them reduces encoder load.

Since you're getting encoding overloaded warnings, turning off B-frames removes that extra work the encoder has to do — it's an easy first thing to try.\n
## assistant\n\nThe user is showing OBS stats. Let me analyze what I see:

- CPU Usage: 4.7% (low)
- Disk space available: 64.6 GB (plenty)
- Memory Usage: 989.6 MB (fine)
- FPS: 30.00
- Average time to render frame: 3.3 ms (very fast, not a rendering issue)
- Frames missed due to rendering lag: 3 / 28326 (0.0%) — rendering is fine
- **Skipped frames due to encoding lag: 521 / 731 (71.3%)** — THIS IS THE PROBLEM

So 71.3% of frames are being skipped due to encoding lag. That's massive. But the CPU is at 4.7%, rendering is fine at 3.3ms per frame...

This is clearly a hardware encoder issue. The Apple VT H264 Hardware Encoder is choking, but it's not a CPU or disk problem.

Possibilities:
1. OBS is running under Rosetta (Intel) instead of native ARM
2. Something is hogging the video encoder (like another app doing video encoding/decoding)
3. A bug with the hardware encoder in OBS on M1
4. Source issues - browser sources or certain capture methods can cause encoding issues

The user should:
1. Confirm OBS is running natively (not Rosetta)
2. Try switching to x264 software encoder to see if that works
3. Check what sources they have
4. Try a clean scene with just display capture

This is pretty clearly pointing to a hardware encoder problem on M1. The fact that render time is only 3.3ms and CPU is at 4.7% but encoding is dropping 71% of frames is very strange.There it is — **71.3% of frames skipped due to encoding lag**. That's massive.

But notice: rendering is fine (3.3ms, only 3 frames missed), CPU is barely used, disk has space. The hardware encoder itself is choking.

This is almost certainly one of two things:

**1. OBS running under Rosetta (most likely)**
Check Activity Monitor → find OBS → look at the "Kind" column. If it says "Intel" instead of "Apple," that's your problem. The hardware encoder doesn't play well through Rosetta emulation.

**2. A problematic source in your scene**
Some sources on M1 cause the hardware encoder to stall. Browser sources are the biggest offender.

**Right now, try this:**
1. Stop recording
2. Create a new Scene (click + in Scenes)
3. Add only a single Display Capture
4. Start recording again and watch the stats

If the encoding lag disappears with a clean scene, start adding your sources back one by one until you find the culprit.

If it still happens with just Display Capture, the issue is OBS itself (likely Rosetta or a bad install). Reinstall the native ARM version from obsproject.com.

What sources do you have in your current scene?\n
## human\n\nit seems like the issue is when i have source of a ghostty window but it works fine when i have awhole display capture\n
## assistant\n\nThe user found that the issue is specifically with window capture of Ghostty (a terminal emulator) but works fine with display capture. This is a known issue on macOS with window capture, especially with certain apps.

Ghostty is a relatively new GPU-accelerated terminal emulator. The window capture on macOS can have issues with GPU-accelerated windows, and this could be causing the encoder to choke.

Let me think about what could be happening:
1. Window capture on macOS uses different APIs than display capture
2. Ghostty uses GPU rendering heavily
3. The window capture might be causing some conflict with the hardware encoder

Solutions could include:
1. Use display capture instead and crop to the Ghostty window
2. Use a different capture method
3. Check if there are Ghostty-specific settings
4. Try macOS Screen Capture source instead of Window CaptureThat's a known issue with window capture on macOS, especially with GPU-accelerated apps like Ghostty (which uses Metal for rendering).

**Why it happens:** Window capture on macOS has to grab frames from the app's rendering pipeline. GPU-accelerated terminals like Ghostty, Kitty, and Alacritty can conflict with how OBS's hardware encoder accesses the GPU — they're fighting over the same resources.

**Workarounds:**

**1. Use Display Capture + Crop (easiest)**
- Use your working Display Capture
- Right-click it → Filters → Add "Crop/Pad"
- Crop down to just the Ghostty window area
- Downside: You have to keep Ghostty in the same spot

**2. Use macOS Screen Capture source instead**
- Remove the Window Capture source
- Add source → "macOS Screen Capture"
- Set it to capture that specific window
- This uses Apple's ScreenCaptureKit API which often works better than the older Window Capture method

**3. Try a different terminal for recording sessions**
- Terminal.app or iTerm2 don't have this issue since they're not GPU-accelerated the same way
- Not ideal if you love Ghostty, but works

**4. Ghostty settings (worth trying)**
Check if Ghostty has a "reduce GPU usage" or vsync option that might help.

The macOS Screen Capture source is probably your best bet — it's newer and handles GPU-rendered windows better. Does that option show up in your Add Source menu?\n
## human\n\nok i started iterm and did whole display capture and we're still getting the same issue\n
## assistant\n\nHmm, so now they're using iTerm (not Ghostty) and whole display capture, and still getting encoding lag. That rules out the window capture theory.

Let me think about what else could cause this on M1:

1. OBS running under Rosetta - still the most likely culprit
2. Something else competing for the hardware encoder
3. A bug in OBS itself
4. Some other source in the scene still causing issues
5. Memory pressure or thermal throttling
6. Screen recording permissions issues

I should ask them to verify:
1. Is OBS running as Apple Silicon native or Intel/Rosetta?
2. What other sources are in the scene besides display capture?
3. Is this a completely fresh scene with ONLY display capture?

The most important thing to check right now is whether they're running native ARM OBS or Rosetta. That's the #1 cause of encoding issues on M1.Okay, so it's not Ghostty specifically. Let's verify the OBS install.

**Check if OBS is running native or Rosetta:**

Open Terminal and run:
```bash
file /Applications/OBS.app/Contents/MacOS/obs
```

If it says `arm64` — it's native.
If it says `x86_64` — it's Intel/Rosetta and that's your problem.

Or in Activity Monitor, find OBS and check the "Architecture" or "Kind" column.

**Also confirm:** Is your test scene *only* Display Capture? No overlays, no audio visualizers, no browser sources, nothing else?

If you're definitely running native ARM OBS with only a Display Capture and still getting 70%+ encoding lag, something is seriously wrong — either a corrupted OBS install, or something system-level is blocking the hardware encoder.

What does that Terminal command show?\n
## human\n\n➜  playground git:(main) ✗ file /Applications/OBS.app/Contents/MacOS/obs
/Applications/OBS.app/Contents/MacOS/obs: Mach-O 64-bit executable arm64

it says apple in 'kind'

same issue with only screen capture source\n
## assistant\n\nThe user has confirmed:
- OBS is running native ARM64
- Only a Display Capture source
- Still getting 71% encoding lag
- CPU is at 4.7%, rendering is fine (3.3ms)
- M1 Mac

This is really strange. The hardware encoder should handle this easily. Let me think about what could cause this...

Possibilities:
1. Something wrong with the Apple VT H264 Hardware Encoder specifically
2. Some system-level issue blocking hardware encoder access
3. OBS settings issue
4. macOS version compatibility issue
5. VideoToolbox issue

Things to try:
1. Try a different encoder - switch to x264 (software) to see if the issue goes away
2. Reset OBS settings entirely
3. Check if there are any other apps using the hardware encoder
4. Try lowering the output resolution
5. Check OBS logs for errors
6. Try the Apple VT H265 encoder instead if available
7. Uninstall/reinstall OBS
8. Check macOS version

Let me suggest trying x264 first to isolate whether it's specifically the hardware encoder, then maybe check OBS logs.That's really strange. Native ARM OBS with just Display Capture should not choke like this on M1.

Let's isolate further:

**Test 1: Try software encoding**
In Settings → Output → Encoder, switch from "Apple VT H264 Hardware Encoder" to **x264** (software). Record for a minute.

If x264 works fine, the hardware encoder is broken somehow. If x264 also lags, it's something else.

**Test 2: Check OBS logs**
After a failed recording:
- Go to Help → Log Files → View Current Log
- Look for any errors or warnings, especially around "encoder" or "VideoToolbox"

**Test 3: Try HEVC encoder**
Switch to "Apple VT H265 Hardware Encoder" if it's available in the dropdown. Sometimes H264 specifically has issues.

**Test 4: Nuclear option — reset OBS**
```bash
rm -rf ~/Library/Application\ Support/obs-studio
```
Then reopen OBS and try a fresh recording with default settings.

**Also:** What macOS version are you on? There have been bugs with VideoToolbox in certain Ventura/Sonoma releases that caused exactly this.

Run `sw_vers` in terminal and let me know.\n
## human\n\nsearch online to see if anyone else is having this issue\n
## assistant\n\nThe user wants me to search online to see if others are experiencing similar OBS encoding lag issues on M1 Macs with the Apple hardware encoder.
```
This block is not supported on your current device yet.
```

Let me search for more specific results about M1 Mac OBS encoding issues, specifically with display capture causing encoding lag.
```
This block is not supported on your current device yet.
```

Let me search more specifically for M1 Mac OBS encoding lag issues with the Apple VT encoder, maybe including macOS version specific issues.
```
This block is not supported on your current device yet.
```

This is interesting - I'm seeing some relevant threads. Let me search for more specific issues about encoding lag on M1 with display capture, especially issues that persist even with low CPU usage.
```
This block is not supported on your current device yet.
```

Found some very relevant information. Let me check that thread about Hardware Encoder on M1 Pro overloading and the suggestion about ProRes encoder.Found some really relevant threads. Here's what people are reporting:

**This is a known issue with M1 Macs and OBS's H264/HEVC hardware encoders.** The hardware encoder on M1 Pro using OBS will overload just by drag-shaking the OBS window rapidly with nothing else running. There are many dropped frames in the output video making it unwatchable. This happens despite CPU usage remaining low throughout.

Several users have confirmed this exact behavior — low CPU, yet encoding overload. The VideoToolbox hardware encoder seems to have issues with certain workloads on Apple Silicon, even though the hardware should theoretically handle it fine.

**Workarounds that have worked for others:**

1. **Use Apple ProRes encoder instead of H264** — One user mentioned that Apple ProRes hardware encoder is the only way they can record 4K60 gameplay. HEVC/H264 hardware encoders will overload, even after upgrading from M1 Pro to M4 Pro. The downside is much larger file sizes.

2. **Use x264 software encoder** — Some users concluded that using x264 at 4500 kbps, CBR, very fast preset is more reliable than the Apple VT hardware encoder which causes dropped frames. Your M1 can handle software encoding at 1080p30 without breaking a sweat.

3. **Lower resolution or framerate** — If you're recording at native retina resolution, try 1920x1080 instead of something higher.

**What I'd try in your case:**

1. First test: Switch to **x264** encoder, preset "veryfast" or "fast", ~6000kbps. See if the encoding lag disappears.

2. If you need hardware encoding: Try **Apple ProRes 422 Proxy** (smallest ProRes) — files will be bigger but encoding should be stable.

What's your canvas/output resolution set to in Settings → Video?\n
## assistant\n\nLooking at this log, I can see the issue now. The user is running MULTIPLE simultaneous hardware encoders:

1. `vertical_canvas_video_encoder` - 1440x2560 @ 9000kbps
2. `Source Record` - 3464x3190 @ 2500kbps (this is a HUGE resolution!)
3. `adv_file_output` - main recording
4. `Vertical Backtrack` - another output

That's 3-4 simultaneous hardware encoder sessions! The M1 has limited hardware encoder instances/bandwidth.

And look at that Source Record resolution: **3464x3190** - that's essentially 4K+ and it's being encoded at only 2500kbps which is way too low for that resolution, but more importantly the resolution itself is massive.

The problem is clear: too many simultaneous hardware encoder sessions, and one of them is at a ridiculously high resolution.Found it. Look at this — you're running **multiple simultaneous hardware encoder sessions**:

1. **Main recording** (`adv_file_output`) — 1440x2560 @ 9000kbps
2. **Vertical canvas** — 1440x2560 @ 9000kbps  
3. **Source Record plugin** — **3464x3190** @ 2500kbps ← This is the killer
4. **Vertical Backtrack** — another encoder instance

That Source Record is trying to encode at **3464x3190** — that's larger than 4K! And you're running 3-4 hardware encoder sessions simultaneously. The M1's VideoToolbox encoder has limits on concurrent sessions.

**The fix:**

1. **Disable Source Record plugin** or reduce its resolution dramatically
2. **Disable any replay buffer / backtrack** you're not actively using
3. Only run one recording output at a time

Also those `coreaudio_get_device_name failed` errors suggest an audio device issue — possibly a virtual audio device that's not responding properly. That could be adding extra system stress.

**To test:** Disable all the extra outputs (Source Record, Vertical Backtrack, etc.) and just run a single basic recording. Does the encoding lag disappear?

What's your actual use case? Are you trying to record multiple outputs simultaneously for a reason, or did these get enabled accidentally?\n