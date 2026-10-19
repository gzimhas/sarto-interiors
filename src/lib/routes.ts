import type { Locale } from "./i18n";

/**
 * Localised URL slugs. Every page has a stable key; the slug differs per
 * language. The language switch maps a page to its sibling via the key.
 */
export const sectionSlugs = {
  home: { de: "", en: "" },
  projects: { de: "projekte", en: "projects" },
  expertise: { de: "leistungen", en: "expertise" },
  professionals: { de: "fuer-architekten", en: "for-architects" },
  developers: { de: "fuer-entwickler", en: "for-developers" },
  craft: { de: "handwerk", en: "craft" },
  story: { de: "ueber-sarto", en: "our-story" },
  showroom: { de: "showroom", en: "showroom" },
  contact: { de: "kontakt", en: "contact" },
  imprint: { de: "impressum", en: "imprint" },
  privacy: { de: "datenschutz", en: "privacy" },
} as const;

export type SectionKey = keyof typeof sectionSlugs;

export const expertiseSlugs = {
  kitchens: { de: "kuechen", en: "kitchens" },
  wardrobes: { de: "ankleiden", en: "wardrobes" },
  bathrooms: { de: "badmoebel", en: "bathrooms" },
  interiors: { de: "innenausbau", en: "architectural-interiors" },
} as const;

export type ExpertiseKey = keyof typeof expertiseSlugs;

export function href(locale: Locale, section: SectionKey, slug?: string): string {
  const base = `/${locale}`;
  const s = sectionSlugs[section][locale];
  const path = s ? `${base}/${s}` : base;
  return slug ? `${path}/${slug}` : path;
}

export function expertiseHref(locale: Locale, key: ExpertiseKey): string {
  return href(locale, "expertise", expertiseSlugs[key][locale]);
}

export function sectionFromSlug(locale: Locale, slug: string): SectionKey | null {
  for (const key of Object.keys(sectionSlugs) as SectionKey[]) {
    if (sectionSlugs[key][locale] === slug) return key;
  }
  return null;
}

export function expertiseFromSlug(locale: Locale, slug: string): ExpertiseKey | null {
  for (const key of Object.keys(expertiseSlugs) as ExpertiseKey[]) {
    if (expertiseSlugs[key][locale] === slug) return key;
  }
  return null;
}

/** Main navigation order (brief, Oct 2026). "Über SARTO" lives in the footer. */
export const mainNav: SectionKey[] = [
  "projects",
  "expertise",
  "professionals",
  "developers",
  "craft",
  "showroom",
  "contact",
];

/** Footer navigation adds the story page. */
export const footerNav: SectionKey[] = [
  "projects",
  "expertise",
  "professionals",
  "developers",
  "craft",
  "story",
  "showroom",
  "contact",
];
