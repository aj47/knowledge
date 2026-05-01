---
kind: note
id: claude-conversation-2025-12-20-xiaomi-s-mimo-v2-flash-open-source-model-c5982e78
updatedAt: 1766271943493
createdAt: 1766271680412
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: c5982e78-810b-4579-89b2-4b00c7d3f9e4
created_at: 2025-12-20T23:01:20.412022Z
updated_at: 2025-12-20T23:05:43.493415Z
title: "Xiaomi's MIMO V2 Flash open source model"
---

# Xiaomi's MIMO V2 Flash open source model

## Metadata

- Claude conversation UUID: `c5982e78-810b-4579-89b2-4b00c7d3f9e4`
- Created: `2025-12-20T23:01:20.412022Z`
- Updated: `2025-12-20T23:05:43.493415Z`
- Message count: 2
- Transcript chars extracted: 9479

## Claude summary

**Conversation Overview**

The user requested creation of video assets for a TikTok video about Xiaomi's new MIMO V2 Flash AI coding model. They provided a detailed script highlighting key points including Xiaomi being the third largest smartphone manufacturer, their expansion beyond phones into cars, the release of their 309 billion parameter open-source coding model that's free on OpenRouter, its impressive 150 tokens per second speed, Xiaomi's poaching of a DeepSeek engineer, their $3 billion annual AI R&D investment, and comparisons to Grok41Fast. Claude successfully created a comprehensive asset package including six custom animated GIFs using techfren brand colors (neon green #00FF41 on black backgrounds), company logos (Xiaomi, DeepSeek, OpenRouter), stock images for b-roll footage, and a detailed asset summary document mapping each visual element to specific script moments and timestamps. The custom GIFs included specialized animations for key moments: a pulsing explosion effect for the "309 billion parameters" reveal, speed lines for the token speed claim, money rain for the R&D budget, rotating stars for the "#1 model" claim, sparkles for the "free" announcement, and an orange-themed Xiaomi brand intro. Claude also identified missing assets like the Xiaomi SU7 car image and Grok logo that would need manual collection due to web access limitations.

**Tool Knowledge**

The video-assets and slack-gif-creator skills were effectively combined to create professional TikTok assets. The slack-gif-creator's core utilities (gif_builder.py, frame_composer.py, easing.py) proved highly effective for creating custom branded animations. Specific technical approaches that worked well included using GIFBuilder with 480x480 dimensions at 15-20 fps for TikTok compatibility, implementing pulsing effects with math.sin() functions for dynamic text scaling, creating glow effects by drawing multiple offset text copies with decreasing alpha values, and using modulo operations for seamless looping animations. The frame_composer's create_gradient_background and draw_star functions integrated smoothly with PIL's ImageDraw for complex visual effects. For web asset collection, direct curl downloads from Wikimedia Commons and Unsplash worked reliably using specific URL patterns, while Playwright screenshot automation failed due to network tunnel limitations. The asset organization strategy of separating custom GIFs, logos, screenshots, and stock images into distinct folders with a comprehensive markdown summary proved effective for video editing workflow organization.

## Quick excerpt

The user wants me to create assets for a TikTok video about Xiaomi's new MIMO V2 Flash coding model. Let me first read the relevant skill files to understand how to approach this. I need to: 1. Read the video-assets skill 2. Read the slack-gif-creator skill 3. Create appropriate assets for the TikTok video Let me start by reading these skills. ``` This block is not supported on your current device yet. ``` Now let me read the slack-gif-creator skill as well: ``` This block is not supported on yo

## Transcript

## human\n\nuse 'video-assets' and slack-gif-creator to create assets for tiktok video;

" Xiaomi is the third biggest smartphone manufacturer in the world. They're pretty much like the Apple of China, but they make more than just phones, even cars. I don't hear anyone talking about this, but they just dropped the number one open source coding model. It's cheap and fast, and it's actually completely free right now on Open Router and their own provider. It's called MIMO V2 Flash. 309 billion parameter mixture of experts model with only 15 billion active parameters. That's how we can get it so fast. I've seen it around 150 tokens per second today. And we can see the AI talent wars aren't just happening in the US. Xiaomi actually poached one of DeepSeek's engineers last year. She helped build DeepSeek V2 and now she's leading the Mimo team at Xiaomi. I did some research and Xiaomi actually has over 1200 AI researchers now. I'm spending about 3 billion a year in AI and R&D. They're serious about AI. I might be streaming later trying this model. I think it's replaced my previous workhorse that was fast and cheap that was Grok41Fast. One benefit of the Grok model is it has a 2 million token context window so I'll be testing them both out and see how they compare Obviously a lot of people distrust in the benchmarks once you actually try to start using the model is when you find out yourself So if you see me live, come say hi!"\n
## assistant\n\nThe user wants me to create assets for a TikTok video about Xiaomi's new MIMO V2 Flash coding model. Let me first read the relevant skill files to understand how to approach this.

I need to:
1. Read the video-assets skill
2. Read the slack-gif-creator skill
3. Create appropriate assets for the TikTok video

Let me start by reading these skills.
```
This block is not supported on your current device yet.
```

Now let me read the slack-gif-creator skill as well:
```
This block is not supported on your current device yet.
```

Now I understand the skills. Let me analyze the script for asset opportunities and create a plan:

**Script Analysis - Asset Opportunities:**

1. **Xiaomi mention** → Need Xiaomi logo
2. **"Apple of China"** → Could use Apple logo comparison or GIF
3. **"even cars"** → Xiaomi SU7 car image would be cool
4. **"number one open source coding model"** → Mind blown GIF / celebration
5. **"cheap and fast"** → Speed GIF
6. **"free right now on Open Router"** → Screenshot of OpenRouter
7. **"MIMO V2 Flash"** → Could search for model card/benchmark screenshots
8. **"309 billion parameters"** → Mind blown / impressive stats GIF
9. **"150 tokens per second"** → Speed/fast GIF
10. **"AI talent wars"** → Could be interesting visual
11. **"poached DeepSeek engineer"** → DeepSeek logo
12. **"1200 AI researchers"** → Stats/numbers visual
13. **"3 billion a year in AI and R&D"** → Money rain GIF
14. **"Grok41Fast comparison"** → xAI/Grok logo
15. **"2 million token context window"** → Impressive stat

Let me create the assets. I'll:
1. Take screenshots of relevant websites (OpenRouter for MIMO, HuggingFace if available, benchmarks)
2. Download relevant logos (Xiaomi, DeepSeek, xAI/Grok)
3. Download appropriate GIFs from Giphy
4. Create a custom animated GIF for the "mind blown" moment about the stats

Let me start by creating the directory structure and gathering assets.Let me analyze the script and gather assets for this Xiaomi MIMO V2 Flash video. I'll collect GIFs, screenshots, and logos based on the key moments in the script.
```
This block is not supported on your current device yet.
```

Now let me gather the various assets. I'll start with screenshots of key websites, then logos, then GIFs.
```
This block is not supported on your current device yet.
```

Now let me take screenshots of key websites mentioned in the script - OpenRouter for MIMO, and search for benchmark pages.Now let me capture screenshots of the key websites mentioned:
```
This block is not supported on your current device yet.
```

The playwright screenshots aren't working due to tunnel connection issues. Let me try using web_fetch to get information and potentially download images directly. Let me also search for logos and GIFs using web search.Let me try a different approach - I'll search for and download the logos and create custom visuals:
```
This block is not supported on your current device yet.
```

Let me search for DeepSeek logo and xAI/Grok logo as well, and also search for some GIF resources or create custom animated GIFs.
```
This block is not supported on your current device yet.
```

Good, I found sources for DeepSeek logo. Now let me search for Grok/xAI logo and then search for MIMO V2 information to capture the model details.
```
This block is not supported on your current device yet.
```

Now let me search for the Xiaomi SU7 car image and also search for MIMO V2 Flash model information. Then I'll create custom GIFs and download assets.Now let me download the logos and search for more specific assets:
```
This block is not supported on your current device yet.
```

Let me check the directory structure and fix the path.
```
This block is not supported on your current device yet.
```

Now let me download more logos and then create some custom GIFs for the video.
```
This block is not supported on your current device yet.
```

Now let me search for Xiaomi SU7 car images and create some custom animated GIFs based on the slack-gif-creator skill. I'll create GIFs for key moments like "mind blown" for the stats, "speed" for the fast tokens, and "money" for the $3 billion R&D spend.
```
This block is not supported on your current device yet.
```

Now let me create custom animated GIFs for the video. Based on the script, I need:

1. Mind blown / Impressed stats GIF - for "309 billion parameters" and other big numbers
2. Speed/Fast GIF - for "150 tokens per second"
3. Money rain GIF - for "$3 billion a year in R&D"
4. Number one / Champion GIF - for "number one open source coding model"
5. Free / Celebration GIF - for "completely free right now"

Let me use the slack-gif-creator skill's utilities to create these.Now let me create some custom animated GIFs for the key moments in your video. I'll create GIFs optimized for TikTok:
```
This block is not supported on your current device yet.
```

Let me view the core utilities to understand how to use them, then create the GIFs.
```
This block is not supported on your current device yet.
```

Now let me view the frame_composer and easing modules to understand how to create animated graphics.
```
This block is not supported on your current device yet.
```

Now let me view the easing module for smooth animations:
```
This block is not supported on your current device yet.
```

Now I have all the utilities I need. Let me create custom animated GIFs for the key moments in the video:

1. **Mind Blown GIF** - for "309 billion parameters" and big stats
2. **Speed/Zoom GIF** - for "150 tokens per second" and speed claims  
3. **Money Rain GIF** - for "$3 billion a year in R&D"
4. **Number One GIF** - for "#1 open source coding model"
5. **Free/Party GIF** - for "completely free right now"

Let me create these GIFs with the techfren brand colors (neon green #00FF41 on black #000000).Now let me create custom branded GIFs for the key moments in your video:
```
This block is not supported on your current device yet.
```

Now let me run the script to create the GIFs:
```
This block is not supported on your current device yet.
```

Excellent! Now let me also create a summary/asset list document and download some stock images for b-roll. Let me also try to fetch some images from the web that would be useful.Now let me download some stock images for b-roll and create an asset summary:
```
This block is not supported on your current device yet.
```

Now let me create a comprehensive asset summary document that explains what each asset is for and maps them to the script moments.
```
This block is not supported on your current device yet.
```

Now let me copy everything to the outputs folder and provide a summary of all the assets created.
```
This block is not supported on your current device yet.
```

Let me present the files to the user. I'll show them the key files they can use.
```
This block is not supported on your current device yet.
```

I've created all the assets. Let me provide a summary to the user.Done! I've created a complete asset package for your Xiaomi MIMO V2 Flash TikTok video. Here's what you've got:

## Custom Animated GIFs (techfren brand colors)

| GIF | Use For | Duration |
|-----|---------|----------|
| **number-one.gif** | "#1 open source coding model" claim | 1.5s |
| **mind-blown-309b.gif** | "309 billion parameters" reveal | 1.5s |
| **speed-150tps.gif** | "150 tokens per second" speed claim | 1.2s |
| **money-3b-rd.gif** | "$3 billion a year in R&D" | 2.0s |
| **free-celebrate.gif** | "completely free right now" | 1.6s |
| **xiaomi-intro.gif** | Opening brand intro (Xiaomi orange) | 1.6s |

## Logos
- **Xiaomi logo** (2021 version)
- **DeepSeek logo** (for the talent poaching mention)
- **OpenRouter logo**

## Stock Images
- AI technology visual
- Coding screen b-roll
- Speed motion blur

## Asset Summary
The markdown doc maps each asset to the exact moment in your script for easy editing.

**Missing that you may want to manually grab:**
- Xiaomi SU7 car image for "even cars"
- xAI/Grok logo for the Grok41Fast comparison
- OpenRouter MIMO page screenshot\n