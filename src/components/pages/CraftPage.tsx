import { EditorialImage } from "../EditorialImage";
import { Reveal } from "../Reveal";
import { FinalCta, PageIntro, ProcessList } from "../sections/Shared";
import { Container, Eyebrow, Section } from "../ui";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n";

export function CraftPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const c = t.craft;
  return (
    <>
      <PageIntro eyebrow={c.eyebrow} headline={c.headline} lede={c.lede} dark />

      <div className="bg-cocoa pb-section text-ivory">
        <Container>
          <Reveal>
            <EditorialImage id="plane" locale={locale} ratio="21 / 9" sizes="100vw" priority />
          </Reveal>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="space-y-28">
            {c.chapters.map((ch, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={ch.eyebrow} className="grid gap-10 md:grid-cols-12 md:items-center">
                  <div className={`md:col-span-6 ${flip ? "md:order-2 md:col-start-7" : ""}`}>
                    <EditorialImage id={ch.image} locale={locale} ratio={i === 1 ? "1 / 1" : "4 / 3"} sizes="(min-width:768px) 50vw, 100vw" />
                  </div>
                  <div className={`md:col-span-4 ${flip ? "md:order-1 md:col-start-2" : "md:col-start-8"}`}>
                    <Eyebrow>{ch.eyebrow}</Eyebrow>
                    <h2 className="mt-5 text-h2">{ch.headline}</h2>
                    <p className="mt-6 text-[1rem] text-charcoal/80">{ch.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="ivory-deep">
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>{c.process.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-h2">{c.process.headline}</h2>
          </Reveal>
          <ProcessList steps={c.process.steps} note={c.process.note} />
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>{c.production.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-h2">{c.production.headline}</h2>
          </Reveal>
          <ol className="grid gap-x-8 gap-y-10 border-t border-charcoal/15 pt-10 sm:grid-cols-2 lg:grid-cols-5">
            {c.production.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 60}>
                <span className="display text-[1.4rem] text-charcoal/45">0{i + 1}</span>
                <h3 className="display mt-3 text-[1.45rem] leading-tight">{s.title}</h3>
                <p className="mt-3 text-[0.9375rem] text-charcoal/70">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <FinalCta locale={locale} headline={t.home.final.headline} copy={t.home.final.copy} primary={t.home.final.primary} secondary={t.home.final.secondary} />
    </>
  );
}
