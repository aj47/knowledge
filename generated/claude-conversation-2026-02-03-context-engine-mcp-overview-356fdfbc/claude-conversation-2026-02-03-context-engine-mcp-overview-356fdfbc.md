---
kind: note
id: claude-conversation-2026-02-03-context-engine-mcp-overview-356fdfbc
updatedAt: 1770097925623
createdAt: 1770095534333
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 356fdfbc-cb19-49e4-b355-32c1421f02c9
created_at: 2026-02-03T05:12:14.333257Z
updated_at: 2026-02-03T05:52:05.623007Z
title: "Context engine MCP overview"
---

# Context engine MCP overview

## Metadata

- Claude conversation UUID: `356fdfbc-cb19-49e4-b355-32c1421f02c9`
- Created: `2026-02-03T05:12:14.333257Z`
- Updated: `2026-02-03T05:52:05.623007Z`
- Message count: 6
- Transcript chars extracted: 8936

## Claude summary

**Conversation Overview**

The user is creating a video about Augment Code's Context Engine MCP, a tool that makes AI agents smarter, faster, and cheaper by providing semantic codebase understanding. They requested help structuring a short explainer video (under 3 minutes) and specifically wanted talking points rather than a full script. The user provided key messaging points including installation options via npx or remote MCP with OAuth/API key, the open source Context Connectors project that can index GitHub repositories, and the availability of a free tier.

Claude initially offered multiple format options and asked clarifying questions about video length and structure. After the user specified their preferences, Claude researched current documentation to ensure accuracy and created an initial talking points outline. The user then refined the approach significantly, providing their preferred hook emphasizing Context Engine as Augment's "secret sauce" now available for free, mentioning benchmark improvements in Cursor and Claude Code, and requesting a demo flow using OpenCode. They also wanted to tease Context Connectors and the SDK, providing staging documentation URLs for reference.

Claude fetched the provided staging documentation to gather accurate technical details about the remote MCP setup, Context Connectors capabilities for indexing various Git repositories and documentation sources, and the Context Engine SDK's TypeScript and Python implementations. The final deliverable was a refined talking points outline structured around the user's preferred narrative flow, including specific timing estimates for each section, technical details about local versus remote server options, and clear transitions between the demo and teaser sections for the broader Context Engine ecosystem.

## Quick excerpt

The user wants to create a video about Augment Code's Context Engine MCP. They've provided key points to cover: 1. Makes any agent smarter, faster, cheaper 2. How it works 3. Installation options (npx or remote MCP with OAuth/API key) 4. Context Connectors - open source project using MCP under the hood, can index any GitHub repo 5. Free tier available They have the DESIGN-SPEC.md which shows their visual style preferences (Augment Code design system) and the course planning PDF. Let me think abo

## Transcript

## human\n\nim making a video on the context engine mcp. i should mention
* makes any agent smarter, faster and cheaper
   * how it works
* you can install it with npx, or use our remote mcp (oauth and api key)
* theres also context connectors which is an open source project which uses the mcp under the hood and can index any github repository
* there is a free tier so you can try it without paying\n
## assistant\n\nThe user wants to create a video about Augment Code's Context Engine MCP. They've provided key points to cover:

1. Makes any agent smarter, faster, cheaper
2. How it works
3. Installation options (npx or remote MCP with OAuth/API key)
4. Context Connectors - open source project using MCP under the hood, can index any GitHub repo
5. Free tier available

They have the DESIGN-SPEC.md which shows their visual style preferences (Augment Code design system) and the course planning PDF.

Let me think about what they might need:
- A video script?
- Talking points?
- Visual slides/artifacts?
- Demo flow?

They said "i'm making a video" so they probably want help with the script/outline/talking points. Let me ask what format would be most helpful, or I could offer a few options given their context.

Given their educational content focus and the hands-on approach they prefer, I should probably offer to help with a structured script or talking points document that includes timing, visual cues, and demo moments.Great topic - Context Engine MCP is a solid differentiator for Auggie. What format would be most useful for you?
```
This block is not supported on your current device yet.
```

Good, I've asked clarifying questions about what format and length they want. I'll wait for their response before creating content.Also - should I pull the latest docs on Context Engine MCP to make sure we've got current installation commands and feature details?\n
## human\n\nQ: What would help most for this video?
A: Talking points outline

Q: What's the target length?
A: Under 3 min (quick explainer)\n
## assistant\n\nThe user wants a talking points outline for a short (under 3 min) video about Context Engine MCP. Let me pull the latest docs to make sure I have current info, then create a concise outline.

Key points they mentioned:
- Makes any agent smarter, faster and cheaper
- How it works
- Install with npx or remote MCP (oauth and api key)
- Context connectors - open source, uses MCP under the hood, can index any GitHub repo
- Free tier available

Let me search for the latest on Context Engine MCP to make sure I have accurate details.Let me grab the latest docs to ensure accuracy on commands and features.
```
This block is not supported on your current device yet.
```

Good info. Let me also search for the remote MCP option and Context Connectors to get those details right.
```
This block is not supported on your current device yet.
```

Let me get more details on the installation methods and Context Connectors.
```
This block is not supported on your current device yet.
```

Let me try to get the Context Connectors page instead.
```
This block is not supported on your current device yet.
```

Good, I have enough context now. Let me also search for the remote MCP option and free tier details.Got good info. Here's a tight talking points outline for your under-3-min explainer:

---

## Context Engine MCP — Talking Points Outline

**Hook (10-15 sec)**
- "What if you could give Claude Code, Cursor, or any MCP-compatible agent the same codebase awareness that Auggie has?"
- That's Context Engine MCP — Augment's semantic search, available to any agent.

**The Value Prop (30-40 sec)**
- Makes any agent smarter, faster, and cheaper:
  - **Smarter**: Semantic understanding, not just grep. Knows what's active vs deprecated, how services connect.
  - **Faster**: Returns only relevant context — no dumping your whole codebase into the prompt
  - **Cheaper**: Less tokens = lower costs, especially with expensive frontier models

**How It Works (30-40 sec)**
- Context Engine indexes your repo semantically (200k+ token context, 400k+ files supported)
- MCP server exposes `query_codebase` tool to any compatible agent
- Agent asks a question → Context Engine retrieves the right files → Agent gets grounded answers
- It's read-only — safe context retrieval, no file modifications

**Installation Options (30 sec)**
- **NPX (simplest)**: `npx -y auggie-context-mcp@latest` — just add to your MCP config
- **Remote MCP**: OAuth or API key — no local install needed
- Works with Claude Code, Cursor, Zed, GitHub Copilot, Gemini CLI, Kilo, and more

**Context Connectors (20 sec)**
- Open source project built on Context Engine SDK
- Indexes any GitHub repository for semantic search
- Pipeline that makes diverse sources searchable across agents and apps

**Free Tier CTA (10-15 sec)**
- Free tier available — try it without paying
- "If you're using any MCP-compatible agent, give your codebase the context engine it deserves."

---

**Total: ~2:30**

Want me to tighten any section or add specific commands/URLs for on-screen graphics?\n
## human\n\nhook something like; 
augment codes secret sauce, the context engine is now available to be used in any agent for free. its like giving your agent super powers making it smarter, faster and cheaper.
in benchmarks weve seen significant improvement in cursor and claude code.
then straight into let me show you how i will show it in opencode. one query, faster answer, less cost. it is available as a remote mcp with oath in any agent 

https://augment-mtje7p526w-01-22-add-remote-mcp-instructions.mintlify.app/context-services/mcp/overview

then tease context connector and sdk
https://augment-mtje7p526w-01-22-add-remote-mcp-instructions.mintlify.app/context-services/context-connectors/overview
https://augment-mtje7p526w-01-22-add-remote-mcp-instructions.mintlify.app/context-services/sdk/overview\n
## assistant\n\nThe user wants me to refine the talking points based on their preferred hook and structure. They want:
1. Hook about Context Engine being Augment's "secret sauce" now available for free
2. Mention benchmarks showing improvement in Cursor and Claude Code
3. Quick demo in OpenCode - one query, faster answer, less cost
4. Remote MCP with OAuth
5. Tease Context Connectors and SDK

They've also provided staging URLs for the docs. Let me fetch those to get accurate details.Let me grab those staging docs for accurate details.
```
This block is not supported on your current device yet.
```

Good, now let me get the remote server page and the context connectors/SDK pages.
```
This block is not supported on your current device yet.
```

Let me try to get the context connectors and SDK pages that the user provided.
```
This block is not supported on your current device yet.
```

Good info on Context Connectors. Let me get the SDK overview too.
```
This block is not supported on your current device yet.
```

Great, I have all the info. Let me create a refined talking points outline based on the user's preferred structure.Got it. Here's the refined outline with your hook and flow:

---

## Context Engine MCP — Talking Points (Under 3 min)

**Hook (15 sec)**
- "Augment Code's secret sauce — the Context Engine — is now available to use in any agent. For free."
- "It's like giving your agent superpowers. Smarter, faster, cheaper."
- "In benchmarks, we've seen significant improvement in Cursor and Claude Code."

**Transition to Demo (5 sec)**
- "Let me show you. I'll demo it in OpenCode — one query, faster answer, less cost."

**Demo: OpenCode with Remote MCP (60-90 sec)**
- Show the remote MCP setup — `https://api.augmentcode.com/mcp` with OAuth
- **Local server**: runs Auggie CLI locally (stdio) — best for active development in your working directory
- **Remote server**: connects to Augment-hosted MCP over HTTP — best for cross-repo context
- Run a codebase query → show the result
- Call out: semantic retrieval, not grep — it knows *what's relevant*

**What It's Available For (15 sec)**
- Works with Claude Code, Cursor, Zed, GitHub Copilot, Gemini CLI, OpenCode, Kilo, Kiro, Codex, and more
- Free tier — try it without paying

**Tease: Context Connectors (20 sec)**
- "Want to go further? Context Connectors is an open-source library built on the Context Engine SDK."
- Index any Git repo (GitHub, GitLab, BitBucket), documentation websites, runbooks, schemas
- Store indexes locally or in S3
- Search via MCP, CLI, or build your own app

**Tease: Context Engine SDK (15 sec)**
- "And if you're building something custom — there's a TypeScript and Python SDK."
- `DirectContext` for explicit indexing from any source
- `FileSystemContext` for auto-indexing a local directory
- "Index, search, ask questions — a few lines of code."

**CTA (10 sec)**
- "Links in the description. The Context Engine is free to try — give your agent the context it deserves."

---

**Total: ~2:30–2:45**

Want me to write out a tighter script with exact phrasing, or a demo command sequence for the OpenCode portion?\n