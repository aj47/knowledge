---
kind: note
id: product-heygen-avatar-iv-api
title: HeyGen Avatar IV API Details
context: search-only
updatedAt: 1772056669962
tags: product
createdAt: 1772056144636
summary: **Endpoint:** `POST https://api.heygen.com/v2/video/av4/generate` **Docs:** https://docs.heygen.com/reference/create-avatar-iv-video **Guide:** https://docs.heygen.com/docs/create-avatar-iv-videos
references: product/heygen-avatar-iv-api.md
---

# HeyGen Avatar IV API Details

## Two Approaches to Create Avatar Videos

### Option 1: Dedicated Avatar IV Endpoint (Newer)
**Endpoint:** `POST https://api.heygen.com/v2/video/av4/generate`
**Docs:** https://docs.heygen.com/reference/create-avatar-iv-video
**Guide:** https://docs.heygen.com/docs/create-avatar-iv-videos

**Required Parameters:**
- `image_key` – from Upload Asset API (upload a photo first)
- `video_title` – title of the video
- `script` – text the avatar will speak
- `voice_id` – from List All Voices (V2) API

**Optional Parameters:**
- `audio_url` – URL of custom audio file (alternative to script)
- `audio_asset_id` – HeyGen asset ID of audio file
- `custom_motion_prompt` – descriptive prompt to guide avatar gestures/expressions
- `enhance_custom_motion_prompt` – set to `true` to let AI refine motion

**Flow:**
1. Upload photo → get `image_key` (via Upload Asset API)
2. Pick a voice → get `voice_id` (via List All Voices V2)
3. POST to `/v2/video/av4/generate` with image_key, script, voice_id, video_title
4. Get `video_id` back → poll status via Retrieve Video Status API

---

### Option 2: V2 Generate Endpoint with Avatar IV flag
**Endpoint:** `POST https://api.heygen.com/v2/video/generate`
**Docs:** https://docs.heygen.com/reference/create-an-avatar-video-v2

Supports Avatar III and Avatar IV. For talking photos, set `use_avatar_iv_model` to enable Avatar IV motion engine.

**Request Body:**
```json
{
  "video_inputs": [
    {
      "character": {
        "type": "talking_photo",  // or "avatar"
        "talking_photo_id": "<id>",
        "avatar_style": "<motion prompt for AV4>"
      },
      "voice": {
        "type": "text",
        "input_text": "Hello world",
        "voice_id": "<voice_id>"
      }
    }
  ],
  "title": "My Video",
  "dimension": {
    "width": 1920,
    "height": 1080
  }
}
```

---

## Supporting APIs
- **Upload Asset:** Upload photo → get `image_key`
- **List All Avatars (V2):** Get available avatar IDs
- **List All Voices (V2):** Get available voice IDs
- **Retrieve Video Status:** Poll `video_id` for completion → get download URL

## Auth
Header: `X-API-KEY: <your-api-key>`
Get key from: HeyGen → Settings → API token

## Key Features of Avatar IV
- More expressive facial motion
- More natural head movement
- Custom motion prompts (guide gestures/expressions with text)
- Default resolution: 1080p
- Works with Talking Photos and uploaded images

## Also Available: Video Agent (Simplest)
**Endpoint:** `POST https://api.heygen.com/v1/video_agent/generate`
Just send a prompt and optionally an avatar_id:
```json
{
  "prompt": "A presenter explaining our product launch in 30 seconds",
  "config": {
    "avatar_id": "<optional>",
    "duration_sec": 30,
    "orientation": "landscape"
  }
}
```

## KEY FINDING: API Billing is SEPARATE from Creator Plan

**Confirmed from HeyGen Help Center:**
> "HeyGen API plans are **standalone plans** and serve as a **separate subscription** from our standard HeyGen plans and tiers. That means you can subscribe to an API plan regardless of whether you're on the Free, Creator, Pro, Business, or Enterprise tier."

### Current API Billing Model
- **Pay-As-You-Go** (new default): No monthly subscription needed. Purchase USD balance when you need it.
- Your Creator plan's 200 credits/month are for the **web platform only**, NOT the API.
- API has its own balance — `remaining_quota: 0` means $0 USD in the API wallet.

### API Pricing (Pay-As-You-Go)
- Photo Avatar Engine III: $0.0167/sec
- Photo Avatar Engine IV: $0.1/sec  
- Public Avatar Engine III: $0.0167/sec
- Public Avatar Engine IV: $0.1/sec
- Video Agent (Prompt to Video): $0.0333/sec

### What You Need To Do
1. Go to HeyGen API dashboard and add USD balance (pay-as-you-go)
2. A 10-second video would cost:
   - ~$0.17 with Photo Avatar III
   - ~$1.00 with Avatar IV
   - ~$0.33 with Video Agent
3. The `avatar_iv_free_credit: 2` and `video_agent_free_video: 3` may be one-time trial credits that require specific conditions
