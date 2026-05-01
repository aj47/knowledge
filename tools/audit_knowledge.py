#!/usr/bin/env python3
from pathlib import Path
from collections import Counter, defaultdict

ROOT = Path(__file__).resolve().parents[1]
REQ = ['kind', 'id', 'title', 'context', 'createdAt', 'updatedAt', 'tags']
SKIP_DIRS = {'.git', 'tools', 'reports'}
IGNORED_SUPPORT_FILES = {'.DS_Store'}
BULKY_MEDIA = {'.mp4', '.mov', '.wav', '.mp3', '.gif', '.png', '.jpg', '.jpeg', '.pdf'}


def is_skipped(path: Path) -> bool:
    try:
        rel = path.relative_to(ROOT)
    except ValueError:
        rel = path
    return any(part in SKIP_DIRS for part in rel.parts)


def files_under_vault():
    return [p for p in ROOT.rglob('*') if p.is_file() and not is_skipped(p) and p.name not in IGNORED_SUPPORT_FILES]


def md_files():
    return [p for p in files_under_vault() if p.suffix.lower() == '.md']


def parse_frontmatter(text: str):
    if not text.startswith('---'):
        return None
    parts = text.split('---', 2)
    if len(parts) < 3:
        return None
    data = {}
    for line in parts[1].splitlines():
        if ':' in line and not line.startswith((' ', '\t')):
            key, value = line.split(':', 1)
            data[key.strip()] = value.strip().strip('"')
    return data


def rel(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


all_files = files_under_vault()
markdown = [p for p in all_files if p.suffix.lower() == '.md']
non_markdown = [p for p in all_files if p.suffix.lower() != '.md']
bulky_media = [p for p in non_markdown if p.suffix.lower() in BULKY_MEDIA]
tracked_non_markdown = set()
gitignore = ROOT / '.gitignore'
if gitignore.exists():
    tracked_non_markdown.add('.gitignore')

missing_frontmatter = []
missing_required = []
contexts = Counter()
titles = defaultdict(list)
ids = defaultdict(list)
for path in markdown:
    path_rel = rel(path)
    data = parse_frontmatter(path.read_text(encoding='utf-8', errors='ignore')[:12000])
    if data is None:
        missing_frontmatter.append(path_rel)
        continue
    missing = [field for field in REQ if field not in data]
    if missing:
        missing_required.append((path_rel, missing))
    contexts[data.get('context', '<missing>')] += 1
    if data.get('title'):
        titles[data['title']].append(path_rel)
    if data.get('id'):
        ids[data['id']].append(path_rel)

top_dirs = [p.name for p in ROOT.iterdir() if p.is_dir() and p.name not in SKIP_DIRS]
non_md_ext = Counter(p.suffix.lower() or '<none>' for p in non_markdown)

print('# Knowledge Vault Audit')
print()
print(f'- Markdown files: {len(markdown)}')
print(f'- Top-level note/support directories: {len(top_dirs)}')
print(f'- Non-markdown support files: {len(non_markdown)}')
print(f'- Bulky ignored media files present: {len(bulky_media)}')
print(f'- Missing frontmatter: {len(missing_frontmatter)}')
print(f'- Missing required fields: {len(missing_required)}')
print('- Context counts: ' + ', '.join(f'{k}={v}' for k, v in sorted(contexts.items())))
print()
print('## Duplicate titles')
for title, paths in sorted(((k, v) for k, v in titles.items() if len(v) > 1), key=lambda kv: (-len(kv[1]), kv[0]))[:40]:
    print(f'- {len(paths)} × {title}')
print()
print('## Duplicate ids')
for ident, paths in sorted(((k, v) for k, v in ids.items() if len(v) > 1), key=lambda kv: (-len(kv[1]), kv[0]))[:40]:
    print(f'- {len(paths)} × {ident}')
print()
print('## Missing frontmatter sample')
for path_rel in missing_frontmatter[:40]:
    print(f'- {path_rel}')
print()
print('## Missing required fields sample')
for path_rel, missing in missing_required[:80]:
    print(f'- {path_rel}: {", ".join(missing)}')
print()
print('## Non-markdown support file extensions')
for extension, count in sorted(non_md_ext.items(), key=lambda item: (-item[1], item[0])):
    print(f'- {count} × {extension}')
print()
print('## Non-markdown support file sample')
for path in sorted(non_markdown, key=lambda p: rel(p))[:80]:
    print(f'- {rel(path)}')
