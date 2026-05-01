---
kind: note
id: 20-windows-iso-driver-installation-error-on-hp-zbook
updatedAt: 1775964320254
tags:
group: claude-evergreen-distilled
title: "Windows ISO driver installation error on HP ZBook" (Evergreen Distilled)
context: search-only
source_note: ../../../generated/claude-conversation-2025-12-31-windows-iso-driver-installation-error-on-hp-zbook-02fb7ab5/claude-conversation-2025-12-31-windows-iso-driver-installation-error-on-hp-zbook-02fb7ab5.md
source_type: claude-evergreen-distilled
themes: [product, content, memory]
createdAt: 1776281681225
---

# "Windows ISO driver installation error on HP ZBook" (Evergreen Distilled)

## Core takeaways

- This is a common issue where the Windows installer cannot detect NVMe storage drives because it lacks Intel Rapid Storage Technology (IRST) VMD (Volume Management Device) drivers required by modern HP workstations.
- Claude provided multiple troubleshooting approaches, starting with the standard solutions of either loading IRST drivers during installation or disabling VMD in BIOS settings.
- When the user reported being unable to find VMD settings in their HP BIOS (a common limitation as HP often locks down consumer BIOS options), Claude focused on the driver loading approach.
- The process required downloading HP's IRST driver package (sp146929.exe), extracting the F6 folder containing the drivers, and loading them during Windows installation.
- Alternative approaches included manual copying using Terminal commands, using Ventoy as a more flexible USB creation tool, or using separate USB drives for the installer and drivers.

## Reusable insights

- This is a common issue during Windows installation where the installer can't detect the storage drive.
- Let me search for current information about this issue, especially for newer HP ZBook models.
- ``` This block is not supported on your current device yet.

## Source

- `../../../generated/claude-conversation-2025-12-31-windows-iso-driver-installation-error-on-hp-zbook-02fb7ab5/claude-conversation-2025-12-31-windows-iso-driver-installation-error-on-hp-zbook-02fb7ab5.md`
