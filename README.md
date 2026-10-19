# SARTO — Website

**The craft of finished spaces.** Bilingual (DE default / EN) brand website for SARTO, built with Next.js App Router, TypeScript and Tailwind CSS 4. No CMS, no third-party fonts, no invented integrations.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000  → redirects to /de
npm run build && npm run start
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the public origin (used for canonical URLs, hreflang and the sitemap).

Node 20+ required. Python 3 with `fonttools`, `skia-pathops` and `playwright` is only needed for the two tooling scripts (`npm run logo`, `npm run screenshots`).

## Structure

```
src/
  app/
    [locale]/                 de | en — root layout (sets <html lang>)
      page.tsx                Homepage (seven sections, see COPY_REVIEW.md)
      [section]/page.tsx      Projects, Expertise, For Professionals, Craft & Process,
                              Our Story, Showroom, Visit & Contact, Imprint, Privacy
      [section]/[slug]/       Expertise detail pages (Kitchens, Wardrobes, Bathrooms, Fitted Interiors)
      opengraph-image.tsx     Generated OG image per language
      not-found.tsx
    api/enquiry/route.ts      Contact endpoint — INTEGRATION_POINT, see below
    sitemap.ts, robots.ts
    globals.css               Design tokens (@theme), typography, placeholder surfaces
  content/
    de.ts, en.ts              All copy, per language (typed by types.ts)
    site.ts                   Facts, image manifest, projects (TO_VERIFY where unconfirmed)
  components/
    brand/Logo.tsx            <Wordmark> and <Monogram> (inline SVG, currentColor)
    brand/paths.ts            Generated path data — do not edit, run `npm run logo`
    EditorialImage.tsx        Image placement system (real image or labelled surface)
    Header.tsx, Footer.tsx    Navigation, DE/EN switch, mobile full-screen menu
    sections/, pages/         Page compositions
public/brand/                 Logo assets (SVG)
tools/make-logo.py            Generates the logo SVGs and paths.ts from the display font
tools/screenshots.py          Desktop/mobile screenshots of every page
screenshots/                  Latest captures (see QA)
```

### Routes

German is the default language and the slugs are localised:

| Page | DE | EN |
|---|---|---|
| Home | `/de` | `/en` |
| Projects | `/de/projekte` | `/en/projects` |
| Expertise | `/de/expertise` (+ `/kuechen`, `/ankleiden`, `/badmoebel`, `/einbauten`) | `/en/expertise` (+ `/kitchens`, `/wardrobes`, `/bathrooms`, `/fitted-interiors`) |
| For Professionals | `/de/fuer-architekten` | `/en/for-professionals` |
| Craft & Process | `/de/handwerk-und-prozess` | `/en/craft-and-process` |
| Our Story | `/de/ueber-sarto` | `/en/our-story` |
| Showroom | `/de/showroom` | `/en/showroom` |
| Visit & Contact | `/de/kontakt` | `/en/visit-and-contact` |
| Imprint / Privacy | `/de/impressum`, `/de/datenschutz` | `/en/imprint`, `/en/privacy` |

The language switch maps each page to its sibling via `src/lib/routes.ts`. The contact page accepts `?path=professional` to preselect the professional path.

### Content rules (enforced by structure)

- Copy lives in `src/content/{de,en}.ts`. Facts live in `src/content/site.ts`.
- Unconfirmed facts are the literal string `TO_VERIFY`. The UI renders them as «wird ergänzt» / «to be confirmed» — never as a claim.
- Images are declared in the manifest (`site.ts → images`). Each has a `status`: `REAL`, `CONCEPT_IMAGE` or `REAL_IMAGE_REQUIRED`. Without `src`, a labelled material surface is rendered. Concept images are labelled on screen in both languages.
- Projects with `verified: false` render as «Konzeptstudie» and never get a detail page.
- `site.showroomOpen` stays `false` until confirmed; the showroom is described as in planning.

### Adding a real photograph

1. Put the file in `public/images/…` (AVIF/WebP/JPEG, ≥ 2400 px on the long edge).
2. In `src/content/site.ts`, set `src`, `width`, `height` and `status: "REAL"` on the matching manifest entry.
3. The `EditorialImage` component switches from surface to `next/image` automatically.

### Adding a verified project

Add an entry to `projects` in `site.ts` with `verified: true`, a cleared image and the fields `scope`/`materials`. Then add a detail route in `[section]/[slug]/page.tsx` (the file documents where). Never add a project without cleared photography and written client consent.

## Contact form — INTEGRATION_POINT

`src/app/api/enquiry/route.ts` validates the submission (required fields, email format, honeypot, file type/size) and currently logs it to the server console. It delivers nothing yet. Before launch connect exactly one delivery (transactional email such as Resend/Postmark/SMTP, or a CRM inbox endpoint) and, if uploads are wanted, an object store for files. No provider is assumed in the code.

## SEO and accessibility

Per-page `<title>`/description, canonical and hreflang alternates (`de-CH`, `en`, `x-default`), Open Graph image per language, `sitemap.xml`, `robots.txt`, semantic landmarks, skip link, keyboard-operable menu with focus management and Escape, `aria-current` on navigation, labelled form fields, `prefers-reduced-motion` respected (reveal animations become no-ops).

## Design system

- Fonts (self-hosted, no external requests): Cormorant Garamond (display) and Inter Variable (interface).
- Colours as `@theme` tokens in `globals.css`: cocoa `#201915`, ivory `#F3EEE6`, walnut `#6B4A35`, taupe `#B5A79A`, charcoal `#28211D`, plus derived surface tones.
- Type scale is fluid (`--text-hero`, `--text-h1`…`--text-eyebrow`).
- Logo and monogram: see `BRAND.md`. Copy decisions and open operational claims: `COPY_REVIEW.md`.

## QA

```bash
npm run build
tools/serve.sh                 # production server on :3077
npm run screenshots            # writes screenshots/*.png (desktop 1440, mobile 390)
```

## Deployment

Any Node host that runs Next.js works. On Vercel: import the repository, set `NEXT_PUBLIC_SITE_URL`, deploy. Add the domain only after the trademark/domain check noted in `MISSING_ASSETS.md`. Set up the contact form delivery before the site goes public.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` / `npm run start` | Production |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run logo` | Regenerate logo SVGs and `paths.ts` from the font |
| `npm run screenshots` | Capture all pages (needs a running server on :3077) |

## v3 (19.10.2026)

- Positioning «Von der Idee bis zum fertigen Raum» with six service areas and the role model Crafted by us / Designed with us / Delivered together (`expertise.areas`).
- New page «Für Entwickler» / «For Developers» (`DevelopersPage.tsx`) with its own enquiry path (`EnquiryForm.tsx`, `api/enquiry/route.ts`).
- Three reference projects with galleries and detail pages (`site.ts → projects`, `ProjectsPage.tsx`).
- Showroom page from the POSTARCH plan: 12 zones, floor plan (`public/images/showroom-plan.jpg`), materials, partners, address.
- Image pipeline: `public/images/concept/*` (moodboard tiles, upscaled, labelled «Visualisierung») and `public/images/projects/*` (reference photographs, graded). Manifest in `site.ts → images`.
- Group project photographs are loaded from `cms.smzh.ch` (`next.config.ts → images.remotePatterns`) and credited.
- Imprint and footer: SARTO ist eine Marke der Fernsicht Immobilien AG.
- Password gate for the preview: `SITE_PASSWORD` (user `sarto`), see `src/proxy.ts`.
