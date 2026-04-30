---
kind: note
id: claude-conversation-2026-01-08-installing-claude-bot-or-speakmcp-on-a-vm-e6854c26
updatedAt: 1767914764010
createdAt: 1767914638447
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: e6854c26-369b-4b22-a1dd-ae4fe2511d35
created_at: 2026-01-08T23:23:58.447322Z
updated_at: 2026-01-08T23:26:04.010432Z
title: "Installing Claude bot or SpeakMCP on a VM"
---

# Installing Claude bot or SpeakMCP on a VM

## Metadata

- Claude conversation UUID: `e6854c26-369b-4b22-a1dd-ae4fe2511d35`
- Created: `2026-01-08T23:23:58.447322Z`
- Updated: `2026-01-08T23:26:04.010432Z`
- Message count: 4
- Transcript chars extracted: 6433

## Claude summary

**Conversation Overview**

The user is planning to create a video about installing either Clawdbot or SpeakMCP on a virtual machine and requested research on the differences between these projects, along with security implications and limitations of using a VM. The user mentioned they would likely use Linux for the VM setup. Through the research, Claude discovered that Clawdbot is a rapidly growing project with 2,595 stars that serves as a multi-platform AI assistant connecting to various messaging apps (WhatsApp, Telegram, Slack, Discord, Signal, iMessage, WebChat) with voice capabilities and a skills marketplace. In contrast, SpeakMCP is the user's own project with 7 stars, forked from Whispo, that focuses specifically on voice-powered MCP tool execution with local Whisper transcription.

Claude provided a detailed comparison showing that Clawdbot represents a "Claude Computer Use for your whole life" approach with higher setup complexity but broader platform support, while SpeakMCP takes a more focused "voice triggers MCP tools" approach with simpler architecture. The research covered VM security considerations including isolation benefits, snapshot capabilities, credential separation, and network sandboxing, while noting limitations like potential VM escape risks and the fact that network access remains a primary security concern. Claude suggested the VM angle would provide a unique differentiator for the video by demonstrating both capability and responsible security practices, fitting the user's "bold claim + demo" video template with potential hooks around the security-conscious approach to running AI agents.

## Quick excerpt

The user wants to make a video about installing either Clawd Bot or SpeakMCP on a VM. They want me to research: 1. Differences between the projects 2. Security implications and limitations of a VM (Linux) Let me search for information about these projects. I should use web search to find current information about Clawd Bot and SpeakMCP since these are likely recent projects. First, let me check if there's any past conversation context about SpeakMCP since it's mentioned in the user's memory as a

## Transcript

## human\n\ni want to make a video of potentially installing clawd bot or speakmcp on a vm.\n
## human\n\ni want to make a video of potentially installing clawd bot or speakmcp on a vm. things do research are the differences between the projects. security implications and limitations of a VM, (i'll probably do linux)\n
## assistant\n\nThe user wants to make a video about installing either Clawd Bot or SpeakMCP on a VM. They want me to research:
1. Differences between the projects
2. Security implications and limitations of a VM (Linux)

Let me search for information about these projects. I should use web search to find current information about Clawd Bot and SpeakMCP since these are likely recent projects.

First, let me check if there's any past conversation context about SpeakMCP since it's mentioned in the user's memory as a project they've worked on.I'll research both projects for you. SpeakMCP is something you've worked on before (forked from whispo), so let me dig into Clawd Bot and compare them, plus cover the VM security angle.
```
This block is not supported on your current device yet.
```

No results for that search. Let me try different search terms.
```
This block is not supported on your current device yet.
```

Let me try searching more broadly for voice AI agents and Claude-related projects.
```
This block is not supported on your current device yet.
```

jq not installed, let me just use grep/basic tools
```
This block is not supported on your current device yet.
```

Let me just use basic tools to parse the JSON
```
This block is not supported on your current device yet.
```

Found your SpeakMCP repos. Now let me search for Clawd Bot with different terms.
```
This block is not supported on your current device yet.
```

Found clawdbot! It's a very active project (2595 stars, 391 forks, created Nov 24, 2025). Let me get the README to understand what it does.Found it. Clawdbot has 2.5K+ stars and is blowing up. Let me get its README and compare with your SpeakMCP project.
```
This block is not supported on your current device yet.
```

Excellent! Now let me also get more info about SpeakMCP to compare them properly. Let me check the SpeakMCP.com repo or search for whispo (the project SpeakMCP was forked from).Now let me get more info on whispo (what SpeakMCP is forked from) and understand your project better:
```
This block is not supported on your current device yet.
```

Let me also check your SpeakMCP.com repo to see what it does.
```
This block is not supported on your current device yet.
```

Let me try a different approach to get the SpeakMCP info.
```
This block is not supported on your current device yet.
```

Let me check the speakmcp.com website or get the index.html for more info on what SpeakMCP does.
```
This block is not supported on your current device yet.
```

Now I have a good picture of both projects. Let me compile the research and also get info on VM security considerations for running these.Now let me research VM security considerations for running AI agents:
```
This block is not supported on your current device yet.
```

Now I have enough information to provide a comprehensive comparison. Let me create a research document for the user.Here's the research breakdown:

---

## Clawdbot vs SpeakMCP - Key Differences

| Feature | **Clawdbot** | **SpeakMCP** |
|---------|-------------|--------------|
| **Stars** | 2,595 (blowing up) | 7 (your project) |
| **Primary Use** | Multi-platform AI assistant (WhatsApp, Telegram, Slack, Discord, Signal, iMessage, WebChat) | Voice-powered MCP tool execution |
| **Architecture** | Gateway + Daemon + CLI + Apps | Fork of Whispo + MCP integration |
| **Voice** | Voice Wake + Talk Mode (ElevenLabs) | Local Whisper transcription |
| **Platform** | macOS, Linux, Windows (WSL2), iOS, Android | Desktop-focused (originated from Hyprland/Linux) |
| **LLM Integration** | Anthropic, OpenAI with OAuth rotation + failover | Claude API via MCP |
| **Tool Execution** | Skills system (ClawdHub marketplace) | MCP servers |
| **Setup Complexity** | Higher - wizard-driven but lots of config | Simpler - focused on voice→action |
| **Browser Control** | Built-in (CDP-managed Chrome) | Through MCP servers |

---

## Why This Matters for Your Video

**Clawdbot is the "Claude Computer Use for your whole life" approach** - it's a full assistant platform that connects to all your messaging apps, runs a local gateway, and can control your devices. It's more like building your own Jarvis.

**SpeakMCP is the "voice triggers MCP tools" approach** - more focused. You speak, it transcribes, runs through Claude, and executes MCP tools. Less infrastructure, more direct.

---

## VM Security Considerations (Linux)

**Why a VM is actually smart for this:**

1. **Isolation from host** - If the agent does something destructive, it's contained
2. **Snapshot before experiments** - Roll back instantly if things go wrong
3. **Credential separation** - Use dedicated API keys that only live in the VM
4. **Network sandboxing** - VM can be firewalled separately from your main machine

**Limitations to mention in video:**

- **Not container-level isolation** - Full VM is overkill for some use cases, but better than Docker for AI agents that need more system access
- **VM escape risks are real but rare** - Hypervisor vulns exist, but modern KVM/QEMU are solid
- **Network access is the real risk** - The agent can still hit the internet, send data, make API calls. The VM doesn't stop that
- **Shared clipboard/folders can leak** - If you have shared folders enabled, agent could access host files

**Best practices for the video:**
1. Use a dedicated API key for the VM (not your main key)
2. Take a snapshot before installation
3. Consider network isolation or monitoring (Tailscale + logging)
4. Don't share folders with sensitive data

---

## Video Angle Suggestion

Based on your voice guide, this fits the **bold claim + demo** template well:

**Hook options:**
- "Clawdbot just hit 2.5K stars in 6 weeks - running it in a VM for safety"
- "I'm not running this AI agent on my main machine. Here's why..."
- "This agent can control your WhatsApp, Telegram, and browser - so I sandboxed it"

The VM angle gives you a unique differentiator vs other Clawdbot videos - you're showing both the capability AND being responsible about security. That's the "builder not reviewer" energy.

Want me to put together script notes based on your template format?\n