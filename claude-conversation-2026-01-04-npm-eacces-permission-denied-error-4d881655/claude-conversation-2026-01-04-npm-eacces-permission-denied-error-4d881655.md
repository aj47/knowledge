---
kind: note
id: claude-conversation-2026-01-04-npm-eacces-permission-denied-error-4d881655
updatedAt: 1767560906027
createdAt: 1767560533225
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 4d881655-24b8-41e1-81cc-5944cecd8424
created_at: 2026-01-04T21:02:13.225133Z
updated_at: 2026-01-04T21:08:26.027233Z
title: "npm EACCES permission denied error"
---

# npm EACCES permission denied error

## Metadata

- Claude conversation UUID: `4d881655-24b8-41e1-81cc-5944cecd8424`
- Created: `2026-01-04T21:02:13.225133Z`
- Updated: `2026-01-04T21:08:26.027233Z`
- Message count: 6
- Transcript chars extracted: 5004

## Claude summary

**Conversation Overview**

The user encountered a series of technical configuration issues while working in their Development/SpeakMCP directory on a CachyOS system running the Niri Wayland compositor. They first attempted to globally install the @augmentcode/auggie npm package but received an EACCES permission error when npm tried to create directories in /usr/lib/node_modules. Claude provided solutions including configuring npm to use a user-owned directory (~/.npm-global) by setting the npm prefix and updating the PATH environment variable, or alternatively using sudo as a quick but less ideal fix.

The user then asked a basic vim question about pasting text, and Claude explained the standard vim paste commands (p/P for clipboard content, "+p/"*p for system clipboard) along with paste mode for handling formatting issues. Finally, the user encountered shell configuration errors where fish shell was attempting to source zsh configuration files from /usr/share/cachyos-zsh-config/, resulting in syntax errors since fish uses different variable assignment syntax than zsh. Claude identified that the user was running fish shell while trying to use zsh configs and suggested either switching to zsh using chsh or removing the incompatible zsh sourcing from their fish configuration files.

## Quick excerpt

The user is getting a permission denied error when trying to install a global npm package. This is a classic issue on Linux where the default global npm directory (`/usr/lib/node_modules/`) requires root permissions. There are a few ways to fix this: 1. Use `sudo` (not recommended as it can cause permission issues later) 2. Configure npm to use a different directory for global packages (recommended) 3. Use a Node version manager like `nvm` or `fnm` which handles this automatically Since they're 

## Transcript

## human\n\n~/Development/SpeakMCP main*
❯ npm install -g @augmentcode/auggie
npm error code EACCES
npm error syscall mkdir
npm error path /usr/lib/node_modules/@augmentcode
npm error errno -13
npm error Error: EACCES: permission denied, mkdir '/usr/lib/node_modules/@augmentcode'
npm error     at async mkdir (node:internal/fs/promises:861:10)
npm error     at async /usr/lib/node_modules/npm/node_modules/@npmcli/arborist/lib/arborist/reify.js:576:20
npm error     at async Promise.allSettled (index 0)
npm error     at async [reifyPackages] (/usr/lib/node_modules/npm/node_modules/@npmcli/arborist/lib/arborist/reify.js:313:11)
npm error     at async Arborist.reify (/usr/lib/node_modules/npm/node_modules/@npmcli/arborist/lib/arborist/reify.js:125:5)
npm error     at async Install.exec (/usr/lib/node_modules/npm/lib/commands/install.js:150:5)
npm error     at async Npm.exec (/usr/lib/node_modules/npm/lib/npm.js:208:9)
npm error     at async module.exports (/usr/lib/node_modules/npm/lib/cli/entry.js:67:5) {
npm error   errno: -13,
npm error   code: 'EACCES',
npm error   syscall: 'mkdir',
npm error   path: '/usr/lib/node_modules/@augmentcode'
npm error }
npm error
npm error The operation was rejected by your operating system.
npm error It is likely you do not have the permissions to access this file as the current user
npm error
npm error If you believe this might be a permissions issue, please double-check the
npm error permissions of the file and its containing directories, or try running
npm error the command again as root/Administrator.
npm error A complete log of this run can be found in: /home/techfrena/.npm/_logs/2026-01-04T21_00_37_227Z-debug-0.log
~/Development/SpeakMCP main*

cachyos niri hp zbook\n
## assistant\n\nThe user is getting a permission denied error when trying to install a global npm package. This is a classic issue on Linux where the default global npm directory (`/usr/lib/node_modules/`) requires root permissions.

There are a few ways to fix this:

1. Use `sudo` (not recommended as it can cause permission issues later)
2. Configure npm to use a different directory for global packages (recommended)
3. Use a Node version manager like `nvm` or `fnm` which handles this automatically

Since they're on CachyOS (an Arch-based distro) with Niri (a Wayland compositor), the best approach would be to configure npm to use a user-owned directory for global packages.

Let me give them a quick solution.Classic npm global permissions issue. The cleanest fix is to configure npm to use a directory you own:

```bash
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
```

Then add to your `~/.bashrc` or `~/.zshrc`:

```bash
export PATH="$HOME/.npm-global/bin:$PATH"
```

Reload your shell (`source ~/.bashrc` or open a new terminal), then retry:

```bash
npm install -g @augmentcode/auggie
```

Alternatively, if you just want to get it done quickly, `sudo npm install -g @augmentcode/auggie` works but isn't ideal long-term since it can create permission headaches later.\n
## human\n\nhow do i paste in vim\n
## assistant\n\nThe user is asking a basic vim question about pasting. This is a simple factual question that doesn't require any tools - I can answer directly from my knowledge.In normal mode, press `p` to paste after the cursor, or `P` to paste before it.

If you're pasting from outside vim (system clipboard), use `"+p` or `"*p`. On some systems you can also use `Ctrl+Shift+V` in insert mode if your terminal supports it.

If pasted text looks mangled (wrong indentation), toggle paste mode first with `:set paste`, paste, then `:set nopaste`.\n
## human\n\n/usr/share/cachyos-zsh-config/cachyos-config.zsh (line 13): Unsupported use of '='. In fish, please use 'set DISABLE_MAGIC_FUNCTIONS "true"'.
DISABLE_MAGIC_FUNCTIONS="true"
^~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
from sourcing file /usr/share/cachyos-zsh-config/cachyos-config.zsh
	called on line 3 of file ~/.zshrc
from sourcing file ~/.zshrc
source: Error while reading file “/usr/share/cachyos-zsh-config/cachyos-config.zsh”
~/.zshrc (line 34): Unsupported use of '='. In fish, please use 'set precmd_functions ("${(@)precmd_functions:#__zoxide_hook}")'.
precmd_functions=("${(@)precmd_functions:#__zoxide_hook}")
^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
from sourcing file ~/.zshrc\n
## assistant\n\nThe user is running fish shell but their config is trying to source zsh files. Fish has different syntax than bash/zsh - it uses `set` instead of `=` for variables.

They probably want to either:
1. Switch to zsh as their shell
2. Or configure fish properly

Given they're on CachyOS with a zsh config, they likely intended to use zsh but fish is their current shell.You're running fish shell but it's trying to source zsh configs. Fish has incompatible syntax.

Either switch to zsh:

```bash
chsh -s /bin/zsh
```

Then log out and back in.

Or if you want to stay on fish, remove or comment out the zsh-specific lines in your fish config (`~/.config/fish/config.fish`) that are trying to source `.zshrc` or zsh files.

To check your current shell: `echo $SHELL`\n