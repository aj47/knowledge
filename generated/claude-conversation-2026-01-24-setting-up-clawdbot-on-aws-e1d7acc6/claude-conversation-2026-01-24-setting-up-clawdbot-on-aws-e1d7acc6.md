---
kind: note
id: claude-conversation-2026-01-24-setting-up-clawdbot-on-aws-e1d7acc6
updatedAt: 1769231809877
createdAt: 1769231668417
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: e1d7acc6-36d2-4935-83af-c230ab29bda0
created_at: 2026-01-24T05:14:28.417000Z
updated_at: 2026-01-24T05:16:49.877932Z
title: "Setting up Clawdbot on AWS"
---

# Setting up Clawdbot on AWS

## Metadata

- Claude conversation UUID: `e1d7acc6-36d2-4935-83af-c230ab29bda0`
- Created: `2026-01-24T05:14:28.417000Z`
- Updated: `2026-01-24T05:16:49.877932Z`
- Message count: 6
- Transcript chars extracted: 15740

## Claude summary

**Conversation Overview**

The user shared a video transcript about Clawdbot, an open-source personal AI assistant, and requested social media copy for TikTok, Instagram, and X (Twitter) to cross-promote their existing YouTube tutorial. The user identified as AJ, a content creator and software engineer who contributes to the Clawdbot project and is active in the "Friends of the Crustations" Discord community. The transcript detailed a tutorial showing how to deploy Clawdbot on AWS free tier in under 5 minutes using a one-line installation command.

The user emphasized key features of Clawdbot including full system access, integration with multiple messaging platforms (WhatsApp, Discord, Telegram), open-source nature, and innovative use cases like connecting Meta Ray-Ban glasses with WhatsApp for real-time price checking while shopping. Claude created platform-specific copy highlighting different aspects: TikTok focusing on technical capabilities, Instagram emphasizing the setup process and community builds, and X posts featuring the price-checking use case as a hook.

The user then requested revisions with specific constraints: remove YouTube link mentions, reduce hype language on TikTok, and use unique vocabulary across platforms to capture different audiences. Claude adjusted the copy accordingly, using more subdued language for TikTok ("pretty wild" instead of "just changed everything"), varied technical terminology across platforms ("deployed" vs "set up" vs "install"), and different descriptive words ("digging into," "slept-on," "rigging") to appeal to distinct social media audiences while maintaining the core value propositions of the open-source AI assistant.

## Quick excerpt

The user wants me to create social media copy for TikTok, Instagram, and X (Twitter) to promote their YouTube video about Clawdbot. They've already posted the YouTube video and now want to cross-promote on other platforms. Let me review the key details from the transcript: - Clawdbot is an open source, free personal AI assistant - Can be set up on cloud (AWS) or local machine - Has full system access - Works with skills and plugins library - Can interface through WhatsApp, Discord, Telegram - Co

## Transcript

## human\n\n1
00:00:00,000 --> 00:00:01,840
I've been so into Claudebot lately.

2
00:00:01,839 --> 00:00:04,560
It's so easy to set up on the cloud or on your local machine.

3
00:00:04,560 --> 00:00:06,160
It has full system access.

4
00:00:06,160 --> 00:00:10,720
It works with the whole skills and plugins library, completely open source and free.

5
00:00:10,720 --> 00:00:14,960
And you can interface with it through any channel, WhatsApp, Discord, Telegram, etc.

6
00:00:15,200 --> 00:00:17,280
People are building so many cool things.

7
00:00:17,280 --> 00:00:20,560
Like they connect it to X, Gmail, their health stats.

8
00:00:20,560 --> 00:00:23,520
They talk to it through Telegram, their Discord.

9
00:00:23,520 --> 00:00:25,600
This is going to be my favorite use case though.

10
00:00:25,600 --> 00:00:30,080
With the Meta Ray bands, which have native WhatsApp support, you can talk to Claudebot.

11
00:00:30,080 --> 00:00:39,600
And Buddy Harry, when he's at the store, when he sees something overpriced with his glasses, he can take a picture, send it to Claudebot, and say, what's the price on Amazon for this?

12
00:00:39,600 --> 00:00:41,600
And if it's cheaper, add it to my cart.

13
00:00:41,600 --> 00:00:44,640
Anyway, it's so easy to set up just one-line quick start.

14
00:00:44,640 --> 00:00:47,520
So I'm going to show you in the rest of this video how to set it up.

15
00:00:47,519 --> 00:00:52,560
I'm going to be doing it on AWS because they have a very generous free tier to set up a VM.

16
00:00:52,560 --> 00:00:55,919
You could also run it on your local machine if you're ballsy enough.

17
00:00:55,919 --> 00:00:59,279
Anyway, in AWS, you either want to click or search for EC2.

18
00:00:59,280 --> 00:01:01,680
That's Amazon's virtual servers in the cloud.

19
00:01:01,680 --> 00:01:04,480
And then click the launch instance button here in orange.

20
00:01:04,480 --> 00:01:07,199
I'm going to call mine Jinx on Ubuntu.

21
00:01:07,200 --> 00:01:08,480
Now, instance type.

22
00:01:08,480 --> 00:01:13,600
I'm going to search for free and we're going to go for the biggest free one, this one, 8 gig memory.

23
00:01:13,600 --> 00:01:18,479
Now, I think this is completely free to host as long as you're not deploying any other resources on AWS.

24
00:01:18,480 --> 00:01:20,000
And that's it, launch instance.

25
00:01:20,000 --> 00:01:23,600
It is recommended you create an SSH key, but technically you don't need one.

26
00:01:23,600 --> 00:01:25,920
For the purposes of this tutorial, you don't need one.

27
00:01:25,920 --> 00:01:26,399
And that's it.

28
00:01:26,400 --> 00:01:28,800
Click launch instance and we have our instance right here.

29
00:01:28,800 --> 00:01:34,639
Click on the instance ID and then click on connect up the top right and then connect down the bottom right.

30
00:01:34,640 --> 00:01:38,560
This will launch an SSH connection in the web to your new server.

31
00:01:38,560 --> 00:01:39,520
Boom, we're in.

32
00:01:39,520 --> 00:01:43,199
And once we're in, we just want to copy that one liner from claude.bot.

33
00:01:43,200 --> 00:01:45,839
That's the website for claudebot, claude.bot.

34
00:01:45,840 --> 00:01:47,360
Paste that in and press enter.

35
00:01:47,360 --> 00:01:47,919
And that's it.

36
00:01:47,920 --> 00:01:49,600
That's the only command you need to run.

37
00:01:49,600 --> 00:01:52,960
We got it set up in less than like, I don't know, two minutes.

38
00:01:52,960 --> 00:01:54,960
Now, the actual setup will take longer.

39
00:01:54,960 --> 00:01:57,440
All right, once it's finished, you get straight into onboarding.

40
00:01:57,440 --> 00:02:04,120
You gotta accept that this is risky, especially if you're running it on your own file system or you're giving it access to keys or your email.

41
00:02:04,360 --> 00:02:10,120
We're gonna go quick start and I'm gonna use my Anthropic Max plan and I use the token paste setup method.

42
00:02:10,120 --> 00:02:15,400
They will ask me to copy this command which I'll run in my own local terminal to get the token.

43
00:02:15,400 --> 00:02:17,880
Then we'll select a model, Opus 45 latest.

44
00:02:17,880 --> 00:02:19,560
This is the smartest, latest model.

45
00:02:19,560 --> 00:02:21,080
And now we can link our channels.

46
00:02:21,079 --> 00:02:23,079
For Telegram, it'll give you the steps here.

47
00:02:23,079 --> 00:02:24,520
And we can configure skills.

48
00:02:24,519 --> 00:02:26,040
Set up homebrew.

49
00:02:26,360 --> 00:02:29,480
Use node manager bun and all these keys.

50
00:02:29,480 --> 00:02:34,280
We'll skip all these memory enable all these hooks.

51
00:02:34,280 --> 00:02:35,160
And we can hatch.

52
00:02:35,160 --> 00:02:39,160
So when you hatch, you actually are going to give your bot the identity.

53
00:02:39,160 --> 00:02:43,400
This is where you tell it its name, its purpose, and any other information you want.

54
00:02:43,400 --> 00:02:46,040
So what should I call you and what should you call me?

55
00:02:46,040 --> 00:02:49,560
So you are Jinx to AJ.

56
00:02:49,560 --> 00:02:55,560
AJ is a content creator and software engineer.

57
00:02:55,960 --> 00:02:57,000
Just gonna keep it simple.

58
00:02:57,000 --> 00:02:58,440
You can always update this.

59
00:02:58,440 --> 00:03:01,080
It builds its own identity in Sol.

60
00:03:01,079 --> 00:03:03,240
Now it's also going on with the onboarding.

61
00:03:03,240 --> 00:03:04,280
What time zone are you in?

62
00:03:04,280 --> 00:03:05,640
How do you want the vibe to be?

63
00:03:05,640 --> 00:03:06,600
And that's pretty much it.

64
00:03:06,600 --> 00:03:07,640
I think it's ready to go.

65
00:03:07,640 --> 00:03:11,160
Now, for each channel, I think you do have to do kind of like a pairing.

66
00:03:11,160 --> 00:03:12,119
Okay, there we go.

67
00:03:12,120 --> 00:03:16,200
And then we have a pairing code that I can give to the instance.

68
00:03:16,200 --> 00:03:18,520
And once that's configured, we should be paired.

69
00:03:18,520 --> 00:03:19,560
That's it.

70
00:03:19,560 --> 00:03:20,120
There we go.

71
00:03:20,120 --> 00:03:20,600
Awesome.

72
00:03:20,600 --> 00:03:24,840
So I like to give it this exa MCP skill initially.

73
00:03:24,840 --> 00:03:30,600
So I'm going to say create a skill by wrapping this MCP.

74
00:03:30,600 --> 00:03:43,000
This is kind of the first skill because this EXA skill has web search, advanced web search, like deep search, all wrapped up in this one MCP, and it's like free if you use it through the MCP.

75
00:03:43,000 --> 00:03:44,359
You don't need an API key.

76
00:03:44,360 --> 00:03:46,640
So that's that skill.

77
00:03:44,840 --> 00:03:48,480
Later on I can show more skills.

78
00:03:48,480 --> 00:03:56,720
I think I'm going to give this bot its own GitHub account so it can help me do software development and really take it from there.

79
00:03:56,720 --> 00:03:58,799
I think, I don't know, we can really do a lot.

80
00:03:58,800 --> 00:04:04,400
But yeah, really curious to see what kind of things you guys would be interested to run and what your thoughts are.

81
00:04:04,400 --> 00:04:06,720
So definitely drop those in the comment.

82
00:04:06,720 --> 00:04:09,680
And make sure to give it a like if you want to see more content like this.

83
00:04:09,680 --> 00:04:10,640
But yeah, that's all for now.

84
00:04:10,640 --> 00:04:11,760
This is just a quick start.

85
00:04:11,760 --> 00:04:14,799
I tried to speedrun through it with Telegram.

86
00:04:14,800 --> 00:04:17,520
There's amazing docs that are constantly getting updated.

87
00:04:17,519 --> 00:04:20,000
There's a huge community on Discord.

88
00:04:20,000 --> 00:04:26,320
And there's actually small bots on Discord, clawed bots on Discord that can answer any question really well.

89
00:04:26,320 --> 00:04:27,680
So yeah, join the community.

90
00:04:27,680 --> 00:04:29,600
I'm personally a contributor there.

91
00:04:29,760 --> 00:04:36,080
It's always going off 24-7 in the Friends of the Crustations community.

92
00:04:36,080 --> 00:04:39,520
You'll see me amongst many other contributors.

93
00:04:39,520 --> 00:04:41,360
And Peter, it's like he never sleeps.

94
00:04:41,360 --> 00:04:44,640
He's just always there shipping, merging pull requests.

95
00:04:44,640 --> 00:04:46,240
It's really an amazing time.

96
00:04:46,240 --> 00:04:47,440
And I hope to see you there.


---

I actually need tiktok/Instagram/x copy for this . I already posted YouTube 

The bot is called Clawdbot.\n
## assistant\n\nThe user wants me to create social media copy for TikTok, Instagram, and X (Twitter) to promote their YouTube video about Clawdbot. They've already posted the YouTube video and now want to cross-promote on other platforms.

Let me review the key details from the transcript:
- Clawdbot is an open source, free personal AI assistant
- Can be set up on cloud (AWS) or local machine
- Has full system access
- Works with skills and plugins library
- Can interface through WhatsApp, Discord, Telegram
- Cool use case: Meta Ray-Bans + WhatsApp to price check items
- One-line quick start setup
- Can connect to X, Gmail, health stats, etc.
- There's a Discord community "Friends of the Crustations"

Looking at the techfren voice guide:
- Bold claims perform best (80% success rate)
- Avoid starting with "so," "hey," "what's up"
- Use power words: "just," "free," "open source," "local," "boom," "dude," "sick"
- Short punchy sentences (under 24 words)
- Stack value props early
- Action CTAs (download, try, check it out) over subscribe/follow

Let me craft platform-specific copy:

**TikTok/Instagram (Short-form):**
These would be captions for video clips or the full video repurposed

**X (Twitter):**
This should have that discovery energy, bold claims

Let me write these out following the techfren voice and style guidelines.Here's platform-specific copy for Clawdbot, following your voice guide:

---

## TikTok Caption

**Clawdbot just changed everything.** Open source personal AI that runs on your own server. Full system access. Connects to WhatsApp, Discord, Telegram. People are hooking it up to their Meta Ray-Bans to price check items in real time. One-line setup. Completely free. Link in bio for full tutorial 🔗

**Hashtags:** #ai #opensource #aiagent #coding #developer #techtok #artificialintelligence #automation

---

## Instagram Caption

**Your own AI assistant. Full system access. Completely free.**

Clawdbot is the open source personal AI I've been obsessed with lately. One command to set up. Runs on AWS free tier or your local machine.

The killer feature? Connect it to ANY channel—WhatsApp, Discord, Telegram, whatever.

People are building insane things:
→ Connected to their X and Gmail
→ Pulling health stats automatically
→ Using Meta Ray-Bans to price check items at stores

Full setup tutorial on YouTube. Link in bio.

**Hashtags:** #ai #opensource #aiagent #automation #softwaredeveloper #coding #artificialintelligence #developer #techtok

---

## X Post (Thread Starter)

Clawdbot is the most underrated open source project right now.

Your own personal AI with full system access. One-line setup. Completely free.

Here's the use case that sold me:

Meta Ray-Bans + WhatsApp + Clawdbot = see something overpriced at the store, take a pic, ask "what's the Amazon price?" and it adds to cart if cheaper.

Full setup tutorial (under 5 min): [YouTube link]

---

## X Post (Standalone Option)

Just set up Clawdbot in under 5 minutes on AWS free tier.

Open source personal AI. Full system access. Works through WhatsApp, Discord, Telegram.

People are connecting it to their Ray-Bans for real-time price checking.

One command to install. Tutorial: [link]

---

Want me to create variations or adjust the tone on any of these?\n
## human\n\nGive in a block I can copy\n
## assistant\n\nThe user wants me to give them the social media copy in a single code block or text block they can easily copy. Let me format it cleanly for them.```
TIKTOK CAPTION
--------------
Clawdbot just changed everything. Open source personal AI that runs on your own server. Full system access. Connects to WhatsApp, Discord, Telegram. People are hooking it up to their Meta Ray-Bans to price check items in real time. One-line setup. Completely free. Link in bio for full tutorial 🔗

#ai #opensource #aiagent #coding #developer #techtok #artificialintelligence #automation


INSTAGRAM CAPTION
-----------------
Your own AI assistant. Full system access. Completely free.

Clawdbot is the open source personal AI I've been obsessed with lately. One command to set up. Runs on AWS free tier or your local machine.

The killer feature? Connect it to ANY channel—WhatsApp, Discord, Telegram, whatever.

People are building insane things:
→ Connected to their X and Gmail
→ Pulling health stats automatically
→ Using Meta Ray-Bans to price check items at stores

Full setup tutorial on YouTube. Link in bio.

#ai #opensource #aiagent #automation #softwaredeveloper #coding #artificialintelligence #developer #techtok


X POST (THREAD STARTER)
-----------------------
Clawdbot is the most underrated open source project right now.

Your own personal AI with full system access. One-line setup. Completely free.

Here's the use case that sold me:

Meta Ray-Bans + WhatsApp + Clawdbot = see something overpriced at the store, take a pic, ask "what's the Amazon price?" and it adds to cart if cheaper.

Full setup tutorial (under 5 min): [YouTube link]


X POST (STANDALONE)
-------------------
Just set up Clawdbot in under 5 minutes on AWS free tier.

Open source personal AI. Full system access. Works through WhatsApp, Discord, Telegram.

People are connecting it to their Ray-Bans for real-time price checking.

One command to install. Tutorial: [link]
```\n
## human\n\nDon't mention youtube link and don't hype too much on tiktok. Use unique words to capture different audience\n
## assistant\n\nThe user wants me to:
1. Remove YouTube link mentions
2. Tone down the hype on TikTok
3. Use unique/different words across platforms to capture different audiences

Let me rewrite these with more varied language and less hype, especially on TikTok.```
TIKTOK CAPTION
--------------
Clawdbot runs on your own server. Open source. Full system access. Connects to WhatsApp, Discord, Telegram. One command to install. AWS free tier or local. People are wiring it up to Meta Ray-Bans for price checking at stores. Pretty wild.

#ai #opensource #aiagent #coding #developer #techtok #artificialintelligence #automation


INSTAGRAM CAPTION
-----------------
Your own AI assistant. Full system access. Completely free.

Clawdbot is the open source personal AI I've been digging into lately. Single command setup. Runs on AWS free tier or your local machine.

The killer feature? Connect it to ANY channel—WhatsApp, Discord, Telegram, whatever.

People are building insane things:
→ Hooked up to their X and Gmail
→ Pulling health stats automatically
→ Using Meta Ray-Bans to price check items at stores

#ai #opensource #aiagent #automation #softwaredeveloper #coding #artificialintelligence #developer #techtok


X POST (THREAD STARTER)
-----------------------
Clawdbot might be the most slept-on open source project right now.

Personal AI with full system access. One-liner to deploy. Zero cost.

The use case that got me:

Meta Ray-Bans + WhatsApp + Clawdbot = spot something overpriced, snap a pic, ask for the Amazon price, auto-add to cart if it's cheaper.


X POST (STANDALONE)
-------------------
Deployed Clawdbot in under 5 minutes on AWS free tier.

Open source personal AI. Full system access. Interfaces through WhatsApp, Discord, Telegram.

People are rigging it to their Ray-Bans for real-time price comparisons.

One command. That's it.
```\n