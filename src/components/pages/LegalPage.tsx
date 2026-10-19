import { PageIntro } from "../sections/Shared";
import { Container, Section } from "../ui";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n";

export function LegalPage({ locale, kind }: { locale: Locale; kind: "imprint" | "privacy" }) {
  const t = getDictionary(locale);
  const page = t.legal[kind];
  return (
    <>
      <PageIntro eyebrow={t.footer.legalLabel} headline={page.title} />
      <Section className="pt-0">
        <Container>
          <div className="max-w-2xl space-y-5 border-t border-charcoal/15 pt-12 text-[1rem] text-charcoal/85">
            {page.text.map((p) => (
              <p key={p}>{p.replaceAll("TO_VERIFY", t.common.toVerify)}</p>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
