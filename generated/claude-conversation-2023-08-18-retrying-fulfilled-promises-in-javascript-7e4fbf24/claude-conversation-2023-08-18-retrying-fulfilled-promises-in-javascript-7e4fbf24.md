---
kind: note
id: claude-conversation-2023-08-18-retrying-fulfilled-promises-in-javascript-7e4fbf24
updatedAt: 1692393702943
createdAt: 1692393694002
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 7e4fbf24-c17d-4c35-879b-45a7862e3a1a
created_at: 2023-08-18T21:21:34.002583Z
updated_at: 2023-08-18T21:21:42.943916Z
title: "Retrying Fulfilled Promises in JavaScript"
---

# Retrying Fulfilled Promises in JavaScript

## Metadata

- Claude conversation UUID: `7e4fbf24-c17d-4c35-879b-45a7862e3a1a`
- Created: `2023-08-18T21:21:34.002583Z`
- Updated: `2023-08-18T21:21:42.943916Z`
- Message count: 2
- Transcript chars extracted: 1848

## Quick excerpt

Here is one way to modify the code to continue into the next block if all promises are fulfilled: let retryCount = 3; let unfulfilled = true; while (retryCount > 0 && unfulfilled) { let responses = await Promise.allSettled(promises); let allFulfilled = true; for (const response of responses) { if (response.status !== "fulfilled") { allFulfilled = false; break; } } if (!allFulfilled) { console.log("===FAILED PROMISE==="); for (const response of responses) { if (response.status !== "fulfilled") { 

## Transcript

## human\n\nmodify this code to continue into the next block if all promises are fulfilled:

            let retryCount = 3;
            let unfulfilled = true;
            while (retryCount > 0 && unfulfilled) {
              let responses = await Promise.allSettled(promises);
              for (const response of responses) {
                const responseValue = response.status === "fulfilled";
                if (!responseValue) {
                  console.log("===FAILED PROMISE===");
                  console.log(JSON.stringify(response));
                  retryCount --;
                  continue;
                }
              }
            }\n
## assistant\n\nHere is one way to modify the code to continue into the next block if all promises are fulfilled:

            let retryCount = 3;
            let unfulfilled = true; 
            while (retryCount > 0 && unfulfilled) {
              let responses = await Promise.allSettled(promises);
              let allFulfilled = true;
              for (const response of responses) {
                if (response.status !== "fulfilled") {
                  allFulfilled = false;
                  break;
                }
              }
              if (!allFulfilled) {
                console.log("===FAILED PROMISE===");
                for (const response of responses) {
                  if (response.status !== "fulfilled") {
                    console.log(JSON.stringify(response));
                  }
                }
                retryCount--;
                continue;
              }
              unfulfilled = false;
            }

The key changes:

- Track `allFulfilled` separately to check if all promises succeeded
- Only log failed promises 
- Set `unfulfilled = false` to continue out of loop if all succeeded

Let me know if this helps explain how to continue on fulfilled promises!\n