# Troubleshooting guide – masok.eu

For someone who knows Node.js and a bit of TypeScript but has never used Astro.
Setup, editing and deployment steps are in [README.md](README.md); this file is about finding and fixing problems.

---

## 1. Astro in 10 minutes (for Node.js developers)

**Astro is a build tool that runs on Node.js.** `npm run build` reads the source in `src/` and writes plain
HTML, CSS, JS and images into `dist/`. Netlify serves those files as they are. **Nothing of ours runs on a
server while people visit the site**, so there are no server crashes, sessions, databases or memory leaks.
Forms are the only "server" part, and Netlify handles those itself.

Everything is TypeScript (strict mode, see `tsconfig.json`). The one exception is a 6-line snippet in the
`<head>` of `src/layouts/Base.astro`, which has to stay plain JavaScript because the browser runs it before
anything else.

### A `.astro` file = TypeScript on top, HTML below

```astro
---
// Between the two --- lines: TypeScript that runs on Node.js at BUILD time.
// Imports, data, calculations. It never reaches the visitor's browser.
import Photo from "../components/Photo.astro";
import { t, type Lang } from "../i18n";

interface Props { lang: Lang }          // the "arguments" this component accepts
const { lang } = Astro.props;           // like function parameters
const d = t(lang);                      // all texts in that language
---

<!-- Below: HTML with {expressions}, much like JSX -->
<h1>{d.home.title}</h1>
<Photo name="hero-instruments" alt="" />          <!-- another component, with props -->
{d.home.lines.map((l) => <p>{l}</p>)}             <!-- loops are plain .map() -->
{lang === "en" && <p>Only in English</p>}         <!-- conditions are plain && -->

<script>
  // A <script> block is TypeScript that runs in the visitor's BROWSER.
  // Astro bundles it into the page. Use document, window etc. here.
  document.querySelector("h1")?.classList.add("ready");
</script>

<style>
  /* Optional CSS that only applies to this component */
</style>
```

| You know (Node / Express) | In Astro |
|---|---|
| A route handler that returns HTML | A file in `src/pages/`: its path **is** the URL |
| A template / partial | A component in `src/components/` |
| A layout wrapper | `src/layouts/Base.astro` (`<slot />` is where the page content goes) |
| `res.render(view, data)` | A page file imports a view and passes props: `<About lang="en" />` |
| JSON / DB data | TypeScript files in `src/i18n/` and `src/data/`, Markdown in `src/content/` |
| Static folder | `public/`: copied to the site unchanged |

### How a page is put together (example: /en/about-us)

```
src/pages/en/about-us.astro      ← URL /en/about-us. One line: <About lang="en" />
  └ src/views/About.astro         ← the page content, shared by the Serbian and English versions
      ├ src/layouts/Base.astro    ← <head>, header, footer, scripts (wraps every page)
      ├ src/components/*.astro    ← building blocks (PageHead, Photo, Form…)
      └ src/i18n/en.ts            ← every text on the page (sr.ts for Serbian)
```

Every page works this way: `pages/` only decides the URL and the language, and `views/` holds the content.
The Serbian URL `/sr/o-nama` uses the **same** view, `About.astro`, with `lang="sr"`.

---

## 2. The three commands

```bash
npm run dev
```
Local preview at http://localhost:4321. Changes show up as soon as you save a file. Errors appear
**in the browser and in the terminal**, with file name and line number. Start every investigation here.

```bash
npm run build
```
Exactly what Netlify runs, in three steps:
1. `scripts/check-launch.ts` lists open launch items. It only warns and never fails the build.
2. `astro check`: the TypeScript check. Stops on type errors.
3. `astro build`: writes the site to `dist/`.

**If it passes on your Mac, it passes on Netlify**, apart from the Node version (see 4.1).

```bash
npm run preview
```
Serves the finished `dist/` folder locally, which is the real production version. Use it when something looks
different on Netlify than in `npm run dev`.

---

## 3. Where things live

| What you want to check or change | File |
|---|---|
| Any text, in either language | `src/i18n/sr.ts`, `src/i18n/en.ts` (same structure in both) |
| Address, phone, email, social links, form inboxes | `src/data/site.ts` |
| Which URL belongs to which page | `src/i18n/routes.ts` |
| Layout of a page | `src/views/<Page>.astro` |
| Header / menu / language switch | `src/components/Header.astro` |
| Footer | `src/components/Footer.astro` |
| Forms (fields, validation) | `src/components/Form.astro` |
| Photos (list and files) | `src/data/images.ts`, files in `src/assets/images/` |
| News articles | `src/content/news/sr/*.md`, `src/content/news/en/*.md` (rules: `src/content.config.ts`) |
| Colours, spacing, layout | `src/styles/global.css` (colours are variables at the top, in `:root`) |
| Animations | `src/styles/motion.css` (looks) and `src/scripts/motion.ts` (scroll triggers) |
| `<head>`, SEO tags, page frame | `src/layouts/Base.astro` |
| Redirects, security headers, caching, Node version | `netlify.toml` |
| Site address, sitemap | `astro.config.ts` |

Search the whole project from the terminal (`node_modules` and `dist` are left out):

```bash
grep -rn "text you see on the page" src
```

---

## 4. Common problems and fixes

### 4.1 Netlify deploy failed

1. Netlify → *Deploys* → open the failed deploy → read the log from the **bottom up**; the first red
   error is usually the cause.
2. Run `npm run build` on your Mac. You will almost always see the same error, with file and line.
3. Typical causes:

| Error mentions | Cause and fix |
|---|---|
| `error ts(…)` or `astro check` | A TypeScript error. The message gives the file and line; fix it like any TS error. |
| `news` + `description` / `date` / `InvalidContentEntryDataError` | A news article's header (frontmatter) is wrong: missing title, description over 220 characters, bad date. See 4.4. |
| `Could not find image` / `ImageNotFound` | A photo name in `images.ts` or an article's `image:` doesn't match a file. See 4.5. |
| `Cannot find module` / `ERR_MODULE_NOT_FOUND` | A typo in an `import` path, or a package missing from `package.json`. Run `npm install` locally to check. |
| `Unknown file extension ".ts"` / `ERR_UNKNOWN_FILE_EXTENSION` | Node is too old to run the `.ts` scripts in `scripts/`. Needs Node 22.18 or newer: check `NODE_VERSION` in `netlify.toml` (currently 24). |

If it builds on your Mac but not on Netlify, compare Node versions: run `node -v` locally and look for
"Node version" near the top of the Netlify log.

### 4.2 Forms: submissions don't arrive

Check in this order:
1. **Netlify → Forms**: are there submissions?
   - **None, and the form isn't listed**: form detection is off. Turn on *Forms → Enable form detection*,
     then redeploy.
   - **Listed but empty**: try a submission yourself. Look in the **Spam** tab too, because test messages often
     land there.
2. **Submissions are there but no email**: *Forms → Form notifications*. Add or check the email
   notification for each form (`course-application`, `mfa-application`, `contact`, `partner-inquiry`).
3. **The visitor sees an error, or a 404 after sending**: the thank-you pages (`/en/thank-you`, `/sr/hvala`)
   must exist. They are built from `src/views/Thanks.astro`.
4. **The upload fails**: the site allows files up to 5 MB (`Form.astro`). Larger files are blocked
   in the browser with a message.
5. **Forms only deliver on Netlify.** Locally (`npm run dev`) the thank-you page appears, but nothing is sent.

Rule: a form's `name` must always have the same fields in every language. If you add a field, add it in
`Form.astro` for that form type and redeploy so Netlify picks up the new field.

### 4.3 Text is wrong or missing

- Change it in `src/i18n/sr.ts` **and** `src/i18n/en.ts`. Both files have the same shape.
- If you add a text key to one language only, `npm run build` stops with a TypeScript error naming the
  missing key. That is deliberate.

### 4.4 A news article doesn't show

| Check | Where |
|---|---|
| The header block between the `---` lines has `title`, `description` (≤ 220 characters), `date`, `category` | the `.md` file |
| `draft: true` hides the article | the `.md` file |
| A date in the future still shows, so check the year | `date: 2026-10-01` |
| The translation link only works if both files have the **same file name** | `news/sr/x.md` + `news/en/x.md` |

`npm run dev` shows the exact field that is wrong.

### 4.5 A photo is missing or broken

- The name used in the code (e.g. `"partners-hero"`) must be in `src/data/images.ts`, and its `file` must
  exist in `src/assets/images/`.
- If a file is missing, the site shows a grey box instead of failing. `npm run build` then lists
  "photo(s) missing".
- New photos: JPG/PNG/WebP, at most 2400 px wide. Astro makes the smaller AVIF/WebP versions itself.

### 4.6 Animations look wrong

- Everything is in `src/styles/motion.css` and `src/scripts/motion.ts`. The comment at the top of each file
  explains how they work together.
- **Content invisible while scrolling**: the element is hidden until `motion.ts` marks it `data-in`. Check
  the browser console (right-click → Inspect → Console) for script errors. If the script doesn't run at
  all, everything appears after 3 seconds anyway (safety net in `Base.astro`).
- **To turn all scroll effects off quickly**, delete the line `import "../scripts/motion";` near the end of
  `src/layouts/Base.astro`. Content then always shows, and only the CSS hover and load effects stay.
- Visitors with "reduce motion" switched on in their system settings get no animations. That is deliberate.

### 4.7 The live site looks old after a deploy

- Check that the deploy finished: Netlify → *Deploys*, newest at the top, status "Published".
- Hard-reload the page: Cmd+Shift+R on Mac, Ctrl+F5 on Windows.
- Images and scripts in `/_astro/` get new file names on every change, so caching is never the problem there.

### 4.8 Domain or email problems

- **Website not reachable on masok.eu**: in One.com DNS, the `A` record for `masok.eu` and the `CNAME`
  for `www` must point to Netlify (README §4). Netlify → *Domain management* shows whether DNS and HTTPS are OK.
- **Email stopped working**: the `MX` records at One.com were changed by mistake. They must stay One.com's.
  The website never needs them changed.
- **Whole site shows "Site not available"**: Netlify paused the team because the monthly credits ran
  out. Turn on auto recharge or buy credits (Netlify → *Billing*). This affects **all** sites in the team.

### 4.9 An old link gives 404

Add a redirect in `netlify.toml`, copying the existing `[[redirects]]` blocks, then deploy.

---

## 5. Reading an Astro error

An error in `npm run dev` or `npm run build` looks like this:

```
[ERROR] [types] src/views/Home.astro:44:12
  Property 'titel' does not exist on type '{ title: string; … }'. Did you mean 'title'?
```

- `src/views/Home.astro:44:12`: the file, line 44, column 12. In VS Code, Cmd+click it in the terminal.
- The rest is a normal TypeScript message.

In `npm run dev` the same error also appears as an overlay in the browser, with the code around it.

---

## 6. Undoing a change

The project is in git. To see what changed since the last commit, and undo a file:

```bash
git status
```

```bash
git diff src/views/Home.astro
```

```bash
git restore src/views/Home.astro
```

`git restore` throws away the uncommitted changes in that file, so check `git diff` first.
On Netlify you can also republish any earlier deploy: *Deploys* → choose one → **Publish deploy**.
