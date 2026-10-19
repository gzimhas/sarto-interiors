import Link from "next/link";
import { Wordmark, Monogram } from "./brand/Logo";
import { getDictionary, site } from "@/content";
import type { Locale } from "@/lib/i18n";
import { footerNav, href } from "@/lib/routes";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();
  const v = (s: string) => (s === "TO_VERIFY" ? t.common.toVerify : s);

  return (
    <footer className="bg-cocoa text-ivory">
      <div className="mx-auto max-w-[1480px] px-gutter pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark className="h-6 w-auto" />
            <p className="display mt-6 max-w-sm text-[1.6rem] leading-tight text-ivory/90">{t.footer.claim}</p>
            <p className="mt-3 max-w-sm text-[0.9375rem] text-ivory/60">{t.footer.statement}</p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <p className="eyebrow mb-5 text-ivory/50">{t.footer.navLabel}</p>
            <ul className="space-y-2 text-[0.9375rem]">
              {footerNav.map((key) => (
                <li key={key}>
                  <Link href={href(locale, key)} className="link-line text-ivory/85">
                    {t.nav.labels[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5 text-ivory/50">{t.footer.contactLabel}</p>
            <ul className="space-y-2 text-[0.9375rem] text-ivory/85">
              <li>{site.contact.address.street}</li>
              <li>
                {site.contact.address.zip} {site.contact.address.city}
              </li>
              <li className="pt-2">
                <a href={`mailto:${site.contact.email}`} className="link-line break-all">
                  {site.contact.email}
                </a>
              </li>
              {site.contact.phone !== "TO_VERIFY" && <li>{v(site.contact.phone)}</li>}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow mb-5 text-ivory/50">{t.footer.legalLabel}</p>
            <ul className="space-y-2 text-[0.9375rem]">
              <li>
                <Link href={href(locale, "imprint")} className="link-line text-ivory/85">
                  {t.nav.labels.imprint}
                </Link>
              </li>
              <li>
                <Link href={href(locale, "privacy")} className="link-line text-ivory/85">
                  {t.nav.labels.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse items-start justify-between gap-6 border-t border-ivory/15 pt-6 text-[0.75rem] text-ivory/50 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <p>{t.footer.entity}</p>
            <p>
              © {year} {site.legalEntity}. {t.footer.rights} <span className="italic">{t.footer.limani}</span>
            </p>
          </div>
          <Monogram className="h-7 w-auto text-ivory/60" />
        </div>
      </div>
    </footer>
  );
}
