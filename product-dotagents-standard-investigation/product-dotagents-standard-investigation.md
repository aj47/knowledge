---
kind: note
id: product-dotagents-standard-investigation
title: .agents Standard Investigation — SpeakMCP Integration Analysis
context: search-only
updatedAt: 1771536037962
tags: product
createdAt: 1771536037957
summary: **Date:** February 2026 **Purpose:** Investigate the `.agents` directory standard and determine how SpeakMCP can adopt it. --- - **Repo:** `openai/agents.md` (17K+ stars, MIT license)
references: product/dotagents-standard-investigation.md
---

# .agents Standard Investigation — SpeakMCP Integration Analysis

**Date:** February 2026
**Purpose:** Investigate the `.agents` directory standard and determine how SpeakMCP can adopt it.

---

## The Landscape: Who Does What

### AGENTS.md (OpenAI / Linux Foundation)
- **Repo:** `openai/agents.md` (17K+ stars, MIT license)
- **What it is:** A single markdown file at repo root that serves as "README for machines"
- **Adopted by:** Codex, Jules (Google), Aider, Cursor, Factory, UiPath, 20K+ GitHub projects
- **Format:** Plain markdown, no required fields, just structured headings
- **Monorepo:** Nested AGENTS.md files; agents read the closest one in the directory tree
- **Discovery:** Walks from current dir up to project root, concatenating files

### Claude Code (.claude/ directory)
- **Structure:**
  ```
  .claude/
  ├── commands/       # Slash commands as .md files
  ├── skills/         # SKILL.md files in subdirs
  ├── agents/         # Agent definitions as .md files
  ├── settings.json   # Claude Code settings
  └── CLAUDE.md       # Always-loaded project context
  ```
- **Global:** `~/.claude/` for user-wide settings
- **Enterprise:** `/etc/claude-code/CLAUDE.md`
- **Skills:** YAML frontmatter (`name`, `description`) + markdown body
- **Commands:** Markdown files, support `$ARGUMENTS`, `$1/$2` placeholders
- **Plugins:** `.claude-plugin/plugin.json` manifest bundles commands, agents, skills, hooks

### OpenCode (.opencode/ directory)
- **Structure:**
  ```
  .opencode/
  ├── agents/         # Primary agent definitions
  ├── subagents/      # Specialized sub-agents (OpenCode-specific naming)
  ├── commands/       # Custom commands as .md files
  ├── skills/         # SKILL.md files (same spec as Claude Code)
  ├── plugins/        # Plugin extensions
  ├── tools/          # Custom tool definitions
  ├── modes/          # Agent modes
  └── themes/         # UI themes
  ```
- **Global:** `~/.config/opencode/` for user-wide config
- **Config:** `opencode.json` with schema validation
- **Reads AGENTS.md:** Yes, uses it as project rules (also reads CLAUDE.md as fallback)
- **Agent types:** Primary (Build, Plan) + Subagents (General, Explore, custom)

### The Emerging `.agents/` Standard
- **Convention converging across tools:**
  ```
  .agents/
  ├── skills/         # SKILL.md files (Agent Skills open standard)
  ├── commands/       # Reusable prompt templates
  └── AGENTS.md       # Project-level agent instructions
  ```
- **Global equivalent:** `~/.agents/` at user home directory
- **Skills spec:** Managed by Anthropic/Vercel (`agentskills.io`), adopted by 25+ tools
- **Key:** The `.agents/` folder is the tool-agnostic version of `.claude/` and `.opencode/`

---

## Agent Skills Open Standard (agentskills.io)

### SKILL.md Format
```yaml
---
name: skill-name          # Required, max 64 chars, kebab-case
description: What it does  # Required, max 1024 chars
license: MIT              # Optional
compatibility: claude-code, opencode  # Optional
metadata:                 # Optional arbitrary key-value
  author: org-name
  version: "1.0"
---

# Skill Name

Markdown content with instructions, examples, references...
```

### Directory Structure
```
skill-name/
├── SKILL.md          # Required
├── scripts/          # Optional helper scripts
├── references/       # Optional reference docs
└── assets/           # Optional templates, examples
```

### Discovery Paths (what tools search)
- **Project-local:** `.agents/skills/*/SKILL.md`, `.claude/skills/*/SKILL.md`, `.opencode/skills/*/SKILL.md`
- **Global:** `~/.agents/skills/*/SKILL.md`, `~/.claude/skills/*/SKILL.md`, `~/.config/opencode/skills/*/SKILL.md`
- **Walk-up:** From current dir to git root, loading all matching skills along the path

### Constraints
- Name: lowercase alphanumeric + single hyphens, no leading/trailing hyphens
- Name must match containing directory name
- Max file size: 10MB (DoS prevention)
- Unknown frontmatter fields ignored (forward-compatible)

---

## How This Maps to SpeakMCP

### Current SpeakMCP Concepts → .agents Equivalents

| SpeakMCP Current | .agents Standard | Notes |
|---|---|---|
| **Skills** (SKILL.md in skills dir) | `.agents/skills/*/SKILL.md` | ✅ Already identical format! |
| **Predefined Prompts** | `.agents/commands/*.md` | Commands are user-invokable prompt templates |
| **Profile Guidelines** | `.agents/AGENTS.md` | Injected as additional context/instructions |
| **Sub-agents** (ACP agents) | `.agents/agents/*.md` | Agent definitions with model, tools, permissions |

### Proposed Integration Plan

#### 1. AGENTS.md → Additional Guidelines Injection
- **What:** Look for `AGENTS.md` at `~/.agents/AGENTS.md` and any project-level `AGENTS.md`
- **How:** Concatenate content and inject into the system prompt alongside profile guidelines
- **Behavior:** Merge, don't replace. Profile guidelines + AGENTS.md content = combined context
- **Precedence:** Profile guidelines override AGENTS.md (SpeakMCP-specific > generic)

#### 2. Skills Discovery from .agents/
- **What:** Scan `~/.agents/skills/*/SKILL.md` in addition to current skills directory
- **How:** Same SKILL.md parsing we already do — just add the `.agents/` path to the search
- **Merge:** Skills from `~/.agents/skills/` appear alongside SpeakMCP-native skills
- **Dedup:** If same skill name exists in both locations, SpeakMCP-native wins

#### 3. Commands → Predefined Prompts
- **What:** Read `~/.agents/commands/*.md` as additional predefined prompts
- **How:** Parse markdown files, use filename as command name, content as prompt template
- **Merge:** Combine with existing predefined prompts; SpeakMCP-native prompts take priority
- **Placeholders:** Support `$ARGUMENTS` and `$1/$2` substitution patterns from the standard

#### 4. Sub-agent Definitions from .agents/agents/
- **What:** Read `~/.agents/agents/*.md` for agent definitions
- **How:** Parse YAML frontmatter for: name, description, model, tools/permissions, mode (primary/subagent)
- **Map to:** SpeakMCP's existing agent persona system
- **Challenge:** SpeakMCP agents are ACP-based; .agents standard agents are prompt-defined. Need adapter layer.

### Discovery Locations (Priority Order)
```
# Global (user-wide, applies to all SpeakMCP sessions)
~/.agents/
├── AGENTS.md           → injected as additional guidelines
├── skills/*/SKILL.md   → loaded as available skills  
├── commands/*.md        → loaded as predefined prompts
└── agents/*.md          → loaded as agent personas

# Also check Claude Code locations for compatibility
~/.claude/
├── CLAUDE.md            → treat same as AGENTS.md
├── skills/*/SKILL.md   → load as skills
└── commands/*.md        → load as commands
```

---

## Key Design Decisions

### 1. Read-Only Integration (Phase 1)
SpeakMCP should READ from `.agents/` but not WRITE to it. Keep SpeakMCP's own storage as the primary. This way users who also use Claude Code, OpenCode, Cursor etc. get their skills/commands automatically in SpeakMCP too.

### 2. No Config File Required
Unlike OpenCode's `opencode.json`, we don't need a config file. Just scan the directories. The AGENTS.md and SKILL.md files are self-describing.

### 3. Compatibility Matrix
The `.agents/` standard is the most tool-agnostic path. But we should also check `.claude/` for users coming from Claude Code. The precedence:
1. SpeakMCP native (highest priority)
2. `~/.agents/` (universal standard)
3. `~/.claude/` (Claude Code compat, optional)

### 4. Project-Level vs Global
- **Global** (`~/.agents/`): Always loaded, like current SpeakMCP profile
- **Project** (`.agents/` in a repo): Only loaded when working in that project context
- SpeakMCP doesn't have a strong "project" concept yet, so start with global only

---

## What OpenCode Does Best (Worth Copying)

1. **`/init` command**: Scans project and auto-generates AGENTS.md — we could do this for skills
2. **Agent permission model**: Build (full access) vs Plan (read-only) — maps to our agent personas
3. **Config merging**: Non-conflicting settings merge; only conflicts override — good pattern for combining sources
4. **Schema validation**: `opencode.json` has a JSON schema — we could validate SKILL.md frontmatter

## What Claude Code Does Best (Worth Copying)

1. **Hooks**: Deterministic enforcement where AGENTS.md is just suggestions — interesting for tool approval
2. **Plugin system**: Bundled distribution of commands + skills + agents — could be a future SpeakMCP feature
3. **Enterprise tier**: `/etc/claude-code/CLAUDE.md` for org-wide rules — relevant for teams

---

## Implementation Priority for SpeakMCP

### Phase 1 (Quick Win)
- Scan `~/.agents/skills/*/SKILL.md` and load them as additional skills
- Scan `~/.agents/AGENTS.md` and inject as additional guidelines

### Phase 2 (Medium Effort)  
- Scan `~/.agents/commands/*.md` and merge with predefined prompts
- Add `.claude/` fallback scanning

### Phase 3 (Larger Effort)
- Agent definitions from `.agents/agents/*.md`
- Project-level `.agents/` support (requires project context awareness)
- `/init` style auto-generation of AGENTS.md from project scanning

---

### DotAgents hub implication
- Treat `.agents/` as the canonical source of truth for dotagents packs.
- Generate Claude-compatible artifacts from that pack format instead of maintaining separate hand-authored plugin files.
- The practical export target is a `.claude-plugin/plugin.json` bundle plus `commands/`, `skills/`, `hooks/`, and any MCP config Claude expects.
- This makes the hub a pack authoring + validation layer first, with Claude compatibility as an export path.

## TL;DR

The `.agents/` directory standard is converging across the industry. SpeakMCP's existing concepts map almost 1:1:
- **Skills = Skills** (same SKILL.md format already!)
- **AGENTS.md = Profile Guidelines** (inject as additional context)
- **Commands = Predefined Prompts** (markdown templates)
- **Agents = Agent Personas** (needs adapter but conceptually same)

The biggest win is that by scanning `~/.agents/`, SpeakMCP users automatically get access to skills and commands they've set up for Claude Code, OpenCode, Cursor, or any other tool. Zero additional configuration needed.
