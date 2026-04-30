---
kind: note
id: claude-conversation-2026-01-20-script-adaptation-for-auggie-7de85ad5
updatedAt: 1769123763287
createdAt: 1768945749929
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 7de85ad5-4825-4c33-88d5-51bb0c0e086a
created_at: 2026-01-20T21:49:09.929183Z
updated_at: 2026-01-22T23:16:03.287124Z
title: "Script adaptation for Auggie"
---

# Script adaptation for Auggie

## Metadata

- Claude conversation UUID: `7de85ad5-4825-4c33-88d5-51bb0c0e086a`
- Created: `2026-01-20T21:49:09.929183Z`
- Updated: `2026-01-22T23:16:03.287124Z`
- Message count: 67
- Transcript chars extracted: 80374

## Claude summary

**Conversation overview**

The user worked with Claude to develop a comprehensive video script about Augment Code's building blocks, creating a detailed beat sheet that explains nine key concepts: Rules, Commands, Subagents, Hooks, MCP, Permissions, Tasklist, Context Engine, and Skills. The conversation began with the user sharing an existing beat sheet and requesting cross-referencing against original video transcripts and course planning documents to ensure completeness. Claude identified several missing elements including subagents, tasklist functionality, rules precedence order, and hooks - which the user confirmed should be added to create a more thorough reference.

The user demonstrated strong technical knowledge of Augment Code's architecture and requested specific additions as Claude discovered gaps in coverage. When Claude found that Augment actually included hooks functionality (contrary to initial assumptions), the user immediately requested its inclusion. The final deliverable evolved from a 5-7 minute video concept to a comprehensive 10-12 minute reference covering all building blocks with practical examples, file locations, configuration syntax, and use cases.

The user requested visual supplements to accompany the script, leading Claude to create an interactive 16-slide presentation with navigation, dark theme styling, and detailed breakdowns of each concept. The slides include code examples, file structure diagrams, comparison tables, and practical takeaways designed to support the video content. The user's approach showed preference for thorough documentation with specific technical details, exact file paths, configuration examples, and clear distinctions between similar concepts like rules versus hooks or subagents versus MCP servers.

**Tool knowledge**

Claude used web search and web fetching tools extensively to research Augment Code's documentation at docs.augmentcode.com. The search strategy of using "site:docs.augmentcode.com" with specific feature names proved effective for finding detailed configuration information. When researching the AGENTS.md specification, broader searches without site restrictions were necessary since this is an open standard not specific to Augment. The web fetch tool successfully retrieved detailed pages about hooks, subagents, and other features that weren't initially covered in the beat sheet. Claude discovered that Augment's documentation structure includes both CLI and IDE-specific features, requiring searches for both contexts to get complete coverage of capabilities like permissions and tasklist functionality.

## Quick excerpt

The user wants to create a video similar to the transcript they shared (which is about the evolution of coding agent concepts like rules, commands, MCP servers, sub-agents, modes, hooks, tools, and skills) but tailored specifically for Augment Code (Auggie). They want me to help create a beat sheet (an outline/structure for the video) and they're open to me interviewing them to gather the information I need. Given what I know about their work: - They create educational content about AI coding to

## Transcript

## human\n\ni want to make this script but for auggie;\n
## human\n\ni want to make a video largely similar to this but more augment code specific. help me make a beat sheet. you can interview me\n
## assistant\n\nThe user wants to create a video similar to the transcript they shared (which is about the evolution of coding agent concepts like rules, commands, MCP servers, sub-agents, modes, hooks, tools, and skills) but tailored specifically for Augment Code (Auggie).

They want me to help create a beat sheet (an outline/structure for the video) and they're open to me interviewing them to gather the information I need.

Given what I know about their work:
- They create educational content about AI coding tools, specifically focused on Augment Code
- Their philosophy is "you are the architect, the agent is the worker"
- They use agents.md for project configuration
- They're developing custom command systems, PRD interview workflows, task generation systems
- They focus on practical, hands-on learning

The original video covers:
1. Rules (static context) - history and evolution
2. Commands/slash commands (repeatable prompts)
3. MCP servers (code execution, third-party tools)
4. Modes and sub-agents (persona + scoped tools)
5. Hooks (deterministic triggers)
6. Skills (the convergence - dynamic context without bloat)
7. Best practices summary (rules = minimal high-quality static context, skills = emerging)

For an Augment-specific version, I should think about what the equivalent concepts are in Auggie's ecosystem:
- agents.md (their rules file equivalent)
- Custom commands in .augment/commands/
- Context Engine MCP
- Subagents in Auggie
- How Augment approaches these differently

Let me interview them to understand:
1. What's the Augment-specific terminology and structure?
2. What makes Augment's approach distinct?
3. What's the history/evolution within Augment's ecosystem?
4. What are the key concepts they want to emphasize?

I'll start with some focused questions to build out the beat sheet.Great idea. The original video does a nice job of tracing the *why* behind all these concepts, which makes the complexity feel manageable. Let's build something similar but grounded in Augment's world.

Let me interview you to get the details right. I'll go one question at a time so we can dig in.

**First question:**

In the original video, he starts with "rules files" as the OG solution to model hallucinations—static context in every conversation. 

For Augment, what's the equivalent starting point? Is it `agents.md`? And when you're teaching someone who's new to Auggie, what's the *first* concept you want them to understand about how context works?\n
## human\n\nauggie has rules files too . read our docs for context. though in the future we believe everything will consolidate to agents.md there. might still be a place for rules. can you check\n
## assistant\n\nThe user wants me to search for Augment Code documentation to understand how rules files and agents.md work in Augment's ecosystem. Let me search for this information.
```
This block is not supported on your current device yet.
```

Good, I found some useful information. Let me fetch the full documentation page to get more details on how Augment handles rules vs AGENTS.md.
```
This block is not supported on your current device yet.
```

This is great context. Now I understand Augment's system better:

1. **Rules** (`.augment/rules/`) - Can be Always, Manual, or Auto types
   - User rules in `~/.augment/rules/` - personal, apply everywhere, always "Always" type
   - Workspace rules in `<workspace_root>/.augment/rules/` - project-specific, can be shared via git

2. **Hierarchical Rules** - `AGENTS.md` and `CLAUDE.md` files in subdirectories
   - These are discovered automatically when working on files in those directories
   - Walk up the directory tree from the file being worked on

3. **User Guidelines** - IDE-stored, apply to all chats in that IDE

4. **Workspace Guidelines** (legacy) - `.augment-guidelines` file at repo root

So Augment has embraced the AGENTS.md standard for hierarchical rules but also has their own more sophisticated rules system with the Always/Manual/Auto distinction.

Now I have enough context to continue the interview for the video beat sheet. Let me formulate my response to continue the conversation.Got it. So Augment has a more nuanced system than what's described in the original video:

**Augment's hierarchy:**
1. **User Rules** (`~/.augment/rules/`) — personal preferences that follow you across all projects, always included
2. **Workspace Rules** (`.augment/rules/`) — project-specific, can be Always/Manual/Auto types, shareable via git
3. **Hierarchical Rules** (`AGENTS.md` and `CLAUDE.md` in subdirectories) — context-aware, automatically discovered based on what file you're working in
4. **Legacy Workspace Guidelines** (`.augment-guidelines`) — still supported, auto-imports as Rules

The key insight is that Augment has *already* implemented the "conditional inclusion" that the original video says was "the right idea, but a little early." The Auto type rules let the agent decide relevance, and hierarchical AGENTS.md files provide directory-scoped context.

So for your Augment-specific video, there's a richer story to tell: Augment isn't just at "rules combine into one big static context" — they've evolved past that.

**Next question:**

Given your "you are the architect, the agent is the worker" teaching philosophy, how do you want to frame this? 

Do you see rules as *guardrails* (preventing mistakes), *context* (helping the agent understand your world), or *delegation instructions* (telling the agent how you want work done)? Or some combination that shifts depending on rule type?\n
## human\n\nsome combination as well as avoiding common pitfalls and gotchas and "rules" that are not obvious or the agent/models tend to miss\n
## assistant\n\nThe user is confirming that rules serve multiple purposes:
1. Guardrails (preventing mistakes)
2. Context (helping agent understand the world)
3. Delegation instructions (how you want work done)
4. Avoiding pitfalls/gotchas
5. Non-obvious rules the agent tends to miss

This is a practical, battle-tested view. The user creates educational content and has likely seen patterns of what agents get wrong repeatedly.

Let me ask about the next layer - the dynamic context side (MCP, Context Engine, skills equivalent in Augment world).That's a really practical framing — rules as a living document of "things I've learned the hard way." Not theoretical best practices, but patterns you've corrected enough times that you decided to codify them.

**Next question:**

The original video draws a clear line between *static context* (rules, always included) and *dynamic context* (MCP servers, skills — loaded conditionally, can run code, give the agent new powers).

For Augment, the Context Engine seems to be the big differentiator on the dynamic side. How do you think about the relationship between:

1. **Rules** (static instructions about how to work)
2. **Context Engine** (dynamic retrieval of relevant code/docs across repos)
3. **MCP servers** (third-party tools like Slack, Linear, etc.)

Is there a clean mental model you use? Or does it blur together in practice — like "Context Engine is just a really smart MCP that Augment built for you"?\n
## human\n\ncontext engine can be seen here https://www.augmentcode.com/context-engine
it is seperate from mcp and rules\n
## assistant\n\nThe user wants me to fetch the Context Engine page to understand it better before continuing the interview.
```
This block is not supported on your current device yet.
```

This is really helpful. The Context Engine is Augment's core differentiator - it's not just grep/keyword matching, it's a semantic search engine that:

1. Indexes and maps code semantically, understanding relationships between files
2. Knows what's active vs deprecated
3. Understands how services connect
4. Tracks what you're actively working on
5. Goes beyond syntax to include commit history, patterns, external docs, tribal knowledge
6. Intelligently curates/compresses context - "from millions of lines to exactly what matters"
7. Results in "The Infinite Context Window" - you don't think about tokens

So the mental model for Augment would be:

1. **Rules** - static instructions (how you want work done, guardrails, gotchas)
2. **Context Engine** - dynamic, intelligent retrieval of relevant code/architecture/history (the "what" you're working with)
3. **MCP servers** - third-party integrations for external tools/systems

The Context Engine is doing the heavy lifting on the "dynamic context" side that other tools try to solve with skills or MCP servers. It's built-in, always running, and handles the code understanding automatically.

Let me continue the interview to understand how techfren thinks about this for teaching purposes.This is really clarifying. The Context Engine is doing the heavy lifting that other tools try to solve with manual context curation or skills. It's:

- Semantic search (not grep)
- Understands relationships between files across repos
- Knows active vs. deprecated code
- Tracks what you're working on right now
- Compresses intelligently so you don't think about tokens

So for Augment, the mental model might be:

1. **Rules** — *how* you want work done (guardrails, gotchas, patterns)
2. **Context Engine** — *what* you're working with (automatic, intelligent retrieval of relevant code/architecture/history)
3. **MCP** — *external powers* (Slack, Linear, databases, etc.)

The original video frames skills as the evolution that replaces bloated MCP tool lists. But Augment's Context Engine seems to solve the "bloated context" problem differently — through intelligent curation rather than conditional loading.

**Next question:**

When you're teaching someone to be effective with Auggie, how much do they need to *understand* about Context Engine vs. just *trust* it? 

In other words: is there a skill to "feeding" the Context Engine well (good repo structure, good commit messages, etc.), or does it mostly just work and the real skill is in rules + prompting?\n
## human\n\nthey dont need to know how to use it , but they might benefit from knowing why its better than grep\n
## assistant\n\nThis is a good insight for the video structure. The user is saying that Context Engine is more of a "trust it, it works" thing, but understanding *why* it's better helps developers appreciate what's happening under the hood and why Augment produces better results.

This connects back to the course outline where Episode 1 is about LLM fundamentals - understanding the "brain" helps you work with agents more effectively. Similarly, understanding why semantic search > grep helps you trust the tool and maybe even write better prompts knowing what it can find.

Let me continue the interview to build out the beat sheet.That's a nice parallel to your Episode 1 "LLMs for Devs" philosophy — you don't need to know transformer architecture to use Claude, but understanding *why* LLMs hallucinate helps you work with them better.

Same idea: you don't need to configure Context Engine, but knowing it's doing semantic retrieval (not string matching) changes how you prompt. You can say "find where we handle payment failures" instead of trying to guess the exact function name.

**Next question:**

The original video ends with a "two concepts" simplification: **rules** (static) and **skills** (dynamic). For Augment, it sounds like the simplification might be:

- **Rules** — your instructions to the agent
- **Context Engine** — the agent's understanding of your codebase (automatic)
- **MCP** — external integrations when needed

But I want to check: does Augment have anything like "skills" or "custom commands" — packaged workflows you can run repeatedly? I saw `.augment/commands/` mentioned in your past work with PRD interviews and task generation. Is that a first-class concept in Auggie, or more of a power-user pattern you've developed?\n
## human\n\nskills are coming and will behave the same as other agents. commands are custom slash commands\n
## assistant\n\nSo Augment has:
- **Rules** — instructions/guardrails (static context, with Always/Manual/Auto types)
- **Context Engine** — automatic semantic understanding of codebase
- **MCP** — external integrations
- **Commands** — custom slash commands (packaged prompts you can run repeatedly)
- **Skills** (coming soon) — will behave like other agents

This maps nicely to the original video's evolution:
- Rules → Rules (same concept)
- Commands → Slash commands (same concept)
- MCP → MCP (same concept)
- Skills → Skills (Augment is adopting the same pattern)

The key differentiator is Context Engine, which other tools don't have — they rely on grep or manual context curation.

Let me ask about the narrative arc for the video.Got it. So Augment's landscape is:

- **Rules** — instructions to the agent (Always/Manual/Auto types + hierarchical AGENTS.md)
- **Context Engine** — automatic semantic understanding (the differentiator)
- **Commands** — custom slash commands (packaged prompts)
- **MCP** — external integrations
- **Skills** (coming) — will behave like other agents

The original video's "compress it down to rules and skills" thesis will land similarly for Augment — but with Context Engine as the thing that makes the *quality* of output better, regardless of how good your rules and commands are.

**Next question:**

For the narrative arc of your video, the original traces a *historical evolution*: rules → nested rules → commands → MCP → modes/sub-agents → hooks → skills.

Do you want to tell a similar "how we got here" story for Augment specifically? Or would it be more useful to your audience to skip the history and just say: "Here's what matters, here's why, here's how to think about it"?

Given your audience is already Augment users who need to *master* it (not choose it), I'm wondering if the historical context is valuable or just noise.\n
## human\n\nwe dont need history but more of a how everything fits into today and future\n
## assistant\n\nThe user wants a forward-looking framing rather than historical. So instead of "how we got here," it's "here's the landscape, here's how to think about it, here's where it's going."

This aligns well with their audience: existing Augment users who need to master advanced workflows, not people evaluating tools.

Let me ask about the specific structure/arc they want for the video.That's cleaner. "Here's the map, here's where you are, here's where we're going."

**Next question:**

For the beat sheet structure, I'm thinking something like:

1. **The problem** — there's a lot of terminology flying around (rules, commands, MCP, Context Engine, skills, agents.md). It feels complex.
2. **The simplification** — it's really just two types of things: instructions you give the agent, and context the agent uses
3. **Walk through each piece** — what it is, when you'd use it, how it fits
4. **The Augment-specific insight** — Context Engine is why Augment can do more with less manual context curation
5. **Where it's going** — skills are coming, consolidation toward agents.md
6. **Practical takeaway** — focus on rules (minimal, high-quality, living document) and trust Context Engine to handle the rest

Does that arc feel right? And is there a specific insight or "aha moment" you want viewers to walk away with — something beyond just "here's how the pieces fit"?\n
## human\n\nthis is close but mcp and skills will also unlock new capabilities and tools\n
## assistant\n\nThe user is pointing out that my simplification missed something important. MCP and skills aren't just "context the agent uses" — they give the agent new *capabilities*. Like reading Slack, creating Linear issues, running code, etc.

So the mental model might be more like:

1. **Instructions** — Rules, commands (what you tell the agent)
2. **Context** — Context Engine (what the agent knows about your code)
3. **Capabilities** — MCP, skills (what the agent can *do*)

This is actually closer to the original video's framing of "static context" vs "dynamic context that can run code and give the agent new powers."

Let me refine my question to get clarity on how they want to frame this.Right — I was flattening MCP and skills into "context" but they're actually *capabilities*. The agent can do new things: read Slack, create Linear issues, hit APIs, run workflows.

So maybe the mental model is three buckets:

1. **Instructions** — Rules, commands (how you want work done)
2. **Understanding** — Context Engine (what the agent knows about your code)
3. **Capabilities** — MCP, skills (what the agent can *do* beyond code)

And the insight is that Augment handles #2 automatically (that's the differentiator), so you can focus your energy on #1 (rules/commands for your workflow) and #3 (connecting to external systems that matter to you).

**Next question:**

For capabilities — MCP and skills — what's the line between them? Is it:

- **MCP** = connect to external services (Slack, Linear, databases, docs)
- **Skills** = packaged agent behaviors / workflows (coming soon)

Or is there more nuance? Like, could a skill *wrap* an MCP server with specific instructions on how to use it?\n
## human\n\nyes a skill can wrap an mcp, there is large overlap and the distinction is vagueue. mcp does streamline the whole process and enable nice token management and oauth to bring in context and capabilities from third parties like linear, github, notion etc\n
## assistant\n\nSo the user is saying:
- Skills can wrap MCPs
- There's large overlap, distinction is vague
- MCP's main value is streamlining: token management, OAuth, bringing in third-party context and capabilities (Linear, GitHub, Notion, etc.)

So maybe for the video, the honest framing is: "MCP and skills are both ways to extend what the agent can do. MCP is the protocol that makes third-party integrations work smoothly (OAuth, tokens). Skills are packaged workflows that might use MCP under the hood. The line is blurry, and that's okay — what matters is understanding that these extend the agent's capabilities beyond your codebase."

This is actually similar to what the original video says about skills potentially wrapping MCP — the concepts are converging toward "dynamic capabilities."

Let me move to building the beat sheet now. I think I have enough to draft something.That's honest and actually useful for your audience — they don't need to agonize over "should this be an MCP or a skill?" The distinction is implementation detail. What matters is: *you can extend what the agent can do beyond your codebase*.

Alright, I think I have enough to draft a beat sheet. Let me put it together:

---

**Beat Sheet: Understanding Augment's Building Blocks**

**1. HOOK / THE PROBLEM**
Rules, commands, MCP, Context Engine, skills, agents.md — lots of terminology. Feels complex. Let's simplify.

**2. THE MENTAL MODEL**
Three buckets:
- **Instructions** — what you tell the agent (rules, commands)
- **Understanding** — what the agent knows (Context Engine)
- **Capabilities** — what the agent can do beyond code (MCP, skills)

**3. UNDERSTANDING: CONTEXT ENGINE**
- This is Augment's differentiator
- Semantic search, not grep — it understands relationships, not just strings
- You don't configure it, you trust it
- Why this matters: you can prompt naturally ("where do we handle payment failures") instead of guessing function names

**4. INSTRUCTIONS: RULES**
- How you tell the agent to work
- Types: Always / Manual / Auto (agent decides relevance)
- Hierarchy: User rules → Workspace rules → AGENTS.md in subdirectories
- Best practice: minimal, high-quality, living document
- What goes here: gotchas, non-obvious patterns, things models tend to miss, stuff you've corrected enough times to codify

**5. INSTRUCTIONS: COMMANDS**
- Packaged prompts you run repeatedly
- Your workflows: PR flow, planning, code review patterns
- Shareable with team via git

**6. CAPABILITIES: MCP + SKILLS**
- Extend the agent beyond your codebase
- MCP: third-party integrations (Linear, GitHub, Notion, Slack) with OAuth and token management handled for you
- Skills (coming): packaged agent behaviors, can wrap MCPs
- The line between them is blurry — what matters is they unlock new powers

**7. WHERE IT'S GOING**
- Skills arriving soon
- Consolidation toward agents.md as the standard
- Rules still have a place for always-on guardrails

**8. PRACTICAL TAKEAWAY**
- Context Engine handles understanding automatically — that's why Augment output is better
- Focus your energy on rules (your hard-won lessons) and capabilities (connecting to systems that matter)
- You are the architect, the agent is the worker — these are your tools to direct the work

---

Does this structure feel right? Anything missing or weighted wrong?\n
## human\n\nthis is largely correct though users dont guess function names though the agent has to (when no semantic search)
also there is some overlap in all 3 buckets\n
## assistant\n\nGood corrections:

1. The "guessing function names" point - it's the *agent* that has to guess when using grep-based search, not the user. The user prompts naturally either way, but with grep the agent is doing string matching and might miss relevant code. With semantic search, the agent understands what you mean.

2. There's overlap between all three buckets - they're not perfectly clean categories. For example:
- Rules can provide context (not just instructions)
- MCP can bring in context (not just capabilities)
- Context Engine understanding informs what the agent can do

So the mental model is useful but not rigid. The buckets bleed into each other.

Let me revise the beat sheet with these corrections.Good catches. Let me fix those:

1. **Semantic search point** — it's the *agent* that has to guess function names with grep. The user prompts the same way either way ("where do we handle payment failures"), but with grep the agent is string-matching and might miss relevant code. With semantic search, it actually understands the intent.

2. **Overlap** — the three buckets aren't clean. Rules can provide context (not just instructions). MCP can bring in context (not just capabilities). It's a useful mental model but not rigid walls.

---

**Revised beat sheet section:**

**3. UNDERSTANDING: CONTEXT ENGINE**
- Augment's differentiator
- Semantic search vs. grep: the agent understands relationships, not just strings
- With grep, agent has to guess function names and might miss relevant code
- With semantic search, agent understands what you mean by "where we handle payment failures"
- You don't configure it, you benefit from it

**2. THE MENTAL MODEL (revised)**
Three buckets — with overlap:
- **Instructions** — what you tell the agent
- **Understanding** — what the agent knows
- **Capabilities** — what the agent can do

These blur together. Rules can provide context. MCP can bring in understanding. But this framing helps you think about what you're actually configuring vs. what Augment handles for you.

---

Anything else feel off, or should we refine the hook/takeaway?\n
## human\n\nlooks good\n
## assistant\n\nThe user has approved the beat sheet. Let me create a clean, final version they can use for their video. I should put this in a markdown file so they can download and reference it.Let me put together the final beat sheet as a clean document.
```
This block is not supported on your current device yet.
```

Great, the file is created. Let me present it to the user.
```
This block is not supported on your current device yet.
```

The file is now presented to the user. Let me give them a brief summary and ask if they want any refinements or if they want to develop any section further.Here's your beat sheet. A few things we could develop further if you want:

1. **Specific examples** — concrete gotchas or rules you've actually codified that would resonate with your audience
2. **Demo script** — the "semantic search vs. grep" moment could be a powerful visual if you want to script that out
3. **Hook refinement** — the current hook mirrors the original video; we could make it more distinctly yours

Which direction, if any?\n
## human\n\ngive me some more hook options so its not as obvious we are copying the original\n
## assistant\n\nThe user wants alternative hooks that don't feel like a copy of the original video's "there's a lot of stuff, it's complex, let me simplify" approach. Let me think of different angles that would resonate with their audience of experienced developers using Augment.

Different hook angles:
1. Start with a common mistake/frustration
2. Start with the end result (what mastery looks like)
3. Start with a provocative statement
4. Start with a question
5. Start with a specific scenario
6. Start with what's changed/changing
7. Start with the "architect vs worker" philosophy they teach

Let me generate several distinct options.Here are some alternative angles:

**The Frustration Hook**
"You've got Augment set up, it's working, but you're not sure if you're using it *well*. You see other people getting better results and wonder what you're missing. Here's the mental model that unlocks it."

**The Mistake Hook**
"Most people start by writing a giant rules file and hoping for the best. That's backwards. Let me show you how these pieces actually fit together."

**The Architect Hook** (plays into your teaching philosophy)
"If you're the architect and the agent is the worker, you need to know what levers you actually have. Rules, commands, MCP, Context Engine, skills — these are your controls. Here's how to think about them."

**The "Why Augment" Hook**
"Every AI coding tool uses the same models. So why does Augment produce better code? It comes down to one thing — and understanding it changes how you use everything else."

**The Future-Back Hook**
"Skills are coming to Augment. Agents.md is becoming a standard. Before you learn the new stuff, let's make sure you actually understand what you have today."

**The Direct Hook**
"Rules. Commands. MCP. Context Engine. Skills. You've seen these words. Here's what they actually do and when you'd use each one."

---

Which direction feels most like you?\n
## human\n\nim not sure this mental model actually helps. and im sure the audience has heard the context engine differentiator before. we take too long to get to the actual terminology explanations\n
## assistant\n\nThe user is pushing back on the beat sheet - good feedback. They're saying:

1. The three-bucket mental model might not actually be useful - it's abstract and the overlap makes it muddy
2. Context Engine as differentiator is already known to their audience (existing Augment users)
3. Too much preamble before getting to the actual practical stuff

Their audience is Augment users who want to master it. They've heard the marketing. They want to know: what are these things, when do I use them, how do they work together?

Maybe the better approach is:
- Quick acknowledgment that there's a lot of terminology
- Jump straight into explaining each piece concisely
- Show how they relate as you go, not as a separate "mental model" section
- Context Engine can be mentioned briefly as "this is automatic, you don't configure it, it's why X works"

Let me propose a tighter structure that gets to the meat faster.You're right. The mental model is abstract, the Context Engine pitch is marketing they've already heard, and we're burying the practical stuff.

What if we just go direct:

---

**Revised structure:**

**1. HOOK** (10 sec)
Lots of terminology. Here's what each thing actually is and when you use it.

**2. RULES** — your instructions to the agent
- Types: Always / Manual / Auto
- Hierarchy: User → Workspace → AGENTS.md in subdirectories
- What goes here: gotchas, patterns models miss, stuff you've corrected enough times to codify

**3. COMMANDS** — packaged prompts you run repeatedly
- Your repeatable workflows

**4. MCP** — third-party integrations
- Brings in context and capabilities from external systems
- OAuth handled for you

**5. SKILLS** (coming) — packaged agent behaviors
- Can wrap MCPs
- Will behave like agents

**6. CONTEXT ENGINE** (brief)
- You don't configure this, it's automatic
- Why it matters: semantic search means the agent finds relevant code even when it doesn't know the exact names

**7. WHERE IT'S GOING**
- Skills coming, consolidation toward agents.md

---

Faster to the terminology, less philosophy. Does that feel closer?\n
## human\n\nmuch better\n
## assistant\n\nThe user likes this direction. Let me update the beat sheet with this leaner, more direct structure.Want me to update the beat sheet with this structure, or do you want to riff on any of these sections first? 

For example, for Rules — do you have specific examples of gotchas or "things models tend to miss" that would make good concrete examples in the video?\n
## human\n\nsearch online for some examples and present them to me\n
## assistant\n\nThe user wants me to search online for examples of rules/gotchas that developers have codified for AI coding agents. Let me search for real-world examples of agents.md files, cursor rules, augment rules, etc.
```
This block is not supported on your current device yet.
```

Good results. Let me also search for more specific gotchas and common mistakes that developers have documented.
```
This block is not supported on your current device yet.
```

Good stuff. Let me compile these examples into useful categories for the user.Good findings. Here are the patterns I'm seeing:

---

**Gotchas / Things models miss:**

1. **Test snapshot paths are absolute** — run `npm run test -- --updateSnapshot` after refactors
2. **Frontend assets live under `/static`** — don't edit generated files
3. **Database migrations require explicit command** — `flask db upgrade`
4. **New tools not in training data** — Pixi, uv, Marimo notebooks need explicit "always use `pixi run`" rules
5. **App entrypoint isn't obvious** — "entrypoint is `app.py`"

---

**Behavioral corrections for models:**

1. **"Don't apologize for errors — fix them"**
2. **"If code is incomplete, add TODO comments instead"** (rather than pretending it's done)
3. **"Add or update tests for the code you change, even if nobody asked"**
4. **"Always typecheck after making a series of code changes"**
5. **"Never commit secrets; use `.env.example`"**

---

**Structural guidance models need:**

1. **Where things go:** "All backend code in `packages/api/src`", "React components in `packages/web/src/components`"
2. **Which patterns to use:** "Use `zod` for request validation", "Use ES modules (import/export), not CommonJS"
3. **Commit message format:** `<type>(<scope>): <message>` — models will make up their own otherwise
4. **Branch naming:** `feature/*`, `bugfix/*`, `hotfix/*`

---

**Three-tier boundaries (GitHub's recommendation from 2,500+ files):**

1. **Always do:** Run tests, typecheck, lint
2. **Ask first:** Major architectural changes, deleting files
3. **Never do:** Modify source code when writing tests, commit secrets, remove failing tests

---

**Best practice that stood out:**

> "Start simple. Add rules only when you notice the agent making the same mistake repeatedly."

---

Want me to pick a few of these to use as concrete examples in the Rules section of the beat sheet?\n
## human\n\nthese are good we can have a short sentence for each section\n
## assistant\n\nThe user wants me to update the beat sheet with a short sentence/example for each section. Let me revise it with the concrete examples we found.Got it. Let me update the beat sheet with a concrete example sentence for each section:
```
This block is not supported on your current device yet.
```

Let me present this file to the user.
```
This block is not supported on your current device yet.
```

Good, I've provided the updated beat sheet. Let me give a brief summary and ask if they want any changes.Tightened it up. Each section now has one concrete example sentence. Target runtime dropped to 3-5 minutes since we cut the philosophy.

Anything you want to adjust before we call it done?\n
## human\n\ncan you check docs on rules for auggie cli and how the auto/manual/always types work\n
## assistant\n\nThe user wants me to check the Augment CLI documentation specifically for how rules work, including the Auto/Manual/Always types.
```
This block is not supported on your current device yet.
```

Let me fetch the full CLI rules documentation page to get the complete details.
```
This block is not supported on your current device yet.
```

Now I have the full details. Let me summarize the key differences:

**CLI vs IDE:**
- CLI currently only supports `always_apply` and `agent_requested` types
- `manual` type only works in IDE extensions (where you can @ mention to attach)
- In CLI, workspace rules in `.augment/rules/` are treated as `always_apply` by default
- User rules (`~/.augment/rules/`) are always `always_apply`

**The three types:**
1. **always_apply** (Always in IDE) - automatically included in every prompt
2. **agent_requested** (Auto in IDE) - agent decides if relevant based on description field
3. **manual** (Manual in IDE) - requires @ mention to include (IDE only, not in CLI)

So the beat sheet needs to be updated to note that:
- Manual type doesn't work in CLI yet
- CLI treats workspace rules as always_apply
- The terminology is slightly different: `always_apply` vs `Always`, `agent_requested` vs `Auto`Good catch. Here's what I found — there are some important differences between CLI and IDE:

**Rule Types (terminology differs slightly):**

| IDE Term | CLI Term | Behavior |
|----------|----------|----------|
| Always | `always_apply` | Included in every prompt |
| Auto | `agent_requested` | Agent decides if relevant based on description field |
| Manual | `manual` | @ mention to include — **IDE only, not supported in CLI yet** |

**CLI-specific notes:**
- In CLI, all workspace rules in `.augment/rules/` are currently treated as `always_apply` by default
- User rules (`~/.augment/rules/`) are always `always_apply` — no frontmatter override
- To use `agent_requested`, you need frontmatter with a `description` field so the agent knows when it's relevant

**Example frontmatter for agent_requested:**
```yaml
---
type: agent_requested
description: React component development patterns and best practices
---
```

Should I update the beat sheet to clarify that Manual isn't available in CLI yet, or is that too much detail for the video?\n
## human\n\nmanual rules in cli are just md files that can be referenced using the @<filename> notation in prompt. i guess auto is only for the vscode extension\n
## assistant\n\nGood clarification. So the actual breakdown is:

- **Always** (`always_apply`) — included automatically in every prompt
- **Manual** — in CLI, you just @ mention the filename like `@my-rule.md` in your prompt. In IDE, you @ mention it in the UI.
- **Auto** (`agent_requested`) — only works in VSCode extension, not in CLI

So for CLI users, it's really just:
- Rules that are always on (always_apply)
- Rules you reference manually with @ notation

The "agent decides if relevant" feature is IDE-only for now.

This is useful to know for the video since the course is focused on Augment Code / Auggie.Got it. So the real breakdown is:

**CLI:**
- **Always** (`always_apply`) — included automatically in every prompt
- **Manual** — reference with `@filename.md` in your prompt

**IDE (VSCode/JetBrains):**
- **Always** — included automatically
- **Manual** — @ mention to include
- **Auto** — agent decides if relevant based on description

So Auto/agent_requested is IDE-only for now. For a course focused on Auggie CLI, the simpler mental model is: rules are either always on, or you @ mention them when needed.

Want me to update the beat sheet to reflect this? Or keep it general since your audience may use both CLI and IDE?\n
## human\n\nlooks good. what are some more details that are missing\n
## assistant\n\nThe user wants me to think about what might be missing from the beat sheet. Let me review what we have and consider what gaps there might be.

Current beat sheet covers:
1. Hook - terminology overload
2. Rules - types, hierarchy, what goes there, example, best practice
3. Commands - what they are, example
4. MCP - what it is, example
5. Skills (coming) - what they are, example
6. Context Engine - brief, why it matters, example
7. Where it's going
8. Practical takeaway

What might be missing:

1. **Memories** - Augment has a memories system that we haven't mentioned. User can prompt agent to "remember" things, and these can be promoted to rules. This is a related concept.

2. **How rules actually get applied** - precedence order when multiple rules exist

3. **User rules vs workspace rules** - we mention the hierarchy but don't explain the practical difference (personal preferences vs team-shared)

4. **How to create rules** - practical "here's how you actually do it" (create .augment/rules/ folder, add .md files)

5. **AGENTS.md vs .augment/rules/** - when to use which? AGENTS.md is cross-tool compatible, .augment/rules/ is Augment-specific with more features

6. **Commands - more detail** - how to create them, where they live, the $ARGUMENTS variable

7. **The relationship between Memories and Rules** - memories are auto-generated, can be promoted to rules

8. **Context Engine MCP** - this is how you can expose Context Engine to other tools like Claude Code, Cursor etc. This is a big feature.

9. **Subagents** - Auggie CLI supports subagents for parallel execution

10. **Intent app** - from the user's memory, they're working on content about Augment's Intent app for multi-agent orchestration

11. **Remote Agents** - Augment has remote agents feature


12. **Permissions** - CLI has permissions system for tool access

Rather than continue guessing, I should ask the user directly what they think is missing.Let me think through what we haven't covered:

**Things we mentioned but didn't detail:**
1. **Memories** — Augment auto-generates these, and you can promote them to Rules. How does this fit?
2. **User rules vs Workspace rules** — when to use which (personal preferences vs team-shared)
3. **AGENTS.md vs .augment/rules/** — AGENTS.md is cross-tool compatible, .augment/rules/ is Augment-specific with more features like Auto type

**Things we haven't mentioned:**
4. **Context Engine MCP** — exposing Context Engine to other tools (Claude Code, Cursor, etc.)
5. **Subagents** — parallel execution in CLI
6. **Commands detail** — where they live, how to create them, `$ARGUMENTS`
7. **Permissions** — CLI tool access controls

**From your course outline:**
8. **Intent app** — multi-agent orchestration (you mentioned this in past work)
9. **Remote Agents**

Which of these, if any, should make it into this video? Or are some of these separate videos?\n
## human\n\nrules are only for the vscode extension and should be covered. when to use which is good. whats auto type?yeah that sounds like a good clarification. context engine mcp is not needed for this but good to mention mcp can enable some other stuff like playwright browser use. subagents are not needed here. permission could be useful. remote agents not needed\n
## assistant\n\nThe user is clarifying:
1. Memories → Rules is VSCode only, should cover
2. User vs Workspace rules - when to use which
3. AGENTS.md vs .augment/rules/ clarification - AGENTS.md is cross-tool, .augment/rules/ is Augment-specific
4. Auto type - I mentioned it earlier but now user is asking what it is. Let me clarify - Auto type is the IDE-only feature where the agent decides if a rule is relevant based on description. I should confirm this with them.
5. Context Engine MCP - not needed, but good to mention MCP enables things like Playwright browser use
6. Subagents - not needed
7. Permissions - could be useful
8. Remote agents - not needed

So updates needed:
- Add Memories → Rules (VSCode)
- Add User vs Workspace guidance
- Clarify AGENTS.md (cross-tool) vs .augment/rules/ (Augment-specific, more features in IDE)
- Clarify Auto type is IDE-only
- MCP example: Playwright browser use
- Add Permissions section

Let me ask about Auto type to clarify - I think the user is asking "what's auto type?" because they want me to explain it for the video, not because they don't know.To clarify — Auto type is the IDE-only feature where the agent automatically decides if a rule is relevant based on a `description` field in the frontmatter. You don't @ mention it, and it's not always on — the agent loads it when it thinks it's needed.

So the full picture for the Rules section:

**IDE (VSCode/JetBrains):**
- **Always** — included in every prompt
- **Manual** — @ mention to include
- **Auto** — agent decides based on description (IDE only)
- **Memories → Rules** — agent auto-generates memories, you can promote them to Rules

**CLI:**
- **Always** — included automatically
- **Manual** — reference with `@filename.md`
- No Auto type yet

**Where rules live:**
- **User rules** (`~/.augment/rules/`) — personal preferences, follows you everywhere
- **Workspace rules** (`.augment/rules/`) — project-specific, shareable via git
- **AGENTS.md** — cross-tool compatible (works with Cursor, Claude Code, etc.)

**For Permissions:** brief mention that CLI has tool access controls — you can disable specific tools if needed.

**For MCP:** mention Playwright/browser automation as an example of capabilities beyond just integrations.

Should I update the beat sheet with all of this?\n
## human\n\nupdate it\n
## assistant\n\nThe user wants me to update the beat sheet with all the clarifications we've discussed:

1. Rules section needs to distinguish IDE vs CLI
2. Add Auto type explanation (IDE only)
3. Add Memories → Rules flow
4. Clarify where rules live (User vs Workspace vs AGENTS.md)
5. Add Permissions section (brief)
6. Update MCP section to mention Playwright/browser automation as capability example

Let me create an updated version.
```
This block is not supported on your current device yet.
```

Now I should present this file to the user.
```
This block is not supported on your current device yet.
```

Done. I've updated the beat sheet with:
1. IDE vs CLI distinction for rules types
2. Auto type explanation (IDE only)
3. Where rules live table (User, Workspace, AGENTS.md)
4. When to use which guidance
5. Memories → Rules flow
6. Permissions section (brief, CLI-focused)
7. MCP section updated with Playwright example as capability beyond integrations

Let me ask if anything else is needed.Updated. Key additions:

- IDE vs CLI rule types broken out (including Auto as IDE-only)
- Table showing where rules live and when to use each
- Memories → Rules flow
- Permissions section for CLI tool controls
- MCP section now mentions Playwright/browser automation as capability example

Anything else missing, or ready to record?\n
## human\n\nhttps://docs.augmentcode.com/cli/rules

we are missing frontmatter description.
what else\n
## assistant\n\nThe user wants me to check the CLI rules docs again for frontmatter details. Let me look at what I already fetched and see what's missing.

From the earlier fetch, the frontmatter configuration includes:
- `type`: `always_apply` or `agent_requested`
- `description`: Brief description of the rule's purpose (required for `agent_requested` type)

Wait, but the user said Auto is IDE-only. Let me re-read...

From the docs:
"Use `agent_requested` (also called `auto` in IDE extensions) over `always_apply` if you want to optimize context usage."

So `agent_requested` IS available in CLI, it's just called `auto` in the IDE. I had this wrong.

What we're missing:
1. Frontmatter fields: `type` and `description`
2. The description field is required for `agent_requested` type so the agent knows when to include it

Let me also think about what else might be missing from the beat sheet:
- Custom commands detail - where they live, how to create them
- The `--rules` flag for CLI to specify a custom rules file
- Maybe examples of frontmatter

Let me re-read the docs I fetched to see what else we might be missing.Let me re-read the docs I already fetched:

Looking back at the CLI rules docs, I see I got something\n
## human\n\nhttps://docs.augmentcode.com/cli/rules
https://docs.augmentcode.com/cli/permissions
https://docs.augmentcode.com/cli/integrations
https://docs.augmentcode.com/cli/custom-commands

we are missing frontmatter description for rules
. and probably more. lets start adding more points to beat sheet\n
## assistant\n\nThe user wants me to fetch these docs and add more details to the beat sheet, particularly around frontmatter and other details we might be missing.
```
This block is not supported on your current device yet.
```

Good detail on permissions. Let me get the other docs too.
```
This block is not supported on your current device yet.
```

Good detail on MCP integrations. Let me get the custom commands doc too.
```
This block is not supported on your current device yet.
```

Great, now I have all the details. Let me compile a more comprehensive beat sheet with all the details we've gathered.

Key additions from the docs:

**Rules:**
- Frontmatter with `type` (always_apply, agent_requested) and `description` field
- Example frontmatter format
- User rules are always `always_apply` - no override

**Permissions:**
- Three permission types: `allow`, `deny`, `ask-user`
- Can filter shell commands with `shellInputRegex`
- Common configs: read-only mode, development mode, CI/CD pipeline
- Tool categories: process management, file operations, external services, MCP tools
- Lives in `~/.augment/settings.json`

**MCP:**
- Native integrations (GitHub, Linear, Notion) - configured in IDE
- MCP servers for custom integrations
- Transport types: stdio, sse, http
- Can configure via `~/.augment/settings.json` or CLI (`auggie mcp add`)
- Examples: browser automation (Playwright), database access, Slack

**Commands:**
- User commands: `~/.augment/commands/`
- Workspace commands: `.augment/commands/`
- Claude Code compatibility: `.claude/commands/`
- Namespacing with subdirectories (e.g., `/frontend:component`)
- Frontmatter: `description`, `argument-hint`, `model`
- Can pass arguments with `$ARGUMENTS` placeholderGot all the details. Here's what we're missing:

**Rules — frontmatter:**
```yaml
---
type: agent_requested
description: React component development patterns
---
```
- `type`: `always_apply` or `agent_requested` (IDE also has `manual`)
- `description`: Required for `agent_requested` — this is how the agent knows when to load it

**Commands — more detail:**
- User commands: `~/.augment/commands/`
- Workspace commands: `.augment/commands/`
- Claude Code compatibility: `.claude/commands/` (works automatically)
- **Namespacing**: subdirectories create namespaced commands (e.g., `.augment/commands/frontend/component.md` → `/frontend:component`)
- **Frontmatter**: `description`, `argument-hint`, `model` (can override default model per command)
- Arguments passed after the command name

**Permissions — more detail:**
- Three types: `allow`, `deny`, `ask-user`
- `shellInputRegex` for filtering specific shell commands
- Common presets: read-only mode, development mode, CI/CD pipeline
- Lives in `~/.augment/settings.json`

**MCP — more detail:**
- Native integrations (GitHub, Linear, Notion) — configured in IDE, works in CLI
- MCP servers for custom integrations
- Transport types: stdio, sse, http
- Configure via settings.json or `auggie mcp add` CLI
- Examples: Playwright browser automation, database access, Slack messaging

Let me update the beat sheet with all of this:
```
This block is not supported on your current device yet.
```

Now let me present the file to the user.
```
This block is not supported on your current device yet.
```

Good, I've presented the updated beat sheet. Let me summarize what I added so the user can quickly see the changes.Major additions in v4:

**Rules:**
- Full frontmatter section with `type` and `description` fields
- Note that user rules can't override `always_apply`
- Example YAML block

**Commands:**
- Precedence order (User → Workspace → Claude Code)
- Namespacing with subdirectories (`/frontend:component`)
- Full frontmatter including `model` override per command
- Arguments syntax

**Permissions:**
- Three permission types table
- `shellInputRegex` for command-level filtering with example
- Common presets broken out (read-only, dev mode, CI/CD)
- Full list of controllable tools by category

**MCP:**
- Native vs MCP servers distinction
- Config via settings.json with example JSON
- CLI commands (`auggie mcp add/list/remove`)
- Transport types (stdio, sse, http)

**Practical takeaway:**
- Added summary table mapping concept → what it does → where to start

Anything else to add or refine?\n
## human\n\nwould be good to have an overview with one sentence each of where everything fits in before we go into specifics\n
## assistant\n\nGood idea - an overview section that gives the high-level map before diving into details. This helps orient the viewer so they know what's coming and how the pieces relate.
```
This block is not supported on your current device yet.
```

Now I need to renumber the remaining sections since I added section 2. Let me update the section numbers.
```
This block is not supported on your current device yet.
```

Continue renumbering...
```
This block is not supported on your current device yet.
```

Continue renumbering...
```
This block is not supported on your current device yet.
```

Continue renumbering...
```
This block is not supported on your current device yet.
```

Continue renumbering...
```
This block is not supported on your current device yet.
```

Continue renumbering...
```
This block is not supported on your current device yet.
```

Continue renumbering...
```
This block is not supported on your current device yet.
```

Now let me present the updated file.
```
This block is not supported on your current device yet.
```

Done. Added section 2 "OVERVIEW — the map" with a one-sentence summary table for each concept, then renumbered all subsequent sections.Added section 2 with a quick-reference table. Now the structure is:

1. Hook
2. **Overview — the map** (one sentence each, sets expectations)
3. Rules (deep dive)
4. Commands (deep dive)
5. MCP (deep dive)
6. Skills (coming)
7. Permissions (deep dive)
8. Context Engine (brief)
9. Where it's going
10. Practical takeaway

Viewers get the full map upfront, then can follow along as you go deeper on each. Anything else?\n
## human\n\nagents.md should be positioned next to rules as they are very similar.\n
## assistant\n\nThe user wants AGENTS.md to be positioned next to rules since they're similar concepts. AGENTS.md is essentially hierarchical rules that work across tools. I should move AGENTS.md out of the overview table as a separate row and instead integrate it into the Rules section, or position it right after Rules as a closely related concept.

Let me update the beat sheet to:
1. Remove AGENTS.md as a separate row in the overview table
2. Either fold it into the Rules row, or add a note that AGENTS.md is covered in the Rules section
3. Make sure the Rules section adequately covers AGENTS.md

Actually, looking at the current structure, AGENTS.md is already mentioned in the Rules section under "Where rules live" as hierarchical rules. So the overview table should probably just note that AGENTS.md is part of the rules system, or combine them.

Let me update the overview table to reflect this better.
```
This block is not supported on your current device yet.
```

Good, I moved AGENTS.md right after Rules in the overview table. Now the user might also want a brief callout in the Rules section that explicitly ties them together. Let me check if that's already clear in the Rules section, or if I should add a sentence connecting them more explicitly.

Looking at the current Rules section, AGENTS.md is mentioned in the "Where rules live" table and "When to use which" section. That seems adequate. Let me present the updated file.
```
This block is not supported on your current device yet.
```

Done - AGENTS.md is now right after Rules in the overview, showing they're closely related concepts (same idea, portable format). The Rules deep-dive section already covers where AGENTS.md files live and when to use them vs .augment/rules/.Done. AGENTS.md now sits right after Rules in the overview, framed as "same idea, portable format." The deep-dive in the Rules section already covers where AGENTS.md files live and when to use them.

Anything else to adjust?\n
## human\n\nok this looks good to me. can we make sure we are not missing anything. can you check original script and docs\n
## assistant\n\nThe user wants me to cross-reference the beat sheet against:
1. The original video transcript (document 1)
2. The course planning PDF (document 2)
3. The Augment docs I've fetched

Let me review what the original video covered and what the docs mention to make sure we haven't missed anything important.

From the original video:
- Rules files → nested rules → combined into static context
- Slash commands / custom commands
- MCP servers (third-party tools, OAuth)
- Modes and sub-agents
- Hooks (deterministic, before/after conversation)
- Skills (new, combines everything)
- Best practice: minimal high-quality rules, living document

From the Augment docs I've read:
- Rules: Always/Manual/Auto types, frontmatter, user vs workspace, hierarchical AGENTS.md
- Commands: user/workspace/.claude locations, namespacing, frontmatter (description, argument-hint, model), arguments
- Permissions: allow/deny/ask-user, shellInputRegex, common presets
- MCP: native integrations, MCP servers, stdio/sse/http transports, settings.json config, CLI commands
- Context Engine: semantic search vs grep

What might we be missing:

1. **Hooks** - The original video mentions hooks for deterministic runs (inject context at start, prompt after finish, log to database). Does Augment have this?

2. **Modes** - The original video mentions modes (like planning mode) that modify system prompt, give access to new tools, UI changes. Does Augment have interview/plan modes?

3. **Sub-agents** - Augment CLI has subagents (I saw /cli/subagents in the docs). We mentioned this isn't needed but should double-check.

4. **Memories** - We mentioned promoting memories to rules, but is there more detail?

5. **Native integrations list** - We mentioned GitHub, Linear, Notion, Slack but should verify the full list


6. **Task manager** - I noticed the docs reference a task manager feature with `/tasks` command that we should explore further.Let me cross-reference against the original video and check if there's anything in the Augment docs we missed.
```
This block is not supported on your current device yet.
```

Interesting findings! Let me check for a few more things - the original video mentioned:
1. Hooks (deterministic runs before/after)
2. Modes (like planning mode)

And I found subagents which we skipped but might be worth mentioning briefly. Let me also check what the original video covered that we might be missing.

From the original video transcript:
- Rules files → static context
- Commands/slash commands
- MCP servers (third-party tools)
- Modes and sub-agents - "a sub-agent was kind of like a prompt. You could include some persona or some task that you wanted the agent to always do, but you could also then limit the scope of the tools that you give the agent. And modes kind of took this a little bit further."
- Hooks - "deterministic hooks. So maybe you always want to inject something into the context for every single run, basically as static context. You can use a hook for that. Maybe after a conversation has finished, you want to prompt the agent with something else or log it and save it off into a database."
- Skills (coming)

Things I found in Augment docs that we haven't covered:
1. **Subagents** - custom agents for specialized tasks, their own context window, can configure model, tools, prompt. User found this when they said "subagents are not needed here" but maybe we should mention briefly?
2. **Automation** - using Auggie in CI/CD, GitHub Actions workflows
3. **Native integrations list** - we should check what the full list is
4. **Interactive mode features** - like `/agents` wizard, task manager

Let me also look for modes/plan mode in Augment.
```
This block is not supported on your current device yet.
```

Okay, now I have a better picture. Let me compare what the original video covered vs what we have:

**Original video concepts:**
1. ✅ Rules files → static context
2. ✅ Commands/slash commands  
3. ✅ MCP servers (third-party tools)
4. ⚠️ Modes and sub-agents - We said subagents not needed, but they're a feature
5. ⚠️ Hooks (deterministic, before/after) - Augment doesn't seem to have this concept
6. ✅ Skills (coming)
7. ✅ Context Engine / semantic search

**Things in Augment docs we might want to mention:**
1. **Subagents** - Custom agents with own context window, model, tools. We said not needed but they exist
2. **Memories** - We covered promoting to rules
3. **Quick Ask Mode** - Read-only toggle in IDE
4. **Tasklist** - Structured task planning in IDE
5. **Remote Agents** - Cloud-based agents
6. **Checkpoints** - Automatic snapshots
7. **Native integrations list** - We mentioned some but not full list
8. **Automation/CI-CD** - Using Auggie in pipelines, GitHub Actions

**What the original video has that Augment doesn't seem to have:**
- **Hooks** - Augment doesn't have explicit pre/post hooks for deterministic runs
- **Modes** (like plan mode) - Augment has Quick Ask Mode but not dedicated planning modes

Let me also cross-reference with the course outline from the PDF to make sure we're aligned.

From the PDF course outline:
- Module 2: Environment Setup: Rules, Guidelines, MCP, IDE/CLI
  - Rules, Guidelines, Memories
  - External Context
  - MCPs + Integrations
  - IDE setup
  - CLI set up
  - Code Review Set up
  
Most of this is covered already. I should probably mention subagents as a building block even though they're not essential for this video, and note that Augment doesn't have the hook mechanism that the original video featured.Based on my review, here's what we have vs. what's potentially missing:

**Covered well:**
- ✅ Rules (types, frontmatter, hierarchy, locations)
- ✅ AGENTS.md
- ✅ Commands (locations, namespacing, frontmatter, arguments)
- ✅ MCP (native integrations, MCP servers, transport types, CLI commands)
- ✅ Permissions (types, regex filtering, presets)
- ✅ Context Engine
- ✅ Skills (coming)
- ✅ Memories → Rules

**Potentially missing or worth mentioning:**

1. **Subagents** (CLI) — Custom agents with their own context window, model, and tools. Stored in `~/.augment/agents/` or `.augment/agents/`. You said not needed but they *are* a building block that maps to "sub-agents" in the original video.

2. **Hooks** — The original video mentions deterministic hooks (inject context at start, prompt after finish, log to database). **Augment doesn't have this concept** — worth noting as a difference.

3. **Quick Ask Mode** (IDE) — Read-only toggle that restricts agent to read-only tools. Mentioned in docs but we didn't cover.

4. **Tasklist** (IDE) — Structured task planning interface. Not really a "building block" but a workflow feature.

5. **Rules precedence order** — The full order from docs:
   1. Custom rules file (`--rules` flag)
   2. CLAUDE.md
   3. AGENTS.md
   4. `.augment-guidelines` (legacy)
   5. `.augment/rules/`
   6. `~/.augment/rules/`

6. **Native integrations list** — We said "GitHub, Linear, Notion, Slack" but should verify full list.

Do you want me to:
- Add a brief mention of subagents?
- Add the full rules precedence order?
- Note the absence of hooks vs. the original video?\n
## human\n\noh yeah lets add subagents and task list and precendence order\n
## assistant\n\nLet me add:
1. Subagents - to the overview and as its own section
2. Tasklist - to the overview and brief mention
3. Rules precedence order - to the rules section

I'll update the beat sheet with these additions.
```
This block is not supported on your current device yet.
```

Now I need to add:
1. Rules precedence order to the rules section
2. Subagents as a new section
3. Tasklist as a new section

Let me add the precedence order to the rules section first.
```
This block is not supported on your current device yet.
```

Now I need to add:
1. Subagents as a new section (after Commands)
2. Tasklist as a new section (somewhere appropriate)

Let me view the current file to see where to best insert these.
```
This block is not supported on your current device yet.
```

Now I need to:
1. Add Tasklist section
2. Renumber remaining sections

Let me add Tasklist after Permissions and before Context Engine. Let me also check the current numbering.
```
This block is not supported on your current device yet.
```

Now I need to renumber Permissions, and then add Tasklist. Let me check what number Permissions is currently.
```
This block is not supported on your current device yet.
```

Now let me add Tasklist section and renumber the remaining sections. Let me view a portion of the file to understand its structure better.
```
This block is not supported on your current device yet.
```

I see the issue - the MCP section is still numbered 6. Let me view more to understand the full structure, then fix all the numbering at once.
```
This block is not supported on your current device yet.
```

I see the issue - there are duplicate section numbers (two 8's) and MCP is still 6 when it should be different. Let me fix the numbering and add Tasklist. The correct order should be:

1. Hook
2. Overview
3. Rules
4. Commands
5. Subagents
6. MCP
7. Skills
8. Permissions
9. Tasklist (new)
10. Context Engine
11. Where it's going
12. Practical takeaway

Let me fix all the numbering and add the Tasklist section.
```
This block is not supported on your current device yet.
```

Wait, that didn't actually change anything since it was already 6. Let me look at the actual sections:

Current:
- 1. Hook
- 2. Overview
- 3. Rules
- 4. Commands
- 5. Subagents (new)
- 6. MCP (correct)
- 7. Skills (correct)
- 8. Permissions (correct)
- 8. Context Engine (DUPLICATE - should be 9)
- 9. Where it's going (should be 10)
- 10. Practical takeaway (should be 11)

Actually let me add Tasklist first after Permissions, then fix Context Engine's number. Let me add Tasklist after Permissions section.
```
This block is not supported on your current device yet.
```

Now I need to fix the remaining section numbers:
- 9. Where it's going → should be 11
- 10. Practical takeaway → should be 12

Let me update those.
```
This block is not supported on your current device yet.
```

Now fix the Practical takeaway section number.
```
This block is not supported on your current device yet.
```

Now let me update the practical takeaway table to include the new items (Subagents and Tasklist).
```
This block is not supported on your current device yet.
```

Now let me update the visual opportunities in runtime notes to include subagents and tasklist.
```
This block is not supported on your current device yet.
```

Let me also update the target length since we've added more content.
```
This block is not supported on your current device yet.
```

Now let me present the final file to the user.
```
This block is not supported on your current device yet.
```

Done! Let me summarize what was added.Added:

**Subagents (Section 5):**
- Where they live (`~/.augment/agents/`, `.augment/agents/`)
- Frontmatter config (name, description, model, color)
- Key characteristics (independent context, custom model, scoped tools)
- When to use (code review, test gen, docs)
- Trade-off note about visibility vs delegation

**Tasklist (Section 9):**
- How it works (agent creates plan → you review → agent executes)
- Key features (subtasks, sequential execution, mid-task steering, changes view)
- When to use (complex features, multi-step refactors, Jira/Linear tickets)
- Trade-off note about overhead for simple tasks

**Rules Precedence Order:**
- Full 6-level hierarchy from `--rules` flag down to user rules

**Updated:**
- Overview table now includes Subagents and Tasklist
- Practical takeaway table includes new items
- Visual opportunities expanded
- Target length bumped to 7-10 minutes

Structure is now:
1. Hook → 2. Overview → 3. Rules → 4. Commands → 5. Subagents → 6. MCP → 7. Skills → 8. Permissions → 9. Tasklist → 10. Context Engine → 11. Where it's going → 12. Practical takeaway

Anything else to add or adjust?\n
## human\n\nok lets add hooks too! https://docs.augmentcode.com/cli/hooks\n
## assistant\n\nThe user wants me to add hooks from the Augment CLI docs. Let me fetch that page to see what hooks are available in Augment.
```
This block is not supported on your current device yet.
```\n
## assistant\n\nThe user wants me to add hooks to the beat sheet. Let me fetch the docs page first to understand what hooks are in Augment.
```
This block is not supported on your current device yet.
```

Augment has hooks! This is actually what I mentioned wasn't present when comparing to the original video. Let me add this to the beat sheet. Hooks are deterministic injection points that run custom scripts at specific lifecycle events.

Key points:
- Hook Events: PreToolUse, PostToolUse, Stop, SessionStart, SessionEnd
- Configured in settings.json (system, user)
- Shell scripts (.sh) that receive JSON via stdin
- Can block, allow, modify, or inject context
- Matchers use regex to target specific tools

Use cases:
- Security auditing - block dangerous commands
- Policy enforcement - enforce standards
- Logging - track tool usage
- Integration - connect external systems
- Require tests before completion (Stop hook)
- Inject context at session start

This is the "deterministic injection points" concept from the original video that I said Augment didn't have - turns out they do!

Let me add this to the beat sheet.Got it — Augment actually has hooks now! This is the deterministic injection point concept from the original video. Let me add it:
```
This block is not supported on your current device yet.
```

Now let me add the Hooks section. I'll add it after Subagents (section 5) since it's related to control flow and before MCP.
```
This block is not supported on your current device yet.
```

Now I need to renumber all the sections after Hooks. Let me check and update the section numbers.
```
This block is not supported on your current device yet.
```

Now need to renumber Permissions from 8 to 9.
```
This block is not supported on your current device yet.
```

Now Tasklist from 9 to 10.
```
This block is not supported on your current device yet.
```

Context Engine from 10 to 11.
```
This block is not supported on your current device yet.
```

Where it's going from 11 to 12.
```
This block is not supported on your current device yet.
```

Practical takeaway from 12 to 13.
```
This block is not supported on your current device yet.
```

Now let me update the practical takeaway table to include Hooks and update the visual opportunities.
```
This block is not supported on your current device yet.
```

Now let me update visual opportunities to include hooks.
```
This block is not supported on your current device yet.
```

Now let me update the target length since we added more content.
```
This block is not supported on your current device yet.
```

Let me present the updated file to the user.
```
This block is not supported on your current device yet.
```

The beat sheet has been updated with Hooks. Let me summarize what was added.Added **Hooks (Section 6)** — the deterministic injection points I mentioned were missing from the original video comparison. Turns out Augment has them!

**What hooks cover:**

- **5 lifecycle events:** PreToolUse, PostToolUse, Stop, SessionStart, SessionEnd
- **Configuration:** Lives in `~/.augment/settings.json` with regex matchers
- **Capabilities:** Block tools, modify inputs, inject context, enforce policies
- **Use cases:** Security auditing (block `rm -rf`), require tests before completion, compliance logging, inject session context

**Key distinction from Permissions:**
- Permissions = declarative allow/deny rules
- Hooks = executable code that runs at specific points

**Updated structure (13 sections now):**
1. Hook → 2. Overview → 3. Rules → 4. Commands → 5. Subagents → **6. Hooks** → 7. MCP → 8. Skills → 9. Permissions → 10. Tasklist → 11. Context Engine → 12. Where it's going → 13. Practical takeaway

Target length bumped to 10-12 minutes. This is now a comprehensive reference for all of Augment's building blocks.\n
## human\n\nbrainstorm 20 different intro hooks across the spectrum\n
## assistant\n\nThe user wants me to brainstorm 20 different intro hooks for the video - different ways to open/start the video that will grab attention. They want variety across a spectrum, so I should think about different tones, approaches, and angles.

Let me think about different categories:
1. Direct/No-nonsense
2. Problem-agitation
3. Curiosity/question
4. Bold claim
5. Relatable frustration
6. Analogy/metaphor
7. Contrast/comparison
8. Story/scenario
9. Challenge the viewer
10. Humor/self-deprecating
11. Speed/urgency
12. Authority/expertise
13. Counter-intuitive
14. List/promise
15. Confession/honesty
16. Visual hook (describe what they'll see)
17. Social proof
18. Fear of missing out
19. Empathy
20. Pattern interrupt

I'll brainstorm across these different styles, keeping them punchy and suitable for a technical audience of experienced developers.Here are 20 intro hooks across the spectrum — from dead-serious to playful, direct to narrative:

---

**DIRECT / NO-NONSENSE**

1. **The Index Card**
"Rules. Commands. Subagents. Hooks. MCP. Permissions. Tasklist. Context Engine. Skills. Here's what each one actually does and when to use it."

2. **The Promise**
"By the end of this video, you'll know exactly which Augment feature to reach for in any situation — no more guessing."

3. **The Admit-It**
"You've been using Augment for weeks and you still don't know the difference between a rule and a command. Let's fix that."

---

**PROBLEM-FIRST**

4. **The Frustration**
"You write a rule. Agent ignores it. You add it to AGENTS.md. Now it fires when you don't want it. The config system feels like chaos — but it's not. There's a hierarchy."

5. **The Repeated Mistake**
"Every time the agent touches auth code, it breaks something. You've corrected it five times. There's a way to make it stick."

6. **The Overwhelm**
"Augment's docs have rules, guidelines, commands, hooks, permissions, MCP, subagents, tasklists, and skills. Where do you even start?"

---

**CURIOSITY / QUESTION**

7. **The What-If**
"What if you could block the agent from running `rm -rf` before it even tries? That's hooks."

8. **The Why**
"Why does Augment have both rules AND permissions? Aren't they the same thing? No — and the difference matters."

9. **The Quiz**
"Quick: what's the difference between a subagent and an MCP server? If you hesitated, this video is for you."

---

**BOLD CLAIM**

10. **The Multiplier**
"The difference between someone who's 2x faster with Augment and someone who's 10x faster? They've configured these nine things."

11. **The Unlock**
"Most people use maybe 20% of what Augment can do. This is the other 80%."

12. **The Secret**
"The developers shipping fastest with AI aren't prompting better — they've set up their environment so the agent already knows what to do."

---

**ANALOGY / METAPHOR**

13. **The Kitchen**
"Rules are the recipe. Commands are the mise en place. Hooks are the smoke detector. MCP is the delivery app. Here's how they work together."

14. **The Orchestra**
"You're the conductor. The agent is the orchestra. But right now you're waving your arms hoping they follow. Let me show you the sheet music."

15. **The Toolbelt**
"A carpenter doesn't use a hammer for everything. Neither should you use chat for everything. Augment has nine different tools — here's when to reach for each."

---

**RELATABLE SCENARIO**

16. **The Monday Morning**
"It's Monday. You open a ticket. You could spend 20 minutes explaining context to the agent... or you could have a SessionStart hook that already loaded it."

17. **The Code Review**
"Agent writes code. You review it. Find the same mistake you've corrected three times before. There's a better way."

18. **The New Repo**
"You join a new codebase. Agent has no idea about the weird conventions. In 10 minutes, you can teach it everything."

---

**PROVOCATIVE / CONTRARIAN**

19. **The Trap**
"Stop writing better prompts. Seriously. The best Augment users barely prompt at all — they configure."

20. **The Uncomfortable Truth**
"If you're still explaining your codebase to the agent every session, you're doing it wrong. The whole point of these features is to do it once."

---

**Spectrum summary:**
- 1-3: Just-tell-me-what-I-need-to-know energy
- 4-6: I feel seen, now fix my problem
- 7-9: Hmm, now I'm curious
- 10-12: Big promise, better deliver
- 13-15: Conceptual frame that makes it click
- 16-18: Story I can see myself in
- 19-20: Challenge my assumptions

Which direction resonates? I can also combine approaches (e.g., start with #4's frustration, pivot to #14's metaphor).\n
## human\n\nwe need a better 1 liner for skills. give me 5 examples\n
## assistant\n\nThe user wants better one-liners for Skills in the overview table. Currently it says:

"(Coming) Packaged agent behaviors that can combine rules, commands, and MCP into reusable workflows."

This is vague. Let me think about what Skills actually are based on what we've discussed:
- They're coming soon
- They'll behave like agents themselves
- They can wrap MCPs with specific instructions
- Example: PR review skill with team's review checklist

The challenge is Skills aren't fully defined yet, so I need to capture the concept without overpromising. Let me brainstorm 5 options that are more concrete/evocative:Here are 5 options for the Skills one-liner:

---

1. **The Recipe Angle**
"(Coming) Reusable agent recipes — bundle instructions, tools, and context into a single capability you can invoke."

2. **The Specialist Angle**
"(Coming) Pre-packaged specialists — like a 'PR reviewer' or 'test writer' you can summon with specific expertise baked in."

3. **The Shortcut Angle**
"(Coming) One-word access to complex behaviors — say 'review this PR' and it knows your team's entire checklist."

4. **The Comparison Angle**
"(Coming) Think subagents, but shareable and portable — packaged behaviors you can drop into any project."

5. **The Capability Angle**
"(Coming) Teach the agent a new verb — 'deploy', 'review', 'migrate' — with all the context and tools it needs to do it right."

---

My pick: **#5** or **#2** — they're concrete without overexplaining. #5 has the "teach the agent a new verb" framing which clicks immediately. #2 is more approachable if you want to keep the specialist/delegation theme consistent with subagents.

Want me to swap one in?\n
## human\n\ndo rules share the same frontmatter as agents.md\n
## assistant\n\nThe user is asking whether rules in Augment (the .augment/rules/ files) share the same frontmatter format as AGENTS.md files. Let me think about what I know from the documentation I fetched earlier.

From my research on Augment's rules documentation:

For `.augment/rules/` files:
- They use frontmatter with `type` and `description` fields
- `type` can be `always_apply` or `agent_requested`
- `description` is required for `agent_requested` type

For `AGENTS.md`:
- This is the cross-tool standard (works with Claude Code, Cursor, etc.)
- I don't recall seeing frontmatter mentioned for AGENTS.md in the Augment docs

Let me think... AGENTS.md is supposed to be a portable, open standard. The frontmatter approach (`type: always_apply` vs `agent_requested`) seems to be Augment-specific for their `.augment/rules/` files.

I should double-check by looking at the docs again or admit I'm not 100% certain and should verify.

Actually, I recall from the earlier research that:
- `.augment/rules/` files support frontmatter with type/description
- `AGENTS.md` files are hierarchical and auto-discovered based on what file you're working on
- The Claude Code standard for CLAUDE.md doesn't use frontmatter - it's just markdown

So the answer is likely: No, AGENTS.md doesn't use the same frontmatter. AGENTS.md is plain markdown (following the open standard), while .augment/rules/ files can have Augment-specific frontmatter for type and description.

But I should verify this to be sure. Let me be honest with the user that I should double-check.Good question — let me verify. From what I researched earlier, I believe the answer is **no**, but I should double-check the AGENTS.md spec.
```
This block is not supported on your current device yet.
```

This is really interesting. The search results clarify a few things:

1. **AGENTS.md (the open standard)** - According to the official agents.md site: "No. AGENTS.md is just standard Markdown. Use any headings you like; the agent simply parses the text you provide."

2. However, there's an **open issue (#10)** on the agents.md repo requesting frontmatter support with fields like `description`, `globs`, and `alwaysApply`.

3. **GitHub Copilot's agents.md** (`.agent.md` files) DO use frontmatter - but this is GitHub's extension of the format, not the base AGENTS.md spec.

4. **Augment's .augment/rules/** files use their own frontmatter format with `type` and `description`.

So the answer is:

- **AGENTS.md (open standard)**: Plain markdown, NO frontmatter required/supported in the base spec
- **Augment's .augment/rules/**: Uses frontmatter with `type` (always_apply/agent_requested) and `description`

They are NOT the same format. This is actually an important distinction for the video - AGENTS.md is portable/cross-tool because it's just markdown, while .augment/rules/ has Augment-specific metadata.**Answer: No, they don't.**

From the research:

**AGENTS.md (open standard):**
- Plain markdown, no frontmatter
- "AGENTS.md is just standard Markdown. Use any headings you like; the agent simply parses the text you provide."
- Portability is the point — works across Augment, Cursor, Claude Code, Codex, etc.

**Augment's `.augment/rules/` files:**
- Uses frontmatter with Augment-specific fields:
```yaml
---
type: always_apply | agent_requested
description: When to load this rule
---
```

This is actually a meaningful distinction for the video — **AGENTS.md is portable because it's just markdown**, while Augment's rules have richer metadata (Auto/Manual type selection) at the cost of being Augment-specific.

Want me to make this clearer in the beat sheet? Could add a quick note like:

> **Format difference:** AGENTS.md is plain markdown (portable). Augment rules support frontmatter for type/description (more control, Augment-specific).\n
## human\n\nmake artifacts and slides to supplement this script:\n
## assistant\n\nThe user wants me to create visual artifacts/slides to supplement this video script about Augment Code's building blocks. Let me create a comprehensive set of slides that would work well as visual aids during the video.

I should create:
1. Overview/map slide with all concepts
2. Individual slides for each concept with key details
3. Visual diagrams where helpful (file structure, hooks lifecycle, etc.)

Let me create a React artifact with multiple slides that can be navigated through.
```
This block is not supported on your current device yet.
```

Let me also create a simpler visual overview that could be used as a standalone reference graphic or thumbnail.
```
This block is not supported on your current device yet.
```

Good, that's a complete slide deck. Now let me also create a quick reference card/cheat sheet that could work as a downloadable PDF or static image for the video description.Created a 16-slide interactive deck covering:

1. **Title**
2. **Overview Map** — all 9 concepts with icons and one-liners
3. **Rules** — locations, types (Always/Manual/Auto)
4. **Rules Frontmatter** — example with AGENTS.md note
5. **Commands** — locations, usage with arguments
6. **Subagents** — configuration, key features
7. **Hooks Overview** — 5 lifecycle events
8. **Rules vs Hooks** — side-by-side comparison (suggestions vs guarantees)
9. **MCP** — native integrations + CLI setup
10. **Permissions** — allow/deny/ask-user with regex example
11. **Skills** — progressive discovery flow
12. **Tasklist** — visual checklist UI
13. **Context Engine** — grep vs semantic comparison
14. **File Structure** — user vs workspace locations
15. **Takeaway** — start-here recommendations
16. **End** — docs link + CTA

The slides use your dark theme with cyan/teal accents. Each slide maps to a section of your script.

Want me to also create:
- A static cheat sheet/reference card (single image)?
- Individual SVG diagrams for specific concepts (like the hooks lifecycle)?
- A simpler HTML version for easier export?\n