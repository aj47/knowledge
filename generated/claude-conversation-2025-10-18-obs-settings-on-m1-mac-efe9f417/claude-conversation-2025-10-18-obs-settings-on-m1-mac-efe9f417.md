---
kind: note
id: claude-conversation-2025-10-18-obs-settings-on-m1-mac-efe9f417
updatedAt: 1760749703684
createdAt: 1760749624221
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: efe9f417-bfcb-4b5c-a4f9-b2fdb1a9a618
created_at: 2025-10-18T01:07:04.221455Z
updated_at: 2025-10-18T01:08:23.684497Z
title: "OBS settings on M1 Mac"
---

# OBS settings on M1 Mac

## Metadata

- Claude conversation UUID: `efe9f417-bfcb-4b5c-a4f9-b2fdb1a9a618`
- Created: `2025-10-18T01:07:04.221455Z`
- Updated: `2025-10-18T01:08:23.684497Z`
- Message count: 4
- Transcript chars extracted: 2289

## Quick excerpt

Your OBS settings look pretty solid for an M1 Mac! Here's a breakdown: **Good choices:** - **NV12 format** - This is the right choice for M1. It's hardware-accelerated and efficient for encoding - **Rec. 709 color space** - Standard and correct for most streaming/recording - **Limited color range** - Correct for most use cases (matches YouTube, Twitch, etc.) **The settings that matter most:** - **SDR White Level (300 nits)** - This is fine for SDR content. Standard range is 200-300 nits - **HDR 

## Transcript

## human\n\nim on an m1 mac. how are these settings in obs\n
## assistant\n\nYour OBS settings look pretty solid for an M1 Mac! Here's a breakdown:

**Good choices:**
- **NV12 format** - This is the right choice for M1. It's hardware-accelerated and efficient for encoding
- **Rec. 709 color space** - Standard and correct for most streaming/recording
- **Limited color range** - Correct for most use cases (matches YouTube, Twitch, etc.)

**The settings that matter most:**
- **SDR White Level (300 nits)** - This is fine for SDR content. Standard range is 200-300 nits
- **HDR Nominal Peak Level (1000 nits)** - Only matters if you're doing HDR, which you're not with these settings

**V-Sync settings:**
- **"Reset macOS V-Sync on Exit" is checked** - Good, this prevents issues when closing OBS
- **"Disable macOS V-Sync" is unchecked** - Generally fine, though some people disable it to reduce input lag if streaming games

**Overall verdict:** These are solid default settings for an M1 Mac. The only thing I'd consider changing is disabling macOS V-Sync if you notice any performance issues or input lag while gaming, but for general recording/streaming, you're good to go.

Are you experiencing any specific issues, or just checking if your setup is optimal?\n
## human\n\nwhat encoder should i use\n
## assistant\n\nFor your M1 Mac, **stick with Apple VT H264 Hardware Encoder** (which you currently have selected). Here's why:

**Apple VT H264 Hardware Encoder** ✅
- Uses the M1's dedicated media engine - very efficient, barely affects CPU
- Great quality-to-performance ratio
- Best compatibility across all platforms (YouTube, Twitch, Discord, etc.)
- Low power consumption = less heat, longer battery life if on a laptop

**When to consider alternatives:**

- **Apple VT HEVC Hardware Encoder** - Only if you're recording locally and need smaller file sizes. Not great for streaming (compatibility issues)
- **Software encoders** - Avoid these on M1. They'll work the CPU harder with no real benefit
- **x264** - CPU-based, will thermal throttle your M1 and drain battery. Only use if hardware encoder fails for some reason

**Bottom line:** You've already got the best option selected. The M1's hardware H264 encoder is excellent - fast, efficient, and produces good quality at reasonable bitrates.

What are you planning to record/stream?\n