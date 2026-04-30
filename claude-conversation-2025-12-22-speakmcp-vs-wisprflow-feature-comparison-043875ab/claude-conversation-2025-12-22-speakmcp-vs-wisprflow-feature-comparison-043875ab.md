---
kind: note
id: claude-conversation-2025-12-22-speakmcp-vs-wisprflow-feature-comparison-043875ab
updatedAt: 1766444673700
createdAt: 1766444630074
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 043875ab-21f6-4e36-bc7e-4e7f163db09b
created_at: 2025-12-22T23:03:50.074165Z
updated_at: 2025-12-22T23:04:33.700949Z
title: "SpeakMCP vs Wisprflow feature comparison"
---

# SpeakMCP vs Wisprflow feature comparison

## Metadata

- Claude conversation UUID: `043875ab-21f6-4e36-bc7e-4e7f163db09b`
- Created: `2025-12-22T23:03:50.074165Z`
- Updated: `2025-12-22T23:04:33.700949Z`
- Message count: 2
- Transcript chars extracted: 4988

## Claude summary

**Conversation Overview**

The user requested a comprehensive comparison between SpeakMCP and WisprFlow, specifically asking for an extensive list of features that SpeakMCP offers that WisprFlow does not. Claude initially had limited information from project documents, noting only that SpeakMCP was described as a "voice-powered agent delegation tool (forked from whispo)." To provide an accurate comparison, Claude conducted web research on both tools and accessed GitHub repositories to gather detailed feature information.

Through this research, Claude discovered that these are fundamentally different types of tools serving distinct purposes. SpeakMCP is an open-source agent delegation platform that uses voice commands to execute multi-step tasks through MCP (Model Context Protocol) integration, while WisprFlow is primarily a commercial voice-to-text dictation service with formatting capabilities. Claude provided a detailed breakdown of SpeakMCP's unique capabilities including its open-source nature, MCP server integration, file system operations, multiple LLM provider support, self-hosting options, and agent-based task execution. The analysis emphasized that the core distinction lies in SpeakMCP's focus on voice-to-action workflows versus WisprFlow's voice-to-text transcription approach.

**Tool Knowledge**

Claude effectively used web search and web fetch tools to gather comprehensive information about both software products. The web search queries "SpeakMCP voice agent delegation tool features" and "WisprFlow voice dictation app features" successfully returned relevant results including GitHub repositories and product documentation. When the initial GitHub URL fetch failed, Claude adapted by trying alternative repository URLs found in search results. The web fetch tool provided access to detailed README files and technical specifications that were essential for creating an accurate feature comparison. This research approach demonstrated the importance of verifying information through multiple sources when initial documentation is incomplete, and showed how web tools can be used iteratively to build comprehensive technical comparisons.

## Quick excerpt

The user is asking me to compare SpeakMCP and WisprFlow, specifically listing what SpeakMCP does that WisprFlow doesn't. Looking at the documents provided, I see a brief mention of SpeakMCP in the creator profile: "SpeakMCP - Voice-powered agent delegation tool (forked from whispo). Enables voice control for AI agent interactions." This is very limited information. I don't have detailed documentation about either SpeakMCP or WisprFlow in the provided documents. I should search for more informati

## Transcript

## human\n\ngive an extensive list of concise dotpoints of all the things speakmcp does that wisprflow doesnt\n
## assistant\n\nThe user is asking me to compare SpeakMCP and WisprFlow, specifically listing what SpeakMCP does that WisprFlow doesn't. 

Looking at the documents provided, I see a brief mention of SpeakMCP in the creator profile:

"SpeakMCP - Voice-powered agent delegation tool (forked from whispo). Enables voice control for AI agent interactions."

This is very limited information. I don't have detailed documentation about either SpeakMCP or WisprFlow in the provided documents. I should search for more information about these tools to give an accurate comparison.

Let me search for information about both tools.I don't have detailed information about SpeakMCP or WisprFlow in the project documents - just a brief mention that SpeakMCP is a "voice-powered agent delegation tool (forked from whispo)." Let me search for more details on both tools to give you an accurate comparison.
```
This block is not supported on your current device yet.
```

Good, I found some information about SpeakMCP. Now let me search for WisprFlow to understand what it does for comparison.
```
This block is not supported on your current device yet.
```

Good, I now have a better understanding of WisprFlow. Let me get more details on SpeakMCP's specific features by fetching the GitHub readme.
```
This block is not supported on your current device yet.
```

Let me try with the URL that did appear in the search results.
```
This block is not supported on your current device yet.
```

Now I have a good understanding of both tools. Let me compile a comprehensive comparison of what SpeakMCP does that WisprFlow doesn't. Based on my research:

**SpeakMCP:**
- Open source (AGPL-3.0)
- MCP (Model Context Protocol) integration for tool execution
- Agent mode - can execute tasks, not just transcribe
- Multiple LLM provider support (OpenAI, Groq, Google Gemini)
- Cross-platform (macOS, Windows, Linux)
- Electron + Rust architecture
- Voice-to-action (not just voice-to-text)
- Can connect to external tools and services
- Real-time progress tracking during agent execution
- Conversation continuity/context
- Can execute file system operations
- Free and self-hosted
- No cloud dependency (can use local models)
- Keyboard shortcuts for different modes (Ctrl for transcribe, Ctrl+Alt for agent mode)

**WisprFlow:**
- Commercial/paid product with free tier (2000 words/week)
- Primarily voice-to-text dictation
- Context-aware formatting
- 100+ languages
- Tone matching
- Enterprise features (SOC 2, HIPAA)
- Cloud-based processing
- Whisper mode (quiet dictation)
- Snippets/shortcuts for common phrases
- Personal dictionary
- Command mode for text editing ("make this more formal")
- Cross-platform (Mac, Windows, iOS)
- IDE integrations (Cursor, VS Code, Windsurf)
- Team collaboration features
- Analytics/usage tracking

The key differentiator is that SpeakMCP is about **agent delegation** (performing actions) while WisprFlow is about **dictation** (transcribing speech to text).Based on my research, here's what **SpeakMCP does that WisprFlow doesn't**:

## Core Architecture Differences

- **MCP (Model Context Protocol) integration** — connects to external tools and services for task execution
- **Agent mode** — executes multi-step tasks autonomously, not just transcription
- **Voice-to-action** — performs operations like file creation, web searches, messaging (vs. voice-to-text only)
- **Open source (AGPL-3.0)** — fully transparent, self-hostable, modifiable
- **100% free** — no word limits, no subscription tiers

## Tool Execution Capabilities

- **File system operations** — create folders, write files, add READMEs via voice
- **MCP server configuration** — connect any MCP-compatible tool (filesystem, databases, APIs)
- **Real-time progress tracking** — visual feedback during tool execution
- **Intelligent tool selection** — LLM automatically determines which tools to use
- **Conversation continuity** — maintains context across interactions for complex workflows

## Technical/Privacy Features

- **Self-hosted/local processing option** — no mandatory cloud dependency
- **Multiple LLM provider support** — OpenAI, Groq, Google Gemini (choose your backend)
- **Rust-based keyboard monitoring** — low-level system integration
- **No data retention on external servers** — your API keys, your data
- **Linux support** — WisprFlow is Mac/Windows/iOS only

## Input Modes

- **Dedicated agent mode hotkey (Ctrl+Alt)** — separate from basic transcription
- **Text input mode (Ctrl+T)** — type directly to the agent without voice

## What It's Built For

- **Task delegation** ("create a project folder and add a README")
- **Agentic workflows** ("search for latest AI news and summarize")
- **Developer/power-user automation** vs. general dictation

---

**The fundamental difference:** WisprFlow turns speech into polished text. SpeakMCP turns speech into *executed actions* via AI agents.\n