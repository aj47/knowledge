---
kind: note
id: claude-conversation-2026-02-05-augment-code-context-engine-mcp-setup-guide-885ffe43
updatedAt: 1770319515229
createdAt: 1770318398879
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 885ffe43-fc9b-4a24-b5c7-511eeb518e41
created_at: 2026-02-05T19:06:38.879178Z
updated_at: 2026-02-05T19:25:15.229977Z
title: "Augment code context engine MCP setup guide"
---

# Augment code context engine MCP setup guide

## Metadata

- Claude conversation UUID: `885ffe43-fc9b-4a24-b5c7-511eeb518e41`
- Created: `2026-02-05T19:06:38.879178Z`
- Updated: `2026-02-05T19:25:15.229977Z`
- Message count: 7
- Transcript chars extracted: 13263

## Claude summary

**Conversation Overview**

The user is creating an in-depth video about Augment Code's Context Engine MCP and requested research and talking points covering setup methods, API key configuration, and the broader Context Services ecosystem. Claude researched the documentation and provided a comprehensive video structure covering three main components: Context Engine MCP (for integrating Augment's context engine into MCP-compatible agents like Claude Code, Cursor, and Zed), Context Engine SDK (programmatic TypeScript/Python SDK with DirectContext and FileSystemContext classes), and Context Connectors (open-source library for production workflows including Git repo indexing and S3 storage).

The user made an important correction that Claude had missed during research: the Context Engine MCP can be used with OAuth authentication via remote HTTP endpoints, eliminating the need to download and login with the Auggie CLI. The user also clarified that remote URLs can work with personal API keys, providing more flexible authentication options beyond the local CLI-based approach that Claude had primarily focused on in the initial talking points.

**Tool Knowledge**

Web research revealed that Augment's Context Services documentation uses specific terminology and command patterns. The `--mcp-auto-workspace` flag automatically detects workspace roots for context indexing. Authentication follows a three-tier priority system: direct API key/URL parameters, environment variables (AUGMENT_API_TOKEN and AUGMENT_API_URL), then session files from `auggie login`. The tenant URL format follows `https://[organization-name].api.augmentcode.com` structure. Context Connectors supports both local MCP servers via stdio and remote MCP servers via HTTP/SSE transport, with the remote option supporting OAuth flows that bypass local CLI requirements entirely.

## Quick excerpt

The user wants to create a more in-depth video about Augment Code's Context Engine MCP, covering setup (local, remote), personal API keys, the SDK, and context connectors. Let me fetch the documentation pages they provided to get the latest information.Let me research those documentation pages to get the latest details. ``` This block is not supported on your current device yet. ``` Good, got the SDK overview. Now let me fetch the context connectors page and other related pages. ``` This block i

## Transcript

## human\n\ni need to make a more in depth video about augment code context engine mcp, how to set up local, remote, make personal api key.

context engine sdk https://augment-mtje7p526w-01-22-add-remote-mcp-instructions.mintlify.app/context-services/sdk/overview

context connectors https://augment-mtje7p526w-01-22-add-remote-mcp-instructions.mintlify.app/context-services/context-connectors/overview

do research and provide talking points\n
## assistant\n\nThe user wants to create a more in-depth video about Augment Code's Context Engine MCP, covering setup (local, remote), personal API keys, the SDK, and context connectors. Let me fetch the documentation pages they provided to get the latest information.Let me research those documentation pages to get the latest details.
```
This block is not supported on your current device yet.
```

Good, got the SDK overview. Now let me fetch the context connectors page and other related pages.
```
This block is not supported on your current device yet.
```

Let me get more detailed pages - the Context Engine MCP overview, the local MCP server setup, the remote MCP server setup, and the Context Services overview.
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Let me try fetching pages that were linked from the pages I already fetched.
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Now let me fetch the official Context Engine MCP pages and SDK examples/API reference for more details.
```
This block is not supported on your current device yet.
```

Now let me fetch the official Context Engine MCP docs and the remote MCP server quickstart.
```
This block is not supported on your current device yet.
```

Now let me get the Context Engine MCP quickstart pages and the remote MCP setup.
```
This block is not supported on your current device yet.
```

Now let me get the Context Connectors quickstart pages for remote MCP and local MCP.
```
This block is not supported on your current device yet.
```

Now let me also fetch the Context Connectors remote MCP server quickstart from the staging docs the user linked.
```
This block is not supported on your current device yet.
```

Now I have a comprehensive picture. Let me compile the talking points for the video. Let me read the frontend-design skill first since this is just a markdown document request - actually, they asked for talking points, not a file. Let me just provide the research and talking points directly.Now I have a solid picture of the full Context Services ecosystem. Here are your talking points organized for a deep-dive video:

---

## Video Structure: Augment Context Engine — The Full Stack

### 1. Opening: The Three Layers of Context Services

Set the frame early — Augment's Context Services aren't one thing, they're three distinct products working together:

**Context Engine MCP** → Plug Auggie's context engine into any MCP-compatible agent (Claude Code, Cursor, Codex, Zed, Kilo, Gemini CLI, GitHub Copilot, etc.). This is the "give your other agents Augment's brain" play.

**Context Engine SDK** → Programmatic TypeScript/Python SDK for building custom applications on top of the context engine. Two classes: `DirectContext` (explicit file indexing from any source) and `FileSystemContext` (auto-index a local directory).

**Context Connectors** → Open-source library built on the SDK that handles the plumbing: index Git repos, crawl websites, store indexes in S3, serve via local or remote MCP, auto-index with GitHub Actions or webhooks.

**Key talking point:** These three layers represent increasing levels of abstraction. MCP is "just plug it in," SDK is "build your own," Connectors is "production-ready recipes."

---

### 2. Context Engine MCP Setup — The Quick Win

**Prerequisites:**
- Install Auggie CLI: `npm install -g @augmentcode/auggie@latest`
- Sign in: `auggie login` (opens browser)
- The `--mcp` flag turns Auggie into an MCP server

**The magic command pattern across all agents:**
```
auggie --mcp --mcp-auto-workspace
```

**Walk through configs for each agent:**

- **Claude Code:** `claude mcp add-json auggie-mcp --scope user '{"type":"stdio","command":"auggie","args":["--mcp","--mcp-auto-workspace"]}'`
- **Cursor:** `.cursor/mcp.json` with `"command": "auggie", "args": ["--mcp", "--mcp-auto-workspace"]`
- **Zed:** Settings JSON under `"Augment-Context-Engine"`
- **Others:** Kilo, OpenCode, Codex, Gemini CLI all follow similar patterns

**Talking point:** The `--mcp-auto-workspace` flag is key — it automatically detects your workspace root so the context engine knows what codebase to index. No manual configuration of repo paths.

**What tool gets exposed:** `codebase-retrieval` — a single, powerful tool that handles semantic search across the entire codebase.

---

### 3. Personal API Key / Token Setup

This is the part most people get wrong. Walk through it carefully:

**Interactive (local dev — simplest):**
```bash
auggie login    # opens browser, stores session
# Credentials saved to ~/.augment/session.json
# SDK and MCP server auto-detect this
```

**Extracting your token (for non-interactive/CI):**
```bash
auggie token print
# Returns: accessToken + tenantURL
```

**Three auth methods in priority order:**
1. Direct options: `apiKey` / `apiUrl` passed to `DirectContext.create()`
2. Environment variables: `AUGMENT_API_TOKEN` and `AUGMENT_API_URL`
3. Session file: `~/.augment/session.json` (from `auggie login`)

**For MCP in CI/CD or shared environments:**
```json
{
  "env": {
    "AUGMENT_API_TOKEN": "your-access-token",
    "AUGMENT_API_URL": "your-tenant-url"
  }
}
```

**Tenant URL format:** `https://[your-organization-name].api.augmentcode.com`

**Security callout:** Never commit tokens to source control. Use env vars or secure config stores.

---

### 4. Context Engine SDK — Deep Dive

**Install:**
```bash
npm install @augmentcode/auggie-sdk    # TypeScript
pip install auggie-sdk                  # Python
```

**Two classes, two use cases:**

**DirectContext** — You control what gets indexed:
- `addToIndex([{path, contents}])` — files from anywhere (APIs, databases, memory, disk)
- `search(query)` → formatted string ready for LLM prompts
- `searchAndAsk(query, prompt?)` → one-step Q&A using Augment's LLM
- `exportToFile() / importFromFile()` — persist index state, avoid re-indexing
- `removeFromIndex()`, `clearIndex()`, `getIndexedPaths()`

**FileSystemContext** — Point at a directory, it handles everything:
- `FileSystemContext.create({ directory: '/path/to/workspace' })`
- Same `search()` and `searchAndAsk()` methods
- Requires Auggie CLI installed locally

**Demo talking points:**
- Show `DirectContext` indexing code from an API response or database dump
- Show the `exportToFile` / `importFromFile` workflow for persistent indexing (huge for production)
- Show `search()` output format — it's pre-formatted for LLM consumption
- Show `searchAndAsk()` with custom prompts (code review, documentation generation)
- Show external LLM integration — use `search()` results as context for Anthropic/OpenAI calls

**Key constraints:** Files must be under 1MB. The SDK is marked experimental and subject to breaking changes.

---

### 5. Context Connectors — The Production Layer

This is the open-source library that turns the SDK into real workflows:

**Index sources:**
- Git repos (GitHub, GitLab, BitBucket) → `index-git-repos` recipe
- Documentation websites → `index-website` recipe (crawl and index)
- Custom sources → use `DirectContext` directly

**Store indexes:**
- Local filesystem (default, simple)
- S3 (persistent, production, shareable)

**Search/serve indexes:**
- Interactive agent
- **Local MCP Server** → Claude Desktop, Claude Code, Cursor integration
- **Remote MCP Server** → Expose indexes via MCP over HTTP for remote clients
- CLI for quick searches
- DirectContext for custom implementations

**Quickstart recipes to demo:**
1. **Index and Search Code** (3 min) — clone a repo, index it, query it
2. **Local MCP Server** (3 min) — connect indexed codebase to Claude Desktop/Cursor
3. **Remote MCP Server** (3 min) — expose indexes via HTTP for any remote client
4. **Store in S3** (5 min) — persistent production storage
5. **GitHub Actions Auto-Indexing** (5 min) — re-index on every push
6. **Webhook Auto-Index** (10 min) — custom webhook server for auto-indexing

**Advanced recipes:**
- Custom Indexer — any data source via DirectContext
- Custom Store — create your own storage backend
- Custom Client — build custom search clients

---

### 6. Local vs Remote MCP — When to Use What

**Local MCP (stdio):**
- Auggie runs as a subprocess on your machine
- Auth via `auggie login` session
- Best for: individual developer workflows, IDE integrations
- Pros: simple, fast, no network config
- Cons: only works on the machine running it

**Remote MCP (HTTP/SSE):**
- Context Connectors can spin up an HTTP MCP server
- Clients connect over the network
- Best for: team workflows, CI/CD pipelines, shared indexes
- Augment's IDE extension supports adding remote MCPs with "+ Add remote MCP" button
- Supports both HTTP and SSE transport

**The new landscape:** Context Connectors remote MCP server recipe lets you serve pre-built indexes to any remote client — this is the bridge between "my machine" and "my team."

---

### 7. The Bigger Picture — Why This Matters

**Architect's framing (your philosophy):**
- Context Engine MCP is how you give *any* agent the ability to understand your codebase at Augment's level
- The SDK is how you build custom AI-powered tools that leverage Augment's indexing
- Context Connectors is how you operationalize this in production

**The competitive angle:**
- Augment's retrieval-first design vs dumping everything in a context window
- ~3x faster response times compared to large-context approaches
- Indexes like a search engine, not brute-force token stuffing
- "Signal over noise" — the engine selects relevant context, not everything

**Use cases to highlight:**
- Multi-repo context: index multiple repos, search across all of them
- Onboarding: new engineers can ask natural language questions about the entire codebase
- Cross-agent workflows: Auggie indexes, Claude Code/Cursor/Copilot queries
- CI/CD integration: auto-index on push, agents always have fresh context

---

### 8. Suggested Demo Flow

1. **Cold start:** `auggie login` → `auggie token print` → show the session.json
2. **MCP quick setup:** Add to Claude Code with one command, ask "what is this project?"
3. **SDK demo:** Write a 20-line script that indexes a repo and answers questions
4. **Context Connectors:** Index a real GitHub repo, serve it via local MCP, query from Cursor
5. **S3 persistence:** Show the export/import workflow for production
6. **Remote MCP:** Spin up a remote server, connect from a different machine/tool

---

Want me to turn any of these sections into a full script with timing, or build a visual presentation artifact for the video?\n
## human\n\ncontext engine mcp can also be used with oauth in the remote http endpoint so you dont even need to download and login with auggie cli.
you can also do the remote url with personal api key\n
## assistant\n\nThe user is adding important corrections/additions about Context Engine MCP remote setup options. Let me search for more details on this OAuth and remote URL with personal API key approach.Good catch — let me dig into those remote auth options.
```
This block is not supported on your current device yet.
```

The web search didn't directly find the Augment Context Engine MCP remote HTTP endpoint with OAuth details. Let me search more specifically for the Augment-hosted remote MCP endpoint.
```
This block is not supported on your current device yet.
```\n
## assistant\n\nThe user is adding important details I missed - there are additional auth methods for Context Engine MCP that don't require the Auggie CLI at all. Let me search for the specific OAuth and remote HTTP endpoint details.Good call — let me find the specifics on the OAuth remote endpoint and personal API key setup.
```
This block is not supported on your current device yet.
```

The search results aren't giving me the specific Augment Context Engine MCP remote HTTP endpoint with OAuth details. Let me try to fetch the staging docs the user originally shared, or search more specifically for the Augment-hosted remote MCP endpoint.
```
This block is not supported on your current device yet.
```\n
## assistant\n\nThe user is correcting/adding important info about Context Engine MCP's remote HTTP endpoint capabilities - specifically that it supports OAuth and personal API key authentication, meaning you don't need the Auggie CLI installed locally at all. Let me search for more details on this.Good catch — let me find the specifics on the remote HTTP endpoint with OAuth and personal API key.
```
This block is not supported on your current device yet.
```\n
## assistant\n\nGood catch — that's a significant distinction I missed. Let me research the remote/OAuth setup specifically.
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```\n