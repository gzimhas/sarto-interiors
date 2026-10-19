# Missing assets and open points (v3, 19.10.2026)

Everything below is marked in the code as `TO_VERIFY`, `CONCEPT_IMAGE` or `REAL_IMAGE_REQUIRED`. Nothing is converted into a claim until replaced.

## Resolved in v3

| Item | Value | Where |
|---|---|---|
| Legal entity | **Fernsicht Immobilien AG** (trading company behind SARTO). Register and UID still open. | `site.ts → legalEntity`, Imprint, Privacy, footer |
| Showroom address | Industriestrasse 160/162, 8957 Spreitenbach | `site.ts → contact.address`, Showroom, Contact, footer |
| Contact email | contact@sarto-interiors.ch (stated as «contact@sarto…» by GH; domain assumed, mailbox must exist before launch) | `site.ts → contact.email` |
| Domains | sarto-interiors.ch (primary), sarto-interiors.com, sartointeriors.ch, sartoliving.ch → 308 to .ch. DNS at Hostpoint still to be set (A 76.76.21.21, CNAME www → cname.vercel-dns.com). | Vercel project |
| Showroom plan | POSTARCH proposal design, 24 pages, dated 14.10.2026. Zones, areas, materials and appliance partners on the Showroom page come from this plan. | `showroom.zones`, `public/images/showroom-plan.jpg` |
| Reference photography | Obermumpf AG, Gersau SZ, Grenchen SO (Liegenschaftsfotos, 19.10.2026): 25 photographs. Bellikon AG (villa) and Arosa GR (chalet apartment), 19.10.2026: 19 photographs (WhatsApp quality, 1280–1600 px; originals requested). All lightly colour-graded. | `public/images/projects/*`, `site.ts → projects` |
| Concept visuals | 22 tiles from the two SARTO moodboards, upscaled 2–3× (soft at full width). Labelled «Visualisierung» on the site. | `public/images/concept/*` |

## Blocking before public launch

| # | Item | Where | Owner |
|---|---|---|---|
| 1 | **Register entry and UID of Fernsicht Immobilien AG**; registered seat if different from Spreitenbach. | `legal.imprint` | Gzim |
| 2 | **Trademark and company-name check for «SARTO»** (CH + EU, classes 20/37/42). Note: Sarto Beteiligungen AG, St. Gallen exists; sarto.ch is held by a third party. | before launch | Legal |
| 3 | **Mailbox contact@sarto-interiors.ch** and a phone number. | `site.ts → contact` | SARTO |
| 4 | **Contact form delivery**: Resend account, verified sender domain, then set `RESEND_API_KEY`, `ENQUIRY_TO`, `ENQUIRY_FROM` on Vercel. Until then the form shows an error with the direct email (no false success). | `api/enquiry/route.ts`, Vercel env | Tech |
| 5 | **Privacy notice (DSG)** once hosting, form and analytics are decided. | `legal.privacy` | Legal |
| 6 | **Reference sign-off by Limani**: for Bellikon, Arosa, Obermumpf, Gersau, Grenchen confirm scope, year, and that the owner agrees to publication. Bellikon and Arosa are owned by GH (stated 19.10.2026): publication consent given, exterior shots stay. Scope on Bellikon/Arosa confirmed by GH (19.10.2026: everything shown was made by Limani); both set to `verified`. Year of completion still to be supplied. Year fields currently `TO_VERIFY`. | `site.ts → projects` | Limani / Gzim |
| 7 | **Operational promises** marked `// OP` in `de.ts` / `en.ts` (veneer laid by picture, inspection before dispatch, agreed dates, series production for developers). | content | Limani |
| 8 | **Role model sign-off**: which design and coordination services SARTO delivers itself, which through partners (Crafted by us / Designed with us / Delivered together). Role tags on the six service areas are a proposal. | `expertise.areas` | Gzim |
| 9 | **Group project images on the Developers page** (Küsnacht HIDE, Killwangen, Bremgarten) are loaded from cms.smzh.ch and credited «Projekt der Gruppe · smzh Real Estate Advisory». Confirm this framing or replace with SARTO references. | `site.ts → images group-*` | Gzim |
| 10 | **Floor plan publication**: the POSTARCH drawing is shown as «Grundriss, Entwurfsplanung». Confirm POSTARCH agrees to publication, or replace with a SARTO-drawn schematic. | Showroom page | Gzim / POSTARCH |

## Photography still required (REAL_IMAGE_REQUIRED)

| Key | Shot | Format |
|---|---|---|
| `workshop-wide` | Limani workshop, people at work, natural light | landscape ≥ 2800 px |
| `team` | Authentic team portrait in the workshop | 3:2 |
| Hero | Render supplied by GH (19.10.2026, 1774 px, labelled «Visualisierung»). To be replaced by the first finished SARTO space in walnut/stone, photographed. | landscape ≥ 2800 px |
| Concept visuals | Full-resolution renders (≥ 2400 px) for the 22 moodboard tiles currently upscaled from ~400 px. | — |

## Limani

- Company history, location, founding year, team size: not stated anywhere → the story page says «family business with its own manufacturing» and nothing more.
- Country of manufacture: deliberately not stated.
- Three to five statements from the Limani team on what good craftsmanship means to them (brief, section 6) would make the Craft page less interchangeable.

## Nice to have

- Hero video (subtle, 10–15 s loop, no sound).
- Analytics decision (privacy-preserving) before the privacy notice is written.
- Developer page: a concrete package offer (kitchen, bathroom furniture, wardrobe package for a defined number of units, incl. sampling and project calculation) once unit costs are reliable.
