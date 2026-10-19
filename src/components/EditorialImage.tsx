import Image from "next/image";
import { images } from "@/content";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";

type Props = {
  id: string;
  locale: Locale;
  /** CSS aspect ratio, e.g. "4 / 5". Ignored when `fill` is set. */
  ratio?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Hide the status label (only for purely decorative surfaces). */
  unlabelled?: boolean;
  /** Show the credit line (group projects) as a caption below. */
  withCredit?: boolean;
  /** Slow settle on reveal. */
  settle?: boolean;
};

/**
 * Image placement system.
 * REAL: photograph, no label. CONCEPT_IMAGE: visual with a discreet label.
 * REAL_IMAGE_REQUIRED: a labelled material surface, never a fake photograph.
 */
export function EditorialImage({
  id,
  locale,
  ratio = "3 / 2",
  fill = false,
  priority = false,
  sizes = "100vw",
  className = "",
  unlabelled = false,
  withCredit = false,
  settle = true,
}: Props) {
  const asset = images[id];
  const t = getDictionary(locale).common;
  if (!asset) return null;

  const base = fill ? "absolute inset-0" : "relative w-full";
  const style = fill ? undefined : { aspectRatio: ratio };

  if (asset.src) {
    const figure = (
      <div className={`${base} overflow-hidden bg-cocoa-soft ${className}`} style={style}>
        <Image
          src={asset.src}
          alt={asset.alt[locale]}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${settle ? "img-settle" : ""}`}
        />
        {asset.status === "CONCEPT_IMAGE" && !unlabelled && <Label text={t.visual} />}
      </div>
    );
    if (withCredit && asset.credit) {
      return (
        <figure>
          {figure}
          <figcaption className="mt-3 text-[0.75rem] text-current/55">{asset.credit[locale]}</figcaption>
        </figure>
      );
    }
    return figure;
  }

  const label = asset.status === "CONCEPT_IMAGE" ? t.conceptLong : t.imageToFollow;

  return (
    <div
      className={`${base} surface surface-${asset.surface} ${className}`}
      style={style}
      role="img"
      aria-label={`${asset.alt[locale]} (${label})`}
      data-image-id={id}
      data-image-status={asset.status}
    >
      {asset.gap === "h" && <span className="gap-line" aria-hidden="true" />}
      {asset.gap === "v" && <span className="gap-line-v" aria-hidden="true" />}
      {!unlabelled && <Label text={label} />}
    </div>
  );
}

function Label({ text }: { text: string }) {
  return (
    <span
      className="eyebrow pointer-events-none absolute bottom-3 left-3 z-10 bg-cocoa/55 px-2 py-1 text-[0.55rem] text-ivory/80 backdrop-blur-[2px]"
      aria-hidden="true"
    >
      {text}
    </span>
  );
}
