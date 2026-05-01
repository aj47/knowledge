---
kind: note
id: claude-conversation-2025-12-30-docker-mcp-and-context-bloat-solutions-57f2a757
updatedAt: 1767070375858
createdAt: 1767070327961
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 57f2a757-9faf-45ae-855f-b874b53f5af3
created_at: 2025-12-30T04:52:07.961135Z
updated_at: 2025-12-30T04:52:55.858830Z
title: "Docker MCP and context bloat solutions"
---

# Docker MCP and context bloat solutions

## Metadata

- Claude conversation UUID: `57f2a757-9faf-45ae-855f-b874b53f5af3`
- Created: `2025-12-30T04:52:07.961135Z`
- Updated: `2025-12-30T04:52:55.858830Z`
- Message count: 2
- Transcript chars extracted: 5274

## Claude summary

**Conversation Overview**

The user requested research on how Docker MCP (Model Context Protocol) can help address context bloat issues. Claude conducted web searches to gather current information about Docker's MCP Gateway and Toolkit solutions. The conversation focused on the technical problem of context bloat, which occurs when AI agents are overwhelmed with too many tool schemas loaded into prompts, leading to high token costs and cognitive overload for language models.

Claude provided comprehensive research findings explaining how Docker MCP Gateway addresses context bloat through several key mechanisms: dynamic tool discovery that allows selective loading of tools rather than pre-loading all available tools, primordial management tools like mcp-find and mcp-add that enable runtime tool discovery and addition, Code Mode for composing multiple MCP tools into single JavaScript workflows, and centralized gateway management for handling multiple servers efficiently. The research revealed specific performance improvements, including 60-70% token usage reduction in testing scenarios and cost savings from reducing context from around 30,000 tokens to approximately 2,000 tokens per query.

The user demonstrated interest in advanced MCP implementation patterns and optimization strategies, particularly around scaling AI agent deployments while maintaining cost efficiency and performance. The technical discussion covered Docker's shift from "pre-load everything" to "discover and use as needed" approaches, along with container isolation benefits and the underlying philosophy from Anthropic regarding efficient agent design.

## Quick excerpt

The user is asking me to research how Docker MCP can help with context bloat. This is a technical question about Docker's Model Context Protocol (MCP) integration and how it addresses context bloat issues. Let me search for current information on this topic. ``` This block is not supported on your current device yet. ``` I found some good information about Docker MCP and context bloat. Let me search for more specific information about Docker's MCP Gateway and toolkit features. ``` This block is 

## Transcript

## human\n\ncan you research how docker mcp can help with context bloat\n
## assistant\n\nThe user is asking me to research how Docker MCP can help with context bloat. This is a technical question about Docker's Model Context Protocol (MCP) integration and how it addresses context bloat issues. Let me search for current information on this topic.
```
This block is not supported on your current device yet.
```

I found some good information about Docker MCP and context bloat. Let me search for more specific information about Docker's MCP Gateway and toolkit features.
```
This block is not supported on your current device yet.
```

I now have enough information to provide a comprehensive answer about how Docker MCP helps with context bloat. Let me also search for the Anthropic article about building more efficient agents that was referenced, as it seems relevant.
```
This block is not supported on your current device yet.
```

Now I have comprehensive information to provide a thorough answer about how Docker MCP addresses context bloat. Let me synthesize this information.Based on my research, here's how Docker MCP (specifically the MCP Gateway and Toolkit) helps address context bloat:

## The Context Bloat Problem

When you connect Claude to 11 MCP servers with around 100 tools, you end up with approximately 30,000 tokens of tool schemas loaded into every prompt—that's $0.09 per query before you even ask a question. Scale to 50 servers and your context window breaks.

Context bloat occurs when an agent is given more MCP context than it can effectively reason over. This isn't just about token limits—it's about cognitive overload where the model must sift through irrelevant, redundant, or stale information to make decisions.

## How Docker MCP Gateway Addresses This

### 1. **Dynamic Tool Discovery (Dynamic MCP)**
In the mcp-gateway project, Docker started distinguishing between tools that are available to a "find" tool and ones that are added to the context window. Tools can now be actively selected, avoiding the need to load all available tools into every LLM request.

The key difference with dynamic capabilities is that agents can add new tools during runtime. When you connect a client to the MCP Gateway, it exposes a small set of management tools that let agents search the catalog, add servers, handle authentication, and use newly added tools directly—without requiring a restart or manual configuration.

### 2. **Primordial Tools for On-Demand Loading**
New primordial tools like mcp-exec and mcp-find provide agents with new ways to discover and use MCP server tools. The idea is adding MCP servers that don't return tool definitions in tools/list requests, but still make them available to find tool calls.

These management tools include mcp-find (search for available MCP servers in the catalog), mcp-add (add MCP servers to the registry), mcp-remove (remove MCP servers), and mcp-config-set. These tools transform your agent from a passive tool consumer into an active tool manager.

### 3. **Code Mode for Tool Composition**
Docker's MCP Gateway introduces Code Mode, which allows AI agents to write JavaScript code that calls MCP tools. This provides token efficiency (the AI writes a custom tool once and reuses it), chaining tools (combining multiple MCP tools into one workflow), sandboxed execution (code runs safely in Docker containers), and state persistence (data can be stored between tool calls).

Dynamic MCP includes an experimental code-mode tool that lets agents write JavaScript code to compose multiple MCP tools into custom workflows. Result: one tool call instead of dozens, dramatically fewer tokens, and the same security guarantees (everything runs in isolated containers).

### 4. **Token Usage Reduction**
You only load the definitions you need, reducing context usage to around 2k tokens. Docker doesn't add overhead here—it simply provides a clean way to host and scale the MCP servers.

In testing with a GitHub analysis workflow, token usage dropped by 60-70% compared to pre-loading all tools.

## The Underlying Philosophy (from Anthropic)

As MCP usage scales, there are two common patterns that increase agent cost and latency: tool definitions pile up, and intermediate tool results consume additional tokens. Most MCP clients load all tool definitions upfront directly into context.

Code execution with MCP enables agents to use context more efficiently by loading tools on demand, filtering data before it reaches the model, and executing complex logic in a single step. Models are great at navigating filesystems—presenting tools as code on a filesystem allows models to read tool definitions on-demand rather than reading them all up-front.

## Summary

Docker MCP Gateway tackles context bloat through:

1. **Just-in-time tooling** — Only load tool definitions when actually needed
2. **Dynamic discovery** — Agents search for and add tools during runtime
3. **Code mode** — Write code to compose multiple tools into single operations
4. **Centralized gateway** — Manage many servers behind one endpoint with selective exposure
5. **Container isolation** — Security without context overhead

This shifts from "pre-load everything" to "discover and use as needed," dramatically reducing the token footprint per query.\n