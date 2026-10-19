import type { MetadataRoute } from "next";
import { isPublished, projects, site } from "@/content";
import { locales } from "@/lib/i18n";
import { expertiseSlugs, href, sectionSlugs, type ExpertiseKey, type SectionKey } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  const now = new Date();
  for (const locale of locales) {
    for (const key of Object.keys(sectionSlugs) as SectionKey[]) {
      out.push({ url: `${site.url}${href(locale, key)}`, lastModified: now, changeFrequency: "monthly", priority: key === "home" ? 1 : 0.7 });
    }
    for (const key of Object.keys(expertiseSlugs) as ExpertiseKey[]) {
      out.push({ url: `${site.url}${href(locale, "expertise", expertiseSlugs[key][locale])}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
    }
    for (const p of projects.filter(isPublished)) {
      out.push({ url: `${site.url}${href(locale, "projects", p.slug[locale])}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 });
    }
  }
  return out;
}
