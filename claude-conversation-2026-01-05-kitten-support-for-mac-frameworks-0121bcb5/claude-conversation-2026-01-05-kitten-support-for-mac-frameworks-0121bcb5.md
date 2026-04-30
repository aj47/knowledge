---
kind: note
id: claude-conversation-2026-01-05-kitten-support-for-mac-frameworks-0121bcb5
updatedAt: 1767643581817
createdAt: 1767643540674
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 0121bcb5-2400-408c-a34b-b7ae4bc16c59
created_at: 2026-01-05T20:05:40.674025Z
updated_at: 2026-01-05T20:06:21.817470Z
title: "Kitten support for Mac frameworks"
---

# Kitten support for Mac frameworks

## Metadata

- Claude conversation UUID: `0121bcb5-2400-408c-a34b-b7ae4bc16c59`
- Created: `2026-01-05T20:05:40.674025Z`
- Updated: `2026-01-05T20:06:21.817470Z`
- Message count: 2
- Transcript chars extracted: 3265

## Claude summary

**Conversation Overview**

The user inquired about availability of KittenTTS for Mac systems, specifically asking whether there were versions optimized for MLX or CoreML frameworks. Claude conducted research and found that KittenTTS is an ultra-lightweight text-to-speech model (15M parameters, under 25MB) that uses ONNX runtime and is designed for CPU operation. The investigation revealed that KittenTTS works on Mac out of the box without requiring special ports since it's built with Python and ONNX runtime, with the project explicitly stating it "works literally everywhere." However, no MLX or CoreML-specific versions exist because the model is already optimized for CPU performance and doesn't require GPU acceleration.

Claude provided alternative recommendations for users specifically seeking MLX-accelerated TTS on Apple Silicon, identifying mlx-audio as a separate TTS library purpose-built for Apple's MLX framework. This library offers multiple voice presets, speed control, Swift package support for iOS/macOS apps, and web interface capabilities. The conversation demonstrated the user's interest in optimized speech synthesis solutions for Mac systems and their awareness of Apple's specialized machine learning frameworks.

## Quick excerpt

The user is asking about KittenTTS - whether there's a version for Mac, or implementations using MLX or CoreML. Given their technical background and interest in fast transcription/TTS solutions for Apple Silicon, this is a relevant question. Let me search for this information. ``` This block is not supported on your current device yet. ``` The search didn't specifically return results about KittenTTS. Let me search more specifically for KittenTTS to see if there's a Mac/MLX/CoreML version. ``` T

## Transcript

## human\n\nis there kittentts for mac or mlx or core ml\n
## assistant\n\nThe user is asking about KittenTTS - whether there's a version for Mac, or implementations using MLX or CoreML. Given their technical background and interest in fast transcription/TTS solutions for Apple Silicon, this is a relevant question.

Let me search for this information.
```
This block is not supported on your current device yet.
```

The search didn't specifically return results about KittenTTS. Let me search more specifically for KittenTTS to see if there's a Mac/MLX/CoreML version.
```
This block is not supported on your current device yet.
```

I found information about KittenTTS. It's an ultra-lightweight TTS model (15M params, under 25MB) that uses ONNX runtime and is designed to run on CPU. Let me search more specifically for Mac/MLX/CoreML versions.
```
This block is not supported on your current device yet.
```

Based on my searches, I don't see a specific MLX or CoreML port of KittenTTS. However, I found:

1. KittenTTS is designed to be ultra-lightweight (15M params, under 25MB) and uses ONNX runtime, specifically designed for CPU-only operation
2. It already works on Mac since it's just Python + ONNX - no special port needed
3. There's a project called "mlx-audio" which is a TTS library built on MLX, but it's not specifically KittenTTS

Let me check the KittenTTS GitHub directly to confirm it works on Mac.
```
This block is not supported on your current device yet.
```

Now I have a complete picture. KittenTTS:
- Uses ONNX runtime (so runs on CPU anywhere)
- Says "Works literally everywhere"
- No Mac-specific or MLX/CoreML port exists

There's no dedicated MLX or CoreML version of KittenTTS. The model works on Mac out of the box since it's pure Python + ONNX, but it's not optimized for Apple Silicon's GPU/Neural Engine - it runs on CPU.

For MLX-based TTS on Mac, there's the separate "mlx-audio" project by Blaizzy which supports various TTS models optimized for Apple Silicon.

Let me give a comprehensive answer.Based on my search, there's **no MLX or CoreML port of KittenTTS** specifically. Here's the situation:

**KittenTTS on Mac:**
- Works out of the box - it uses ONNX runtime and runs on CPU
- The project explicitly says "Works literally everywhere"
- It's ultra-lightweight (15M params, <25MB) so CPU performance is actually fine
- Just `pip install` the wheel and you're good

**Why no MLX/CoreML port:**
KittenTTS is designed to be CPU-optimized. It's already fast enough on CPU that there's likely little incentive to create Metal-accelerated versions. The whole point of the model is "runs anywhere without GPU."

**If you want MLX-based TTS instead:**
There's [**mlx-audio**](https://github.com/Blaizzy/mlx-audio) - a separate TTS/STT library built specifically on Apple's MLX framework. It supports:
- Multiple voice presets (AF Heart, AF Nova, AF Bella, BF Emma, etc.)
- Speed control
- Swift package for iOS/macOS apps
- Web interface with visualization

```bash
pip install mlx-audio
mlx_audio.tts.generate --text "Hello, world" --speed 1.4
```

**TL;DR:** Just use the regular KittenTTS on your Mac - it'll run fine. If you specifically want MLX-accelerated TTS, check out mlx-audio which is purpose-built for Apple Silicon but uses different models.\n