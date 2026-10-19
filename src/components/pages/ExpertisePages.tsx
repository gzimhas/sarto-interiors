import { EditorialImage } from "../EditorialImage";
import { Reveal } from "../Reveal";
import { ExpertiseGrid, FinalCta, PageIntro, RoleTag } from "../sections/Shared";
import { Action, Container, Eyebrow, Section } from "../ui";
import { getDictionary } from "@/content";
import type { ServiceRole } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { href, type ExpertiseKey } from "@/lib/routes";

export function ExpertiseIndexPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const e = t.expertise;
  const roles = Object.keys(e.areas.roles) as ServiceRole[];
  return (
    <>
      <PageIntro eyebrow={e.eyebrow} headline={e.headline} lede={e.intro} />

      <div className="bg-ivory pb-section">
        <Container>
          <Reveal>
            <EditorialImage id="kitchen-light" locale={locale} ratio="21 / 9" sizes="100vw" priority />
          </Reveal>
        </Container>
      </div>

      {/* Six areas with the transparency model */}
      <Section tone="ivory-deep" className="pt-0">
        <Container>
          <div className="grid gap-12 border-t border-charcoal/15 pt-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>{e.areas.label}</Eyebrow>
              <h2 className="mt-6 text-h2">{e.areas.headline}</h2>
              <p className="mt-8 max-w-md text-[1rem] text-charcoal/75">{e.areas.intro}</p>
              <ul className="mt-10 space-y-5 border-t border-charcoal/15 pt-8">
                {roles.map((r) => (
                  <li key={r} className="grid gap-2 sm:grid-cols-12 sm:gap-4">
                    <div className="sm:col-span-5">
                      <RoleTag role={r} label={e.areas.roles[r].title} />
                    </div>
                    <p className="text-[0.875rem] text-charcoal/65 sm:col-span-7">{e.areas.roles[r].text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="border-t border-charcoal/15">
                {e.areas.items.map((a, i) => (
                  <Reveal as="li" key={a.n} delay={i * 50} className="grid gap-3 border-b border-charcoal/15 py-6 md:grid-cols-12 md:gap-6">
                    <span className="display text-[1.3rem] text-charcoal/40 md:col-span-1">{a.n}</span>
                    <div className="md:col-span-11">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="display text-h3">{a.title}</h3>
                        <RoleTag role={a.role} label={e.areas.roles[a.role].title} />
                      </div>
                      <p className="mt-2 max-w-lg text-[0.9375rem] text-charcoal/70">{a.text}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <p className="mt-6 max-w-lg text-[0.8125rem] text-charcoal/55">{e.areas.note}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Four product worlds */}
      <Section>
        <Container>
          <Reveal className="mb-14">
            <Eyebrow>{e.worldsLabel}</Eyebrow>
            <h2 className="mt-6 text-h2">{e.worldsHeadline}</h2>
          </Reveal>
          <ExpertiseGrid locale={locale} ctaLabel={t.common.readMore} />
        </Container>
      </Section>

      <FinalCta locale={locale} headline={t.home.final.headline} copy={t.home.final.copy} primary={t.home.final.primary} secondary={t.home.final.secondary} />
    </>
  );
}

export function ExpertiseDetailPage({ locale, entryKey }: { locale: Locale; entryKey: ExpertiseKey }) {
  const t = getDictionary(locale);
  const e = t.expertise;
  const entry = e.entries.find((x) => x.key === entryKey)!;

  return (
    <>
      <PageIntro eyebrow={e.eyebrow} headline={entry.title} lede={entry.lede} />

      <div className="bg-ivory pb-section">
        <Container>
          <Reveal>
            <EditorialImage id={entry.image} locale={locale} ratio="21 / 9" sizes="100vw" priority />
          </Reveal>
        </Container>
      </div>

      <Section tone="ivory-deep" className="pt-0">
        <Container>
          <div className="grid gap-14 border-t border-charcoal/15 pt-14 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <Eyebrow>{entry.materials.title}</Eyebrow>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-charcoal/85">{entry.materials.text}</p>
            </Reveal>
            <Reveal className="md:col-span-3 md:col-start-7" delay={80}>
              <Eyebrow>{entry.applications.title}</Eyebrow>
              <ul className="mt-5 space-y-2 text-[0.9375rem] text-charcoal/80">
                {entry.applications.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="md:col-span-3" delay={140}>
              <Eyebrow>{entry.options.title}</Eyebrow>
              <ul className="mt-5 space-y-2 text-[0.9375rem] text-charcoal/80">
                {entry.options.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="mt-16 grid gap-8 border-t border-charcoal/15 pt-14 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow>{entry.execution.title}</Eyebrow>
            </div>
            <div className="md:col-span-7">
              <p className="text-lede text-charcoal/85">{entry.execution.text}</p>
              <Action href={href(locale, "contact")} className="mt-10">
                {e.detailCta}
              </Action>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow className="mb-10">{e.otherLabel}</Eyebrow>
          <ExpertiseGrid locale={locale} ctaLabel={t.common.readMore} exclude={entryKey} />
        </Container>
      </Section>
    </>
  );
}
