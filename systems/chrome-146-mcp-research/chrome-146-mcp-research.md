---
kind: note
id: chrome-146-mcp-research
title: Chrome 146 Native MCP Support — Research Notes (2026-03-15)
context: search-only
updatedAt: 1773632110761
tags: 
createdAt: 1773632110754
summary: Chrome 146 ships with official MCP server support via `chrome-devtools-mcp` (Google project, 29k stars). 1. **--autoConnect** (Chrome 144+): Connects to active Chrome profile via chrome://inspect, ...
references: chrome-146-mcp-research.md
---

# Chrome 146 Native MCP Support — Research Notes (2026-03-15)

## Summary
Chrome 146 ships with official MCP server support via `chrome-devtools-mcp` (Google project, 29k stars).

## Two Connection Modes
1. **--autoConnect** (Chrome 144+): Connects to active Chrome profile via chrome://inspect, permission dialog, NO separate user-data-dir needed
2. **--browser-url=http://127.0.0.1:9222**: Same CDP approach we currently use

## Key Advantage: Eliminates Stale Profile Problem
The --autoConnect mode connects to whatever Chrome is running — no need to copy profiles.
This would have prevented today's @techfren_ai session loss.

## MCP Config to Add
```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["chrome-devtools-mcp@latest", "--autoConnect"]
    }
  }
}
```

## 29 Tools Available
Input automation (9), Navigation (6), Emulation (2), Performance (4), Network (2), Debugging (6)
Includes: Lighthouse audits, performance tracing, memory snapshots, multi-tab management

## vs agent-browser CLI
- chrome-devtools-mcp: More tools, standard MCP protocol, auto-connect, slim mode
- agent-browser: Simpler shell scripting, @eRef system, existing workflow integration

## Migration Path
1. Add chrome-devtools-mcp as MCP server in DotAgents config
2. Update chrome-browser skill to use MCP tools instead of agent-browser CLI
3. Remove need for ~/chrome-debug-profile entirely
4. Keep agent-browser as fallback during transition

## Security Notes (guard402)
- Open tabs = prompt injection vectors
- Agents inherit full auth sessions
- Use tab-level permissions for least-privilege

## URLs
- GitHub: https://github.com/ChromeDevTools/chrome-devtools-mcp
- Chrome 146 blog: https://developer.chrome.com/blog/new-in-devtools-146
- npm: chrome-devtools-mcp (v0.20.0)
- Security: https://guard402.com/blog/chrome-146-mcp-browser-attack-surface
