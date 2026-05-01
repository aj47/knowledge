---
kind: note
id: claude-conversation-2026-01-26-skills-sh-installation-location-e6467e20
updatedAt: 1769463107126
createdAt: 1769463030099
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: e6467e20-b3a9-4113-97ba-7d70ebeb47b4
created_at: 2026-01-26T21:30:30.099585Z
updated_at: 2026-01-26T21:31:47.126467Z
title: "Skills.sh installation location"
---

# Skills.sh installation location

## Metadata

- Claude conversation UUID: `e6467e20-b3a9-4113-97ba-7d70ebeb47b4`
- Created: `2026-01-26T21:30:30.099585Z`
- Updated: `2026-01-26T21:31:47.126467Z`
- Message count: 4
- Transcript chars extracted: 3771

## Claude summary

**Conversation Overview**

The user initially asked about where skills are installed from "skills.sh" but clarified they were referring to "skill.sh" (not "skills.sh"), which is Vercel's newly launched platform described as "npm for AI agents." Claude first misunderstood the question and provided information about the local skills directory structure at `/mnt/skills/`, showing various public and example skills available in the current environment including document manipulation tools, design utilities, and development helpers.

Once the user clarified they meant Vercel's skill.sh platform, Claude provided comprehensive information about installation locations for skills installed via `npx add-skill`. The platform supports multiple AI agents with different installation paths: Claude Code uses `.claude/skills/` for project-level or `~/.claude/skills/` for global installation, while other agents like Cursor, Codex, Gemini, and Kiro have their respective directories. Claude noted that the CLI auto-detects installed agents and copies skills to appropriate paths, with options for global installation using the `-g` flag. The conversation included practical examples of installing skills from vercel-labs/agent-skills and mentioned the platform's rapid adoption with over 20K installs within six hours of launch, with companies like Stripe and Remotion already contributing their own skills.

## Quick excerpt

The user is asking about where skills are installed from a skills.sh script. This seems to be related to their development work, possibly with their SpeakMCP project or some other tool they're working on. Let me search their past conversations to find context about this skills.sh file. ``` This block is not supported on your current device yet. ``` The search results don't show specific information about a "skills.sh" file installation location. The user is likely referring to the skills system 

## Transcript

## human\n\nwhere are the skills installed from skills.sh\n
## assistant\n\nThe user is asking about where skills are installed from a skills.sh script. This seems to be related to their development work, possibly with their SpeakMCP project or some other tool they're working on. Let me search their past conversations to find context about this skills.sh file.
```
This block is not supported on your current device yet.
```

The search results don't show specific information about a "skills.sh" file installation location. The user is likely referring to the skills system that's mentioned in my system prompt - the skills available at /mnt/skills/. Let me check what's in that directory to understand the skills system better.The search results don't show a specific "skills.sh" file. However, based on the context of my environment, the skills are installed at:

- **Public skills:** `/mnt/skills/public/`
- **Private skills:** `/mnt/skills/private/`
- **Example skills:** `/mnt/skills/examples/`
- **User skills:** `/mnt/skills/user/`

Let me check what's actually available:
```
This block is not supported on your current device yet.
```

The user might be asking about a different skills.sh file - perhaps from one of their projects like SpeakMCP or Clawd.bot. Let me search for more specific context about skills.sh in their conversations.Here's what's installed in the skills directory:

**Public skills** (`/mnt/skills/public/`):
- `docx` - Word document creation/editing
- `pdf` - PDF manipulation
- `pptx` - PowerPoint presentations
- `xlsx` - Excel spreadsheets
- `frontend-design` - Web UI design
- `product-self-knowledge` - Anthropic product info

**Example skills** (`/mnt/skills/examples/`):
- `algorithmic-art` - Generative art
- `brand-guidelines` - Brand consistency
- `canvas-design` - Visual design
- `doc-coauthoring` - Document collaboration
- `internal-comms` - Communication templates
- `mcp-builder` - MCP server creation
- `skill-creator` - Building new skills
- `slack-gif-creator` - GIF generation
- `theme-factory` - Theme creation
- `web-artifacts-builder` - Web artifact creation

Were you asking about a different `skills.sh` script—maybe something from your SpeakMCP or Clawd.bot projects?\n
## human\n\nshill.sh is a website by vercel\n
## assistant\n\nThe user is clarifying that "skill.sh" (not "skills.sh" as I interpreted) is a website by Vercel. Let me search for information about this.
```
This block is not supported on your current device yet.
```

Now I understand - the user is asking about skills.sh, which is Vercel's new "npm for AI agents" platform launched on January 21, 2026. Let me provide a clear answer about where skills from skills.sh get installed.Ah, **skills.sh** - Vercel's new "npm for AI agents" that just launched on January 21st! 

Skills installed via `npx add-skill` go to different locations depending on your agent:

**For Claude Code:**
- Project-level: `.claude/skills/` in your repo
- Global: `~/.claude/skills/`

**For Claude.ai (this environment):**
- `/mnt/skills/user/{skill-name}/`

**For other agents:**
- Cursor: `.cursor/skills/`
- Codex: `.codex/skills/`
- Gemini: `.Gemini/skills/`
- Kiro: `.kiro/skills/`

The CLI auto-detects which agents you have installed and copies skills to the appropriate paths. Use `-g` or `--global` for global installation instead of project-level.

**Quick install example:**
```bash
# Install Vercel's React best practices
npx add-skill vercel-labs/agent-skills

# Install specific skill globally for Claude Code
npx add-skill vercel-labs/agent-skills --skill frontend-design -g -a claude-code
```

The skills follow a standard format with a `SKILL.md` file and optional `scripts/` directory. Pretty cool that it hit 20K+ installs within 6 hours of launch - Stripe and Remotion already shipped their own skills for it.\n