---
kind: note
id: claude-conversation-2025-02-27-warp-terminal-launches-on-windows-981c56bc
updatedAt: 1740684163543
createdAt: 1740684067495
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 981c56bc-ccbf-455a-ab7a-c7b2ee99696b
created_at: 2025-02-27T19:21:07.495801Z
updated_at: 2025-02-27T19:22:43.543478Z
title: "Warp Terminal Launches on Windows"
---

# Warp Terminal Launches on Windows

## Metadata

- Claude conversation UUID: `981c56bc-ccbf-455a-ab7a-c7b2ee99696b`
- Created: `2025-02-27T19:21:07.495801Z`
- Updated: `2025-02-27T19:22:43.543478Z`
- Message count: 6
- Transcript chars extracted: 7165

## Quick excerpt

I'll draft two professional responses to both emails: ## Reply to Jessica Wang Subject: RE: Warp on Windows Launch - Content Update Hi Jessica, Thanks for sharing the exciting news about Warp launching on Windows! Yes, I'm still planning to create content to support the launch. In fact, I've already drafted a video demonstrating Warp's capabilities, particularly highlighting the AI agent functionality powered by Claude 3.7 Sonnet. The video showcases two impressive use cases: 1. Using Warp to ef

## Transcript

## human\n\nreply to these emails:
**Jessica Wang**
3:36 AM (7 hours ago)
to me, partnerships@warp.dev
Hi Arash,  We just launched Warp on Windows today. Are you still planning on making content around Warp to help support this launch?  https://x.com/warpdotdev/status/1894749298560045526 Thanks, Jess from Warp
**Arash Joobandi** <arash@appricot.io>
8:26 AM (2 hours ago)
to Jessica
Hey Jessica! Thanks for following up! My apologies for not making the go live on the 26th as we originally aimed, I got very sick the past couple of days and was unable to do anything productive.  Let me know if it's ok to still go ahead with this collab.  - I can do the hook "This terminal is a game changer". - I couldn't think of a great complex project off the top of my head but i will try have a play around today and get back to you AJ

updating that i made a draft video. this is the transcript:

```
All right so one benefit that this agent will have over some others is that it has access to my
file system so I can like ask questions and get it to do stuff on my file system and one thing that
I have noticed is like I've been using a lot of these projects that have the python library
transformers and they download like hugging face models and I'm not really sure where they get
stored and some of them are like over one two gigabytes and they take up quite a bit of space
so I'm going to try to see if warp can find those files and delete them so we're going to press
command i to go into agent mode now we can use voice with fn on mac to talk and now we can use voice
to talk to the agent and get it to do stuff so determine where the hugging face transformers
models are stored on this machine list them out and then ask me if I want to delete them before
going ahead and deleting them we can see that warp has actually found the hugging face models cache
where 31 gigabytes of disk space is actually being used by these following models a lot of them are
models that don't even use actually all of them I've probably installed them for like one project
one time so I'm going to just say delete them delete all these models to free up space all
right now I want to try something really complex I'm not sure if warp will be able to handle this
let alone any agent but um all right we're in a repository where there are some python files that
do the processing of video files they break up the video into blocks of silences and non silences
the user then can label these non-silence blocks and eventually export each of the same labels
into new files new videos now what I want to do is set up a automated testing script to
go through this whole process and time it so then we can iterate on it and optimize it improving
the speeds analyze the repository come up with a plan and then build this testing framework
all right let's see what it does it's really fast so it's using clode 3.7 on it and you know when
it's just running quick commands it doesn't need to use the reasoning so yeah really fast
okay and it's found this test.mp4 which I've placed there for it to use as a test I'm just going to
say I need to create a performance test script that will measure the time taken I go we actually got
something that's crazy all right let's go warp we actually got something working
it ran the test it ran the silences all right so that was just step one now analyze the scripts
responsible for silence detection and exporting and see if we can find any ways to optimize them
all right here we have a report now of potential optimizations we can make
reduce ffmpeg process goals as two separate sub-processes implement the easiest changes with
biggest results and then run the performance test to see what difference it made damn and
there we go after about I don't know it did take like 25 minutes but we did improve the time by
significantly that's like half the time I think before it was average time of 1.5 seconds
but after the optimizations we have 0.8 seconds very impressive warp terminal yeah it looks very
powerful especially powered by the sonnet 3.7 so yeah it's now available on windows you guys should
check it out

```\n
## assistant\n\nI'll draft two professional responses to both emails:

## Reply to Jessica Wang

Subject: RE: Warp on Windows Launch - Content Update

Hi Jessica,

Thanks for sharing the exciting news about Warp launching on Windows! Yes, I'm still planning to create content to support the launch. In fact, I've already drafted a video demonstrating Warp's capabilities, particularly highlighting the AI agent functionality powered by Claude 3.7 Sonnet.

The video showcases two impressive use cases:
1. Using Warp to efficiently locate and manage Hugging Face model files that were consuming 31GB of disk space
2. Creating and running a performance testing framework for a video processing application, which resulted in cutting processing time nearly in half

I believe this content effectively demonstrates Warp's powerful capabilities to potential users. I can finalize and publish this soon - would you like me to make any specific adjustments before I do?

Best regards,
Arash

## Reply to Arash

Hi Arash,

I really appreciate you sharing the draft transcript! This looks excellent - you've highlighted some genuinely impressive capabilities that will showcase Warp's value to users.

The examples you've chosen are perfect:
- The Hugging Face models cleanup demonstrates practical utility for developers
- The performance testing framework shows more advanced capabilities that will appeal to power users

The narrative arc works well, starting with a simpler use case and progressing to something more complex. Your enthusiasm comes through clearly, which will help engage viewers.

Let me know when you plan to publish, and I'll be happy to coordinate with our team for maximum amplification of your content.

Thanks for your hard work despite not feeling well!

Jessica\n
## human\n\nit is a reply to jessica. make it more concise\n
## assistant\n\nSubject: RE: Warp on Windows Launch - Content Update

Hi Jessica,

Yes, I'm still planning to create content for the Warp Windows launch! I've already drafted a video showcasing:

1. Using Warp's AI agent to find and manage Hugging Face models (31GB disk cleanup)
2. Building a performance testing framework that cut processing time in half

I've included the full transcript in my previous email. Let me know if you'd like any changes before I finalize and publish.

Best,
Arash\n
## human\n\ni dont provide transcript but i will provide link to the video mentioned from me playing around that it is a rough draft and more editing is needed. also that instagram limits videos to 3mins so i will have to reduce bunch and also i intend to add a hook as agreed\n
## assistant\n\nSubject: RE: Warp on Windows Launch - Content Update

Hi Jessica,

Yes, I'm still planning to create content for the Warp Windows launch! I've made a rough draft video demonstrating the AI agent capabilities.

I'll need to edit it down since Instagram limits videos to 3 minutes. I also plan to add the "This terminal is a game changer" hook as we agreed.

Once finished, I'll share a link with you. Let me know if you need any specific points highlighted in the final version.

Best,
Arash\n