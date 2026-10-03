# masok.eu – MASOK Academy website

The official website of MASOK Academy, Leskovac. Serbian (default) and English.
Built with [Astro](https://astro.build) as a fast static site, hosted on [Netlify](https://www.netlify.com).

- No database and no server to maintain: every page is pre-built HTML.
- Forms (applications with CV upload, contact, partner inquiries) are handled by **Netlify Forms** and emailed to you.
- No cookies, no tracking, fonts self-hosted, so **no cookie banner is needed**.
- Same URLs as the old One.com site, so existing links and Google results keep working.

---

## 1. Run it on your computer

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install        # first time only
npm run dev        # open http://localhost:4321
```

Other commands:

| Command | What it does |
|---|---|
| `npm run build` | Checks everything and builds the site into `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally |
| `npm run images` | Copies the photos + Europass CV template from the old One.com site (run once) |
| `npm run check:launch` | Lists everything still open before launch |

> When testing forms locally, the "Thank you" message appears but nothing is sent;
> forms only deliver on Netlify.

---

## 2. Where to change things

| To change… | Edit |
|---|---|
| Phone, email, address, **business hours**, **start date**, social links | `src/data/site.ts` |
| Team members (names, roles, bios, contact details) | `src/data/site.ts` (`people`) |
| All Serbian page text, menu, page titles & Google descriptions | `src/i18n/sr.ts` |
| All English page text | `src/i18n/en.ts` |
| Photos | `src/assets/images/` (file names listed in `src/data/images.ts`) |
| Colours, fonts, spacing | `src/styles/global.css` (top `:root` block) |
| Page layouts | `src/views/*.astro` |
| Privacy policy | `src/views/Privacy.astro` |

`{intake}` inside a text is replaced automatically with the start date from `src/data/site.ts`.

### Adding a news article

Create one Markdown file per language, **with the same file name** (it becomes the web address):

```
src/content/news/sr/dan-otvorenih-vrata.md   → masok.eu/sr/vesti/dan-otvorenih-vrata
src/content/news/en/dan-otvorenih-vrata.md   → masok.eu/en/news/dan-otvorenih-vrata
```

```markdown
---
title: "Open day at MASOK Academy"
description: "Short summary shown on the news card and in Google (max 220 characters)."
date: 2026-11-15
category: "Events"
image: "hero-instruments"      # a key from src/data/images.ts (optional)
imageAlt: "What the photo shows"
---

The article text. Use **bold**, [links](/en/contact), lists and

## Subheadings
```

The newest 3 articles appear on the homepage automatically. Add `draft: true` to hide an article.
The included articles have `sample: true` – edit or delete them before launch.

### Adding a new photo

1. Put the file in `src/assets/images/` (JPG, PNG or WebP – any size, Astro compresses it).
2. Add a line to `src/data/images.ts`, e.g. `"open-day": { file: "open-day.jpg", source: "" },`
3. Use the key (`"open-day"`) in a page or article.

---

## 3. Deploying to Netlify (first time)

1. **Put the code on GitHub** (recommended, so every change deploys automatically):
   create a private repository and push this `website/` folder to it.
2. In Netlify: **Add new site → Import an existing project → GitHub** → choose the repository.
   Netlify reads `netlify.toml`, so the build settings fill in automatically
   (build command `npm run build`, publish directory `dist`).
3. **Forms:** Netlify dashboard → *Forms* → **Enable form detection**, then redeploy once.
   Four forms will appear: `course-application`, `mfa-application`, `contact`, `partner-inquiry`.
4. **Email notifications per form** (*Site configuration → Notifications → Emails and webhooks
   → Form submission notifications → Add notification*). Add one per form and choose the inbox:

   | Form | Sent from | Send to |
   |---|---|---|
   | `course-application` | Course pages + "For applicants" | _TODO: address_ |
   | `mfa-application` | MFA course page (Europass CV) | _TODO: address_ |
   | `contact` | Contact page | _TODO: address_ |
   | `partner-inquiry` | For German partners | _TODO: address_ |

   Uploaded CVs are stored in Netlify and linked in the email.
   Check your Netlify plan's limits for form submissions and file uploads per month – CV uploads
   use up the upload allowance fastest – and upgrade if you expect many applications.
5. **Spam:** a hidden "honeypot" field is already included, and Netlify's spam filter (Akismet) is on by default.
   Check *Forms → Spam submissions* now and then.

## 4. Connecting the masok.eu domain (keep email at One.com)

Only the **website** moves to Netlify. Your `@masok.eu` mailboxes stay at One.com and keep working,
as long as you **don't touch the MX records**.

1. Netlify → *Domain management → Add a domain* → `masok.eu` (and `www.masok.eu`).
2. In the One.com DNS settings, change only these records to the values Netlify shows:
   - `A` record for `masok.eu` → Netlify's load balancer IP
   - `CNAME` for `www` → `<your-site>.netlify.app`
3. Wait for DNS (minutes to a few hours). Netlify issues the free HTTPS certificate automatically.
4. After launch: in [Google Search Console](https://search.google.com/search-console), add masok.eu
   and submit `https://masok.eu/sitemap-index.xml`.

## 5. Before launch – checklist

`npm run build` prints this list automatically until everything is resolved:

- [ ] Run `npm run images` to copy the photos and the Europass CV template from the old site
      (must be done **before** the One.com site is switched off).
- [ ] `src/data/site.ts`: real **business hours**, main **phone number**, **start month**, legal name / MB / PIB.
- [ ] MFA certificate wording (English vs Serbian page disagreed) – `src/i18n/en.ts`.
- [ ] Replace or delete the 3 **sample news articles**.
- [ ] Have the **privacy policy** reviewed by a lawyer; confirm retention periods.
- [ ] Netlify: form notifications set up for each inbox (table above).
- [ ] Send one real test submission per form after deploying.
- [ ] Check photo licences: the partner-page photos come from Pexels (free licence); confirm the
      origin of the other stock photos.
- [ ] Optional: a German version of the partners page (most German companies expect one).

## 6. Notes for developers

- Astro 7, static output, `build.format: "preserve"` so URLs match the old site
  (`/en/about-us`, `/en/courses/`).
- Routes per language: `src/i18n/routes.ts`. A page missing in one language simply has no route there
  (the Serbian site has no partners page).
- SEO: unique title/description per page, canonical, `hreflang` (sr-Latn / en / x-default), Open Graph images
  generated from site photos, JSON-LD (EducationalOrganization, Course, FAQPage, NewsArticle, BreadcrumbList),
  `sitemap-index.xml`, `robots.txt`.
- Security headers, caching and redirects from old URLs: `netlify.toml`.
- `npm audit` reports `http-cache-semantics` via Astro. It only affects server-side caching in SSR,
  which this static site doesn't use. The suggested `--force` fix would downgrade Astro to v2 – don't run it.
- Netlify form rule: a form `name` must always have the same fields in every language
  (see the comment at the top of `src/components/Form.astro`). One file per upload field, 8 MB per submission;
  the site limits uploads to 5 MB.
