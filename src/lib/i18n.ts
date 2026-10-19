export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "de" ? "en" : "de";
}

/** BCP 47 tags for <html lang> and Open Graph. */
export const htmlLang: Record<Locale, string> = { de: "de-CH", en: "en" };
