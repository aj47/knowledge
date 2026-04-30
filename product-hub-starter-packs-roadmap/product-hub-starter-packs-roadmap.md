---
kind: note
id: product-hub-starter-packs-roadmap
title: .agents Hub — Starter Packs Roadmap
context: search-only
updatedAt: 1772913648373
tags: product
createdAt: 1772913648369
summary: **Created:** 2026-03-07 **Status:** Active planning --- The hub at `hub.dotagentsprotocol.com` (repo: `aj47/dotagents-hub`) currently has 5 starter packs, all attributed to "DotAgents Team". It's j...
references: product/hub-starter-packs-roadmap.md
---

# .agents Hub — Starter Packs Roadmap
**Created:** 2026-03-07  
**Status:** Active planning  

---

## Context

The hub at `hub.dotagentsprotocol.com` (repo: `aj47/dotagents-hub`) currently has 5 starter packs, all attributed to "DotAgents Team". It's just AJ (TechFriend AJ). Community can submit bundles via PR.

---

## Hub pack format direction

- Treat each starter pack as a canonical `.agents` bundle first.
- Add a Claude export path that emits `.claude-plugin/plugin.json` plus the expected `commands/`, `skills/`, and `hooks/` layout.
- Keep hub listings and install flows aligned to that shared source-of-truth format so the same pack can target DotAgents and Claude-compatible consumers.

## Immediate: Author Rebrand

Update all 5 existing bundles + `catalog.json` from:
```json
{ "displayName": "DotAgents Team", "handle": "@dotagents" }
```
to:
```json
{ "displayName": "TechFriend AJ", "handle": "@techfrenaj", "url": "https://dotagentsprotocol.com" }
```

Files: `bundles/*.dotagents` (5 files) + `catalog.json`

---

## New Starter Packs — Priority Order

| # | ID | Audience | Key Components |
|---|----|----------|---------------|
| 1 | `life-os` | Everyone | Health/habit agent, journal agent, morning checkin + weekly review tasks |
| 2 | `ai-engineer` | Power users, MCP builders | MCP builder agent, prompt tester agent, skill scaffolder, skill.md template |
| 3 | `community-manager` | Discord/Slack/Reddit builders | Community agent, content scheduler, weekly health report task |
| 4 | `finance-tracker` | Broad | Budget agent, spending review agent, weekly money briefing task |
| 5 | `job-seeker` | Broad | Resume tailor agent, interview prep agent, daily application log task |
| 6 | `techfrenaj-daily-driver` | Power users / "show your setup" | AJ's actual exported config — export from app first |

### Design Principles
- Starter packs: broad enough to be useful OOB, opinionated enough to be interesting
- Niche packs: deeply opinionated, rich system prompts, specific use case
- All `repeatTasks`: `"enabled": false` by default
- All `memories`: empty (user fills in)
- All packs: include at least one TODO-fillable context skill
- Author: TechFriend AJ on all official packs

---

## Bundle Load/Unload Safety (App Feature)

**Problem:** Importing a bundle today can overwrite your existing setup with no recovery path.

**Solution (filed as dotagents-mono issue #57):**

1. **Pre-import snapshot** — auto-backup to `~/.agents/backups/backup-{timestamp}.dotagents` before every import. Keep last 10.
2. **Conflict preview UI** — show what will be added/modified/skipped before committing. Default: skip conflicts.
3. **Cherry-pick import** — toggle individual components (agents, MCPs, skills, tasks) on/off before importing.
4. **Bundle sandbox mode** (stretch) — named profile slots, switch between bundles without merging into main config.

---

## Hub Website — Bundle Inspector (App Feature)

**Problem:** `hub.dotagentsprotocol.com` shows metadata only. Can't see system prompts, skill instructions, or task prompts before installing.

**Solution (filed as dotagents-mono issue #56):**

- "Inspect" button on each bundle card
- Client-side fetch of `.dotagents` JSON → render modal with collapsible sections:
  - 🤖 Agent Profiles (name + system prompt + guidelines)
  - 🔧 MCP Servers (name + command)
  - 🧠 Skills (name + full instructions as markdown)
  - ⏰ Repeat Tasks (name + prompt + interval)
- Pure frontend change to `website/index.html` — no backend needed
- Install button in modal footer

---

## Community Contribution Process

PR checklist for community bundles:
- [ ] No secrets/API keys (app strips on export)
- [ ] All `repeatTasks` have `"enabled": false`
- [ ] `memories` empty or anonymised
- [ ] `catalog.json` entry complete (summary, tags, componentCounts)
- [ ] Bundle filename matches catalog `id`
- [ ] Author `displayName` + `handle` filled in

→ Need to add `CONTRIBUTING.md` to `aj47/dotagents-hub`

---

## GitHub Issues Filed

| Repo | Issue | Title |
|------|-------|-------|
| `aj47/dotagents-hub` | #1 | Roadmap: New starter packs + author rebrand + community submission process |
| `aj47/dotagents-mono` | #56 | Feature: Hub website — bundle inspector modal |
| `aj47/dotagents-mono` | #57 | Feature: Bundle load/unload safety — snapshot, conflict preview, cherry-pick import |

---

## Checklist

### Immediate
- [ ] Rebrand all 5 existing bundles to TechFriend AJ
- [ ] Add `CONTRIBUTING.md` to dotagents-hub

### New Packs (in order)
- [ ] `life-os`
- [ ] `ai-engineer`
- [ ] `community-manager`
- [ ] `finance-tracker`
- [ ] `job-seeker`
- [ ] `techfrenaj-daily-driver` (export from app first)

### App Features (dotagents-mono)
- [ ] Bundle inspector modal — issue #56
- [ ] Bundle load/unload safety — issue #57
