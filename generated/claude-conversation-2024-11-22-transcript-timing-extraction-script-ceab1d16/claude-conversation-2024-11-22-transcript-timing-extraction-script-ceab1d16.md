---
kind: note
id: claude-conversation-2024-11-22-transcript-timing-extraction-script-ceab1d16
updatedAt: 1732277373517
createdAt: 1732276658424
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: ceab1d16-1893-4c22-a19b-00054c6588d8
created_at: 2024-11-22T11:57:38.424044Z
updated_at: 2024-11-22T12:09:33.517082Z
title: "Transcript Timing Extraction Script"
---

# Transcript Timing Extraction Script

## Metadata

- Claude conversation UUID: `ceab1d16-1893-4c22-a19b-00054c6588d8`
- Created: `2024-11-22T11:57:38.424044Z`
- Updated: `2024-11-22T12:09:33.517082Z`
- Message count: 4
- Transcript chars extracted: 3035

## Quick excerpt

I

## Transcript

## human\n\nwrite a python script that takes a txt file with transcripts in this format:

0:00:08.519,0:00:11.480
do you want to get the
0:00:11.599,0:00:17.160
timing okay yes we do that you can just\n
## assistant\n\nI\n
## human\n\nwrite a python script that takes a txt file with transcripts in this format:
```
0:00:08.519,0:00:11.480
do you want to get the
0:00:11.599,0:00:17.160
timing okay yes we do that you can just
```
and gives it in a three column csv with start time and transcript text in the first two columns\n
## assistant\n\n<antArtifact identifier="transcript-converter" type="application/vnd.ant.code" language="python" title="Transcript to CSV Converter">
import csv
from datetime import datetime

def convert_timestamp(timestamp):
    """Convert timestamp from HH:MM:SS.mmm format to total seconds"""
    time_obj = datetime.strptime(timestamp, '%H:%M:%S.%f')
    return time_obj.hour * 3600 + time_obj.minute * 60 + time_obj.second + time_obj.microsecond/1000000

def process_transcript(input_file, output_file):
    """Process transcript file and convert to CSV format"""
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    # Process lines in pairs
    transcript_data = []
    i = 0
    while i < len(lines):
        # Skip empty lines
        if not lines[i].strip():
            i += 1
            continue
            
        # Process timestamp line
        if ',' in lines[i]:
            timestamp = lines[i].strip().split(',')[0]  # Get start timestamp
            
            # Get corresponding text (next line)
            if i + 1 < len(lines):
                text = lines[i + 1].strip()
                start_seconds = convert_timestamp(timestamp)
                transcript_data.append([start_seconds, text])
                i += 2
            else:
                i += 1
        else:
            i += 1
    
    # Sort by start time
    transcript_data.sort(key=lambda x: x[0])
    
    # Write to CSV
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerow(['Start Time (seconds)', 'Text'])
        writer.writerows(transcript_data)

if __name__ == "__main__":
    input_file = "transcript.txt"  # Change this to your input file name
    output_file = "transcript.csv"  # Change this to your desired output file name
    process_transcript(input_file, output_file)
</antArtifact>

This script:
1. Takes an input transcript file in the format you specified
2. Converts timestamps to seconds for easier processing
3. Creates a CSV with two columns: start time (in seconds) and transcript text
4. Sorts entries by start time

To use it:
1. Save your transcript as a text file (e.g., "transcript.txt")
2. Update the input_file and output_file names in the script if needed
3. Run the script

The output CSV will have headers "Start Time (seconds)" and "Text", with each row containing the start time in seconds and the corresponding transcript text.

Would you like me to modify anything about how it processes the timestamps or formats the output?\n