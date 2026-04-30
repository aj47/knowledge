---
kind: note
id: claude-conversation-2026-02-17-adding-a-new-skill-6884a43f
updatedAt: 1771290663757
createdAt: 1771288054394
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 6884a43f-a1d3-4b00-8061-548ac90c785c
created_at: 2026-02-17T00:27:34.394835Z
updated_at: 2026-02-17T01:11:03.757725Z
title: "Adding a new skill"
---

# Adding a new skill

## Metadata

- Claude conversation UUID: `6884a43f-a1d3-4b00-8061-548ac90c785c`
- Created: `2026-02-17T00:27:34.394835Z`
- Updated: `2026-02-17T01:11:03.757725Z`
- Message count: 2
- Transcript chars extracted: 549

## Claude summary

**Conversation Overview**

The user requested Claude to add a new skill to their personal skill collection. Claude successfully installed a "rhetorical-analyzer" skill by creating the appropriate directory structure at `/mnt/skills/user/rhetorical-analyzer/` and copying the skill file from the user's uploads. The skill appears to be designed for analyzing written content like articles, tweets, or arguments using a comprehensive framework that includes TL;DR summaries, core points extraction, evidence tables, rhetorical appeals analysis, identification of unexamined assumptions, and steelman arguments. Claude indicated that once installed, the user can trigger this analytical framework by sharing content and using phrases like "break this down" or "what's he really saying" to activate the rhetorical analysis capabilities.

**Tool Knowledge**

Claude used bash commands to manage the skill installation process. The workflow involved creating a directory structure using `mkdir -p /mnt/skills/user/rhetorical-analyzer` to establish the skill's location, then copying the skill definition file from `/mnt/user-data/uploads/SKILL.md` to the newly created skill directory. This pattern suggests that user skills are organized in a hierarchical structure under `/mnt/skills/user/` with each skill having its own subdirectory containing a `SKILL.md` file that defines the skill's functionality and framework.

## Quick excerpt

I'll add this as a user skill now. ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` Done! The **rhetorical-analyzer** skill is now installed at `/mnt/skills/user/rhetorical-analyzer/SKILL.md`. Next time you drop an article, tweet, or argument and say something like "break this down" or "what's he really saying," I'll run it through that framework — TL;DR, core points, evidence table, rhetorical appeals, unexamined ass

## Transcript

## human\n\nadd this skill\n
## assistant\n\nI'll add this as a user skill now.
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Done! The **rhetorical-analyzer** skill is now installed at `/mnt/skills/user/rhetorical-analyzer/SKILL.md`. 

Next time you drop an article, tweet, or argument and say something like "break this down" or "what's he really saying," I'll run it through that framework — TL;DR, core points, evidence table, rhetorical appeals, unexamined assumptions, steelman, the works.\n