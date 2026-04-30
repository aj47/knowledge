---
kind: note
id: claude-conversation-2025-12-24-getting-started-with-obsidian-bee0ec44
updatedAt: 1766603773957
createdAt: 1766603176837
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: bee0ec44-fea6-4800-b186-544eac0def9d
created_at: 2025-12-24T19:06:16.837590Z
updated_at: 2025-12-24T19:16:13.957384Z
title: "Getting started with Obsidian"
---

# Getting started with Obsidian

## Metadata

- Claude conversation UUID: `bee0ec44-fea6-4800-b186-544eac0def9d`
- Created: `2025-12-24T19:06:16.837590Z`
- Updated: `2025-12-24T19:16:13.957384Z`
- Message count: 4
- Transcript chars extracted: 8522

## Claude summary

**Conversation Overview**

The user requested comprehensive guidance on setting up Obsidian, a note-taking application, across multiple platforms with GitHub synchronization. They initially asked for a cheatsheet covering vault concepts, GitHub sync methods, and pro tips for getting started. Claude provided detailed explanations of Obsidian's vault system (folders containing Markdown files), recommended the Obsidian Git plugin for automated GitHub synchronization, and shared practical tips including essential hotkeys, daily notes workflows, and starter plugin recommendations.

The user then requested specific step-by-step instructions for setting up Obsidian on macOS using terminal/CLI and Android mobile with automatic GitHub sync. Claude delivered detailed technical instructions covering Homebrew installation on macOS, git repository initialization, Obsidian Git plugin configuration for 5-minute auto-sync intervals, and two Android approaches: a Termux-based solution with SSH key setup and manual sync scripts, plus an alternative using the MGit app. The conversation focused heavily on cross-platform synchronization workflows, terminal commands, and avoiding merge conflicts between devices. The user demonstrated interest in automated workflows and technical implementation details rather than basic usage patterns.

## Quick excerpt

The user wants a cheatsheet on getting started with Obsidian - a note-taking app. They're asking about: 1. What vaults are 2. How to sync with GitHub easily 3. Pro tips for getting started This is a knowledge/how-to question about a popular app. I should be able to answer this from my knowledge without needing to search, as Obsidian's core concepts are well-established. Let me provide a helpful, practical cheatsheet. Since they asked for a "cheatsheet," they probably want something concise and a

## Transcript

## human\n\ngive me a cheatsheet on getting started with obsidian. what are vaults, how can i sync with github in an easy way. some more pro tips to get started\n
## assistant\n\nThe user wants a cheatsheet on getting started with Obsidian - a note-taking app. They're asking about:
1. What vaults are
2. How to sync with GitHub easily
3. Pro tips for getting started

This is a knowledge/how-to question about a popular app. I should be able to answer this from my knowledge without needing to search, as Obsidian's core concepts are well-established. Let me provide a helpful, practical cheatsheet.

Since they asked for a "cheatsheet," they probably want something concise and actionable. I'll keep it organized but follow the guidance about not over-formatting - I'll use some structure since this is explicitly a reference/cheatsheet request, but keep it readable.# Obsidian Cheatsheet

## What's a Vault?

A vault is simply a folder on your computer that Obsidian treats as your workspace. All your notes (plain Markdown `.md` files) live inside it. You can have multiple vaults for different purposes (work, personal, projects), and switch between them.

Key things to know:
- It's just a regular folder—no proprietary formats, no lock-in
- Settings and plugins are stored per-vault in a hidden `.obsidian` folder
- You own your files and can open them with any text editor

---

## Syncing with GitHub (Easy Method)

**Option 1: Obsidian Git Plugin (Recommended)**

1. Create a GitHub repo for your vault
2. Initialize git in your vault folder: `git init`, add remote, push
3. Install the community plugin **"Obsidian Git"** (Settings → Community Plugins → Browse)
4. Configure it to auto-commit and push on an interval (e.g., every 10 minutes) or on close
5. Done—your notes sync automatically in the background

**Option 2: Manual or External Tool**

If you prefer more control, just use your normal git workflow or a GUI like GitHub Desktop. Point it at your vault folder and commit/push when you want.

**Heads up:** If you sync across devices, the `.obsidian` folder contains your settings/plugins. You can sync it (convenient) or `.gitignore` it (if devices need different configs).

---

## Pro Tips to Get Started

**Start simple.** Don't install 30 plugins on day one. Use vanilla Obsidian for a week to understand what you actually need.

**Use `[[wikilinks]]` liberally.** Link notes to each other as you write—even to notes that don't exist yet. This builds your knowledge graph organically.

**Learn these hotkeys early:**
- `Ctrl/Cmd + O` — Quick open (find any note fast)
- `Ctrl/Cmd + P` — Command palette (search any action)
- `Ctrl/Cmd + E` — Toggle edit/preview mode
- `Ctrl/Cmd + Shift + F` — Search across all notes

**Daily notes are powerful.** Enable the Daily Notes core plugin. Use it as an inbox for thoughts, then process into permanent notes later.

**Templates save time.** Create a `Templates` folder, add template files for recurring note types (meetings, book notes, etc.), and use the Templates core plugin to insert them.

**Use tags and folders thoughtfully.** Don't over-organize upfront. Many people find a flat structure with heavy linking works better than deep folder hierarchies. Tags like `#status/draft` or `#project/xyz` can help without rigid structure.

**Backlinks are your friend.** The backlinks pane shows every note that links *to* the current note—great for discovering connections you forgot about.

**Recommended starter plugins:**
- **Obsidian Git** — sync to GitHub
- **Calendar** — visual daily notes navigation
- **Dataview** — query your notes like a database (more advanced, but very powerful)
- **Templater** — advanced templates with logic

**Graph view is fun but not essential.** It looks cool, but most real productivity comes from search and backlinks, not staring at the graph.

---

Want me to go deeper on any of these—like a sample Dataview query, a template example, or a specific workflow?\n
## human\n\nhow can i get started with terminal cli, macos and mobile android.
give me step by step, and sync via github automatically\n
## assistant\n\nThe user wants step-by-step instructions for:
1. Setting up Obsidian on macOS (terminal/CLI installation)
2. Setting up Obsidian on Android mobile
3. Syncing both via GitHub automatically

Let me provide clear, actionable steps for each platform and the sync setup.# Obsidian Setup: macOS + Android with GitHub Sync

---

## Part 1: macOS Setup

### Install Obsidian via Terminal

```bash
# Using Homebrew (install Homebrew first if you don't have it)
brew install --cask obsidian
```

### Create Your Vault & Initialize Git

```bash
# Create a vault folder
mkdir ~/Documents/ObsidianVault
cd ~/Documents/ObsidianVault

# Initialize git
git init

# Create a .gitignore (optional but recommended)
cat << 'EOF' > .gitignore
.obsidian/workspace.json
.obsidian/workspace-mobile.json
.trash/
EOF

# Initial commit
git add .
git commit -m "Initial vault setup"
```

### Connect to GitHub

```bash
# Create a repo on GitHub first (via github.com or gh cli)
# Then link it:
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### Open Vault in Obsidian

1. Launch Obsidian
2. Click "Open folder as vault"
3. Select `~/Documents/ObsidianVault`

### Install Obsidian Git Plugin (Auto-Sync)

1. Go to **Settings → Community Plugins**
2. Turn off "Restricted mode"
3. Click **Browse** → Search for **"Obsidian Git"** → Install → Enable

### Configure Auto-Sync

Go to **Settings → Obsidian Git** and set:

| Setting | Recommended Value |
|---------|-------------------|
| Auto pull interval | 5 minutes |
| Auto push interval | 5 minutes |
| Auto commit interval | 5 minutes |
| Commit message | `vault backup: {{date}}` |
| Pull on startup | ON |
| Push on backup | ON |

Now your Mac syncs automatically every 5 minutes.

---

## Part 2: Android Setup

This is trickier since Android doesn't have native git. Here's the cleanest approach:

### Option A: Termux + Git (Most Reliable)

**Step 1: Install Apps**
- Install **Obsidian** from Play Store
- Install **Termux** from F-Droid (not Play Store—that version is outdated)

**Step 2: Set Up Termux**

Open Termux and run:

```bash
# Update packages
pkg update && pkg upgrade

# Install git and openssh
pkg install git openssh

# Configure git
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Generate SSH key
ssh-keygen -t ed25519 -C "your@email.com"

# Show your public key (add this to GitHub → Settings → SSH Keys)
cat ~/.ssh/id_ed25519.pub
```

**Step 3: Clone Your Vault**

```bash
# Give Termux storage access
termux-setup-storage

# Wait for permission prompt, then:
cd ~/storage/shared
git clone git@github.com:YOUR_USERNAME/YOUR_REPO.git ObsidianVault
```

**Step 4: Open in Obsidian**

1. Open Obsidian on Android
2. Tap "Open folder as vault"
3. Navigate to `Internal Storage/ObsidianVault`
4. Grant permissions

**Step 5: Create a Sync Script**

In Termux, create a simple sync script:

```bash
cat << 'EOF' > ~/sync-vault.sh
#!/bin/bash
cd ~/storage/shared/ObsidianVault
git pull
git add .
git commit -m "mobile sync: $(date '+%Y-%m-%d %H:%M')"
git push
EOF

chmod +x ~/sync-vault.sh
```

Run `~/sync-vault.sh` whenever you want to sync manually.

**Step 6: Auto-Sync with Termux (Optional)**

Install Termux:Widget from F-Droid, then:

```bash
mkdir -p ~/.shortcuts
cp ~/sync-vault.sh ~/.shortcuts/
```

Now you have a home screen widget to one-tap sync.

---

### Option B: MGit App (Easier but Less Reliable)

1. Install **MGit** from Play Store
2. Clone your repo to a folder
3. Point Obsidian at that folder
4. Manually pull/push in MGit when needed

This works but MGit can be finicky with SSH keys.

---

## Part 3: Workflow Summary

| Device | Sync Method | Frequency |
|--------|-------------|-----------|
| macOS | Obsidian Git plugin | Auto every 5 min |
| Android | Termux script or widget | Manual tap or cron |

### Avoiding Conflicts

- **Pull before editing** on mobile (run your sync script when opening Obsidian)
- **Commit often** on desktop (the plugin handles this)
- If you get merge conflicts, they're just text files—resolve in any editor

---

## Quick Reference Commands

```bash
# macOS: Manual sync if needed
cd ~/Documents/ObsidianVault && git pull && git add . && git commit -m "sync" && git push

# Android (in Termux)
~/sync-vault.sh
```

---

Want me to help you set up a cron job for fully automated Android sync, or create a specific template/workflow for your vault?\n