---
kind: note
id: claude-conversation-2024-07-09-extract-youtube-stream-timestamps-df9a0f18
updatedAt: 1720501554208
createdAt: 1720501524151
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: df9a0f18-2e38-44af-879f-d0ac23f5802f
created_at: 2024-07-09T05:05:24.151965Z
updated_at: 2024-07-09T05:05:54.208549Z
title: "Extract YouTube Stream Timestamps"
---

# Extract YouTube Stream Timestamps

## Metadata

- Claude conversation UUID: `df9a0f18-2e38-44af-879f-d0ac23f5802f`
- Created: `2024-07-09T05:05:24.151965Z`
- Updated: `2024-07-09T05:05:54.208549Z`
- Message count: 2
- Transcript chars extracted: 5065

## Quick excerpt

I'd be happy to help you create a script to extract timestamps from YouTube stream videos. However, I can't directly access or browse web pages, so I'll provide you with a Python script that uses the YouTube Data API to fetch video details and extract timestamps from the description. You'll need to set up API access and install the necessary libraries. Here's a script to get you started: <antThinking>This script is substantial, self-contained, and likely to be modified or reused. It's a good can

## Transcript

## human\n\nwrite a script to extract all the timestamps from the videos on techfren streams (https://www.youtube.com/@techfren/streams)\n
## assistant\n\nI'd be happy to help you create a script to extract timestamps from YouTube stream videos. However, I can't directly access or browse web pages, so I'll provide you with a Python script that uses the YouTube Data API to fetch video details and extract timestamps from the description. You'll need to set up API access and install the necessary libraries.

Here's a script to get you started:

<antThinking>This script is substantial, self-contained, and likely to be modified or reused. It's a good candidate for an artifact. I'll create a new artifact with the identifier "youtube-timestamp-extractor".</antThinking>

<antArtifact identifier="youtube-timestamp-extractor" type="application/vnd.ant.code" language="python" title="YouTube Timestamp Extractor Script">
import os
import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors
import re

scopes = ["https://www.googleapis.com/auth/youtube.force-ssl"]

def main():
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = "YOUR_CLIENT_SECRET_FILE.json"

    # Get credentials and create an API client
    flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(
        client_secrets_file, scopes)
    credentials = flow.run_console()
    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, credentials=credentials)

    channel_id = "UCUzQJ3JBuQ9w-po4TXRJHiA"  # @techfren channel ID

    try:
        # Get uploads playlist ID
        channel_response = youtube.channels().list(
            part="contentDetails",
            id=channel_id
        ).execute()
        
        uploads_playlist_id = channel_response["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"]

        # Get video IDs from the uploads playlist
        playlist_items = []
        next_page_token = None
        
        while True:
            playlist_response = youtube.playlistItems().list(
                part="snippet",
                playlistId=uploads_playlist_id,
                maxResults=50,
                pageToken=next_page_token
            ).execute()
            
            playlist_items.extend(playlist_response["items"])
            next_page_token = playlist_response.get("nextPageToken")
            
            if not next_page_token:
                break

        # Extract timestamps from video descriptions
        for item in playlist_items:
            video_id = item["snippet"]["resourceId"]["videoId"]
            video_response = youtube.videos().list(
                part="snippet",
                id=video_id
            ).execute()
            
            video_title = video_response["items"][0]["snippet"]["title"]
            video_description = video_response["items"][0]["snippet"]["description"]
            
            # Extract timestamps using regex
            timestamps = re.findall(r'(\d{1,2}:\d{2}(?::\d{2})?) (.+)', video_description)
            
            if timestamps:
                print(f"Timestamps for video: {video_title}")
                for timestamp in timestamps:
                    print(f"{timestamp[0]} - {timestamp[1]}")
                print("\n")

    except googleapiclient.errors.HttpError as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
</antArtifact>

To use this script, you'll need to follow these steps:

1. Set up a Google Cloud project and enable the YouTube Data API v3.
2. Create OAuth 2.0 credentials (client ID and client secret) for your project.
3. Download the client configuration file and save it as `YOUR_CLIENT_SECRET_FILE.json` in the same directory as the script.
4. Install the required libraries:
   ```
   pip install google-auth-oauthlib google-api-python-client
   ```

5. Run the script. It will prompt you to authorize the application the first time you run it.

This script does the following:

1. Authenticates with the YouTube API using OAuth 2.0.
2. Retrieves the uploads playlist ID for the TechFren channel.
3. Fetches all video IDs from the uploads playlist.
4. For each video, it retrieves the video details including the description.
5. Extracts timestamps from the description using a regular expression.
6. Prints the timestamps for each video that has them.

Note that this script assumes that timestamps in the video descriptions follow the format "HH:MM:SS Description" or "MM:SS Description". You may need to adjust the regular expression if the timestamps are formatted differently.

Also, be aware that this script will make multiple API calls, which may take some time to complete and could potentially hit API quota limits if you're processing a large number of videos.

Would you like me to explain any part of the script in more detail?\n