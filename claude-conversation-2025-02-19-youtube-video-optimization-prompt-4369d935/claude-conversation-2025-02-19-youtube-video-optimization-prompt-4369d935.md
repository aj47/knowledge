---
kind: note
id: claude-conversation-2025-02-19-youtube-video-optimization-prompt-4369d935
updatedAt: 1739939742195
createdAt: 1739939646442
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: 4369d935-7a43-4d0d-9f7c-99d9561df07b
created_at: 2025-02-19T04:34:06.442981Z
updated_at: 2025-02-19T04:35:42.195309Z
title: "YouTube Video Optimization Prompt"
---

# YouTube Video Optimization Prompt

## Metadata

- Claude conversation UUID: `4369d935-7a43-4d0d-9f7c-99d9561df07b`
- Created: `2025-02-19T04:34:06.442981Z`
- Updated: `2025-02-19T04:35:42.195309Z`
- Message count: 6
- Transcript chars extracted: 7703

## Quick excerpt

<antThinking>This task requires creating a comprehensive system prompt that would be useful as a reference document, making it a good candidate for an artifact. The content is substantial and meant to be used outside our conversation.</antThinking> <antArtifact identifier="youtube-optimizer-prompt" type="text/markdown" title="YouTube Video Optimization System Prompt"> # YouTube Video Optimization System Prompt Given a video transcript, generate optimized YouTube metadata in the following format:

## Transcript

## human\n\ncombine the following into a concise system prompt\n
## assistant\n\n<antThinking>This task requires creating a comprehensive system prompt that would be useful as a reference document, making it a good candidate for an artifact. The content is substantial and meant to be used outside our conversation.</antThinking>

<antArtifact identifier="youtube-optimizer-prompt" type="text/markdown" title="YouTube Video Optimization System Prompt">
# YouTube Video Optimization System Prompt

Given a video transcript, generate optimized YouTube metadata in the following format:

## Required Outputs

### 1. Video Description (5,000 char max)
- First 150 characters: Primary keyword + value proposition
- Detailed content summary with secondary keywords
- Timestamps for key sections
- CTAs (subscribe, like, etc.)
- Social/resource links
- 3-5 relevant hashtags at the end

### 2. Title Options (15 variations)
- 60-70 characters max
- Include primary keywords early
- Use engaging formats:
  - How-to/Lists: "How to [X] in 2025: 7 Steps"
  - Questions: "Why [Problem] (And How to Fix It)"
  - Data-driven: "[X] Results in [Y] Days"
  - Value props: "Ultimate Guide to [X] [Bonus]"
- Incorporate power words (Proven, Ultimate, Secret, Free)

### 3. Thumbnail Concepts (5 ideas)
Design elements should include:
- Bold text (3-5 words)
- High-contrast colors
- Clear visual hierarchy
- Mobile-friendly layout
- Suggested themes:
  - Tutorial-style with steps
  - Before/After comparison
  - Data visualization
  - Emotional/reaction faces
  - Problem-solution format

## Optimization Guidelines

1. **SEO Best Practices**
- Extract primary (1-2) and secondary (3-5) keywords from transcript
- Natural keyword placement
- Avoid stuffing/clickbait
- Grade 6-8 readability

2. **Formatting**
- Mobile-optimized descriptions
- Clear section breaks
- Proper timestamp formatting (00:00)
- Limited emoji usage
- Professional link structure

3. **Quality Checks**
- Keyword relevance to content
- Title-thumbnail alignment
- Description scanability
- Mobile display testing

## Output Format
```
DESCRIPTION:
[Optimized description with timestamps and hashtags]

TITLES:
1. [Title Option 1]
2. [Title Option 2]
[...]

THUMBNAILS:
1. [Concept 1 with design elements]
2. [Concept 2 with design elements]
[...]
```
</antArtifact>

I've created a streamlined system prompt that combines the key elements from both source documents while maintaining clarity and usability. The prompt focuses on the three main deliverables (description, titles, and thumbnails) with clear formatting guidelines and quality standards.

Would you like me to modify any section or add additional details for specific use cases?\n
## human\n\nwhat info was left out?\n
## assistant\n\nLet me analyze what was omitted from the original documents:

1. Research and Tool Suggestions:
- Removed mentions of specific tools like vidIQ, TubeBuddy, Hemingway App
- Removed references to using YouTube Search Suggest for keyword research
- Omitted suggestions to look at successful videos in similar niches

2. Detail Level in Guidelines:
- Reduced specific examples in title formats
- Removed detailed description template with emoji markers
- Omitted specific character counts for descriptions (kept only title character limits)

3. Technical Aspects:
- Removed NLP-specific guidance for keyword extraction
- Omitted platform-specific adjustments for mobile visibility
- Removed specific details about truncation prevention

4. Engagement Specifics:
- Removed details about viewer retention strategies
- Omitted specific watch time optimization techniques
- Removed guidance about audience-specific language

5. Structural Elements:
- Removed the step-by-step process numbering
- Omitted the detailed input/output specification at the beginning
- Removed citations and external references

Would you like me to create an expanded version that includes any of these elements? I could either:
1. Add back specific elements you think are most valuable
2. Create a more comprehensive version that includes all omitted information
3. Keep the concise version but add an appendix with additional details

Which approach would you prefer?\n
## human\n\nre introduce, specific examples, template, and truncation prevention\n
## assistant\n\n<antThinking>This is a good case for updating the existing artifact as we're adding more detail to the same system prompt while maintaining its core structure.</antThinking>

<antArtifact identifier="youtube-optimizer-prompt" type="text/markdown" title="YouTube Video Optimization System Prompt">
# YouTube Video Optimization System Prompt

Given a video transcript, generate optimized YouTube metadata in the following format:

## Required Outputs

### 1. Video Description (5,000 char max)
- First 150 characters: Primary keyword + value proposition
  - Example: "Learn 9 proven strategies to grow your YouTube channel in 2025—no clickbait!"
- Detailed content summary with secondary keywords
- Timestamps for key sections
- CTAs (subscribe, like, etc.)
- Social/resource links
- 3-5 relevant hashtags at the end

**Template:**
```
[Primary keyword-driven intro + value prop]

📌 In this video, we cover:
- Topic 1 (0:00)
- Topic 2 (2:15)
[additional timestamps]

🔗 RESOURCES:
- [Subscribe]: [link]
- [Website]: [link]
- [Free Resource]: [link]

#Keyword1 #Keyword2 #Keyword3
```

### 2. Title Options (15 variations)
- 60-70 characters max (use character counter to prevent truncation)
- Include primary keywords early
- Use engaging formats:
  - How-to/Lists: "How to [X] in 2025: 7 Steps"
  - Questions: "Why [Problem] (And How to Fix It)"
  - Data-driven: "[X] Results in [Y] Days"
  - Value props: "Ultimate Guide to [X] [Bonus]"
- Incorporate power words (Proven, Ultimate, Secret, Free)

Example Titles:
1. "9 YouTube Growth Hacks That Actually Work in 2025"
2. "How I Gained 10K Subscribers Using This 2025 SEO Strategy"
3. "The Secret Algorithm Trick YouTube Doesn't Want You to Know"

### 3. Thumbnail Concepts (5 ideas)
Design elements should include:
- Bold text (3-5 words)
- High-contrast colors (e.g., yellow/black, red/white)
- Clear visual hierarchy
- Mobile-friendly layout
- Suggested themes:
  - Tutorial-style with steps (Person pointing at checklist with "STEP-BY-STEP" overlay)
  - Before/After comparison (Split screen showing progress)
  - Data visualization (Graph/arrow with "1,000 SUBSCRIBERS FAST")
  - Emotional/reaction faces (Surprised expression + "MIND BLOWN")
  - Problem-solution format (Red X vs. Green checkmark)

## Optimization Guidelines

1. **SEO Best Practices**
- Extract primary (1-2) and secondary (3-5) keywords from transcript
- Natural keyword placement
- Avoid stuffing/clickbait
- Grade 6-8 readability

2. **Formatting**
- Mobile-optimized descriptions
- Clear section breaks
- Proper timestamp formatting (00:00)
- Limited emoji usage
- Professional link structure

3. **Quality Checks**
- Keyword relevance to content
- Title-thumbnail alignment
- Description scanability
- Mobile display testing
  - Test titles at 42 characters for mobile truncation
  - Ensure thumbnail text is legible at small sizes
  - Check description formatting on mobile preview

## Output Format
```
DESCRIPTION:
[Optimized description with timestamps and hashtags]

TITLES:
1. [Title Option 1]
2. [Title Option 2]
[...]

THUMBNAILS:
1. [Concept 1 with design elements]
2. [Concept 2 with design elements]
[...]
```
</antArtifact>

I've reintroduced:
1. Specific examples for titles and descriptions
2. A detailed description template with emoji markers
3. More concrete thumbnail design examples
4. Guidelines for preventing truncation on both desktop and mobile
5. Example power words and their usage

Would you like me to add back any other specific examples or details?\n