---
kind: note
id: claude-conversation-2026-02-14-linux-installation-commands-for-node-npm-and-claude-d3237515
updatedAt: 1771099059363
createdAt: 1771098979926
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: d3237515-1682-4532-9e39-c377363c2ef0
created_at: 2026-02-14T19:56:19.926236Z
updated_at: 2026-02-14T19:57:39.363362Z
title: "Linux installation commands for Node, npm, and Claude"
---

# Linux installation commands for Node, npm, and Claude

## Metadata

- Claude conversation UUID: `d3237515-1682-4532-9e39-c377363c2ef0`
- Created: `2026-02-14T19:56:19.926236Z`
- Updated: `2026-02-14T19:57:39.363362Z`
- Message count: 4
- Transcript chars extracted: 994

## Claude summary

**Conversation Overview**

The user requested Linux commands to install Node.js, npm, and Claude Code CLI on their Ubuntu system. Claude provided installation commands using the NodeSource repository for Node.js/npm and npm for the Claude Code CLI. When the user encountered an EACCES permission error while attempting to globally install the Claude Code CLI package, Claude offered two solutions: using sudo for the immediate installation, or configuring npm to use a user-local directory for global packages to avoid future permission issues. The second approach involved creating a ~/.npm-global directory, updating npm's prefix configuration, and modifying the PATH environment variable in ~/.bashrc. This demonstrates the user is working with a Ubuntu server environment and needed assistance with standard Node.js development tool setup and npm permission troubleshooting.

## Quick excerpt

```bash # Node.js & npm (via NodeSource LTS) curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - sudo apt install -y nodejs # Verify node -v npm -v # Claude Code CLI npm install -g @anthropic-ai/claude-code ```

## Transcript

## human\n\ngive commands for linux to install

  - node
  - npm
  - claude (Claude Code CLI)
Install instructions:
  - Node.js/npm: https://nodejs.org/
  - tmux: sudo apt install tmux (or brew install tmux)
  - Claude Code: https://claude.com/claude-code\n
## assistant\n\n```bash
# Node.js & npm (via NodeSource LTS)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node -v
npm -v

# Claude Code CLI
npm install -g @anthropic-ai/claude-code
```\n
## human\n\nubuntu@ip-172-31-11-70:~$ npm install -g @anthropic-ai/claude-code
npm error code EACCES
npm error syscall mkdir
npm error path /usr/lib/node_modules/@anthropic-ai
npm error errno -13\n
## assistant\n\nPermission issue. Fix with:

```bash
sudo npm install -g @anthropic-ai/claude-code
```

Or to avoid needing `sudo` for global npm installs going forward:

```bash
mkdir -p ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g @anthropic-ai/claude-code
```\n