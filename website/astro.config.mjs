// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const NOINDEX = ["/sr/hvala", "/en/thank-you", "/404"];
// Section start pages (built as folder/index.html) keep a trailing slash, like the old site.
const INDEX_PAGES = ["/en", "/en/courses", "/en/news", "/sr/programi", "/sr/vesti"];

export default defineConfig({
  site: "https://masok.eu",
  // Keep the same URLs as the old One.com site (e.g. /en/about-us, /en/courses/)
  // so existing links and Google results keep working.
  build: { format: "preserve" },
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      filter: (page) => !NOINDEX.some((p) => page.replace(/\.html$/, "").endsWith(p)),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/\/$/, "");
        if (INDEX_PAGES.includes(path)) item.url = new URL(path + "/", item.url).href;
        return item;
      },
    }),
  ],
});
