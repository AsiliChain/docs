import re, glob

for path in glob.glob('src/content/docs/**/*.mdx', recursive=True):
    with open(path, 'r') as f:
        content = f.read()
    # Split frontmatter from body
    parts = content.split('---', 2)
    if len(parts) < 3:
        continue
    frontmatter = parts[1]
    body = parts[2]
    # Get the title from frontmatter
    title_match = re.search(r'^title:\s*(.+)$', frontmatter, re.MULTILINE)
    if not title_match:
        continue
    title = title_match.group(1).strip().strip('"\'')
    # Remove first H1 line if it matches the title (with or without punctuation)
    body_stripped = body.lstrip('\n')
    h1_pattern = re.compile(r'^#\s+.+\n', re.MULTILINE)
    first_line_match = h1_pattern.match(body_stripped)
    if first_line_match:
        body = '\n' + body_stripped[first_line_match.end():]
        new_content = f'---{frontmatter}---{body}'
        with open(path, 'w') as f:
            f.write(new_content)
        print(f'Removed double H1: {path}')