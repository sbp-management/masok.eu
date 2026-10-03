/**
 * Facts used across the whole site. Change them here once and every page updates.
 *
 * Lines marked "TODO(confirm)" still need the real value from MASOK.
 * `npm run build` prints a warning for every one of them (see scripts/check-launch.mjs).
 */

export const site = {
  name: "MASOK",
  url: "https://masok.eu",

  // Main contact shown in the footer and in structured data for Google.
  // TODO(confirm): main public phone number. The old site showed +381 60 6868225
  // (the Director's number) next to Nikola's email.
  phone: "+381 60 6868225",
  email: "n.banda@masok.eu",

  address: {
    name: "Akademija MASOK",
    street: "Stojana Ljubića 9",
    postalCode: "16000",
    city: "Leskovac",
    country: "Serbia",
    countryCode: "RS",
  },

  social: {
    facebook: "https://facebook.com/masokacademy",
    linkedin: "https://linkedin.com/company/masokacademy",
  },

  // Business hours. While this is `null`, the footer hides the hours block
  // (better than showing "Sunday – Saturday: Closed" like the old site).
  // Example: [{ days: { sr: "Ponedeljak – Petak", en: "Monday – Friday" }, hours: "09:00 – 17:00" }]
  // TODO(confirm): real business hours
  hours: null as null | { days: { sr: string; en: string }; hours: string }[],

  // When the first generation starts. Used on the homepage, About page and course pages.
  // The old site said September in some places and October in others.
  // Serbian is used after "u" ("počinje u ..."), so write it in the locative: "septembru 2026." / "oktobru 2026."
  // TODO(confirm): start month of the first generation
  intake: { sr: "oktobru 2026.", en: "October 2026" },

  // Legal details for the privacy policy.
  // TODO(confirm): registered legal name, registration number (MB) and tax ID (PIB)
  legal: {
    entity: "Akademija MASOK",
    registrationNumber: "",
    taxId: "",
    privacyEmail: "n.banda@masok.eu",
  },

  // External links
  applicationFormUrl: "https://forms.gle/S9MTGNXb3YbH4zZQ7",
  europassCv: "/documents/Europass_CV.docx",
  sbpManagement: "https://www.sbp-management.com/",
} as const;

export const people = {
  nikola: {
    name: "Nikola Banda",
    role: { sr: "Vlasnik i osnivač", en: "Owner and Founder" },
    email: "n.banda@masok.eu",
    phone: "+381 60 6868224",
    photo: "nikola-banda",
    bio: {
      sr: "Rođen 1997. godine u Berlinu, završio je gimnaziju i studije zdravstvene ekonomije. Sertifikovani je zdravstveni ekonomista, vlasnik i osnivač MASOK Akademije, osnovane u martu 2026. godine.",
      en: "Born in Berlin in 1997, he completed grammar school and studied health economics. He is a certified health economist and the owner and founder of MASOK Academy, established in March 2026.",
    },
  },
  milivoje: {
    name: "Milivoje Đorđević",
    role: { sr: "Direktor", en: "Director" },
    email: "m.djordjevic@masok.eu",
    phone: "+381 60 6868225",
    photo: "milivoje-djordjevic",
    bio: {
      sr: "Dugogodišnji direktor tehničke škole, sa bogatim iskustvom u obrazovanju odraslih, dualnom sistemu i razvoju standarda kvalifikacija.",
      en: "A long-time director of a technical school, with extensive experience in adult education, the dual system and the development of qualification standards.",
    },
  },
  sabina: {
    name: "Sabina Banda",
    role: { sr: "Osnivač", en: "Founder" },
    email: "",
    phone: "",
    photo: "sabina-banda",
    bio: { sr: "", en: "" },
  },
} as const;

export const team = [people.sabina, people.nikola, people.milivoje];
export const contactPeople = [people.nikola, people.milivoje];
