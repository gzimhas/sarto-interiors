import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./types";
import { de } from "./de";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export { site, images, projects, projectFromSlug, isPublished } from "./site";
export type * from "./types";
