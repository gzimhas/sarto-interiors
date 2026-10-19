import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-ivory pt-48 pb-section">
      <div className="mx-auto max-w-[1480px] px-gutter">
        <p className="eyebrow text-charcoal/45">404</p>
        <h1 className="mt-6 text-h1">Diese Seite gibt es nicht. / This page does not exist.</h1>
        <p className="mt-8 flex gap-8 text-[0.9375rem]">
          <Link href="/de" className="link-line">Zur Startseite</Link>
          <Link href="/en" className="link-line">Home</Link>
        </p>
      </div>
    </div>
  );
}
