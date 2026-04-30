---
kind: note
id: product-ui-skills-research
title: Best Modern UI/Design Agent Skills (Feb 2026)
context: search-only
updatedAt: 1772142908075
tags: product
createdAt: 1772142908069
summary: Research done on the top UI/design skills in the agent skills ecosystem. - **Source**: https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design - **Philosophy**: Anti "AI slop" —...
references: product/ui-skills-research.md
---

# Best Modern UI/Design Agent Skills (Feb 2026)

Research done on the top UI/design skills in the agent skills ecosystem.

## 🏆 Top 5 UI Skills Ranked

### 1. `anthropics/frontend-design` (Official) — 52.4K downloads, 13.3K stars
- **Source**: https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design
- **Philosophy**: Anti "AI slop" — bold, distinctive, production-grade UIs
- **Key feature**: Design Thinking phase before coding (Purpose → Tone → Constraints → Differentiation)
- **Bans**: Inter, Roboto, Arial, Space Grotesk, purple gradients, predictable layouts
- **Requires**: Bold aesthetic commitment — maximalist or minimalist, never generic
- **Best for**: Any frontend work — components, pages, full apps
- **Install**: `claude plugin install @anthropics/frontend-design` or copy SKILL.md

### 2. `nextlevelbuilder/ui-ux-pro-max` — 33K stars
- **Source**: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- **Philosophy**: Design intelligence database — searchable, systematic
- **Key feature**: Python CLI tool (`search.py`) with 50 styles, 97 palettes, 57 font pairings, 25 chart types, 9 stacks
- **Unique**: `--design-system` flag auto-generates complete design system with reasoning
- **Unique**: Persisted design systems with Master + page-override pattern
- **Stacks**: React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui
- **Best for**: Complex projects needing systematic design decisions + consistency across pages
- **Install**: Copy to `~/.claude/skills/ui-ux-pro-max/`

### 3. `bencium/bencium-claude-code-design-skill` — 77 stars
- **Source**: https://github.com/bencium/bencium-claude-code-design-skill
- **Philosophy**: Two variants — Controlled (enterprise) vs Innovative (creative)
- **Controlled**: Always asks first, WCAG 2.1 AA, flat/minimal, ~3,500 lines across 6 files
- **Innovative**: Commits boldly, shadows/gradients OK, characterful typography, ~1,000 lines
- **Aesthetic tones**: Brutally minimal, maximalist chaos, retro-futuristic, organic, luxury, editorial, brutalist, soft/pastel
- **Anti-patterns**: Same as Anthropic's — bans generic SaaS blue (#3B82F6), teal+coral combos
- **Best for**: Teams needing both production-safe AND creative exploration options

### 4. `joeseesun/claude-designer-skill` — 16 stars
- **Source**: https://github.com/joeseesun/claude-designer-skill
- **Philosophy**: Jobs-style perfectionism + Rams-style functionalism
- **Key feature**: Three-phase workflow — Deep Diagnosis → 3 Solution Options (Progressive/Radical/Ideal) → Meticulous Execution
- **Design system**: Complete CSS variables for colors, typography, spacing, shadows
- **Unique**: Chinese-language trigger support (美化, 重新设计, etc.)
- **Best for**: Redesigning/polishing existing UIs

### 5. `b-open-io/frontend-design` (Community Extended) 
- **Source**: https://claude-plugins.dev/skills/@b-open-io/prompts/frontend-design
- **Philosophy**: Extended version of Anthropic's official skill
- **Key feature**: Additional guidance beyond the official version for stronger visual identity
- **Best for**: Drop-in replacement if you want more opinionated design guidance

---

## Honorable Mentions

- **`daymade/ui-designer`** — Extracts design systems from reference UI images, generates implementation-ready prompts
- **`WomenDefiningAI/frontend-ui`** — Research-backed prompting strategies from Anthropic's aesthetics cookbook
- **`obra/superpowers` (brainstorming skill)** — 16.7K downloads — not UI-specific but forces design thinking before implementation
- **`vercel-labs/agent-skills` (web-design-guidelines)** — 20.8K stars — Vercel's UI/UX principles

---

## Key Takeaways for DotAgents

1. **Anthropic's `frontend-design`** is the gold standard — most downloaded, most battle-tested
2. **`ui-ux-pro-max`** is the most comprehensive — database-driven with Python CLI tooling
3. **`bencium`** offers the best dual-mode approach (controlled vs innovative)
4. All top skills share anti-patterns: ban Inter/Roboto/Arial, ban purple gradients, ban generic SaaS blue
5. The trend is toward **Design Thinking BEFORE coding** — understanding purpose, audience, tone first

## Recommendation for DotAgents Desktop App

Install **two skills**:
1. `anthropics/frontend-design` — for day-to-day UI work (bold, creative, anti-slop)
2. `nextlevelbuilder/ui-ux-pro-max` — for systematic design decisions (palettes, font pairings, accessibility checklists)

Together they cover both creative direction AND systematic quality.
