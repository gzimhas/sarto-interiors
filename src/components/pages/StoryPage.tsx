import { Monogram } from "../brand/Logo";
import { EditorialImage } from "../EditorialImage";
import { Reveal } from "../Reveal";
import { PageIntro } from "../sections/Shared";
import { Action, Container, Eyebrow, Section } from "../ui";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

export function StoryPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const s = t.story;
  return (
    <>
      <PageIntro eyebrow={s.eyebrow} headline={s.headline} lede={s.lede} />

      <Section className="pt-0">
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <Monogram className="h-28 w-auto text-walnut" />
              <h2 className="mt-10 text-h2">{s.name.headline}</h2>
            </Reveal>
            <Reveal className="space-y-6 md:col-span-6 md:col-start-6" delay={80}>
              {s.name.text.map((p) => (
                <p key={p} className="text-lede text-charcoal/85">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="cocoa">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-6">
              <EditorialImage id="hands" locale={locale} ratio="4 / 3" sizes="(min-width:768px) 50vw, 100vw" />
            </Reveal>
            <Reveal className="md:col-span-5 md:col-start-8" delay={100}>
              <h2 className="text-h2">{s.limani.headline}</h2>
              <div className="mt-6 space-y-5">
                {s.limani.text.map((p) => (
                  <p key={p} className="text-[1.0625rem] text-ivory/80">
                    {p}
                  </p>
                ))}
              </div>
              <p className="mt-8 border-t border-ivory/15 pt-5 text-[0.8125rem] text-ivory/50">{s.limani.note}</p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <EditorialImage id="corridor" locale={locale} ratio="21 / 9" sizes="100vw" />
          </Reveal>
          <ul className="mt-16 grid gap-x-10 gap-y-12 border-t border-charcoal/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {s.values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 60}>
                <h3 className="display text-h3">{v.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-charcoal/75">{v.text}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-16">
            <Eyebrow className="sr-only">{t.nav.cta}</Eyebrow>
            <Action href={href(locale, "contact")}>{s.cta}</Action>
          </div>
        </Container>
      </Section>
    </>
  );
}
