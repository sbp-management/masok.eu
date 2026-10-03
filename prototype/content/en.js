/* =====================================================================
   MASOK prototype — ENGLISH content
   Edit any text below and reload the page. Nothing here touches masok.eu.
   Image names refer to files on the live site (see IMG in js/app.js),
   or you can use a full URL / a local path like "images/my-photo.jpg".
   ===================================================================== */
window.SITE_CONTENT = window.SITE_CONTENT || {};
window.SITE_CONTENT.en = {
  code: "EN",

  // URL of every page in this language (the part after "#")
  routes: {
    home: "/en/",
    about: "/en/about-us",
    courses: "/en/courses/",
    mechanic: "/en/courses/mechanic",
    assistant: "/en/courses/assistant",
    technician: "/en/courses/technician",
    german: "/en/courses/german-language-courses",
    applicants: "/en/for-applicants",
    partners: "/en/for-german-partners",
    news: "/en/news",
    contact: "/en/contact"
  },

  // Browser-tab titles
  titles: {
    home: "EN | MASOK",
    about: "About us | MASOK",
    courses: "Courses | MASOK",
    mechanic: "Surgical instrument mechanic | MASOK",
    assistant: "Medical Administrative Assistant | MASOK",
    technician: "Sterilization Technician | MASOK",
    german: "German Language Courses | MASOK",
    applicants: "For Applicants | MASOK",
    partners: "For German Partners | MASOK",
    news: "News | MASOK",
    contact: "Contact | MASOK"
  },

  // Main menu. "children" makes a dropdown.
  nav: [
    { label: "Home", page: "home" },
    { label: "About us", page: "about" },
    { label: "Courses", page: "courses", children: [
      { label: "Surgical instrument mechanic", page: "mechanic" },
      { label: "Medical Administrative Assistant", page: "assistant" },
      { label: "Sterilization Technician", page: "technician" },
      { label: "German Language Courses", page: "german" }
    ]},
    { label: "For Applicants", page: "applicants" },
    { label: "For German Partners", page: "partners" },
    { label: "News", page: "news" },
    { label: "Contact", page: "contact" }
  ],

  home: {
    heroImage: "Instrumenti%202.jpg",
    title: "MASOK Academy",
    subtitle: "Your path to an internationally recognized qualification",
    lines: [
      "Vocational education according to German quality standards.",
      "Study in Leskovac - work to global standards."
    ],
    primaryButton: { label: "View courses", page: "courses" },
    secondaryButton: { label: "Sign up", page: "contact" },
    whyTitle: "Why MASOK Academy?",
    why: [
      { icon: "bookmark", text: "Teaching according to German quality standards" },
      { icon: "star", text: "Internationally recognized AHK certificate" },
      { icon: "article", text: "Dual model - theory and practice" },
      { icon: "language", text: "Intensive German language learning as part of the program" },
      { icon: "plusbox", text: "Practical training and professional visits to German clinical partners" },
      { icon: "handshake", text: "Direct connection with employers and employment support" }
    ],
    coursesTitle: "Courses",
    highlightTitle: "Highlighted information",
    highlightText: "First Generation Enrollment - October 2026"
  },

  // Course cards (home page + Courses page)
  courseCards: [
    { page: "mechanic", icon: "tools", title: "Surgical instrument mechanic",
      text: "A surgical instrument mechanic is a specialist in high-value precision products, which are indispensable in any operating room." },
    { page: "assistant", icon: "stethoscope", title: "Medical Administrative Assistant",
      text: "A Medical Administrative Assistant, or MFA - Medizinische Fachangestellte, is a professional who bridges clinical medicine and healthcare administration." },
    { page: "technician", icon: "spray", title: "Sterilization Technician",
      text: "A sterilization technician is an expert in the preparation and processing of sterile material according to European processing standards (AEMP)." },
    { page: "german", icon: "globe", title: "German language courses",
      text: "German language courses are open to anyone interested. Instruction is conducted according to German quality standards, in small groups, with experienced instructors." }
  ],
  viewCourse: "View course",

  coursesPage: {
    title: "Courses",
    breadcrumb: ["Home", "Courses"],
    heading: "Our courses"
  },

  // Sidebar on each course page
  courseSidebar: [
    { label: "Surgical instrument mechanic", page: "mechanic" },
    { label: "Medical administrative assistant", page: "assistant" },
    { label: "Sterilization technician", page: "technician" },
    { label: "German language courses", page: "german" }
  ],

  // Individual course pages
  // form: "apply" = standard sidebar form, "mfa" = 3-step Europass form
  coursePages: {
    mechanic: {
      crumb: "Surgical instrument mechanic",
      form: "apply",
      image: "repair.jpg",
      title: "Surgical Instrument Mechanic",
      intro: ["A surgical instrument technician is a specialist in high-value precision products that are essential in every operating room. The program trains students in the manufacture, maintenance, and professional repair of surgical instruments in accordance with German quality standards."],
      blocks: [
        { title: "Key Information:", items: [
          ["Enrollment Status", "Open — enrollment for the first cohort begins in September 2026."],
          ["Duration", "9 months"],
          ["Format", "Dual model — theoretical instruction at the MASOK Academy and practical training at a state-of-the-art training center"],
          ["Enrollment Requirements", "High school diploma in a technical field"],
          ["Qualification standard", "Training according to the newly adopted (2026) qualification standard “Surgical Instrument Technician”"],
          ["Language of instruction", "Intensive German language training as part of the course"],
          ["Certificate", "Nationally recognized qualification + international AHK certificate"],
          ["Job opportunities and prospects", "Shortage of qualified professionals in Europe—high demand for specialists, with employment opportunities in manufacturing and service facilities in Serbia"]
        ]}
      ],
      whyTitle: "Why this course?",
      why: "Surgical instruments are high-value, precision products, yet there are fewer and fewer qualified specialists in Europe capable of manufacturing and repairing them. This program offers students secure career prospects in a field with a promising future—along with knowledge and a certificate recognized internationally.",
      gallery: ["Repair_06.jpg", "repair%201.jpg"]
    },
    assistant: {
      crumb: "Medical administrative assistant",
      form: "mfa",
      image: "nurse.webp",
      title: "Medical administrative assistant (MFA — Medizinische Fachangestellte)",
      intro: ["A Medical Administrative Assistant (MFA) is a professional who bridges clinical medicine and healthcare administration. They take on administrative, organizational, and coordination tasks, which allows doctors and nurses to return to their core work: patient care. The model is established in Germany, Austria, and Switzerland."],
      blocks: [
        { title: "Key information:", items: [
          ["Enrollment Status", "Open — Fall 2026."],
          ["Duration", "9 months"],
          ["Format", "Dual model — theoretical instruction at the MASOK Academy and practical training in a healthcare facility"],
          ["Enrollment Requirements", "High school diploma in medical field"],
          ["Qualification standard", "Based on the EU MFA model (Germany, Austria, Switzerland)"],
          ["Language of instruction", "Intensive German language training as part of the course"],
          ["Certificate", "Nationally recognized qualification + international AHK certificate"],
          ["Job opportunities and prospects", "Healthcare institutions"]
        ]}
      ],
      whyTitle: "Why this course?",
      why: "The MFA is the profession of the future in healthcare—it relieves the entire team, increases an institution's capacity, and provides participants with a clear career path, following a model established in Germany, Austria, and Switzerland.",
      gallery: ["nurse%201.jpg", "nurse%202.webp"]
    },
    technician: {
      crumb: "Sterilization technician",
      form: "apply",
      image: "sterili%201.jpg",
      title: "Sterilization Technician",
      intro: ["A sterilization technician is an expert in preparing and processing sterile materials according to European processing standards (AEMP), with a focus on documentation and quality assurance. Sterilization is one of the most important links in patient safety in any healthcare facility."],
      blocks: [
        { title: "Key information:", items: [
          ["Enrollment Status", "Course in preparation — possible expression of interest"],
          ["Duration", "9 months"],
          ["Format", "Dual model — theoretical instruction at the MASOK Academy and practical training in a healthcare facility"],
          ["Enrollment Requirements", "Soon"],
          ["Qualification standard", "According to European processing standards (AEMP)"],
          ["Language of instruction", "Intensive German language training as part of the course"],
          ["Certificate", "Soon"],
          ["Job opportunities and prospects", "Healthcare institutions"]
        ]}
      ],
      whyTitle: "Why this course?",
      why: "Sterilization is one of the most important steps in preventing infections and safely providing healthcare. This program is intended for anyone who wants to gain practical and professional knowledge for working in sterilization, with an understanding of the entire process — from the receipt and preparation of instruments, through cleaning, packaging, and sterilization, to quality control, proper storage, and documentation of the process.",
      gallery: ["sterili%203.webp", "sterili%204.jpg"]
    },
    german: {
      crumb: "German Language Courses",
      form: "apply",
      image: "Nemacki%202.jpg",
      title: "German Language Courses",
      intro: ["German language courses are open to anyone interested. Instruction is conducted according to German quality standards, in small groups, with experienced instructors."],
      blocks: [
        { title: "Levels:", items: [
          "Levels A1–B2 according to the Common European Framework of Reference for Languages (CEFR)",
          "Free placement test to determine the appropriate group."
        ]},
        { title: "Modules:", items: [
          "General German",
          "Professional German for Medicine and Technology",
          "Preparation for International Exams (Goethe, telc, ÖSD)",
          "Corporate Courses"
        ]},
        { title: "Key information:", items: [
          ["Enrollment status", "soon"],
          ["Duration", "soon"],
          ["Number of lessons", "soon"],
          ["Price", "on request"],
          ["Certificate", "Academy certificate of the completed level"]
        ]}
      ],
      whyTitle: "",
      why: "",
      gallery: []
    }
  },

  about: {
    title: "About us",
    breadcrumb: ["Home", "About us"],
    whoTitle: "Who are we?",
    paragraphs: [
      "The International Academy for Vocational Education and Training (MASOK) in Leskovac is an educational center for the development and implementation of modern professional education and training programs, in accordance with European and international standards. The Academy combines a modern educational program, practical training, and international certification with concrete employment opportunities in the healthcare sector and related industries.",
      "Our mission is to develop competent professional personnel to international standards, who directly respond to the needs of the healthcare system and its supporting industries, while improving the quality of healthcare services in Serbia.",
      "The MASOK Academy will begin offering courses in September 2026, with the enrollment of its first class"
    ],
    contactButton: "Contact us",
    founderText: "The Academy was founded by SBP Management, a Berlin-based company specializing in projects in healthcare and professional education, with many years of experience collaborating with leading German clinical groups and university clinics.",
    moreInfo: "More information at:",
    moreInfoLink: "https://www.sbp-management.com/",
    moreInfoLabel: "www.sbp-management.com",
    teamTitle: "Our team",
    team: [
      { name: "Sabina Banda", role: "Founder", photo: "IMG_3729.JPG", bio: "" },
      { name: "Nikola Banda", role: "Owner and Founder", photo: "IMG_3913.JPG",
        bio: "Born in Berlin 1997. He completed his secondary education and studied health economics. He is a certified health economist and the owner and founder of the MASOK academy, established in March 2026." },
      { name: "Milivoje Đorđević", role: "Director", backRole: "Direktor", photo: "Cale.jpg",
        bio: "A long-time director of a technical school, with extensive experience in adult education, the dual system, and the development of qualification standards." }
    ]
  },

  applicants: {
    title: "For applicants",
    breadcrumb: ["Home", "For applicants"],
    overviewTitle: "A brief overview of the courses",
    overview: [
      { title: "Surgical instrument mechanic", image: "repair.jpg", items: [
        "Enrollment in Fall 2026.", "Duration 9 months", "High school diploma in a technical field",
        "Training according to the newly adopted (2026) qualification standard", "AHK certificate"] },
      { title: "Medical administrative assistant", image: "nurse.webp", items: [
        "Enrollment in Fall 2026.", "Duration 9 months", "High school diploma in a medical field", "Dual model", "AHK certificate"] },
      { title: "Sterilization technician", image: "sterili%201.jpg", items: [
        "Course in preparation — possible expression of interest"] },
      { title: "German language courses", image: "Nemacki%202.jpg", items: [
        "Levels A1 — B2", "Free placement test to determine the appropriate group",
        "Modules: general German, professional German for medicine and technology, preparation for international exams (Goethe, telc, ÖSD), Corporate Courses",
        "Price on request", "Academy certificate of the completed level"] }
    ],
    stepsTitle: "Steps to apply",
    steps: [
      "Online application with basic information and a biography",
      "Online Interview with the Academy Team",
      "Final Selection and Enrollment"
    ],
    applyButton: { label: "Apply", page: "contact" },
    getTitle: "What do the applicants get?",
    get: [
      "Instruction according to German quality standards",
      "Intensive German language course",
      "Practical training in a dual model",
      "Monetary compensation",
      "Professional visits and observations with German clinical partners",
      "AHK certificate recognized internationally",
      "Employment assistance"
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do I have to know German before enrolling?", "No, language learning is an integral part of the program."],
      ["Is the certificate recognized internationally?", "Yes, the AHK certificate is internationally recognized."],
      ["Is there any practical training?", "Yes, the programs are implemented according to the dual model, and professional visits and classroom observations at German partner institutions are also planned."],
      ["How do i apply?", "Via the online form on the website."],
      ["Can I attend only a language course?", "Yes, our German language courses are open to everyone, regardless of enrollment in the Academy's educational programs."],
      ["Is a completed course recognized when enrolling in a program?", "Yes, the achieved level is recognized and taken into account in the language training within the program."]
    ]
  },

  contact: {
    title: "Contact",
    breadcrumb: ["Home", "Contact"],
    heading: ["For any additional information,", "please contact us!"],
    people: [
      { name: "Nikola Banda", role: "Owner and Founder", email: "n.banda@masok.eu", phone: "+381 60 6868224", photo: "IMG_3913.JPG" },
      { name: "Milivoje Đorđević", role: "Director", email: "m.djordjevic@masok.eu", phone: "+381 60 6868225", photo: "Cale.jpg" }
    ],
    phone: "+381606868225",
    email: "n.banda@masok.eu",
    address: ["Akademija MASOK", "Stojana Ljubića 9", "16000 Leskovac", "Serbia"]
  },

  // Only exists in English on the live site
  partners: {
    heroImage: "pexels-vlada-karpovich-7433837.jpg",
    title: "MASOK Academy",
    subtitle: "Your partner for Training, Business and Market Entry in Serbia",
    lines: [
      "MASOK Academy in Leskovac provides German companies with a reliable base for training, workshops, strategy meetings and corporate programs in Serbia.",
      "Together with our experienced network in Serbia and Germany, we also support companies with market analysis, business development, market entry and operational implementation between the two countries.",
      "One point of contact. One tailored offer. Billing in euros."
    ],
    buttons: ["Request an Offer", "Talk to a Consultant"],
    stats: [
      { icon: "plane", title: "Arrival", lines: ["Niš Airport - 55 km", "Approx. 45 min"] },
      { icon: "groups", title: "Capacity", lines: ["Up to 40 participants", "Flexible seating"] },
      { icon: "chat", title: "Support", lines: ["German, English", "Serbian on site"] },
      { icon: "network", title: "Network", lines: ["AHK Serbia", "Premium member"] }
    ],
    servicesTitle: "Our Services",
    services: [
      { title: "Meetings, Training & Corporate program", image: "pexels-pavel-danilyuk-8761328.jpg", target: "meetings",
        text: "Facilities, accommodation, transfers, catering, program organization and on-site support for workshops, training programs, management meetings and team events." },
      { title: "Serbia–Germany Business Consulting", image: "pexels-ketut-subiyanto-4963359.jpg", target: "consulting",
        text: "Consultant analysis, market evaluation, market-entry support and operational, logistical and organizational assistance for business activities between Serbia and Germany." }
    ],
    learnMore: "Learn more",
    meetingsTitle: "Meetings, Training & Corporate program",
    meetingsText: [
      "MASOK Academy is a private adult education institution in Leskovac, developed according to German training and quality standards and in close cooperation with AHK Serbia. Our facilities are also available to external companies for training, workshops, management retreats and team events.",
      "Whether you are planning a one-day workshop, a multi-day training program, a management meeting or a team event, MASOK can organize the required infrastructure and accompanying services in Southern Serbia.",
      "Our facilities accommodate groups of up to approximately 40 participants and can be configured for different training and workshop formats. Depending on your requirements, we can organize individual services or a complete package."
    ],
    packages: [
      { tag: "PACKAGE 01", title: "Room & Training Facilities", lead: "For companies that organize travel and accommodation independently",
        items: ["Seminar and training rooms, bookable by the day or as a block", "Projector, screen, whiteboards and flipcharts", "Wi-Fi and power at workstations", "Breakout rooms for smaller working groups", "Technical training area where required", "Coffee breaks and lunch/catering available on request"],
        price: "Price: On request/ Tailored quotation" },
      { tag: "PACKAGE 02", title: "Training & Stay", lead: "For multi-day programs and groups travelling to Serbia.",
        items: ["All services from Package 01", "Accommodation with breakfast in selected partner hotels", "Airport transfer from Niš, Belgrade or another agreed location", "Full board / regional cuisine according to the agreed program", "Local transportation where required", "Interpretation and translation support", "Evening program on request"],
        price: "Price: On request/ Tailored quotation" },
      { tag: "PACKAGE 03", title: "Team & Customized program", lead: "For strategy meetings, team building and individually designed corporate programs.",
        items: ["All services from Package 02", "German- or English-speaking facilitation and program planning", "Team-building activities indoors and outdoors", "Workshops and moderated sessions", "Excursions and regional programs, e.g. Vlasina Lake, Niš Fortress and regional wineries", "Photo and video documentation on request"],
        price: "Price: On request/ Tailored quotation" }
    ],
    extras: [
      { title: "FACILITIES", items: ["Seminar rooms with flexible seating: U-shape, rows or group islands", "Projector, screen, whiteboards and flipcharts", "Technical training area", "Separate rooms for small-group work", "Break area with coffee and beverage service", "Parking, step-free access, printing and copying"] },
      { title: "ADITIONAL SERVICES", items: ["Airport transfers: Niš, Belgrade, Skopje", "German–Serbian interpreting and translation", "Catering from coffee breaks to dinner", "Hotel booking through partner hotels", "Excursions, evening programs, photo and video documentation"] }
    ],
    consultingTitle: ["Business & Market Entry Consulting", "Serbia – Germany"],
    consultingText: [
      "Planning business activity in Serbia or Germany?",
      "MASOK offers companies access to experienced consultants who support business activities between the Serbian and German markets.",
      "Before implementation begins, our consultant can analyse your project, evaluate opportunities and potential challenges and provide an independent assessment of the most suitable approach. Our support can range from an initial expert assessment to continuous local assistance throughout the entire project."
    ],
    consultingSteps: [
      ["Expert Assesment", "Initial analysis of the company, project, objectives and planned market activity."],
      ["Market & Feasibility Evaluation", "Assessment of market potential, relevant requirements, opportunities, risks and practical feasibility."],
      ["Market Entry & Partner Strategy", "Definition of an appropriate entry approach and identification of potential partners, contacts and service providers."],
      ["Implementation & Local Support", "Operational, logistical and organizational support during implementation, according to the agreed scope."]
    ],
    includesTitle: "Depending on project, consulting support may include:",
    includes: ["Initial business and project analysis", "Serbian or German market analysis", "Assessment of market potential and feasibility", "Market-entry strategy", "Identification of potential business partners and relevant contacts", "Evaluation of local operational requirements", "Support in establishing local structures and business processes", "Coordination with local service providers and institutions", "Logistical and organizational support", "Preparation and coordination of meetings", "Language and intercultural support", "Ongoing project coordination during implementation"],
    includesNote: "Consulting services are individually defined according to the scope and complexity of the assignment.",
    includesPrice: "Price: On request",
    whyTitle: "Why work with us?",
    why: [
      ["Local presence", "A reliable operational base in Southern Serbia"],
      ["German-Serbia expertise", "Experience and business networks on both markets"],
      ["Flexible solutions", "From a single meeting room or consulting session to complete project support"],
      ["German, English and Serbian", "Communication and on-site support across all three languages"]
    ],
    accessTitle: "Easily accessible in Southern Serbia",
    accessText: [
      "MASOK Academy is located in Leskovac, approximately 55 km from Niš Airport (around 45 minutes by road).",
      "Depending on the program, we can coordinate airport transfers, accommodation, local transportation and the complete logistics for your group.",
      "Transfers can also be organized from Belgrade, Skopje and other agreed locations."
    ],
    processTitle: "From inquiry to implementation",
    process: [
      ["Tell us what you need", "Send us your preferred dates, number of participants or a short description of your business project."],
      ["We evaluate your requirements", "Our team determines which services, facilities or consulting support are appropriate."],
      ["You receive a tailored proposal", "You receive an individual offer based on the actual scope of the project."],
      ["We coordinate implementation", "One point of contact accompanies the organization and implementation of your project."]
    ],
    formTitle: "Tell us about your project",
    formLead: "Whether you are organizing a training program in Serbia, planning a management meeting or exploring a new business opportunity between Germany and Serbia, we will help you identify the right solution."
  },

  /* ---------------- NEWS / ARTICLES ----------------
     To add an article: copy one { ... } block inside "articles", paste it
     at the top of the list and change the text.
       slug     = the article's web address (lowercase, words-with-dashes, unique).
                  Use the SAME slug in sr.js so the SR/EN switch finds the translation.
       date     = "YYYY-MM-DD" — newest articles are shown first automatically
       category = any label; the News page makes a filter button for each one
       image    = file name from the live site, "images/your-file.jpg", or a full URL
       body     = list of paragraphs. Start a line with "## " to make it a subheading.
     The homepage "Latest news" block shows the 3 newest articles.
     NOTE: the three articles below are SAMPLES written from facts already on the
     site, with placeholder dates. Edit or replace them before publishing. */
  news: {
    title: "News",
    breadcrumb: ["Home", "News"],
    heading: "News & updates from the Academy",
    latestTitle: "Latest news",
    allNews: "All news",
    readMore: "Read more",
    back: "Back to all news",
    moreTitle: "More news",
    all: "All",
    empty: "No news yet.",
    articles: [
      {
        slug: "first-generation-enrollment",
        date: "2026-09-15",
        category: "Enrollment",
        image: "Instrumenti%202.jpg",
        title: "Enrollment of the first generation starts in October 2026",
        excerpt: "MASOK Academy in Leskovac is accepting applications for its first generation of students in the Surgical Instrument Mechanic and Medical Administrative Assistant (MFA) programs.",
        body: [
          "The first generation of students will begin their training at MASOK Academy in autumn 2026. Applications are open for two programs: Surgical Instrument Mechanic and Medical Administrative Assistant (MFA — Medizinische Fachangestellte).",
          "## What the programs offer",
          "Both programs last 9 months and follow the dual model: theoretical instruction at the Academy combined with practical training. Intensive German language training is part of every program, and graduates receive an internationally recognized AHK certificate.",
          "## How to apply",
          "Applying takes three steps: an online application with your basic information and a CV, an online interview with the Academy team, and final selection and enrollment. You don't need to speak German before you enroll — language learning is part of the program."
        ]
      },
      {
        slug: "new-qualification-standard-surgical-instruments",
        date: "2026-08-28",
        category: "Programs",
        image: "repair.jpg",
        title: "A new qualification standard for surgical instrument mechanics",
        excerpt: "Our Surgical Instrument Mechanic program follows the qualification standard newly adopted in 2026 — training for a profession in high demand across Europe.",
        body: [
          "Surgical instruments are high-value precision products that every operating room depends on, yet there are fewer and fewer qualified specialists in Europe who can manufacture and repair them.",
          "MASOK Academy's program trains students in the manufacture, maintenance and professional repair of surgical instruments according to German quality standards, following the newly adopted (2026) qualification standard.",
          "## Who can apply",
          "The program is open to candidates with a high school diploma in a technical field. Practical training takes place at a state-of-the-art training center, and graduates receive a nationally recognized qualification plus an international AHK certificate."
        ]
      },
      {
        slug: "german-language-courses",
        date: "2026-07-10",
        category: "German courses",
        image: "Nemacki%202.jpg",
        title: "German language courses open to everyone",
        excerpt: "Levels A1–B2, small groups and a free placement test — and you don't need to be enrolled in an Academy program to join.",
        body: [
          "MASOK Academy's German language courses are open to anyone interested. Classes are taught according to German quality standards, in small groups, by experienced instructors.",
          "## Levels and modules",
          "Courses cover levels A1 to B2 of the Common European Framework of Reference for Languages (CEFR). A free placement test puts you in the right group. Modules include general German, professional German for medicine and technology, preparation for Goethe, telc and ÖSD exams, and courses for companies.",
          "Participants receive an Academy certificate for each completed level. Prices are available on request — contact us for the next start date."
        ]
      }
    ]
  },

  // Form labels and messages
  forms: {
    name: "Name",
    fullName: "Full Name",
    email: "Email",
    phone: "Phone number",
    phoneShort: "Phone",
    company: "Company",
    course: "Desired course",
    courseOptions: ["Surgical instrument mechanic", "Medical administrative assistant", "Sterilization technician", "German language courses"],
    contactCourseOptions: ["Surgical instrument mechanic", "Medicinal administrative assistant", "Sterilization technician", "German language courses"],
    message: "Message (optional)",
    attachCv: "Attach CV (optional)",
    attachment: "Attachment (optional)",
    attachEuropass: "Attach Europass CV",
    upload: "Click to upload",
    filesCount: "{n}/5 files",
    applyTitle: ["Apply here,", "and we will contact you!"],
    mfaTitle: ["Steps to apply,", "if you are interested!"],
    mfaSteps: [
      { text: "Fill out the application form", button: "Application form", href: "https://forms.gle/S9MTGNXb3YbH4zZQ7" },
      { text: "Download and fill out the Europass CV form", button: "Download CV", href: "https://masok.eu/onewebmedia/Europass_CV.docx" },
      { text: "Attach and send the completed CV" }
    ],
    interest: "What are you interested in?",
    interestOptions: ["Training / Meeting Facilities", "Training & Stay", "Team / Corporate Program", "Market Entry Serbia", "Market Entry Germany", "Business Consulting", "Other"],
    participants: "Number of participants (optional)",
    date: "Preferred date (optional)",
    project: "Tell us briefly about your project (optional)",
    submit: "Submit",
    captcha: "Click to verify you are human",
    captchaWorking: "Verifying…",
    captchaDone: "I am human",
    required: "This field is required.",
    invalidEmail: "Please enter a valid email address.",
    chooseOne: "Please choose at least one option.",
    captchaRequired: "Please complete the verification.",
    tooMany: "You can upload up to 5 files.",
    success: "Thank you! Your message has been sent. We will contact you soon.",
    sendAnother: "Send another message"
  },

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
    text: "We use essential cookies to make our site work. With your consent, we may also use non-essential cookies to improve user experience and analyze website traffic. By clicking “Accept,” you agree to our website's cookie use as described in our Cookie Policy. You can change your cookie settings at any time by clicking “Preferences.”",
    preferences: "Preferences",
    decline: "Decline",
    accept: "Accept",
    prefsTitle: "Cookie preferences",
    essential: "Essential (always on)",
    analytics: "Analytics",
    marketing: "Marketing",
    save: "Save preferences"
  },

  notFound: { title: "Page not found", text: "The page you are looking for does not exist.", back: "Back to home" }
};
