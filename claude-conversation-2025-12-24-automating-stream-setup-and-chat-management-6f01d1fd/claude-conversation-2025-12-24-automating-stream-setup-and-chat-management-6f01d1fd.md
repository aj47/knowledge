---
kind: note
id: claude-conversation-2025-12-24-automating-stream-setup-and-chat-management-6f01d1fd
updatedAt: 1766542277023
createdAt: 1766540886639
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 6f01d1fd-1c54-4635-8c1f-2c5ecf854e26
created_at: 2025-12-24T01:48:06.639382Z
updated_at: 2025-12-24T02:11:17.023072Z
title: "Automating stream setup and chat management"
---

# Automating stream setup and chat management

## Metadata

- Claude conversation UUID: `6f01d1fd-1c54-4635-8c1f-2c5ecf854e26`
- Created: `2025-12-24T01:48:06.639382Z`
- Updated: `2025-12-24T02:11:17.023072Z`
- Message count: 6
- Transcript chars extracted: 7601

## Claude summary

**Conversation Overview**

The user requested research on Social Stream Ninja's API to automate their streaming workflow, specifically wanting to streamline TikTok API key setup, OBS integration, and multi-platform chat management. They already have the standalone Social Stream Ninja app installed and are building a custom AI agent for automation, requiring only the API methods and dependencies rather than code examples.

Claude researched the Social Stream Ninja documentation and API, discovering that TikTok chat capture doesn't actually require an API key - the browser extension automatically captures chat when TikTok live chat windows are opened. The research revealed extensive automation possibilities through WebSocket and HTTP API connections to Social Stream Ninja's hosted server at io.socialstream.ninja.

The user's workflow involves streaming across multiple platforms (TikTok, YouTube, Twitch) and wants to automate the repetitive setup tasks of opening chat windows, configuring overlays, and managing cross-platform messaging. Claude provided comprehensive documentation covering all available API actions including chat messaging, overlay control, queue management, text-to-speech, polls, waitlists/giveaways, and user management. The research identified that only two toggles need to be enabled in the standalone app: "Enable remote API control of extension" and "Send chat messages to API server" to route all platform chats through the WebSocket API for the user's AI agent to process.

**Tool Knowledge**

Web research using web_fetch and web_search revealed that Social Stream Ninja's GitHub documentation at the main repository URL didn't load properly, but the raw API documentation was accessible at socialstream.ninja/api.html. The official documentation site provided more comprehensive and current information than the GitHub markdown files. When researching automation examples, searching for "social stream ninja automation scripts Python Node.js" yielded more practical implementation examples than searching for generic API documentation. The tool successfully identified that Social Stream Ninja uses a channel-based WebSocket system where channel 4 specifically handles incoming chat messages from all platforms, which is the critical connection point for building automation agents that need to listen to cross-platform chat streams.

## Quick excerpt

The user wants me to research the Social Stream API documentation and help them figure out how to improve their streaming workflow. They want to: 1. Make it quicker to get the TikTok API key 2. Put it into OBS 3. Open up all the chats and get all messages 4. Research other potential automation opportunities they haven't thought about Let me fetch the API documentation from the GitHub repo. ``` This block is not supported on your current device yet. ``` The page didn't load the actual content. Le

## Transcript

## human\n\nresearch https://github.com/steveseguin/social_stream/blob/main/api.md and how i can improve my streams by automating .  I want to do things like make it quicker for me to get the TikTok API key, put it into OBS and open up all the chats and get in all the messages. I also want to research other potential things that I haven't even thought about.\n
## assistant\n\nThe user wants me to research the Social Stream API documentation and help them figure out how to improve their streaming workflow. They want to:
1. Make it quicker to get the TikTok API key
2. Put it into OBS
3. Open up all the chats and get all messages
4. Research other potential automation opportunities they haven't thought about

Let me fetch the API documentation from the GitHub repo.
```
This block is not supported on your current device yet.
```

The page didn't load the actual content. Let me try fetching the raw version of the file instead.Let me get the raw file content:
```
This block is not supported on your current device yet.
```

I need to search for the Social Stream API documentation differently.
```
This block is not supported on your current device yet.
```

Good, I'm finding useful information. Let me fetch the full API documentation page and the commands page to get more details.
```
This block is not supported on your current device yet.
```

This is really comprehensive documentation. Now let me search for specific information about TikTok integration and API key setup to address the user's specific question about making TikTok setup faster.Now let me search for specific TikTok setup information:
```
This block is not supported on your current device yet.
```

Let me search for more specific automation ideas and see what else streamers are doing with Social Stream Ninja.Let me search for more automation ideas and TikTok-specific workflows:
```
This block is not supported on your current device yet.
```

I have enough information now. Let me create a comprehensive research document for the user about Social Stream Ninja automation opportunities for their streaming setup.I've gathered comprehensive information about Social Stream Ninja. Let me compile a research document with actionable automation ideas for your streams:
```
This block is not supported on your current device yet.
```

Now I should copy this to the outputs folder and present it to the user.
```
This block is not supported on your current device yet.
```

Good. Now I'll present the file and give the user a summary.
```
This block is not supported on your current device yet.
```

Great, now I can give the user a solid summary of what I found for them.Here's what I found researching Social Stream Ninja's API and automation capabilities:

## Quick Wins for Your Specific Pain Points

**TikTok + Multi-Platform Setup:**
- SSN doesn't actually require a TikTok API key for chat capture — just pop out the TikTok live chat window and the extension grabs it automatically
- For the standalone app (which avoids browser throttling), use the "Sign in" button for TikTok/Facebook/Instagram first

**Automating the Full Setup:**
The document includes a Python script that can:
1. Open all your chat windows (TikTok, YouTube, Twitch) in one click
2. Generate your SSN dock URLs pre-configured with your session
3. Connect to the WebSocket API to listen for all messages across platforms

## Automation Ideas You Probably Haven't Considered

1. **AI Chat Responder** — SSN has built-in Ollama/Claude/OpenAI integration for auto-responding to questions

2. **StreamDeck One-Button Magic** — HTTP GET URLs let you send messages to ALL platforms simultaneously, clear overlays, feature messages with a single button press

3. **Real-Time Analytics Bot** — Python/Node.js can connect to Channel 4 of the WebSocket API to track message counts per platform, most active users, donation totals

4. **Giveaway/Poll Automation** — API commands to create polls, select random winners, manage waitlists

5. **Donation Webhooks** — Connect Stripe/Ko-Fi/Buy Me A Coffee directly to your overlays without third-party services

6. **MIDI/Foot Pedal Control** — Hands-free stream control while you're coding

The key toggle you need to enable: **"Send chat messages to API server"** (3rd toggle in Global settings → Mechanics) — this is what routes all your platform chats through the WebSocket so you can listen with custom scripts.\n
## human\n\ngive me a document i can give to a developer.\n
## assistant\n\nThe user wants a document they can hand off to a developer to implement these automations. I should create a more technical, implementation-focused document with clear specifications, code examples, and requirements. This should be something a developer can take and start building from immediately.
```
This block is not supported on your current device yet.
```

I need to read the docx-js.md file to create a proper Word document for the developer. Let me read that file.
```
This block is not supported on your current device yet.
```

Now I have all the information I need to create a professional developer handoff document. Let me create a comprehensive Word document that a developer can use to implement the Social Stream Ninja automation.
```
This block is not supported on your current device yet.
```\n
## human\n\ni already have the standalone app. i dont need code but i need to know the methods possible. i will be writing a custom ai agent to do everything i just need to know the api calls and what else i need installed and any other dependencies\n
## assistant\n\nThe user wants a more focused, practical reference document. They:
1. Already have the standalone app installed
2. Don't need code examples - just need to know what's possible
3. Are building a custom AI agent to automate everything
4. Need: API calls, dependencies, what else needs to be installed

Let me create a concise reference document that covers:
- All the API endpoints and methods
- Required toggles/settings
- Dependencies needed
- WebSocket vs HTTP options
- All available actions/commands
```
This block is not supported on your current device yet.
```

Good, I created a more focused reference document. Let me present it to the user.
```
This block is not supported on your current device yet.
```

The user now has a clean API reference. Let me summarize the key points for them.Here's the clean reference for your AI agent.

**What you need enabled in the standalone app:**
- Toggle 1: "Enable remote API control of extension" — required for everything
- Toggle 3: "Send chat messages to API server" — required to receive chat via WebSocket

**No external dependencies** — SSN hosts the server at `io.socialstream.ninja`

**Your agent's core connections:**
| Purpose | Method |
|---------|--------|
| Listen to all chat | WebSocket → `wss://io.socialstream.ninja/join/SESSION_ID/4` |
| Send commands | HTTP GET → `https://io.socialstream.ninja/SESSION_ID/ACTION` |
| Real-time stream | SSE → `https://io.socialstream.ninja/sse/SESSION_ID` |

**Key actions your agent can call:**
- `sendChat` / `sendEncodedChat` — message all platforms
- `clearOverlay` / `clear` — reset overlays
- `nextInQueue` / `feature` — cycle featured messages
- `toggleTTS` — text-to-speech control
- `createpoll` / `closepoll` — poll management
- `selectwinner` / `resetwaitlist` — giveaways
- `blockUser` — moderation

**Incoming message structure** — when you connect to channel 4, you'll get JSON with `chatname`, `chatmessage`, `type` (platform), `hasDonation`, `event` (follow/raid/etc), and more.

The API sandbox at `socialstream.ninja/sampleapi.html` is useful for testing commands manually before wiring them into your agent.\n