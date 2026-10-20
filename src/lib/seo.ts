import type { Metadata } from "next";
import { getDictionary, site } from "@/content";
import { htmlLang, locales, type Locale } from "./i18n";
import { expertiseSlugs, href, type ExpertiseKey, type SectionKey } from "./routes";

type PageMeta = {
  locale: Locale;
  section: SectionKey;
  expertise?: ExpertiseKey;
  title?: string;
  description?: string;
};

/** Builds canonical + hreflang alternates for a page in every language. */
export function pageMetadata({ locale, section, expertise, title, description }: PageMeta): Metadata {
  const t = getDictionary(locale);
  const path = (l: Locale) =>
    expertise ? href(l, "expertise", expertiseSlugs[expertise][l]) : href(l, section);
  const languages: Record<string, string> = {};
  for (const l of locales) languages[htmlLang[l]] = `${site.url}${path(l)}`;
  languages["x-default"] = `${site.url}${path("de")}`;

  // The layout applies `meta.titleTemplate` ("%s · SARTO") to page titles; the
  // homepage opts out with an absolute title so the brand is not repeated.
  const fullTitle = title ? t.meta.titleTemplate.replace("%s", title) : `${site.name} · ${site.claim}`;
  const desc = description ?? t.meta.description;

  return {
    title: title ? title : { absolute: fullTitle },
    description: desc,
    alternates: { canonical: `${site.url}${path(locale)}`, languages },
    openGraph: {
      title: fullTitle,
      description: t.meta.ogDescription,
      siteName: site.name,
      locale: locale === "de" ? "de_CH" : "en_GB",
      type: "website",
      url: `${site.url}${path(locale)}`,
      images: [{ url: `${site.url}/${locale}/opengraph-image`, width: 1200, height: 630, alt: site.claim }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description: t.meta.ogDescription },
  };
}
