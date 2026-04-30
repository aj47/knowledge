---
kind: note
id: claude-conversation-2025-01-29-analyzing-aws-lambda-cold-starts-and-performance-492fc6a3
updatedAt: 1738183655766
createdAt: 1738183624827
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 492fc6a3-a8f6-4bff-8fee-9584056dcf1b
created_at: 2025-01-29T20:47:04.827378Z
updated_at: 2025-01-29T20:47:35.766657Z
title: "Analyzing AWS Lambda Cold Starts and Performance"
---

# Analyzing AWS Lambda Cold Starts and Performance

## Metadata

- Claude conversation UUID: `492fc6a3-a8f6-4bff-8fee-9584056dcf1b`
- Created: `2025-01-29T20:47:04.827378Z`
- Updated: `2025-01-29T20:47:35.766657Z`
- Message count: 2
- Transcript chars extracted: 6997

## Quick excerpt

I'll create a Node.js script that analyzes CloudWatch logs for Lambda functions to gather performance metrics about cold starts and execution times. <antThinking>This is a good candidate for an artifact as it's a complete, reusable script that processes data and generates analysis. It's substantial enough to warrant separation from the conversation.</antThinking> <antArtifact identifier="cloudwatch-analysis" type="application/vnd.ant.code" language="javascript" title="AWS CloudWatch Lambda Analy

## Transcript

## human\n\nwrite a nodejs script that uses aws sdk to gather data from cloudwatch logs for every endpoint getting info like cold start duration, ratio of how many cold starts vs non cold starts, average run time duration too\n
## assistant\n\nI'll create a Node.js script that analyzes CloudWatch logs for Lambda functions to gather performance metrics about cold starts and execution times.

<antThinking>This is a good candidate for an artifact as it's a complete, reusable script that processes data and generates analysis. It's substantial enough to warrant separation from the conversation.</antThinking>

<antArtifact identifier="cloudwatch-analysis" type="application/vnd.ant.code" language="javascript" title="AWS CloudWatch Lambda Analysis Script">
const { CloudWatchLogsClient, FilterLogEventsCommand } = require('@aws-sdk/client-cloudwatch-logs');
const moment = require('moment');

// Initialize CloudWatch Logs client
const client = new CloudWatchLogsClient({ region: 'us-east-1' }); // Change region as needed

async function analyzeLambdaMetrics(logGroupName, startTime = '1h') {
    const endTime = new Date();
    const startTimeDate = moment().subtract(startTime).toDate();

    const metrics = {
        totalInvocations: 0,
        coldStarts: 0,
        totalDuration: 0,
        coldStartDurations: [],
        warmStartDurations: [],
        errors: 0
    };

    try {
        const params = {
            logGroupName,
            startTime: startTimeDate.getTime(),
            endTime: endTime.getTime(),
            filterPattern: '[timestamp, requestId, event, ...]'
        };

        // Create a map to track request IDs and their cold start status
        const requestMap = new Map();

        let nextToken;
        do {
            if (nextToken) params.nextToken = nextToken;
            
            const command = new FilterLogEventsCommand(params);
            const response = await client.send(command);
            
            for (const event of response.events || []) {
                const message = event.message;
                
                // Extract request ID
                const requestIdMatch = message.match(/RequestId: ([a-f0-9-]+)/i);
                if (!requestIdMatch) continue;
                
                const requestId = requestIdMatch[1];
                
                // Check for cold start
                if (message.includes('Init Duration:')) {
                    metrics.coldStarts++;
                    const initDurationMatch = message.match(/Init Duration: (\d+(\.\d+)?)/);
                    if (initDurationMatch) {
                        metrics.coldStartDurations.push(parseFloat(initDurationMatch[1]));
                    }
                    requestMap.set(requestId, 'cold');
                }
                
                // Extract duration for all invocations
                const durationMatch = message.match(/Duration: (\d+(\.\d+)?)/);
                if (durationMatch) {
                    metrics.totalInvocations++;
                    const duration = parseFloat(durationMatch[1]);
                    metrics.totalDuration += duration;
                    
                    if (requestMap.get(requestId) === 'cold') {
                        metrics.coldStartDurations[metrics.coldStartDurations.length - 1] += duration;
                    } else {
                        metrics.warmStartDurations.push(duration);
                    }
                }
                
                // Check for errors
                if (message.includes('Error:') || message.includes('Task timed out')) {
                    metrics.errors++;
                }
            }
            
            nextToken = response.nextToken;
        } while (nextToken);

        // Calculate averages and ratios
        const averageColdStartDuration = metrics.coldStartDurations.length > 0 
            ? metrics.coldStartDurations.reduce((a, b) => a + b) / metrics.coldStartDurations.length 
            : 0;
        
        const averageWarmStartDuration = metrics.warmStartDurations.length > 0
            ? metrics.warmStartDurations.reduce((a, b) => a + b) / metrics.warmStartDurations.length
            : 0;
        
        const coldStartRatio = metrics.totalInvocations > 0 
            ? (metrics.coldStarts / metrics.totalInvocations) * 100 
            : 0;

        return {
            totalInvocations: metrics.totalInvocations,
            coldStarts: metrics.coldStarts,
            coldStartRatio: `${coldStartRatio.toFixed(2)}%`,
            averageColdStartDuration: `${averageColdStartDuration.toFixed(2)}ms`,
            averageWarmStartDuration: `${averageWarmStartDuration.toFixed(2)}ms`,
            averageOverallDuration: `${(metrics.totalDuration / metrics.totalInvocations).toFixed(2)}ms`,
            errorRate: `${((metrics.errors / metrics.totalInvocations) * 100).toFixed(2)}%`,
            timeRange: `${moment(startTimeDate).format('YYYY-MM-DD HH:mm:ss')} to ${moment(endTime).format('YYYY-MM-DD HH:mm:ss')}`
        };
    } catch (error) {
        console.error('Error analyzing CloudWatch logs:', error);
        throw error;
    }
}

// Example usage
async function main() {
    try {
        // Analyze multiple Lambda functions
        const logGroups = [
            '/aws/lambda/api-endpoint1',
            '/aws/lambda/api-endpoint2'
        ];

        for (const logGroup of logGroups) {
            console.log(`\nAnalyzing metrics for ${logGroup}:`);
            const metrics = await analyzeLambdaMetrics(logGroup, '24h'); // Last 24 hours
            console.table(metrics);
        }
    } catch (error) {
        console.error('Error in main:', error);
    }
}

main();
</antArtifact>

This script provides comprehensive analysis of Lambda function performance metrics. Here's what it does:

1. Connects to CloudWatch Logs using the AWS SDK v3
2. Analyzes log entries to extract key metrics:
   - Total number of invocations
   - Number of cold starts
   - Cold start ratio
   - Average duration for cold starts (including initialization)
   - Average duration for warm starts
   - Overall average duration
   - Error rate

3. Features:
   - Supports analyzing multiple Lambda functions
   - Configurable time range (defaults to last hour)
   - Handles pagination of CloudWatch logs
   - Tracks request IDs to accurately pair cold starts with their full duration
   - Calculates error rates

To use this script, you'll need to:

1. Install dependencies:
```bash
npm install @aws-sdk/client-cloudwatch-logs moment
```

2. Configure AWS credentials (either through environment variables, AWS CLI configuration, or IAM role)

3. Modify the region and log group names as needed

4. Run the script:
```bash
node cloudwatch-analysis.js
```

Would you like me to add any additional metrics or modify the analysis in any way? For example, I could add:
- Percentile calculations for durations
- Memory usage analysis
- Cost estimation
- More detailed error categorization\n