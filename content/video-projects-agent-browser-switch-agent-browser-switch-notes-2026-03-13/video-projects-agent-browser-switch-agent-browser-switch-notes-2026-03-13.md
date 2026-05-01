---
kind: note
id: video-projects-agent-browser-switch-agent-browser-switch-notes-2026-03-13
title: Switching to Agent Browser by Vercel — Video Notes
context: search-only
updatedAt: 1773432070332
tags: video_projects, agent_browser_switch
createdAt: 1773432070332
summary: Source: Claude export conversation `Switching to agent browser by Vercel` Date distilled: 2026-03-13 The story is not “here is another browser tool.” The story is a progression through many browser...
references: video-projects/agent-browser-switch/agent-browser-switch-notes-2026-03-13.md
---

# Switching to Agent Browser by Vercel — Video Notes

Source: Claude export conversation `Switching to agent browser by Vercel`
Date distilled: 2026-03-13

## Core angle
The story is not “here is another browser tool.”
The story is a progression through many browser automation setups until finding one that preserves the things that actually matter in practice.

## Key differentiators captured
- reuses logged-in browser sessions
- does not kill existing Chrome sessions
- can run on remote debugging port `9222`
- works with a separate Chrome profile
- avoids dependence on browser extensions

## Narrative frame
Use the journey itself as proof:
Playwright → MCP Chrome → Chrome DevTools → dev-browser → Agent Browser.

That progression gives credibility and makes the final recommendation feel earned.

## Good hook territory
- tried multiple browser automation stacks and kept the one that did not break normal Chrome usage
- finally found a setup that reuses sessions without wrecking the rest of the browser
- the real feature is not automation alone, it is **non-destructive automation**

## Suggested structure
### Hook
Lead with the practical pain: most browser automation setups break your normal browsing flow.

### Value stack
Explain why the final setup matters:
- keep logins
- keep current Chrome open
- no extension tax
- easier handoff into real workflows

### Demo
Show the debug Chrome profile running separately and connecting cleanly.

### Journey
Quickly show the sequence of previous approaches and why each one fell short.

### Close
Position it as the current best tradeoff for people who actually use browser automation day to day.

## Expandable formats
- 45–60 second short for the core claim
- 2–3 minute YouTube walkthrough for the actual setup and reasoning
