---
kind: note
id: claude-conversation-2026-02-03-openclaw-missing-minimax-api-key-error-loop-048e4bba
updatedAt: 1770144052653
createdAt: 1770143964990
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 048e4bba-b2c7-4040-9aff-882d284bce97
created_at: 2026-02-03T18:39:24.990053Z
updated_at: 2026-02-03T18:40:52.653549Z
title: "OpenClaw missing MINIMAX_API_KEY error loop"
---

# OpenClaw missing MINIMAX_API_KEY error loop

## Metadata

- Claude conversation UUID: `048e4bba-b2c7-4040-9aff-882d284bce97`
- Created: `2026-02-03T18:39:24.990053Z`
- Updated: `2026-02-03T18:40:52.653549Z`
- Message count: 4
- Transcript chars extracted: 5351

## Claude summary

**Conversation Overview**

The user encountered a critical issue with their AWS VPS where a runaway openclaw process was flooding their terminal with repeated error messages about a missing MINIMAX_API_KEY environment variable. The error was preventing them from executing any commands in their current terminal session. Claude provided immediate troubleshooting steps, starting with standard interrupt commands (Ctrl+C, Ctrl+Z, Ctrl+\) for breaking out of the loop. When the user clarified they were using AWS's web-based connection interface, Claude adapted the solution to their specific environment, explaining how to open a new browser tab to create a fresh EC2 Instance Connect or Session Manager session. Claude also provided the specific command to kill the problematic process (pkill -f openclaw) and offered a fallback strategy of typing commands blindly in the flooded terminal. Additionally, Claude explained the root cause of the error and provided two permanent fixes: either setting the missing environment variable or removing the minimax provider configuration from the openclaw.json file. The user demonstrated familiarity with VPS management but needed guidance on AWS-specific web console navigation for opening multiple sessions.

## Quick excerpt

The user is dealing with a runaway process on their VPS that's spamming error messages about a missing MINIMAX_API_KEY in their openclaw config. They can't send commands because the terminal is flooded. Quick solutions: 1. Try Ctrl+C to interrupt 2. Try Ctrl+Z to suspend 3. If they can open another SSH session, they can kill the process from there 4. Use `pkill` or `killall` to stop openclaw processes Let me give them quick actionable steps.A few quick options to break out: **In the same termina

## Transcript

## human\n\ni keep having 
Failed to read config at /home/ubuntu/.openclaw/openclaw.json MissingEnvVarError: Missing env var "MINIMAX_API_KEY" referenced at config path: models.providers.minimax.models[0].headers.Authorization
    at substituteString (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:76:31)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:91:16)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:100:27)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:100:27)
    at file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:94:43
    at Array.map (<anonymous>)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:94:22)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:100:27)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:100:27)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:100:27) {
  varName: 'MINIMAX_API_KEY',
  configPath: 'models.providers.minimax.models[0].headers.Authorization'
}
Failed to read config at /home/ubuntu/.openclaw/openclaw.json MissingEnvVarError: Missing env var "MINIMAX_API_KEY" referenced at config path: models.providers.minimax.models[0].headers.Authorization
    at substituteString (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:76:31)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:91:16)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:100:27)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:100:27)
    at file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:94:43
    at Array.map (<anonymous>)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:94:22)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:100:27)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:100:27)
    at substituteAny (file:///home/ubuntu/.npm-global/lib/node_modules/openclaw/dist/config/env-substitution.js:100:27) {
  varName: 'MINIMAX_API_KEY',
  configPath: 'models.providers.minimax.models[0].headers.Authorization'
}
Failed to read config  

spammed in my vps
how can i break this loop
i cant seem to send commands\n
## assistant\n\nThe user is dealing with a runaway process on their VPS that's spamming error messages about a missing MINIMAX_API_KEY in their openclaw config. They can't send commands because the terminal is flooded.

Quick solutions:
1. Try Ctrl+C to interrupt
2. Try Ctrl+Z to suspend
3. If they can open another SSH session, they can kill the process from there
4. Use `pkill` or `killall` to stop openclaw processes

Let me give them quick actionable steps.A few quick options to break out:

**In the same terminal:**
- `Ctrl+C` - interrupt the process
- `Ctrl+Z` - suspend it (then `kill %1` to kill it)
- `Ctrl+\` - sends SIGQUIT, harder kill

**If the terminal is too flooded to respond:**

Open a **new SSH session** to your VPS and run:
```bash
pkill -f openclaw
```
or
```bash
killall node
```

**Once you've stopped it**, the fix for the actual error is either:

1. Set the env var (if you want to use minimax):
   ```bash
   export MINIMAX_API_KEY="your-key"
   ```

2. Or remove the minimax provider from your config:
   ```bash
   nano ~/.openclaw/openclaw.json
   ```
   Then delete or comment out the minimax section under `models.providers`.

The config parser is failing because it's trying to substitute `${MINIMAX_API_KEY}` but the env var doesn't exist. If you're not using minimax, just remove that provider block from the config.\n
## human\n\nim using aws connection on web how can i make anew session\n
## assistant\n\nThe user is connected to their AWS VPS through a web-based console (likely AWS EC2 Instance Connect or Session Manager in the browser). They need to open a new session to kill the runaway process since their current terminal is flooded.If you're using **EC2 Instance Connect** (the browser-based SSH):

1. Open a **new browser tab**
2. Go to your EC2 console → Instances
3. Select your instance
4. Click **Connect** again → **EC2 Instance Connect** → Connect

This gives you a fresh shell session. Then run:
```bash
pkill -f openclaw
```

---

If you're using **Session Manager**:

Same idea - just open a new tab, go to EC2 → Instances → Connect → Session Manager → Connect

---

**Alternative if you can't get a new session:**

In your flooded terminal, try typing **blindly** (even if you can't see it):
```
pkill -f openclaw
```
Then hit Enter. The command might execute even though spam is filling the screen.

Or try `Ctrl+C` repeatedly while typing `pkill -f openclaw` and Enter - sometimes you can slip a command in between the spam.\n