---
kind: note
id: 12-extending-janus-model-for-image-to-image
updatedAt: 1775964320244
tags:
group: claude-evergreen-distilled
title: "Extending Janus Model for Image-to-Image" (Evergreen Distilled)
context: search-only
source_note: ../../../generated/claude-conversation-2024-10-18-extending-janus-model-for-image-to-image-851042f6/claude-conversation-2024-10-18-extending-janus-model-for-image-to-image-851042f6.md
source_type: claude-evergreen-distilled
themes: [content, prompt]
createdAt: 1776281681222
---

# "Extending Janus Model for Image-to-Image" (Evergreen Distilled)

## Core takeaways

- This will require adding a new function and tab for image-to-image transformation.
- <antThinking>This modification is substantial, builds upon existing code, and creates a complete, self-contained application.
- Added a new `image_to_image()` function that takes a source image and transformation prompt as input 2.
- Implemented token blending between source and generated images 3.
- Created a helper function `decode_image_tokens()` to reduce code duplication 4.

## Reusable insights

- Added a new tab in the Gradio interface specifically for image-to-image transformation 5.
- Added controls for temperature and CFG weight in the image-to-image interface The image-to-image transformation works by: 1.
- Converting the source image to tokens using the vision model 2.

## Source

- `../../../generated/claude-conversation-2024-10-18-extending-janus-model-for-image-to-image-851042f6/claude-conversation-2024-10-18-extending-janus-model-for-image-to-image-851042f6.md`
