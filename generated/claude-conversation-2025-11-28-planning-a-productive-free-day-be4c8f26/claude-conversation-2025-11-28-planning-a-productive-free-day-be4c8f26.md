---
kind: note
id: claude-conversation-2025-11-28-planning-a-productive-free-day-be4c8f26
updatedAt: 1764291828520
createdAt: 1764291273623
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: be4c8f26-1d2d-4f18-99a9-a9e558227620
created_at: 2025-11-28T00:54:33.623348Z
updated_at: 2025-11-28T01:03:48.520099Z
title: "Planning a productive free day"
---

# Planning a productive free day

## Metadata

- Claude conversation UUID: `be4c8f26-1d2d-4f18-99a9-a9e558227620`
- Created: `2025-11-28T00:54:33.623348Z`
- Updated: `2025-11-28T01:03:48.520099Z`
- Message count: 12
- Transcript chars extracted: 9681

## Quick excerpt

Looking at your strategic roadmap, you're in the **Preparation Phase** (through July 2025), and the focus is on compounding without burnout—building skills, relationships, and testing formats while Augment remains your primary focus. For a free day, here's what would move the needle most: ## High-Impact Option: Format Experiment Your roadmap has you testing one format per month. Depending on where you are in the cycle, knock out your monthly format test: - **December:** "2-Minute Optimism" short

## Transcript

## human\n\nok i have a free day tommorow. what should i work on\n
## assistant\n\nLooking at your strategic roadmap, you're in the **Preparation Phase** (through July 2025), and the focus is on compounding without burnout—building skills, relationships, and testing formats while Augment remains your primary focus.

For a free day, here's what would move the needle most:

## High-Impact Option: Format Experiment

Your roadmap has you testing one format per month. Depending on where you are in the cycle, knock out your monthly format test:

- **December:** "2-Minute Optimism" short-form video
- **January:** Mini-documentary (5 min) profiling an interesting person/project
- **February:** Build-in-public thread documenting a weekend project live

A free day is perfect for these since they need focused time blocks.

## Quick Wins You Could Stack

If you want variety across the day:

1. **Evergreen content piece** — Your roadmap flags "My AI Coding Workflow" or "Tools I Actually Use Daily" as high-value assets that keep working. These convert new followers into believers.

2. **Batch 3-4 observation posts** — Your voice guide shows "tool introduction" hooks massively outperform (114K avg views vs 2K for question hooks). Write a few "There's this thing called..." drafts you can post throughout the week.

3. **Network outreach** — DM 3-5 interesting people. Your roadmap targets 25+ warm relationships by July. One good conversation plants seeds for future interviews and collaborations.

What sounds most appealing? I can help you outline any of these.\n
## human\n\nok lets do my ai coding workflow. i will show my two commands i use with auggie cli and augment code review

work.md:

```
Start work on the next unassigned GitHub issue
MAKE SURE IT HAS NO ASSIGNEE
0) Assign it to yourself
1) Read the issue
2) Ensure a clean, up-to-date main in this workspace (cwd)
   - git checkout main
   - git fetch origin
   - git reset --hard origin/main
3) Create a feature/fix branch
   - issue=<number>   slug=<short-slug>
   - git checkout -b feature/${issue}-${slug}   # or: fix/${issue}-${slug}
4) Do the work here (in this cwd)
   - Use the context engine to gather necessary context
   - Commit in small chunks; run tests until green
   - Push branch: git push -u origin HEAD
5) Open a PR into main

Notes
- Prefer descriptive slugs (e.g., settings-dropdown)

```


correct.md

```
we have new comments on our PR.
1. First check to see if the comments are valid by using context engine calls
2. Make a task list plan for solving the valid comments after first suggesting multiple fixes and then choosing the most recommended solution.
3. spawn subagents to work on any of the tasks that can be worked on in parralel without conflicts
4. Make commits to the PR for each solution
```


i make issues as soon as i think or see them with speakmcp, then i run `auggie /work` 
then once the pr is created and the reviews are received i run `/correct`\n
## assistant\n\nThis is great content—it's exactly the kind of "insider workflow" that other AI creators can't show. Let me help you structure this.

First, let me check your voice guide to make sure we nail the scripting:

Based on your voice guide, here's a script that hits your highest-performing patterns:

---

## Script: "My AI Coding Workflow"

**HOOK (0-3 sec)**
"Two commands. That's my entire coding workflow now."

**VALUE STACK (3-10 sec)**
"I use Augment's CLI—auggie—and two custom prompts. Issues go from idea to merged PR with almost no manual git work. Let me show you."

**DEMO PART 1: The Capture (10-25 sec)**
"So whenever I think of something—a bug, a feature, whatever—I just say it out loud with SpeakMCP. It creates a GitHub issue automatically. No context switching. No writing it down and forgetting.

Then when I'm ready to work, I run `auggie /work`."

**SHOW THE PROMPT** *(screen recording of work.md in action)*

"It finds an unassigned issue, assigns it to me, checks out main, creates a branch, does the work, runs tests, pushes, and opens a PR. Let's see..."

**REACTION** *(let this happen naturally when it works)*

**DEMO PART 2: The Review Loop (25-45 sec)**
"Okay so now I've got review comments. Here's the second command: `/correct`"

**SHOW THE PROMPT** *(screen recording)*

"It reads the comments, checks if they're actually valid using context, plans fixes, spawns subagents for anything that can run in parallel, and commits each solution.

Dude—this used to be like 30 minutes of context-switching. Now it's one command."

**CLOSE (45-55 sec)**
"Voice capture to issue. `/work` to PR. `/correct` to merge. That's the whole loop.

Both prompts are in the description—try it yourself."

---

## Production Notes

**Visuals you'll need:**
- Screen recording of SpeakMCP creating an issue
- Terminal showing `auggie /work` running
- The PR being created
- Review comments appearing
- `/correct` running and making commits

**CTA:** Link the two .md files (or a gist) in description—"download/try it" CTAs perform 8x better than "subscribe"

**Length target:** 45-60 seconds for short-form. You could also do a longer YouTube version (3-5 min) showing more of the actual agent work.

---

Want me to tighten this further, or help you create a longer-form version for YouTube?\n
## human\n\nthis is more of a maintainence workflow for small-medium features and bugfixes\n
## human\n\nthis is more of a maintainence workflow for small-medium features and bugfixes, we can tease some other workflows for larger tasks\n
## assistant\n\nGood call—that distinction matters. Here's the revised script:

---

## Script: "My AI Coding Workflow (Maintenance Mode)"

**HOOK (0-3 sec)**
"Two commands. That's my entire workflow for bugs and small features."

**VALUE STACK (3-10 sec)**
"I use Augment's CLI and two custom prompts. Issues go from idea to merged PR with almost no manual git. Let me show you."

**DEMO PART 1: The Capture (10-25 sec)**
"Whenever I notice something—bug, small feature, whatever—I just say it out loud with SpeakMCP. Creates a GitHub issue automatically. No context switching.

Then when I'm ready: `auggie /work`"

**SHOW THE PROMPT** *(screen recording)*

"Finds an unassigned issue, assigns it to me, creates a branch, does the work, runs tests, opens a PR. Let's see..."

**REACTION** *(natural)*

**DEMO PART 2: The Review Loop (25-40 sec)**
"Now I've got review comments. Second command: `/correct`"

**SHOW THE PROMPT** *(screen recording)*

"Reads the comments, validates them against the codebase, spawns subagents for parallel fixes, commits each solution.

This used to be 30 minutes of context-switching. Now it's one command."

**CLOSE + TEASE (40-55 sec)**
"Voice capture → `/work` → `/correct` → merge. That's my maintenance loop for bugs and small features.

For bigger stuff—new systems, multi-file refactors—I've got different workflows. I'll show those next.

Prompts are in the description. Try it."

---

Sets up a natural series without overpromising what this one covers. Want me to help outline what those "bigger stuff" workflows could be for future videos?\n
## human\n\nwrite dot points of many starting sentences that i can look at as notes, i can continue the sentence myself but its to remind me what points to mention while recording\n
## assistant\n\nHere's your recording cheat sheet:

---

## Dot Points: AI Coding Workflow (Maintenance Mode)

**HOOK**
- Two commands...
- This is my entire workflow for...

**VALUE STACK**
- I use Augment's CLI and...
- Issues go from idea to...
- No manual git...

**SPEAKMCP CAPTURE**
- Whenever I notice something...
- I just say it out loud...
- Creates a GitHub issue automatically...
- No context switching...
- No writing it down and...

**THE /WORK COMMAND**
- Then when I'm ready...
- Finds an unassigned issue...
- Assigns it to me...
- Creates a branch...
- Does the work...
- Runs tests until...
- Opens a PR...
- Let's see if...

**THE /CORRECT COMMAND**
- Now I've got review comments...
- Reads the comments...
- Checks if they're actually valid...
- Spawns subagents for anything that can...
- Commits each solution...
- This used to be like...

**CLOSE + TEASE**
- Voice capture, /work, /correct...
- That's my maintenance loop for...
- For bigger stuff—new systems, multi-file...
- I've got different workflows for...
- I'll show those...
- Prompts are in the description...

---

Print this or keep it next to your camera. Want me to add any technical details you might forget to mention?\n
## human\n\nmake this into a doc i can print.
then make a doc i can add to this project so i can outline this style of script note writing for next video\n
## assistant\n\n```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Now I'll create both documents:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Now I'll create the script notes template guide for your project:
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Done. Here are your two documents:

**1. Recording Notes (print this for tomorrow)**
[View your recording notes](computer:///mnt/user-data/outputs/ai-coding-workflow-recording-notes.docx)

One-page cheat sheet with all the sentence starters for your AI Coding Workflow video. Print it or keep it next to your camera.

**2. Script Notes Template Guide (add to project)**
[View the template guide](computer:///mnt/user-data/outputs/techfren-script-notes-template-guide.docx)

Reference doc explaining the format so you (or Claude) can generate notes like this for any future video. Covers the structure, how to write starters, and the workflow.

Good luck recording tomorrow—this one's going to hit.\n