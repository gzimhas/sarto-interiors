import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { wordmark } from "@/components/brand/paths";
import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";

export const alt = "SARTO · The craft of finished spaces.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = isLocale(locale) ? locale : "de";
  const t = getDictionary(l);
  const inter = await readFile(
    path.join(process.cwd(), "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2")
  ).catch(() => null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#201915",
          color: "#F3EEE6",
          padding: 72,
          fontFamily: "Inter",
        }}
      >
        <svg viewBox={wordmark.viewBox} width={420} height={420 * (wordmark.height / wordmark.width)}>
          <path fill="#F3EEE6" d={wordmark.d} />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, opacity: 0.6 }}>THE CRAFT OF FINISHED SPACES.</div>
          <div style={{ fontSize: 34, maxWidth: 900, lineHeight: 1.3, opacity: 0.9 }}>{t.meta.ogDescription}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: inter ? [{ name: "Inter", data: inter, style: "normal", weight: 400 }] : [],
    }
  );
}
