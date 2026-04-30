---
kind: note
id: archive-old-brand-techfriendbot-build-plan
title: TechFriendBot — Build Plan (Rebrand from SpeakMCP)
context: search-only
updatedAt: 1771714921268
tags: archive, old_brand
createdAt: 1771714921266
summary: Date: 2026-02-21 Create a new GitHub repo `aj47/techfriendbot`, copy SpeakMCP codebase into it, and rebrand/refactor to TechFriendBot. --- - [ ] Create new GitHub repo: `aj47/techfriendbot`
references: archive/old-brand/techfriendbot-build-plan.md
---

# TechFriendBot — Build Plan (Rebrand from SpeakMCP)
Date: 2026-02-21

## Goal
Create a new GitHub repo `aj47/techfriendbot`, copy SpeakMCP codebase into it, and rebrand/refactor to TechFriendBot.

---

## Phase 1 — New Repo & Copy (1 day)
- [ ] Create new GitHub repo: `aj47/techfriendbot`
- [ ] Copy SpeakMCP codebase into it (strip git history or fork cleanly)
- [ ] Update root package.json: name `speakmcp-monorepo` → `techfriendbot-monorepo`
- [ ] Update apps/desktop/package.json: name, productName, appId
- [ ] Update apps/mobile/package.json: name, bundle identifier
- [ ] Update packages/shared/package.json

---

## Phase 2 — String/Brand Replacement (1 day)
Global find & replace across codebase:
- `SpeakMCP` → `TechFriendBot`
- `speakmcp` → `techfriendbot`
- `@speakmcp/` → `@techfriendbot/`
- `speak-mcp` → `tech-friend-bot`
- Update README.md — full rewrite with new pitch
- Update DEVELOPMENT.md references
- Update LICENSE author line
- Update Discord link if different
- Update all social/website references (techfren.net)

---

## Phase 3 — Identity Refactor (2-3 days)
- [ ] New app name in Electron: `TechFriendBot`
- [ ] New app icon / logo (keep S-shape if possible per brand-naming-research.md note)
- [ ] New color scheme / theme if needed
- [ ] Update system prompt references from "SpeakMCP" to "TechFriendBot"
- [ ] Update MCP server tool names: `speakmcp-settings` → `techfriendbot-settings` etc.
- [ ] Update built-in tool descriptions to reflect new brand voice
- [ ] Update electron-builder config: appId, productName, copyright
- [ ] Update auto-updater feed URL to point to new repo releases

---

## Phase 4 — Landing Page / README (1 day)
- [ ] Rewrite README with new pitch (use techfriendbot-pitch.md as source)
- [ ] Hero line: "Your personal AI team. Just talk."
- [ ] Competitor positioning vs OpenClaw baked in
- [ ] New feature table in new brand voice
- [ ] Update GitHub repo description and topics

---

## Phase 5 — First Release (1 day)
- [ ] Merge open SpeakMCP PRs (#1100, #1096, #1092, #1081, #1076) into new repo first
- [ ] Cut v1.0.0 release of TechFriendBot
- [ ] Post on X announcing the rebrand
- [ ] Post on Discord

---

## Key Files to Touch
```
package.json (root)
apps/desktop/package.json
apps/desktop/electron-builder.yml (or equivalent)
apps/desktop/src/main/ (system prompts, tool names)
apps/mobile/package.json
apps/mobile/app.json
packages/shared/package.json
README.md
DEVELOPMENT.md
resources/ (icons, assets)
```

---

## Risks
- MCP tool names changing (`speakmcp-settings` → `techfriendbot-settings`) will break existing user configs — need migration guide or backward compat alias
- Auto-updater URL needs to change — existing SpeakMCP installs won't auto-update to TechFriendBot
- GitHub stars/community stays on old repo — consider keeping SpeakMCP repo with a redirect notice

---

## Decision: Fork vs Fresh Repo
Recommendation: Fresh repo, copy files manually (not a GitHub fork)
- Cleaner git history starting point
- No fork badge on GitHub (looks more legit)
- Can still credit SpeakMCP in README as the origin
