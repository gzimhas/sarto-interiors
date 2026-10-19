import { wordmark, monogram } from "./paths";

type Props = { className?: string; title?: string };

/** SARTO wordmark. Inherits colour from CSS (currentColor). */
export function Wordmark({ className, title = "SARTO" }: Props) {
  return (
    <svg
      viewBox={wordmark.viewBox}
      className={className}
      role="img"
      aria-label={title}
      focusable="false"
    >
      <path fill="currentColor" d={wordmark.d} />
    </svg>
  );
}

/** The S monogram: the serif S with one mitre cut through the spine. */
export function Monogram({ className, title = "SARTO" }: Props) {
  return (
    <svg
      viewBox={monogram.viewBox}
      className={className}
      role="img"
      aria-label={title}
      focusable="false"
    >
      <path fill="currentColor" d={monogram.d} />
    </svg>
  );
}
