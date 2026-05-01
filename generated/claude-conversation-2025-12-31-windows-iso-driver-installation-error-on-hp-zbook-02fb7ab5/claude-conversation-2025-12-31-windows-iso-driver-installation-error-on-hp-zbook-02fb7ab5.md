---
kind: note
id: claude-conversation-2025-12-31-windows-iso-driver-installation-error-on-hp-zbook-02fb7ab5
updatedAt: 1767223955547
createdAt: 1767222230802
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 02fb7ab5-bdc5-44d0-9564-80f32b6dc6e4
created_at: 2025-12-31T23:03:50.802933Z
updated_at: 2025-12-31T23:32:35.547824Z
title: "Windows ISO driver installation error on HP ZBook"
---

# Windows ISO driver installation error on HP ZBook

## Metadata

- Claude conversation UUID: `02fb7ab5-bdc5-44d0-9564-80f32b6dc6e4`
- Created: `2025-12-31T23:03:50.802933Z`
- Updated: `2025-12-31T23:32:35.547824Z`
- Message count: 12
- Transcript chars extracted: 13442

## Claude summary

**Conversation Overview**

The user encountered a "Install driver to show hardware" error while attempting to install Windows from an ISO on an HP ZBook 2025 laptop. This is a common issue where the Windows installer cannot detect NVMe storage drives because it lacks Intel Rapid Storage Technology (IRST) VMD (Volume Management Device) drivers required by modern HP workstations. Claude provided multiple troubleshooting approaches, starting with the standard solutions of either loading IRST drivers during installation or disabling VMD in BIOS settings.

When the user reported being unable to find VMD settings in their HP BIOS (a common limitation as HP often locks down consumer BIOS options), Claude focused on the driver loading approach. The process required downloading HP's IRST driver package (sp146929.exe), extracting the F6 folder containing the drivers, and loading them during Windows installation. However, the user was working from a Mac, which complicated the process since they couldn't run the Windows executable to extract drivers and had already created their installation USB using balenaEtcher, which creates read-only disk images that prevent adding additional files.

Claude provided Mac-specific solutions including using The Unarchiver or p7zip to extract the driver files, and explained why balenaEtcher wouldn't work for this scenario since additional driver files needed to be added to the installation media. Alternative approaches included manual copying using Terminal commands, using Ventoy as a more flexible USB creation tool, or using separate USB drives for the installer and drivers. When the user successfully accessed the driver loading interface and tried multiple driver options (including 467F9A0BA77F and 09AB managed controller drivers) but none worked, Claude began troubleshooting deeper issues, requesting the exact ZBook model number and suggesting newer Intel RST drivers directly from Intel, as the 2025 model might require more recent drivers for 14th generation or newer processors.

## Quick excerpt

The user is asking about an error message "Install driver to show hardware" (or similar - likely "Load driver" or "A media driver your computer needs is missing") that appears during Windows installation on an HP ZBook laptop from 2025. This is a common issue during Windows installation where the installer can't detect the storage drive. Let me search for current information about this issue, especially for newer HP ZBook models. ``` This block is not supported on your current device yet. ``` Th

## Transcript

## human\n\nThe "Install driver to show hardware" error during a Windows ISO install on hp zbook 2025\n
## assistant\n\nThe user is asking about an error message "Install driver to show hardware" (or similar - likely "Load driver" or "A media driver your computer needs is missing") that appears during Windows installation on an HP ZBook laptop from 2025. This is a common issue during Windows installation where the installer can't detect the storage drive.

Let me search for current information about this issue, especially for newer HP ZBook models.
```
This block is not supported on your current device yet.
```

This is a well-documented issue. The error during Windows installation on HP ZBooks (and other HP machines with Intel storage controllers) happens because the Windows installer doesn't include the Intel Rapid Storage Technology (IRST) or VMD (Volume Management Device) drivers needed to recognize the NVMe/SSD storage.

Let me search more specifically for newer ZBook models and any updates for 2025 models.
```
This block is not supported on your current device yet.
```

Now I have a good understanding of the issue. This is a common problem with modern HP systems using Intel VMD (Volume Management Device) for NVMe storage. The Windows installer doesn't include these drivers, so it can't see the NVMe drive during installation.

Let me provide a comprehensive answer with the solutions.This is a common issue on newer HP ZBooks with Intel processors. The Windows installer can't detect your NVMe drive because it lacks the **Intel RST VMD (Volume Management Device)** drivers that modern HP workstations require.

## Quick Fix

**Option 1: Load the IRST driver during install**

1. On a working PC, go to [HP Support](https://support.hp.com) and enter your ZBook's serial/product number
2. Download the **Intel Rapid Storage Technology (IRST)** driver from Driver → Storage
3. Extract the downloaded .exe file (right-click → Extract) to a USB flash drive
4. Look for the **F6 folder** inside the extracted files — copy it to the root of your USB
5. During Windows install, when you see "We couldn't find any drives," click **Load Driver**
6. Browse to the USB → F6 folder → select the driver → click Next
7. Your NVMe drive should now appear

**Option 2: Disable VMD in BIOS (simpler but less optimal)**

1. Boot into BIOS (F10 at startup)
2. Go to **Advanced → System Options → Configure Storage Controller for VMD**
3. **Uncheck/disable** VMD
4. Save and exit, then retry the Windows install
5. After Windows is installed, you can re-enable VMD and install the RST drivers from within Windows

## If the HP driver doesn't work

Download the latest Intel RST driver directly from Intel for 12th-15th Gen platforms:
- [Intel RST Driver 20.x](https://www.intel.com/content/www/us/en/download/849936/intel-rapid-storage-technology-driver-installation-software-with-intel-optane-memory-12th-to-15th-gen-platforms.html)
- Extract the zip and look for the **VMD** folder containing `iaStorVD.sys`

## Pro tip

Use the Windows installation USB created with Microsoft Media Creation Tool rather than Rufus with an ISO file — ISO-based installs tend to cause more driver loading issues.

What processor generation is in your ZBook? That'll help narrow down the exact driver version you need.\n
## human\n\ni cant find vmd settings in hp computer setup bios\n
## assistant\n\nThe user is saying they can't find the VMD settings in their HP ZBook BIOS. HP often hides or moves these settings, or they might be under different names. Let me search for more specific information about where VMD settings are located in HP ZBook BIOS.
```
This block is not supported on your current device yet.
```

This confirms the issue - HP often locks down the BIOS and doesn't expose the VMD disable option on consumer/prosumer laptops. The ZBook workstation line might have it under Advanced > System Options, but many HP laptops simply don't expose this setting.

The user's only real option is to load the IRST drivers during Windows install. Let me provide clear guidance on this.Unfortunately, the Intel VMD enable/disable option is not present in the BIOS because HP BIOS engineers have not deemed it to be a necessary option on many HP laptops and notebooks. The BIOS is locked down, making such a switch impossible.

## Where to check (ZBook workstations specifically)

On HP Z-series workstations, the setting *should* be at:
- **Advanced → System Options → Configure Storage Controller for VMD**

If it's not there, your ZBook model likely has it locked.

## Your only option: Load the IRST driver

Since you can't disable VMD, you'll need to load the driver during install. Here's exactly what to do:

**Step 1: Get the driver**
1. On another PC, download this Intel RST driver package:
   - `https://ftp.hp.com/pub/softpaq/sp146501-147000/sp146929.exe`
2. Run it as administrator — it will extract to `C:\SWSetup\sp146929`
3. Navigate to that folder and find the **F6** subfolder
4. Copy the entire **F6 folder** to a USB flash drive (can be the same one as your Windows installer, or separate)

**Step 2: During Windows install**
1. Boot from Windows installer USB
2. When you see "We couldn't find any drives" → click **Load Driver**
3. Click **Browse** → navigate to your USB → select the **F6** folder → click OK
4. You should see one or two driver options listed — select one and click **Next**
5. Your NVMe drive should now appear

## Important tips

- Use a Windows installation USB created with Microsoft Media Creation Tool rather than Rufus — ISO-based installs cause more issues
- If the HP driver doesn't work, try downloading the latest directly from Intel for 12th-15th gen platforms
- Make sure you're browsing to the **F6** folder specifically, not just the root of the extracted files

What's your exact ZBook model number? I can look up the specific driver package HP provides for it.\n
## human\n\nim on a mac\n
## assistant\n\nThe user is on a Mac and needs to create a Windows installation USB with the IRST drivers. This changes things - they can't run the .exe file to extract the drivers, and creating a Windows bootable USB on Mac is a bit different.

Let me think about the options:
1. They need to extract the drivers from the .exe file (which is a self-extracting archive)
2. They need to create a bootable Windows USB on Mac
3. They need to add the F6 folder to the USB

For extracting the .exe on Mac, they could use:
- 7-Zip (available via Homebrew as p7zip)
- The Unarchiver app
- Or download directly from a different source

For creating Windows USB on Mac:
- Microsoft doesn't have Media Creation Tool for Mac
- They can use Rufus alternatives like balenaEtcher, but that doesn't work well for Windows ISOs
- They could use Boot Camp Assistant (but that's for installing Windows on Mac)
- They could use Terminal with dd command
- They could use a tool like UNetbootin or similar

Actually, the simplest approach might be:
1. Download the Windows ISO directly from Microsoft
2. Use a tool to create the bootable USB
3. Extract the drivers using 7zip or similar and add to the USB

Let me provide clear instructions for Mac users.No problem — here's how to do it from a Mac:

## 1. Download what you need

- **Windows ISO**: Download directly from [microsoft.com/software-download/windows11](https://www.microsoft.com/software-download/windows11)
- **Intel RST drivers**: `https://ftp.hp.com/pub/softpaq/sp146501-147000/sp146929.exe`

## 2. Extract the driver (the .exe won't run on Mac)

Install **The Unarchiver** from the App Store, or use Homebrew:
```bash
brew install p7zip
7z x sp146929.exe -o./irst_drivers
```

This will extract the contents. Look for the **F6** folder inside.

## 3. Create the bootable Windows USB

**Option A — Using Terminal (simplest)**
1. Insert a USB drive (8GB+)
2. Open Disk Utility → Erase the USB as **exFAT**, scheme **Master Boot Record (MBR)**
3. Mount the Windows ISO (double-click it)
4. Copy all contents from the mounted ISO to the USB drive
5. Copy the **F6** folder to the root of the USB

**Option B — Using a tool**
- **Rufus** doesn't exist for Mac
- Try **[UNetbootin](https://unetbootin.github.io/)** or **[Ventoy](https://ventoy.net)** (Ventoy is great — just copy ISOs to it)

## 4. During Windows install

1. Boot the ZBook from the USB (F9 for boot menu)
2. When prompted about drives, click **Load Driver** → **Browse**
3. Navigate to the **F6** folder on your USB
4. Select the driver → your NVMe should appear

Want me to walk through any of these steps in more detail?\n
## human\n\ni cant copy files onto it once iso mounted i used balenaetcher\n
## assistant\n\nThe user used balenaEtcher to create their Windows USB, which writes the ISO as a raw image - this makes the USB read-only and you can't add files to it. That's the problem.

For Windows installers, you can't use balenaEtcher because:
1. It writes the ISO as a raw disk image
2. The resulting USB is read-only
3. You can't add the driver files

They need to create the USB differently so they can add the F6 driver folder to it.

Let me give them the right approach for Mac.That's the issue — balenaEtcher writes the ISO as a raw disk image, making it read-only. You can't add the driver files afterward.

## The fix: Use a different method

**Option 1: Manual copy (recommended)**

```bash
# 1. Find your USB disk number
diskutil list

# 2. Erase and format it (replace disk2 with your actual disk)
diskutil eraseDisk MS-DOS "WINUSB" MBR /dev/disk2

# 3. Mount the Windows ISO (double-click the .iso file in Finder)

# 4. Copy everything from mounted ISO to USB
cp -R /Volumes/CCCOMA_X64*/* /Volumes/WINUSB/
```

Then copy the **F6** folder onto the USB alongside the Windows files.

**Option 2: Use Ventoy**

1. Download Ventoy from [ventoy.net](https://ventoy.net)
2. Install Ventoy to your USB (there's a Mac version)
3. Just copy the Windows .iso file onto the Ventoy USB
4. Create a folder called `ventoy` on the USB, put the **F6** folder inside
5. Ventoy lets you browse and load drivers during install

**Option 3: Two USB drives**

Simplest workaround:
- USB 1: Your balenaEtcher Windows installer (keep as-is)
- USB 2: Just the **F6** folder with the drivers

During install, plug both in. When Windows asks for drivers, browse to USB 2.

---

Which option works best for you?\n
## human\n\nI had to unhide the hide the drivers that aren't compatible. Now I have a few of them, INF files 467F9A0BA77F and then another one managed controller 09AB.\n
## assistant\n\nThe user is at the "Load Driver" screen during Windows installation and has unchecked "Hide drivers that aren't compatible with this computer's hardware" to see the available drivers. They're seeing two options:

1. 467F9A0BA77F - This is likely the Intel RST VMD Controller
2. 09AB - This is likely the Intel RST VMD Managed Controller

This is a common scenario. The user needs to know which one to select. Based on my knowledge and the search results, the 09AB (VMD Managed Controller) is typically the one that works for detecting the NVMe drive during Windows installation.

Let me give them clear guidance on which to select.Try the **09AB** one (the VMD Managed Controller) first.

That's typically the one that makes the NVMe drive appear. Select it and click **Next**.

If your drive still doesn't show up after that, go back and try the **467F** one instead.

Did it detect your drive?\n
## human\n\ni tried all and none worked\n
## assistant\n\nThe user has tried loading the IRST drivers but none of them worked to detect the NVMe drive. Let me think about what else could be going on:

1. The driver version might not be compatible with the specific ZBook 2025 model - newer ZBooks might have newer Intel generations requiring different drivers
2. There could be a BIOS issue
3. The drive itself could have an issue
4. They might need a different/newer driver version

I should ask for more specific information about their ZBook model to find the correct drivers, and also suggest some other troubleshooting steps:

1. Get the exact ZBook model number to find the right drivers
2. Try the latest Intel RST drivers directly from Intel (for newer generations)
3. Check if the drive is visible in BIOS
4. Try HP Cloud Recovery Tool

Let me search for more specific information about HP ZBook 2025 models and what drivers they need.Let's figure this out. A few questions:

**1. What's your exact ZBook model?**
Look on the bottom of the laptop for the product number (format like: 6Bxxx or similar)

**2. Can you see the drive in BIOS?**
- Boot into BIOS (F10 at startup)
- Check under **Advanced → System Information** or **Boot Options**
- Does it list your NVMe drive anywhere?

**3. What processor generation?**
If it's a 2024/2025 ZBook, it might have Intel 14th gen (Meteor Lake) or newer, which needs the very latest drivers.

---

## Try the newest Intel driver

The HP driver (sp146929) might be too old. Download the latest directly from Intel:

On your Mac:
```bash
# Download latest Intel RST (v20.x for 12th-15th gen)
curl -L -o rst.zip "https://downloadmirror.intel.com/825092/SetupRST.exe"

# Extract it
7z x SetupRST.exe -o./rst_new
```

Look for the **VMD** folder inside the extracted files — specifically the file `iaStorVD.inf`. Copy that whole VMD folder to your USB and try loading from there.

---

## Alternative: HP Cloud Recovery

If nothing works, HP's Cloud Recovery tool creates a USB with all the correct drivers baked in. You'd need access to a Windows PC to run it though.

What's the model number? That'll help narrow down exactly which driver you need.\n