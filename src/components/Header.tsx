"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Wordmark, Monogram } from "./brand/Logo";
import { type Locale, otherLocale } from "@/lib/i18n";
import {
  href,
  mainNav,
  sectionFromSlug,
  expertiseFromSlug,
  expertiseSlugs,
  type SectionKey,
} from "@/lib/routes";
import { projectFromSlug } from "@/content/site";

type Props = {
  locale: Locale;
  labels: Record<string, string>;
  menu: string;
  close: string;
  cta: string;
  switchLabel: string;
};

/** Map the current path to its sibling in the other language. */
function switchHref(pathname: string, locale: Locale): string {
  const target = otherLocale(locale);
  const parts = pathname.split("/").filter(Boolean); // [locale, section?, slug?]
  const sectionSlug = parts[1] ?? "";
  const slug = parts[2];
  const section: SectionKey = sectionFromSlug(locale, sectionSlug) ?? "home";
  if (section === "expertise" && slug) {
    const key = expertiseFromSlug(locale, slug);
    if (key) return href(target, "expertise", expertiseSlugs[key][target]);
  }
  if (section === "projects" && slug) {
    const p = projectFromSlug(locale, slug);
    if (p) return href(target, "projects", p.slug[target]);
  }
  return href(target, section);
}

export function Header({ locale, labels, menu, close, cta, switchLabel }: Props) {
  const pathname = usePathname() ?? `/${locale}`;
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 160 && y > lastY.current && !open);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const overlay = isHome && !scrolled && !open;
  const tone = overlay ? "text-ivory" : "text-charcoal";
  const bg = overlay ? "bg-transparent" : "bg-ivory/95 backdrop-blur-[2px]";
  const other = otherLocale(locale);
  const altHref = switchHref(pathname, locale);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[transform,background-color,color] duration-500 ease-editorial ${tone} ${bg} ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1480px] items-center justify-between px-gutter md:h-[84px]">
          <Link href={href(locale, "home")} aria-label="SARTO" className="block">
            <Wordmark className="h-[18px] w-auto md:h-[20px]" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex xl:gap-8">
            {mainNav.map((key) => {
              const h = href(locale, key);
              const active = pathname === h || pathname.startsWith(h + "/");
              return (
                <Link
                  key={key}
                  href={h}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap text-[0.8125rem] tracking-[0.04em] transition-opacity hover:opacity-100 ${
                    active ? "opacity-100" : "opacity-75"
                  }`}
                >
                  {labels[key]}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href={altHref}
              hrefLang={other}
              lang={other}
              aria-label={`${switchLabel}: ${other.toUpperCase()}`}
              className="eyebrow text-[0.6875rem] opacity-80 hover:opacity-100"
            >
              <span className="hidden sm:inline">{locale.toUpperCase()} / </span>
              {other.toUpperCase()}
            </Link>
            <Link
              href={href(locale, "contact")}
              className="hidden border border-current/40 px-4 py-2 text-[0.75rem] tracking-[0.06em] transition-colors hover:border-current md:inline-block"
            >
              {cta}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="flex h-10 items-center gap-3 text-[0.8125rem] tracking-[0.06em] lg:hidden"
            >
              <span className="eyebrow">{menu}</span>
              <span aria-hidden="true" className="flex flex-col gap-[5px]">
                <span className="block h-px w-6 bg-current" />
                <span className="block h-px w-6 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu */}
      <div
        id="site-menu"
        role="dialog"
        aria-modal="true"
        aria-label={menu}
        className={`fixed inset-0 z-50 bg-cocoa text-ivory transition-opacity duration-500 ease-editorial ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-[72px] items-center justify-between px-gutter md:h-[84px]">
          <Monogram className="h-8 w-auto" />
          <button
            ref={closeBtn}
            type="button"
            onClick={() => setOpen(false)}
            className="eyebrow flex h-10 items-center gap-3"
          >
            {close}
            <span aria-hidden="true" className="relative block h-6 w-6">
              <span className="absolute left-0 top-1/2 h-px w-6 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 h-px w-6 -rotate-45 bg-current" />
            </span>
          </button>
        </div>
        <nav aria-label="Main" className="flex h-[calc(100%-72px)] flex-col justify-between px-gutter pb-10 pt-6">
          <ul className="flex flex-col gap-1">
            {mainNav.map((key, i) => (
              <li
                key={key}
                style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                className={`transition-[opacity,transform] duration-500 ease-editorial ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                <Link
                  href={href(locale, key)}
                  className="display block py-2 text-[2.1rem] leading-tight sm:text-[2.6rem]"
                >
                  {labels[key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-end justify-between border-t border-ivory/15 pt-6">
            <Link href={altHref} hrefLang={other} lang={other} className="eyebrow">
              {locale.toUpperCase()} / {other.toUpperCase()}
            </Link>
            <Link href={href(locale, "contact")} className="link-line text-[0.9375rem]">
              {cta}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
