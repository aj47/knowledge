---
kind: note
id: meta-skills-audit-2025-03-02
title: Skills Audit — 2025-03-02
context: search-only
updatedAt: 1772485452188
tags: meta
createdAt: 1772485452183
summary: | Skill | Issue | |-------|-------| | `document-processing` | No skill.md — just raw reference docs (docx-js.md, ooxml.md) in subfolder | | `document-processing-docx` | Completely empty directory |
references: meta/skills-audit-2025-03-02.md
---

# Skills Audit — 2025-03-02

## Summary: 21 skill folders, 19 with valid skill.md, 2 broken

## 🗑️ DELETE (broken/empty)
| Skill | Issue |
|-------|-------|
| `document-processing` | No skill.md — just raw reference docs (docx-js.md, ooxml.md) in subfolder |
| `document-processing-docx` | Completely empty directory |

## ⚠️ REVIEW (potential overlap / cleanup)
| Skill | Issue |
|-------|-------|
| `frontend-design` (42 lines) vs `ui-ux-pro-max` (386 lines) | Heavy overlap — both do frontend/UI design. frontend-design is thin; ui-ux-pro-max is comprehensive with data/scripts |
| `test-memory` (36 lines) | "Persistent memory storage" — vague, likely a test artifact |
| `discord-recap-tweeter-v3` | Has a `skill.md.bak` backup file that can be cleaned |
| `x-feed-tweet-optimizer` vs `x-post-tweet` | Overlap: optimizer analyzes & drafts tweets, x-post-tweet writes & posts. Could merge |

## ✅ HEALTHY (no issues)
| Skill | Lines | Purpose |
|-------|-------|---------|
| `agent-skill-creation` | 139 | Meta: teaches how to create skills |
| `aj-brand-voice` | 288 | AJ's brand voice & content strategy |
| `chrome-browser` | 141 | Browser automation via CDP |
| `discord-recap-tweeter-v3` | 656 | Discord recap → tweet pipeline |
| `electron-automation` | 455 | Electron app automation (just renamed) |
| `langfuse` | 100 | Langfuse API & docs |
| `memory-hygiene` | 50 | Memory cleanup/pruning |
| `remotion-best-practices` | 55 | Video creation in React (rich reference library) |
| `self-improvement-engine` | 87 | Analyze retros → suggest skills |
| `smart-goals-tracker` | 70 | Track SMART goals metrics |
| `supertonic-voiceover` | 209 | Local TTS voiceover generation |
| `task-retro` | 61 | Post-task retrospectives |
| `x-feed-summarizer` | 242 | Summarize X/Twitter feed |
| `x-feed-tweet-optimizer` | 158 | Analyze feed → draft tweets |
| `x-post-tweet` | 220 | Write & post tweets |
| `zele` | 215 | Gmail & Google Calendar CLI |

## Recommendations
1. **Delete** `document-processing` and `document-processing-docx` — broken, no skill.md
2. **Delete** `test-memory` — test artifact, vague purpose
3. **Merge** `frontend-design` into `ui-ux-pro-max` or delete it (ui-ux-pro-max covers everything)
4. **Consider merging** `x-feed-tweet-optimizer` + `x-post-tweet` into one tweet skill
5. **Clean** `discord-recap-tweeter-v3/skill.md.bak` backup file
