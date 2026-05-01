---
kind: note
id: claude-conversation-2026-01-11-virtualbox-shared-clipboard-not-working-1547f4bd
updatedAt: 1768160920449
createdAt: 1768160805673
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 1547f4bd-d329-4a2e-8789-17d3112b30ce
created_at: 2026-01-11T19:46:45.673707Z
updated_at: 2026-01-11T19:48:40.449532Z
title: "VirtualBox shared clipboard not working"
---

# VirtualBox shared clipboard not working

## Metadata

- Claude conversation UUID: `1547f4bd-d329-4a2e-8789-17d3112b30ce`
- Created: `2026-01-11T19:46:45.673707Z`
- Updated: `2026-01-11T19:48:40.449532Z`
- Message count: 4
- Transcript chars extracted: 3820

## Claude summary

**Conversation Overview**

The user sought help debugging shared clipboard functionality between their CachyOS Linux host system and an Ubuntu guest virtual machine running in Oracle VirtualBox Manager. They mentioned using the Niri Wayland compositor on CachyOS. Claude provided systematic troubleshooting steps including checking VM settings for bidirectional clipboard sharing, verifying VirtualBox Guest Additions installation and services, and addressing potential Wayland compatibility issues. The conversation revealed a brief confusion when the user stated "No apt on cachyos" - Claude had recommended apt commands for the Ubuntu guest VM, but the user may have misunderstood these as host system commands. Claude clarified that apt commands were intended for inside the Ubuntu guest (which does have apt), while any VirtualBox-related tasks on the CachyOS host would use pacman package manager. The troubleshooting approach covered both host-side VirtualBox installation verification and guest-side Guest Additions setup, with specific attention to the X11 versus Wayland session differences that can affect clipboard functionality. Claude provided specific commands for checking running services, installing required packages, and restarting VirtualBox components on both systems.

## Quick excerpt

The user is asking for help debugging shared clipboard issues between their CachyOS Linux host and Ubuntu guest in VirtualBox. This is a common issue with VirtualBox. Let me help them troubleshoot. The main causes for clipboard not working in VirtualBox are: 1. VirtualBox Guest Additions not installed or outdated 2. Clipboard sharing not enabled in VM settings 3. VBoxClient not running in the guest 4. Wayland-related issues (they mentioned using Niri Wayland compositor on CachyOS) Let me provide

## Transcript

## human\n\nHey. Can you help me debug why the shared clipboard is not working on my Oracle VirtualBox Manager I'm running on Cache OS Linux. I have a Ubuntu image I'm running inside.\n
## assistant\n\nThe user is asking for help debugging shared clipboard issues between their CachyOS Linux host and Ubuntu guest in VirtualBox. This is a common issue with VirtualBox. Let me help them troubleshoot.

The main causes for clipboard not working in VirtualBox are:
1. VirtualBox Guest Additions not installed or outdated
2. Clipboard sharing not enabled in VM settings
3. VBoxClient not running in the guest
4. Wayland-related issues (they mentioned using Niri Wayland compositor on CachyOS)

Let me provide troubleshooting steps.Hey! Yeah, this is a classic VirtualBox headache. Let me walk you through the common culprits:

**1. Check VM Settings First**

In VirtualBox Manager, right-click your Ubuntu VM → Settings → General → Advanced tab. Make sure "Shared Clipboard" is set to "Bidirectional" (or at least "Host to Guest" / "Guest to Host" depending on what you need).

**2. Guest Additions Installed?**

This is usually the issue. Inside your Ubuntu guest, check if Guest Additions are installed and running:

```bash
lsmod | grep vbox
```

You should see modules like `vboxguest`, `vboxsf`, `vboxvideo`. If not, install them:

```bash
sudo apt update
sudo apt install virtualbox-guest-utils virtualbox-guest-x11
```

Then reboot the guest.

**3. VBoxClient Running?**

The clipboard service needs to be running in the guest. Check with:

```bash
ps aux | grep VBoxClient
```

If it's not running, start it:

```bash
VBoxClient --clipboard
```

You can also restart all VBox services:

```bash
VBoxClient --clipboard --draganddrop --seamless --vmsvga
```

**4. Wayland Complication**

Since you're on CachyOS with Niri (Wayland), there can be quirks. VirtualBox clipboard historically works better with X11. A few things to try:

- Make sure your Ubuntu guest is running an X11 session, not Wayland (check with `echo $XDG_SESSION_TYPE` inside the guest)
- If the guest is using Wayland, clipboard sharing is often broken

**5. Quick Reset**

Sometimes just restarting the VBox services on the host helps:

```bash
sudo systemctl restart vboxdrv
```

Which of these have you already checked? And is your Ubuntu guest running X11 or Wayland?\n
## human\n\nNo apt on cachyos\n
## assistant\n\nThe user is clarifying that apt isn't available on CachyOS - they're talking about the host system (CachyOS), not the Ubuntu guest. CachyOS is Arch-based, so it uses pacman.

But wait, let me re-read the original question. They said they have Ubuntu running inside VirtualBox on CachyOS. So the Ubuntu guest would have apt, but CachyOS (the host) uses pacman.

I think they might be confused, or I wasn't clear. Let me clarify:

1. The Guest Additions need to be installed inside the Ubuntu guest VM (which does have apt)
2. If they need to install/reinstall VirtualBox stuff on the CachyOS host, that would use pacman

Let me clarify this distinction for them.Oh sorry, I should've been clearer! The `apt` commands are for **inside your Ubuntu guest VM** (Ubuntu has apt). That's where Guest Additions need to be installed.

On your **CachyOS host**, if you need to do anything with VirtualBox itself, you'd use pacman:

```bash
sudo pacman -S virtualbox virtualbox-host-modules-arch
# or if you're on a different kernel:
sudo pacman -S virtualbox-host-dkms
```

So the workflow is:

1. **On CachyOS (host):** Make sure VirtualBox is properly installed and the kernel modules are loaded (`sudo modprobe vboxdrv`)

2. **Inside Ubuntu VM (guest):** Boot into Ubuntu, open a terminal there, and run the apt commands to install Guest Additions

Are you having trouble with the host side (CachyOS) or the guest side (Ubuntu)? Or were you maybe trying to run apt on your CachyOS host by mistake?\n