import { EditorialImage } from "../EditorialImage";
import { Reveal } from "../Reveal";
import { FinalCta, PageIntro } from "../sections/Shared";
import { Container, Eyebrow, Section } from "../ui";
import { getDictionary, images, workCaption, workContext, workGroups } from "@/content";
import type { Locale } from "@/lib/i18n";

/* ------------------------------------------------------------------
   Work: what SARTO has built, ordered by element rather than by building.
   No project pages, no addresses, no clients. The breadth shows in the
   mix of contexts under each image: villa, chalet, series of 58, office.
   ------------------------------------------------------------------ */

const isPortrait = (id: string) => {
  const a = images[id];
  return !!a && a.width !== undefined && a.height !== undefined && a.height > a.width;
};

/** Grid rhythm per group: a wide opener, then offset pairs and triplets. */
const slot = (i: number) => {
  const k = i % 6;
  switch (k) {
    case 0:
      return "md:col-span-7";
    case 1:
      return "md:col-span-5 md:pt-20";
    case 2:
      return "md:col-span-4";
    case 3:
      return "md:col-span-4 md:pt-12";
    case 4:
      return "md:col-span-4";
    default:
      return "md:col-span-6 md:col-start-4";
  }
};

function WorkFigure({ id, locale, index }: { id: string; locale: Locale; index: number }) {
  const portrait = isPortrait(id);
  const k = index % 6;
  const wide = k === 0 || k === 5;
  const ratio = portrait ? "4 / 5" : wide ? "3 / 2" : "4 / 3";
  const sizes = wide ? "(min-width:768px) 58vw, 100vw" : "(min-width:768px) 36vw, 100vw";
  return (
    <Reveal as="li" delay={(index % 3) * 80} className={slot(index)}>
      <figure>
        <EditorialImage id={id} locale={locale} ratio={ratio} sizes={sizes} />
        <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <span className="text-[0.875rem] text-charcoal/75">{workCaption(id, locale)}</span>
          <span className="eyebrow text-charcoal/40">{workContext(id, locale)}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

export function WorkPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.projects;
  return (
    <>
      <PageIntro eyebrow={p.eyebrow} headline={p.headline} lede={p.intro} />

      {/* Breadth of experience: one hairline strip, no numbers that need a source */}
      <div className="bg-ivory pb-6">
        <Container>
          <Reveal>
            <Eyebrow>{p.experience.label}</Eyebrow>
            <ul className="mt-5 grid border-t border-charcoal/15 md:grid-cols-4">
              {p.experience.items.map((item) => (
                <li key={item} className="border-b border-charcoal/15 py-4 pr-6 text-[0.9375rem] md:border-b-0 md:border-r md:last:border-r-0 md:[&:not(:first-child)]:pl-6">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </div>

      {/* Index of the groups: jumps to the anchors below */}
      <div className="bg-ivory pb-16 md:pb-24">
        <Container>
          <Reveal>
            <ol className="flex flex-wrap gap-x-8 gap-y-2">
              {workGroups.map((g, i) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="link-line text-[0.9375rem]">
                    <span className="mr-2 text-charcoal/40">{String(i + 1).padStart(2, "0")}</span>
                    {p.groups[g.id].title}
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </div>

      {workGroups.map((g, gi) => {
        const copy = p.groups[g.id];
        return (
          <Section key={g.id} id={g.id} tone={gi % 2 === 1 ? "ivory-deep" : "ivory"} className="scroll-mt-24">
            <Container>
              <Reveal className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
                <div className="md:col-span-6">
                  <Eyebrow>{String(gi + 1).padStart(2, "0")}</Eyebrow>
                  <h2 className="mt-6 text-h2">{copy.title}</h2>
                </div>
                <p className="text-[0.9375rem] text-charcoal/70 md:col-span-5 md:col-start-8">{copy.intro}</p>
              </Reveal>
              <ul className="grid gap-x-8 gap-y-12 md:grid-cols-12">
                {g.images.map((id, i) => (
                  <WorkFigure key={id} id={id} locale={locale} index={i} />
                ))}
              </ul>
            </Container>
          </Section>
        );
      })}

      <Section className="pt-0">
        <Container>
          <p className="max-w-md text-[0.8125rem] text-charcoal/55">{p.note}</p>
        </Container>
      </Section>

      <FinalCta locale={locale} headline={t.home.final.headline} copy={t.home.final.copy} primary={t.home.final.primary} secondary={t.home.final.secondary} />
    </>
  );
}
