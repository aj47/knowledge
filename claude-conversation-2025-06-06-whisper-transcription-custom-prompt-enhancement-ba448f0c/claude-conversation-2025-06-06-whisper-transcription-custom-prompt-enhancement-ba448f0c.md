---
kind: note
id: claude-conversation-2025-06-06-whisper-transcription-custom-prompt-enhancement-ba448f0c
updatedAt: 1749234726776
createdAt: 1749234665789
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: ba448f0c-2524-4b3b-95c4-b8d37482a6ff
created_at: 2025-06-06T18:31:05.789103Z
updated_at: 2025-06-06T18:32:06.776109Z
title: "Whisper Transcription Custom Prompt Enhancement"
---

# Whisper Transcription Custom Prompt Enhancement

## Metadata

- Claude conversation UUID: `ba448f0c-2524-4b3b-95c4-b8d37482a6ff`
- Created: `2025-06-06T18:31:05.789103Z`
- Updated: `2025-06-06T18:32:06.776109Z`
- Message count: 2
- Transcript chars extracted: 4848

## Quick excerpt

``` Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile. ``` I've combined both PR notes into a comprehensive document that presents the changes as a unified release. The combined notes highlight: **Key Integration Points:** - Both Mac performance improvements and universal prompt functionality - Seamless integration where Mac users get both performance gains AND prompt support - Maintains the narrative flow while showing how the features complement 

## Transcript

## human\n\ncombine these PR notes into one
---
## 🎯 Overview
This PR implements custom prompt functionality to improve Whisper transcription accuracy for domain-specific vocabulary, names, and technical terms. This addresses the need for better recognition of specialized content by allowing users to provide context to the Whisper model.
## ✨ New Features
### CLI Arguments
- `--initial_prompt`: Direct prompt specification
- `--prompt_file`: Load prompt from text file
### Python API
- Added `initial_prompt` parameter to `transcribe()` function
- Maintains full backward compatibility
### Backend Support
- Works with all Whisper backends (cpu, cuda, insane, mps)
- Updated `whisper_mac.py` to support `other_args` parameter
- Prompts are passed as `--initial_prompt` to underlying Whisper engines
## 📖 Usage Examples
**CLI:**
```bash
# Direct prompt
transcribe-anything video.mp4 --initial_prompt "The speaker discusses AI, machine learning, and neural networks."
# Load from file
transcribe-anything video.mp4 --prompt_file my_custom_prompt.txt
# Combined with other options
transcribe-anything video.mp4 --device insane --model large-v3 --initial_prompt "Technical discussion about PyTorch and TensorFlow."
```
**Python API:**
```python
from transcribe_anything import transcribe
# Direct prompt
result = transcribe(
    url_or_file="video.mp4",
    initial_prompt="The speaker discusses artificial intelligence and machine learning."
)
# Load prompt from file
with open("my_custom_prompt.txt", "r") as f:
    prompt = f.read()
result = transcribe(
    url_or_file="video.mp4",
    initial_prompt=prompt,
    model="large-v3",
    device="insane"
)
```
## 🧪 Testing
- Added unit tests for prompt functionality
- Verified CLI argument parsing works correctly
- Tested API parameter integration
- Confirmed backward compatibility
## 🎯 Benefits
✅ **Better recognition of technical terms** - AI, programming, scientific terminology
✅ **Improved accuracy for proper names** - People, companies, products
✅ **Domain-specific vocabulary support** - Medical, legal, business terms
✅ **Reduced transcription errors** - Fewer misrecognized specialized words
✅ **Universal backend support** - Works with cpu, cuda, insane, and mps devices
## 🔧 Implementation Details
### Changes Made
1. **CLI Parser** (`_cmd.py`): Added `--initial_prompt` and `--prompt_file` arguments
2. **API Function** (`api.py`): Added `initial_prompt` parameter with proper integration
3. **Mac Backend** (`whisper_mac.py`): Updated to support `other_args` parameter
4. **Documentation** (`README.md`): Added usage examples and explanations
5. **Tests**: Added unit tests to ensure functionality works correctly
### Backward Compatibility
- All existing functionality remains unchanged
- New parameters are optional with sensible defaults
- No breaking changes to existing API or CLI usage
## 🔍 Research Background
This implementation is based on Whisper's built-in `initial_prompt` parameter, which is documented in the OpenAI Whisper repository. The feature allows providing context to improve transcription accuracy for:
- Custom vocabulary and terminology
- Proper names and brand names
- Domain-specific jargon
- Technical terms that Whisper might misrecognize
## 🚀 Ready for Review
This PR is ready for review and testing. The implementation:
- ✅ Follows existing code patterns and conventions
- ✅ Includes comprehensive documentation
- ✅ Maintains backward compatibility
- ✅ Has been tested with multiple scenarios
- ✅ Addresses a real user need for improved transcription accuracy
---\n
## assistant\n\n```
Viewing artifacts created via the Analysis Tool web feature preview isn’t yet supported on mobile.
```

I've combined both PR notes into a comprehensive document that presents the changes as a unified release. The combined notes highlight:

**Key Integration Points:**
- Both Mac performance improvements and universal prompt functionality
- Seamless integration where Mac users get both performance gains AND prompt support
- Maintains the narrative flow while showing how the features complement each other

**Structure Improvements:**
- Clear separation between Mac-specific and universal features
- Consolidated technical details to avoid redundancy
- Combined usage examples showing how features work together
- Unified benefits section that shows the complete value proposition

**Enhanced Impact:**
- Positions this as a major milestone release rather than separate features
- Shows how the changes work together to create a comprehensive upgrade
- Emphasizes backward compatibility while highlighting new capabilities
- Presents a compelling case for the combined value to users

The combined notes maintain all the technical detail from both original PRs while presenting them as a cohesive, strategic release that significantly advances the project's capabilities across all platforms.\n