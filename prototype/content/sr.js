/* =====================================================================
   MASOK prototype — SRPSKI sadržaj (Serbian content)
   Edit any text below and reload the page. Nothing here touches masok.eu.
   Same structure as content/en.js.
   ===================================================================== */
window.SITE_CONTENT = window.SITE_CONTENT || {};
window.SITE_CONTENT.sr = {
  code: "SR",

  // Note: the live site has no Serbian "For German Partners" page,
  // so there is no "partners" route here. Add one to create it.
  routes: {
    home: "/",
    about: "/sr/o-nama",
    courses: "/sr/programi/",
    mechanic: "/sr/programi/mehanicar",
    assistant: "/sr/programi/mfa",
    technician: "/sr/programi/sterilizacioni-tehnicar",
    german: "/sr/programi/nemacki",
    applicants: "/sr/za-kandidate",
    news: "/sr/vesti",
    contact: "/sr/kontakt"
  },

  titles: {
    home: "MASOK",
    about: "O nama | MASOK",
    courses: "Programi | MASOK",
    mechanic: "Mehaničar za izradu i popravku hiruških instrumenata | MASOK",
    assistant: "Medicinski administrativni asistent (MFA — Medizinische Fachangestellte) | MASOK",
    technician: "Sterilizacioni tehničar | MASOK",
    german: "Kursevi nemačkog jezika | MASOK",
    applicants: "Za kandidate | MASOK",
    news: "Vesti | MASOK",
    contact: "Kontakt | MASOK"
  },

  nav: [
    { label: "Početna", page: "home" },
    { label: "O nama", page: "about" },
    { label: "Programi", page: "courses", children: [
      { label: "Mehaničar za izradu i popravku hiruških instrumenata", page: "mechanic" },
      { label: "Medicinski administrativni asistent (MFA — Medizinische Fachangestellte)", page: "assistant" },
      { label: "Sterilizacioni tehničar", page: "technician" },
      { label: "Kursevi nemačkog jezika", page: "german" }
    ]},
    { label: "Za kandidate", page: "applicants" },
    { label: "Vesti", page: "news" },
    { label: "Kontakt", page: "contact" }
  ],

  home: {
    heroImage: "Instrumenti%202.jpg",
    title: "Akademija MASOK",
    subtitle: "Vaš put do međunarodno priznate kvalifikacije",
    lines: [
      "Stručno obrazovanje po nemačkim standardima kvaliteta.",
      "Učite u Leskovcu - radite po svetskim standardima"
    ],
    primaryButton: { label: "Pogledaj programe", page: "courses" },
    secondaryButton: { label: "Prijavi se", page: "contact" },
    whyTitle: "Zašto Akademija MASOK?",
    why: [
      { icon: "bookmark", text: "Nastava po nemačkim standardima kvaliteta" },
      { icon: "star", text: "Međunarodno priznat AHK sertifikat" },
      { icon: "article", text: "Dualni model - teorija i praksa" },
      { icon: "language", text: "Intenzivno učenje nemačkog jezika u okviru programa" },
      { icon: "plusbox", text: "Praktična obuka i stručne posete kod nemačkih kliničkih partnera" },
      { icon: "handshake", text: "Direktna veza sa poslodavcima i podrška pri zapošljavanju" }
    ],
    coursesTitle: "Programi",
    highlightTitle: "Istaknute informacije",
    highlightText: "Upis prve generacije - oktobar 2026. godine"
  },

  courseCards: [
    { page: "mechanic", icon: "tools", title: "Mehaničar za izradu i popravku hiruških instrumenata",
      text: "Mehaničar za izradu i popravku hirurških instrumenata je stručnjak za precizne proizvode visoke vrednosti, bez kojih ne može nijedna operaciona sala." },
    { page: "assistant", icon: "stethoscope", title: "Medicinski administrativni asistent",
      text: "Medicinski administrativni asistent iliti MFA - Medizinische Fachangestellte je stručnjak koji povezuje kliničku medicinu i zdravstvenu administraciju." },
    { page: "technician", icon: "spray", title: "Sterilizacioni tehničar",
      text: "Sterilizacioni tehničar je stručnjak za pripremu i obradu sterilnog materijala prema evropskim procesnim standardima (AEMP), sa fokusom na dokumentaciju i obezbeđenje kvaliteta." },
    { page: "german", icon: "globe", title: "Kursevi nemačkog jezika",
      text: "Kursevi nemačkog jezika otvoreni su za sve zainteresovane. Nastava se izvodi po nemačkim standardima kvaliteta, u malim grupama, sa iskusnim predavačima." }
  ],
  viewCourse: "Pogledaj program",

  coursesPage: {
    title: "Programi",
    breadcrumb: ["Početna", "Programi"],
    heading: "Naši programi"
  },

  courseSidebar: [
    { label: "Mehaničar za izradu i popravku hiruških instrumenata", page: "mechanic" },
    { label: "Medicinski administrativni asistent - MFA", page: "assistant" },
    { label: "Sterilizacioni tehničar", page: "technician" },
    { label: "Kursevi nemačkog jezika", page: "german" }
  ],

  coursePages: {
    mechanic: {
      crumb: "Mehaničar za izradu i popravku hiruških instrumenata",
      form: "apply",
      image: "repair.jpg",
      title: "Mehaničar za izradu i popravku hiruških instrumenata",
      intro: ["Mehaničar za izradu i popravku hirurških instrumenata je stručnjak za precizne proizvode visoke vrednosti, bez kojih ne može nijedna operaciona sala. Program osposobljava polaznike za izradu, održavanje i stručnu popravku hirurških instrumenata prema nemačkim standardima kvaliteta."],
      blocks: [
        { title: "Ključne informacije:", items: [
          ["Status upisa", "Otvoren — upis prve generacije septembar 2026."],
          ["Trajanje", "9 meseci"],
          ["Format", "Dualni model — teorijska nastava u Akademiji MASOK i praktična obuka u savremeno opremljenom trening centru"],
          ["Uslov za upis", "SSS tehničkog usmerenja"],
          ["Standard kvalifikacije", "Školovanje po novousvojenom (2026.) standardu kvalifikacije \"Mehaničar za izradu i popravku hiruških instrumenata\""],
          ["Jezička obuka", "Intenzivna obuka iz nemačkog jezika u okviru programa"],
          ["Sertifikat", "Nacionalno priznata kvalifikacija + međunarodni sertifikat AHK"],
          ["Radno mesto i perspektiva", "Deficitarno zanimanje u Evropi — velika tražnja za stručnjacima, uz mogućnost zapošljavanja u proizvodno—servisnim kapacitetima u Srbiji"]
        ]}
      ],
      whyTitle: "Zašto ovaj program?",
      why: "Hirurški instrumenti su precizni proizvodi visoke vrednosti, a kvalifikovanih stručnjaka za njihovu izradu i popravku u Evropi je sve manje. Ovaj program polaznicima otvara sigurnu profesionalnu perspektivu u zanimanju budućnosti — uz znanja i sertifikat priznate na međunarodnom nivou.",
      gallery: ["Repair_06.jpg", "repair%201.jpg"]
    },
    assistant: {
      crumb: "Medicinski administrativni asistent (MFA)",
      form: "mfa",
      image: "nurse.webp",
      title: "Medicinski administrativni asistent (MFA — Medizinische Fachangestellte)",
      intro: ["Medicinski administrativni asistent (MFA) je stručnjak koji povezuje kliničku medicinu i zdravstvenu administraciju. Preuzima administrativne, organizacione i koordinacione zadatke, čime se lekari i medicinske sestre vraćaju svom pravom poslu: brizi o pacijentu. Model je etabliran u Nemačkoj, Austriji i Švajcarskoj."],
      blocks: [
        { title: "Ključne informacije:", items: [
          ["Status upisa", "Otvoren — upis jesen 2026."],
          ["Trajanje", "9 meseci"],
          ["Format", "Dualni model — teorija + praksa u zdravstvenoj ustanovi"],
          ["Uslov za upis", "SSS/VŠS medicinskog smera"],
          ["Standard kvalifikacije", "Prema EU modelu MFA (Nemačka, Austrija, Švajcarska)"],
          ["Jezička obuka", "Intenzivna obuka iz nemačkog jezika u okviru programa"],
          ["Sertifikat", "Međunarodno priznat sertifikat AHK"],
          ["Radno mesto i perspektiva", "Zdravstvene ustanove"]
        ]}
      ],
      whyTitle: "Zašto ovaj program?",
      why: "MFA je zanimanje budućnosti u zdravstvu — rasterećuje ceo tim, podiže kapacitet ustanove i pruža polaznicima jasnu karijernu perspektivu po modelu etabliranom u Nemačkoj, Austriji i Švajcarskoj.",
      gallery: ["nurse%201.jpg", "nurse%202.webp"]
    },
    technician: {
      crumb: "Sterilizacioni tehničar",
      form: "apply",
      image: "sterili%201.jpg",
      title: "Sterilizacioni tehničar",
      intro: ["Sterilizacioni tehničar je stručnjak za pripremu i obradu sterilnog materijala prema evropskim procesnim standardima (AEMP), sa fokusom na dokumentaciju i obezbeđenje kvaliteta. Sterilizacija je jedna od najvažnijih karika bezbednosti pacijenata u svakoj zdravstvenoj ustanovi."],
      blocks: [
        { title: "Ključne informacije:", items: [
          ["Status upisa", "Program u pripremi — moguća prijava interesovanja"],
          ["Trajanje", "9 meseci"],
          ["Format", "Dualni model — teorija + praksa"],
          ["Uslov za upis", "Uskoro"],
          ["Standard kvalifikacije", "Prema evropskim procesnim standardima (AEMP)"],
          ["Jezička obuka", "Intenzivna obuka iz nemačkog jezika u okviru programa"],
          ["Sertifikat", "Uskoro"],
          ["Radno mesto i perspektiva", "Zdravstvene ustanove — službe za sterilizaciju"]
        ]}
      ],
      whyTitle: "Zašto ovaj program?",
      why: "Sterilizacija je jedan od najvažnijih koraka u sprečavanju infekcija i bezbednom pružanju zdravstvene zaštite. Ovaj program je namenjen svima koji žele da steknu praktično i stručno znanje za rad u sterilizaciji, uz razumevanje celokupnog procesa — od prijema i pripreme instrumenata, preko čišćenja, pakovanja i sterilizacije, do kontrole kvaliteta, pravilnog skladištenja i dokumentovanja procesa.",
      gallery: ["sterili%203.webp", "sterili%204.jpg"]
    },
    german: {
      crumb: "Kursevi nemačkog jezika",
      form: "apply",
      image: "Nemacki%202.jpg",
      title: "Kursevi nemačkog jezika",
      intro: ["Kursevi nemačkog jezika otvoreni su za sve zainteresovane. Nastava se izvodi po nemačkim standardima kvaliteta, u malim grupama, sa iskusnim predavačima."],
      blocks: [
        { title: "Nivoi:", items: [
          "Nivoi A1–B2 prema Zajedničkom evropskom okviru za jezike (CEFR)",
          "Besplatno ulazno testiranje za raspoređivanje u odgovarajuću grupu"
        ]},
        { title: "Moduli:", items: [
          "Opšti nemački",
          "Stručni nemački za medicinu i tehniku",
          "Priprema za međunarodne ispite (Goethe / telc / ÖSD)",
          "Kursevi za firme"
        ]},
        { title: "Ključne informacije:", items: [
          ["Status upisa", "uskoro"],
          ["Trajanje ciklusa", "uskoro"],
          ["Fond časova", "uskoro"],
          ["Cena", "na upit"],
          ["Sertifikat", "sertifikat Akademije o završenom nivou"]
        ]}
      ],
      whyTitle: "",
      why: "",
      gallery: []
    }
  },

  about: {
    title: "O nama",
    breadcrumb: ["Početna", "O nama"],
    whoTitle: "Ko smo mi?",
    paragraphs: [
      "Međunarodna akademija za stručno obrazovanje kadrova (MASOK) u Leskovcu je obrazovni centar za razvoj i implementaciju savremenih programa stručnog obrazovanja i usavršavanja, u skladu sa evropskim i međunarodnim standardima. Akademija povezuje savremeni obrazovni program, praktičnu obuku i međunarodnu sertifikaciju sa konkretnim mogućnostima zapošljavanja u zdravstvenom sektoru i pratećoj industriji.",
      "Naša misija je razvoj kompetentnog stručnog kadra prema međunarodnim standardima, koji direktno odgovara na potrebe zdravstvenog sistema i prateće industrije, uz unapređenje kvaliteta zdravstvenih usluga u Srbiji.",
      "Akademija MASOK počinje sa realizacijom nastave od septembra 2026. godine, upisom prve generacije polaznika."
    ],
    contactButton: "Kontakt",
    founderText: "Osnivač Akademije je SBP Management, kompanija sa sedištem u Berlinu specijalizovana za projekte u oblasti zdravstva i stručnog obrazovanja, sa dugogodišnjim iskustvom u saradnji sa vodećim nemačkim kliničkim grupama i univerzitetskim klinikama.",
    moreInfo: "Više informacija na:",
    moreInfoLink: "https://www.sbp-management.com/",
    moreInfoLabel: "www.sbp-management.com",
    teamTitle: "Naš tim",
    team: [
      { name: "Sabina Banda", role: "Osnivač", photo: "IMG_3729.JPG", bio: "" },
      { name: "Nikola Banda", role: "Vlasnik i Osnivač", photo: "IMG_3913.JPG",
        bio: "Rođen 1997. godine u Berlinu, završio je gimnaziju i studije zdravstvene ekonomije. Sertifikovani je zdravstveni ekonomista, vlasnik i osnivač MASOK Akademije, osnovane u martu 2026. godine." },
      { name: "Milivoje Đorđević", role: "Direktor", photo: "Cale.jpg",
        bio: "Dugogodišnji direktor tehničke škole, sa bogatim iskustvom u obrazovanju odraslih, dualnom sistemu i razvoju standarda kvalifikacija." }
    ]
  },

  applicants: {
    title: "Za kandidate",
    breadcrumb: ["Početna", "Za kandidate"],
    overviewTitle: "Kratki pregled programa",
    overview: [
      { title: "Mehaničar za izradu i popravku hiruških instrumenata", image: "repair.jpg", items: [
        "Upis septembra 2026.", "Trajanje 9 meseci", "Uslov SSS tehničkog usmerenja",
        "Školovanje po novousvojenom (2026.) standardu kvalifikacije", "AHK sertifikat"] },
      { title: "Medicinski administrativni asistent", image: "nurse.webp", items: [
        "Upis jesen 2026.", "Trajanje 9 meseci", "Uslov SSS/VŠS medicinskog usmerenja", "Dualni model", "AHK sertifikat"] },
      { title: "Sterilizacioni tehničar", image: "sterili%201.jpg", items: [
        "Program u pripremi - moguća prijava interesovanja"] },
      { title: "Kursevi nemačkog jezika", image: "Nemacki%202.jpg", items: [
        "Nivoi od A1 do B2", "Besplatno ulazno testiranje za raspoređivanje u odgovarajuću grupu",
        "Više modula: opšti nemački, stručni nemački za medicinu i tehniku, priprema za međunarodne ispite (Goethe / telc / ÖSD), kursevi za firme",
        "Cena na upit", "Sertifikat Akademije o zavšenom nivou"] }
    ],
    stepsTitle: "Koraci za prijavu",
    steps: [
      "Onlajn prijava sa osnovnim podacima i biografijom",
      "Onlajn razgovor sa timom akademije",
      "Finalna selekcija i upis"
    ],
    applyButton: { label: "Prijavi se", page: "contact" },
    getTitle: "Šta polaznici dobijaju?",
    get: [
      "Nastavu po nemačkim standardima kvaliteta",
      "Intenzivan kurs nemačkog jezika",
      "Praktičnu obuku po dualnom modelu",
      "Novčanu naknadu",
      "Stručne posete i hospitacije kod nemačkih kliničkih partnera",
      "AHK sertifikat priznat na međunarodnom nivou",
      "Podršku pri zapošljavanju"
    ],
    faqTitle: "Česta pitanja (FAQ)",
    faq: [
      ["Da li moram da znam nemački pre upisa?", "Ne, učenje jezika je sastavni deo programa."],
      ["Da li je sertifikat priznat u inostranstvu?", "Da, AHK sertifikat je međunarodno priznat"],
      ["Da li postoji praksa?", "Da, programi se realizuju po dualnom modelu, a predviđene su i stručne posete i hospitacije kod nemačkih partnera."],
      ["Kako se prijavljujem?", "Putem onlajn forme na sajtu."],
      ["Da li mogu da pohađam samo kurs jezika?", "Da, kursevi nemačkog jezika otvoreni su za sve, nezavisno od upisa na obrazovne programe Akademije."],
      ["Da li se završen kurs priznaje pri upisu na program?", "Da, postignuti nivo se priznaje i uzima u obzir prilikom jezičke obuke u okviru programa"]
    ]
  },

  contact: {
    title: "Kontakt",
    breadcrumb: ["Početna", "Kontakt"],
    heading: ["Za sve dodatne informacije,", "molimo kontaktirajte nas!"],
    people: [
      { name: "Nikola Banda", role: "Vlasnik i Osnivač", email: "n.banda@masok.eu", phone: "+381 60 6868224", photo: "IMG_3913.JPG" },
      { name: "Milivoje Đorđević", role: "Direktor", email: "m.djordjevic@masok.eu", phone: "+381 60 6868225", photo: "Cale.jpg" }
    ],
    phone: "+381606868225",
    email: "n.banda@masok.eu",
    address: ["Akademija MASOK", "Stojana Ljubića 9", "16000 Leskovac", "Serbia"]
  },

  /* ---------------- VESTI (news) ----------------
     Same structure as in en.js — see the instructions there.
     Use the same "slug" as the English version of the article.
     NOTE: sample articles with placeholder dates — edit before publishing. */
  news: {
    title: "Vesti",
    breadcrumb: ["Početna", "Vesti"],
    heading: "Vesti i novosti iz Akademije",
    latestTitle: "Najnovije vesti",
    allNews: "Sve vesti",
    readMore: "Pročitajte više",
    back: "Nazad na sve vesti",
    moreTitle: "Još vesti",
    all: "Sve",
    empty: "Još nema vesti.",
    articles: [
      {
        slug: "first-generation-enrollment",
        date: "2026-09-15",
        category: "Upis",
        image: "Instrumenti%202.jpg",
        title: "Upis prve generacije počinje u oktobru 2026. godine",
        excerpt: "Akademija MASOK u Leskovcu prima prijave za prvu generaciju polaznika programa Mehaničar za izradu i popravku hirurških instrumenata i Medicinski administrativni asistent (MFA).",
        body: [
          "Prva generacija polaznika započinje obuku u Akademiji MASOK na jesen 2026. godine. Prijave su otvorene za dva programa: Mehaničar za izradu i popravku hirurških instrumenata i Medicinski administrativni asistent (MFA — Medizinische Fachangestellte).",
          "## Šta programi nude",
          "Oba programa traju 9 meseci i realizuju se po dualnom modelu: teorijska nastava u Akademiji uz praktičnu obuku. Intenzivna obuka iz nemačkog jezika sastavni je deo svakog programa, a polaznici dobijaju međunarodno priznat AHK sertifikat.",
          "## Kako se prijaviti",
          "Prijava se sastoji iz tri koraka: onlajn prijava sa osnovnim podacima i biografijom, onlajn razgovor sa timom Akademije, i finalna selekcija i upis. Nije potrebno da znate nemački pre upisa — učenje jezika je deo programa."
        ]
      },
      {
        slug: "new-qualification-standard-surgical-instruments",
        date: "2026-08-28",
        category: "Programi",
        image: "repair.jpg",
        title: "Novi standard kvalifikacije za mehaničare hirurških instrumenata",
        excerpt: "Naš program za mehaničare hirurških instrumenata realizuje se po standardu kvalifikacije usvojenom 2026. godine — obuka za zanimanje koje je deficitarno u celoj Evropi.",
        body: [
          "Hirurški instrumenti su precizni proizvodi visoke vrednosti bez kojih ne može nijedna operaciona sala, a kvalifikovanih stručnjaka za njihovu izradu i popravku u Evropi je sve manje.",
          "Program Akademije MASOK osposobljava polaznike za izradu, održavanje i stručnu popravku hirurških instrumenata prema nemačkim standardima kvaliteta, po novousvojenom (2026.) standardu kvalifikacije.",
          "## Ko može da se prijavi",
          "Program je namenjen kandidatima sa SSS tehničkog usmerenja. Praktična obuka se odvija u savremeno opremljenom trening centru, a polaznici dobijaju nacionalno priznatu kvalifikaciju i međunarodni AHK sertifikat."
        ]
      },
      {
        slug: "german-language-courses",
        date: "2026-07-10",
        category: "Kursevi nemačkog",
        image: "Nemacki%202.jpg",
        title: "Kursevi nemačkog jezika otvoreni za sve",
        excerpt: "Nivoi A1–B2, male grupe i besplatno ulazno testiranje — a nije potrebno da budete upisani na program Akademije.",
        body: [
          "Kursevi nemačkog jezika u Akademiji MASOK otvoreni su za sve zainteresovane. Nastava se izvodi po nemačkim standardima kvaliteta, u malim grupama, sa iskusnim predavačima.",
          "## Nivoi i moduli",
          "Kursevi obuhvataju nivoe od A1 do B2 prema Zajedničkom evropskom okviru za jezike (CEFR). Besplatno ulazno testiranje određuje odgovarajuću grupu. Moduli uključuju opšti nemački, stručni nemački za medicinu i tehniku, pripremu za ispite Goethe, telc i ÖSD, kao i kurseve za firme.",
          "Polaznici dobijaju sertifikat Akademije za svaki završeni nivo. Cena je na upit — kontaktirajte nas za datum početka sledećeg kursa."
        ]
      }
    ]
  },

  forms: {
    name: "Ime i Prezime",
    fullName: "Ime i Prezime",
    email: "Email",
    phone: "Broj telefona",
    contactHasPhone: true, // Serbian contact form also asks for a phone number
    phoneShort: "Telefon",
    company: "Kompanija",
    course: "Željeni program",
    courseOptions: ["Mehaničar za izradu i popravku hiruških instrumenata", "Medicinski administrativni asistent - MFA", "Sterilizacioni tehničar", "Kursevi nemačkog jezika"],
    contactCourseOptions: ["Mehaničar za izradu i popravku hiruških instrumenata", "Medicinski administrativni asistent - MFA", "Sterilizacioni tehničar", "Kursevi nemačkog jezika"],
    message: "Poruka (nije obavezno)",
    attachCv: "Priložite CV (nije obavezno)",
    attachment: "Priložite CV (nije obavezno)",
    attachEuropass: "Priložite Europass CV",
    upload: "Click to upload",
    filesCount: "{n}/5 files",
    applyTitle: ["Prijavite se ovde,", "popunite neophodne podatke!"],
    mfaTitle: ["Koraci za prijavu,", "ukoliko ste zainteresovani!"],
    mfaSteps: [
      { text: "Popunite prijavni formular", button: "Prijavite se", href: "https://forms.gle/S9MTGNXb3YbH4zZQ7" },
      { text: "Preuzmite i popunite Europass CV obrazac", button: "Preuzmite CV", href: "https://masok.eu/onewebmedia/Europass_CV.docx" },
      { text: "Priložite i pošaljite popunjen Europass CV" }
    ],
    interest: "Šta vas zanima?",
    interestOptions: ["Prostor za obuke / sastanke", "Obuka i smeštaj", "Timski / korporativni program", "Ulazak na tržište Srbije", "Ulazak na tržište Nemačke", "Poslovno savetovanje", "Ostalo"],
    participants: "Broj učesnika (nije obavezno)",
    date: "Željeni datum (nije obavezno)",
    project: "Ukratko opišite vaš projekat (nije obavezno)",
    submit: "Pošalji",
    captcha: "Kliknite da potvrdite da ste čovek",
    captchaWorking: "Provera…",
    captchaDone: "Ja sam čovek",
    required: "Ovo polje je obavezno.",
    invalidEmail: "Unesite ispravnu email adresu.",
    chooseOne: "Izaberite bar jednu opciju.",
    captchaRequired: "Molimo završite proveru.",
    tooMany: "Možete priložiti najviše 5 fajlova.",
    success: "Hvala! Vaša poruka je poslata. Kontaktiraćemo vas uskoro.",
    sendAnother: "Pošalji novu poruku"
  },

  // The live site shows the same (bilingual) footer on both languages
  footer: {
    contactTitle: "Contact us",
    contactSubtitle: "Kontaktirajte nas",
    phone: "+381606868225",
    email: "n.banda@masok.eu",
    address: "Akademija MASOK, Stojana Ljubića 9, 16000 Leskovac",
    mapsQuery: "Akademija MASOK, Stojana Ljubića 9, 16000 Leskovac, Serbia",
    facebook: "https://facebook.com/masokacademy",
    linkedin: "https://linkedin.com/company/masokacademy",
    copyright: "© 2026 MASOK Akademija. All Rights Reserved.",
    hoursTitle: "Business hours",
    hoursSubtitle: "Radno vreme",
    hours: [["Sunday - Saturday", "Closed"]]
  },

  cookies: {
    text: "Koristimo neophodne kolačiće da bi sajt funkcionisao. Uz vašu saglasnost, možemo koristiti i dodatne kolačiće za poboljšanje korisničkog iskustva i analizu posećenosti. Klikom na „Prihvati” pristajete na korišćenje kolačića kako je opisano u Politici kolačića. Podešavanja možete promeniti u bilo kom trenutku klikom na „Podešavanja”.",
    preferences: "Podešavanja",
    decline: "Odbij",
    accept: "Prihvati",
    prefsTitle: "Podešavanja kolačića",
    essential: "Neophodni (uvek uključeni)",
    analytics: "Analitika",
    marketing: "Marketing",
    save: "Sačuvaj podešavanja"
  },

  notFound: { title: "Stranica nije pronađena", text: "Stranica koju tražite ne postoji.", back: "Nazad na početnu" }
};
