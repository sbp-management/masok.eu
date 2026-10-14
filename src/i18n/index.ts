import en, { type Dict } from "./en";
import sr from "./sr";
import { site } from "../data/site";
import { languages, routes, url, type Lang, type PageKey } from "./routes";

export { languages, routes, url, type Lang, type PageKey };
export type { Dict };

const dicts: Record<Lang, Dict> = { sr, en };

export function t(lang: Lang): Dict {
  return dicts[lang];
}

/** Fills placeholders such as {intake} with values from src/data/site.ts. */
export function fill(text: string, lang: Lang): string {
  return text.replaceAll("{intake}", site.intake[lang]);
}

/** The other languages this page exists in, for language links and hreflang tags. */
export function alternates(page: PageKey): { lang: Lang; href: string }[] {
  return languages
    .filter((l) => routes[l][page])
    .map((l) => ({ lang: l, href: routes[l][page]! }));
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(dicts[lang].dateLocale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
