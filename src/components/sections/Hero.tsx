import Link from "next/link";
import { EditorialImage } from "../EditorialImage";
import type { Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { getDictionary } from "@/content";

/**
 * Hero: one full-bleed image, the claim bottom-left, two actions.
 * The image is a concept visual until the first finished space is photographed;
 * it carries the discreet «Visualisierung» label.
 */
export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).home.hero;
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-cocoa text-ivory">
      <div className="absolute inset-0 is-visible">
        <EditorialImage id="hero-kitchen" locale={locale} fill priority sizes="100vw" />
        {/* Controlled daylight: one soft falloff for legibility, nothing decorative. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(32,25,21,0.78)_0%,rgba(32,25,21,0.42)_34%,rgba(32,25,21,0.06)_62%,rgba(32,25,21,0.38)_100%)]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1480px] px-gutter pb-14 pt-40 md:pb-20">
        <p className="eyebrow mb-8 text-ivory/60">{t.kicker}</p>
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1 className="text-hero reveal is-visible">{t.headline}</h1>
          </div>
          <div className="md:col-span-4 md:pb-3">
            <p className="max-w-sm text-[1.0625rem] leading-relaxed text-ivory/85">{t.sub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href={href(locale, "projects")} className="link-line text-[0.9375rem] font-medium">
                {t.primary}
              </Link>
              <Link
                href={href(locale, "contact")}
                className="border border-ivory/50 px-5 py-3 text-[0.8125rem] tracking-[0.06em] transition-colors hover:border-ivory hover:bg-ivory/10"
              >
                {t.secondary}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
