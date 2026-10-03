/**
 * Every page's URL in each language.
 * The URLs match the old One.com site so existing links and Google results keep working.
 * A page that is missing in a language (e.g. "partners" in Serbian) simply has no entry.
 */
export const languages = ["sr", "en"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "sr";

export type PageKey =
  | "home" | "about" | "courses" | "mechanic" | "assistant" | "technician" | "german"
  | "applicants" | "partners" | "news" | "contact" | "privacy" | "thanks";

export const routes: Record<Lang, Partial<Record<PageKey, string>>> = {
  sr: {
    home: "/",
    about: "/sr/o-nama",
    courses: "/sr/programi/",
    mechanic: "/sr/programi/mehanicar",
    assistant: "/sr/programi/mfa",
    technician: "/sr/programi/sterilizacioni-tehnicar",
    german: "/sr/programi/nemacki",
    applicants: "/sr/za-kandidate",
    news: "/sr/vesti/",
    contact: "/sr/kontakt",
    privacy: "/sr/politika-privatnosti",
    thanks: "/sr/hvala",
  },
  en: {
    home: "/en/",
    about: "/en/about-us",
    courses: "/en/courses/",
    mechanic: "/en/courses/mechanic",
    assistant: "/en/courses/assistant",
    technician: "/en/courses/technician",
    german: "/en/courses/german-language-courses",
    applicants: "/en/for-applicants",
    partners: "/en/for-german-partners",
    news: "/en/news/",
    contact: "/en/contact",
    privacy: "/en/privacy-policy",
    thanks: "/en/thank-you",
  },
};

/** URL of a page; falls back to the language's home page if it doesn't exist. */
export function url(lang: Lang, page: PageKey): string {
  return routes[lang][page] ?? routes[lang].home!;
}

export function newsUrl(lang: Lang, slug: string): string {
  return url(lang, "news") + slug;
}

export const courseKeys = ["mechanic", "assistant", "technician", "german"] as const;
export type CourseKey = (typeof courseKeys)[number];
