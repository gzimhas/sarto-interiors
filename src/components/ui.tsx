import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   Small editorial primitives. Hairlines, not boxes. Text, not buttons.
   ------------------------------------------------------------------ */

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow text-charcoal/55 ${className}`}>{children}</p>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1480px] px-gutter ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
  tone = "ivory",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "ivory-deep" | "cocoa";
}) {
  const tones = {
    ivory: "bg-ivory text-charcoal",
    "ivory-deep": "bg-ivory-deep text-charcoal",
    cocoa: "bg-cocoa text-ivory",
  };
  return (
    <section id={id} className={`py-section ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}

/** Primary action: text with a hairline rule and an arrow. */
export function Action({
  href,
  children,
  tone = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  const color = tone === "dark" ? "text-charcoal" : "text-ivory";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-4 text-[0.9375rem] font-medium tracking-[0.02em] ${color} ${className}`}
    >
      <span className="link-line">{children}</span>
      <span
        aria-hidden="true"
        className="inline-block h-px w-8 bg-current transition-[width] duration-500 ease-editorial group-hover:w-12"
      />
    </Link>
  );
}

/** Secondary text link with a drawn underline. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`link-line text-[0.9375rem] ${className}`}>
      {children}
    </Link>
  );
}

/** Horizontal hairline. */
export function Rule({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-current/15 ${className}`} />;
}
