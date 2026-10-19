import Image from "next/image";
import { EditorialImage } from "../EditorialImage";
import { Reveal } from "../Reveal";
import { FactsStrip, PageIntro, ZoneList } from "../sections/Shared";
import { Action, Container, Eyebrow, Section } from "../ui";
import { getDictionary, site } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

export function ShowroomPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const s = t.showroom;
  const a = site.contact.address;
  return (
    <>
      <PageIntro eyebrow={s.eyebrow} headline={s.headline} lede={s.lede} />

      <div className="bg-ivory pb-section">
        <Container>
          <Reveal>
            <EditorialImage id="showroom-axo" locale={locale} ratio="2 / 1" sizes="100vw" priority />
          </Reveal>
          <p className="mt-5 max-w-2xl text-[0.8125rem] text-charcoal/55">{s.status}</p>
          <div className="mt-16">
            <FactsStrip facts={s.facts} />
          </div>
        </Container>
      </div>

      {/* Zones */}
      <Section>
        <Container>
          <Reveal className="mb-12">
            <Eyebrow>{s.zonesLabel}</Eyebrow>
          </Reveal>
          <ZoneList zones={s.zones} locale={locale} />
        </Container>
      </Section>

      {/* Plan */}
      <Section tone="ivory-deep">
        <Container>
          <Reveal>
            <Eyebrow className="mb-8">{s.planLabel}</Eyebrow>
            <figure>
              <div className="relative w-full overflow-hidden border border-charcoal/10 bg-white" style={{ aspectRatio: "2404 / 865" }}>
                <Image src="/images/showroom-plan.jpg" alt={s.planCaption} fill sizes="100vw" className="object-contain" />
              </div>
              <figcaption className="mt-4 text-[0.75rem] text-charcoal/55">{s.planCaption}</figcaption>
            </figure>
          </Reveal>

          <div className="mt-20 grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <Eyebrow>{s.materialsLabel}</Eyebrow>
              <ul className="mt-5 border-t border-charcoal/15">
                {s.materials.map((m) => (
                  <li key={m} className="border-b border-charcoal/15 py-3 text-[0.9375rem] text-charcoal/80">
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="md:col-span-5 md:col-start-8" delay={80}>
              <Eyebrow>{s.partnersLabel}</Eyebrow>
              <ul className="mt-5 border-t border-charcoal/15">
                {s.partners.map((p) => (
                  <li key={p} className="border-b border-charcoal/15 py-3 text-[0.9375rem] text-charcoal/80">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Experience */}
      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-6">
              <EditorialImage id="wardrobe" locale={locale} ratio="4 / 3" sizes="(min-width:768px) 50vw, 100vw" />
            </Reveal>
            <Reveal className="md:col-span-5 md:col-start-8" delay={80}>
              <h2 className="text-h2">{s.experience.headline}</h2>
              <div className="mt-6 space-y-4">
                {s.experience.text.map((p) => (
                  <p key={p} className="text-lede text-charcoal/85">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Visit */}
      <Section tone="cocoa">
        <Container>
          <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h2 className="text-h1">{s.visit.headline}</h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-[1rem] text-ivory/75">{s.visit.text}</p>
              <div className="mt-6">
                <Eyebrow className="text-ivory/40">{s.visit.addressLabel}</Eyebrow>
                <p className="mt-2 text-[0.9375rem] text-ivory/85">
                  SARTO Showroom
                  <br />
                  {a.street}
                  <br />
                  {a.zip} {a.city}
                </p>
                <a href={site.contact.mapsUrl} target="_blank" rel="noreferrer" className="link-line mt-3 inline-block text-[0.8125rem] text-ivory/70">
                  {s.visit.mapLabel}
                </a>
              </div>
              <Action href={`${href(locale, "contact")}?path=private&type=showroom`} tone="light" className="mt-8">
                {s.visit.button}
              </Action>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
