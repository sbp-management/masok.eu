// Copies the photos and the Europass CV template from the old One.com site
// into this project, so the new site no longer depends on One.com.
//
// Run once:  npm run images
// Existing files are skipped; delete a file first to download it again.

import { mkdir, writeFile, access, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const src = await readFile(path.join(root, "src/data/images.ts"), "utf8");

// Read the image and document lists from src/data/images.ts without a TS compiler
const oldSite = src.match(/const OLD_SITE = "([^"]+)"/)[1];
const entries = [...src.matchAll(/file: "([^"]+)", source: (OLD_SITE \+ )?"([^"]+)"/g)].map((m) => ({
  file: m[1],
  url: (m[2] ? oldSite : "") + m[3],
  dir: m[1].endsWith(".docx") ? "public/documents" : m[1] === "favicon.png" ? "public" : "src/assets/images",
}));

let ok = 0, skipped = 0, failed = 0;
for (const { file, url, dir } of entries) {
  const target = path.join(root, dir, file);
  try {
    await access(target);
    skipped++;
    continue;
  } catch {}
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, buf);
    console.log(`✓ ${path.join(dir, file)}  (${Math.round(buf.length / 1024)} KB)`);
    ok++;
  } catch (err) {
    console.error(`✗ ${file} from ${url}: ${err.message}`);
    failed++;
  }
}
console.log(`\n${ok} downloaded, ${skipped} already present, ${failed} failed.`);
if (failed) process.exitCode = 1;
