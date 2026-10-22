import os, math
from PIL import Image, ImageDraw, ImageFilter

# Draws the AquaFlow icon - a water bottle with water in it and a timer badge - into www/icons/.
# Palette: Deep Sea #156874 and Steam #EDE6E6.
OUT = 'www/icons/'
os.makedirs(OUT, exist_ok=True)
S = 1024
STEAM = (237, 230, 230)
DEEP = (21, 104, 116)

def lerp(a, b, t): return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))

def artwork():
    """transparent 1024x1024 layer: bottle + water + timer badge"""
    layer = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    # --- bottle silhouette mask ---
    body = Image.new('L', (S, S), 0)
    bd = ImageDraw.Draw(body)
    bd.rounded_rectangle([300, 400, 640, 900], radius=90, fill=255)       # body
    bd.rounded_rectangle([300, 330, 640, 520], radius=130, fill=255)      # shoulders
    bd.rectangle([405, 250, 535, 420], fill=255)                          # neck
    # --- water (clipped to the bottle) ---
    water = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    wd = ImageDraw.Draw(water)
    top = 590
    for y in range(top - 30, 910):
        t = max(0.0, min(1.0, (y - top) / (900 - top)))
        wd.line([(0, y), (S, y)], fill=lerp((140, 226, 234), (36, 150, 166), t) + (255,))
    cut = Image.new('L', (S, S), 0)
    cd = ImageDraw.Draw(cut)
    pts = [(x, top + math.sin((x - 300) / 340 * 2 * math.pi) * 22) for x in range(0, S + 1, 4)]
    cd.polygon(pts + [(S, S), (0, S)], fill=255)
    wmask = Image.new('L', (S, S), 0)
    wmask.paste(body, (0, 0), cut)
    layer.paste(water, (0, 0), wmask)
    # glass tint
    tint = Image.new('RGBA', (S, S), STEAM + (0,))
    tint.putalpha(body.point(lambda v: 38 if v else 0))
    layer = Image.alpha_composite(layer, tint)
    # outline: dilate - body
    outer = body.filter(ImageFilter.MaxFilter(25))
    ring = Image.new('L', (S, S), 0)
    ring.paste(outer, (0, 0)); ring = Image.composite(Image.new('L', (S, S), 0), ring, body)
    ol = Image.new('RGBA', (S, S), STEAM + (255,)); ol.putalpha(ring)
    layer = Image.alpha_composite(layer, ol)
    d = ImageDraw.Draw(layer)
    # cap
    d.rounded_rectangle([385, 160, 555, 262], radius=34, fill=STEAM + (255,))
    for x in range(405, 540, 24): d.line([(x, 178), (x, 246)], fill=DEEP + (120,), width=7)
    # label stripe + highlight + bubbles
    d.line([(352, 440), (352, 560)], fill=(255, 255, 255, 170), width=18)
    for bx, by, br in [(470, 760, 20), (540, 700, 13), (430, 830, 11)]:
        d.ellipse([bx - br, by - br, bx + br, by + br], outline=(255, 255, 255, 220), width=6)
    # --- timer badge (stopwatch) ---
    cx, cy, r = 700, 700, 205
    shadow = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).ellipse([cx - r - 6, cy - r + 10, cx + r + 6, cy + r + 26], fill=(0, 0, 0, 90))
    layer = Image.alpha_composite(layer, shadow.filter(ImageFilter.GaussianBlur(14)))
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle([cx - 38, cy - r - 52, cx + 38, cy - r + 6], radius=14, fill=STEAM + (255,))   # crown
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=DEEP + (255,))
    d.ellipse([cx - r + 16, cy - r + 16, cx + r - 16, cy + r - 16], fill=STEAM + (255,))
    for k in range(12):                                                      # ticks
        a = math.radians(k * 30 - 90); r1, r2 = r - 42, r - (62 if k % 3 == 0 else 54)
        d.line([(cx + r1 * math.cos(a), cy + r1 * math.sin(a)), (cx + r2 * math.cos(a), cy + r2 * math.sin(a))], fill=DEEP + (255,), width=8 if k % 3 == 0 else 5)
    d.arc([cx - r + 34, cy - r + 34, cx + r - 34, cy + r - 34], start=-90, end=40, fill=(42, 160, 176, 255), width=16)   # progress arc
    d.line([(cx, cy), (cx, cy - 98)], fill=DEEP + (255,), width=14)          # hands
    d.line([(cx, cy), (cx + 70, cy + 40)], fill=DEEP + (255,), width=14)
    d.ellipse([cx - 16, cy - 16, cx + 16, cy + 16], fill=DEEP + (255,))
    return layer

def compose(content_scale, rounded):
    bg = Image.new('RGB', (S, S))
    px = ImageDraw.Draw(bg)
    for y in range(S):
        px.line([(0, y), (S, y)], fill=lerp((30, 134, 148), (13, 76, 88), y / S))
    glow = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    ImageDraw.Draw(glow).ellipse([160, 120, 860, 820], fill=(120, 215, 225, 70))
    bg = Image.alpha_composite(bg.convert('RGBA'), glow.filter(ImageFilter.GaussianBlur(110)))
    art = artwork()
    if content_scale != 1.0:
        n = int(S * content_scale)
        small = art.resize((n, n), Image.LANCZOS)
        art = Image.new('RGBA', (S, S), (0, 0, 0, 0)); art.paste(small, ((S - n) // 2, (S - n) // 2))
    img = Image.alpha_composite(bg, art).convert('RGB')
    if rounded:
        m = Image.new('L', (S, S), 0)
        ImageDraw.Draw(m).rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * 0.22), fill=255)
        img = Image.composite(img, Image.new('RGB', (S, S), (30, 31, 34)), m)
    return img

full = compose(1.0, True)
safe = compose(0.8, False)                  # maskable: everything stays inside the 80% safe zone
full.resize((512, 512), Image.LANCZOS).save(OUT + 'icon-512.png')
full.resize((192, 192), Image.LANCZOS).save(OUT + 'icon-192.png')
full.resize((180, 180), Image.LANCZOS).save(OUT + 'apple-touch-icon.png')
full.resize((32, 32), Image.LANCZOS).save(OUT + 'favicon-32.png')
safe.resize((512, 512), Image.LANCZOS).save(OUT + 'maskable-512.png')
print('icons.py: done')
