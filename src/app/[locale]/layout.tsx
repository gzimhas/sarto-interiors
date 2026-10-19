import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary, site } from "@/content";
import { htmlLang, isLocale, locales } from "@/lib/i18n";

export const viewport: Viewport = {
  themeColor: "#201915",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: `${site.name} · ${site.claim}`, template: t.meta.titleTemplate },
    description: t.meta.description,
    icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <html lang={htmlLang[locale]}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="eyebrow fixed left-4 top-4 z-[60] -translate-y-24 bg-ivory px-4 py-3 text-charcoal transition-transform focus:translate-y-0"
        >
          {t.nav.skip}
        </a>
        <Header
          locale={locale}
          labels={t.nav.labels}
          menu={t.nav.menu}
          close={t.nav.close}
          cta={t.nav.cta}
          switchLabel={t.nav.switchLabel}
        />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
