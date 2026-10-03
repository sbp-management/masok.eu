// Pre-launch check, run automatically before every build.
// Lists everything that still needs a real value or a decision from MASOK.
// It only WARNS — it never stops the build.

import { readFile, readdir, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const warnings = [];

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(ts|astro|md|mjs)$/.test(e.name)) out.push(p);
  }
  return out;
}

// 1. TODO(confirm) markers in the source
for (const file of await walk(path.join(root, "src"))) {
  const lines = (await readFile(file, "utf8")).split("\n");
  lines.forEach((line, i) => {
    const m = line.match(/TODO\(confirm\):?\s*(.*)/);
    if (m) warnings.push(`${path.relative(root, file)}:${i + 1}  ${m[1].trim()}`);
  });
}

// 2. Sample news articles
for (const lang of ["sr", "en"]) {
  const dir = path.join(root, "src/content/news", lang);
  for (const f of await readdir(dir).catch(() => [])) {
    const text = await readFile(path.join(dir, f), "utf8");
    if (/^sample:\s*true/m.test(text)) warnings.push(`src/content/news/${lang}/${f}  sample article – edit or delete before launch`);
  }
}

// 3. Missing photos
const imagesSrc = await readFile(path.join(root, "src/data/images.ts"), "utf8");
const missing = [];
for (const m of imagesSrc.matchAll(/file: "([^"]+\.(?:jpg|jpeg|png|webp))"/g)) {
  const dir = m[1] === "favicon.png" ? "public" : "src/assets/images";
  try { await access(path.join(root, dir, m[1])); } catch { missing.push(m[1]); }
}
if (missing.length) warnings.push(`${missing.length} photo(s) missing (run "npm run images"): ${missing.join(", ")}`);
try { await access(path.join(root, "public/documents/Europass_CV.docx")); }
catch { warnings.push(`public/documents/Europass_CV.docx missing (run "npm run images")`); }

if (warnings.length) {
  console.warn(`\n⚠  Launch checklist – ${warnings.length} item(s) still open:\n`);
  for (const w of warnings) console.warn("   • " + w);
  console.warn("");
} else {
  console.log("✓ Launch checklist: nothing open.");
}
