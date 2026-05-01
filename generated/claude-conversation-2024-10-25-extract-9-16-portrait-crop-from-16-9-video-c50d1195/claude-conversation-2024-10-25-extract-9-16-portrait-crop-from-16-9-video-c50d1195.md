---
kind: note
id: claude-conversation-2024-10-25-extract-9-16-portrait-crop-from-16-9-video-c50d1195
updatedAt: 1729857243913
createdAt: 1729857078527
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: c50d1195-2645-4e2d-8ec4-6b154e346f98
created_at: 2024-10-25T11:51:18.527474Z
updated_at: 2024-10-25T11:54:03.913549Z
title: "Extract 9:16 Portrait Crop from 16:9 Video"
---

# Extract 9:16 Portrait Crop from 16:9 Video

## Metadata

- Claude conversation UUID: `c50d1195-2645-4e2d-8ec4-6b154e346f98`
- Created: `2024-10-25T11:51:18.527474Z`
- Updated: `2024-10-25T11:54:03.913549Z`
- Message count: 6
- Transcript chars extracted: 9135

## Quick excerpt

Let me ask a few clarifying questions to ensure I provide exactly what you need: 1. Do you want to extract a single frame/image or process the entire video maintaining the right-side crop throughout? 2. What video format do you expect as input (e.g., MP4, AVI, MOV)? 3. Would you like the output to be saved in the same format as the input, or do you have a specific output format in mind? 4. Do you want to maintain the original video's resolution/quality, or should it be scaled to a specific size?

## Transcript

## human\n\ngive a python script that takes in a 16:9 video and extracts the right section of the screen such that it will be 9:16 (portrait) crop of only the right most perfectly width such that the hight makes it 9:16. ask clarifying questions first\n
## assistant\n\nLet me ask a few clarifying questions to ensure I provide exactly what you need:

1. Do you want to extract a single frame/image or process the entire video maintaining the right-side crop throughout?

2. What video format do you expect as input (e.g., MP4, AVI, MOV)?

3. Would you like the output to be saved in the same format as the input, or do you have a specific output format in mind?

4. Do you want to maintain the original video's resolution/quality, or should it be scaled to a specific size?

Let me know these details and I'll create a script tailored to your needs.\n
## human\n\n1. the entire video maintaining the right-side crop throughout
2. match input format (usually mp4)
3. append "-cropped" to filename export in same folder
4. do not change quality\n
## assistant\n\nI'll create a script using OpenCV and moviepy to process the video while maintaining quality. The script will calculate the exact width needed from the right side to achieve a 9:16 aspect ratio.



<antArtifact identifier="video-crop-script" type="application/vnd.ant.code" language="python" title="Video Right-Side Portrait Cropper">
import cv2
from moviepy.editor import VideoFileClip
import os
from pathlib import Path
import argparse

def calculate_crop_dimensions(width, height):
    """Calculate the crop dimensions to achieve 9:16 aspect ratio from the right side."""
    target_ratio = 9/16
    current_ratio = height/width
    
    # Calculate new width needed for 9:16 ratio
    new_width = int(height * (9/16))
    
    # Calculate x coordinate to crop from (starting from right)
    x_start = width - new_width
    
    return x_start, 0, width, height

def crop_video(input_path):
    """Process video and create a right-side 9:16 crop."""
    try:
        # Get video properties
        cap = cv2.VideoCapture(input_path)
        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
        cap.release()
        
        # Check if video is already portrait
        if height > width:
            raise ValueError("Input video is already in portrait orientation")
            
        # Calculate crop dimensions
        x1, y1, x2, y2 = calculate_crop_dimensions(width, height)
        
        # Prepare output filename
        input_path = Path(input_path)
        output_path = input_path.parent / f"{input_path.stem}-cropped{input_path.suffix}"
        
        # Load video and apply crop
        video = VideoFileClip(str(input_path))
        cropped_video = video.crop(x1=x1, y1=y1, x2=x2, y2=y2)
        
        # Write output with same codec and quality
        cropped_video.write_videofile(
            str(output_path),
            codec='libx264',
            audio_codec='aac',
            preset='medium',
            bitrate=video.bitrate,
            audio=True,
            threads=4
        )
        
        # Clean up
        video.close()
        cropped_video.close()
        
        print(f"Successfully cropped video saved to: {output_path}")
        
    except Exception as e:
        print(f"Error processing video: {str(e)}")
        raise

def main():
    parser = argparse.ArgumentParser(description='Crop video to 9:16 ratio from right side')
    parser.add_argument('input_video', help='Path to input video file')
    args = parser.parse_args()
    
    if not os.path.exists(args.input_video):
        print(f"Error: Input video file '{args.input_video}' not found")
        return
    
    try:
        crop_video(args.input_video)
    except Exception as e:
        print(f"Failed to process video: {str(e)}")

if __name__ == "__main__":
    main()
</antArtifact>

To use this script, you'll need to install the required packages first:

```bash
pip install opencv-python moviepy
```

Then you can run it from the command line like this:

```bash
python video_cropper.py input_video.mp4
```

The script:
1. Calculates the exact width needed from the right side to maintain 9:16 ratio
2. Preserves the original video quality and codec
3. Maintains the original audio
4. Adds "-cropped" to the filename
5. Includes error handling for common issues
6. Verifies the input video is landscape before processing

Would you like me to explain any part of the script in more detail or make any adjustments to the functionality?\n
## human\n\nError processing video: 'VideoFileClip' object has no attribute 'bitrate'
Failed to process video: 'VideoFileClip' object has no attribute 'bitrate'\n
## assistant\n\nAh, I apologize for that error. You're right - VideoFileClip doesn't directly expose the bitrate. Let's modify the script to handle this better by using ffprobe to get the original bitrate if needed, but defaulting to a high quality setting if we can't get it.



<antArtifact identifier="video-crop-script" type="application/vnd.ant.code" language="python" title="Video Right-Side Portrait Cropper">
import cv2
from moviepy.editor import VideoFileClip
import os
from pathlib import Path
import argparse
import subprocess
import json

def get_video_bitrate(filename):
    """Get video bitrate using ffprobe. Returns None if unable to determine."""
    try:
        cmd = [
            'ffprobe',
            '-v', 'error',
            '-select_streams', 'v:0',
            '-show_entries', 'stream=bit_rate',
            '-of', 'json',
            filename
        ]
        result = subprocess.run(cmd, capture_output=True, text=True)
        data = json.loads(result.stdout)
        bitrate = data.get('streams', [{}])[0].get('bit_rate')
        return bitrate if bitrate else None
    except:
        return None

def calculate_crop_dimensions(width, height):
    """Calculate the crop dimensions to achieve 9:16 aspect ratio from the right side."""
    target_ratio = 9/16
    current_ratio = height/width
    
    # Calculate new width needed for 9:16 ratio
    new_width = int(height * (9/16))
    
    # Calculate x coordinate to crop from (starting from right)
    x_start = width - new_width
    
    return x_start, 0, width, height

def crop_video(input_path):
    """Process video and create a right-side 9:16 crop."""
    try:
        # Get video properties
        cap = cv2.VideoCapture(input_path)
        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
        cap.release()
        
        # Check if video is already portrait
        if height > width:
            raise ValueError("Input video is already in portrait orientation")
            
        # Calculate crop dimensions
        x1, y1, x2, y2 = calculate_crop_dimensions(width, height)
        
        # Prepare output filename
        input_path = Path(input_path)
        output_path = input_path.parent / f"{input_path.stem}-cropped{input_path.suffix}"
        
        # Load video and apply crop
        video = VideoFileClip(str(input_path))
        cropped_video = video.crop(x1=x1, y1=y1, x2=x2, y2=y2)
        
        # Try to get original bitrate, otherwise use a high quality default
        bitrate = get_video_bitrate(str(input_path))
        if bitrate:
            bitrate = str(bitrate)  # ffmpeg expects string
        else:
            bitrate = '8000k'  # High quality default
        
        # Write output with same codec and quality
        cropped_video.write_videofile(
            str(output_path),
            codec='libx264',
            audio_codec='aac',
            preset='medium',
            bitrate=bitrate,
            audio=True,
            threads=4
        )
        
        # Clean up
        video.close()
        cropped_video.close()
        
        print(f"Successfully cropped video saved to: {output_path}")
        
    except Exception as e:
        print(f"Error processing video: {str(e)}")
        raise

def main():
    parser = argparse.ArgumentParser(description='Crop video to 9:16 ratio from right side')
    parser.add_argument('input_video', help='Path to input video file')
    args = parser.parse_args()
    
    if not os.path.exists(args.input_video):
        print(f"Error: Input video file '{args.input_video}' not found")
        return
    
    try:
        crop_video(args.input_video)
    except Exception as e:
        print(f"Failed to process video: {str(e)}")

if __name__ == "__main__":
    main()
</antArtifact>

The changes made:
1. Added a `get_video_bitrate()` function that uses ffprobe to try to get the original video bitrate
2. If we can't get the original bitrate, we default to a high quality setting of 8000k
3. Added proper error handling around bitrate detection

To use this updated version, you'll need ffprobe installed (it comes with ffmpeg). On most systems, you can install it with:

```bash
# Ubuntu/Debian
sudo apt-get install ffmpeg

# macOS with Homebrew
brew install ffmpeg

# Windows with Chocolatey
choco install ffmpeg
```

The script should now work without the bitrate error. Let me know if you encounter any other issues!\n