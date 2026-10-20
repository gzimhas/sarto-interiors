import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExpertiseDetailPage } from "@/components/pages/ExpertisePages";
import { getDictionary } from "@/content";
import { isLocale, locales } from "@/lib/i18n";
import { expertiseFromSlug, expertiseSlugs, sectionFromSlug, sectionSlugs, type ExpertiseKey } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string; section: string; slug: string }>;

/**
 * Detail routes: expertise worlds. Work is shown by element on one page,
 * never as individual reference pages.
 */
export function generateStaticParams() {
  const out: { locale: string; section: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const key of Object.keys(expertiseSlugs) as ExpertiseKey[]) {
      out.push({ locale, section: sectionSlugs.expertise[locale], slug: expertiseSlugs[key][locale] });
    }
  }
  return out;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, section, slug } = await params;
  if (!isLocale(locale)) return {};
  const sec = sectionFromSlug(locale, section);
  const t = getDictionary(locale);
  if (sec === "expertise") {
    const key = expertiseFromSlug(locale, slug);
    if (!key) return {};
    const entry = t.expertise.entries.find((e) => e.key === key)!;
    return pageMetadata({ locale, section: "expertise", expertise: key, title: entry.title, description: entry.short });
  }
  return {};
}

export default async function DetailPage({ params }: { params: Params }) {
  const { locale, section, slug } = await params;
  if (!isLocale(locale)) notFound();
  const sec = sectionFromSlug(locale, section);
  if (sec === "expertise") {
    const key = expertiseFromSlug(locale, slug);
    if (!key) notFound();
    return <ExpertiseDetailPage locale={locale} entryKey={key} />;
  }
  notFound();
}
