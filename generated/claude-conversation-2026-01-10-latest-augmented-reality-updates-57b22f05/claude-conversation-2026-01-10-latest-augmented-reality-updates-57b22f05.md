---
kind: note
id: claude-conversation-2026-01-10-latest-augmented-reality-updates-57b22f05
updatedAt: 1768071510786
createdAt: 1768071487879
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 57b22f05-5a36-4666-9392-c09223ce5a93
created_at: 2026-01-10T18:58:07.879245Z
updated_at: 2026-01-10T18:58:30.786153Z
title: "Latest augmented reality updates"
---

# Latest augmented reality updates

## Metadata

- Claude conversation UUID: `57b22f05-5a36-4666-9392-c09223ce5a93`
- Created: `2026-01-10T18:58:07.879245Z`
- Updated: `2026-01-10T18:58:30.786153Z`
- Message count: 2
- Transcript chars extracted: 2411

## Claude summary

**Conversation Overview**

The user inquired about the latest developments with Augment Code (Auggie), an AI coding tool they've been researching for what appears to be educational content creation. Claude provided a comprehensive update on recent Auggie features based on prior research conducted around January 7th. The discussion covered significant updates in the v0.8-0.9 release cycle, including session management capabilities with `--resume` and `-c` flags for continuing work, prompt queuing functionality that allows stacking commands while the agent works, and specialized modes like Ask Mode using `#` or `/ask` prefixes for information queries without file modifications and Bash Mode with `!` prefix for inline shell commands.

The conversation highlighted Auggie's expanding integration capabilities through ACP (Agent Client Protocol) mode for use within editors like Zed, JetBrains, and NeoVim, plus SDK availability in both TypeScript and Python for automation workflows. Additional features discussed included sub-agents for parallel specialized work, sharing functionality through `/share` links, image support, custom command creation, and editor integration. The user demonstrated familiarity with technical terminology and appeared to be tracking Auggie's development closely, likely for creating instructional content. Claude offered to conduct fresh web searches for more recent updates beyond their previous research, indicating an ongoing collaborative effort to maintain current information about the platform's evolution.

## Quick excerpt

The user is asking about the latest developments with Augment Code (Auggie). Based on my memories, they're working on an AI coding course focused on Augment Code. Let me search for any recent conversations about Augment to see if there's more specific context about what they're looking for. ``` This block is not supported on your current device yet. ``` The user is asking about the latest with Augment Code (Auggie). Based on my search results, I found conversations from about 2-3 days ago where 

## Transcript

## human\n\nwhats the latest in augment\n
## assistant\n\nThe user is asking about the latest developments with Augment Code (Auggie). Based on my memories, they're working on an AI coding course focused on Augment Code. Let me search for any recent conversations about Augment to see if there's more specific context about what they're looking for.
```
This block is not supported on your current device yet.
```

The user is asking about the latest with Augment Code (Auggie). Based on my search results, I found conversations from about 2-3 days ago where we discussed Auggie CLI features. Let me provide a summary of what the latest features are based on that research.

The user is working on a video/course about Auggie and has been researching features. The key recent features mentioned include:
- ACP (Agent Client Protocol) - for using Auggie in other editors
- Session management (`--resume`, `-c`)
- Prompt queuing
- Ask mode (`#` or `/ask`)
- Bash mode (`!` prefix)
- Sub-agents
- /share links
- Image support
- Custom /commands
- Open in editor
- MCP logging
- SDK (TypeScript and Python)

I should give a quick summary of what we've covered recently and ask if they want me to check for any newer updates since those conversations.Based on our recent research, here's where Auggie stands:

**Core features that dropped recently (v0.8-0.9):**

**Session Management** — `augi --resume` to pick any session, `augi -c` to jump to last closed. Sessions stored in `.augment/sessions`.

**Prompt Queuing** — Stack prompts while agent works, edit with `/queue`.

**Ask Mode** — `#` or `/ask` limits tool calls for quick info without file changes.

**Bash Mode** — `!` prefix runs shell commands inline.

**Sub-agents** — Parallelize work with specialized agents that each get custom prompts. Configure in `.augment/agents/`.

**ACP Mode** — Use Auggie inside Zed, JetBrains, NeoVim via Agent Client Protocol (`auggie --acp`).

**SDK** — TypeScript (`@augmentcode/auggie-sdk`) and Python (`auggie-sdk`) for automation. Supports typed returns, custom functions, streaming.

**Other** — `/share` links, image support (`--image` flag or `/image`), custom `/commands` in `.augment/commands/`, `/editor` or `Ctrl+O` for complex prompts.

Want me to do a fresh web search to see if anything's shipped since we did that research on the 7th? Or are you looking for something specific like changelog updates, new model support, or roadmap items?\n