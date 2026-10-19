import { EditorialImage } from "../EditorialImage";
import { Reveal } from "../Reveal";
import { PageIntro, ProcessList } from "../sections/Shared";
import { Action, Container, Eyebrow, Section } from "../ui";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

/**
 * For developers. Three project worlds, six things SARTO solves, a five-step
 * process and a dedicated enquiry path. No capacity figures, no price claims,
 * no date guarantees (brief, Oct 2026).
 */
export function DevelopersPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const d = t.developers;
  return (
    <>
      <PageIntro eyebrow={d.eyebrow} headline={d.headline} lede={d.lede} />

      <div className="bg-ivory pb-section">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <EditorialImage id="group-bremgarten-kitchen" locale={locale} ratio="16 / 10" sizes="(min-width:768px) 58vw, 100vw" priority withCredit />
            </Reveal>
            <Reveal className="space-y-5 md:col-span-4 md:col-start-9 md:pt-10" delay={100}>
              {d.intro.map((p) => (
                <p key={p} className="text-[1rem] text-charcoal/80">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </Container>
      </div>

      {/* Three project worlds */}
      <Section>
        <Container>
          <Reveal className="mb-14">
            <Eyebrow>{d.segmentsLabel}</Eyebrow>
          </Reveal>
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-3">
            {d.segments.map((s, i) => (
              <Reveal as="li" key={s.key} delay={i * 80}>
                <EditorialImage id={s.image} locale={locale} ratio="4 / 5" sizes="(min-width:768px) 33vw, 100vw" withCredit />
                <h2 className="display mt-6 text-h3">{s.title}</h2>
                <p className="mt-2 text-[0.9375rem] text-charcoal/70">{s.text}</p>
                <ul className="mt-5 space-y-2 border-t border-charcoal/15 pt-5 text-[0.9375rem] text-charcoal/80">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-taupe" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Six themes */}
      <Section tone="ivory-deep">
        <Container>
          <Reveal className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Eyebrow>{d.themesLabel}</Eyebrow>
              <h2 className="mt-6 text-h2">{d.themesHeadline}</h2>
            </div>
          </Reveal>
          <ul className="grid gap-x-10 gap-y-10 border-t border-charcoal/15 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {d.themes.map((th, i) => (
              <Reveal as="li" key={th.title} delay={i * 60}>
                <span className="display text-[1.2rem] text-charcoal/45">0{i + 1}</span>
                <h3 className="display mt-2 text-h3">{th.title}</h3>
                <p className="mt-3 max-w-sm text-[0.9375rem] text-charcoal/75">{th.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Process */}
      <Section tone="cocoa">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow className="text-ivory/50">{d.process.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-h2">{d.process.headline}</h2>
          </Reveal>
          <ProcessList steps={d.process.steps} note={d.process.note} tone="cocoa" />
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h2 className="text-h1">{d.cta.headline}</h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-[1rem] text-charcoal/75">{d.cta.text}</p>
              <Action href={`${href(locale, "contact")}?path=developer`} className="mt-8">
                {d.cta.button}
              </Action>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
