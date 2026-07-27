import re

with open('script.js', 'r', encoding='utf-8') as f:
    js = f.read()

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update image paths in HTML
html = html.replace('./assets/projects/sandhya-logo.png', './assets/projects/sandhya_logo.png')
html = html.replace('./assets/projects/Inauguration Plate July 2026.jpg', './assets/projects/inauguration_plate_july_2026.jpg')
html = html.replace('./assets/projects/Badges 2026.jpg', './assets/projects/badges_2026.jpg')
html = html.replace('./assets/projects/Big round  Stickers 2026.jpg', './assets/projects/big_round_stickers_2026.jpg')
html = html.replace('./assets/projects/3X6 Standee.jpg', './assets/projects/3x6_standee.jpg')
html = html.replace('./assets/projects/Hypertension_standee.jpg', './assets/projects/hypertension_standee.jpg')

# Remove MOQ FAQ item
pattern = r'<div class="glass-panel p-6 cursor-pointer" onclick="toggleFaq\(this\)">\s*<div class="flex items-center justify-between font-bold text-sm text-white font-heading">\s*<span>5\. What are the minimum order quantities \(MOQ\)\?</span>.*?</div>\s*</div>'
html = re.sub(pattern, '', html, flags=re.DOTALL)

# Re-embed script.js
if '<script id="custom-script">' in html:
    start = html.find('<script id="custom-script">')
    html = html[:start] + f'<script id="custom-script">\n{js}\n</script>\n</body>\n</html>'
else:
    html = html.replace('</body>', f'<script id="custom-script">\n{js}\n</script>\n</body>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('Updated index.html cleanly!')
