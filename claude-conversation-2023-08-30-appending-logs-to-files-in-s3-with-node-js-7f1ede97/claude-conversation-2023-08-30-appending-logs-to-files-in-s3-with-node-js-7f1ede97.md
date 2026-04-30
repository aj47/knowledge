---
kind: note
id: claude-conversation-2023-08-30-appending-logs-to-files-in-s3-with-node-js-7f1ede97
updatedAt: 1693378780918
createdAt: 1693378767421
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 7f1ede97-4ec2-43d9-9f76-cd8ef4eebd3c
created_at: 2023-08-30T06:59:27.421813Z
updated_at: 2023-08-30T06:59:40.918970Z
title: "Appending Logs to Files in S3 with Node.js"
---

# Appending Logs to Files in S3 with Node.js

## Metadata

- Claude conversation UUID: `7f1ede97-4ec2-43d9-9f76-cd8ef4eebd3c`
- Created: `2023-08-30T06:59:27.421813Z`
- Updated: `2023-08-30T06:59:40.918970Z`
- Message count: 2
- Transcript chars extracted: 1557

## Quick excerpt

Here is a Node.js endpoint that can be used in a serverless project to append logs to a file in S3 or create the file if it doesn't exist: ```js const AWS = require('aws-sdk'); const s3 = new AWS.S3(); exports.handler = async (event) => { const fileName = event.fileName; const logDump = event.logDump; try { const params = { Bucket: 'my-bucket', Key: fileName }; const data = await s3.getObject(params).promise(); // File exists, append log dump const updatedData = data.Body.toString() + logDump; a

## Transcript

## human\n\nwrite a node.js endpoint to be used in a serverless project. the endpoint takes two strings. one is a file name and the other is a dump of logs. the endpoint should look for the file name in an s3 bucket if the file exists it appends the log dump to the end of the file otherwise it creates the file with the logs as the files contents\n
## assistant\n\nHere is a Node.js endpoint that can be used in a serverless project to append logs to a file in S3 or create the file if it doesn't exist:

```js
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {

  const fileName = event.fileName;
  const logDump = event.logDump;

  try {
    const params = {
      Bucket: 'my-bucket', 
      Key: fileName
    };

    const data = await s3.getObject(params).promise();

    // File exists, append log dump
    const updatedData = data.Body.toString() + logDump; 

    await s3.putObject({
      Bucket: 'my-bucket',
      Key: fileName,
      Body: updatedData
    }).promise();

  } catch (err) {
    // File doesn't exist, create new file
    if (err.code === 'NoSuchKey') {

      await s3.putObject({
        Bucket: 'my-bucket',
        Key: fileName, 
        Body: logDump
      }).promise();

    } else {
      throw err; 
    }
  }

  return { status: 'success' };

};
```

To use it, you would need to pass the file name and log dump as parameters in the request to the endpoint. The code checks if the file exists in S3 already, appends the logs if so, or creates a new file if not.

Let me know if you have any other questions!\n