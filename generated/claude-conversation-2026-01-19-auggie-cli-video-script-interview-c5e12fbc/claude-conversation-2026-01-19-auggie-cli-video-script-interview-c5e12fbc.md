---
kind: note
id: claude-conversation-2026-01-19-auggie-cli-video-script-interview-c5e12fbc
updatedAt: 1769537242352
createdAt: 1768788857246
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: c5e12fbc-6fc0-4273-ba65-7ca499201a82
created_at: 2026-01-19T02:14:17.246779Z
updated_at: 2026-01-27T18:07:22.352465Z
title: "Auggie CLI video script interview"
---

# Auggie CLI video script interview

## Metadata

- Claude conversation UUID: `c5e12fbc-6fc0-4273-ba65-7ca499201a82`
- Created: `2026-01-19T02:14:17.246779Z`
- Updated: `2026-01-27T18:07:22.352465Z`
- Message count: 34
- Transcript chars extracted: 42010

## Claude summary

**Conversation Overview**

The user is creating a video about best practices for using Auggie CLI, targeting experienced professional developers who are Augment Code customers (likely coming from the VS Code extension) but haven't yet mastered advanced AI coding workflows. Through a structured interview process, Claude helped develop a comprehensive script framework for a 10-minute video titled "AI Coding Tools Are Easy to Use, Hard to Use Well."

The conversation established the core message that "you are the architect, the agent is the worker" and identified five key patterns: Plan First + Interview Mode, Steering/Redirection, Common Traps, Persistent Knowledge, and Tool Permissions. Claude created detailed talking points explaining the reasoning behind each pattern, including why planning prevents agents from making assumptions, how interview mode surfaces requirements through Socratic dialogue, and why setting up data sources (logs, MCP integrations, docs, URLs) before planning ensures better context quality.

The user emphasized that Auggie will soon release a native plan mode feature and wanted to demonstrate how interview and planning modes work together to create spec/PRD files with phases that can be executed by subagents in parallel. They highlighted an important tradeoff: subagents provide speed through parallelization but reduce visibility, making precise steering difficult for complex tasks. The user also wanted to include common failure patterns from their Poseidon project experience, such as agents reaching for "dangerous defaults" like `bazel clean` or `git push -f` when stuck.

Claude developed custom command templates for `/interview` (Socratic requirements gathering) and `/plan` (spec generation with phases), along with a comprehensive beat sheet breaking down timing, talking points, and visual demonstrations for each section. The user provided specific corrections to avoid mentioning competitors and to frame the content for existing Augment customers rather than newcomers to AI coding tools. The final framework includes detailed talking points covering setup prerequisites, the economics of fixing plans versus code, and defensive patterns to prevent common agent failures.

## Quick excerpt

The user wants to create a video about the best ways to use Augment Code CLI (Auggie). They've attached two documents: 1. A document about "AI Agent Development Patterns" from a Poseidon project - this covers patterns like spec-driven development, AGENTS.md files, iterative refinement, testing strategies, etc. 2. Their course planning PDF which outlines a 10-module educational AI coding course. They want me to interview them to draft a script. This is a Socratic dialogue approach which aligns wi

## Transcript

## human\n\ni need to make a video on the best ways to use auggie cli. i have attached some notes to get us started. interview me so we can draft a script\n
## assistant\n\nThe user wants to create a video about the best ways to use Augment Code CLI (Auggie). They've attached two documents:

1. A document about "AI Agent Development Patterns" from a Poseidon project - this covers patterns like spec-driven development, AGENTS.md files, iterative refinement, testing strategies, etc.

2. Their course planning PDF which outlines a 10-module educational AI coding course.

They want me to interview them to draft a script. This is a Socratic dialogue approach which aligns with their PRD interview system style.

Let me start with some focused questions to understand their vision for this video - scope, audience, key differentiators, and what specific Auggie CLI features they want to highlight.Perfect, let's build this out. I'll interview you to get the details we need for a compelling script.

**Starting with scope and positioning:**

1. What's the target length for this video? Quick tips (5-7 min), deep dive (15-20 min), or comprehensive tutorial (30+ min)?

2. Who's watching this - developers brand new to AI coding tools, people migrating from Cursor/Copilot, or experienced Auggie users looking to level up?

3. Looking at the Poseidon notes, the AGENTS.md pattern and the "hold on, our goal is..." redirect technique stood out as high-signal practices. Are there specific Auggie CLI features or workflows you've found that map directly to these patterns - things that make Auggie particularly good at them?\n
## human\n\nthe length is not too important but probably around 10 mins
audience is experienced professional developers that havent dived into pro level of ai coding yet
there isnt anything too specific in auggie but you can look at the docs to get a sense of features https://docs.augmentcode.com/cli/overview\n
## assistant\n\nThe user wants me to fetch the Augment Code CLI documentation to understand the features, then continue the interview to build out the script. Let me fetch that documentation first.
```
This block is not supported on your current device yet.
```

Good, I got the overview. Let me fetch more specific pages to understand the full feature set - particularly the interactive mode, automation, configuration, and ACP (Agent Client Protocol) sections.
```
This block is not supported on your current device yet.
```

Let me search for more Auggie CLI documentation to get a better sense of the features.
```
This block is not supported on your current device yet.
```

Great, I'm getting a good sense of the Auggie CLI features. Let me also fetch more specific documentation on custom commands and tool permissions since those seem like power-user features.
```
This block is not supported on your current device yet.
```

Let me search for more on custom commands and tool permissions specifically.
```
This block is not supported on your current device yet.
```

I now have a good understanding of Auggie CLI features. Let me continue the interview to build out the script. The key features I've identified include:

1. **Context Engine** - The leading differentiator. Automatic codebase understanding without manual context selection.

2. **Interactive Mode** - Full-screen TUI with real-time streaming, visual progress, tool calls visible

3. **Non-Interactive Modes**:
   - `--print` for single-shot execution (CI/CD, automation)
   - `--quiet` for clean output (scripting, piping)

4. **Custom Commands** - `.augment/commands/*.md` files that become slash commands

5. **Tool Permissions** - Control what the agent can do, especially for automation

6. **Session Management** - `auggie session list`, `auggie session resume`

7. **MCP Integrations** - Connect to GitHub, Linear, Jira, etc.

8. **Model Selection** - Choose between Claude, GPT-4, etc.

9. **Tasklist** - Break complex work into steps

10. **GitHub Actions** - `augmentcode/describe-pr`, `augmentcode/review-pr`

11. **ACP Support** - Agent Client Protocol for editor integration

Now let me continue the interview to get more specific guidance for the script.Got it. I've gathered the key features. Now let me continue the interview to shape the narrative:

**On framing and angle:**

4. The Poseidon notes emphasize patterns like "ask for a plan first," "hold on, our goal is..." redirects, and AGENTS.md for persistent knowledge. Do you want the video to explicitly connect these proven agent-steering techniques to Auggie's features (like custom commands for the "ask for a plan" pattern, tool permissions for "dangerous defaults," session resume for context persistence)?

5. What's the hook? A few angles come to mind:
   - "The terminal is where agents actually shine" (automation angle - CI, scripts, pipelines)
   - "Context Engine is the killer feature" (differentiation from Claude Code/Gemini CLI)
   - "Stop babysitting your AI" (tool permissions + custom commands = less hand-holding)

6. For your audience of experienced devs new to "pro level" AI coding - what's the #1 misconception or mistake you see them make that this video should address? (e.g., "they treat it like autocomplete," "they don't give enough context," "they let the agent run wild")\n
## human\n\n1. yes referring to features is good. we should also note that auggie will be releasing a plan mode coming very soon which will make this all alot more streamlined though ultimately work the same
2. "The terminal is where agents actually shine" (automation angle - CI, scripts, pipelines) is the closest hook from the 3 given but id like to brainstorm further
3. they have no idea, how to prompt or even that they should make a plan first, or how to use subagents, or how to steer the agent properly\n
## assistant\n\nThe user wants to:
1. Reference Auggie features and mention the upcoming plan mode
2. Brainstorm hooks further - they like the automation/terminal angle but want to explore more
3. The core problem for the audience is they don't know: how to prompt, that they should plan first, how to use subagents, or how to steer agents

Let me continue interviewing to nail down the hook and structure.Great, this is shaping up well. The "they have no idea" point is gold - that's the gap this video fills.

**Brainstorming hooks:**

Let me throw out some alternatives and hybrids:

- "AI coding tools are easy to use, hard to use *well*" (positions the video as the missing manual)
- "The difference between AI-assisted and AI-*driven* development" (implies a level-up)
- "Why your AI agent keeps going off the rails (and how to fix it)" (problem-first hook)
- "The workflows nobody teaches you" (curiosity gap + positions you as insider)
- "From copilot to coworker" (evolution framing - they're using AI wrong)

Or combining terminal + steering: "The terminal forces you to be a better AI operator" (because there's no GUI to hide behind, you *have* to learn the patterns)

Which of these resonates? Or what's missing from them?

**On structure:**

7. Given the ~10 min length and the "they have no idea" problem, I'm thinking a structure like:

   - Hook (30 sec): The problem - most devs are using AI agents at 20% capacity
   - Quick context (1 min): Why CLI/terminal matters for going pro
   - Core patterns (6-7 min): The 3-4 techniques that change everything (plan first, steering, subagents, persistent knowledge via custom commands)
   - Auggie-specific demo (2 min): How these map to actual features
   - Tease (30 sec): Plan mode coming, link to full course

Does that flow work, or do you want the Auggie features woven throughout rather than separated?\n
## human\n\n"AI coding tools are easy to use, hard to use well" (positions the video as the missing manual) is good mixed with terminal/cli. 
outline looks good. how can we go next step without writing the whole script\n
## assistant\n\nThe user wants to move forward on the script development without writing the full thing yet. They want a next step that's between the outline and the full script.

Good intermediate steps could be:
1. Beat sheet - the key moments/beats with specific talking points
2. Key demos/visuals mapped to each section
3. The specific commands/features to show at each point
4. Hook + intro written out (since that's the make-or-break part)
5. One-liner summaries for each section that capture the "point"

I should ask which of these would be most valuable, or propose one that makes sense given their workflow (they mentioned they like demos over theory).Let's do a beat sheet - the key moments with specific talking points and what you'd show on screen. This lets us nail the pacing and demos before committing to full scripting.

**BEAT SHEET DRAFT**

---

**HOOK (0:00-0:30)**
- Beat: "You've tried Cursor, Copilot, maybe Claude Code. It works... kind of. But you're still babysitting it."
- Point to land: There's a skill gap nobody talks about - operating the agent, not just prompting it.
- Visual: Quick montage of agent going off the rails? Or just talking head?

---

**WHY CLI (0:30-1:30)**
- Beat: Terminal strips away the magic. No autocomplete crutch. You have to *talk* to it properly.
- Point to land: CLI is where you learn to drive, not just ride.
- Secondary: Also where agents become *automatable* (CI, scripts, pipelines)
- Show: `auggie` launching, the TUI interface

---

**PATTERN 1: Plan First (1:30-3:30)**
- Beat: "Give me a plan before you write code" - the single highest-leverage habit
- Why it works: Catches bad approaches before wasted cycles
- Show: Actual prompt → agent returns plan → you approve/redirect
- Auggie tie-in: Plan mode coming soon, but the pattern works now with prompting
- Command example: `auggie "I want to add auth to this app. Give me a plan first, don't write code yet."`

---

**PATTERN 2: Steering / "Hold on" (3:30-5:30)**
- Beat: Agents drift. They over-engineer. They forget the goal. You need redirect patterns.
- Key phrases: "Hold on, our goal is...", "Stop. Let's start again.", "Look at how X does it"
- Show: Mid-task correction in Auggie session
- Auggie tie-in: Session resume (`auggie session list/resume`) means you can steer across sessions

---

**PATTERN 3: Persistent Knowledge (5:30-7:30)**
- Beat: Agents have amnesia. Every session starts fresh unless you fix this.
- Solution: Custom commands, rules files, AGENTS.md-style docs
- Show: `.augment/commands/` folder structure, a custom command being triggered with `/code-review`
- Auggie tie-in: Custom commands as slash commands, rules/guidelines files

---

**PATTERN 4: Tool Permissions / Guardrails (7:30-8:30)**
- Beat: "Dangerous defaults" - agents will run commands, delete files, push to git if you let them
- Show: Setting up tool permissions, `--remove-tool`, the permission prompt
- Auggie tie-in: `--permission` flag, tools remove command

---

**AUTOMATION TEASE (8:30-9:30)**
- Beat: Once you have these patterns down, CLI unlocks automation
- Quick examples: `--print` for CI, `--quiet` for scripting, GitHub Actions for PR review
- Show: One-liner in a GitHub Action yaml

---

**CLOSE (9:30-10:00)**
- Beat: Plan mode coming. Full course coming. This is just the foundation.
- CTA: Subscribe, link to Augment

---

**Questions for you:**

1. Any beats feel too long/short or out of order?
2. Which demos do you already have footage for vs. need to record?
3. Is there a specific repo/project you'd use for the demos?\n
## human\n\ndont mention competitors.  this is for augment code customers probably from vscode extension. a lot of these things we are saying about cli are true for agents too (they might have come from vscode extension).
we should also include interview mode as a part of planning. use auggie to help guide your thoughts. not completely think for you ,you are the architect. it is the worker. 
the rest looks good\n
## assistant\n\nThe user is giving me important corrections:
1. Don't mention competitors (Cursor, Copilot, Claude Code) - this is for Augment Code customers
2. Audience is likely coming from VS Code extension, not new to Augment
3. The CLI patterns apply to agents in general (IDE agents too)
4. Add "interview mode" as part of planning - using Auggie to guide thoughts, Socratic dialogue approach
5. Frame it as: you are the architect, agent is the worker

Let me revise the beat sheet with these corrections.Good catches. Let me revise:

**REVISED BEAT SHEET**

---

**HOOK (0:00-0:30)**
- Beat: "You've been using Augment. It works. But are you *driving* it, or is it driving you?"
- Point to land: There's a skill gap - becoming the architect, not just the prompter.
- Visual: Talking head or quick Auggie TUI shot

---

**WHY CLI (0:30-1:30)**
- Beat: Everything we cover works in the IDE too. But CLI strips it to fundamentals - no GUI to hide behind.
- Point to land: Learn these patterns here, apply them everywhere. Plus: CLI unlocks automation.
- Show: `auggie` launching

---

**PATTERN 1: Plan First + Interview Mode (1:30-4:00)**
- Beat: "You are the architect. The agent is the worker." Don't let it start building before you've designed.
- Two approaches:
  - Direct: "Give me a plan before you write code"
  - Interview mode: Use Auggie to *interview you* - Socratic dialogue to clarify your own thinking
- Why it works: You refine requirements through conversation. Agent helps you think, doesn't think for you.
- Show: Interview-style prompt → Auggie asks clarifying questions → plan emerges from dialogue
- Auggie tie-in: Plan mode coming soon, streamlines this further

---

**PATTERN 2: Steering / "Hold on" (4:00-5:30)**
- Beat: Agents drift. They over-engineer. You need redirect patterns.
- Key phrases: "Hold on, our goal is...", "Stop. Let's start again.", "Look at how X does it"
- Show: Mid-task correction in Auggie session
- Auggie tie-in: Session resume means context persists across steering corrections

---

**PATTERN 3: Persistent Knowledge (5:30-7:00)**
- Beat: Agents have amnesia. Custom commands fix this.
- Show: `.augment/commands/` folder, triggering `/code-review`
- Point: Your team's patterns, encoded. Repeatable. Shareable.

---

**PATTERN 4: Tool Permissions / Guardrails (7:00-8:00)**
- Beat: Trust but verify. Control what the agent can do.
- Show: Permission setup, `--permission` flag
- Point: Essential for automation, good habit for interactive too

---

**AUTOMATION TEASE (8:00-9:00)**
- Beat: These patterns + CLI = automation superpowers
- Show: `--print`, `--quiet`, GitHub Action one-liner

---

**CLOSE (9:00-9:30)**
- Beat: Plan mode coming. Full course dropping. You're the architect now.
- CTA: Link to Augment, subscribe

---

**Questions:**

1. For the interview mode demo - do you have a PRD interview command or similar you'd show? Or would you demonstrate it with a raw prompt?
2. Does this pacing feel right with the expanded planning section?\n
## human\n\nIt would be great to also provide a sample command for both interview and plan mode. I don't have one. Can you draft one.
Pacing feels good\n
## assistant\n\nThe user wants me to draft sample custom commands for both interview mode and plan mode that they can use in their Auggie demos. These would be markdown files that go in `.augment/commands/` folder.

Looking at the Poseidon notes and the course planning doc, I should create:

1. An interview command - Socratic dialogue to help clarify requirements before coding. This should ask questions, not assume. Help the user think through what they actually want.

2. A plan command - Takes a task and produces a structured plan before any code is written. Should output a plan for review/approval.

These should be practical, usable commands that demonstrate the patterns we're discussing in the video. They should have frontmatter (based on what I saw in the docs about custom commands having frontmatter) and clear instructions.

Let me draft these as markdown files that would go in `.augment/commands/`I'll draft both commands. These would live in `.augment/commands/` and be triggerable as slash commands.
```
This block is not supported on your current device yet.
```

Good, now let me create the plan command. This one takes a task and produces a structured implementation plan before any code is written.
```
This block is not supported on your current device yet.
```

Great, I've created both commands. Now let me present them to the user and provide the files for download.
```
This block is not supported on your current device yet.
```\n
## human\n\ncontinue\n
## assistant\n\nThe user wants me to continue. I presented the files - let me provide context on how these would be used and any other next steps for the video planning.
```
This block is not supported on your current device yet.
```

Good, the files are presented. Now let me continue with the conversation - explain how they'd be used and ask about next steps.Here are both commands. To use them:

1. Drop them in `.augment/commands/` in your project (or `~/.augment/commands/` for global access)
2. Trigger with `/interview` or `/plan` in Auggie

**The workflow in practice:**

```bash
# Start with interview to clarify thinking
auggie
> /interview

# ... Socratic back-and-forth happens ...
# ... you say "let's move to planning" ...

# Then switch to plan mode
> /plan Add user authentication with OAuth

# ... review the plan, request changes ...
# ... say "Ready, let's go" ...

# Now the agent implements with clear direction
```

---

**Next steps for the video - pick your path:**

1. **Record demos first** - I can give you a shot list: the specific prompts to type, what to show, rough timing for each
2. **Write the full script** - Flesh out the beat sheet into actual narration you'd read/riff from  
3. **Create supporting assets** - Diagram of the architect/worker mental model, quick reference card of steering phrases

Which would be most useful right now?\n
## human\n\nand the final beat sheet\n
## assistant\n\nThe user wants the final beat sheet compiled in one clean document, incorporating all the revisions we've made including the sample commands.
```
This block is not supported on your current device yet.
```

Now I'll present all three files to the user - the beat sheet and both commands.
```
This block is not supported on your current device yet.
```

I've provided the user with:
1. The final beat sheet with all revisions
2. The interview.md custom command
3. The plan.md custom command

I should give a brief summary and offer next steps.All three files ready:

1. **auggie-video-beat-sheet.md** - The full production doc with timing, beats, visuals, and key phrases
2. **interview.md** - Socratic requirements gathering command
3. **plan.md** - Implementation planning command

When you're ready for next steps: shot list for recording, full script, or supporting visuals. Good luck with the shoot.\n
## human\n\ni want to run some examples on elasticsearch. can we think of some high level goals to implement\n
## assistant\n\nThe user wants to come up with some high-level goals/features to implement on Elasticsearch that they can use as demo examples for the video. These should be realistic, relatable tasks that would showcase the interview → plan → implement workflow well.

Let me think about what makes a good demo example:
1. Complex enough to warrant planning (not trivial)
2. Simple enough to show in a video without too much setup
3. Relatable to the target audience (experienced devs)
4. Has potential for the agent to go off the rails if not steered properly (demonstrates the value of the patterns)

Elasticsearch use cases could include:
- Setting up search\n
## human\n\ni want to run some examples on elasticsearch. can we think of some high level goals to implement\n
## assistant\n\nThe user wants to use Elasticsearch as the demo project for the video. They need some high-level goals/features to implement that would showcase the interview and plan commands well.

Good demo tasks should be:
1. Understandable to the audience (experienced devs)
2. Complex enough to benefit from planning/interview
3. Not so complex they take forever to demo
4. Show the value of the patterns (steering, planning, etc.)

Let me think of some Elasticsearch-related tasks that would work well:Good choice - Elasticsearch is meaty enough to show real planning value. A few directions:

**Search Features**
- Add fuzzy search / typo tolerance to an existing search endpoint
- Implement autocomplete/suggestions using completion suggester
- Add faceted search with aggregations (filters by category, price range, etc.)

**Data Pipeline**
- Build an indexing pipeline for a new document type
- Add a sync mechanism between a database and ES index
- Implement bulk indexing with error handling and retry logic

**Operational**
- Add search analytics tracking (what users search, click-through rates)
- Implement index aliasing for zero-downtime reindexing
- Build a health check / monitoring endpoint for ES cluster status

**Query Enhancement**
- Add relevance tuning (boosting certain fields, custom scoring)
- Implement search-as-you-type with debouncing
- Add synonym support or query expansion

---

Which domain feels right for the demo? Are you working against an existing ES setup/codebase, or would this be greenfield? That'll help narrow to 1-2 concrete tasks that show the interview → plan → implement flow cleanly.\n
## human\n\nplan and interview mode will be demod together to create a spec / prd file that we will work off. i also tell it to organise in phases which can be run with subagents in parralel which can speed up development time. we note that this reduces visibility which is very important for more complex tasks. we need to guide the work. this is where pattern 2 of steering is important, to get the most precise steering i recommend not using subagents\n
## assistant\n\nThe user is refining the beat sheet with important clarifications:

1. Interview + Plan modes are demoed together as a single workflow that produces a spec/PRD file
2. They also instruct the agent to organize work into phases that can be run with subagents in parallel
3. But there's a tradeoff: subagents reduce visibility, which matters for complex tasks
4. For precise steering, they recommend NOT using subagents
5. This connects Pattern 1 (planning) to Pattern 2 (steering) - there's a spectrum of control vs speed

This is a really important nuance - it's about the architect knowing when to parallelize vs when to maintain tight control. Let me update the beat sheet to reflect this.Great refinement. This adds a critical dimension - the control vs. speed tradeoff. Let me update the beat sheet:
```
This block is not supported on your current device yet.
```

Now I need to update Pattern 2 to connect back to this - emphasizing that steering requires visibility, which is why you skip subagents for complex tasks.
```
This block is not supported on your current device yet.
```

Now I should also update the /plan command to include the phases/subagent structure. Let me update that file too.
```
This block is not supported on your current device yet.
```

Now let me also add a key phrase about the subagent tradeoff to the key phrases section at the bottom of the beat sheet.
```
This block is not supported on your current device yet.
```

Good, now let me present the updated files to the user.
```
This block is not supported on your current device yet.
```

Good. Let me now summarize what changed for the user.Updated all three files. Key changes:

**Beat sheet:**
- Pattern 1 now shows interview → plan as a unified workflow producing a spec/PRD
- Plan includes phases organized for parallel subagent execution
- Added the tradeoff: subagents = speed, but reduced visibility
- Pattern 2 now explicitly connects back: "You can only steer what you can see"
- Clear guidance: complex/precise work → skip subagents, maintain direct control

**Plan command:**
- Now outputs a spec/PRD structure
- Includes "Implementation Phases" section with dependencies flagged
- Phases marked as parallelizable or sequential
- Each phase has its own verification criteria

This creates a nice narrative arc: plan carefully → decide your control level → steer as needed. The architect chooses when to delegate and when to drive directly.\n
## human\n\nhelp me build points. plan first why? (building context, research (web and codebase + external mcp) interview mode why? why steering and how.\n
## assistant\n\nThe user wants me to help build out the "why" behind each pattern - the reasoning and justification that will make the video compelling. Let me interview them to draw this out, or provide some starting points they can react to.

Let me draft talking points for each section that explain the WHY, not just the WHAT.Let me draft the reasoning for each. React to these and we'll refine:

---

**PLAN FIRST - WHY?**

1. **Building context before action**
   - Agent needs to understand the landscape before it can navigate
   - Planning phase forces the agent to: read relevant files, understand existing patterns, map dependencies
   - Without this: agent makes assumptions, invents patterns that don't match your codebase

2. **Research happens during planning**
   - Web search: docs for libraries, APIs, best practices
   - Codebase search: "how do we do X elsewhere?", existing patterns, conventions
   - External MCP: Jira tickets, Linear issues, Notion docs, Slack context
   - All this context gets gathered BEFORE code is written, not discovered mid-implementation

3. **Spec becomes the artifact**
   - Planning produces a document you can review, share, version
   - If agent goes off track later, you have the spec to point back to
   - Team visibility: others can review the plan before work starts

4. **Cheaper to fix a plan than fix code**
   - Catching a bad approach in planning = 2 minutes of conversation
   - Catching a bad approach after implementation = hours of rework + debugging

---

**INTERVIEW MODE - WHY?**

1. **You don't always know what you want**
   - "Add auth" - what kind? OAuth? Magic link? Session-based? Scopes?
   - Interview forces you to confront the ambiguity before the agent does
   - Agent asking questions > agent making assumptions

2. **Socratic method surfaces edge cases**
   - "What happens if the user is already logged in?"
   - "What if the token expires mid-session?"
   - Questions you wouldn't have thought to specify

3. **You stay the architect**
   - Interview mode keeps YOU in the driver's seat
   - Agent is helping you think, not thinking for you
   - Your decisions, clarified and documented

4. **Output feeds directly into planning**
   - Interview produces requirements
   - Requirements feed into spec/PRD
   - Clean handoff, nothing lost

---

**STEERING - WHY AND HOW?**

**Why steering is necessary:**

1. **Agents drift by nature**
   - They optimize for "complete the task" not "complete the task the way you'd want"
   - Without correction, they'll over-engineer, add unnecessary abstractions, invent patterns

2. **Context window fills up**
   - As conversation gets long, early instructions get fuzzy
   - Steering resets focus: "Hold on, our goal is..."

3. **You learn things mid-implementation**
   - "Oh wait, there's already a util for that"
   - "Actually, let's use the simpler approach"
   - Plans change - steering is how you communicate that

**How to steer:**

1. **Interrupt early, not late**
   - Catch drift in 2 files, not 20
   - Watch the agent work, don't just check the final output

2. **Be explicit and direct**
   - "Hold on, our goal is X" - restate the objective
   - "Stop. Let's start again with Y" - full reset when needed
   - "Look at how Z does it" - point to reference patterns

3. **The visibility tradeoff**
   - You can only steer what you can see
   - Subagents = parallel speed but blind spots
   - For complex/precise work: stay in single-agent mode, maintain direct control
   - For well-defined phases: subagents fine, you've already done the thinking

---

**Questions to draw out more:**

1. On planning - is there a specific moment where you've seen "no plan" blow up badly? A story for the video?

2. On interview - how do you typically prompt it? "Interview me about X" or something more specific?

3. On steering - what's the most common drift you see? Over-engineering? Wrong patterns? Scope creep?\n
## human\n\nwhat else are we missing from:\n
## assistant\n\nThe user is asking me to compare what we have in our beat sheet against this comprehensive Poseidon document to see what we might be missing. Let me analyze the key insights from the Poseidon doc that aren't yet in our video outline.

Looking at the Poseidon doc's key learnings:

**Already covered in our beat sheet:**
- Spec-driven development → Our Pattern 1 (Plan + Interview)
- "Give me a plan" → Pattern 1
- "Hold on, our goal is..." → Pattern 2 (Steering)
- "Look at how X does it" → Mentioned in steering key phrases
- Tool permissions → Pattern 4
- AGENTS.md / persistent knowledge → Pattern 3 (Custom commands)

**Potentially missing or under-emphasized:**

1. **"Look at how X does it"** - This is HUGE in the Poseidon doc. It's about maintaining codebase consistency by pointing the agent to existing patterns. We mention it in passing but could elevate it.

2. **Scope reduction / "For now, only implement X"** - This is a key technique that prevents over-engineering. We don't explicitly call this out.

3. **Proto-first / contract-first design** - Defining interfaces before implementation. This is about typed contracts catching integration issues early. Not in our beat sheet.

4. **Deploy-test-fix loops** - Frequent deployment catches real issues. The idea of tight feedback loops. We have "automation tease" but not the iterative testing cycle.

5. **Common failure modes** - We talk about drift and over-engineering but there are others:
   - Loose typing
   - Leftover artifacts from refactoring
   - "Not actually working" - agent says done but it's not
   - Dangerous defaults (bazel clean, force push)

6. **Reference existing code pattern** - "Look at how service X does this" - maintaining consistency

7. **The "closing the loop" meta-observation** - The more agents can iterate without human intervention, the faster dev goes. This is powerful framing.


8. **What NOT to do in AGENTS.md** - Negative examples and anti-patterns are worth calling out explicitly. The doc shows what breaks things, not just what works.

For a 10-minute video targeting developers new to AI-assisted coding, I should focus on the most immediately practical techniques: referencing existing patterns to avoid reinventing the wheel, constraining scope upfront to prevent bloat, the power of tight deploy-test-fix cycles to catch real problems, and the critical check that something actually works rather than just appears complete.

These principles could either strengthen the existing sections or stand alone as standalone tips. The key is emphasizing verification—always test assumptions rather than assuming something's done just because it compiles or runs.Reading through the Poseidon doc against our beat sheet, here's what we're missing or under-emphasizing:

---

**STRONG ADDITIONS:**

1. **"Look at how X does it"** - This is huge in the Poseidon doc but we only mention it in passing
   - Prevents invented patterns
   - Maintains codebase consistency
   - Simple prompt: "Look at how [existing feature] does this and follow that pattern"
   - Could fold into Steering or make its own mini-beat

2. **Scope reduction: "For now, only implement X"**
   - Explicit technique against over-engineering
   - "Later we can add Y" - gives agent permission to stop
   - We imply this but don't teach it directly

3. **"Not actually working" problem**
   - Agent says "done" but feature doesn't work E2E
   - Trust but verify - always test yourself
   - The deploy-test-fix loop as a discipline

4. **Dangerous defaults**
   - Agents reach for nuclear options when stuck (delete everything, force push, clean cache)
   - This strengthens our Pattern 4 (tool permissions) with concrete "why"

---

**MINOR GAPS:**

5. **Proto-first / contract-first** - Define interfaces before implementation. Might be too specific for general audience?

6. **Negative documentation** - AGENTS.md should include what NOT to do, not just what to do. Could mention in Pattern 3.

7. **The "closing the loop" framing** - Every manual step breaks flow. The goal is reducing human involvement to high-value decisions only. Good for the automation tease section.

---

**My recommendation:**

Add a quick "Common Traps" beat (~45 sec) between Steering and Persistent Knowledge:
- "For now, only X" (scope)
- "Look at how X does it" (consistency)  
- Verify it actually works (don't trust "done")

This gives them defensive patterns, not just offensive ones.

Should I update the beat sheet with this addition?\n
## human\n\nstrong additions are good. add points about those\n
## assistant\n\nThe user wants me to add the strong additions as points to the existing document structure. Looking back at what I created earlier, I had drafted points for:
- Plan first - why
- Interview mode - why
- Steering - why and how

Now I need to add points for:
1. "Look at how X does it" 
2. Scope reduction: "For now, only implement X"
3. "Not actually working" problem - trust but verify, deploy-test-fix loop
4. Dangerous defaults - strengthens tool permissions

Let me create an updated points document that includes all of these. I should add these as additional sections/points that expand our beat sheet.
```
This block is not supported on your current device yet.
```

Now I should also update the beat sheet to incorporate these additions, particularly the "Common Traps" beat I suggested. Let me update the beat sheet to include:

1. A new beat for "Common Traps" covering:
   - "For now, only X" (scope)
   - "Look at how X does it" (consistency)
   - Verify it actually works (don't trust "done")

2. Strengthen Pattern 4 (tool permissions) with the dangerous defaults context

Let me update the beat sheet file.Now let me update the beat sheet to incorporate these as a new beat:
```
This block is not supported on your current device yet.
```

Now I need to update the rest of the patterns to renumber them and adjust timing. Let me also strengthen the tool permissions section with the dangerous defaults framing.
```
This block is not supported on your current device yet.
```

Now let me update the Tool Permissions section with the dangerous defaults framing to make it more concrete.
```
This block is not supported on your current device yet.
```

Now let me update the Automation section and Close with adjusted timing.
```
This block is not supported on your current device yet.
```

Let me also update the key phrases section to include the new phrases we've added.
```
This block is not supported on your current device yet.
```

Now let me present both files to the user - the updated beat sheet and the new talking points document.
```
This block is not supported on your current device yet.
```

Good, I've created both files. Let me give the user a summary of what was added.Two files updated:

**Beat sheet changes:**
- Added new **Pattern 3: Common Traps** (5:30-6:30) covering scope reduction, pattern reference, and deploy-test-fix
- Renumbered patterns 4 and 5
- Strengthened **Tool Permissions** with dangerous defaults framing (specific commands to block)
- Added **negative documentation** to Persistent Knowledge section
- Updated **Automation Tease** with "closing the loop" framing
- New key phrases added

**New talking points doc:**
Deep reasoning for each concept you can pull from when recording:
- Plan First (context, research, spec artifact, cost of fixing)
- Interview Mode (ambiguity, edge cases, architect role)
- Steering (why + how)
- "Look at how X does it"
- Scope reduction
- Trust but verify / deploy-test-fix
- Dangerous defaults
- Negative documentation
- Closing the loop

Video is now ~10:15 with the added beat. Want me to tighten anything or are we ready for next steps (shot list, script, etc.)?\n
## human\n\nadd points for an intro\n
## assistant\n\nThe user wants talking points for the intro/hook section of the video. Let me draft some compelling points that set up the problem and hook the audience.

Key things to hit:
- The gap between "using AI tools" and "using them well"
- Most developers are underutilizing these tools
- The architect vs worker framing
- Why this matters (speed, quality, control)
- Why CLI specifically (though this might be more for the WHY CLI section)

Let me add a section to the talking points doc for the intro.
```
This block is not supported on your current device yet.
```

Let me also update the beat sheet to add more detail to the hook and why CLI sections based on these talking points.
```
This block is not supported on your current device yet.
```

Good updates. Let me present the updated files to the user.
```
This block is not supported on your current device yet.
```

Good, I've updated both files. Let me give the user a summary of what was added.Added intro section to talking points covering:

**The uncomfortable truth**
- Most devs at 20-30% capacity
- Prompting is easy, operating an agent is the real skill
- Still babysitting, still fixing, still re-explaining

**The mental model shift**
- Architect vs worker framing
- Agent is not a pair programmer - it's a fast, literal junior who needs direction
- You're the senior engineer

**Why this matters**
- Speed without control = chaos faster
- 500 wrong lines vs 50 right lines
- The patterns compound

**Why CLI specifically**
- Strips away the magic, forces intentionality
- Learn stick shift, automatic becomes easy
- Plus: automation unlock

Also updated the beat sheet hook and why-CLI sections to match.

Anything feel off or missing from the intro framing?\n
## human\n\nadd points for why planning? why interview.\n
## assistant\n\nThe user wants me to add more detailed talking points for "why planning" and "why interview" sections. Looking at the current talking points doc, I already have sections for these, but the user wants them expanded or made more compelling. Let me look at what I have and enhance them.

Current "PLAN FIRST - WHY?" section covers:
- Building context before action
- Research happens during planning
- Spec becomes the artifact
- Cheaper to fix a plan than fix code

Current "INTERVIEW MODE - WHY?" section covers:
- You don't always know what you want
- Socratic method surfaces edge cases
- You stay the architect
- Output feeds directly into planning

The user wants more depth here. Let me think about what's missing or could be stronger:

For Planning:
- The agent needs to gather context (codebase, web, MCP) BEFORE writing code
- Without a plan, agent makes assumptions and invents patterns
- The spec becomes a reference point when things go off track
- It's about front-loading the thinking

For Interview:
- You often don't know what you want until you're asked
- The agent asking questions > agent making assumptions
- It keeps you in the driver's seat
- Socratic method surfaces edge cases you wouldn't have thought of

Let me also think about the flow: Interview → Plan → Execute. They work together.

I should enhance these sections with more concrete reasoning and maybe examples of what goes wrong without them.
```
This block is not supported on your current device yet.
```\n
## human\n\nalso before plan we need to ensure all data sources will be accessible by the agent if needed. this can be logs, connections via integrations and MCPs to third parties as well as where useful docs, and URLs could be.\n
## assistant\n\nThe user wants me to add a section about ensuring data sources are accessible before planning. This makes sense - the agent needs access to the right context sources to do effective planning. This includes:
- Logs
- MCP connections to third parties
- Integrations
- Useful docs
- URLs

This is about setup/preparation before the planning phase. Let me add this to the talking points.
```
This block is not supported on your current device yet.
```

Let me view the current file to see what's there
```
This block is not supported on your current device yet.
```

I need to expand the PLAN FIRST and INTERVIEW MODE sections with the new content. Let me do a proper replacement.
```
This block is not supported on your current device yet.
```

Good, now let me expand the INTERVIEW MODE section with the deeper reasoning.
```
This block is not supported on your current device yet.
```

Good, now let me update the beat sheet to reflect the context sources setup as part of Pattern 1.
```
This block is not supported on your current device yet.
```

Good. Now let me add a key phrase about context and present the updated files.
```
This block is not supported on your current device yet.
```

Good. Now I should also update the interview.md command to potentially include a note about ensuring data sources are connected. But actually, that might be out of scope for the command itself - it's more of a pre-requisite step before even running the command.

Let me present the updated files.
```
This block is not supported on your current device yet.
```

Let me summarize what I added for the user.Done. Added to both files:

**PLAN FIRST - now includes:**

*Before you plan: ensure the agent can access what it needs*
- Table of data sources: Codebase, Docs, Logs, Tickets/Issues, External APIs, Slack/Notion, Useful URLs
- "Context in, quality out" principle
- Set up MCPs once, benefit every session

*The core problem expanded:*
- Agents act before they understand
- Result: technically correct, practically wrong

*Economics added:*
- Fix a plan = 2 minutes
- Fix code = hours
- Most project failures are design failures, not coding failures

**INTERVIEW MODE - now includes:**

*The core problem:*
- Ambiguity hides in simple requests
- What happens without interview (wasted work, start over)

*Interview surfaces what you actually need:*
- Agent asking questions > agent making assumptions
- Socratic method surfaces edge cases
- You confront ambiguity before the agent does

*You stay the architect:*
- Difference from "just prompting"
- Much higher hit rate on first implementation

*The flow:* Interview → Plan → Execute → Verify

**Beat sheet Pattern 1** now opens with the context sources setup before showing the workflow.

New key phrase added: "Context in, quality out."\n