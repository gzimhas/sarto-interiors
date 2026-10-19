import { Suspense } from "react";
import Link from "next/link";
import { EnquiryForm } from "./EnquiryForm";
import { PageIntro } from "../sections/Shared";
import { Container, Eyebrow, Section } from "../ui";
import { getDictionary, site } from "@/content";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const c = t.contact;
  const a = site.contact.address;
  const v = (s: string) => (s === "TO_VERIFY" ? t.common.toVerify : s);

  return (
    <>
      <PageIntro eyebrow={c.eyebrow} headline={c.headline} lede={c.lede} />
      <Section className="pt-0">
        <Container>
          <div className="grid gap-16 border-t border-charcoal/15 pt-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Suspense fallback={null}>
                <EnquiryForm locale={locale} f={c.form} />
              </Suspense>
            </div>
            <aside className="lg:col-span-4 lg:col-start-9">
              <Eyebrow>{c.direct.headline}</Eyebrow>
              <dl className="mt-6 space-y-5 text-[0.9375rem]">
                <div>
                  <dt className="text-charcoal/50">{c.direct.address}</dt>
                  <dd>
                    SARTO · {site.legalEntity}
                    <br />
                    {a.street}
                    <br />
                    {a.zip} {a.city}
                  </dd>
                  <dd className="mt-1 text-[0.8125rem] text-charcoal/55">{c.direct.showroom}</dd>
                </div>
                <div>
                  <dt className="text-charcoal/50">{c.direct.email}</dt>
                  <dd>
                    <a href={`mailto:${site.contact.email}`} className="link-line break-all">
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-charcoal/50">{c.direct.phone}</dt>
                  <dd>{v(site.contact.phone)}</dd>
                </div>
                <div>
                  <dt className="text-charcoal/50">{t.nav.labels.showroom}</dt>
                  <dd>
                    {c.direct.hours}
                    <br />
                    <Link href={href(locale, "showroom")} className="link-line">
                      {c.showroomCta}
                    </Link>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
