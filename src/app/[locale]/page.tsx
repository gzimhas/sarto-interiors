import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { AudienceSplit, ExpertiseGrid, FinalCta, WorkStrip, ZoneList } from "@/components/sections/Shared";
import { EditorialImage } from "@/components/EditorialImage";
import { Reveal } from "@/components/Reveal";
import { Action, Container, Eyebrow, Section } from "@/components/ui";
import { getDictionary } from "@/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({ locale, section: "home" });
}

/**
 * Homepage in seven chapters (editorial lead copy v3, Oct 2026):
 * 01 Hero · 02 Selected work · 03 Expertise · 04 Craft
 * 05 Two ways in (architects / developers) · 06 Showroom · 07 Contact
 */
export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const t = getDictionary(locale);
  const h = t.home;

  return (
    <>
      {/* 01 Hero */}
      <Hero locale={locale} />

      {/* 02 Selected work */}
      <Section>
        <Container>
          <Reveal className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <Eyebrow>{h.work.eyebrow}</Eyebrow>
              <h2 className="mt-6 text-h2">{h.work.headline}</h2>
            </div>
            <div className="space-y-4 md:col-span-5 md:col-start-8">
              {h.work.intro.map((p) => (
                <p key={p} className="text-[0.9375rem] text-charcoal/70">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <WorkStrip locale={locale} />
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
            <Action href={href(locale, "projects")}>{h.work.cta}</Action>
            <p className="max-w-md text-[0.8125rem] text-charcoal/55">{h.work.note}</p>
          </div>
        </Container>
      </Section>

      {/* 03 Expertise: four product worlds */}
      <Section tone="ivory-deep">
        <Container>
          <Reveal className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <Eyebrow>{h.expertise.eyebrow}</Eyebrow>
              <h2 className="mt-6 text-h2">{h.expertise.headline}</h2>
            </div>
            <div className="space-y-4 md:col-span-5 md:col-start-8">
              {h.expertise.intro.map((p) => (
                <p key={p} className="text-[0.9375rem] text-charcoal/70">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <ExpertiseGrid locale={locale} ctaLabel={h.expertise.cta} />
          <div className="mt-14">
            <Action href={href(locale, "expertise")}>{t.expertise.headline}</Action>
          </div>
        </Container>
      </Section>

      {/* 04 Craft */}
      <Section tone="cocoa">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow className="text-ivory/50">{h.craft.eyebrow}</Eyebrow>
              <h2 className="mt-6 text-h2">{h.craft.headline}</h2>
              <div className="mt-8 max-w-md space-y-4">
                {h.craft.intro.map((p) => (
                  <p key={p} className="text-[1rem] text-ivory/70">
                    {p}
                  </p>
                ))}
              </div>
              <Action href={href(locale, "craft")} tone="light" className="mt-10">
                {h.craft.cta}
              </Action>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-2 gap-4">
                <EditorialImage id="corner" locale={locale} ratio="4 / 5" sizes="(min-width:1024px) 25vw, 50vw" />
                <EditorialImage id="hands" locale={locale} ratio="4 / 5" sizes="(min-width:1024px) 25vw, 50vw" className="mt-12" />
              </div>
              <ul className="mt-12 border-t border-ivory/15">
                {h.craft.themes.map((th, i) => (
                  <Reveal as="li" key={th.title} delay={i * 70} className="grid gap-2 border-b border-ivory/15 py-5 sm:grid-cols-12 sm:gap-6">
                    <h3 className="display text-h3 sm:col-span-4">{th.title}</h3>
                    <p className="text-[0.9375rem] text-ivory/70 sm:col-span-8">{th.text}</p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* 05 Two ways in */}
      <Section>
        <Container>
          <Reveal className="mb-14">
            <Eyebrow>{h.audiences.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-h2">{h.audiences.headline}</h2>
          </Reveal>
          <AudienceSplit locale={locale} />
        </Container>
      </Section>

      {/* 06 Showroom */}
      <Section tone="ivory-deep">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <EditorialImage id="showroom-axo" locale={locale} ratio="2 / 1" sizes="(min-width:768px) 58vw, 100vw" />
            </Reveal>
            <Reveal className="md:col-span-4 md:col-start-9" delay={100}>
              <Eyebrow>{h.showroom.eyebrow}</Eyebrow>
              <h2 className="mt-6 text-h2">{h.showroom.headline}</h2>
              <div className="mt-6 space-y-4">
                {h.showroom.intro.map((p) => (
                  <p key={p} className="text-[0.9375rem] text-charcoal/80">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-4 text-[0.8125rem] text-charcoal/55">{h.showroom.status}</p>
              <Action href={href(locale, "showroom")} className="mt-8">
                {h.showroom.cta}
              </Action>
            </Reveal>
          </div>
          <div className="mt-20">
            <Eyebrow className="mb-8">{h.showroom.zonesLabel}</Eyebrow>
            <ZoneList zones={t.showroom.zones.filter((z) => z.image).slice(0, 4)} locale={locale} compact />
          </div>
        </Container>
      </Section>

      {/* 07 Contact */}
      <FinalCta locale={locale} headline={h.final.headline} copy={h.final.copy} primary={h.final.primary} secondary={h.final.secondary} />
    </>
  );
}
