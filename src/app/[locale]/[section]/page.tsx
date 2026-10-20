import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactPage } from "@/components/pages/ContactPage";
import { CraftPage } from "@/components/pages/CraftPage";
import { DevelopersPage } from "@/components/pages/DevelopersPage";
import { ExpertiseIndexPage } from "@/components/pages/ExpertisePages";
import { LegalPage } from "@/components/pages/LegalPage";
import { ProfessionalsPage } from "@/components/pages/ProfessionalsPage";
import { WorkPage } from "@/components/pages/WorkPage";
import { ShowroomPage } from "@/components/pages/ShowroomPage";
import { StoryPage } from "@/components/pages/StoryPage";
import { getDictionary } from "@/content";
import { isLocale, locales } from "@/lib/i18n";
import { sectionFromSlug, sectionSlugs, type SectionKey } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string; section: string }>;

export function generateStaticParams() {
  const out: { locale: string; section: string }[] = [];
  for (const locale of locales) {
    for (const key of Object.keys(sectionSlugs) as SectionKey[]) {
      const slug = sectionSlugs[key][locale];
      if (slug) out.push({ locale, section: slug });
    }
  }
  return out;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale)) return {};
  const key = sectionFromSlug(locale, section);
  if (!key || key === "home") return {};
  const t = getDictionary(locale);
  const titles: Record<Exclude<SectionKey, "home">, string> = {
    projects: t.projects.headline,
    expertise: t.expertise.headline,
    professionals: t.professionals.headline,
    developers: t.developers.headline,
    craft: t.craft.headline,
    story: t.story.headline,
    showroom: t.showroom.headline,
    contact: t.contact.headline,
    imprint: t.legal.imprint.title,
    privacy: t.legal.privacy.title,
  };
  const descriptions: Partial<Record<SectionKey, string>> = {
    projects: t.projects.intro,
    expertise: t.expertise.intro,
    professionals: t.professionals.intro[0],
    developers: t.developers.lede,
    craft: t.craft.lede,
    story: t.story.lede,
    showroom: t.showroom.lede,
    contact: t.contact.lede,
  };
  const label = t.nav.labels[key];
  const headline = titles[key].replace(/\.$/, "");
  return pageMetadata({
    locale,
    section: key,
    title: headline === label ? label : `${label} · ${headline}`,
    description: descriptions[key],
  });
}

export default async function SectionPage({ params }: { params: Params }) {
  const { locale, section } = await params;
  if (!isLocale(locale)) notFound();
  const key = sectionFromSlug(locale, section);
  if (!key || key === "home") notFound();

  switch (key) {
    case "projects":
      return <WorkPage locale={locale} />;
    case "expertise":
      return <ExpertiseIndexPage locale={locale} />;
    case "professionals":
      return <ProfessionalsPage locale={locale} />;
    case "developers":
      return <DevelopersPage locale={locale} />;
    case "craft":
      return <CraftPage locale={locale} />;
    case "story":
      return <StoryPage locale={locale} />;
    case "showroom":
      return <ShowroomPage locale={locale} />;
    case "contact":
      return <ContactPage locale={locale} />;
    case "imprint":
      return <LegalPage locale={locale} kind="imprint" />;
    case "privacy":
      return <LegalPage locale={locale} kind="privacy" />;
  }
}
