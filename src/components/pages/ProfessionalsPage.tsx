import { EditorialImage } from "../EditorialImage";
import { Reveal } from "../Reveal";
import { PageIntro, ProcessList } from "../sections/Shared";
import { Action, Container, Eyebrow, Section } from "../ui";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

export function ProfessionalsPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.professionals;
  return (
    <>
      <PageIntro eyebrow={p.eyebrow} headline={p.headline} lede={p.lede} />

      <div className="bg-ivory pb-section">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <EditorialImage id="samples" locale={locale} ratio="4 / 3" sizes="(min-width:768px) 58vw, 100vw" priority />
            </Reveal>
            <Reveal className="space-y-5 md:col-span-4 md:col-start-9 md:pt-12" delay={100}>
              {p.intro.map((para) => (
                <p key={para} className="text-[1rem] text-charcoal/80">
                  {para}
                </p>
              ))}
            </Reveal>
          </div>
        </Container>
      </div>

      <Section tone="ivory-deep" className="pt-0">
        <Container>
          <ul className="grid gap-x-10 gap-y-12 border-t border-charcoal/15 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            {p.pillars.map((pl, i) => (
              <Reveal as="li" key={pl.title} delay={i * 60}>
                <h2 className="display text-h3">{pl.title}</h2>
                <p className="mt-3 max-w-sm text-[0.9375rem] text-charcoal/75">{pl.text}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="cocoa">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow className="text-ivory/50">{p.collaboration.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-h2">{p.collaboration.headline}</h2>
          </Reveal>
          <ProcessList steps={p.collaboration.steps} tone="cocoa" />
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h2 className="text-h1">{p.cta.headline}</h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-[1rem] text-charcoal/75">{p.cta.text}</p>
              <Action href={`${href(locale, "contact")}?path=professional`} className="mt-8">
                {p.cta.button}
              </Action>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
