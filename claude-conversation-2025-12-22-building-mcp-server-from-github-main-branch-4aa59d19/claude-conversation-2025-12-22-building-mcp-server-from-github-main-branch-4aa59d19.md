---
kind: note
id: claude-conversation-2025-12-22-building-mcp-server-from-github-main-branch-4aa59d19
updatedAt: 1766425813169
createdAt: 1766425791585
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 4aa59d19-bfb4-4f3d-bd25-6101bd901979
created_at: 2025-12-22T17:49:51.585033Z
updated_at: 2025-12-22T17:50:13.169107Z
title: "Building MCP server from GitHub main branch"
---

# Building MCP server from GitHub main branch

## Metadata

- Claude conversation UUID: `4aa59d19-bfb4-4f3d-bd25-6101bd901979`
- Created: `2025-12-22T17:49:51.585033Z`
- Updated: `2025-12-22T17:50:13.169107Z`
- Message count: 2
- Transcript chars extracted: 3082

## Claude summary

**Conversation Overview**

The user asked for help replacing an npx-based MCP (Model Context Protocol) server configuration that currently uses a published npm package with one that pulls the latest code directly from the main branch of a GitHub repository at https://github.com/ZubeidHendricks/youtube-mcp-server. They provided their current configuration which uses "npx" with the package "zubeid-youtube-mcp-server" and includes a YouTube API key environment variable.

Claude provided two distinct approaches to accomplish this goal. The first option involved modifying the existing npx command to pull directly from GitHub by changing the package reference to "github:ZubeidHendricks/youtube-mcp-server" while keeping the same command structure. The second option required cloning the repository locally, installing dependencies, building the project if necessary, and then updating the configuration to use "node" as the command with the path to the local build file as an argument. Claude explained the trade-offs between approaches, noting that the GitHub npx method is simpler but may cache installations, while the local clone method provides more control and easier updates through git pull operations. The response included specific configuration examples and step-by-step instructions for both approaches.

## Quick excerpt

The user wants to replace an npx-based MCP server configuration with one that uses the latest code from a GitHub repository instead of the published npm package. There are a few approaches to do this: 1. **Clone and run locally** - Clone the repo, install dependencies, and point the MCP config to the local build 2. **Use npx with a GitHub URL** - npx can install directly from GitHub 3. **Use node directly** - Point to a local clone Let me think about the best options: **Option 1: npx from GitHub

## Transcript

## human\n\nhow can i replace an npx server to get the build from latest main at https://github.com/ZubeidHendricks/youtube-mcp-server

```
{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["-y", "zubeid-youtube-mcp-server"],
      "env": {
        "YOUTUBE_API_KEY": "your_youtube_api_key_here"
      }
    }
  }
}
```\n
## assistant\n\nThe user wants to replace an npx-based MCP server configuration with one that uses the latest code from a GitHub repository instead of the published npm package.

There are a few approaches to do this:

1. **Clone and run locally** - Clone the repo, install dependencies, and point the MCP config to the local build
2. **Use npx with a GitHub URL** - npx can install directly from GitHub
3. **Use node directly** - Point to a local clone

Let me think about the best options:

**Option 1: npx from GitHub directly**
You can use npx with a GitHub URL:
```json
{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["-y", "github:ZubeidHendricks/youtube-mcp-server"],
      "env": {
        "YOUTUBE_API_KEY": "your_youtube_api_key_here"
      }
    }
  }
}
```

**Option 2: Clone locally and run**
1. Clone the repo: `git clone https://github.com/ZubeidHendricks/youtube-mcp-server.git`
2. Install deps: `cd youtube-mcp-server && npm install`
3. Build if needed: `npm run build`
4. Update config to point to the local entry point

The config would look something like:
```json
{
  "mcpServers": {
    "youtube": {
      "command": "node",
      "args": ["/path/to/youtube-mcp-server/dist/index.js"],
      "env": {
        "YOUTUBE_API_KEY": "your_youtube_api_key_here"
      }
    }
  }
}
```

I should provide both options clearly.There are two main approaches to use the latest code from GitHub instead of the published npm package:

## Option 1: npx directly from GitHub

Replace the package name with the GitHub repo path:

```json
{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["-y", "github:ZubeidHendricks/youtube-mcp-server"],
      "env": {
        "YOUTUBE_API_KEY": "your_youtube_api_key_here"
      }
    }
  }
}
```

## Option 2: Clone and run locally (more control)

1. **Clone the repo:**
   ```bash
   git clone https://github.com/ZubeidHendricks/youtube-mcp-server.git
   cd youtube-mcp-server
   npm install
   npm run build   # if there's a build step
   ```

2. **Update your config to point to the local build:**
   ```json
   {
     "mcpServers": {
       "youtube": {
         "command": "node",
         "args": ["/full/path/to/youtube-mcp-server/dist/index.js"],
         "env": {
           "YOUTUBE_API_KEY": "your_youtube_api_key_here"
         }
       }
     }
   }
   ```

   Check the repo's `package.json` for the actual entry point (look for `"main"` or `"bin"` fields).

## Which to choose?

- **Option 1** is simpler but may cache the install
- **Option 2** gives you full control and lets you easily `git pull` to update, plus you can make local modifications

To update with Option 2, just run `git pull && npm install && npm run build` in the cloned directory.\n