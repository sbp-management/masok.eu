/**
 * Every photo on the site.
 *  - `file`   = file name inside src/assets/images/
 *  - `source` = where it was copied from on the old One.com site (used by `npm run images`)
 *
 * To replace a photo: put the new file in src/assets/images/ with the same name
 * (or change `file` here). Astro resizes and compresses it automatically at build time.
 */
const OLD_SITE = "https://impro.usercontent.one/appid/oneComWsb/domain/masok.eu/media/masok.eu/onewebmedia/";

export const images = {
  logo: { file: "logo.png", source: OLD_SITE + "Logo%20sajt.png" },
  favicon: { file: "favicon.png", source: OLD_SITE + "Logo.png" },
  "hero-instruments": { file: "hero-instruments.jpg", source: OLD_SITE + "Instrumenti%202.jpg" },
  "mechanic-main": { file: "mechanic-main.jpg", source: OLD_SITE + "repair.jpg" },
  "mechanic-2": { file: "mechanic-2.jpg", source: OLD_SITE + "Repair_06.jpg" },
  "mechanic-3": { file: "mechanic-3.jpg", source: OLD_SITE + "repair%201.jpg" },
  "mfa-main": { file: "mfa-main.webp", source: OLD_SITE + "nurse.webp" },
  "mfa-2": { file: "mfa-2.jpg", source: OLD_SITE + "nurse%201.jpg" },
  "mfa-3": { file: "mfa-3.webp", source: OLD_SITE + "nurse%202.webp" },
  "sterilization-main": { file: "sterilization-main.jpg", source: OLD_SITE + "sterili%201.jpg" },
  "sterilization-2": { file: "sterilization-2.webp", source: OLD_SITE + "sterili%203.webp" },
  "sterilization-3": { file: "sterilization-3.jpg", source: OLD_SITE + "sterili%204.jpg" },
  "german-course": { file: "german-course.jpg", source: OLD_SITE + "Nemacki%202.jpg" },
  "sabina-banda": { file: "sabina-banda.jpg", source: OLD_SITE + "IMG_3729.JPG" },
  "nikola-banda": { file: "nikola-banda.jpg", source: OLD_SITE + "IMG_3913.JPG" },
  "milivoje-djordjevic": { file: "milivoje-djordjevic.jpg", source: OLD_SITE + "Cale.jpg" },
  "partners-hero": { file: "partners-hero.jpg", source: OLD_SITE + "pexels-vlada-karpovich-7433837.jpg" },
  "partners-meetings": { file: "partners-meetings.jpg", source: OLD_SITE + "pexels-pavel-danilyuk-8761328.jpg" },
  "partners-consulting": { file: "partners-consulting.jpg", source: OLD_SITE + "pexels-ketut-subiyanto-4963359.jpg" },
} as const;

export type ImageKey = keyof typeof images;

/** Downloadable documents (copied to public/documents/). */
export const documents = {
  europass: { file: "Europass_CV.docx", source: "https://masok.eu/onewebmedia/Europass_CV.docx" },
} as const;

// Build-time lookup of the image files that actually exist.
const files = import.meta.glob<{ default: ImageMetadata }>("../assets/images/*.{jpg,jpeg,png,webp,avif}", { eager: true });

export function findImage(key: string): ImageMetadata | undefined {
  const entry = images[key as ImageKey];
  if (!entry) return undefined;
  return files[`../assets/images/${entry.file}`]?.default;
}
