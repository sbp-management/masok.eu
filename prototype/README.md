# MASOK website — local prototype

A working copy of masok.eu (Serbian + English) that runs on your computer.
Nothing you change here touches the live site.

## Open it

- **Easiest:** double-click `index.html`.
- **Or** run `node serve.js` in this folder and open http://localhost:8080

Pages use the same addresses as the live site after a `#`, for example
`index.html#/en/contact` or `index.html#/sr/o-nama`. The start page (`#/`) is
the Serbian home page, same as masok.eu.

## Where to change things

| To change…                               | Edit                     |
|------------------------------------------|--------------------------|
| English text, menu, titles, form labels  | `content/en.js`          |
| Serbian text                             | `content/sr.js`          |
| Colours, fonts, spacing                  | `css/style.css` (top `:root` block) |
| Page layout / new sections / behaviour   | `js/app.js` (`pages.home`, `pages.about`, …) |

Save the file and reload the browser to see the change.

**Images** are loaded from the live site by file name (e.g. `"repair.jpg"`).
To use your own, put the file in an `images/` folder and write
`"images/my-photo.jpg"` — or paste any full image URL.

## Adding news / articles

News lives in the `news` → `articles` list in `content/en.js` (English) and
`content/sr.js` (Serbian). To publish a new article, copy one `{ ... }` block,
paste it at the top of the list and change:

- `slug` – the web address, e.g. `open-day-2026` → `#/en/news/open-day-2026`.
  Use the same slug in both languages so the SR/EN switch finds the translation.
- `date` – `"YYYY-MM-DD"`; the newest articles show first automatically
- `category` – any label; the News page gets a filter button for each one
- `image`, `title`, `excerpt` (the short text on the card)
- `body` – list of paragraphs; start a line with `## ` for a subheading

The homepage "Latest news" block always shows the 3 newest articles.
The three included articles are **samples** with placeholder dates.

## What works

- All 10 English and 9 Serbian pages, with the language switch mapping to the matching page
- Desktop dropdown menu and mobile hamburger menu
- All forms (course applications, Europass MFA form, contact, German partners inquiry):
  required-field checks, email check, file upload (up to 5, drag & drop), a simulated
  "I am human" check, and a success message
- Cookie banner with Accept / Decline / Preferences
- Scroll animations, back-to-top button, flip cards on the team section

## The black "PROTOTYPE" button

Bottom-left on every page. It is not part of the real site. It lets you:
- see every test form submission (they are saved in this browser only — **no email is sent**)
- export or clear those submissions
- bring the cookie banner back
- open the same page on the live site to compare

## Faithful to the live site

The text is copied as-is, including the issues noted in the review
(e.g. "Sunday - Saturday: Closed", mismatched phone numbers, typos like
"hiruških" / "ADITIONAL" / "Medicinal", no Serbian partners page) so you can
fix them here first and compare.
