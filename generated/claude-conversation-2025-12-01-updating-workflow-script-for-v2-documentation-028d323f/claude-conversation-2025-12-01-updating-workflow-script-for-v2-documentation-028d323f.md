---
kind: note
id: claude-conversation-2025-12-01-updating-workflow-script-for-v2-documentation-028d323f
updatedAt: 1764564676430
createdAt: 1764557808391
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 028d323f-1750-4456-b47e-5fc510648fe6
created_at: 2025-12-01T02:56:48.391518Z
updated_at: 2025-12-01T04:51:16.430870Z
title: "Updating workflow script for v2 documentation"
---

# Updating workflow script for v2 documentation

## Metadata

- Claude conversation UUID: `028d323f-1750-4456-b47e-5fc510648fe6`
- Created: `2025-12-01T02:56:48.391518Z`
- Updated: `2025-12-01T04:51:16.430870Z`
- Message count: 6
- Transcript chars extracted: 10947

## Claude summary

**Conversation Overview**

The user discussed updating their AI coding workflow script based on a new v2 scripting guide. They had previously created an "AI Coding Workflow" video script demonstrating their development process using two commands: "auggie /work" and "/correct". The user wanted to optimize this script using new principles from their v2 voice/scripting guide, which emphasized bold claims as the top hook type (80% success rate), the critical importance of the first 10 words, avoiding slow starts like "so" or "hey," and front-loading comparisons for credibility.

During the conversation, the user clarified their actual workflow: SpeakMCP creates GitHub issues in seconds and automatically spawns an Augment agent running their custom work command. They also mentioned that Augment Code Review automatically reviews their PRs and is the leading code review tool on the Greptile benchmark. This clarification significantly simplified and strengthened their workflow narrative from the original "two commands" approach to a more streamlined "one voice command triggers everything" process.

Claude created updated script documents applying v2 principles, changing the hook from "Two commands. That's my entire workflow for bugs and small features" to "One voice command. That's it. Issue to merged PR." The updated script incorporated the Greptile benchmark mention for credibility, front-loaded the time-saving comparison, used shorter sentences, and included an action-oriented CTA. The user's workflow demonstrates voice-to-production automation using SpeakMCP for issue creation, Augment CLI for development work, automatic code review, and a correction command for addressing review feedback.

**Tool Knowledge**

Claude used the docx skill to create professional Word documents for the user's video script and recording notes. The documents required specific formatting with custom styles including colored headings (green text on dark backgrounds), different paragraph styles for script lines versus emphasis notes, and structured tables for comparisons. The docx-js library syntax worked well for creating multi-section documents with custom styling, table borders, and shading. For the user's video production needs, the documents included both a full detailed script with production notes and a simplified recording notes version with just sentence starters for natural on-camera delivery. The tool successfully generated documents with proper spacing, indentation for hierarchical content, and visual elements like comparison tables showing v1 versus v2 script changes.

## Quick excerpt

The user is asking about potentially updating their workflow script based on the new v2 scripting document (techfren-voice-scripting-guide-v2.docx). They're referencing something we discussed before - a "workflow script." Let me search past conversations to find what workflow script they're referring to. ``` This block is not supported on your current device yet. ``` I found the relevant conversation. The user made an "AI Coding Workflow" video with two commands they use - "auggie /work" and "au

## Transcript

## human\n\nmight we change our workflow script given the new v2 scripting doc\n
## assistant\n\nThe user is asking about potentially updating their workflow script based on the new v2 scripting document (techfren-voice-scripting-guide-v2.docx). They're referencing something we discussed before - a "workflow script."

Let me search past conversations to find what workflow script they're referring to.
```
This block is not supported on your current device yet.
```

I found the relevant conversation. The user made an "AI Coding Workflow" video with two commands they use - "auggie /work" and "auggie /correct" (or similar). Let me search for more specific details about the actual script content.
```
This block is not supported on your current device yet.
```

Found it. The user created an "AI Coding Workflow" video script showing their two commands: `auggie /work` and `/correct`. They also created a "Script Notes Template Guide" document.

Now they're asking if we should update that workflow script based on the new v2 scripting guide. Let me look at what the v2 guide changes compared to v1:

Key changes in v2:
1. **Bold Claims now ranked #1 hook type** (80% success rate vs 50% for Tool Intros)
2. **New "First 10 Words" rule** — the data shows this is where videos win or lose
3. **Slow Start Warning** — "so," "hey," "what's up" openers kill retention (5x more common in failures)
4. **Clarified "so" usage** — great as transition, deadly as opener
5. **Updated template priority** — Bold Claim templates now lead

Looking at the original script:

**Original HOOK:**
"Two commands. That's my entire workflow for bugs and small features."

This is actually already pretty good—it's a bold claim. But let me see if we can make it even stronger based on the v2 guidance.

The v2 guide emphasizes:
- Bold claims in first 30 seconds correlate with top performers (25% vs 8% in bottom)
- Tool name in first 50 words correlates with top performers (40% vs 25%)
- Never start with "so," "hey," or "what's up"
- Use extreme language: "This changed everything" > "I tried something new"
- Comparisons for credibility

Let me suggest updates to the script based on these insights.Found your AI Coding Workflow script. Looking at the v2 guide changes, here's what stands out:

## Key v2 Updates That Affect Your Script

| v2 Change | Current Script | Opportunity |
|-----------|----------------|-------------|
| **Bold Claims = #1** (80% success) | Hook is decent but not extreme | Make it bolder |
| **First 10 Words Rule** | "Two commands. That's my entire workflow..." | Stronger, but could hit harder |
| **Tool name in first 50 words** (40% top vs 25% bottom) | Augment mentioned ~15 words in | ✓ Good |
| **Comparisons for credibility** | "30 minutes → one command" buried at end | Move comparison forward |

## Suggested Updates

**Original Hook:**
> "Two commands. That's my entire workflow for bugs and small features."

**v2-Optimized Hook:**
> "I automated 90% of my git workflow with two prompts. Bugs go from idea to merged PR—almost no manual work."

Why: Leads with a **specific metric** ("90%") + **bold claim** ("automated"). The "30 minutes → one command" payoff is now front-loaded.

**Original Value Stack:**
> "I use Augment's CLI and two custom prompts. Issues go from idea to merged PR with almost no manual git."

**v2-Optimized:**
> "Augment CLI. Two custom prompts. Voice capture → PR → merge. Let me show you."

Why: Punchier sentences (v2 shows 24.6 words avg in top performers vs 28.4 in bottom). Stacks benefits faster.

---

Want me to create an updated full script and recording notes doc with these v2 principles applied?\n
## human\n\nyes\n
## assistant\n\nThe user wants me to update their AI Coding Workflow script based on the v2 voice/scripting guide principles. Let me review the key v2 changes and apply them:

Key v2 principles:
1. Bold Claims = #1 hook type (80% success rate)
2. First 10 words are critical
3. Never start with "so," "hey," "what's up"
4. Tool name in first 50 words
5. Comparisons for credibility (move them forward)
6. Shorter sentences (24.6 words avg vs 28.4)
7. Use "just" liberally
8. Action CTAs (download/try) over subscribe
9. "Free" and "open source" are magic words
10. Don't hedge with "I think" - be assertive

Let me create an updated script and recording notes that apply these v2 principles. I should use the docx skill to create proper documents.
```
This block is not supported on your current device yet.
```

I need to read the docx-js.md file for creating new documents since I'm creating the script and recording notes from scratch.
```
This block is not supported on your current device yet.
```

Now I have everything I need. Let me create:
1. An updated script that applies v2 principles
2. Recording notes (sentence starters) for the video

Key v2 principles to apply:
1. Bold Claims = #1 hook type (80% success rate) - Lead with a specific metric
2. First 10 words are critical - "I automated 90% of my git workflow with two prompts"
3. Tool name in first 50 words - Augment mentioned early
4. Comparisons for credibility moved forward - "30 minutes → one command"
5. Shorter sentences (24.6 words avg)
6. Use "just" liberally
7. Action CTAs (download/try)
8. Be assertive, no hedging

Let me create both documents.
```
This block is not supported on your current device yet.
```

Now I need to run the script to generate the documents.
```
This block is not supported on your current device yet.
```

Both documents have been created. Let me summarize what was created and the key changes applied.Done. Here are your updated documents:

**1. Full Script (V2)**
[View your v2 script](computer:///mnt/user-data/outputs/ai-coding-workflow-script-v2.docx)

**2. Recording Notes (V2)**  
[View your v2 recording notes](computer:///mnt/user-data/outputs/ai-coding-workflow-notes-v2.docx)

---

## V2 Changes Applied

| Principle | V1 | V2 |
|-----------|----|----|
| **Hook** | "Two commands. That's my entire workflow..." | **"I automated 90% of my git workflow with two prompts."** |
| **First 10 words** | Decent but not extreme | Specific metric + bold claim |
| **Comparison** | Buried at end ("30 min → one command") | **Front-loaded in Value Stack** |
| **Sentence length** | 28+ words avg | Punchy: "Finds issue. Assigns it. Creates branch. Does work. Opens PR." |
| **CTA** | "Try it yourself" | **"Prompts are linked. Try it."** (action-oriented) |
| **Hedging** | "almost no manual work" | Cut. Assertive throughout. |

---

The recording notes are one-page printable—just sentence starters you glance at. The full script includes production notes, clip potential, and a V1 vs V2 comparison table for reference.\n
## human\n\nspeakmcp creates github issue in seconds and spawns an auggie agent running my work custom command.

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


then i have augment code review set up to automatically review my PRs

augment code review is the leading code review tool on the greptile benchmark\n
## assistant\n\nThe user is clarifying the workflow:

1. SpeakMCP creates GitHub issue AND spawns auggie agent running /work - all in one voice command
2. Augment Code Review automatically reviews PRs (not manual /correct command)
3. Augment Code Review is the leading tool on the Greptile benchmark

This changes the script significantly:
- It's even simpler than before - voice command triggers the whole chain
- The /correct command might still be used to address review comments, but the review itself is automatic
- We should mention the Greptile benchmark for credibility (comparison/social proof)

Let me update the script to reflect this cleaner flow:
- Voice → SpeakMCP → creates issue + spawns auggie /work → PR created → Augment Code Review auto-reviews → /correct to address comments

Actually, let me re-read what they said. They say:
1. SpeakMCP creates issue in seconds AND spawns auggie agent running work custom command
2. Augment code review is set up to automatically review PRs
3. Augment code review leads on greptile benchmark

So the flow is:
- Voice command to SpeakMCP
- SpeakMCP creates GitHub issue + spawns auggie with /work
- /work does all the git stuff and opens PR
- Augment Code Review automatically reviews the PR
- Then presumably /correct addresses those review comments

This is even cleaner - one voice command kicks off the whole thing, automatic review, then /correct to fix.

I should update the script to:
1. Lead with the even bolder claim (voice to PR with auto review)
2. Mention Greptile benchmark for credibility (v2 says comparisons work well)
3. Show the seamless flow
4. Keep /correct for the review loop

Let me regenerate the documents.Got it—even cleaner flow. Let me update:

**The Real Flow:**
1. Voice → SpeakMCP → creates issue + spawns auggie /work (all automatic)
2. PR opens → Augment Code Review auto-reviews (leading on Greptile benchmark)
3. /correct to address review comments

This is *bolder* than before. One voice command triggers the whole chain.
```
This block is not supported on your current device yet.
```

Now I need to run the script to generate the documents.
```
This block is not supported on your current device yet.
```

Documents generated successfully. Let me provide the user with the links and summarize the key changes.Done. Updated documents:

**1. Full Script (V2)**
[View your v2 script](computer:///mnt/user-data/outputs/ai-coding-workflow-script-v2.docx)

**2. Recording Notes (V2)**  
[View your v2 recording notes](computer:///mnt/user-data/outputs/ai-coding-workflow-notes-v2.docx)

---

## The Flow Now

| Step | What Happens |
|------|--------------|
| **Voice** | Speak into mic: "Add dark mode toggle to settings" |
| **SpeakMCP** | Creates issue + spawns auggie agent with /work |
| **Agent** | Assigns issue → branch → code → tests → PR |
| **Auto Review** | Augment Code Review kicks in (top of Greptile benchmark) |
| **/correct** | Reads comments → validates → parallel fixes → commits |
| **Merge** | Done |

---

## V2 Wins Applied

- **Hook:** "One voice command. That's it. Issue to merged PR."
- **Greptile benchmark** = credibility through comparison (v2 data: 18% top performers vs 8% bottom use comparisons)
- **"I didn't touch my keyboard"** = the money line
- **Punchy close:** "Voice. Issue. Code. Review. Fix. Merge."

This is cleaner than before—one trigger, everything flows.\n