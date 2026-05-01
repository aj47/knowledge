---
kind: note
id: claude-conversation-2025-01-29-analyze-lambda-cold-start-times-with-cloudwatch-logs-insights-f4008fc2
updatedAt: 1738120436914
createdAt: 1738120300553
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: f4008fc2-f3b9-47c5-95b7-92808427e3fa
created_at: 2025-01-29T03:11:40.553503Z
updated_at: 2025-01-29T03:13:56.914764Z
title: "Analyze Lambda Cold Start Times with CloudWatch Logs Insights"
---

# Analyze Lambda Cold Start Times with CloudWatch Logs Insights

## Metadata

- Claude conversation UUID: `f4008fc2-f3b9-47c5-95b7-92808427e3fa`
- Created: `2025-01-29T03:11:40.553503Z`
- Updated: `2025-01-29T03:13:56.914764Z`
- Message count: 8
- Transcript chars extracted: 7570

## Quick excerpt

I'll help you create a CloudWatch Logs Insights query to analyze cold start times across log groups. <antThinking>This is a good candidate for an artifact as it's a reusable piece of code that could be expanded upon and would benefit from proper formatting and syntax highlighting.</antThinking> <antArtifact identifier="cloudwatch-query" type="application/vnd.ant.code" language="sql" title="CloudWatch Logs Insights Query for Lambda Cold Start Analysis"> # Create fields for cold start detection an

## Transcript

## human\n\ni want to write a cloudwatch log insight function to calculate average cold start time for each log group\n
## assistant\n\nI'll help you create a CloudWatch Logs Insights query to analyze cold start times across log groups.

<antThinking>This is a good candidate for an artifact as it's a reusable piece of code that could be expanded upon and would benefit from proper formatting and syntax highlighting.</antThinking>

<antArtifact identifier="cloudwatch-query" type="application/vnd.ant.code" language="sql" title="CloudWatch Logs Insights Query for Lambda Cold Start Analysis">
# Create fields for cold start detection and duration
fields @timestamp, @logStream,
# Extract request ID to correlate initialization with invocation
parse @message "RequestId: *" as requestId,
# Look for initialization messages
isInitialization: @message like /(?i)INIT_START|INIT_END/,
# Parse duration if present
parse @message "Duration: * ms" as duration,
# Extract cold start duration
parse @message "Init Duration: * ms" as initDuration
| filter ispresent(requestId)
# Create separate records for init start and end
| stats 
    min(@timestamp) as start_time,
    max(@timestamp) as end_time,
    avg(coalesce(parse_float(initDuration), 0)) as avg_cold_start_duration
    by @logGroup
| where avg_cold_start_duration > 0
| sort avg_cold_start_duration desc
</antArtifact>

This query will:

1. Parse relevant fields from the log messages including:
   - Request IDs to correlate initialization events
   - Initialization markers (INIT_START/INIT_END)
   - Duration and Init Duration values

2. Calculate for each log group:
   - Average cold start duration
   - First and last occurrence timestamps

3. Filter out groups with no cold starts and sort by duration

The results will show you:
- Which functions have the longest cold start times
- Average cold start duration per function
- Timestamp range of the analysis

To use this query:
1. Open CloudWatch Logs Insights
2. Select the relevant Lambda function log groups
3. Paste the query
4. Adjust the time range as needed

Would you like me to modify the query to include additional metrics or change the analysis approach?\n
## human\n\nunexpected symbol found @ at line 4 and position 6\n
## assistant\n\nAh, I see the issue. Let me fix the syntax - CloudWatch Logs Insights doesn't use the '@' symbol for field references except in predefined fields.

<antThinking>We should update the existing artifact with the corrected syntax for CloudWatch Logs Insights.</antThinking>

<antArtifact identifier="cloudwatch-query" type="application/vnd.ant.code" language="sql" title="CloudWatch Logs Insights Query for Lambda Cold Start Analysis">
fields @timestamp, @logStream,
# Extract request ID to correlate initialization with invocation
parse message "RequestId: *" as requestId,
# Look for initialization messages
isInitialization: message like /(?i)INIT_START|INIT_END/,
# Parse duration if present
parse message "Duration: * ms" as duration,
# Extract cold start duration
parse message "Init Duration: * ms" as initDuration
| filter ispresent(requestId)
# Create separate records for init start and end
| stats 
    min(@timestamp) as start_time,
    max(@timestamp) as end_time,
    avg(coalesce(parse_float(initDuration), 0)) as avg_cold_start_duration
    by logGroup
| where avg_cold_start_duration > 0
| sort avg_cold_start_duration desc
</antArtifact>

I've made these corrections:
1. Removed '@' from message references (changed `@message` to `message`)
2. Changed `@logGroup` to `logGroup` in the group by clause
3. Kept `@timestamp` since it's a predefined field that requires the '@' symbol

This should now work without the syntax error. Would you like me to explain any part of the query in more detail?\n
## human\n\nunexpected symbol found message at line 3 and position 6\n
## assistant\n\nAh, I see the issue. In CloudWatch Logs Insights, we need to use `@message` - I was incorrect in removing the @ symbol. Let me fix the query.

<antThinking>We should update the existing artifact with the correct syntax for CloudWatch Logs Insights fields.</antThinking>

<antArtifact identifier="cloudwatch-query" type="application/vnd.ant.code" language="sql" title="CloudWatch Logs Insights Query for Lambda Cold Start Analysis">
fields @timestamp, @logStream,
# Extract request ID to correlate initialization with invocation
parse @message "RequestId: *" as requestId,
# Look for initialization messages
filter @message like /(?i)INIT_START|INIT_END/
| parse @message "Duration: * ms" as duration
| parse @message "Init Duration: * ms" as initDuration
| filter ispresent(requestId)
| stats 
    min(@timestamp) as start_time,
    max(@timestamp) as end_time,
    avg(coalesce(parse_float(initDuration), 0)) as avg_cold_start_duration
    by @logGroup
| where avg_cold_start_duration > 0
| sort avg_cold_start_duration desc
</antArtifact>

I've made these corrections:
1. Kept all `@message` references (they are required)
2. Removed the custom field `isInitialization` and replaced it with a direct filter
3. Simplified the query structure to be more linear
4. Kept `@logGroup` with the @ symbol

This should now work correctly. Do you want me to explain any part of the query or make any adjustments to what we're measuring?\n
## human\n\ni want to write a cloudwatch log insight function to calculate average cold start time for each log group\n
## assistant\n\nI'll help you create a CloudWatch Logs Insights query to analyze cold start times across log groups.

<antThinking>This is a good case for a code artifact as it's a reusable query that may need to be modified and could be useful as a reference. The query will include multiple parts and comments explaining each section.</antThinking>

<antArtifact identifier="coldstart-analysis" type="application/vnd.ant.code" language="sql" title="CloudWatch Logs Insights Query for Lambda Cold Start Analysis">
# First, filter for REPORT logs which contain duration info
filter @type = "REPORT"
| parse @message /Duration: (?<duration>.*?) ms.*Memory Used: (?<memory>.*?) MB.*Init Duration: (?<initDuration>.*?) ms/
# Only include logs with Init Duration (cold starts)
| filter ispresent(initDuration)
| parse @logStream "[^/]+/(?<functionVersion>[$LATEST|0-9]+)"
# Calculate total cold start time (Init + Duration)
| eval coldStartTime = duration + initDuration
# Group by log group and calculate statistics
| stats 
    avg(coldStartTime) as avgColdStartTime,
    avg(initDuration) as avgInitDuration,
    avg(duration) as avgDuration,
    count(*) as coldStarts,
    avg(memory) as avgMemoryUsed
    by @logGroup
# Sort by average cold start time
| sort avgColdStartTime desc
# Format numbers to be more readable
| display avgColdStartTime as 'Avg Cold Start (ms)',
         avgInitDuration as 'Avg Init (ms)',
         avgDuration as 'Avg Duration (ms)',
         coldStarts as 'Number of Cold Starts',
         avgMemoryUsed as 'Avg Memory (MB)'
</antArtifact>

This query will:
1. Filter for REPORT logs and parse out the Duration, Memory Used, and Init Duration
2. Only include logs that have an Init Duration (indicating a cold start)
3. Parse the function version from the log stream
4. Calculate the total cold start time (Init Duration + Duration)
5. Group by log group and calculate key statistics
6. Sort results by average cold start time
7. Format the output with readable column names

The results will show you:
- Average total cold start time (initialization + execution)
- Average initialization time
- Average execution time
- Number of cold starts
- Average memory used

Would you like me to modify the query to focus on specific metrics or add additional analysis?\n