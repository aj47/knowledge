---
kind: note
id: claude-conversation-2026-01-16-enterprise-auggie-cli-training-module-99e0ac3a
updatedAt: 1768612935232
createdAt: 1768583589019
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 99e0ac3a-1597-4cab-a5fc-b8c3e2a0da41
created_at: 2026-01-16T17:13:09.019371Z
updated_at: 2026-01-17T01:22:15.232491Z
title: Claude Conversation — 2026-01-16 — Enterprise Auggie CLI training module — 99e0ac3a
---

# Enterprise Auggie CLI training module

## Metadata

- Claude conversation UUID: `99e0ac3a-1597-4cab-a5fc-b8c3e2a0da41`
- Created: `2026-01-16T17:13:09.019371Z`
- Updated: `2026-01-17T01:22:15.232491Z`
- Message count: 18
- Transcript chars extracted: 42141

## Claude summary

**Conversation Overview**

The user engaged in a comprehensive research and development session focused on AI coding tool custom commands, specifically building upon their existing PRD (Product Requirements Document) interview system. They began by asking about the distinction between PRDs and technical specifications, leading to clarification that PRDs focus on "what" and "why" (user needs, goals, success criteria) while specs focus on "how" (architecture, APIs, implementation details). This insight prompted a significant restructuring of their command system from "spec-interview" to "prd-interview" to better reflect the actual purpose of their interactive requirements gathering approach.

The user requested research on similar custom command systems across AI coding tools, which revealed that their conversational, Socratic dialogue approach was unique in a landscape dominated by task-execution commands. The research identified cc-sdd as the most similar project, but noted that it takes a document-focused approach while the user's system is conversation-focused with features like confidence tracking, dual-context research (codebase plus web), and adaptive questioning. The user then requested the creation of a "prd-to-tasks" command system that would utilize parallel subagents to convert PRDs directly into implementation tasks, bypassing the traditional technical specification phase for a more streamlined workflow.

Claude developed a comprehensive system including the main `/prd-to-tasks` orchestrator command, six specialized subagents (backend-tasks, frontend-tasks, data-tasks, test-tasks, infra-tasks, and task-integrator), and an `/implement` command for executing the generated tasks. The system organizes work into execution waves with clear dependencies, enables parallel processing through specialized subagents, and includes progress tracking and task management features. The user's approach demonstrates a preference for systematic, well-documented workflows with clear separation of concerns and parallel processing capabilities to maximize efficiency in AI-assisted development.

## Quick excerpt

The user wants to create educational content for enterprise developers on using the Augment Code CLI (Auggie). They want to cover four specific topics: 1. Spec-driven development 2. agents.md 3. Subagents 4. Custom commands This is different from the general AI coding course outline in the PDF - this is specifically focused on Augment Code CLI features. I should search for current information on these Auggie features to make sure I have accurate, up-to-date information before creating the educat

## Transcript

## human\n\ni need to educate developers at an enterprise on how to get the most out of the auggie cli.
we should cover;
1. spec driven dev\n
## human\n\ni need to educate developers at an enterprise on how to get the most out of the auggie cli.
we should cover;
1. spec driven dev
2. agents.md
3. subagents
4. custom commands\n
## assistant\n\nThe user wants to create educational content for enterprise developers on using the Augment Code CLI (Auggie). They want to cover four specific topics:
1. Spec-driven development
2. agents.md
3. Subagents
4. Custom commands

This is different from the general AI coding course outline in the PDF - this is specifically focused on Augment Code CLI features. I should search for current information on these Auggie features to make sure I have accurate, up-to-date information before creating the educational content.

Let me search for information on these specific Augment Code features.I'll search for current information on Auggie's CLI features to make sure the educational content is accurate and up-to-date.
```
This block is not supported on your current device yet.
```

Good, I'm getting some context on Auggie CLI and spec-driven development. Let me search for more specific information on agents.md, subagents, and custom commands in Auggie.
```
This block is not supported on your current device yet.
```

Good, I'm getting information about subagents and custom commands. Let me fetch the official documentation pages to get more detailed information.
```
This block is not supported on your current device yet.
```

Great, I have detailed information on subagents. Now let me fetch the custom commands documentation.
```
This block is not supported on your current device yet.
```

I now have good information on custom commands. Let me also search for information on agents.md specifically for Auggie.
```
This block is not supported on your current device yet.
```

I now have comprehensive information on:
1. Spec-driven development with Auggie
2. agents.md and AGENTS.md files
3. Subagents
4. Custom commands

Let me fetch the Rules & Guidelines documentation for Auggie CLI to get more specific information.
```
This block is not supported on your current device yet.
```

Let me try searching for the rules documentation more specifically.
```
This block is not supported on your current device yet.
```

Now I have comprehensive information on all four topics. Let me create a detailed enterprise training module for Auggie CLI covering:
1. Spec-driven development
2. agents.md
3. Subagents
4. Custom commands

I'll create this as a structured educational document that can be used for enterprise training.Now I have comprehensive information. Let me create a detailed enterprise training module for your developers.
```
This block is not supported on your current device yet.
```

This is a comprehensive skill file for creating presentations. Given the scope of the enterprise training content, I think it would be better to create a detailed markdown document rather than a PowerPoint presentation. The content is quite technical and text-heavy, making markdown a better format for reference material that developers can use.

Let me create a comprehensive enterprise training guide for Auggie CLI.Given the technical depth needed for this enterprise training, I'll create a comprehensive markdown training guide that can also serve as internal documentation for your team.
```
This block is not supported on your current device yet.
```

The markdown training guide is comprehensive. Now let me also create a more visual React artifact to serve as a quick reference / cheat sheet that developers can use as a companion to the training guide.
```
This block is not supported on your current device yet.
```

Now let me create a quick reference cheat sheet as a React artifact for a more visual companion piece.
```
This block is not supported on your current device yet.
```

Let me copy this to outputs as well.
```
This block is not supported on your current device yet.
```

Now let me present both files to the user.
```
This block is not supported on your current device yet.
```

I've created both files. Let me summarize what I've created for the user.I've created two resources for your enterprise Auggie CLI training:

**1. Comprehensive Training Guide** (Markdown) — A detailed reference document covering:
- **Module 1: Spec-Driven Development** — The four-phase workflow (Specification → Technical Plan → Tasks → Implementation), with templates and enterprise examples
- **Module 2: AGENTS.md** — Hierarchical rules discovery, file locations, rule types (always/manual/auto), and service-specific override examples
- **Module 3: Subagents** — Creating specialized agents for code review, security audits, test generation with full configuration examples
- **Module 4: Custom Commands** — Building reusable slash commands, namespacing, CLI execution patterns

Plus a full enterprise repository structure recommendation and quick reference card.

**2. Interactive Cheat Sheet** (React) — A visual quick reference with tabbed navigation that developers can use as a companion during workshops or day-to-day work. Matches Augment's aesthetic (black background, cyan accents).

The training aligns with your Augment Code focus and emphasizes practical, hands-on demonstrations over theory—fitting the "docs show the API, code shows the implementation" principle. Want me to expand any module into a full video script with timing markers, or create specific demo scenarios using the Medusa.js ecosystem?\n
## human\n\nwe dont want user to write whole spec from scratch. research best practices, it needs to be an interactive flow with the user possibly a custom command interview mode where the agent gathers context, does research and asks clarifying questions to ultimately build a spec\n
## assistant\n\nThe user wants to move away from having developers write specs from scratch. Instead, they want an interactive "interview mode" approach where:

1. The agent gathers context automatically
2. Does research on the codebase
3. Asks clarifying questions
4. Ultimately builds the spec for the user

This is a much more practical approach for enterprise developers who don't want to write verbose specs manually. Let me research best practices for this kind of interactive spec generation workflow.Let me research best practices for interactive spec generation workflows.
```
This block is not supported on your current device yet.
```

This is great research. Let me search for more specific patterns around interview-mode spec generation and guided questioning workflows.
```
This block is not supported on your current device yet.
```

This is excellent! I found great research on:

1. GitHub Spec Kit's `/speckit.clarify` command - structured, coverage-based questioning that records answers
2. Clavix's approach - "Systematic protocol with 95% confidence threshold for gathering critical information" and "Socratic questioning with 15 specialized patterns"
3. The concept of making informed guesses with reasonable defaults, and limiting clarifications to only critical decisions
4. The workflow of: Research → Clarify → Generate → Refine

Let me search for more on the "interview mode" style and Socratic questioning approaches.
```
This block is not supported on your current device yet.
```

This is excellent research. Now I have a solid understanding of:

1. **Socratic questioning patterns** - clarification, probing assumptions, exploring implications, consequence analysis, meta-questions
2. **Confidence thresholds** - Clavix uses 95% confidence before proceeding
3. **Good vs bad questions** - Good questions reduce friction by surfacing missing info early; bad questions interrupt flow without improving outcome
4. **The 3-phase pattern** from the Socratic Prompt article:
   - Phase 1: Questions only (remove ambiguity)
   - Phase 2: Assumptions check (restate + list assumptions)
   - Phase 3: Answer (only when fully specified)
5. **GitHub Spec Kit's `/speckit.clarify`** - structured, coverage-based questioning
6. **Clavix patterns** - RequirementPrioritizer, UserPersonaEnricher, SuccessMetricsEnforcer, DependencyIdentifier, ConversationSummarizer, TopicCoherenceAnalyzer, ImplicitRequirementExtractor

Now let me create a comprehensive interview-mode custom command for Auggie that implements these best practices.Now I have excellent research. Let me create an interactive spec generation custom command system for Auggie CLI that implements these best practices.
```
This block is not supported on your current device yet.
```

Now let me create the actual command files that developers can drop into their project.Now let me create the actual command files that can be dropped directly into a project:
```
This block is not supported on your current device yet.
```

Now let me also update the main training guide to include this interactive spec generation approach instead of the manual spec writing approach. Let me create a clean version of the training guide that incorporates the interview mode.
```
This block is not supported on your current device yet.
```

Now let me update the main enterprise training guide to focus on the interactive spec generation approach instead of manual spec writing. I'll also include the command files in a way that's easy for developers to use.
```
This block is not supported on your current device yet.
```

Now let me update the main enterprise training guide to incorporate the interactive spec generation approach.
```
This block is not supported on your current device yet.
```

Now let me copy all the files to outputs and present them to the user.
```
This block is not supported on your current device yet.
```

Now let me also create a quick visual React artifact that can be used for training to show the interview workflow.
```
This block is not supported on your current device yet.
```\n
## assistant\n\nThe user wants to create an interactive spec-building workflow rather than having developers write specs from scratch. This should be a custom command that acts as an "interview mode" where Auggie:
1. Gathers context from the user
2. Does research (codebase analysis)
3. Asks clarifying questions
4. Ultimately builds a comprehensive spec

Let me research best practices for interactive spec generation and interview-style prompting in AI coding tools.Let me research best practices for interactive spec generation and interview-driven workflows.
```
This block is not supported on your current device yet.
```

Good research on spec-driven development. Now let me search for more specific examples of interview-mode or conversational spec generation patterns.
```
This block is not supported on your current device yet.
```

Excellent research! Now I have a comprehensive understanding of best practices for interactive spec generation. The key insights are:

1. **SpecKit's `/speckit.clarify`** - Uses structured, coverage-based questioning that records answers in a Clarifications section
2. **Reverse interrogation** - AI asks the user clarifying questions like "You mentioned users can upload images but didn't define maximum file limits and supported formats. Please clarify."
3. **[NEEDS CLARIFICATION] markers** - Templates mandate marking ambiguities rather than guessing
4. **Progressive workflow** - Constitution → Specification → Clarification → Plan → Tasks → Implementation
5. **Quality gates** - Checklists function as "unit tests for English"

Key principles I've identified from research:
- Interview mode should gather context FIRST (codebase analysis)
- Questions should be strategic, not a checklist dump
- Provide multiple choice options when possible for easier user response
- Use Socratic questioning (clarification, assumption probing, implication exploration)
- Track confidence level and only generate spec when 90%+ confident
- Mark unknowns with [NEEDS CLARIFICATION] rather than guessing

I've already created the comprehensive materials in the previous context. Let me check what I have and update/present them to the user.I've already done this research and created comprehensive materials. Let me present what I built:
```
This block is not supported on your current device yet.
```

Good, I've presented the files. Let me give a summary of what was built based on the research.I researched best practices and created a complete **Interactive Spec Interview System** for Auggie CLI. Here's what I built:

**Key Research Findings:**

The research (GitHub SpecKit, Clavix, ChatPRD) showed that the best spec generation flows use:

1. **Reverse interrogation** — AI asks clarifying questions rather than making developers write docs from scratch
2. **Confidence tracking** — Only generate spec when 90%+ confident, ask questions when below threshold
3. **Socratic questioning** — Clarification, assumption probing, implication exploration, evidence seeking
4. **Multiple choice options** — Easier for users than open-ended questions
5. **Codebase-aware context** — Research existing patterns before asking anything

**What I Created:**

| File | Purpose |
|------|---------|
| `spec-interview.md` | Main command — starts the interactive interview flow |
| `specify/clarify.md` | Structured clarification with coverage analysis |
| `agents/spec-architect.md` | Subagent specialized in Socratic spec building |
| `spec-interview-demo.jsx` | Interactive React demo showing the flow |

**The Interview Flow:**

```
User: /spec-interview add user notifications

Agent: [analyzes codebase first]

## Context I Found
- Existing user service at /src/services/user.ts
- No current notification system
- Email service exists at /src/services/email.ts

## Questions (3 of 5)
1. **Channels**: (A) In-app only, (B) Email only, (C) Both?
2. **Triggers**: What events trigger notifications?
3. **User Control**: Should users configure preferences?

User: 1C, 2C, 3A

Agent: [asks 2 more targeted questions, reaches 95% confidence]

✓ Spec Generated: specs/user-notifications/spec.md
```

The "Three Question Rule" ensures the agent researches before asking, uses smart defaults, and only asks questions that significantly impact implementation.\n
## human\n\ngive the final script in pdf\n
## assistant\n\nThe user wants the final training script/guide in PDF format. Let me first read the SKILL.md for PDF creation to understand the best approach, then compile all the materials into a comprehensive PDF.
```
This block is not supported on your current device yet.
```

I need to create a comprehensive PDF with all the training materials. I'll use reportlab to create a professional-looking PDF. Let me compile all the content and create the PDF.
```
This block is not supported on your current device yet.
```

Now let me create a comprehensive PDF with all the training materials including the interactive spec interview content.
```
This block is not supported on your current device yet.
```

Let me run the script to generate the PDF.
```
This block is not supported on your current device yet.
```

There's a style name conflict. Let me fix it by using a different name for the code style.
```
This block is not supported on your current device yet.
```

I need to update all references to styles['Code'] to styles['CodeBlock']
```
This block is not supported on your current device yet.
```

Let me also check if there are other style conflicts and run the script again.
```
This block is not supported on your current device yet.
```

Let me rename all the potentially conflicting styles to have custom prefixes.
```
This block is not supported on your current device yet.
```

Let me run it again and fix any other conflicts.
```
This block is not supported on your current device yet.
```

The PDF was created successfully. Let me present it to the user.
```
This block is not supported on your current device yet.
```

The PDF has been created and presented to the user. It includes:

1. Cover page
2. Table of contents
3. Module 1: Spec-Driven Development with Interactive Interview Mode - covers the full workflow including context gathering, strategic questions, Socratic clarification, and automated spec generation with the confidence calibration and three question rule
4. Module 2: AGENTS.md Configuration - hierarchical discovery, file locations, and examples
5. Module 3: Subagents - creating and running specialized agents
6. Module 4: Custom Commands - including the spec-interview command implementation
7. Quick Reference Card - essential commands, file locations, spec interview flow, and Socratic question categoriesDone! The PDF includes the complete training guide with the interactive spec interview workflow. The guide covers:

**Contents:**
- **Module 1: Spec-Driven Development** — The full interview mode workflow with context gathering, strategic questions, Socratic clarification, confidence calibration, and the "Three Question Rule"
- **Module 2: AGENTS.md Configuration** — Hierarchical discovery, file locations, and enterprise examples
- **Module 3: Subagents** — Creating and invoking specialized agents
- **Module 4: Custom Commands** — Including the spec-interview command implementation
- **Quick Reference Card** — Essential commands, file locations, spec interview flow, and Socratic question categories\n
## human\n\nwhat is the definition between spec and prd. 
also we need to have research from online to supplement codebase research in the interview mode\n
## assistant\n\nThe user is asking two things:
1. The difference between a spec and a PRD
2. They want the interview mode to include web research (online research) in addition to codebase research

Let me search for the distinction between spec and PRD, and also look into how to incorporate web research into the spec interview workflow.
```
This block is not supported on your current device yet.
```

Good research. Now let me search for how AI agents can use web research during spec/requirement gathering.
```
This block is not supported on your current device yet.
```

Good research. Now I have a clear picture of:

1. PRD vs Spec distinction
2. How web research can supplement codebase research

Let me provide a clear summary and update the training materials.Now I have the research. Here's the key distinction and the enhanced interview mode:

---

## PRD vs Spec: The Key Distinction

| Aspect | PRD (Product Requirements Document) | Spec (Technical Specification) |
|--------|-------------------------------------|-------------------------------|
| **Focus** | WHAT and WHY | HOW |
| **Audience** | Product managers, stakeholders, business | Developers, architects, QA |
| **Content** | User needs, business goals, success metrics | Implementation details, architecture, APIs |
| **Abstraction** | High-level, technology-agnostic | Low-level, technology-specific |
| **Question** | "What should the product do?" | "How will we build it?" |

**The Flow:**
```
PRD (What/Why) → Spec (How) → Implementation Plan → Tasks → Code
```
```
This block is not supported on your current device yet.
```

Now let me update the main guide and regenerate the PDF with:
1. PRD vs Spec distinction
2. Web research in the interview flow
```
This block is not supported on your current device yet.
```

Now let me add the web research section to the interview flow in the guide.
```
This block is not supported on your current device yet.
```

Now let me update the Python script to regenerate the PDF with:
1. PRD vs Spec section
2. Web research in the interview flow
```
This block is not supported on your current device yet.
```\n
## assistant\n\nThe user is asking two things:
1. What's the difference between a spec and a PRD?
2. They want the interview mode to include web research (online sources) in addition to codebase research

Let me search for the distinction between spec and PRD, and also look into how tools incorporate web research into spec generation workflows.
```
This block is not supported on your current device yet.
```

Now I have good information on the PRD vs Spec distinction. Let me also search for how AI agents should incorporate web research alongside codebase analysis.
```
This block is not supported on your current device yet.
```

Now I have good information on both topics. Let me summarize the PRD vs Spec distinction clearly, and also update the interview mode to include web research. I already started updating the documents in my previous turn, so let me regenerate the PDF with both improvements.I already have the research from my previous search. Let me give you a clear summary and then regenerate the updated PDF:

---

## PRD vs Spec: The Key Distinction

| Aspect | PRD (Product Requirements Document) | Spec (Technical Specification) |
|--------|-------------------------------------|-------------------------------|
| **Focus** | **WHAT** and **WHY** | **HOW** |
| **Audience** | Product managers, stakeholders, marketing | Developers, architects, QA |
| **Content** | User needs, goals, success metrics, user stories | Architecture, APIs, data models, implementation details |
| **Question** | "What should this product do?" | "How will we build it?" |
| **Abstraction** | High-level, technology-agnostic | Low-level, technology-specific |
```
This block is not supported on your current device yet.
```

Good, the PDF was regenerated. Now let me also update the spec-interview.md and other command files to include web research more prominently.
```
This block is not supported on your current device yet.
```

The spec-interview.md already has the web research phase added. Now let me update it to be more explicit about what to search for and how to present findings. I should also make it clearer about the PRD vs Spec distinction - what the interview mode produces is more PRD-like (what/why) which then feeds into technical planning.
```
This block is not supported on your current device yet.
```

Good. Now let me also update the response format section to show both codebase and web research findings together.
```
This block is not supported on your current device yet.
```

Good. Now let me also update the Three Question Rule to include web research.
```
This block is not supported on your current device yet.
```

Good. Now let me also update the main training guide with the PRD vs Spec distinction more prominently. Let me also update the subagent to include web research.
```
This block is not supported on your current device yet.
```

Now I need to update this subagent to include web research. Let me update it.
```
This block is not supported on your current device yet.
```

Good. Now let me also update the anti-patterns section to reflect web research.
```
This block is not supported on your current device yet.
```

Now let me regenerate the PDF with all the updates. But first, let me also update the PDF generator to include the web research section more prominently.
```
This block is not supported on your current device yet.
```

Good. Now let me present all the updated files to the user.
```
This block is not supported on your current device yet.
```

I've provided the updated files. Let me summarize for the user what PRD vs Spec means and how web research has been integrated.Here's the summary and updated files:

---

## PRD vs Spec: The Key Distinction

| Aspect | PRD | Spec |
|--------|-----|------|
| **Focus** | WHAT and WHY | HOW |
| **Question** | "What should this do?" | "How will we build it?" |
| **Audience** | Product, stakeholders | Developers, QA |
| **Content** | User needs, goals, metrics | Architecture, APIs, data models |
| **Abstraction** | High-level, tech-agnostic | Low-level, tech-specific |

**The flow:** User Idea → **PRD** (interview mode) → **Technical Spec** → Implementation Plan → Tasks

The interview mode generates a **PRD-style specification** focused on *what* users need and *why*, which then feeds into technical planning for the *how*.

---

## Web Research Integration

The interview mode now includes **dual context gathering**:

**A. Codebase Research (Internal)**
- Existing patterns and services
- Tech stack and conventions
- Related documentation

**B. Web Research (External)**
- Best practices in the domain
- Common pitfalls to avoid
- Recommended libraries/APIs
- Security and compliance considerations

**Example output format:**
```
## Context I Found

### From Codebase:
• E-commerce app with cart at /src/features/cart/
• Stripe in package.json (unused)

### From Web Research:
• Best practice: Use Stripe Payment Intents API (not Charges)
• Common pitfall: Not handling webhook retries causes duplicate orders
• Security: PCI compliance requires tokenization, never store raw card numbers
```

This dual research ensures the agent has both internal context AND industry best practices before asking questions—reducing the number of questions needed and making better default recommendations.\n
## human\n\ni think a prd would be more suitable as an initial doc than a spec by this definition\n
## assistant\n\nThe user is right. Based on the research and definitions:

- **PRD** = WHAT and WHY (user needs, goals, success criteria) - high level, tech-agnostic
- **Spec** = HOW (architecture, APIs, implementation details) - low level, tech-specific

The interview mode is focused on understanding user needs, success criteria, and scope boundaries - that's exactly what a PRD is. We should rename the output from "spec" to "PRD" throughout the commands and documentation.

The flow should be:
1. `/prd-interview` → generates PRD (what/why)
2. `/plan` → generates technical spec (how)
3. `/tasks` → generates implementation tasks

Let me update the commands and docs to reflect this.You're absolutely right. The interview mode focuses on *what* users need and *why* — that's a PRD, not a spec. Let me rename everything to reflect the correct terminology.
```
This block is not supported on your current device yet.
```

Now I need to update the content of the file to reflect PRD terminology instead of spec.
```
This block is not supported on your current device yet.
```

Let me also update the subagent name and content.
```
This block is not supported on your current device yet.
```

Now update the content of prd-architect.md
```
This block is not supported on your current device yet.
```

Let me view both files to make sure the changes are correct and complete.
```
This block is not supported on your current device yet.
```

Good, but I need to fix a few remaining "spec" references:
- Line 3: "specification builder" → "PRD builder"
- Line 8: "PRD-Style Specification" → just clean this up
- Line 18: "PRD-style spec" → "PRD"
- Line 89: "Spec Generation" → "PRD Generation"

Let me fix these.
```
This block is not supported on your current device yet.
```

Now I need to also update the Phase 4 section header.
```
This block is not supported on your current device yet.
```

Good. Now let me check and update the prd-architect.md file as well.
```
This block is not supported on your current device yet.
```

I see there are still some "spec" references in lines 35, 74, 174, and 180. Let me fix those.
```
This block is not supported on your current device yet.
```

Now I need to also fix:
- Line 74: "specs" → "PRDs"
- Line 174: "Generate spec" → "Generate PRD"
- Line 180: "Keep spec focused" → "Keep PRD focused"
```
This block is not supported on your current device yet.
```

Now fix "Generate spec" in anti-patterns.
```
This block is not supported on your current device yet.
```

Now fix "Keep spec focused"
```
This block is not supported on your current device yet.
```

Now let me update the training guide and PDF to reflect PRD terminology. First let me check the guide.Now let me update the PDF generator and the training guide:
```
This block is not supported on your current device yet.
```

Now let me search for more spec references in the PDF generator and update them to PRD.
```
This block is not supported on your current device yet.
```

I need to update multiple references. Let me do this systematically. The key changes are:
1. Line 2: docstring - update
2. Line 201: "PRD-style specification" → "PRD" 
3. Line 209-211: Leave as is - describes the problem
4. Line 218: "specs from scratch" → "PRDs from scratch"
5. Line 226: "Builds the spec" → "Builds the PRD"
6. Line 331: "Generating spec" → "Generating PRD"
7. Line 337: "specs/payment-processing/spec.md" → "prds/payment-processing/prd.md"
8. Line 373: "Generate final spec" → "Generate final PRD"
9. Line 656: "spec-interview" → "prd-interview"
10. Line 660-688: Update the spec_cmd content
11. Line 701-702: Update commands
12. Line 753: "spec.md" → "prd.md"
13. Line 797: "spec generation" → "PRD generation"

Let me make these updates.
```
This block is not supported on your current device yet.
```

Continue updating other references.
```
This block is not supported on your current device yet.
```

Continue...
```
This block is not supported on your current device yet.
```

Continue...
```
This block is not supported on your current device yet.
```

Continue...
```
This block is not supported on your current device yet.
```

Continue...
```
This block is not supported on your current device yet.
```

Continue...
```
This block is not supported on your current device yet.
```

Now update the spec-interview command example in Module 4.
```
This block is not supported on your current device yet.
```

Now update the quick reference commands table.
```
This block is not supported on your current device yet.
```

Now update the flow table.
```
This block is not supported on your current device yet.
```

Now update the best practices.
```
This block is not supported on your current device yet.
```

Now also update the "Spec Interview Flow" section header.
```
This block is not supported on your current device yet.
```

Now let me also update the Module 1 header workflow diagram to show PRD instead of SPEC.
```
This block is not supported on your current device yet.
```

Now regenerate the PDF.
```
This block is not supported on your current device yet.
```

Great! Now let me also update the interactive-spec-generation-guide.md file to use PRD terminology.
```
This block is not supported on your current device yet.
```

Now update the content of the guide.
```
This block is not supported on your current device yet.
```

Let me also update the specify/clarify.md command to use PRD terminology where appropriate.
```
This block is not supported on your current device yet.
```

This file is fine - it's about clarifying existing specs/PRDs, so it can work with either. I'll update a few references to be more generic.
```
This block is not supported on your current device yet.
```

Let me also update the line about generating/updating spec.
```
This block is not supported on your current device yet.
```

Now let me present all the updated files.
```
This block is not supported on your current device yet.
```

Good. Let me summarize the changes for the user.Done! All files updated to use **PRD** terminology. Here's the corrected flow:

---

## The Corrected Flow

```
/prd-interview → PRD (What/Why) → /plan → Technical Spec (How) → /tasks → Implementation
```

**Key changes made:**

| Before | After |
|--------|-------|
| `/spec-interview` | `/prd-interview` |
| `specs/[name]/spec.md` | `prds/[name]/prd.md` |
| `spec-architect` subagent | `prd-architect` subagent |
| "Generate final spec" | "Generate final PRD" |

**Files updated:**

1. **auggie-cli-training-guide.pdf** — Full PDF with PRD terminology and dual research (codebase + web)
2. **prd-interview.md** — Main command for interactive PRD generation
3. **prd-architect.md** — Specialized subagent for PRD building
4. **clarify.md** — Updated to reference PRD/spec generically
5. **interactive-prd-generation-guide.md** — Comprehensive documentation

The interview mode now correctly generates a **PRD** (what users need and why), which then feeds into `/plan` for the **Technical Spec** (how to build it).\n
## human\n\nresearch for other similar custom commands and give a report\n
## assistant\n\nThe user wants me to research other AI coding tools that have similar custom command systems to what we've built for Auggie. Let me search for custom commands, slash commands, and similar features in AI coding assistants.
```
This block is not supported on your current device yet.
```

Good search results. Let me search for more specific information about custom commands in different AI coding tools.
```
This block is not supported on your current device yet.
```

Good info on Cursor. Let me search for more tools like Claude Code, Cline, Continue, and GitHub Copilot custom commands.
```
This block is not supported on your current device yet.
```

Good info on Claude Code. Let me search for Cline and Continue.dev custom commands as well.
```
This block is not supported on your current device yet.
```\n
## assistant\n\nThe user wants me to research similar custom commands/workflows in the AI coding tool space - things like spec generation, PRD generation, interview modes, etc. Let me search for what other tools are doing in this space.
```
This block is not supported on your current device yet.
```

This is great! I found a very relevant project - cc-sdd which is specifically about spec-driven development. Let me search for more details on this and other similar command collections.
```
This block is not supported on your current device yet.
```

This is very relevant - cc-sdd is a spec-driven development tool that works across multiple AI coding tools. Let me search for more similar command collections and repositories.
```
This block is not supported on your current device yet.
```

I've gathered a lot of research. Now let me search for specific popular command collections that I can analyze in detail.
```
This block is not supported on your current device yet.
```

I have gathered a lot of research on custom commands across different AI coding tools. Let me now compile this into a comprehensive report for the user.Now let me compile a comprehensive report based on this research.
```
This block is not supported on your current device yet.
```

Let me present this file to the user and provide a brief summary.
```
This block is not supported on your current device yet.
```

I've provided a comprehensive research report. Let me summarize the key findings for the user in a conversational way.Here's the research report. The key findings:

**Most Similar Project:** **cc-sdd** (2.2k ⭐) is a spec-driven development tool that enforces a structured requirements→design→tasks workflow across Claude Code, Cursor, Gemini CLI, Codex, GitHub Copilot, and Windsurf. Its workflow is `/kiro:spec-init` → `/kiro:spec-requirements` → `/kiro:spec-design` → `/kiro:spec-tasks` → implementation.

**Key Difference:** cc-sdd is *document-focused* (generates specs directly from prompts), while your `/prd-interview` is *conversation-focused* (Socratic dialogue → adaptive questions → PRD). Your approach also has:
- Dual-context research (codebase + web) that cc-sdd doesn't do
- Confidence tracking before generation
- The Three Question Rule to minimize user burden

**Popular Command Categories Across Tools:**
- Code review, security audit, accessibility audit, database migration, debug issue, generate API docs, setup new feature, visualize diagrams
- Most commands are **task-execution** oriented, not **interview/discovery** oriented

**Cross-Platform Tools:**
- **ai-rulez** supports 18 preset generators (Claude, Cursor, Windsurf, Copilot, Gemini, Cline, etc.) with a commands system that lets you define slash commands once and use them across tools
- **PRPM** has 7,000+ prompt packages with version control and cross-platform support

**Your Unique Position:** The PRD interview approach fills a gap—capturing *what* users want through conversation before AI starts coding, which reduces rework and hallucinations. The ecosystem has lots of "do this task" commands but few "help me figure out what to build" commands.\n
## human\n\nprd to tasks sound good. we should also utilise subagents to run work in parralel. make the new custom commands\n
## assistant\n\nThe user wants me to create new custom commands that:
1. `/prd-to-tasks` - Convert a PRD directly to implementation tasks (skipping or combining the technical spec step)
2. Utilize subagents to run work in parallel

Let me think about the flow:
- `/prd-interview` generates a PRD (what/why)
- Now we need commands that take the PRD and break it down into tasks
- We should use subagents for parallel work - e.g., one subagent for backend tasks, one for frontend, one for testing, etc.

Looking at cc-sdd's approach, they have:
- spec-requirements → spec-design → spec-tasks

But the user wants to go directly from PRD to tasks, which makes sense for a more streamlined flow. We could have:
1. `/prd-to-plan` - Technical planning/architecture from PRD
2. `/plan-to-tasks` - Break plan into implementation tasks

Or simpler:
1. `/prd-to-tasks` - Go directly from PRD to implementation tasks

The user said "prd to tasks sound good" so let's create:
1. `/prd-to-tasks` - Main command that orchestrates the breakdown
2. Subagents for parallel work:
   - `task-decomposer` - Breaks down into parallel workstreams
   - `backend-planner` - Plans backend tasks
   - `frontend-planner` - Plans frontend tasks  
   - `test-planner` - Plans testing tasks
   - `infra-planner` - Plans infrastructure/DevOps tasks

Actually, let me think about this more carefully. The user wants to utilize subagents for parallel work. In Augment Code (Auggie), subagents can be invoked to work in isolated context windows.

A good pattern would be:
1. Main command `/prd-to-tasks` that:
   - Reads the PRD
   - Identifies workstreams (backend, frontend, data, infra, etc.)
   - Spawns subagents in parallel for each workstream
   - Aggregates results into a unified task list with dependencies

The `/prd-to-tasks` command should act as the main orchestrator, identifying key workstreams from the PRD and then dispatching specialized subagents—like `backend-tasks`, `frontend-tasks`, `data-tasks`, and `test-tasks`—to work concurrently on their respective domains before consolidating everything into a cohesive task breakdown with clear dependencies.Let me create a comprehensive task generation system with parallel subagents.
```
This block is not supported on your current device yet.
```

Now let me create the subagents. I'll create:
1. backend-tasks - Backend implementation tasks
2. frontend-tasks - Frontend implementation tasks
3. data-tasks - Database/data layer tasks
4. infra-tasks - Infrastructure tasks
5. test-tasks - Testing tasks
6. task-integrator - Combines and sequences all tasks
```
This block is not supported on your current device yet.
```

Now let me create the frontend-tasks subagent.
```
This block is not supported on your current device yet.
```

Now let me create the data-tasks subagent.
```
This block is not supported on your current device yet.
```

Now let me create the test-tasks subagent.
```
This block is not supported on your current device yet.
```

Now let me create the infra-tasks subagent.
```
This block is not supported on your current device yet.
```

Now let me create the task-integrator subagent that combines all the task lists and resolves dependencies.
```
This block is not supported on your current device yet.
```

Now let me also create a shorthand command for running implementation on a specific task, and update the file structure view. Let me also add a simpler `/implement` command that can pick up tasks and start working on them.Now let me add an `/implement` command that picks up tasks and executes them:
```
This block is not supported on your current device yet.
```

Now let me check the full directory structure and create a summary view of all the commands we've created.
```
This block is not supported on your current device yet.
```

Now let me create a README for the command suite that explains the full workflow.
```
This block is not supported on your current device yet.
```

Let me present all the files to the user.
```
This block is not supported on your current device yet.
```

I've created the full command suite. Let me give a summary of what was created.Done! Here's the complete PRD-driven development system with parallel subagents:

## New Commands Created

### Main Commands
| Command | Purpose |
|---------|---------|
| `/prd-to-tasks` | Orchestrates parallel subagents to convert PRD → implementation tasks |
| `/implement` | Executes tasks wave by wave with progress tracking |

### Parallel Subagents (6 total)
| Subagent | Focus | Runs In Parallel |
|----------|-------|------------------|
| `@backend-tasks` | API, services, business logic | ✅ |
| `@frontend-tasks` | UI components, pages, state | ✅ |
| `@data-tasks` | Database schema, migrations | ✅ |
| `@test-tasks` | Testing strategy, test cases | ✅ |
| `@infra-tasks` | CI/CD, deployment, monitoring | ✅ |
| `@task-integrator` | Merges all tasks, resolves dependencies | After parallel phase |

## The Full Workflow

```
/prd-interview [feature]     # Interactive PRD generation
        ↓
    prds/feature/prd.md      # PRD (What & Why)
        ↓
/prd-to-tasks                # Spawns 5 subagents IN PARALLEL
        ↓
   ┌────┼────┬────┬────┐
   │    │    │    │    │
 backend frontend data test infra
   │    │    │    │    │
   └────┴────┴────┴────┘
        ↓
  @task-integrator           # Merge, sequence, dependency graph
        ↓
    prds/feature/tasks.md    # Tasks organized in waves
        ↓
/implement                   # Execute wave by wave
        ↓
      CODE
```

## Key Features

**Parallel Execution:** 5 specialized subagents analyze the PRD simultaneously, each focusing on their domain.

**Wave-Based Tasks:** Tasks are organized into execution waves with clear dependencies:
- Wave 0: Prerequisites (env vars, configs)
- Wave 1: Foundation (schema, component structure)  
- Wave 2: Core implementation
- Wave 3: Integration
- Wave 4: Testing & verification

**Dependency Tracking:** The `@task-integrator` builds a dependency graph and identifies the critical path.

**Progress Tracking:** `/implement --status` shows completion status across all waves.

The complete file structure is in the README. Copy the `auggie-commands/` folder to your `.augment/` directory to use.\n