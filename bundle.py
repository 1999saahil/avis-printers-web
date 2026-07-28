with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Strip any existing inline custom tags
import re
html = re.sub(r'<style id="custom-styles">.*?</style>', '', html, flags=re.DOTALL)
html = re.sub(r'<script id="custom-script">.*?</script>', '', html, flags=re.DOTALL)
html = html.replace('<link rel="stylesheet" href="./styles.css" />', '')
html = html.replace('<script src="./script.js"></script>', '')

style_tag = f'<style id="custom-styles">\n{css}\n</style>'
script_tag = f'<script id="custom-script">\n{js}\n</script>'

html = html.replace('</head>', f'{style_tag}\n</head>')
html = html.replace('</body>', f'{script_tag}\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Clean bundle complete!')
