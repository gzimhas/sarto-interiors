# SARTO — Brand system (v1.0, Oktober 2026)

## Logo decision

**Chosen: the serif wordmark (moodboard route «02 Wordmark Classic») plus a new monogram, «the cut».**

Wordmark. SARTO is set in Cormorant Garamond Regular, capitals only, tracking 0.30 em, outlined as paths (font-independent, editable in Illustrator/Figma). High-contrast serif, no ornament. It is the only logo used in the website header and footer.

Monogram. The serif S with one 45° cut through the spine. The two pieces meet without offset: the tailor's cut, the joiner's mitre, the shadow gap. At favicon size the cut disappears and a clean S remains. It is used for the favicon, the menu overlay, social avatars and the stacked lockup.

Rejected and why:
- **Route 01 (S with vertical seam).** Built and tested. Through a serif S the vertical line reads as a dollar sign. Disqualified.
- **Route 04 (Signature).** The swash is an ornamental flourish, explicitly excluded by the brief.
- **Routes 03 and 06 (geometric sans wordmarks).** Lose the atelier warmth and drift towards the FORMANO direction. The serif is the differentiator against kitchen-studio and SaaS aesthetics.
- **Route 05 (Stacked).** Kept as a secondary lockup only, with the new monogram.

## Assets (`public/brand/`)

| File | Use |
|---|---|
| `sarto-wordmark.svg` / `-light.svg` / `-mono.svg` | Primary horizontal wordmark, dark / ivory / currentColor |
| `sarto-lockup.svg` / `-light.svg` / `-mono.svg` | Wordmark with claim «THE CRAFT OF FINISHED SPACES.» (claim as live text in Inter) |
| `sarto-monogram.svg` / `-light.svg` / `-mono.svg` | Standalone S monogram |
| `sarto-stacked.svg` / `-light.svg` / `-mono.svg` | Monogram above wordmark (square formats) |
| `favicon.svg` | S on Dark Cocoa |

Regenerate with `npm run logo` (edits go into `tools/make-logo.py`, not into the SVGs).

Minimum sizes: wordmark 90 px wide on screen, 22 mm in print. Monogram 16 px. Clear space: the height of the S on all sides.

## Colour

| Token | Hex | Role |
|---|---|---|
| Dark Cocoa | #201915 | Primary dark background |
| Warm Ivory | #F3EEE6 | Light editorial background |
| Walnut | #6B4A35 | Material-led accent |
| Stone Taupe | #B5A79A | Dividers, secondary text |
| Charcoal | #28211D | Text on light surfaces |

Derived surface tones (placeholders and UI only): ivory-deep #EBE4DA, cocoa-soft #2A211C, cocoa-line #3A2F29.

Note: the earlier brand-guide PDF listed Limestone/Bronze/Warm Grey. The master brief's palette (above) is binding; Bronze was dropped (gold effects are excluded).

## Typography

- Display: Cormorant Garamond 400 (500 for emphasis, 400 italic sparingly). Headlines end with a full stop.
- Interface: Inter Variable. Body 16 px / 1.6. Eyebrows 11 px, uppercase, tracking 0.18 em, weight 500.
- No letter spacing in paragraphs. No bold display weights.

## Recurring visual code

Material edge, joint, grain, shadow line. In the UI: hairline rules, the shadow-gap line across surfaces, the mitre cut in the monogram. No gradients as decoration, no cards with shadows, no bright buttons.

## Voice

Short sentences. Confident, understated, editorial. German hero line: «Handwerk, das Raum wird.» (decision: tighter than the guide's «Handwerkskunst, die Räume prägt.»; the brand statement «Der fertige Raum, aus einer Hand.» stays as eyebrow/claim). Banned phrases per brief. No Swiss-manufacturing claim anywhere.
