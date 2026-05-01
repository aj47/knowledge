---
kind: note
id: claude-conversation-2026-02-18-switching-to-agent-browser-by-vercel-7cafa4c2
updatedAt: 1771438814304
createdAt: 1771438748728
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 7cafa4c2-c6a5-4640-aba0-e2f9a0114c7c
created_at: 2026-02-18T18:19:08.728600Z
updated_at: 2026-02-18T18:20:14.304837Z
title: "Switching to agent browser by Vercel"
---

# Switching to agent browser by Vercel

## Metadata

- Claude conversation UUID: `7cafa4c2-c6a5-4640-aba0-e2f9a0114c7c`
- Created: `2026-02-18T18:19:08.728600Z`
- Updated: `2026-02-18T18:20:14.304837Z`
- Message count: 4
- Transcript chars extracted: 4331

## Claude summary

**Conversation Overview**

The user is developing a new video idea about their journey through browser automation tools, having recently switched to Agent Browser by Vercel. They've progressed through multiple tools including Playwright, MCP Chrome, Chrome DevTools, dev-browser, and others before settling on their current solution. Their specific requirements are to reuse logged-in sessions and avoid killing existing Chrome sessions. They shared a detailed technical guide they've created for launching a debug Chrome instance using remote debugging port 9222 with a separate user profile, which allows running alongside existing Chrome without conflicts. The user emphasized that their solution doesn't require Chrome extensions like other approaches.

Claude helped develop script notes for the video using the user's established voice and scripting format. The approach leveraged the "journey through tools" narrative as a compelling hook, positioning it as a hybrid of "Bold Claim + Unique Discovery" templates. Claude structured the script with sections for Hook, Value Stack, Demo, The Journey, and Close, emphasizing the key differentiators of no extensions needed, session reuse, and non-destructive Chrome usage. The recommended hook focused on opening with a bold claim and specific numbers within the first 10 words, using the tool journey itself as credibility rather than just hyping a single solution. Claude suggested this could work as either a 45-60 second short or extended to a 2-3 minute YouTube video with the technical walkthrough.

## Quick excerpt

Let me pull up your voice/scripting guides to nail the format. This is a great video concept — the "journey through tools" angle is compelling, and the punchline of "no extension needed" is a strong differentiator. Let me draft script notes for this. ``` This block is not supported on your current device yet. ``` Here's the script notes for this video. The journey angle is fire — it's basically a "Bold Claim + Unique Discovery" hybrid, which are your two highest-performing templates. --- **HOOK*

## Transcript

## human\n\nnew video idea; ive switched to agent browser by vercel.

ive gone from playwright -> mcp-chrome -> playwright -> chrome dev tools -> playwriter -> dev-browser and now ive landed on agent browser by vercel\n
## human\n\nnew video idea; ive switched to agent browser by vercel.

ive gone from playwright -> mcp-chrome -> playwright -> chrome dev tools -> playwriter -> dev-browser and now ive landed on agent browser by vercel

my needs 
- re use my logged in session
- dont kill my chrome session

```
# Chrome Debug Session v2

Launch a second Chrome instance with `--remote-debugging-port=9222` using a pre-made profile at `~/chrome-debug-profile`. No need to kill existing Chrome sessions.

## Step 1: Check if already running
```bash
curl -s --max-time 3 http://localhost:9222/json/version
```
If this returns JSON, debug Chrome is already up — skip to using it.

## Step 2: Launch debug Chrome alongside existing Chrome
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --remote-debugging-port=9222 \
  --user-data-dir="$HOME/chrome-debug-profile" &
sleep 5
```
This works because the debug instance uses a different user-data-dir than the default Chrome, so macOS treats them as separate processes.

## Step 3: Verify
```bash
curl -s --max-time 5 http://localhost:9222/json/version
```
Should return JSON with `Browser` and `webSocketDebuggerUrl`.

## Usage with agent-browser
```bash
agent-browser --cdp 9222 open https://example.com
agent-browser --cdp 9222 snapshot -i
agent-browser --cdp 9222 eval "document.title"
```

## Troubleshooting
| Problem | Fix |
|---------|-----|
| Port 9222 not responding | Check `lsof -i :9222` and `pgrep -la Chrome` |
| Opens tab in existing Chrome instead | Ensure `--user-data-dir` points to `~/chrome-debug-profile` (not default path) |
| Stale logins | Re-copy profile: `cp -r "$HOME/Library/Application Support/Google/Chrome" ~/chrome-debug-profile` |

## Platform
- macOS only
- Requires `~/chrome-debug-profile` (pre-copied Chrome profile with login sessions)
```


tats my skill . i dont even need a chrome extension like other solutions\n
## assistant\n\nLet me pull up your voice/scripting guides to nail the format.

This is a great video concept — the "journey through tools" angle is compelling, and the punchline of "no extension needed" is a strong differentiator. Let me draft script notes for this.
```
This block is not supported on your current device yet.
```

Here's the script notes for this video. The journey angle is fire — it's basically a "Bold Claim + Unique Discovery" hybrid, which are your two highest-performing templates.

---

**HOOK**

• I've tried every browser automation tool out there...

• Playwright, MCP Chrome, Chrome DevTools, dev-browser...

• Agent Browser by Vercel just ended that search...

**VALUE STACK**

• No Chrome extension needed...

• Reuses my logged-in session...

• Doesn't kill my existing Chrome...

• Just one command and it connects...

**DEMO**

• Let me show you the setup...

• Launch a debug Chrome instance alongside my normal one...

• `agent-browser --cdp 9222 open`...

• Let's see if it picks up my session...

• [React naturally — the logged-in session moment is the money shot]

**THE JOURNEY (optional B-roll/overlay moment)**

• Started with Playwright — too heavy...

• MCP Chrome — needed an extension...

• Chrome DevTools protocol — close but janky...

• Dev-browser — almost...

• Agent Browser — just works...

**CLOSE**

• No extensions, no killing Chrome, just connect and go...

• Check it out — link in bio...

---

**Notes on the hook:** Your first 10 words need to land the bold claim. I'd suggest opening with something like:

*"I've used six different browser automation tools — Agent Browser by Vercel is the one that stuck."*

That hits: bold claim + specific number + tool name in first 10 words. The journey/list of tools you've tried IS the credibility — it shows you're not just hyping the first thing you found.

**Format call:** This works great as a 45-60 second short. The "tool graveyard" journey is relatable to devs, and the punchline (no extension, reuses session, doesn't kill Chrome) is a clean value stack. If you want to go longer, the debug Chrome setup walkthrough could stretch it to a 2-3 min YouTube vid.

Want me to write this up as a proper one-page script notes doc you can print?\n