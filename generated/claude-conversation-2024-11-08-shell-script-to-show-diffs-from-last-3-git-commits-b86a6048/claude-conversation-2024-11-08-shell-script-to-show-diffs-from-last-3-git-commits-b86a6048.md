---
kind: note
id: claude-conversation-2024-11-08-shell-script-to-show-diffs-from-last-3-git-commits-b86a6048
updatedAt: 1731053281075
createdAt: 1731053239960
tags: 
group: claude-conversations
context: search-only
source: claude-export
source_path: /Users/ajjoobandi/Documents/claude-export
source_type: conversation
conversation_uuid: b86a6048-3b85-4559-a51b-2f91665a14ac
created_at: 2024-11-08T08:07:19.960834Z
updated_at: 2024-11-08T08:08:01.075468Z
title: "Shell script to show diffs from last 3 Git commits"
---

# Shell script to show diffs from last 3 Git commits

## Metadata

- Claude conversation UUID: `b86a6048-3b85-4559-a51b-2f91665a14ac`
- Created: `2024-11-08T08:07:19.960834Z`
- Updated: `2024-11-08T08:08:01.075468Z`
- Message count: 6
- Transcript chars extracted: 2595

## Quick excerpt

I'll help you create a shell script to show the diffs from the last 3 commits. <antArtifact identifier="git-diff-script" type="application/vnd.ant.code" language="bash" title="Script to show diffs from last 3 commits"> #!/bin/bash # Get the last 3 commit hashes commits=($(git log --pretty=format:"%H" -n 3)) if [ ${#commits[@]} -eq 0 ]; then echo "No commits found in repository" exit 1 fi # Print a separator line print_separator() { echo -e "\n===============================================" echo

## Transcript

## human\n\nshell to print  diffs from last 3 commits\n
## assistant\n\nI'll help you create a shell script to show the diffs from the last 3 commits.



<antArtifact identifier="git-diff-script" type="application/vnd.ant.code" language="bash" title="Script to show diffs from last 3 commits">
#!/bin/bash

# Get the last 3 commit hashes
commits=($(git log --pretty=format:"%H" -n 3))

if [ ${#commits[@]} -eq 0 ]; then
    echo "No commits found in repository"
    exit 1
fi

# Print a separator line
print_separator() {
    echo -e "\n==============================================="
    echo "$1"
    echo "==============================================="
}

# For each commit, show the diff with its parent
for ((i=0; i<${#commits[@]}; i++)); do
    commit=${commits[$i]}
    
    # Get commit message and date
    message=$(git log -1 --pretty=format:"%s" $commit)
    date=$(git log -1 --pretty=format:"%ad" --date=local $commit)
    
    print_separator "Diff for commit: $message ($date)"
    
    if [ $i -eq ${#commits[@]}-1 ]; then
        # For the oldest commit, compare with its parent
        git show $commit
    else
        # Compare with next commit in our list
        git diff ${commits[$i+1]} $commit
    fi
done
</antArtifact>

To use this script:

1. Save it to a file (e.g., `show-recent-diffs.sh`)
2. Make it executable: `chmod +x show-recent-diffs.sh`
3. Run it from within your git repository: `./show-recent-diffs.sh`

The script will:
- Get the last 3 commit hashes
- For each commit, show:
  - The commit message and date
  - The full diff
- Use clear separators between diffs for better readability

Would you like me to modify the script in any way? For example, I could:
- Add options to specify the number of commits
- Include more commit details
- Change the formatting\n
## human\n\nsingle line command\n
## assistant\n\nHere's a single-line command to show diffs from the last 3 commits:

```bash
for commit in $(git log -n 3 --format="%H"); do echo -e "\n=== Commit: $(git log -1 --format="%s" $commit) ===\n"; git show $commit; done
```

Or even shorter if you just want the raw diffs:

```bash
git log -p -3
```

The second command is simpler and probably what you're looking for in most cases. The `-p` shows the patch/diff and `-3` limits it to the last 3 commits.\n
## human\n\ni want to it to print so i cna pipe\n
## assistant\n\nHere's the simplest command to print diffs that you can pipe:

```bash
git log -p -3 --no-color
```

The `--no-color` flag ensures clean output for piping. You can now use it like:

```bash
git log -p -3 --no-color | grep 'pattern'
# or
git log -p -3 --no-color > changes.patch
# or
git log -p -3 --no-color | less
```\n