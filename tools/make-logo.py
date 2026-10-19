"""
SARTO logo generator.

Builds the wordmark from real Cormorant Garamond glyph outlines (so the SVG is
font-independent and editable in Illustrator/Figma), and the S monogram as a
single boolean path: the serif S, split by a vertical seam.

Outputs SVG files to public/brand/.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen
from pathops import Path as SkPath, OpBuilder, PathOp
from fontTools.pens.basePen import BasePen

ROOT = Path(__file__).resolve().parents[1]
FONT = ROOT / "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff"
OUT = ROOT / "public/brand"
OUT.mkdir(parents=True, exist_ok=True)

font = TTFont(FONT)
glyphset = font.getGlyphSet()
cmap = font.getBestCmap()
upm = font["head"].unitsPerEm
cap = font["OS/2"].sCapHeight

COCOA = "#201915"
IVORY = "#F3EEE6"


class SkiaPen(BasePen):
    """Collect glyph outline into a skia-pathops path."""

    def __init__(self, glyphSet, path):
        super().__init__(glyphSet)
        self.p = path

    def _moveTo(self, p):
        self.p.moveTo(*p)

    def _lineTo(self, p):
        self.p.lineTo(*p)

    def _curveToOne(self, p1, p2, p3):
        self.p.cubicTo(*p1, *p2, *p3)

    def _qCurveToOne(self, p1, p2):
        self.p.quadTo(*p1, *p2)

    def _closePath(self):
        self.p.close()


def glyph_skpath(ch, dx=0.0, scale=1.0):
    g = glyphset[cmap[ord(ch)]]
    p = SkPath()
    pen = SkiaPen(glyphset, p)
    # Font units are y-up; flip to y-down SVG space and scale.
    tpen = TransformPen(pen, (scale, 0, 0, -scale, dx, 0))
    g.draw(tpen)
    return p, g.width * scale


def path_bounds(p):
    bs = p.bounds
    return bs  # (xmin, ymin, xmax, ymax)


def skpath_to_d(p, precision=2):
    pen = SVGPathPen(None, ntos=lambda v: f"{v:.{precision}f}".rstrip("0").rstrip("."))
    p.draw(pen)
    return pen.getCommands()


# ---------- Wordmark ----------
# Tracking 0.30em: generous, controlled. Cap height normalised to 100 units.
SCALE = 100.0 / cap
TRACK = 0.30 * upm * SCALE  # in output units

word = "SARTO"
x = 0.0
letters = []
for i, ch in enumerate(word):
    p, adv = glyph_skpath(ch, dx=x, scale=SCALE)
    letters.append(p)
    x += adv + (TRACK if i < len(word) - 1 else 0)

wm = SkPath()
builder = OpBuilder()
for p in letters:
    builder.add(p, PathOp.UNION)
wm = builder.resolve()

bx0, by0, bx1, by1 = wm.bounds
w = bx1 - bx0
h = by1 - by0

# Shift so the word's ink box starts at 0,0
shift = SkPath()
builder = OpBuilder()
from fontTools.pens.transformPen import TransformPen as TP


def translate_sk(p, tx, ty):
    q = SkPath()
    pen = SkiaPen(None, q)
    p.draw(TP(pen, (1, 0, 0, 1, tx, ty)))
    return q


wm = translate_sk(wm, -bx0, -by0)
wm_d = skpath_to_d(wm)
WM_W, WM_H = round(w, 2), round(h, 2)


def svg(width, height, body, extra_attrs=""):
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" '
        f'width="{width}" height="{height}" role="img" aria-label="SARTO"{extra_attrs}>\n{body}\n</svg>\n'
    )


# Wordmark, dark on transparent (for light backgrounds)
(OUT / "sarto-wordmark.svg").write_text(
    svg(WM_W, WM_H, f'  <path fill="{COCOA}" d="{wm_d}"/>')
)
# Wordmark, ivory on transparent (for dark backgrounds)
(OUT / "sarto-wordmark-light.svg").write_text(
    svg(WM_W, WM_H, f'  <path fill="{IVORY}" d="{wm_d}"/>')
)
# Wordmark, currentColor (single-colour, inherits CSS colour)
(OUT / "sarto-wordmark-mono.svg").write_text(
    svg(WM_W, WM_H, f'  <path fill="currentColor" d="{wm_d}"/>')
)

# ---------- Monogram: "the cut" ----------
# The serif S at cap height 100. One mitre cut (45°, perpendicular to the
# spine) separates the letter into two pieces that meet without offset: the
# tailor's cut, the joiner's mitre, the shadow gap. At favicon size the cut
# disappears and the plain S remains. (A vertical seam was tested and
# rejected: through a serif S it reads as a dollar sign.)
import math

s_p, s_adv = glyph_skpath("S", 0, SCALE)
sx0, sy0, sx1, sy1 = s_p.bounds
s_p = translate_sk(s_p, -sx0, -sy0)
SW = sx1 - sx0
SH = sy1 - sy0
cx, cy = SW / 2.0, SH / 2.0

GAP = 3.0          # shadow-gap width (units of cap height = 100)
CUT_LEN = 26.0     # half-length of the cut: spans the spine, nothing else
ANGLE = -45.0

a = math.radians(ANGLE)
ux, uy = math.cos(a), math.sin(a)
nx, ny = -uy, ux
pts = [
    (cx + ux * CUT_LEN + nx * GAP / 2, cy + uy * CUT_LEN + ny * GAP / 2),
    (cx - ux * CUT_LEN + nx * GAP / 2, cy - uy * CUT_LEN + ny * GAP / 2),
    (cx - ux * CUT_LEN - nx * GAP / 2, cy - uy * CUT_LEN - ny * GAP / 2),
    (cx + ux * CUT_LEN - nx * GAP / 2, cy + uy * CUT_LEN - ny * GAP / 2),
]
cut_rect = SkPath()
cut_rect.moveTo(*pts[0])
for pt in pts[1:]:
    cut_rect.lineTo(*pt)
cut_rect.close()

b = OpBuilder()
b.add(s_p, PathOp.UNION)
b.add(cut_rect, PathOp.DIFFERENCE)
s_cut = b.resolve()
mono = s_cut

# Square artboard, letter optically centred.
PAD = 16.0
MH = SH + 2 * PAD
MW = MH
mono = translate_sk(mono, (MW - SW) / 2, PAD)
mono_d = skpath_to_d(mono)
MW_R, MH_R = round(MW, 2), round(MH, 2)

(OUT / "sarto-monogram.svg").write_text(svg(MW_R, MH_R, f'  <path fill="{COCOA}" d="{mono_d}"/>'))
(OUT / "sarto-monogram-light.svg").write_text(svg(MW_R, MH_R, f'  <path fill="{IVORY}" d="{mono_d}"/>'))
(OUT / "sarto-monogram-mono.svg").write_text(svg(MW_R, MH_R, f'  <path fill="currentColor" d="{mono_d}"/>'))

# Favicon: the S without the extended seam (the gap stays, which reads as a
# single cut at 32px and disappears gracefully at 16px), on Dark Cocoa.
fav_s = translate_sk(s_cut, 0, 0)
FP = 14.0
FW = max(SW, SH) + 2 * FP
fav = translate_sk(fav_s, (FW - SW) / 2, FP + (FW - 2 * FP - SH) / 2)
fav_d = skpath_to_d(fav)
(OUT / "favicon.svg").write_text(
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {FW:.2f} {FW:.2f}">\n'
    f'  <rect width="{FW:.2f}" height="{FW:.2f}" fill="{COCOA}"/>\n'
    f'  <path fill="{IVORY}" d="{fav_d}"/>\n</svg>\n'
)

# ---------- Wordmark with claim ----------
# Claim set in Inter (interface face) — supplied as live text in the lockup
# for editability; the wordmark remains outlined.
claim = "THE CRAFT OF FINISHED SPACES."
# Lockup width = wordmark width; claim sits below with a hairline above it.
LH = WM_H + 46
lockup_body = f"""  <path fill="{{fill}}" d="{wm_d}"/>
  <text x="{WM_W/2:.2f}" y="{WM_H + 34:.2f}" text-anchor="middle" fill="{{fill}}"
        font-family="Inter Variable, Inter, Helvetica, Arial, sans-serif" font-size="11.5"
        font-weight="450" letter-spacing="3.6">{claim}</text>"""
for name, fill in [("sarto-lockup.svg", COCOA), ("sarto-lockup-light.svg", IVORY), ("sarto-lockup-mono.svg", "currentColor")]:
    (OUT / name).write_text(svg(WM_W, LH, lockup_body.replace("{fill}", fill)))

# ---------- Stacked lockup: monogram above wordmark ----------
# Secondary lockup for square formats (social avatars, stamps).
ST_W = max(WM_W, MW) + 20
mono_small_scale = 0.72
mono_s = SkPath()
pen = SkiaPen(None, mono_s)
mono.draw(TP(pen, (mono_small_scale, 0, 0, mono_small_scale, (ST_W - MW * mono_small_scale) / 2, 0)))
wm_s = translate_sk(wm, (ST_W - WM_W) / 2, MH * mono_small_scale + 14)
ST_H = MH * mono_small_scale + 14 + WM_H + 8
for name, fill in [("sarto-stacked.svg", COCOA), ("sarto-stacked-light.svg", IVORY), ("sarto-stacked-mono.svg", "currentColor")]:
    (OUT / name).write_text(
        svg(round(ST_W, 2), round(ST_H, 2), f'  <path fill="{fill}" d="{skpath_to_d(mono_s)}"/>\n  <path fill="{fill}" d="{skpath_to_d(wm_s)}"/>')
    )

print("wordmark", WM_W, WM_H, "monogram", MW_R, MH_R)

# ---------- Export path data for the React <Logo> component ----------
ts = ROOT / "src/components/brand/paths.ts"
ts.parent.mkdir(parents=True, exist_ok=True)
ts.write_text(
    "// Generated by tools/make-logo.py. Do not edit by hand; run `npm run logo`.\n"
    f"export const wordmark = {{ viewBox: \"0 0 {WM_W} {WM_H}\", width: {WM_W}, height: {WM_H}, d: \"{wm_d}\" }};\n"
    f"export const monogram = {{ viewBox: \"0 0 {MW_R} {MH_R}\", width: {MW_R}, height: {MH_R}, d: \"{mono_d}\" }};\n"
)
print("paths.ts written")
