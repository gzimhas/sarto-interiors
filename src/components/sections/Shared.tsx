import Link from "next/link";
import { EditorialImage } from "../EditorialImage";
import { Reveal } from "../Reveal";
import { Action, Container, Eyebrow, Section } from "../ui";
import type { Locale } from "@/lib/i18n";
import { expertiseHref, href, type ExpertiseKey } from "@/lib/routes";
import { getDictionary, workCaption, workContext, workHighlights } from "@/content";
import type { ProcessStep, Project, ServiceRole, ShowroomZone } from "@/content/types";

/* ---------------- Expertise grid (home + expertise index) ---------------- */
export function ExpertiseGrid({
  locale,
  ctaLabel,
  exclude,
}: {
  locale: Locale;
  ctaLabel: string;
  exclude?: ExpertiseKey;
}) {
  const entries = getDictionary(locale).expertise.entries.filter((e) => e.key !== exclude);
  return (
    <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
      {entries.map((e, i) => (
        <Reveal as="li" key={e.key} delay={i * 80}>
          <Link href={expertiseHref(locale, e.key)} className="group block">
            <div className="overflow-hidden">
              <EditorialImage id={e.image} locale={locale} ratio="4 / 5" sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]" />
            </div>
            <h3 className="display mt-6 text-h3">{e.title}</h3>
            <p className="mt-2 max-w-xs text-[0.9375rem] text-charcoal/75">{e.short}</p>
            <span className="link-line mt-4 inline-block text-[0.875rem] font-medium">{ctaLabel}</span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

/* ---------------- Role tag (Crafted by us / Designed with us / Delivered together) ---------------- */
const roleTone: Record<ServiceRole, string> = {
  crafted: "border-walnut text-walnut",
  designed: "border-charcoal/50 text-charcoal/80",
  delivered: "border-taupe text-charcoal/60",
};

export function RoleTag({ role, label, dark = false }: { role: ServiceRole; label: string; dark?: boolean }) {
  const tone = dark
    ? role === "crafted"
      ? "border-ivory/80 text-ivory"
      : role === "designed"
        ? "border-ivory/50 text-ivory/80"
        : "border-ivory/30 text-ivory/60"
    : roleTone[role];
  return (
    <span className={`eyebrow inline-block border px-2 py-1 text-[0.6rem] ${tone}`}>
      {label}
    </span>
  );
}

/* ---------------- Process steps ---------------- */
export function ProcessList({ steps, note, tone = "ivory" }: { steps: ProcessStep[]; note?: string; tone?: "ivory" | "cocoa" }) {
  const line = tone === "cocoa" ? "border-ivory/15" : "border-charcoal/15";
  const muted = tone === "cocoa" ? "text-ivory/65" : "text-charcoal/70";
  const num = tone === "cocoa" ? "text-ivory/40" : "text-charcoal/45";
  return (
    <div>
      <ol className={`border-t ${line}`}>
        {steps.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 60} className={`grid gap-3 border-b ${line} py-7 md:grid-cols-12 md:gap-8`}>
            <span className={`display text-[1.4rem] ${num} md:col-span-1`}>{s.n}</span>
            <h3 className="display text-h3 md:col-span-5">{s.title}</h3>
            <p className={`max-w-md text-[0.9375rem] ${muted} md:col-span-6`}>{s.text}</p>
          </Reveal>
        ))}
      </ol>
      {note && <p className={`mt-6 max-w-2xl text-[0.8125rem] ${muted}`}>{note}</p>}
    </div>
  );
}

/* ---------------- Facts strip ---------------- */
export function FactsStrip({ facts, tone = "ivory" }: { facts: { value: string; label: string }[]; tone?: "ivory" | "cocoa" }) {
  const line = tone === "cocoa" ? "border-ivory/15" : "border-charcoal/15";
  const muted = tone === "cocoa" ? "text-ivory/60" : "text-charcoal/60";
  return (
    <dl className={`grid grid-cols-2 border-t ${line} md:grid-cols-4`}>
      {facts.map((f, i) => (
        <Reveal as="div" key={f.label} delay={i * 60} className={`border-b ${line} py-8 pr-6 ${i % 2 === 1 ? "pl-6 md:pl-0" : ""} md:border-b-0 md:border-r md:last:border-r-0 md:pl-6 md:first:pl-0`}>
          <dd className="display text-[2.6rem] leading-none md:text-[3.2rem]">{f.value}</dd>
          <dt className={`mt-3 text-[0.8125rem] ${muted}`}>{f.label}</dt>
        </Reveal>
      ))}
    </dl>
  );
}

/* ---------------- Showroom zones ---------------- */
export function ZoneList({ zones, locale, compact = false }: { zones: ShowroomZone[]; locale: Locale; compact?: boolean }) {
  return (
    <ul className={`grid gap-x-8 gap-y-12 sm:grid-cols-2 ${compact ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {zones.map((z, i) => (
        <Reveal as="li" key={z.id} delay={i * 50}>
          {z.image ? (
            <EditorialImage id={z.image} locale={locale} ratio="5 / 4" sizes="(min-width:1024px) 30vw, (min-width:640px) 50vw, 100vw" />
          ) : (
            <div className={`surface surface-${z.surface} aspect-[5/4]`} aria-hidden="true">
              <span className="gap-line" style={{ ["--gap-y" as string]: `${48 + (i % 3) * 14}%` }} />
            </div>
          )}
          <div className="mt-5 flex items-baseline justify-between gap-4">
            <h3 className="display text-[1.5rem] leading-tight">{z.title}</h3>
            {z.area && <span className="eyebrow shrink-0 text-charcoal/45">{z.area}</span>}
          </div>
          <p className="mt-2 text-[0.9375rem] text-charcoal/70">{z.text}</p>
        </Reveal>
      ))}
    </ul>
  );
}

/* ---------------- Work strip: one image per theme, into the work page ---------------- */
export function WorkStrip({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <ul className="grid gap-x-8 gap-y-14 md:grid-cols-12">
      {workHighlights.map((w, i) => {
        const k = i % 4;
        const wide = k === 0;
        const col = k === 0 ? "md:col-span-7" : k === 1 ? "md:col-span-5 md:pt-24" : k === 2 ? "md:col-span-5 md:col-start-2" : "md:col-span-6 md:col-start-7 md:pt-24";
        return (
          <Reveal as="li" key={w.image} delay={i * 80} className={col}>
            <article>
              <Link href={`${href(locale, "projects")}#${w.group}`} className="group block">
                <div className="overflow-hidden">
                  <EditorialImage
                    id={w.image}
                    locale={locale}
                    ratio={wide ? "16 / 11" : "4 / 5"}
                    sizes="(min-width:768px) 58vw, 100vw"
                    className="transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="display text-h3">{t.projects.groups[w.group].title}</h3>
                  <p className="eyebrow text-charcoal/45">{workContext(w.image, locale)}</p>
                </div>
                <p className="mt-2 max-w-md text-[0.9375rem] text-charcoal/70">{workCaption(w.image, locale)}</p>
              </Link>
            </article>
          </Reveal>
        );
      })}
    </ul>
  );
}

/* ---------------- Audience split: architects / developers ---------------- */
export function AudienceSplit({ locale }: { locale: Locale }) {
  const a = getDictionary(locale).home.audiences;
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-8">
      {a.cards.map((c, i) => (
        <Reveal key={c.key} delay={i * 100}>
          <Link href={href(locale, c.key)} className="group block">
            <div className="overflow-hidden">
              <EditorialImage
                id={c.image}
                locale={locale}
                ratio="16 / 10"
                sizes="(min-width:768px) 50vw, 100vw"
                className="transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
              />
            </div>
            <Eyebrow className="mt-8">{c.label}</Eyebrow>
            <h3 className="display mt-3 text-h2">{c.title}</h3>
            <p className="mt-4 max-w-md text-[0.9375rem] text-charcoal/75">{c.text}</p>
            <span className="link-line mt-5 inline-block text-[0.875rem] font-medium">{c.cta}</span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------------- Final CTA (dark) ---------------- */
export function FinalCta({
  locale,
  headline,
  copy,
  primary,
  secondary,
}: {
  locale: Locale;
  headline: string;
  copy: string;
  primary: string;
  secondary?: string;
}) {
  return (
    <Section tone="cocoa">
      <Container>
        <Reveal className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <h2 className="text-h1">{headline}</h2>
          </div>
          <div className="md:col-span-5">
            <p className="max-w-sm text-[1rem] text-ivory/75">{copy}</p>
            <div className="mt-8 flex flex-col items-start gap-5">
              <Action href={`${href(locale, "contact")}?path=private`} tone="light">
                {primary}
              </Action>
              {secondary && (
                <Action href={`${href(locale, "contact")}?path=professional`} tone="light">
                  {secondary}
                </Action>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------- Page intro (inner pages) ---------------- */
export function PageIntro({
  eyebrow,
  headline,
  lede,
  dark = false,
}: {
  eyebrow: string;
  headline: string;
  lede?: string;
  dark?: boolean;
}) {
  return (
    <div className={`${dark ? "bg-cocoa text-ivory" : "bg-ivory text-charcoal"} pt-40 pb-16 md:pt-52 md:pb-24`}>
      <Container>
        <Eyebrow className={dark ? "text-ivory/50" : ""}>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-h1">{headline}</h1>
        {lede && <p className={`mt-8 max-w-2xl text-lede ${dark ? "text-ivory/75" : "text-charcoal/75"}`}>{lede}</p>}
      </Container>
    </div>
  );
}
