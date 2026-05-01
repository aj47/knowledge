---
kind: note
id: product-skill-zele
title: zele — Gmail & Google Calendar CLI Skill
context: search-only
updatedAt: 1771965435012
tags: product
createdAt: 1771963303894
summary: **Installed:** `bun install -g zele` (v0.3.14) A multi-account Gmail and Google Calendar client. Output is YAML, pipe-friendly. ```bash bun install -g zele zele login # opens browser; for headless:...
references: product/skill-zele.md
---

# zele — Gmail & Google Calendar CLI Skill

**Installed:** `bun install -g zele` (v0.3.14)

A multi-account Gmail and Google Calendar client. Output is YAML, pipe-friendly.

## Setup
```bash
bun install -g zele
zele login  # opens browser; for headless: paste localhost redirect URL back
```

## ⚠️ COMMON MISTAKES — READ BEFORE USING

### ❌ WRONG → ✅ CORRECT
| Wrong | Correct |
|-------|---------|
| `zele email list --starred` | `zele mail list --folder starred` |
| `zele draft create --thread-id <id>` | `zele draft create --thread <id>` |
| `zele mail list --starred` | `zele mail list --folder starred` |

### Rules
- Subcommand is `mail`, NOT `email`
- Starred folder: `--folder starred` (not `--starred` flag)
- Draft reply thread: `--thread <threadId>` (not `--thread-id`)
- Always include `--to`, `--subject`, `--body` when creating drafts even for replies

## IMPORTANT
- Never use the TUI (no-arg `zele`) — use CLI subcommands for YAML output
- When unsure about syntax: `zele --help` is the source of truth

## Capabilities
- Mail: list, search, read, send, reply, forward, star, archive, trash, label, watch
- Drafts: list, create, get, send, delete
- Calendar: list, search, create/update/delete events, RSVP, free/busy
- Labels: list, create, delete, unread counts
- Attachments: list per thread, download
- Multi-account: `--account <email>` flag; list/search merge across accounts

## Key Commands

### Mail
```bash
zele mail list                                    # inbox
zele mail list --folder starred --max 20          # starred emails
zele mail list --folder drafts
zele mail search "from:github subject:review"
zele mail read <threadId>
zele mail send --to alice@example.com --subject "Report" --body "..." --attach file.pdf
zele mail reply <threadId> --body "Thanks!" --all
zele mail star <threadId>
zele mail unstar <threadId>
zele mail archive <threadId>
zele mail trash <threadId>
zele mail watch                                   # polls every 15s
```

### Drafts
```bash
zele draft list
zele draft get <draftId>
zele draft create --to foo@example.com --subject "Re: Something" --body "..." --thread <threadId>
zele draft send <draftId>
zele draft delete <draftId> --force
```

### Calendar
```bash
zele cal events --today --all
zele cal events --week --all
zele cal create --summary "Standup" --from tomorrow --to +30m --meet --attendees bob@example.com
zele cal freebusy --from today --to +8h
zele cal respond <eventId> --status accepted
```

### Labels
```bash
zele label list
zele label counts
```
