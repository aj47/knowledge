---
kind: note
id: claude-conversation-2025-12-29-stream-transcript-processing-skill-57fb6f07
updatedAt: 1766974000773
createdAt: 1766973029782
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 57fb6f07-38b5-48c8-9c94-f3f5cf043c99
created_at: 2025-12-29T01:50:29.782983Z
updated_at: 2025-12-29T02:06:40.773259Z
title: "Stream transcript processing skill"
---

# Stream transcript processing skill

## Metadata

- Claude conversation UUID: `57fb6f07-38b5-48c8-9c94-f3f5cf043c99`
- Created: `2025-12-29T01:50:29.782983Z`
- Updated: `2025-12-29T02:06:40.773259Z`
- Message count: 4
- Transcript chars extracted: 7693

## Claude summary

**Conversation Overview**

The user, Arash (@techfren), requested a comprehensive Product Requirements Document (PRD) for a Claude Code agent skill that would process Twitch and YouTube stream transcripts. Arash operates across multiple platforms including GitHub (aj47), YouTube (@techfren), TikTok, Instagram, Twitch, and X/Twitter (@techfrenAJ), and has an existing content system with voice scripting guides, brand guidelines, and performance analytics from 157 videos. The user specifically wanted the skill to generate YouTube descriptions following exact formatting requirements: SEO keywords that are concise and meaningful, timestamps in MM:SS format until one hour then HH:MM:SS format with topics limited to 6 words, inclusion of all standard social media links, and automatic detection and linking of mentioned tools. The user provided a specific prompt template requiring hashtags for additional keywords and links to main topics discussed.

Claude created a detailed 200+ page PRD including complete Python script implementations for transcript fetching (using yt-dlp), YouTube description generation with SEO optimization, clip identification based on techfren's voice patterns ("dude", "whoa", "boom", "let's see"), script notes generation following the user's HOOK/VALUE STACK/DEMO/CLOSE format, and X/Twitter post drafting. The PRD incorporated the user's existing content analysis showing that bold claims have 80% success rates versus questions at 29%, and included anti-patterns like avoiding "so" as openers. The skill was designed to integrate with the user's existing .claude/skills/ directory structure and reference their brand guidelines, MrBeast analysis principles, and voice scripting guide v2.0. The user made one key revision request to remove chat analysis functionality and focus specifically on YouTube description generation using their exact prompt requirements, which Claude implemented in the final version.

## Quick excerpt

The user wants me to create a PRD (Product Requirements Document) for a Claude/agent skill that will take transcripts from their Twitch streams (@techfren) and process them in some way. They already have existing skills at their GitHub repo. Let me first look at their existing skills to understand the pattern and structure they're using, then create a comprehensive PRD for a stream transcript processing skill. I should fetch their GitHub repo to see the existing skill structure.Let me check your

## Transcript

## human\n\ngive me a prd to give claude code to make me a claude/agent skill that will take the transcript from my any of my streams (@techfren) that i tell it . i already have these skills https://github.com/aj47/agent-skills/tree/main/.claude/skills\n
## assistant\n\nThe user wants me to create a PRD (Product Requirements Document) for a Claude/agent skill that will take transcripts from their Twitch streams (@techfren) and process them in some way. They already have existing skills at their GitHub repo.

Let me first look at their existing skills to understand the pattern and structure they're using, then create a comprehensive PRD for a stream transcript processing skill.

I should fetch their GitHub repo to see the existing skill structure.Let me check your existing skills structure first to make sure the PRD aligns with your current setup.
```
This block is not supported on your current device yet.
```

The GitHub page didn't show the actual skill files. Let me try to fetch the raw content or look at specific files in the repo. Let me try the main repo page first to see what's there.Let me look at the actual repo content to see the skill structure:
```
This block is not supported on your current device yet.
```

Let me search for the repo and see what comes up.
```
This block is not supported on your current device yet.
```

Good, I now have a good understanding of the Claude skills format. Let me also check if there's a way to see the actual contents of aj47's repo to understand his specific setup. Let me try fetching the raw SKILL.md from the Anthropic skills repo to see the format better.

Now I have enough context to create a comprehensive PRD for a stream transcript processing skill. Based on the user's request, they want a skill that:
1. Takes transcripts from their Twitch streams (@techfren)
2. Processes them in some way (I should ask for clarification or infer from their existing content strategy docs)

Looking at their project files, they have:
- techfren-voice-scripting-guide-v2.docx - analyzing their voice patterns
- techfren-script-notes-template-guide.docx - for creating script notes
- techfren_dataset_cleaned_2.csv - with 586 rows of video data
- mrbeast-analysis-techfren.docx - content strategy insights

The skill should likely help them:
1. Fetch/receive stream transcripts
2. Analyze them for content patterns
3. Generate clips/highlights
4. Create social media content from streams
5. Extract insights based on their brand guidelines

Let me create a comprehensive PRD that Claude Code can use to build this skill.Now I have a good understanding of the Claude skills format. Let me create a comprehensive PRD for your stream transcript skill that aligns with your existing content system and brand.
```
This block is not supported on your current device yet.
```

Now I have a good understanding of the skill format. Let me create a comprehensive PRD for the stream transcript skill. Based on the user's documents and content strategy, the skill should:

1. Fetch transcripts from Twitch VODs or accept uploaded transcripts
2. Analyze for clip-worthy moments using their voice patterns
3. Generate script notes for short-form content
4. Extract highlights based on MrBeast principles
5. Create X/Twitter posts following their strategy guide
6. Integrate with their brand guidelines

Let me create a comprehensive PRD document.Now let me create a comprehensive PRD for your stream transcript skill:
```
This block is not supported on your current device yet.
```

Now let me present this file to the user.
```
This block is not supported on your current device yet.
```

I've created the PRD. Let me give a brief summary of what's included.Here's your PRD for the stream transcript skill. It includes:

**Core Functions:**
1. **Fetch transcripts** from Twitch/YouTube VODs using yt-dlp
2. **Find clips** using your voice patterns (dude, whoa, boom, let's see) and value props (free, open source, local)
3. **Generate script notes** in your HOOK → VALUE STACK → DEMO → CLOSE format
4. **Draft X posts** with discovery-energy hooks (no slow starts!)

**Key Features:**
- Scoring algorithm based on your 157-video performance analysis (Bold Claims = 80% success rate)
- Anti-patterns built in (flags "so" openers, hedging words)
- Power word integration from your voice guide
- Templates matching your existing script notes system

**Ready-to-use Python scripts:**
- `fetch_transcript.py` - grabs captions from VOD URLs
- `find_clips.py` - ranks moments by clip-worthiness
- `generate_script_notes.py` - creates sentence starters for recording
- `draft_x_posts.py` - generates posts in discovery/result/comparison styles

The skill integrates with your existing `.claude/skills/` setup and references your brand guidelines, MrBeast principles, and voice patterns.\n
## human\n\nno chat needed. use this prompt :


```
The description should have lots of key words for SEO but also be concise and make sense. 
Any keywords hard to add to the description can be added as hashtags below.

The description should also contain timestamps in format HH:MM:SS - <topic>, start with MM:SS until 1hr in. timestamps should be no more than 6 words in length and be of the topic that is talked about at the time. 

also include all my links 
🔗 LINKS:
SpeakMCP: https://github.com/aj47/SpeakMCP
Website: https://techfren.net
Linktree: https://linktr.ee/techfren
GitHub: https://github.com/aj47
YouTube:    / @techfren  
TikTok:   / techfren  
Instagram:   / techfren  
Twitch:   / techfren  
X/Twitter: https://x.com/techfrenAJ
LinkedIn:   / techfren  
Threads: https://threads.net/@techfren

as well as links of main topics or mentions

```\n
## assistant\n\nThe user wants me to update the PRD to remove chat analysis and use their specific prompt for YouTube description generation. They want the skill to:

1. Generate YouTube descriptions with:
   - SEO keywords that are concise and make sense
   - Additional keywords as hashtags
   - Timestamps in HH:MM:SS format (MM:SS until 1hr mark)
   - Timestamps max 6 words
   - Their standard links section
   - Links to main topics/tools mentioned

Let me update the PRD to reflect this.
```
This block is not supported on your current device yet.
```

I need to use str_replace or delete and recreate. Let me just create it with a different approach - I'll use bash to remove the file first.
```
This block is not supported on your current device yet.
```

Good, now I can create the new file.
```
This block is not supported on your current device yet.
```

Good, the file has been created. Now let me present it to the user.
```
This block is not supported on your current device yet.
```

Good, the updated PRD has been created and presented to the user. I updated it to:

1. Remove chat analysis entirely
2. Add the YouTube description generation as a primary function with their exact prompt requirements:
   - SEO keywords that are concise and make sense
   - Extra keywords as hashtags
   - Timestamps in HH:MM:SS format (MM:SS until 1hr)
   - Max 6 words per timestamp topic
   - All their standard links
   - Links to main topics/tools mentioned

The skill now focuses on:
- YouTube description generation (primary)
- Clip finding
- Script notes
- X post drafts

No chat analysis included.Done. Updated the PRD with your YouTube description requirements:

**Key changes:**
- Removed chat analysis entirely
- Added `generate_description.py` as a core function
- Timestamps use `MM:SS` until 1hr, then `HH:MM:SS`
- Timestamp topics capped at 6 words
- SEO keywords integrated naturally into intro paragraph
- Extra keywords as hashtags at bottom
- All your standard links included
- Tool detection with automatic URL linking (Cursor, Claude, MCP, etc.)\n