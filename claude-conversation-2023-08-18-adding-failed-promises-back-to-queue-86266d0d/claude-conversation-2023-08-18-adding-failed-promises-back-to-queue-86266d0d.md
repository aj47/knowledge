---
kind: note
id: claude-conversation-2023-08-18-adding-failed-promises-back-to-queue-86266d0d
updatedAt: 1692393122809
createdAt: 1692392929765
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 86266d0d-01fc-4fcd-be9f-be13ae4b4635
created_at: 2023-08-18T21:08:49.765923Z
updated_at: 2023-08-18T21:12:02.809755Z
title: "Adding Failed Promises Back to Queue"
---

# Adding Failed Promises Back to Queue

## Metadata

- Claude conversation UUID: `86266d0d-01fc-4fcd-be9f-be13ae4b4635`
- Created: `2023-08-18T21:08:49.765923Z`
- Updated: `2023-08-18T21:12:02.809755Z`
- Message count: 6
- Transcript chars extracted: 5055

## Quick excerpt

Here is how you can add the failed request back onto the end of the promise list: for (let chunkIndex = 0; chunkIndex < chunkLength; chunkIndex++) { // Process SERP API if (performNonScreenshotChunks()) { let promises = serpAPIChunks[chunkIndex].map((promise: () => any) => promise() ); console.log(`SERP CHUNK ${chunkIndex}`); setProcessProgress(`Rendering chunk ${chunkIndex}/${chunkLength} ...`); let responses = await Promise.allSettled(promises); let failedPromises = []; for (const response of 

## Transcript

## human\n\nhelp me edit the following code to add the request back onto the end of the promise list if it fails:

        for (let chunkIndex = 0; chunkIndex < chunkLength; chunkIndex++) {
          // Process SERP API
          if (performNonScreenshotChunks()) {
            let promises = serpAPIChunks[chunkIndex].map((promise: () => any) =>
              promise()
            );
    
            console.log(`SERP CHUNK ${chunkIndex}`);
            setProcessProgress(`Rendering chunk ${chunkIndex}/${chunkLength} ...`);
            let responses = await Promise.allSettled(promises);
            for (const response of responses) {
              const responseValue =
                response.status === "fulfilled" && (await response.value.json());
              if (!responseValue) {
                console.log("===FAILED PROMISE===");
                console.log(JSON.stringify(response));
                continue;
              }\n
## assistant\n\nHere is how you can add the failed request back onto the end of the promise list:

        for (let chunkIndex = 0; chunkIndex < chunkLength; chunkIndex++) {
          // Process SERP API
          if (performNonScreenshotChunks()) {
            let promises = serpAPIChunks[chunkIndex].map((promise: () => any) =>
              promise()
            );
    
            console.log(`SERP CHUNK ${chunkIndex}`);
            setProcessProgress(`Rendering chunk ${chunkIndex}/${chunkLength} ...`);
            let responses = await Promise.allSettled(promises);
            let failedPromises = [];
            for (const response of responses) {
              const responseValue = 
                response.status === "fulfilled" && (await response.value.json());
              if (!responseValue) {
                console.log("===FAILED PROMISE===");
                console.log(JSON.stringify(response));
                failedPromises.push(response.promise); 
                continue;
              }

              // existing code
            }
            
            // Add failed promises back to the end
            promises.push(...failedPromises);
          }
        }

The key changes:

1. Create an array to store failed promises: `let failedPromises = [];`

2. When a promise fails, add it to the failedPromises array: 

`failedPromises.push(response.promise);`

3. After the loop, concatenate the failed promises onto the end of the promises array:

`promises.push(...failedPromises);`

This will add the failed requests back onto the end of the promise list to be retried on the next iteration.\n
## human\n\nserpAPIChunks[chunkIndex + 1].push(response.promise);\n
## assistant\n\nYou're right, pushing the failed promises onto the next chunk's array is better than concatenating them onto the end of the current chunk's array.

Here is how you could do that:

        for (let chunkIndex = 0; chunkIndex < chunkLength; chunkIndex++) {

          // existing code
          
          let responses = await Promise.allSettled(promises);
          
          for (const response of responses) {
            if (!responseValue) {
              console.log("===FAILED PROMISE===");
              
              // Add failed promise to next chunk
              serpAPIChunks[chunkIndex + 1].push(response.promise); 
              continue; 
            }
            
            // existing code
          }
        }

The key change is pushing the failed promise onto the next chunk's array rather than the current chunk's array:

`serpAPIChunks[chunkIndex + 1].push(response.promise);`

This will retry the failed requests in the next chunk, rather than immediately retrying them in the current chunk. Let me know if this approach makes sense!\n
## human\n\nProperty 'promise' does not exist on type 'PromiseSettledResult<any>'.Property 'promise' does not exist on type 'PromiseRejectedResult'.ts(2339)\n
## assistant\n\nYou're right, my previous code examples had an issue - the PromiseSettledResult object returned by Promise.allSettled() does not have a 'promise' property. 

Here is how we can fix it to retry the failed promises correctly:

        for (let chunkIndex = 0; chunkIndex < chunkLength; chunkIndex++) {
        
          // existing code

          let promises = serpAPIChunks[chunkIndex].map((promise) => promise());
          
          let responses = await Promise.allSettled(promises);
          
          let failedPromises = [];
          
          for (const response of responses) {
            if (response.status === "rejected") {
              failedPromises.push(response.reason);
            }
          }
          
          serpAPIChunks[chunkIndex + 1].push(...failedPromises);

        }

The key changes:

- Save the original promises in a `promises` variable before awaiting

- When handling failures, get the rejected `reason` from the response

- Push the rejected reasons into the `failedPromises` array 

- Push the array of rejected reasons into the next chunk

This allows retrying the failed promise functions in the next chunk, without relying on a 'promise' property that doesn't exist.

Let me know if this makes sense!\n