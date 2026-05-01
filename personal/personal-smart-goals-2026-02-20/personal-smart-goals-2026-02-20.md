---
kind: note
id: personal-smart-goals-2026-02-20
title: SMART Goals — AJ Joobandi
context: search-only
updatedAt: 1772511016072
tags: personal
createdAt: 1771622048849
summary: **Set:** 2026-02-20 --- **Specific:** Review and merge PRs #1092 (settings consolidation), #1081 (agent delegation prompt), #1076 (mobile rapid fire UX), and #1063 (auto-updater) into main.
references: personal/smart-goals-2026-02-20.md
---

# SMART Goals — AJ Joobandi
**Set:** 2026-02-20

---

## 1. SHIP: Merge the 4 Open DotAgents PRs
**Specific:** Review and merge PRs #1092 (settings consolidation), #1081 (agent delegation prompt), #1076 (mobile rapid fire UX), and #1063 (auto-updater) into main.
**Measurable:** All 4 PRs merged, CI green, version bumped to 1.4.1.
**Achievable:** PRs are already authored and typechecks pass — just needs review + merge.
**Relevant:** Directly unblocks users on mobile parity, reduces token waste, and restores auto-updates.
**Time-bound:** By end of this week (2026-02-27).

---

## 2. BUILD: Implement .agents/ Directory Standard (Issue #1069)
**Specific:** Complete Phase 1 of the .agents/ integration — scan skills directory and inject AGENTS.md as guidelines into DotAgents system prompt.
**Measurable:** Skills defined in ~/.agents/skills/ appear automatically in DotAgents without manual config; verified with at least 1 existing skill.
**Achievable:** Files: apps/desktop/src/main/system-prompts.ts, acp-smart-router.ts — scope is well-defined in the issue.
**Relevant:** Puts DotAgents in alignment with Claude Code, Codex, Cursor — zero-config skill sharing across tools.
**Time-bound:** Working prototype by 2026-03-06.

---

## 3. GROW: Hit 200 GitHub Stars on DotAgents
**Specific:** Grow from current ~77 stars to 200 stars by posting consistent technical content about DotAgents on X/Twitter — minimum 3 posts per week showcasing features, demos, or dev updates.
**Measurable:** 200 stars on the GitHub repo; 3+ posts/week tracked in agent-notes.
**Achievable:** The features are compelling — mobile agent spawning, voice delegation, rapid fire mode — just needs exposure.
**Relevant:** More stars = more contributors, more feedback, faster product improvement.
**Time-bound:** By 2026-03-20 (4 weeks).

---

## 4. OPERATE: Fix Cross-Platform Build (Issue #1062)
**Specific:** Resolve missing sherpa-onnx binaries for darwin-x64, win-x64, linux-x64, linux-arm64 so packaged app ships with local TTS/STT on all platforms.
**Measurable:** electron-builder produces working packages for all 4 target platforms with no missing binary warnings.
**Achievable:** Dependency resolution issue — needs explicit platform installs in build script or conditional bundling.
**Relevant:** Blocks DotAgents from being a proper cross-platform release; critical for growth.
**Time-bound:** By 2026-03-06.

---

## 5. CONTENT: Post Daily Discord Recaps to X (3x per week)
**Specific:** Use the discord-recap-tweeter skill to post TechFren Discord recap threads on X at least 3 times per week, consistently.
**Measurable:** 3 recap threads posted per week for 4 weeks = 12 total threads; engagement tracked in agent-notes.
**Achievable:** Full pipeline already built — SSH → summarize → tweet thread → post.
**Relevant:** Builds the @techfren_ai brand, drives Discord and GitHub awareness.
**Time-bound:** Ongoing, reviewed at 2026-03-20.

---

## Review Date: 2026-03-20
