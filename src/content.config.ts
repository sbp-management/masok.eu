import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * News articles: one Markdown file per article and language.
 *   src/content/news/sr/<slug>.md  → masok.eu/sr/vesti/<slug>
 *   src/content/news/en/<slug>.md  → masok.eu/en/news/<slug>
 * Use the same file name in both folders so the language switch links the translations.
 */
const news = defineCollection({
  loader: glob({ base: "./src/content/news", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(220),
    date: z.coerce.date(),
    category: z.string(),
    // Key from src/data/images.ts, e.g. "hero-instruments"
    image: z.string().optional(),
    imageAlt: z.string().default(""),
    // draft: true hides the article from the site
    draft: z.boolean().default(false),
    // sample: true marks placeholder articles (listed by the launch checklist)
    sample: z.boolean().default(false),
  }),
});

export const collections = { news };
