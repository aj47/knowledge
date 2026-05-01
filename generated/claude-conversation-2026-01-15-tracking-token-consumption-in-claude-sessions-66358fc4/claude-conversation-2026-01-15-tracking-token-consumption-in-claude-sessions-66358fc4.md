---
kind: note
id: claude-conversation-2026-01-15-tracking-token-consumption-in-claude-sessions-66358fc4
updatedAt: 1768502856060
createdAt: 1768502833582
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 66358fc4-7955-43aa-955b-1a12e61df42b
created_at: 2026-01-15T18:47:13.582937Z
updated_at: 2026-01-15T18:47:36.060577Z
title: "Tracking token consumption in Claude sessions"
---

# Tracking token consumption in Claude sessions

## Metadata

- Claude conversation UUID: `66358fc4-7955-43aa-955b-1a12e61df42b`
- Created: `2026-01-15T18:47:13.582937Z`
- Updated: `2026-01-15T18:47:36.060577Z`
- Message count: 2
- Transcript chars extracted: 2691

## Claude summary

**Conversation Overview**

The user inquired about tracking token consumption in Claude Code sessions, seeking ways to monitor their usage across coding sessions. Claude provided comprehensive information about both built-in and third-party solutions for token tracking. The built-in options include the `/cost` command, which shows total tokens used, cost, and session duration (though primarily useful for API users rather than Pro/Max subscribers), and the `/context` command, which displays consumed tokens, available tokens, and usage breakdown by category including individual tool calls.

For more detailed tracking, Claude recommended several third-party tools, with `ccusage` being the most popular option. This tool analyzes Claude Code usage from local JSONL files stored in `~/.claude/projects/` and can be run instantly using `npx ccusage@latest` with various parameters for daily reports, session-based usage, or 5-hour billing windows. The tool provides model breakdowns, cost estimates, and cache token support. Claude also mentioned `Claude-Code-Usage-Monitor`, a Python-based real-time terminal dashboard that provides continuous token usage monitoring and calculates burn rates to predict token exhaustion. The user appears to be on a subscription plan where usage data isn't visible in the Anthropic Console, making these local analysis tools particularly valuable for their needs.

## Quick excerpt

The user is asking about tracking token consumption in Claude Code sessions. This is a technical question about Claude Code functionality. Let me think about what I know and whether I should search for more information. Claude Code is Anthropic's command-line tool for agentic coding. The user wants to know if there's a way to see total token usage for a session. This is a specific product feature question, so I should search Anthropic's documentation to provide accurate information. ``` This blo

## Transcript

## human\n\nis there a way to see how many tokens were consumed in total for a single claude code session\n
## assistant\n\nThe user is asking about tracking token consumption in Claude Code sessions. This is a technical question about Claude Code functionality. Let me think about what I know and whether I should search for more information.

Claude Code is Anthropic's command-line tool for agentic coding. The user wants to know if there's a way to see total token usage for a session. This is a specific product feature question, so I should search Anthropic's documentation to provide accurate information.
```
This block is not supported on your current device yet.
```

I found good information about this. Let me summarize the options for the user:

1. **Built-in commands**:
   - `/cost` - shows token usage and cost for the current session (but this is primarily for API users, not Pro/Max subscribers)
   - `/context` - shows tokens consumed, available, and breakdown by category

2. **Third-party tools**:
   - `ccusage` - CLI tool that parses local JSONL files from `~/.claude/projects/`. Can show daily, monthly, session-based usage. Run with `npx ccusage@latest`
   - `Claude-Code-Usage-Monitor` - Python-based real-time terminal dashboard
   - `claude-code-otel` - enterprise-grade observability solution

The user would probably benefit most from knowing about the built-in `/cost` and `/context` commands, plus `ccusage` as a simple third-party option.Yes, there are a few options:

**Built-in commands:**
- `/cost` — shows total tokens used, cost, and duration for the current session. Note this is mainly useful for API/pay-as-you-go users; it doesn't show meaningful cost data on Pro/Max plans.
- `/context` — shows how many tokens you've consumed, how many are available, and breaks down usage by category (including individual tool calls)

**Third-party tools:**

The most popular is `ccusage`, which analyzes Claude Code usage from local JSONL files stored in `~/.claude/projects/`. You can run it instantly without installing:

```bash
npx ccusage@latest          # daily report (default)
npx ccusage@latest session  # usage grouped by conversation session
npx ccusage@latest blocks   # 5-hour billing windows
```

It tracks daily, monthly, and session-based usage with model breakdown, cost estimates, and cache token support. Since you're on a subscription plan and can't see this in the Anthropic Console, ccusage reads the local data directly.

For real-time monitoring during sessions, there's also `Claude-Code-Usage-Monitor` — a Python terminal dashboard that provides a constantly updating view of your token usage and calculates "burn rate" to predict when you might exhaust your tokens.\n