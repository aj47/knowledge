#!/usr/bin/env python3
from pathlib import Path
from collections import defaultdict
import re

ROOT = Path(__file__).resolve().parents[1]
SKIP = {'.git', 'tools', 'reports'}


def split_frontmatter(text):
    if not text.startswith('---\n'):
        return None
    end = text.find('\n---\n', 4)
    if end == -1:
        return None
    return text[:4], text[4:end], text[end + 1:]


def parse_fm(body):
    data = {}
    for line in body.splitlines():
        if ':' in line and not line.startswith((' ', '\t')):
            k, v = line.split(':', 1)
            data[k.strip()] = v.strip().strip('"')
    return data


def set_field(body, name, value):
    out = []
    replaced = False
    for line in body.splitlines():
        if line.startswith(name + ':'):
            out.append(f'{name}: {value}')
            replaced = True
        else:
            out.append(line)
    if not replaced:
        out.append(f'{name}: {value}')
    return '\n'.join(out) + '\n'


def md_files():
    for p in ROOT.rglob('*.md'):
        rel = p.relative_to(ROOT)
        if any(part in SKIP for part in rel.parts):
            continue
        yield p


def title_from_reference(ref):
    path = Path(ref)
    ext = path.suffix.lower().lstrip('.')
    stem = path.stem
    parent_parts = list(path.parts[:-1])

    def human(s):
        s = s.replace('_', ' ').replace('-', ' ')
        s = re.sub(r'\s+', ' ', s).strip()
        return s.title()

    if ref.startswith('tweets/tweet-images/'):
        prefix = 'Tweets Tweet Images Asset'
    elif ref.startswith('tweet-images/'):
        prefix = 'Tweet Images Asset'
    elif ref.startswith('tweets/images/') or ref.startswith('tweets/'):
        prefix = 'Tweets Asset'
    elif ref.startswith('worktrees-video-assets/'):
        prefix = 'Worktrees Asset'
    elif ref.startswith('branding/'):
        prefix = 'Branding Asset'
    elif ref.startswith('product/'):
        prefix = 'Product Asset'
    elif ref.startswith('video-projects/'):
        prefix = 'Video Project Asset'
    else:
        prefix = 'Referenced Asset'

    context_parts = []
    # Include the most useful parent labels, avoiding generic roots.
    for part in parent_parts:
        if part in {'tweets', 'images', 'tweet-images', 'worktrees-video-assets', 'branding', 'product', 'video-projects'}:
            continue
        context_parts.append(human(part))
    name = human(stem)
    pieces = [prefix]
    if context_parts:
        pieces.append(' / '.join(context_parts[-3:]))
    pieces.append(name)
    if ext:
        pieces.append(ext.upper())
    return ' — '.join(pieces)


def main():
    titles = defaultdict(list)
    cache = {}
    for p in md_files():
        text = p.read_text(encoding='utf-8', errors='ignore')
        split = split_frontmatter(text)
        if not split:
            continue
        pre, body, rest = split
        fm = parse_fm(body)
        title = fm.get('title')
        if title:
            rel = p.relative_to(ROOT)
            titles[title].append(rel)
            cache[rel] = (p, pre, body, rest, fm)

    changed = []
    for title, rels in sorted(titles.items()):
        if len(rels) < 2:
            continue
        items = [cache[rel] for rel in rels]
        refs = [item[4].get('references', '') for item in items]
        if not all(refs):
            continue
        for rel, (p, pre, body, rest, fm), ref in zip(rels, items, refs):
            new_title = title_from_reference(ref)
            if new_title == title:
                continue
            new_body = set_field(body, 'title', new_title)
            p.write_text(pre + new_body + rest, encoding='utf-8')
            changed.append((rel.as_posix(), title, new_title))

    print(f'Changed {len(changed)} titles')
    for rel, old, new in changed:
        print(f'- {rel}: {old} -> {new}')


if __name__ == '__main__':
    main()
