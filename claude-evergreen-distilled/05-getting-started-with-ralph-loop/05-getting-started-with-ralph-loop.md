---
kind: note
id: 05-getting-started-with-ralph-loop
updatedAt: 1775964320231
tags: 
group: claude-evergreen-distilled
title: "Getting started with Ralph Loop" (Evergreen Distilled)
context: search-only
source_note: /Users/ajjoobandi/.agents/knowledge/claude-conversation-2026-01-17-getting-started-with-ralph-loop-e7b6459d/claude-conversation-2026-01-17-getting-started-with-ralph-loop-e7b6459d.md
source_type: claude-evergreen-distilled
themes: [engineering, product, personal, research, agent, prompt, mcp]
---

# "Getting started with Ralph Loop" (Evergreen Distilled)

## Core takeaways

- They initially asked about getting started with "ralph loop," an AI coding technique where agents run iteratively to autonomously complete development tasks.
- Claude explained ralph loop fundamentals and provided simple implementation approaches, including the official Claude Code plugin method and manual bash script approaches.
- The user expressed dissatisfaction with the standard `<promise>COMPLETE</promise>` completion signal pattern and sought alternatives.
- They needed help converting this into a ralph-loop-compatible format.
- The user successfully generated these files and had them validated, with all tasks properly structured with verification commands and dependency chains.

## Reusable insights

- When ready to run the ralph loop, the user clarified they weren't using the official plugin and needed a bash script approach.
- Claude provided a simple infinite loop script that reads PROMPT.md and exits on "RALPH_DONE" output.
- The user encountered issues with streaming output from the Claude CLI, wanting to see tool calls and progress in real-time rather than waiting for complete responses.

## Source

- `/Users/ajjoobandi/.agents/knowledge/claude-conversation-2026-01-17-getting-started-with-ralph-loop-e7b6459d/claude-conversation-2026-01-17-getting-started-with-ralph-loop-e7b6459d.md`
