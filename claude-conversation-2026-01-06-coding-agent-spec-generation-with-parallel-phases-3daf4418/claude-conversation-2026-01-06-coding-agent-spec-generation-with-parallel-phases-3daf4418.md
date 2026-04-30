---
kind: note
id: claude-conversation-2026-01-06-coding-agent-spec-generation-with-parallel-phases-3daf4418
updatedAt: 1767723286423
createdAt: 1767723230935
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 3daf4418-383b-4890-aa96-7deebb5550b7
created_at: 2026-01-06T18:13:50.935488Z
updated_at: 2026-01-06T18:14:46.423908Z
title: "Coding agent spec generation with parallel phases"
---

# Coding agent spec generation with parallel phases

## Metadata

- Claude conversation UUID: `3daf4418-383b-4890-aa96-7deebb5550b7`
- Created: `2026-01-06T18:13:50.935488Z`
- Updated: `2026-01-06T18:14:46.423908Z`
- Message count: 4
- Transcript chars extracted: 4419

## Claude summary

**Conversation Overview**

The user requested help creating a prompt for their coding agent that would transform initial requirements into a structured spec.md file. They specifically wanted the prompt to generate specifications that ask clarifying questions about vague requirements and organize work into dependency-based phases so multiple subagents could work in parallel. Claude initially provided a comprehensive prompt that included role-setting, a three-phase process for the agent (clarification, dependency analysis, spec generation), and a detailed spec.md template with sections for overview, requirements, architecture decisions, phased development workstreams, interface contracts, and out-of-scope items. The user then requested a shorter version, clarifying that the output spec should be phased rather than the input prompt itself, and that role-setting wasn't necessary. Claude responded with a significantly condensed version that maintained the core functionality while removing the verbose structure and role definitions. The final prompt focused on asking clarifying questions first, then generating a phased spec with clear workstream divisions based on dependencies, interface contracts for parallel compatibility, and explicit scope boundaries.

## Quick excerpt

The user wants me to create a prompt they can use with their coding agent. The prompt should: 1. Take initial requirements and create a spec.md 2. Ask follow-up questions to clarify vagueness 3. Make the spec phased based on dependencies so subagents can work in parallel This is a meta-prompt - a prompt to generate specifications. Let me craft something comprehensive that covers these needs.Here's a prompt you can use with your coding agent: --- ## Spec Generation Agent Prompt ```markdown You ar

## Transcript

## human\n\ngenerate me a prompt to get my coding agent to create a spec.md based on some initial requirements, also ask me follow up questions to clarify vagueness and then also make it phased based on dependencies so that subagents can work on it in parralel\n
## assistant\n\nThe user wants me to create a prompt they can use with their coding agent. The prompt should:
1. Take initial requirements and create a spec.md
2. Ask follow-up questions to clarify vagueness
3. Make the spec phased based on dependencies so subagents can work in parallel

This is a meta-prompt - a prompt to generate specifications. Let me craft something comprehensive that covers these needs.Here's a prompt you can use with your coding agent:

---

## Spec Generation Agent Prompt

```markdown
You are a specification architect. Your job is to transform initial requirements into a structured, actionable spec.md that enables parallel development by multiple agents.

## Process

### Phase 1: Clarification
Before writing any spec, analyze the requirements for:
- Ambiguous terms or undefined scope
- Missing acceptance criteria
- Unclear dependencies or integrations
- Unstated assumptions about tech stack, environment, or constraints
- Edge cases not addressed

Ask 3-7 focused clarifying questions. Group them by category (scope, technical, UX, constraints). Wait for answers before proceeding.

### Phase 2: Dependency Analysis
Map out all components and identify:
- Which pieces have zero dependencies (can start immediately)
- Which pieces depend on others (must wait)
- Which pieces can be developed with mocked interfaces

### Phase 3: Spec Generation
Create `spec.md` with this structure:

```
# Project: [Name]

## Overview
[2-3 sentence summary]

## Requirements Summary
[Bullet list of confirmed requirements post-clarification]

## Architecture Decision Records
[Key technical decisions and rationale]

## Development Phases

### Phase 0: Foundation (No Dependencies)
[Components that can start immediately - interfaces, types, schemas, config]

### Phase 1: Core (Parallel Workstreams)
#### Workstream A: [Name]
- Scope:
- Inputs/Outputs:
- Acceptance Criteria:
- Can be mocked: [yes/no]

#### Workstream B: [Name]
...

### Phase 2: Integration (Depends on Phase 1)
[Components that wire together Phase 1 outputs]

### Phase 3: Polish (Depends on Phase 2)
[Testing, error handling, edge cases, optimization]

## Interface Contracts
[Define APIs/interfaces between workstreams so parallel work stays compatible]

## Out of Scope
[Explicitly list what this spec does NOT cover]
```

## Rules
- Each workstream must be completable by an agent with no knowledge of other workstreams
- Interface contracts must be detailed enough that workstreams can develop against mocks
- Acceptance criteria must be testable
- Flag any requirements that need human decision-making

---

## Initial Requirements:
[PASTE YOUR REQUIREMENTS HERE]
```

---

Want me to tweak anything? For instance:
- Should it include estimated complexity/time per phase?
- Do you want it to output a dependency graph (mermaid diagram)?
- Should it generate stub files or just the spec document?
- Any specific format for acceptance criteria (Given/When/Then, checkboxes, etc.)?\n
## human\n\nshorter. the outcome spec should be phased, not the input prompt. we dont need to set role/profile\n
## assistant\n\nThe user wants a shorter prompt. They're clarifying that:
1. The spec.md output should be phased, not the prompt itself
2. Don't need the "You are a specification architect" role-setting
3. Keep it concise

Let me trim this down significantly.Here's a tighter version:

---

```markdown
Given the requirements below, create a spec.md for parallel agent development.

Before writing the spec:
1. Ask clarifying questions about any vague scope, undefined terms, missing constraints, or unstated assumptions
2. Wait for my answers before proceeding

The spec.md should include:
- Overview and confirmed requirements
- Interface contracts (so parallel work stays compatible)
- Phased workstreams based on dependencies:
  - Phase 0: No dependencies (types, schemas, interfaces)
  - Phase 1+: Parallel workstreams with clear scope, inputs/outputs, and acceptance criteria
  - Final phase: Integration
- Out of scope section

Each workstream must be completable independently using mocks where needed.

## Requirements:
[PASTE HERE]
```

---

Want me to add anything like mermaid dependency graphs or stub file generation?\n