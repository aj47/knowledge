---
kind: note
id: claude-conversation-2026-01-07-clawdbot-system-prompt-0c11e7cb
updatedAt: 1767753842739
createdAt: 1767753459185
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 0c11e7cb-3e9f-4a10-8a1a-0413f33e5d41
created_at: 2026-01-07T02:37:39.185805Z
updated_at: 2026-01-07T02:44:02.739034Z
title: "Clawdbot system prompt"
---

# Clawdbot system prompt

## Metadata

- Claude conversation UUID: `0c11e7cb-3e9f-4a10-8a1a-0413f33e5d41`
- Created: `2026-01-07T02:37:39.185805Z`
- Updated: `2026-01-07T02:44:02.739034Z`
- Message count: 6
- Transcript chars extracted: 13291

## Claude summary

**Conversation Overview**

The user inquired about Clawdbot's system prompt architecture and session management, then requested a comparison with their own project, SpeakMCP (aj47/speakmcp). Through web research, Claude discovered that Clawdbot uses a multi-file prompt injection system rather than a monolithic system prompt, with files like AGENTS.md (operating instructions), SOUL.md (AI identity), USER.md (user context), and memory files for continuity. Clawdbot runs on Pi agent runtime (not Claude Code) and uses a sophisticated session architecture where all direct chats collapse to a single session key across multiple messaging platforms (WhatsApp, Telegram, Discord), with autocompaction handling Claude's 200k token context window.

The comparison revealed fundamental architectural differences between the projects. SpeakMCP is a voice-first desktop application using Electron, Rust, and React that triggers via hotkeys and injects text universally into any application, functioning as a stateless MCP executor. Clawdbot operates as an always-on AI assistant with persistent identity through messaging platforms, featuring proactive behaviors via heartbeat systems and file-based memory persistence. SpeakMCP's key differentiator is universal text injection via Rust, while Clawdbot excels in session continuity, proactive monitoring, and maintaining AI personality through its "soul document" system. Both projects support MCP integration but approach it differently - SpeakMCP as a direct MCP client and Clawdbot through Pi's tooling system.

**Tool Knowledge**

Web search and fetch operations revealed that Clawdbot documentation is distributed across clawdbot.com and GitHub repositories. The main documentation site at clawdbot.com contains template files and configuration guides, while specific implementation details require searching for terms like "Pi agent runtime," "autocompaction," and "sessions.json" to find relevant technical information. When researching agent frameworks, searching for specific runtime names like "Pi" combined with author handles like "@badlogic" yields more precise results than generic terms. For SpeakMCP research, combining the repository identifier "aj47/speakmcp" with technical terms like "MCP client" and "voice" effectively locates project-specific information and distinguishes it from similar voice-MCP projects in the ecosystem.

## Quick excerpt

The user is asking about the system prompt for "clawdbot" at clawd.bot. I should search for this to find information about it. ``` This block is not supported on your current device yet. ``` The search results give me some information about Clawdbot (Peter Steinberger's AI assistant project), but I didn't find the actual full system prompt. Let me search more specifically or try to fetch the clawd.bot website to see if they have the system prompt documented there. The search results mention a "s

## Transcript

## human\n\nwhats clawdbot system prompt look like clawd.bot\n
## assistant\n\nThe user is asking about the system prompt for "clawdbot" at clawd.bot. I should search for this to find information about it.
```
This block is not supported on your current device yet.
```

The search results give me some information about Clawdbot (Peter Steinberger's AI assistant project), but I didn't find the actual full system prompt. Let me search more specifically or try to fetch the clawd.bot website to see if they have the system prompt documented there. The search results mention a "soul document" and there are references to system prompt configurations.

Let me try fetching the GitHub file that contains the system prompt details, or search for the actual soul document.
```
This block is not supported on your current device yet.
```

I found some good info. There's a reference to SOUL.md templates on clawd.bot/clawdbot.com. Let me fetch the actual template pages to see the system prompt structure. The docs mention templates for AGENTS.md and SOUL.md.
```
This block is not supported on your current device yet.
```

Let me try to find the SOUL.md template through searching or fetching a page that was in the results.
```
This block is not supported on your current device yet.
```

Good, I found the AGENTS.md template. Now let me try to find the SOUL.md template to get the full picture of the system prompt structure. Let me search for it.
```
This block is not supported on your current device yet.
```

I see references to Templates: SOUL in the docs. Let me try to fetch the SOUL template page directly from clawd.bot.
```
This block is not supported on your current device yet.
```

Let me search for the raw GitHub URL or find another way to get the SOUL.md template content.
```
This block is not supported on your current device yet.
```

Let me fetch soul.md to get more details about this concept and any example content.
```
This block is not supported on your current device yet.
```

This is helpful context but not the actual SOUL.md template. Let me fetch the GitHub raw version of the template files. I see there's a reference to templates. Let me look for the clawdbot templates directly.
```
This block is not supported on your current device yet.
```

Let me try to fetch the clawdbot.com docs directly to find the SOUL template page.
```
This block is not supported on your current device yet.
```

Good, I found the docs site. I can see there's a templates section. Let me search for the SOUL.md template specifically in the templates section.
```
This block is not supported on your current device yet.
```

Let me search specifically for the SOUL template page URL.
```
This block is not supported on your current device yet.
```

Let me try to search for the SOUL.md template on the clawdbot docs or the raw GitHub page.
```
This block is not supported on your current device yet.
```

The searches aren't returning the raw SOUL.md template from the clawdbot repo. Let me try fetching the GitHub raw content directly using a search for the raw URL.Based on my research, here's what the Clawdbot system prompt structure looks like:

**Clawdbot** (built by Peter Steinberger at clawd.bot / clawdbot.com) uses a **multi-file prompt injection system** rather than a single monolithic system prompt. The AI agent (using Pi as the runtime) reads several markdown files from a workspace directory (default: `~/clawd`):

## Injected Prompt Files

1. **AGENTS.md** - The operating instructions. Key sections include:
   - Read SOUL.md first (identity)
   - Read USER.md (who you're helping)  
   - Read memory files for continuity
   - Safety rules (no data exfiltration, ask before destructive commands)
   - External vs internal action permissions
   - Group chat behavior guidelines
   - Heartbeat system (proactive check-ins for email, calendar, weather)
   - Platform-specific formatting (no markdown tables in Discord/WhatsApp)

2. **SOUL.md** - The AI's identity document. Defines "who it chooses to be" - values, boundaries, relationship with humans. Provides continuity of self across sessions.

3. **TOOLS.md** - Local tool configuration notes (camera names, SSH details, voice preferences)

4. **USER.md** - Information about the human being helped

5. **memory.md** + **memory/YYYY-MM-DD.md** - Long-term facts and daily notes for continuity

## Example from Peter's Original Clawd Setup

From the warelay/clawd.md docs, here's a snippet of what gets injected:

```
You run 24/7 on his Mac via Claude Code, receiving messages through WhatsApp.
**Your home:** /Users/steipete/clawd - store memories, notes, and files here.
Read peter.md and memory.md at session start to load context.

**Your powers:**
- Full shell access on the Mac
- MCPs: Gmail, Google Calendar, Obsidian, GitHub, Chrome DevTools
- Peekaboo: screenshots, UI automation, clicking, typing
- Spotify control, system audio, text-to-speech

**Your style:**
- Concise (WhatsApp ~1500 char limit)
- Direct and useful, not sycophantic
- Proactive during heartbeats
- You have personality - you're Clawd, not "an AI assistant"

**Heartbeats:** Every 10 min you get "HEARTBEAT /think:high". 
Reply "HEARTBEAT_OK" if nothing needs attention.
```

The full templates are available at clawdbot.com/templates/AGENTS.html and the concept of the "soul document" is explored at soul.md. It's a modular approach where identity persists through files rather than a static system prompt.\n
## human\n\nhow does continuing conversations go. do they all go through the same agent, is it always claude code. when do new sessions or compactions happen\n
## assistant\n\nThe user is asking about how Clawdbot handles conversation continuity - sessions, compaction, which agent handles things, etc. Let me search for more specific information about this.
```
This block is not supported on your current device yet.
```

That didn't give me the actual content, just the GitHub page wrapper. Let me search for more specific information about sessions and compaction.
```
This block is not supported on your current device yet.
```

Good, I found some info about the session management. Let me fetch that Clawdbot session page for more details.
```
This block is not supported on your current device yet.
```

Now I have good info on session management. Let me search for more about which agent is used (Pi) and the autocompaction specifically for clawdbot.
```
This block is not supported on your current device yet.
```

I now have a good understanding of how Clawdbot handles sessions and compaction. Let me also search for more info about Pi specifically.
```
This block is not supported on your current device yet.
```

Now I have a comprehensive understanding of how Clawdbot works. Let me summarize the session and conversation continuity for the user.Here's how conversations and sessions work in Clawdbot:

## Agent Runtime

**Clawdbot uses Pi** (by Mario Zechner / @badlogic) as its agent runtime, not Claude Code directly. Pi is a minimal coding agent harness that runs in RPC mode and supports multiple model providers. Legacy support for Claude Code, Codex, Gemini, and Opencode was removed — Pi is now the only coding-agent path.

The recommended model config is `anthropic/claude-opus-4-5` with high thinking enabled.

## Session Architecture

**All direct chats collapse to a single "main" session key.** Whether you message via WhatsApp, Telegram, Discord, or WebChat, they all route to the same conversation context. These act as "transports into the same conversation."

- **Group chats** get isolated keys like `surface:group:<id>` or `surface:channel:<id>`
- **Cron jobs** use `cron:<job.id>`
- **Webhooks** use `hook:<uuid>`

Session state lives on the **gateway host** (the "master" Clawdbot):
- Store: `~/.clawdbot/sessions/sessions.json`
- Transcripts: `~/.clawdbot/sessions/<SessionId>.jsonl`

## When New Sessions Start

1. **Idle timeout** — `session.idleMinutes` (default 60 minutes). After idle, the next message mints a new `sessionId`
2. **Manual reset** — Send `/new` or `/reset` in chat to start fresh
3. **Delete and recreate** — Remove keys from the store or delete the JSONL transcript

## Compaction (Autocompaction)

Clawdbot uses Claude's **200k token context window** with **autocompaction** — older conversation gets summarized when approaching the limit. This happens automatically when context fills up.

The FAQ advises:
- Keep `AGENTS.md` focused, not bloated
- Use `/new` to reset when context gets stale
- Use `qmd` search tools for large memory collections rather than loading everything
- Send `/status` in chat to see how much context is currently used

There's no exposed configuration for autocompact thresholds in Clawdbot — it inherits Pi's (and by extension, the underlying model's) behavior.

## Session Continuity Tips

The AGENTS.md template instructs the AI to **write important things to files** since "mental notes don't survive session restarts." Memory persists through:
- `memory.md` — long-term facts
- `memory/YYYY-MM-DD.md` — daily notes
- SOUL.md, USER.md — identity and user context\n
## human\n\ncompare this with my project aj47/speakmcp\n
## assistant\n\nThe user wants me to compare Clawdbot with their project SpeakMCP (aj47/speakmcp). I know from the memory that they're working on SpeakMCP, a voice-controlled tool for agent delegation. Let me search for more details about their project to make a proper comparison.
```
This block is not supported on your current device yet.
```

Now I have good information about SpeakMCP. Let me compare it with Clawdbot:

SpeakMCP:
- Voice-to-text with Ctrl hotkey
- MCP agent mode with Ctrl+Alt
- Electron + Rust + React
- Works with any text-input application (universal)
- OpenAI/Groq for speech recognition
- Multiple LLM providers
- MCP client for tool execution
- Desktop app (cross-platform)
- Fork of Whispo
- 19 stars, 8 forks

Clawdbot:
- WhatsApp/Telegram/Discord/iMessage messaging gateway
- Pi agent runtime (not Claude Code)
- File-based memory system (SOUL.md, AGENTS.md, memory.md)
- Multi-surface inbox
- Heartbeat system for proactive check-ins
- Gateway architecture
- macOS/iOS/Android apps
- Voice wake + push-to-talk on macOS/iOS
- Session management with autocompaction
- 2k+ stars

Key differences to highlight:
1. Input modality: SpeakMCP is voice-first desktop hotkey, Clawdbot is messaging-first (WhatsApp etc)
2. Architecture: SpeakMCP is standalone desktop app, Clawdbot is gateway + multi-surface
3. Voice: SpeakMCP does STT as primary input, Clawdbot has voice as optional feature on macOS/iOS
4. MCP: Both support MCP, but different approaches
5. Memory/Sessions: Clawdbot has sophisticated file-based memory, SpeakMCP is more stateless per-invocation
6. Agent runtime: Clawdbot uses Pi, SpeakMCP directly calls LLM providersHere's a comparison of **SpeakMCP** vs **Clawdbot**:

| Aspect | **SpeakMCP** | **Clawdbot** |
|--------|-------------|--------------|
| **Primary Input** | Voice-first (hotkey-triggered) | Messaging-first (WhatsApp/Telegram/Discord) |
| **Architecture** | Standalone desktop app (Electron + Rust) | Gateway server + multi-surface clients |
| **Voice Approach** | STT as primary input (Ctrl to record) | Voice wake/push-to-talk as optional feature (macOS/iOS apps) |
| **Agent Runtime** | Direct LLM API calls (OpenAI, Groq, Gemini) | Pi agent (custom runtime by @badlogic) |
| **MCP Integration** | Full MCP client built-in | Skills system + tools via Pi |
| **Session/Memory** | Stateless per-invocation | File-based memory (SOUL.md, AGENTS.md, memory/) with autocompaction |
| **Identity System** | None (tool executor) | "Soul document" + workspace files for AI personality |
| **Text Injection** | Universal (injects into any app via Rust) | Responds in messaging platforms |
| **Proactive** | No (user-triggered only) | Yes (heartbeat system checks email/calendar) |
| **Stars** | 19 | ~2k |

## Key Philosophical Differences

**SpeakMCP** is a **voice-triggered MCP executor** — you hold a hotkey, speak a command, and it executes tools then injects text. It's stateless and universal (works with any text field).

**Clawdbot** is an **always-on AI assistant with persistent identity** — it lives in messaging apps, remembers context across sessions, has proactive behaviors (heartbeats), and maintains a "soul" through markdown files.

## Where SpeakMCP Could Learn from Clawdbot

1. **Session continuity** — Adding optional conversation history/memory between invocations
2. **Proactive mode** — Scheduled check-ins or background monitoring
3. **Identity/personality** — A SOUL.md equivalent for customizing assistant behavior
4. **Multi-transport** — Supporting other surfaces beyond desktop (messaging, mobile)

## Where Clawdbot Could Learn from SpeakMCP

1. **Universal text injection** — The ability to output to *any* focused application
2. **Lightweight invocation** — Quick hotkey-triggered tasks without full messaging round-trip
3. **Direct MCP client** — SpeakMCP's MCP implementation is self-contained vs Clawdbot relying on Pi's tooling

## Competitive Landscape

Both are in a space with other voice+MCP projects like `speech-mcp` (Goose integration), `mcp-use-voice-assistant`, and `local-voice-mcp`. SpeakMCP's differentiator is the **universal text injection** via Rust — most others only speak back or write to files.\n