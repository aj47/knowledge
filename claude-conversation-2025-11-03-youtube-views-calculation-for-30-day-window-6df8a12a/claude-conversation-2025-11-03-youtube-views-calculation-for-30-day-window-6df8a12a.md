---
kind: note
id: claude-conversation-2025-11-03-youtube-views-calculation-for-30-day-window-6df8a12a
updatedAt: 1762209674186
createdAt: 1762209532158
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 6df8a12a-fc40-47e7-b06d-6c873a902cbe
created_at: 2025-11-03T22:38:52.158040Z
updated_at: 2025-11-03T22:41:14.186824Z
title: "YouTube views calculation for 30-day window"
---

# YouTube views calculation for 30-day window

## Metadata

- Claude conversation UUID: `6df8a12a-fc40-47e7-b06d-6c873a902cbe`
- Created: `2025-11-03T22:38:52.158040Z`
- Updated: `2025-11-03T22:41:14.186824Z`
- Message count: 4
- Transcript chars extracted: 10032

## Quick excerpt

I'll conduct deep research on calculating YouTube views in the first 30 days after publish date for videos published in the last 90 days. ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your current device yet. ``` ``` This block is not supported on your cu

## Transcript

## human\n\nhow can i calculate views in the first 30 days after publish date, from video that we published in the last 90 days on youtube

do deep research\n
## assistant\n\nI'll conduct deep research on calculating YouTube views in the first 30 days after publish date for videos published in the last 90 days.
```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```


```
This block is not supported on your current device yet.
```

Based on my comprehensive research, I can now provide you with detailed guidance on calculating views in the first 30 days after publish date for videos published in the last 90 days on YouTube.

## Comprehensive Guide: Calculating First 30-Day Views for Recently Published YouTube Videos

### **The Challenge**

YouTube's Analytics API doesn't have a built-in feature to automatically calculate views from the publish date, as the API requires explicit start and end dates in YYYY-MM-DD format. However, there's a proven workflow to achieve this goal.

### **Solution Overview: Three-Step Approach**

#### **Step 1: Get Video List with Publish Dates (YouTube Data API v3)**

Use the YouTube Data API v3 to retrieve video metadata, including the publishedAt date from the snippet part. This provides the publish date for each video.

**Key API Call:**
```
GET https://www.googleapis.com/youtube/v3/videos
Parameters:
- part: snippet
- id: video_id (or use search/playlistItems to get all videos)
```

The publishedAt field returns timestamps in ISO 8601 format with UTC timezone (indicated by the 'Z' suffix).

#### **Step 2: Filter Videos Published in Last 90 Days**

After retrieving video data, filter programmatically:
- Calculate the date 90 days ago from today
- Keep only videos where `publishedAt` is within the last 90 days

You can also use the publishedAfter and publishedBefore parameters in the search endpoint to filter videos by publish date range.

#### **Step 3: Calculate First 30 Days Views (YouTube Analytics API)**

For each video, use the YouTube Analytics API's reports.query method with startDate and endDate parameters to specify the time period.

**For each video:**
- startDate = video's publishedAt date
- endDate = publishedAt date + 30 days (or today, if the video is less than 30 days old)

Use the metrics parameter to specify 'views' and optionally include dimensions like 'day' to see daily breakdowns.

### **Implementation Methods**

#### **Method 1: YouTube Analytics Groups (Manual)**

Create a YouTube Analytics group containing up to 500 videos published in your desired timeframe, then generate reports for that group. However, this requires manual group creation and doesn't automatically calculate from publish date.

#### **Method 2: Programmatic Approach (Recommended)**

**Python Implementation Pattern:**

```python
# Step 1: Get videos from Data API
videos = get_channel_videos(channel_id, published_after="90_days_ago")

# Step 2: For each video
for video in videos:
    publish_date = video['publishedAt']
    video_id = video['id']
    
    # Calculate date range (first 30 days)
    start_date = publish_date
    end_date = min(publish_date + 30_days, today)
    
    # Step 3: Query Analytics API
    analytics_response = youtube_analytics.reports().query(
        ids='channel==MINE',
        startDate=start_date,
        endDate=end_date,
        metrics='views',
        filters=f'video=={video_id}'
    ).execute()
```

YouTube provides official Python code samples for the Analytics API that demonstrate how to structure these queries with start dates, end dates, metrics, and filters.

### **Important Considerations**

**API Authentication:**
The YouTube Analytics API requires OAuth 2.0 authentication and only allows you to access analytics for your own channel - service accounts are not supported.

**Data Freshness:**
YouTube Analytics data typically updates daily, with a lag of 1-2 days, so the most recent data may not be immediately available.

**Quota Management:**
Each Analytics API request counts as one unit of your API usage quota. For many videos, consider batching requests or implementing caching.

**Historical Data:**
A practical workaround is to set the start date to a very early date (like January 1, 2000) if you want lifetime stats from publish date.

**Daily Breakdown Option:**
To get daily views for the first 30 days, use dimensions='video,day' in your Analytics API query, which returns view counts broken down by day for each video.

### **Alternative Approaches**

**Looker Studio/Data Studio:**
You can create calculated fields in Looker Studio using YouTube Analytics data sources to determine publish dates and calculate metrics for specific time periods after publication.

**Third-Party Tools:**
Tools like Social Blade, TubeBuddy, and VidIQ provide advanced analytics features that may simplify this type of analysis.

### **Complete Workflow Summary**

1. **Authenticate** with both YouTube Data API v3 and YouTube Analytics API v2
2. **Retrieve** all videos from your channel using Data API
3. **Filter** to keep only videos published in the last 90 days
4. **Loop** through each video:
   - Extract publish date
   - Calculate 30-day window (or up to today if less than 30 days old)
   - Query Analytics API for views in that date range
5. **Aggregate** and analyze the results

This approach gives you complete control and accuracy for tracking early performance metrics across your recent video catalog.\n
## human\n\nis it possible to do in youtube studio\n
## assistant\n\nYes, you can do this in YouTube Studio, but with some limitations. Let me explain what's possible and what's not:

## **What You CAN Do in YouTube Studio**

### **1. Filter Videos by Publish Date**

YouTube's Advanced Mode in Analytics allows you to apply content filters such as "filter by videos published in the last 30 days" or use other publication date filters.

**How to access:**
- Go to YouTube Studio → Analytics
- Click "Advanced Mode" (top right)
- Use the content filters to select videos published in the last 90 days

### **2. View Performance Metrics**

In Advanced Mode, you can customize reports by changing the date range, selecting specific videos or groups, and choosing which metrics to display.

You'll see metrics like:
- Views
- Watch time
- Average view duration
- Likes, comments, shares

### **3. Use Special Reports**

YouTube Studio offers special reports including "first 24 hours of video performance" which shows early momentum for individual videos.

### **4. Sort and Search Videos**

The updated Analytics interface includes sorting controls for publish date and duration, plus title-based search to find specific videos quickly.

## **What You CANNOT Do in YouTube Studio**

### **The Main Limitation: No Automatic "First 30 Days" Calculation**

**YouTube Studio does NOT have a built-in feature to automatically calculate views for the first 30 days after each video's individual publish date.**

Here's why:
- The date selector in YouTube Studio changes the time period for viewing activity, not relative to each video's publish date
- If you set the date range to "last 90 days," you'll see ALL views that occurred in the last 90 days, regardless of when videos were published
- There's no setting that says "show me views from day 0-30 after publish for each video"

## **Workarounds in YouTube Studio**

### **Option 1: Manual Video-by-Video Analysis**

1. Go to Analytics → Content tab
2. Click on each individual video
3. Look at the video's analytics
4. The timeline includes publish dates for videos, allowing you to see how videos performed around their publish dates
5. Manually adjust the date range to cover the first 30 days after that video's publish date
6. Record the views for each video

**Problem:** This is extremely time-consuming if you have many videos.

### **Option 2: Use YouTube Analytics Groups**

Groups are customizable collections of up to 500 videos that let you view their combined performance.

**Steps:**
1. In YouTube Studio Analytics, click "Groups" (top navigation)
2. Create a new video group
3. Manually select videos published in the last 90 days
4. View aggregated metrics for this group

**Limitations:**
- Still doesn't calculate "first 30 days" relative to each video's publish date
- Only shows aggregated data for the group
- Requires manual group creation and updates

### **Option 3: Export Data for External Analysis**

You can export data by clicking "Export current view" and choosing your preferred file format (CSV, Excel, etc.).

**Then:**
1. Export video performance data
2. Export it with daily breakdowns
3. Use Excel, Google Sheets, or other tools to:
   - Filter videos by publish date (last 90 days)
   - Calculate views for days 0-30 after each publish date
   - Create pivot tables or formulas

**Limitations:**
Downloaded reports are limited to 500 rows, though you can use the YouTube Reporting API for more than 500 rows of data.

## **The Bottom Line**

**YouTube Studio alone cannot automatically calculate "first 30 days views" for multiple videos published in the last 90 days.** 

Your best options are:

1. **For a few videos:** Manually check each video's analytics and adjust the date range
2. **For comprehensive analysis:** Export the data and analyze it in Excel/Sheets
3. **For automated, ongoing tracking:** Use the YouTube APIs (Data API + Analytics API) with custom scripts

The YouTube Studio interface is designed for viewing performance during calendar date ranges, not relative time periods from each video's individual publish date. This is why many creators and analysts use either data exports or API-based solutions for this specific type of analysis.\n