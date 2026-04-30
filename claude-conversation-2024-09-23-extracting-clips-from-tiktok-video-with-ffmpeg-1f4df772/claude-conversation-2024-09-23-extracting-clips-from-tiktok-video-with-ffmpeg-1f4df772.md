---
kind: note
id: claude-conversation-2024-09-23-extracting-clips-from-tiktok-video-with-ffmpeg-1f4df772
updatedAt: 1727090044922
createdAt: 1727090029160
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 1f4df772-fa19-45e6-b246-c3d8671a27c4
created_at: 2024-09-23T11:13:49.160658Z
updated_at: 2024-09-23T11:14:04.922673Z
title: "Extracting Clips from TikTok Video with FFmpeg"
---

# Extracting Clips from TikTok Video with FFmpeg

## Metadata

- Claude conversation UUID: `1f4df772-fa19-45e6-b246-c3d8671a27c4`
- Created: `2024-09-23T11:13:49.160658Z`
- Updated: `2024-09-23T11:14:04.922673Z`
- Message count: 2
- Transcript chars extracted: 3859

## Quick excerpt

Here's a modified version of the PowerShell script that doesn't use the `file` command in the concat list: <antThinking>This script is a good candidate for an artifact. It's substantial, self-contained, and likely to be reused or modified. It's not just explanatory content but a practical tool. I'll create a new artifact for this PowerShell script.</antThinking> <antArtifact identifier="ffmpeg-clip-extraction-script" type="application/vnd.ant.code" language="powershell" title="PowerShell Script:

## Transcript

## human\n\n# Extract individual clips
ffmpeg -i tiktokvideo.mp4 -ss 00:39 -to 00:55 -c copy clip1.mp4
ffmpeg -i tiktokvideo.mp4 -ss 01:07 -to 01:20 -c copy clip2.mp4
ffmpeg -i tiktokvideo.mp4 -ss 04:03 -to 04:18 -c copy clip3.mp4
ffmpeg -i tiktokvideo.mp4 -ss 01:23 -to 01:40 -c copy clip4.mp4
ffmpeg -i tiktokvideo.mp4 -ss 01:45 -to 02:18 -c copy clip5.mp4
ffmpeg -i tiktokvideo.mp4 -ss 02:18 -to 02:39 -c copy clip6.mp4
ffmpeg -i tiktokvideo.mp4 -ss 04:20 -to 04:49 -c copy clip7.mp4
ffmpeg -i tiktokvideo.mp4 -ss 05:58 -to 06:18 -c copy clip8.mp4
ffmpeg -i tiktokvideo.mp4 -ss 06:18 -to 06:59 -c copy clip9.mp4
ffmpeg -i tiktokvideo.mp4 -ss 06:59 -to 07:27 -c copy clip10.mp4
ffmpeg -i tiktokvideo.mp4 -ss 07:27 -to 07:53 -c copy clip11.mp4
ffmpeg -i tiktokvideo.mp4 -ss 07:53 -to 08:27 -c copy clip12.mp4
# Create a text file listing the clips for concatenation
$concatList = @(
    "file 'clip1.mp4'"
    "file 'clip2.mp4'"
    "file 'clip3.mp4'"
    "file 'clip4.mp4'"
    "file 'clip5.mp4'"
    "file 'clip6.mp4'"
    "file 'clip7.mp4'"
    "file 'clip8.mp4'"
    "file 'clip9.mp4'"
    "file 'clip10.mp4'"
    "file 'clip11.mp4'"
    "file 'clip12.mp4'"
)
# Save the list to a text file
$concatList | Out-File -Encoding utf8 concat.txt
# Merge the clips using the concat text file
ffmpeg -f concat -safe 0 -i concat.txt -c copy final_output.mp4
 

same powershell script but without using file command\n
## assistant\n\nHere's a modified version of the PowerShell script that doesn't use the `file` command in the concat list:

<antThinking>This script is a good candidate for an artifact. It's substantial, self-contained, and likely to be reused or modified. It's not just explanatory content but a practical tool. I'll create a new artifact for this PowerShell script.</antThinking>

<antArtifact identifier="ffmpeg-clip-extraction-script" type="application/vnd.ant.code" language="powershell" title="PowerShell Script: Extract and Merge Video Clips">
# Extract individual clips
ffmpeg -i tiktokvideo.mp4 -ss 00:39 -to 00:55 -c copy clip1.mp4
ffmpeg -i tiktokvideo.mp4 -ss 01:07 -to 01:20 -c copy clip2.mp4
ffmpeg -i tiktokvideo.mp4 -ss 04:03 -to 04:18 -c copy clip3.mp4
ffmpeg -i tiktokvideo.mp4 -ss 01:23 -to 01:40 -c copy clip4.mp4
ffmpeg -i tiktokvideo.mp4 -ss 01:45 -to 02:18 -c copy clip5.mp4
ffmpeg -i tiktokvideo.mp4 -ss 02:18 -to 02:39 -c copy clip6.mp4
ffmpeg -i tiktokvideo.mp4 -ss 04:20 -to 04:49 -c copy clip7.mp4
ffmpeg -i tiktokvideo.mp4 -ss 05:58 -to 06:18 -c copy clip8.mp4
ffmpeg -i tiktokvideo.mp4 -ss 06:18 -to 06:59 -c copy clip9.mp4
ffmpeg -i tiktokvideo.mp4 -ss 06:59 -to 07:27 -c copy clip10.mp4
ffmpeg -i tiktokvideo.mp4 -ss 07:27 -to 07:53 -c copy clip11.mp4
ffmpeg -i tiktokvideo.mp4 -ss 07:53 -to 08:27 -c copy clip12.mp4

# Create a text file listing the clips for concatenation
$concatList = @(
    "clip1.mp4"
    "clip2.mp4"
    "clip3.mp4"
    "clip4.mp4"
    "clip5.mp4"
    "clip6.mp4"
    "clip7.mp4"
    "clip8.mp4"
    "clip9.mp4"
    "clip10.mp4"
    "clip11.mp4"
    "clip12.mp4"
)

# Save the list to a text file
$concatList | Out-File -Encoding utf8 concat.txt

# Merge the clips using the concat demuxer
ffmpeg -f concat -safe 0 -i concat.txt -c copy final_output.mp4
</antArtifact>

In this modified version:

1. The clip extraction commands remain the same.

2. The `$concatList` array now contains just the filenames without the `file` command.

3. The `Out-File` command remains the same, creating a `concat.txt` file with the list of clip filenames.

4. The final `ffmpeg` command uses the concat demuxer as before, which will read the filenames from `concat.txt`.

This script will work with FFmpeg's concat demuxer without using the `file` command in the input file. The concat demuxer will treat each line in the input file as a filename to be concatenated.

Would you like me to explain any part of this script in more detail?\n