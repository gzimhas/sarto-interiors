"""
SARTO logo build (v2, 19.10.2026).

Builds the wordmark and the monogram as vector paths from the self-hosted
Cormorant Garamond 500, applies the two brand details (R leg with a straight
diagonal cut; S monogram with a 45-degree mitre joint and offset halves),
and writes:
  src/components/brand/paths.ts        (used by Header, Footer, OG image)
  public/brand/*.svg                   (wordmark, monogram, stacked, lockup; default/light/mono)
  public/favicon.svg

Run: python3 tools/logo.py   (from the project root)
"""
import pathlib, re
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
import pathops

ROOT = pathlib.Path(__file__).resolve().parent.parent
CORMORANT = ROOT / "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff"
INTER = ROOT / "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2"

COCOA, LIME, BLACK = "#201915", "#F5F2EC", "#000000"
TRACK = 110          # letter-spacing in font units (0.11 em)
CAP = 625            # Cormorant cap height

font = TTFont(CORMORANT)
gs, cmap = font.getGlyphSet(), font.getBestCmap()


def glyph_path(ch, gset=gs, cm=cmap):
    p = pathops.Path()
    gset[cm[ord(ch)]].draw(p.getPen())
    return p


def poly(*pts):
    p = pathops.Path()
    p.moveTo(*pts[0])
    for q in pts[1:]:
        p.lineTo(*q)
    p.close()
    return p


def translate(p, dx, dy):
    q = pathops.Path()
    pen = q.getPen()
    p.draw(TransformPen(pen, dx, dy))
    return q


class TransformPen:
    def __init__(self, pen, dx, dy):
        self.pen, self.dx, self.dy = pen, dx, dy

    def _t(self, pt):
        return (pt[0] + self.dx, pt[1] + self.dy)

    def moveTo(self, pt): self.pen.moveTo(self._t(pt))
    def lineTo(self, pt): self.pen.lineTo(self._t(pt))
    def curveTo(self, *pts): self.pen.curveTo(*[self._t(p) for p in pts])
    def qCurveTo(self, *pts): self.pen.qCurveTo(*[self._t(p) if p else None for p in pts])
    def closePath(self): self.pen.closePath()
    def endPath(self): self.pen.endPath()


# ---------------------------------------------------------------- R detail
def build_R():
    R = glyph_path("R")
    # 1. remove the foot flare: straighten the right edge of the leg down to the baseline
    flare = poly((499, 150), (622, 0), (622, -40), (800, -40), (800, 150))
    R = pathops.op(R, flare, pathops.PathOp.DIFFERENCE)
    # 2. clean diagonal cut, perpendicular to the leg: line through (538,0) rising at slope 0.8
    cut = poly((538, 0), (538, -40), (800, -40), (800, 0.8 * (800 - 538)))
    R = pathops.op(R, cut, pathops.PathOp.DIFFERENCE)
    return R


# ---------------------------------------------------------------- S monogram
def build_monogram():
    S = glyph_path("S")
    b = S.bounds
    h = b[3] - b[1]
    cx, cy = (b[0] + b[2]) / 2, (b[1] + b[3]) / 2
    gap = 0.07 * h          # joint width
    off = 0.03 * h          # offset of the halves along the joint
    # 45-degree band through the centre, direction (1,1): points with |(x-cx)-(y-cy)| < gap/2*sqrt2
    k = gap / 2 * 2 ** 0.5
    big = 2000
    band = poly((cx - big, cy - big - k), (cx + big, cy + big - k), (cx + big, cy + big + k), (cx - big, cy - big + k))
    upper_half = poly((cx - big, cy - big + k), (cx + big, cy + big + k), (cx + big, cy + big + 3 * big), (cx - big, cy + 3 * big))
    lower_half = poly((cx - big, cy - big - k), (cx + big, cy + big - k), (cx + big, cy - 3 * big), (cx - big, cy - 3 * big))
    upper = pathops.op(S, upper_half, pathops.PathOp.INTERSECTION)
    lower = pathops.op(S, lower_half, pathops.PathOp.INTERSECTION)
    d = off / 2 ** 0.5
    upper = translate(upper, d, d)
    lower = translate(lower, -d, -d)
    out = pathops.Path()
    for part in (upper, lower):
        for c in part.contours:
            bb = c.bounds
            if (bb[2] - bb[0]) * (bb[3] - bb[1]) < 0.002 * h * h:   # drop slivers left by the cut
                continue
            out.addPath(c)
    return out


# ---------------------------------------------------------------- wordmark
def build_wordmark():
    out = pathops.Path()
    x = 0
    for ch in "SARTO":
        p = build_R() if ch == "R" else glyph_path(ch)
        out.addPath(translate(p, x, 0))
        x += gs[cmap[ord(ch)]].width + TRACK
    return out


def to_svg_d(p, scale, ox, oy, precision=2):
    """Flip y (font y-up → svg y-down), scale, translate. Returns the d string."""
    pen = SVGPathPen(None, ntos=lambda v: f"{v:.{precision}f}".rstrip("0").rstrip("."))
    class T:
        def moveTo(s, pt): pen.moveTo(s.t(pt))
        def lineTo(s, pt): pen.lineTo(s.t(pt))
        def curveTo(s, *pts): pen.curveTo(*[s.t(q) for q in pts])
        def qCurveTo(s, *pts): pen.qCurveTo(*[s.t(q) if q is not None else None for q in pts])
        def closePath(s): pen.closePath()
        def endPath(s): pen.endPath()
        def t(s, pt): return ((pt[0] - ox) * scale, (oy - pt[1]) * scale)
    p.draw(T())
    return pen.getCommands()


def svg(width, height, body, fill):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width:.2f} {height:.2f}" '
            f'width="{width:.2f}" height="{height:.2f}" role="img" aria-label="SARTO">\n{body.replace("FILL", fill)}\n</svg>\n')


def main():
    W = build_wordmark()
    M = build_monogram()
    # normalise: wordmark height 100 units from bottom overshoot to top
    wb = W.bounds
    ws = 100 / (wb[3] - wb[1])
    w_w, w_h = (wb[2] - wb[0]) * ws, 100.0
    w_d = to_svg_d(W, ws, wb[0], wb[3])
    mb = M.bounds
    ms = 100 / (mb[3] - mb[1])
    m_w, m_h = (mb[2] - mb[0]) * ms, 100.0
    m_d = to_svg_d(M, ms, mb[0], mb[3])

    # paths.ts
    ts = (
        "// Generated by tools/logo.py. Do not edit by hand.\n"
        f'export const wordmark = {{ viewBox: "0 0 {w_w:.2f} {w_h:.2f}", width: {w_w:.2f}, height: {w_h:.2f}, d: "{w_d}" }};\n'
        f'export const monogram = {{ viewBox: "0 0 {m_w:.2f} {m_h:.2f}", width: {m_w:.2f}, height: {m_h:.2f}, d: "{m_d}" }};\n'
    )
    (ROOT / "src/components/brand/paths.ts").write_text(ts)

    brand = ROOT / "public/brand"
    brand.mkdir(exist_ok=True)
    variants = {"": COCOA, "-light": LIME, "-mono": BLACK}

    # wordmark
    for suf, col in variants.items():
        (brand / f"sarto-wordmark{suf}.svg").write_text(svg(w_w, w_h, f'<path fill="FILL" d="{w_d}"/>', col))
    # monogram, square canvas with clear space = 20 %
    side = m_h * 1.4
    mx, my = (side - m_w) / 2, (side - m_h) / 2
    for suf, col in variants.items():
        (brand / f"sarto-monogram{suf}.svg").write_text(
            svg(side, side, f'<path fill="FILL" transform="translate({mx:.2f} {my:.2f})" d="{m_d}"/>', col))
    # favicon: monogram on limestone
    (ROOT / "public/favicon.svg").write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {side:.2f} {side:.2f}">'
        f'<rect width="{side:.2f}" height="{side:.2f}" fill="{LIME}"/>'
        f'<path fill="{COCOA}" transform="translate({mx:.2f} {my:.2f})" d="{m_d}"/></svg>\n')

    # claim in Inter for the lockup
    inter = TTFont(INTER)
    igs, icm = inter.getGlyphSet(), inter.getBestCmap()
    claim = "THE CRAFT OF FINISHED SPACES."
    cp = pathops.Path(); x = 0
    for ch in claim:
        if ch == " ":
            x += igs[icm[ord(" ")]].width + 240; continue
        g = pathops.Path(); igs[icm[ord(ch)]].draw(g.getPen())
        cp.addPath(translate(g, x, 0)); x += igs[icm[ord(ch)]].width + 240   # 0.12 em tracking at 2048 upm
    cb = cp.bounds
    # claim cap height = 1/3 of wordmark cap height; Inter cap height 1490/2048
    cs = w_w / (cb[2] - cb[0])          # claim as wide as the wordmark
    c_w = w_w
    claim_h = (cb[3] - cb[1]) * cs
    c_d = to_svg_d(cp, cs, cb[0], cb[3])

    # lockup: wordmark, gap 0.6 cap, claim centred
    gap = 30
    L_w, L_h = max(w_w, c_w), w_h + gap + claim_h
    for suf, col in variants.items():
        body = (f'<path fill="FILL" transform="translate({(L_w - w_w) / 2:.2f} 0)" d="{w_d}"/>\n'
                f'<path fill="FILL" transform="translate({(L_w - c_w) / 2:.2f} {w_h + gap:.2f})" d="{c_d}"/>')
        (brand / f"sarto-lockup{suf}.svg").write_text(svg(L_w, L_h, body, col))

    # stacked: monogram (height = 1.6 cap) over wordmark over claim
    mono_h = 160
    msc = mono_h / m_h
    S_w = max(w_w, c_w)
    S_h = mono_h + 50 + w_h + gap + claim_h
    for suf, col in variants.items():
        body = (f'<path fill="FILL" transform="translate({(S_w - m_w * msc) / 2:.2f} 0) scale({msc:.4f})" d="{m_d}"/>\n'
                f'<path fill="FILL" transform="translate({(S_w - w_w) / 2:.2f} {mono_h + 50:.2f})" d="{w_d}"/>\n'
                f'<path fill="FILL" transform="translate({(S_w - c_w) / 2:.2f} {mono_h + 50 + w_h + gap:.2f})" d="{c_d}"/>')
        (brand / f"sarto-stacked{suf}.svg").write_text(svg(S_w, S_h, body, col))

    print(f"wordmark {w_w:.1f}x{w_h:.1f}  monogram {m_w:.1f}x{m_h:.1f}  claim {c_w:.1f}x{claim_h:.1f}")


if __name__ == "__main__":
    main()
