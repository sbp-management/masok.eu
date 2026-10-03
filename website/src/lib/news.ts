import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/routes";

export type Article = CollectionEntry<"news"> & { slug: string; lang: Lang };

/** Published articles for one language, newest first. */
export async function getNews(lang: Lang): Promise<Article[]> {
  const all = await getCollection("news", ({ id, data }) => id.startsWith(`${lang}/`) && !data.draft);
  return all
    .map((entry) => ({ ...entry, lang, slug: entry.id.slice(lang.length + 1) }))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
