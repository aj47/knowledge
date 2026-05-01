---
kind: note
id: claude-conversation-2026-01-26-installing-gifgrep-skill-3b6e8e97
updatedAt: 1769463271758
createdAt: 1769454732761
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 3b6e8e97-7b00-4df1-997e-8ac38c185120
created_at: 2026-01-26T19:12:12.761560Z
updated_at: 2026-01-26T21:34:31.758474Z
title: "Installing gifgrep skill"
---

# Installing gifgrep skill

## Metadata

- Claude conversation UUID: `3b6e8e97-7b00-4df1-997e-8ac38c185120`
- Created: `2026-01-26T19:12:12.761560Z`
- Updated: `2026-01-26T21:34:31.758474Z`
- Message count: 4
- Transcript chars extracted: 8061

## Claude summary

**Conversation Overview**

The user requested installation of the gifgrep skill from skills.sh, a tool for searching and downloading GIFs from providers like Tenor and Giphy. Claude successfully installed the skill by first attempting the standard npm installation method, which failed due to network restrictions preventing GitHub access. Claude then manually created the skill directory structure at `/mnt/skills/user/gifgrep/` and installed the actual gifgrep CLI tool by downloading a pre-built binary from the steipete/gifgrep GitHub repository. The installation process involved identifying that gifgrep is a Go-based project, downloading version 0.2.1 for Linux AMD64, and placing it in `/usr/local/bin/`. Claude updated the SKILL.md documentation with comprehensive usage examples tailored for content creation workflows, including finding reaction GIFs for video content, downloading GIFs, extracting still frames for thumbnails, and creating contact sheets. The user then asked for a test to verify functionality, and Claude demonstrated the tool by searching for "mind blown" GIFs, downloading one, and creating a 6-frame contact sheet arranged in a 3-column grid, presenting both the original GIF and the generated contact sheet to confirm the skill was fully operational.

**Tool Knowledge**

The gifgrep installation required working around network proxy restrictions that blocked direct GitHub access via npm. When `npx skills add https://github.com/clawdbot/clawdbot --skill gifgrep` failed with "CONNECT tunnel failed, response 401", manually creating the skill directory structure and downloading pre-built binaries proved more reliable than attempting source compilation. The actual gifgrep tool is maintained at `steipete/gifgrep` rather than the clawdbot repository referenced in the skills.sh page. For Go-based tools requiring newer versions than available in the system, downloading release binaries from GitHub releases using `curl -L -o [filename] [release-url]` and extracting with `tar -xzf` works better than attempting `go install` with version conflicts. The gifgrep tool uses `--format url` for pipe-friendly output, `--json` for structured data, and `--max N` for limiting results. The sheet extraction feature uses syntax like `gifgrep sheet input.gif --frames 6 --cols 3 -o output.png` and successfully generates contact sheets for GIF preview workflows.

## Quick excerpt

The user is asking me to install a skill from skills.sh. Let me first check what skills are available and understand how to install new skills. Looking at the system prompt, I can see there's a skill-creator skill at /mnt/skills/examples/skill-creator/SKILL.md that might help me understand how to create/install skills. But the user is asking me to install from an external URL: https://skills.sh/clawdbot/clawdbot/gifgrep Let me first fetch that URL to see what this skill is about and how to insta

## Transcript

## human\n\ninstall this skill https://skills.sh/clawdbot/clawdbot/gifgrep\n
## assistant\n\nThe user is asking me to install a skill from skills.sh. Let me first check what skills are available and understand how to install new skills.

Looking at the system prompt, I can see there's a skill-creator skill at /mnt/skills/examples/skill-creator/SKILL.md that might help me understand how to create/install skills.

But the user is asking me to install from an external URL: https://skills.sh/clawdbot/clawdbot/gifgrep

Let me first fetch that URL to see what this skill is about and how to install it.I'll fetch that skills.sh page to see the installation instructions for the gifgrep skill.
```
This block is not supported on your current device yet.
```

This skill is for searching and downloading GIFs using gifgrep. The installation command is:

```
npx skills add https://github.com/clawdbot/clawdbot --skill gifgrep
```

Let me run this to install the skill. I should use bash to execute this npm command.Got it! I'll install the gifgrep skill using the skills CLI.
```
This block is not supported on your current device yet.
```

The installation failed because of a network issue - it can't access GitHub directly (CONNECT tunnel failed, response 401). This is a proxy/network restriction in this environment.

Let me try an alternative approach - I can manually create the skill by:
1. Getting the SKILL.md content (which I already have from the web fetch)
2. Creating the skill directory manually

Let me create the skill in the user skills directory.The direct GitHub clone is blocked by the network proxy. Let me manually install the skill by creating it in the skills directory - I already have the SKILL.md content from the page.
```
This block is not supported on your current device yet.
```

Good, the directory was created. Now let me create the SKILL.md file with the content from the web fetch.
```
This block is not supported on your current device yet.
```

Good, the SKILL.md file is created. Now I need to install the actual gifgrep CLI tool. Let me check if it's available via npm or another package manager.Now let me install the actual `gifgrep` CLI tool:
```
This block is not supported on your current device yet.
```

The gifgrep tool isn't available via standard package managers. Let me check the GitHub repo more directly - it might be a Rust project that needs to be built from source, or there might be pre-built binaries available.

Let me search for how to install gifgrep.
```
This block is not supported on your current device yet.
```

I see - gifgrep is a skill that's part of the clawdbot repository. It's not a standalone package, but rather a tool that's bundled with clawdbot or available as a skill within that ecosystem. Let me try to install clawdbot which should include the gifgrep functionality.I see - `gifgrep` is bundled as a skill within the clawdbot package. Let me install clawdbot which includes gifgrep:
```
This block is not supported on your current device yet.
```

The full clawdbot install is failing because it has git dependencies that require ssh access, which isn't available in this environment.

Let me try a different approach - I'll search for how to install just gifgrep standalone, or look for the actual CLI tool.The full clawdbot install requires git/ssh access. Let me look for gifgrep as a standalone Rust crate:
```
This block is not supported on your current device yet.
```

Rust is installed. The `source` command didn't work because it was trying to use `/bin/sh` instead of bash. Let me try running cargo directly now.
```
This block is not supported on your current device yet.
```

No results from cargo search - gifgrep isn't on crates.io. Let me check if it's part of the clawdbot npm package as a bundled binary or script.
```
This block is not supported on your current device yet.
```

Let me search for the actual gifgrep source code or installation method.
```
This block is not supported on your current device yet.
```

Found it! The real gifgrep is at https://github.com/steipete/gifgrep - it's a Rust project. Let me fetch that page to see the installation instructions.Found it! The actual gifgrep repo is `steipete/gifgrep`. Let me get the installation instructions:
```
This block is not supported on your current device yet.
```

I found it. gifgrep is a Go project, and it can be installed via:
1. Homebrew: `brew install steipete/tap/gifgrep`
2. Go install: `go install github.com/steipete/gifgrep/cmd/gifgrep@latest`

Let me try the Go install since we have Go available (or can install it).Found it! gifgrep is a Go project by steipete. Let me install it:
```
This block is not supported on your current device yet.
```

Go is installed. Now let me install gifgrep using go install.
```
This block is not supported on your current device yet.
```

The package requires Go 1.25 which is newer than what's installed, and the toolchain download is failing. Let me try installing a pre-built binary instead.The Go version required is newer. Let me download a pre-built release binary:
```
This block is not supported on your current device yet.
```

gifgrep is now installed! Let me test it to make sure it works.gifgrep is installed. Let me test it:
```
This block is not supported on your current device yet.
```

It works! The gifgrep skill is now fully installed. Let me update the SKILL.md with more complete documentation and verify everything is in place.Excellent! gifgrep is working! Now let me update the SKILL.md with the complete documentation:
```
This block is not supported on your current device yet.
```

The gifgrep skill is now fully installed. Let me verify everything is set up correctly.
```
This block is not supported on your current device yet.
```

The gifgrep skill is fully installed and working. Let me give the user a summary of what was done.**gifgrep skill installed!** 🎉

Here's what's set up:

| Component | Status |
|-----------|--------|
| **Binary** | `/usr/local/bin/gifgrep` v0.2.1 |
| **Skill docs** | `/mnt/skills/user/gifgrep/SKILL.md` |

**Quick test:**
```
gifgrep "thumbs up" --max 2
→ https://media.tenor.com/t0gkGMRKmu0AAAAC/ok-nice-grafic.gif
→ https://media.tenor.com/NTeRUfGwLb4AAAAC/cat-thumbs-up.gif
```

**Example uses for your content:**
- `gifgrep "mind blown" --max 5` — Find reaction GIFs for Fireship-style videos
- `gifgrep "celebration" --download --max 1` — Grab a GIF for social posts
- `gifgrep still clip.gif --at 1s -o thumb.png` — Extract stills for thumbnails
- `gifgrep sheet clip.gif --frames 9 --cols 3 -o sheet.png` — Create contact sheets\n
## human\n\ntest it with one gif or do i need ot enable it first\n
## assistant\n\nThe user wants me to test gifgrep. I already tested it and it worked - let me do a more comprehensive test to show them it's working.
```
This block is not supported on your current device yet.
```

It's working! Let me also download one and show the user a concrete result.
```
This block is not supported on your current device yet.
```

Let me download that GIF and present it to the user.
```
This block is not supported on your current device yet.
```

Great, the GIF downloaded successfully. Let me also test the sheet extraction feature to create a contact sheet and present both files to the user.
```
This block is not supported on your current device yet.
```

Both worked. Now let me copy them to the outputs folder and present them to the user.
```
This block is not supported on your current device yet.
```

Now let me present the files to the user. First the sheet (most useful to see), then the gif.
```
This block is not supported on your current device yet.
```

Perfect - everything works. No enabling needed, it's ready to use right now.It's already working — no enabling needed! 

**What I just did:**
1. `gifgrep "mind blown" --max 1` → found the GIF
2. Downloaded it (4.8MB)
3. `gifgrep sheet mind_blown.gif --frames 6 --cols 3` → created the contact sheet

The contact sheet is perfect for quickly reviewing GIF content or grabbing a still for thumbnails. Ready to use for your Fireship-style content! 🎬\n