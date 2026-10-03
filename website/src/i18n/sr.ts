/**
 * SRPSKI tekst za sve stranice (Serbian text for every page).
 * "{intake}" se automatski menja datumom početka iz src/data/site.ts.
 * Vesti NISU ovde — nalaze se u src/content/news/sr/.
 */
import en, { type Dict } from "./en";

const sr: Dict = {
  lang: "sr",
  htmlLang: "sr-Latn",
  ogLocale: "sr_RS",
  dateLocale: "sr-Latn-RS",
  siteName: "Akademija MASOK",

  ui: {
    skip: "Preskoči na glavni sadržaj",
    menu: "Meni",
    closeMenu: "Zatvori meni",
    openSubmenu: "Prikaži programe",
    home: "Početna",
    toTop: "Nazad na vrh",
    languageLabel: "Jezik",
    langNames: { sr: "Srpski", en: "English" },
    readMore: "Pročitajte više",
    learnMore: "Saznajte više",
    viewCourse: "Pogledaj program",
    mainNav: "Glavni meni",
    breadcrumb: "Putanja",
    photoComingSoon: "Fotografija",
  },

  // Nema stranice "Za nemačke partnere" na srpskom — dodajte je ovde kada bude prevedena.
  nav: [
    { label: "Početna", page: "home" },
    { label: "O nama", page: "about" },
    {
      label: "Programi", page: "courses",
      children: [
        { label: "Mehaničar za izradu i popravku hirurških instrumenata", page: "mechanic" },
        { label: "Medicinski administrativni asistent (MFA)", page: "assistant" },
        { label: "Sterilizacioni tehničar", page: "technician" },
        { label: "Kursevi nemačkog jezika", page: "german" },
      ],
    },
    { label: "Za kandidate", page: "applicants" },
    { label: "Vesti", page: "news" },
    { label: "Kontakt", page: "contact" },
  ],

  meta: {
    home: {
      title: "Akademija MASOK – Stručno obrazovanje po nemačkim standardima u Leskovcu",
      description: "Akademija MASOK u Leskovcu: stručno obrazovanje po nemačkim standardima kvaliteta uz međunarodno priznat AHK sertifikat. Programi za mehaničare hirurških instrumenata, medicinske asistente i kursevi nemačkog.",
    },
    about: {
      title: "O nama | Akademija MASOK",
      description: "Akademija MASOK u Leskovcu, koju je osnovao berlinski SBP Management, obrazuje stručni kadar za zdravstvo i prateću industriju po evropskim i međunarodnim standardima.",
    },
    courses: {
      title: "Programi | Akademija MASOK",
      description: "Naši programi: mehaničar za izradu i popravku hirurških instrumenata, medicinski administrativni asistent (MFA), sterilizacioni tehničar i kursevi nemačkog jezika A1–B2.",
    },
    mechanic: {
      title: "Mehaničar za izradu i popravku hirurških instrumenata | Akademija MASOK",
      description: "Dualna obuka od 9 meseci za mehaničara hirurških instrumenata u Leskovcu, po standardu kvalifikacije iz 2026, uz intenzivni nemački i AHK sertifikat.",
    },
    assistant: {
      title: "Medicinski administrativni asistent (MFA) | Akademija MASOK",
      description: "Postanite medicinski administrativni asistent (MFA – Medizinische Fachangestellte) za 9 meseci: dualni model, intenzivni nemački i međunarodno priznat AHK sertifikat.",
    },
    technician: {
      title: "Sterilizacioni tehničar | Akademija MASOK",
      description: "Obuka za sterilizacionog tehničara prema evropskim procesnim standardima (AEMP). Program u pripremi – prijavite interesovanje.",
    },
    german: {
      title: "Kursevi nemačkog jezika A1–B2 u Leskovcu | Akademija MASOK",
      description: "Kursevi nemačkog jezika A1–B2 u Leskovcu u malim grupama: opšti i stručni nemački, priprema za ispite (Goethe, telc, ÖSD) i kursevi za firme.",
    },
    applicants: {
      title: "Za kandidate – kako se prijaviti | Akademija MASOK",
      description: "Kako se prijaviti u Akademiju MASOK: pregled programa, tri koraka prijave, šta polaznici dobijaju i odgovori na česta pitanja.",
    },
    partners: en.meta.partners,
    news: {
      title: "Vesti | Akademija MASOK",
      description: "Vesti i novosti iz Akademije MASOK u Leskovcu: upis, programi, kursevi nemačkog jezika i događaji.",
    },
    contact: {
      title: "Kontakt | Akademija MASOK",
      description: "Kontaktirajte Akademiju MASOK, Stojana Ljubića 9, Leskovac. Pozovite nas, pišite nam ili pošaljite poruku i prijavu onlajn.",
    },
    privacy: {
      title: "Politika privatnosti | Akademija MASOK",
      description: "Kako Akademija MASOK prikuplja, koristi i štiti podatke o ličnosti poslate preko ovog sajta.",
    },
    thanks: {
      title: "Hvala | Akademija MASOK",
      description: "Vaša poruka je poslata.",
    },
  },

  home: {
    title: "Akademija MASOK",
    subtitle: "Vaš put do međunarodno priznate kvalifikacije",
    lines: [
      "Stručno obrazovanje po nemačkim standardima kvaliteta.",
      "Učite u Leskovcu – radite po svetskim standardima.",
    ],
    primaryButton: { label: "Pogledaj programe", page: "courses" },
    secondaryButton: { label: "Prijavi se", page: "applicants" },
    whyTitle: "Zašto Akademija MASOK?",
    why: [
      { icon: "bookmark", text: "Nastava po nemačkim standardima kvaliteta" },
      { icon: "star", text: "Međunarodno priznat AHK sertifikat" },
      { icon: "article", text: "Dualni model – teorija i praksa" },
      { icon: "language", text: "Intenzivno učenje nemačkog jezika u okviru programa" },
      { icon: "plusbox", text: "Praktična obuka i stručne posete kod nemačkih kliničkih partnera" },
      { icon: "handshake", text: "Direktna veza sa poslodavcima i podrška pri zapošljavanju" },
    ],
    coursesTitle: "Programi",
    newsTitle: "Najnovije vesti",
    allNews: "Sve vesti",
    highlightTitle: "Upis prve generacije",
    highlightText: "Nastava počinje u {intake} Prijave su otvorene.",
    highlightButton: "Kako se prijaviti",
  },

  courseCards: {
    mechanic: {
      icon: "tools", title: "Mehaničar za izradu i popravku hirurških instrumenata",
      text: "Stručnjak za precizne instrumente visoke vrednosti, bez kojih ne može nijedna operaciona sala.",
    },
    assistant: {
      icon: "stethoscope", title: "Medicinski administrativni asistent (MFA)",
      text: "Stručnjak koji povezuje kliničku medicinu i zdravstvenu administraciju – Medizinische Fachangestellte.",
    },
    technician: {
      icon: "spray", title: "Sterilizacioni tehničar",
      text: "Stručnjak za pripremu i obradu sterilnog materijala prema evropskim procesnim standardima (AEMP).",
    },
    german: {
      icon: "globe", title: "Kursevi nemačkog jezika",
      text: "Otvoreni za sve. Male grupe, iskusni predavači i nemački standardi kvaliteta.",
    },
  },

  coursesPage: {
    title: "Programi",
    heading: "Naši programi",
    sidebarLabel: "Svi programi",
  },

  courses: {
    mechanic: {
      title: "Mehaničar za izradu i popravku hirurških instrumenata",
      form: "course",
      image: "mechanic-main",
      gallery: ["mechanic-2", "mechanic-3"],
      intro: [
        "Mehaničar za izradu i popravku hirurških instrumenata je stručnjak za precizne proizvode visoke vrednosti, bez kojih ne može nijedna operaciona sala. Program osposobljava polaznike za izradu, održavanje i stručnu popravku hirurških instrumenata prema nemačkim standardima kvaliteta.",
      ],
      blocks: [
        {
          title: "Ključne informacije",
          items: [
            ["Status upisa", "Otvoren – prva generacija počinje u {intake}"],
            ["Trajanje", "9 meseci"],
            ["Format", "Dualni model – teorijska nastava u Akademiji MASOK i praktična obuka u savremeno opremljenom trening centru"],
            ["Uslov za upis", "SSS tehničkog usmerenja"],
            ["Standard kvalifikacije", "Novousvojeni (2026.) standard kvalifikacije „Mehaničar za izradu i popravku hirurških instrumenata”"],
            ["Jezička obuka", "Intenzivna obuka iz nemačkog jezika u okviru programa"],
            ["Sertifikat", "Nacionalno priznata kvalifikacija + međunarodni AHK sertifikat"],
            ["Radno mesto i perspektiva", "Deficitarno zanimanje u Evropi – velika tražnja za stručnjacima, uz mogućnost zapošljavanja u proizvodno-servisnim kapacitetima u Srbiji"],
          ],
        },
      ],
      whyTitle: "Zašto ovaj program?",
      why: "Hirurški instrumenti su precizni proizvodi visoke vrednosti, a kvalifikovanih stručnjaka za njihovu izradu i popravku u Evropi je sve manje. Ovaj program polaznicima otvara sigurnu profesionalnu perspektivu u zanimanju budućnosti – uz znanja i sertifikat priznate na međunarodnom nivou.",
    },
    assistant: {
      title: "Medicinski administrativni asistent (MFA)",
      subtitle: "MFA – Medizinische Fachangestellte",
      form: "mfa",
      image: "mfa-main",
      gallery: ["mfa-2", "mfa-3"],
      intro: [
        "Medicinski administrativni asistent (MFA) je stručnjak koji povezuje kliničku medicinu i zdravstvenu administraciju. Preuzima administrativne, organizacione i koordinacione zadatke, čime se lekari i medicinske sestre vraćaju svom pravom poslu: brizi o pacijentu. Model je etabliran u Nemačkoj, Austriji i Švajcarskoj.",
      ],
      blocks: [
        {
          title: "Ključne informacije",
          items: [
            ["Status upisa", "Otvoren – prva generacija počinje u {intake}"],
            ["Trajanje", "9 meseci"],
            ["Format", "Dualni model – teorijska nastava u Akademiji MASOK i praksa u zdravstvenoj ustanovi"],
            ["Uslov za upis", "SSS/VŠS medicinskog smera"],
            ["Standard kvalifikacije", "Prema EU modelu MFA (Nemačka, Austrija, Švajcarska)"],
            ["Jezička obuka", "Intenzivna obuka iz nemačkog jezika u okviru programa"],
            ["Sertifikat", "Međunarodno priznat AHK sertifikat"],
            ["Radno mesto i perspektiva", "Zdravstvene ustanove"],
          ],
        },
      ],
      whyTitle: "Zašto ovaj program?",
      why: "MFA je zanimanje budućnosti u zdravstvu – rasterećuje ceo tim, podiže kapacitet ustanove i pruža polaznicima jasnu karijernu perspektivu po modelu etabliranom u Nemačkoj, Austriji i Švajcarskoj.",
    },
    technician: {
      title: "Sterilizacioni tehničar",
      form: "course",
      image: "sterilization-main",
      gallery: ["sterilization-2", "sterilization-3"],
      intro: [
        "Sterilizacioni tehničar je stručnjak za pripremu i obradu sterilnog materijala prema evropskim procesnim standardima (AEMP), sa fokusom na dokumentaciju i obezbeđenje kvaliteta. Sterilizacija je jedna od najvažnijih karika bezbednosti pacijenata u svakoj zdravstvenoj ustanovi.",
      ],
      blocks: [
        {
          title: "Ključne informacije",
          items: [
            ["Status upisa", "Program u pripremi – možete prijaviti interesovanje"],
            ["Trajanje", "9 meseci"],
            ["Format", "Dualni model – teorija i praksa"],
            ["Uslov za upis", "Biće objavljeno"],
            ["Standard kvalifikacije", "Evropski procesni standardi (AEMP)"],
            ["Jezička obuka", "Intenzivna obuka iz nemačkog jezika u okviru programa"],
            ["Sertifikat", "Biće objavljeno"],
            ["Radno mesto i perspektiva", "Zdravstvene ustanove – službe za sterilizaciju"],
          ],
        },
      ],
      whyTitle: "Zašto ovaj program?",
      why: "Sterilizacija je jedan od najvažnijih koraka u sprečavanju infekcija i bezbednom pružanju zdravstvene zaštite. Program je namenjen svima koji žele da steknu praktično i stručno znanje za rad u sterilizaciji, uz razumevanje celokupnog procesa – od prijema i pripreme instrumenata, preko čišćenja, pakovanja i sterilizacije, do kontrole kvaliteta, pravilnog skladištenja i dokumentovanja procesa.",
    },
    german: {
      title: "Kursevi nemačkog jezika",
      form: "course",
      image: "german-course",
      gallery: [],
      intro: [
        "Kursevi nemačkog jezika otvoreni su za sve zainteresovane. Nastava se izvodi po nemačkim standardima kvaliteta, u malim grupama, sa iskusnim predavačima.",
      ],
      blocks: [
        {
          title: "Nivoi",
          items: [
            "Nivoi A1–B2 prema Zajedničkom evropskom okviru za jezike (CEFR)",
            "Besplatno ulazno testiranje za raspoređivanje u odgovarajuću grupu",
          ],
        },
        {
          title: "Moduli",
          items: [
            "Opšti nemački",
            "Stručni nemački za medicinu i tehniku",
            "Priprema za međunarodne ispite (Goethe, telc, ÖSD)",
            "Kursevi za firme",
          ],
        },
        {
          title: "Ključne informacije",
          items: [
            ["Upis", "Uskoro"],
            ["Trajanje ciklusa", "Uskoro"],
            ["Cena", "Na upit"],
            ["Sertifikat", "Sertifikat Akademije o završenom nivou"],
          ],
        },
      ],
      whyTitle: "",
      why: "",
    },
  },

  about: {
    title: "O nama",
    whoTitle: "Ko smo mi",
    paragraphs: [
      "Međunarodna akademija za stručno obrazovanje kadrova (MASOK) u Leskovcu je obrazovni centar za razvoj i realizaciju savremenih programa stručnog obrazovanja i usavršavanja, u skladu sa evropskim i međunarodnim standardima. Akademija povezuje savremeni obrazovni program, praktičnu obuku i međunarodnu sertifikaciju sa konkretnim mogućnostima zapošljavanja u zdravstvenom sektoru i pratećoj industriji.",
      "Naša misija je razvoj kompetentnog stručnog kadra prema međunarodnim standardima, koji direktno odgovara na potrebe zdravstvenog sistema i prateće industrije, uz unapređenje kvaliteta zdravstvenih usluga u Srbiji.",
      "Nastava za prvu generaciju polaznika Akademije MASOK počinje u {intake}",
    ],
    contactButton: "Kontaktirajte nas",
    founderTitle: "Naš osnivač",
    founderText: "Osnivač Akademije je SBP Management, kompanija sa sedištem u Berlinu specijalizovana za projekte u oblasti zdravstva i stručnog obrazovanja, sa dugogodišnjim iskustvom u saradnji sa vodećim nemačkim kliničkim grupama i univerzitetskim klinikama.",
    moreInfo: "Više informacija na",
    teamTitle: "Naš tim",
  },

  applicants: {
    title: "Za kandidate",
    overviewTitle: "Kratak pregled programa",
    overview: {
      mechanic: [
        "Početak u {intake}", "Trajanje: 9 meseci", "Uslov: SSS tehničkog usmerenja",
        "Po novousvojenom (2026.) standardu kvalifikacije", "AHK sertifikat",
      ],
      assistant: [
        "Početak u {intake}", "Trajanje: 9 meseci", "Uslov: SSS/VŠS medicinskog smera",
        "Dualni model", "AHK sertifikat",
      ],
      technician: ["Program u pripremi – prijavite interesovanje"],
      german: [
        "Nivoi A1–B2", "Besplatno ulazno testiranje",
        "Opšti nemački, stručni nemački za medicinu i tehniku, priprema za ispite (Goethe, telc, ÖSD), kursevi za firme",
        "Cena na upit", "Sertifikat Akademije o završenom nivou",
      ],
    },
    stepsTitle: "Koraci za prijavu",
    steps: [
      "Onlajn prijava sa osnovnim podacima i biografijom",
      "Onlajn razgovor sa timom Akademije",
      "Finalna selekcija i upis",
    ],
    applyButton: "Prijavi se",
    getTitle: "Šta polaznici dobijaju?",
    get: [
      "Nastavu po nemačkim standardima kvaliteta",
      "Intenzivan kurs nemačkog jezika",
      "Praktičnu obuku po dualnom modelu",
      "Novčanu naknadu",
      "Stručne posete i hospitacije kod nemačkih kliničkih partnera",
      "Međunarodno priznat AHK sertifikat",
      "Podršku pri zapošljavanju",
    ],
    faqTitle: "Česta pitanja",
    faq: [
      ["Da li moram da znam nemački pre upisa?", "Ne. Učenje nemačkog jezika je sastavni deo svakog programa."],
      ["Da li je sertifikat priznat u inostranstvu?", "Da, AHK sertifikat je međunarodno priznat."],
      ["Da li postoji praksa?", "Da. Svi programi se realizuju po dualnom modelu, a predviđene su i stručne posete i hospitacije kod nemačkih partnera."],
      ["Kako se prijavljujem?", "Putem onlajn formulara na ovom sajtu – izaberite program i pošaljite nam svoje podatke i biografiju."],
      ["Da li mogu da pohađam samo kurs nemačkog?", "Da. Kursevi nemačkog jezika otvoreni su za sve, nezavisno od upisa na obrazovne programe Akademije."],
      ["Da li se završen kurs nemačkog priznaje pri upisu na program?", "Da. Postignuti nivo se priznaje i uzima u obzir prilikom jezičke obuke u okviru programa."],
    ],
    formTitle: "Prijavi se",
    formLead: "Izaberite program i pošaljite nam svoje podatke – javićemo vam se u vezi sa sledećim koracima.",
  },

  contact: {
    title: "Kontakt",
    heading: "Za sve dodatne informacije, kontaktirajte nas!",
    addressTitle: "Adresa",
    formTitle: "Pošaljite nam poruku",
  },

  // Stranica za partnere postoji samo na engleskom.
  partners: en.partners,

  newsPage: {
    title: "Vesti",
    heading: "Vesti i novosti iz Akademije",
    all: "Sve",
    empty: "Još nema vesti – svratite uskoro.",
    back: "Nazad na sve vesti",
    moreTitle: "Još vesti",
    filterLabel: "Filtriraj vesti po kategoriji",
  },

  forms: {
    name: "Ime i prezime",
    email: "Email",
    phone: "Broj telefona",
    company: "Kompanija",
    course: "Program",
    courseOptions: {
      mechanic: "Mehaničar za izradu i popravku hirurških instrumenata",
      assistant: "Medicinski administrativni asistent (MFA)",
      technician: "Sterilizacioni tehničar",
      german: "Kursevi nemačkog jezika",
    },
    message: "Poruka",
    cv: "Biografija (CV)",
    europass: "Europass CV",
    attachment: "Prilog",
    optional: "nije obavezno",
    fileHint: "PDF, Word ili slika, do 5 MB",
    chooseFile: "Izaberite fajl",
    noFile: "Fajl nije izabran",
    removeFile: "Ukloni fajl",
    courseFormTitle: "Prijavite se ovde",
    courseFormLead: "i javićemo vam se!",
    mfaTitle: "Kako se prijaviti",
    mfaSteps: [
      { text: "Popunite prijavni formular", button: "Prijavni formular", link: "applicationForm" },
      { text: "Preuzmite Europass CV obrazac i popunite ga", button: "Preuzmite CV obrazac", link: "europass" },
      { text: "Priložite popunjen CV i pošaljite ga ispod" },
    ],
    interest: "Šta vas zanima?",
    interestOptions: {
      facilities: "Prostor za obuke / sastanke",
      stay: "Obuka i smeštaj",
      team: "Timski / korporativni program",
      entrySerbia: "Ulazak na tržište Srbije",
      entryGermany: "Ulazak na tržište Nemačke",
      consulting: "Poslovno savetovanje",
      other: "Ostalo",
    },
    participants: "Broj učesnika",
    date: "Željeni datum",
    project: "Ukratko opišite vaš projekat",
    consent: "Saglasan/saglasna sam da Akademija MASOK obrađuje podatke koje šaljem radi obrade mog zahteva, kako je opisano u",
    consentLink: "politici privatnosti",
    submit: "Pošalji",
    sending: "Slanje…",
    required: "Molimo popunite ovo polje.",
    invalidEmail: "Unesite ispravnu email adresu.",
    chooseOne: "Izaberite bar jednu opciju.",
    chooseCourse: "Izaberite program.",
    consentRequired: "Da biste nastavili, prihvatite politiku privatnosti.",
    fileTooBig: "Fajl je prevelik. Najveća dozvoljena veličina je 5 MB.",
    fileType: "Priložite PDF, Word dokument ili sliku.",
    successTitle: "Hvala!",
    success: "Vaša poruka je poslata. Javićemo vam se u najkraćem roku.",
    error: "Nažalost, poruka nije poslata. Pokušajte ponovo ili nam pišite na",
  },

  thanks: {
    title: "Hvala!",
    text: "Vaša poruka je poslata. Javićemo vam se u najkraćem roku.",
    back: "Nazad na početnu",
  },

  footer: {
    contactTitle: "Kontaktirajte nas",
    hoursTitle: "Radno vreme",
    linksTitle: "Brzi linkovi",
    privacy: "Politika privatnosti",
    rights: "Sva prava zadržana.",
    followUs: "Pratite nas",
  },

  notFound: {
    title: "Stranica nije pronađena",
    text: "Stranica koju tražite ne postoji ili je premeštena.",
    back: "Idi na početnu",
  },
};

export default sr;
