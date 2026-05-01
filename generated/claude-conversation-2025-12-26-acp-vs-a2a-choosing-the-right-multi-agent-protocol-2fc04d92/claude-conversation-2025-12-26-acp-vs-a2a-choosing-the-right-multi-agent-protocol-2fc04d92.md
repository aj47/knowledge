---
kind: note
id: claude-conversation-2025-12-26-acp-vs-a2a-choosing-the-right-multi-agent-protocol-2fc04d92
updatedAt: 1766775995220
createdAt: 1766775890722
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 2fc04d92-274f-42a0-9f69-93103d631392
created_at: 2025-12-26T19:04:50.722325Z
updated_at: 2025-12-26T19:06:35.220873Z
title: "ACP vs A2A: Choosing the right multi-agent protocol"
---

# ACP vs A2A: Choosing the right multi-agent protocol

## Metadata

- Claude conversation UUID: `2fc04d92-274f-42a0-9f69-93103d631392`
- Created: `2025-12-26T19:04:50.722325Z`
- Updated: `2025-12-26T19:06:35.220873Z`
- Message count: 2
- Transcript chars extracted: 5778

## Claude summary

**Conversation Overview**

The user is creating YouTube content and wanted to make a follow-up video to correct and clarify information from a previous video about agent communication protocols. They had mentioned using ACP for multi-agent systems but realized they should have discussed A2A instead, and wanted to educate their audience about the differences between these protocols. Specifically, they needed to distinguish between ACP as used by Zed (not IBM's version) and A2A by Google.

Claude researched both protocols and created educational content materials for the follow-up video. The key distinction established was that ACP (Agent Client Protocol by Zed) connects AI agents to code editors, similar to how LSP works for language servers, while A2A (Agent2Agent Protocol by Google) enables agent-to-agent communication for multi-agent systems. Claude determined that since the user's original video discussed multi-agent coordination, A2A was indeed the more appropriate protocol to reference.

Claude produced two deliverables following the user's established content creation format: a script notes document with sentence starters and hooks formatted according to their video scripting template, and a comprehensive reference sheet containing technical facts, visual suggestions, use cases, and correction framing. The materials emphasized that ACP is for getting agents into editors (like Gemini CLI or Claude Code running inside Zed), while A2A is for orchestrating multiple agents working together in complex workflows.

**Tool Knowledge**

Claude used web search and web fetch tools to research current information about both protocols. When attempting to fetch the YouTube video directly failed, Claude pivoted to searching for protocol documentation and recent developments. The search strategy "Zed ACP agent communication protocol 2025" and "Google A2A agent to agent protocol 2025" successfully retrieved current information about both protocols, including their launch dates, technical specifications, and adoption status. This approach of using specific year qualifiers in searches proved effective for finding the most recent developments in rapidly evolving AI protocol spaces.

## Quick excerpt

The user wants to make a follow-up video to their YouTube short about ACP (Agent Communication Protocol) vs A2A (Agent-to-Agent protocol by Google). They want to clarify the difference between these protocols and educate their audience. Let me first fetch the video to understand what they said in the original, then I can help them create a follow-up script. Key points: - ACP is used by Zed (not IBM's version) - A2A is by Google - They mentioned using ACP for multi-agent stuff but should have pro

## Transcript

## human\n\ni want to make a follow up video to https://youtube.com/shorts/jiT7aVg8syM . in this i say im using ACP to do multi agent stuff but i should have probably been using A2A, we need to educate the ppl on the protocls and why. make sure we refer to the ACP used by zed not ibm and a2a is by google\n
## assistant\n\nThe user wants to make a follow-up video to their YouTube short about ACP (Agent Communication Protocol) vs A2A (Agent-to-Agent protocol by Google). They want to clarify the difference between these protocols and educate their audience.

Let me first fetch the video to understand what they said in the original, then I can help them create a follow-up script.

Key points:
- ACP is used by Zed (not IBM's version)
- A2A is by Google
- They mentioned using ACP for multi-agent stuff but should have probably used A2A
- Need to educate people on the protocols and why they matter

Let me fetch the video first to understand the context.Let me first watch your original video to understand the context, then I'll research the latest on ACP vs A2A to make sure we get this right.
```
This block is not supported on your current device yet.
```

Can't fetch the video directly. Let me search for the latest info on ACP (Zed's Agent Communication Protocol) and A2A (Google's Agent-to-Agent protocol) to make sure I have the latest information for the script.
```
This block is not supported on your current device yet.
```

Great, I have good info on ACP (Agent Client Protocol by Zed). Now let me search for Google's A2A protocol to understand the difference.
```
This block is not supported on your current device yet.
```

Now I have a good understanding of both protocols:

**ACP (Agent Client Protocol) by Zed:**
- Connects AI coding agents to code EDITORS (like Zed, Neovim, JetBrains IDEs)
- Launched by Zed in August 2025, with Google collaboration
- Focus: Agent ↔ Editor communication (like LSP did for language servers)
- Use case: Running Gemini CLI, Claude Code, Codex INSIDE your editor
- JSON-RPC over stdio
- Builds on MCP for tools

**A2A (Agent2Agent Protocol) by Google:**
- Agent ↔ Agent communication (multi-agent systems)
- Launched by Google in April 2025, now under Linux Foundation
- Focus: Agents talking to OTHER agents for complex workflows
- 150+ organizations supporting it
- Use case: A purchasing agent talking to a pizza agent and burger agent
- Complements MCP (MCP = tools, A2A = agent collaboration)

The user was using ACP when they should have been talking about A2A for multi-agent stuff. ACP is for connecting agents to editors, A2A is for agents talking to each other.

Let me now read the scripting guide to create a proper follow-up video script.Now I have a clear picture. Let me read your voice guide and create the script:
```
This block is not supported on your current device yet.
```

Now I have all the context I need. Let me create a follow-up video script for the ACP vs A2A topic. 

The key points to cover:
1. ACP (Agent Client Protocol by Zed) = connects agents to EDITORS
2. A2A (Agent2Agent by Google) = agents talking to OTHER agents
3. He used ACP in his previous video for multi-agent stuff, but A2A is actually what you'd use for multi-agent coordination

I'll use the Script Notes Template format and the Bold Claim hook style since that performs best.
```
This block is not supported on your current device yet.
```

Now I have everything I need. Let me create a script notes doc for the ACP vs A2A follow-up video. This will be educational content explaining:

1. ACP (by Zed, not IBM) = connects agents to EDITORS (like LSP for languages)
2. A2A (by Google) = agent-to-agent communication for multi-agent systems
3. The key distinction - when you want agents talking to each other, use A2A

The video should be a follow-up/correction that educates while maintaining the techfren voice.Now I've got everything. Here's the key distinction for your follow-up:

**ACP (Agent Client Protocol by Zed):** Connects AI agents to CODE EDITORS. Like LSP but for agents. Gemini CLI, Claude Code, Codex → all run inside Zed/JetBrains via ACP. It's about agent ↔ editor communication.

**A2A (Agent2Agent by Google):** Agents talking to OTHER AGENTS. Multi-agent orchestration. 150+ companies support it, now under Linux Foundation. It's about agent ↔ agent communication.

Your previous video was about multi-agent stuff—so yeah, A2A is actually the right protocol for that use case. ACP is for getting agents into your editor.

Let me create your script notes:
```
This block is not supported on your current device yet.
```

Let me also create a more detailed reference doc that has all the facts he might want to reference while recording, along with visual suggestions.
```
This block is not supported on your current device yet.
```

Let me present both files to the user.
```
This block is not supported on your current device yet.
```

I've created both files and presented them to the user. Let me summarize what I created.Done! I made you two docs:

1. **Script Notes** — the sentence starters you glance at while recording
2. **Reference Sheet** — all the facts, use cases, and visual suggestions

The core message is simple: **ACP = agent in your editor, A2A = agents talking to each other.** Your previous video was about multi-agent stuff, so A2A was actually the right protocol for that conversation.

Key facts to hit:
- ACP is by **Zed** (collab with Google/JetBrains), not the IBM one
- A2A is by **Google**, now under Linux Foundation with 150+ companies
- Both are open source, both complement MCP, just different problems

The hook "Two protocols everyone's confusing right now" sets up the educational angle while the correction framing ("made a video about ACP, should've been A2A") keeps it authentic to your voice.\n