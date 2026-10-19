import Link from "next/link";
import { EditorialImage } from "../EditorialImage";
import { Reveal } from "../Reveal";
import { FinalCta, PageIntro, ProjectCards } from "../sections/Shared";
import { Container, Eyebrow, Section } from "../ui";
import { getDictionary, projects } from "@/content";
import type { Project } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.projects;
  return (
    <>
      <PageIntro eyebrow={p.eyebrow} headline={p.headline} lede={p.intro} />
      <Section className="pt-0">
        <Container>
          <ProjectCards locale={locale} />
          <p className="mt-14 max-w-md text-[0.8125rem] text-charcoal/55">{p.note}</p>
        </Container>
      </Section>
      <FinalCta locale={locale} headline={t.home.final.headline} copy={t.home.final.copy} primary={t.home.final.primary} secondary={t.home.final.secondary} />
    </>
  );
}

export function ProjectDetailPage({ locale, project }: { locale: Locale; project: Project }) {
  const t = getDictionary(locale);
  const v = (s: string) => (s === "TO_VERIFY" ? t.common.toVerify : s);
  const idx = projects.findIndex((x) => x.id === project.id);
  const next = projects[(idx + 1) % projects.length];
  const [cover, ...rest] = project.gallery;

  return (
    <>
      <div className="bg-ivory pt-40 pb-12 md:pt-52 md:pb-16">
        <Container>
          <Eyebrow>
            <Link href={href(locale, "projects")} className="hover:opacity-70">
              {t.projects.eyebrow}
            </Link>
            <span className="mx-2 text-charcoal/45">·</span>
            {project.location[locale]}
          </Eyebrow>
          <h1 className="mt-6 max-w-4xl text-h1">{project.title[locale]}</h1>
          <p className="mt-6 max-w-2xl text-lede text-charcoal/75">{project.teaser[locale]}</p>
        </Container>
      </div>

      <div className="bg-ivory">
        <Container>
          <Reveal>
            <EditorialImage id={cover} locale={locale} ratio="16 / 9" sizes="100vw" priority />
          </Reveal>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="space-y-5 md:col-span-7">
              {project.intro[locale].map((para) => (
                <p key={para} className="text-lede text-charcoal/85">
                  {para}
                </p>
              ))}
            </Reveal>
            <Reveal className="md:col-span-4 md:col-start-9" delay={80}>
              <Eyebrow>{t.common.facts}</Eyebrow>
              <dl className="mt-5 border-t border-charcoal/15">
                {project.facts[locale].map((f) => (
                  <div key={f.label} className="grid grid-cols-5 gap-4 border-b border-charcoal/15 py-3 text-[0.9375rem]">
                    <dt className="col-span-2 text-charcoal/50">{f.label}</dt>
                    <dd className="col-span-3">{v(f.value)}</dd>
                  </div>
                ))}
              </dl>
              {project.verification === "pending" && <p className="mt-4 text-[0.75rem] text-charcoal/50">{t.common.pendingNote}</p>}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="ivory-deep" className="pt-0">
        <Container>
          <ul className="grid gap-x-8 gap-y-10 md:grid-cols-12">
            {rest.map((id, i) => {
              const pattern = i % 5;
              const col =
                pattern === 0 ? "md:col-span-7" : pattern === 1 ? "md:col-span-5 md:pt-20" : pattern === 2 ? "md:col-span-4" : pattern === 3 ? "md:col-span-8" : "md:col-span-12";
              const ratio = pattern === 1 ? "4 / 5" : pattern === 2 ? "3 / 4" : pattern === 4 ? "21 / 9" : "4 / 3";
              return (
                <Reveal as="li" key={id} delay={(i % 3) * 70} className={col}>
                  <EditorialImage id={id} locale={locale} ratio={ratio} sizes="(min-width:768px) 60vw, 100vw" />
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="flex flex-wrap items-end justify-between gap-8 border-t border-charcoal/15 pt-10">
            <div>
              <Eyebrow>{t.common.nextProject}</Eyebrow>
              <Link href={href(locale, "projects", next.slug[locale])} className="display link-line mt-4 inline-block text-h2">
                {next.title[locale]}
                <span className="text-charcoal/45"> · {next.location[locale]}</span>
              </Link>
            </div>
            <Link href={href(locale, "projects")} className="link-line text-[0.875rem] font-medium">
              {t.common.allProjects}
            </Link>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
