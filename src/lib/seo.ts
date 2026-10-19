import type { Metadata } from "next";
import { getDictionary, site } from "@/content";
import type { Project } from "@/content/types";
import { htmlLang, locales, type Locale } from "./i18n";
import { expertiseSlugs, href, type ExpertiseKey, type SectionKey } from "./routes";

type PageMeta = {
  locale: Locale;
  section: SectionKey;
  expertise?: ExpertiseKey;
  project?: Project;
  title?: string;
  description?: string;
};

/** Builds canonical + hreflang alternates for a page in every language. */
export function pageMetadata({ locale, section, expertise, project, title, description }: PageMeta): Metadata {
  const t = getDictionary(locale);
  const path = (l: Locale) =>
    expertise ? href(l, "expertise", expertiseSlugs[expertise][l]) : project ? href(l, "projects", project.slug[l]) : href(l, section);
  const languages: Record<string, string> = {};
  for (const l of locales) languages[htmlLang[l]] = `${site.url}${path(l)}`;
  languages["x-default"] = `${site.url}${path("de")}`;

  const fullTitle = title ? t.meta.titleTemplate.replace("%s", title) : `${site.name} · ${site.claim}`;
  const desc = description ?? t.meta.description;

  return {
    title: fullTitle,
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
