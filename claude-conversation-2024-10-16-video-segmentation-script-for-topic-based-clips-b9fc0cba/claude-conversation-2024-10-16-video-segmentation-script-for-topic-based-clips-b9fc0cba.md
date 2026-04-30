---
kind: note
id: claude-conversation-2024-10-16-video-segmentation-script-for-topic-based-clips-b9fc0cba
updatedAt: 1729077212974
createdAt: 1729077193886
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: b9fc0cba-f218-4284-8d13-4ed36c357a71
created_at: 2024-10-16T11:13:13.886469Z
updated_at: 2024-10-16T11:13:32.974815Z
title: "Video Segmentation Script for Topic-Based Clips"
---

# Video Segmentation Script for Topic-Based Clips

## Metadata

- Claude conversation UUID: `b9fc0cba-f218-4284-8d13-4ed36c357a71`
- Created: `2024-10-16T11:13:13.886469Z`
- Updated: `2024-10-16T11:13:32.974815Z`
- Message count: 2
- Transcript chars extracted: 4364

## Quick excerpt

I'll help you create a shell script that processes a video based on the JSON segments and creates topic-based video clips using ffmpeg. <antThinking>This is a good case for creating an artifact as it's a substantial shell script that users might want to modify or reuse, and it's a self-contained tool that can be used outside of our conversation.</antThinking> <antArtifact identifier="video-splitter-script" type="application/vnd.ant.code" language="bash" title="Video Topic Splitter Script"> #!/bi

## Transcript

## human\n\ncreate a shell script that takes a video and a json file like attached. and uses ffmpeg to make smaller videos under the name of each topic. all topics segments are combined to make one video for each topic as final output in a folder named video-ai-output\n
## assistant\n\nI'll help you create a shell script that processes a video based on the JSON segments and creates topic-based video clips using ffmpeg.

<antThinking>This is a good case for creating an artifact as it's a substantial shell script that users might want to modify or reuse, and it's a self-contained tool that can be used outside of our conversation.</antThinking>

<antArtifact identifier="video-splitter-script" type="application/vnd.ant.code" language="bash" title="Video Topic Splitter Script">
#!/bin/bash

# Check if required arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <input_video> <segments_json>"
    exit 1
fi

input_video="$1"
segments_json="$2"
output_dir="video-ai-output"

# Create output directory if it doesn't exist
mkdir -p "$output_dir"

# Create a temporary directory for intermediate files
mkdir -p "$output_dir/temp"

# Function to convert timestamp to seconds
timestamp_to_seconds() {
    timestamp=$1
    hours=$(echo $timestamp | cut -d':' -f1)
    minutes=$(echo $timestamp | cut -d':' -f2)
    seconds=$(echo $timestamp | cut -d':' -f3)
    echo "($hours * 3600) + ($minutes * 60) + $seconds" | bc
}

# Parse JSON and create segments
echo "Parsing JSON and creating segments..."
python3 -c '
import json
import sys
from collections import defaultdict

with open(sys.argv[1]) as f:
    data = json.load(f)
    segments = json.loads(data["segments"][0])
    
    # Group segments by topic
    topic_segments = defaultdict(list)
    for segment in segments:
        topic_segments[segment["Topic"]].append({
            "start": segment["startTime"],
            "end": segment["endTime"]
        })
    
    # Create concat files for each topic
    for topic, segments in topic_segments.items():
        with open(f"video-ai-output/temp/{topic.replace(" ", "_")}_segments.txt", "w") as f:
            for segment in segments:
                f.write(f"file \'{topic.replace(" ", "_")}_{segment["start"]}-{segment["end"]}.mp4\'\n")
        
        # Create ffmpeg commands file
        with open(f"video-ai-output/temp/{topic.replace(" ", "_")}_commands.sh", "w") as f:
            for segment in segments:
                f.write(f"ffmpeg -i \"{sys.argv[2]}\" -ss {segment["start"]} -to {segment["end"]} -c copy \"video-ai-output/temp/{topic.replace(" ", "_")}_{segment["start"]}-{segment["end"]}.mp4\"\n")
' "$segments_json" "$input_video"

# Execute the cutting commands for each topic
for command_file in "$output_dir"/temp/*_commands.sh; do
    chmod +x "$command_file"
    bash "$command_file"
done

# Concatenate segments for each topic
for concat_file in "$output_dir"/temp/*_segments.txt; do
    topic_name=$(basename "$concat_file" _segments.txt)
    ffmpeg -f concat -safe 0 -i "$concat_file" -c copy "$output_dir/${topic_name}.mp4"
done

# Clean up temporary files
rm -rf "$output_dir/temp"

echo "Processing complete! Videos are available in the $output_dir directory"
</antArtifact>

This script does the following:

1. Takes two command-line arguments: the input video file and the JSON segments file
2. Creates an output directory called "video-ai-output"
3. Uses Python to parse the JSON and create:
   - A list of segments grouped by topic
   - FFmpeg commands for cutting each segment
   - Concat files for joining segments of the same topic
4. Executes FFmpeg commands to cut the video into segments
5. Concatenates all segments of the same topic into single videos
6. Cleans up temporary files

To use the script:

1. Save it as `split_video_by_topics.sh`
2. Make it executable:
```bash
chmod +x split_video_by_topics.sh
```

3. Run it:
```bash
./split_video_by_topics.sh input_video.mp4 segments.json
```

The script requires:
- FFmpeg installed on your system
- Python 3
- The `bc` command (usually pre-installed on most Unix-like systems)

The output will be a series of video files in the `video-ai-output` directory, one for each topic, containing all segments of that topic concatenated together.

Make sure your input video and JSON file are in the same directory as the script, or provide full paths to them when running the script.\n