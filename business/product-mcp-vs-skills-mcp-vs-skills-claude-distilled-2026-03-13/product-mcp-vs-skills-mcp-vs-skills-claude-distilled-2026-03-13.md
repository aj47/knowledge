---
kind: note
id: product-mcp-vs-skills-mcp-vs-skills-claude-distilled-2026-03-13
title: MCPs vs Skills — Distilled Position
context: search-only
updatedAt: 1773432070332
tags: product, mcp_vs_skills
createdAt: 1773432070332
summary: Source: Claude export conversation `MCPs vs Skills: when to use each` Date distilled: 2026-03-13 Skills are the better default for most agent tasks because they keep context lean and reduce protoco...
references: product/mcp-vs-skills/mcp-vs-skills-claude-distilled-2026-03-13.md
---

# MCPs vs Skills — Distilled Position

Source: Claude export conversation `MCPs vs Skills: when to use each`
Date distilled: 2026-03-13

## Working thesis
Skills are the better default for most agent tasks because they keep context lean and reduce protocol overhead.
MCP still has real advantages in narrower cases.

## Best argument for Skills
- lower token overhead
- less context bloat
- simpler mental model
- easier to compose around focused instructions and API access
- often enough to accomplish the same end result without extra protocol layers

## Best argument for MCP
MCP is still strong when the integration itself is the productized interface layer, especially when it needs:
- OAuth redirect flows
- token storage and refresh
- stable tool schemas for third-party services
- instant-on local tool access without skill cold starts

## Important nuance
This is not “Skills good, MCP dead.”
It is:
- **default to Skills** for most workflows
- **use MCP** when integration complexity or auth lifecycle justifies it

## Message framing for content
- “Pick the right tool.”
- “Skills are replacing a lot of MCP usage, not all of it.”
- “Context bloat is a real performance cost, not just an elegance issue.”

## Supporting points noted in the conversation
- Chroma “Context Rot” was used as supporting evidence that more context can degrade model performance.
- A memorable contrast mentioned was roughly `7000 tokens vs 90 tokens` for bulky context versus focused execution.
- Strong rebuttal captured: skills with API access are not “just instructions.”

## Recommended rule of thumb
Use Skills when you want:
- focused execution
- cleaner prompts
- lower overhead
- local or custom workflows

Use MCP when you want:
- robust third-party integration surfaces
- OAuth-heavy tools like Google Drive, Slack, Notion
- standardized reusable tool contracts across clients

## Where this belongs
This note is strategy + messaging, not just script copy. It can feed:
- product positioning
- future docs on architecture choices
- short-form video scripts
