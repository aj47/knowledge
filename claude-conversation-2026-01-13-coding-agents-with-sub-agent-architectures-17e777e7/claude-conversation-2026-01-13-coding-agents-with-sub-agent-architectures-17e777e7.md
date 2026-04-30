---
kind: note
id: claude-conversation-2026-01-13-coding-agents-with-sub-agent-architectures-17e777e7
updatedAt: 1768320022746
createdAt: 1768319981993
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 17e777e7-9235-4069-9573-adedab67f0f8
created_at: 2026-01-13T15:59:41.993780Z
updated_at: 2026-01-13T16:00:22.746021Z
title: "Coding agents with sub-agent architectures"
---

# Coding agents with sub-agent architectures

## Metadata

- Claude conversation UUID: `17e777e7-9235-4069-9573-adedab67f0f8`
- Created: `2026-01-13T15:59:41.993780Z`
- Updated: `2026-01-13T16:00:22.746021Z`
- Message count: 2
- Transcript chars extracted: 4626

## Claude summary

**Conversation Overview**

The user inquired about coding agents that utilize sub-agent architectures, seeking to understand which AI development tools employ multiple specialized agents working together. Claude provided a comprehensive overview of the current landscape, identifying several coding agents with sub-agent capabilities and contrasting them with single-agent approaches.

The conversation revealed that Claude Code uses sub-agents to solve context pollution problems by creating specialized AI helpers focused on specific tasks like security code review, debugging, or API testing, with sub-agents typically answering questions rather than writing code to maintain context separation. OpenCode features a formal sub-agent architecture with primary agents (Build, Plan) and subagents (General, Explore) that can be invoked through @ mentions. Other multi-agent systems discussed included Replit Agent 3, which spawns subagents but can cause cost overruns; Windsurf with its multi-agent orchestration using different AI personas; Kilo Code's Orchestrator mode that breaks problems into subtasks across different modes; Antigravity for parallel execution across multiple workstreams; and Cline as an experimental multi-agent system for code generation, review, and bug fixing.

Claude concluded by noting that this multi-agent pattern could be relevant for the user's work with SpeakMCP, particularly the Claude Code approach of spawning focused sub-agents without polluting the main context, suggesting the user may be involved in AI development or integration work.

## Quick excerpt

The user is asking about coding agents that have sub-agents. This is a technical question about AI coding tools and their architecture. Let me search for current information on this topic since the landscape of AI coding agents is rapidly evolving. ``` This block is not supported on your current device yet. ``` This search gave me good information about coding agents with sub-agents. Let me compile the key ones: 1. **Claude Code** - Has sub-agents, can spawn specialized sub-agents for different 

## Transcript

## human\n\nWhich coding agents have sub agents\n
## assistant\n\nThe user is asking about coding agents that have sub-agents. This is a technical question about AI coding tools and their architecture. Let me search for current information on this topic since the landscape of AI coding agents is rapidly evolving.
```
This block is not supported on your current device yet.
```

This search gave me good information about coding agents with sub-agents. Let me compile the key ones:

1. **Claude Code** - Has sub-agents, can spawn specialized sub-agents for different tasks. The sub-agents typically answer questions rather than write code directly to avoid context pollution.

2. **Replit Agent 3** - Spawns subagents (mentioned as causing cost overruns)

3. **OpenCode** - Has a formal subagent architecture with:
   - Primary agents (Build, Plan)
   - Subagents (General, Explore)
   - You can @ mention subagents

4. **OpenAI Codex** - Mentioned as having similar capabilities

5. **Gemini CLI** - Can be used to run sub-agents alongside Claude Code

Let me search for a few more to get a more complete picture.
```
This block is not supported on your current device yet.
```

Now I have a more comprehensive picture. Let me compile the coding agents that have sub-agents:

**Agents with explicit sub-agent architecture:**

1. **Claude Code** - Has sub-agents that can be spawned for specific tasks. The sub-agents typically focus on answering questions rather than writing code to avoid context pollution. Custom sub-agents can be created.

2. **OpenCode** - Formal sub-agent architecture with:
   - Primary agents: Build, Plan
   - Subagents: General, Explore
   - Can @ mention subagents

3. **Replit Agent 3** - Spawns subagents (mentioned as causing cost issues)

4. **Windsurf** - Described as having "multi-agent orchestration" with different "AI personas" collaborating

5. **Kilo Code** - Has "Orchestrator mode" that breaks problems into subtasks and assigns them to different modes/agents

6. **Cline** - Described as using "multiple agents" for code generation, review, and bug fixing. Has Plan/Act modes.

7. **Antigravity** - Can manage multiple agents working on different tasks simultaneously with parallel execution

**Agents without explicit sub-agent architecture (or single-agent):**
- Cursor - Has Agent mode but doesn't spawn sub-agents in the same way
- Aider - Git-native CLI tool, single agent approach
- GitHub Copilot - Single agent approach

Let me present this to the user in a clear way.Based on current information, here are the coding agents that have sub-agent architectures:

## Agents with Sub-Agents

**Claude Code**
- Sub-agents solve the context pollution problem by letting developers create specialized AI helpers that focus on just one job each. A developer could create a security-code-reviewer agent, a separate debugging agent, or an API testing agent. Each works independently with its own memory.
- The subtask agent is usually only tasked with answering a question, not writing any code—it lacks context from the main agent that would otherwise be needed for code changes.

**OpenCode**
- Has two types of agents: primary agents (Build, Plan) and subagents (General, Explore). Subagents are specialized assistants that primary agents can invoke for specific tasks, and you can manually invoke them by @ mentioning them in messages.

**Replit Agent 3**
- Replit's effort-based pricing led to cost overruns when Agent 3 spawned subagents for even minor edits.

**Windsurf**
- Described as a next-gen AI IDE with multi-agent orchestration—different "AI personas" collaborating.

**Kilo Code**
- Has Orchestrator mode that breaks problems into subtasks and assigns them. Features Architect, Code, Debug, Ask, and Custom Modes with a multi-mode workflow: Architect → Code → Debug.

**Antigravity**
- Can manage multiple agents working on different tasks simultaneously. Its parallel execution and artifact-based reporting make it ideal for complex projects where you want to delegate several workstreams at once.

**Cline**
- An experimental AI development tool that leverages multiple agents to help with code generation, review, and bug fixing. It's a collaborative AI system that suggests fixes, explains errors, and edits code in real-time.

## Single-Agent Architecture

**Cursor** and **Aider** don't use sub-agents—they operate as powerful single agents with strong context awareness across your codebase.

---

For SpeakMCP, this multi-agent pattern could be interesting to explore—especially the Claude Code approach of spawning focused sub-agents for specific tasks without polluting the main context.\n