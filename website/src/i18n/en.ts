/**
 * ENGLISH text for every page.
 * "{intake}" is replaced automatically with the start date from src/data/site.ts.
 * News articles are NOT here — they live in src/content/news/en/.
 */
import type { Lang } from "./routes";

const en = {
  lang: "en" as Lang,
  htmlLang: "en",
  ogLocale: "en_GB",
  dateLocale: "en-GB",
  siteName: "MASOK Academy",

  ui: {
    skip: "Skip to main content",
    menu: "Menu",
    closeMenu: "Close menu",
    openSubmenu: "Show courses",
    home: "Home",
    toTop: "Back to top",
    languageLabel: "Language",
    langNames: { sr: "Srpski", en: "English" },
    readMore: "Read more",
    learnMore: "Learn more",
    viewCourse: "View course",
    mainNav: "Main menu",
    breadcrumb: "Breadcrumb",
    photoComingSoon: "Photo",
  },

  nav: [
    { label: "Home", page: "home" },
    { label: "About us", page: "about" },
    {
      label: "Courses", page: "courses",
      children: [
        { label: "Surgical instrument mechanic", page: "mechanic" },
        { label: "Medical administrative assistant (MFA)", page: "assistant" },
        { label: "Sterilization technician", page: "technician" },
        { label: "German language courses", page: "german" },
      ],
    },
    { label: "For applicants", page: "applicants" },
    { label: "For German partners", page: "partners" },
    { label: "News", page: "news" },
    { label: "Contact", page: "contact" },
  ],

  // Browser-tab titles and the description Google shows under them
  meta: {
    home: {
      title: "MASOK Academy – Vocational training to German standards in Leskovac",
      description: "MASOK Academy in Leskovac, Serbia: vocational training to German quality standards with an internationally recognized AHK certificate. Courses for surgical instrument mechanics, medical assistants and German.",
    },
    about: {
      title: "About us | MASOK Academy",
      description: "MASOK Academy in Leskovac, founded by Berlin-based SBP Management, trains professionals for healthcare and related industries to European and international standards.",
    },
    courses: {
      title: "Courses | MASOK Academy",
      description: "Our courses: surgical instrument mechanic, medical administrative assistant (MFA), sterilization technician and German language courses A1–B2.",
    },
    mechanic: {
      title: "Surgical instrument mechanic – 9-month course | MASOK Academy",
      description: "9-month dual training as a surgical instrument mechanic in Leskovac, based on the 2026 qualification standard, with intensive German and an AHK certificate.",
    },
    assistant: {
      title: "Medical administrative assistant (MFA) | MASOK Academy",
      description: "Train as a medical administrative assistant (MFA – Medizinische Fachangestellte) in 9 months: dual model, intensive German and an internationally recognized AHK certificate.",
    },
    technician: {
      title: "Sterilization technician | MASOK Academy",
      description: "Sterilization technician training according to European processing standards (AEMP). Course in preparation – register your interest now.",
    },
    german: {
      title: "German language courses A1–B2 in Leskovac | MASOK Academy",
      description: "German courses A1–B2 in Leskovac in small groups: general and professional German, exam preparation (Goethe, telc, ÖSD) and courses for companies.",
    },
    applicants: {
      title: "For applicants – how to apply | MASOK Academy",
      description: "How to apply to MASOK Academy: course overview, three application steps, what students receive and answers to frequently asked questions.",
    },
    partners: {
      title: "For German partners – training & market entry in Serbia | MASOK Academy",
      description: "Training facilities, corporate programs and Serbia–Germany business consulting in Leskovac for German companies. One point of contact, billing in euros.",
    },
    news: {
      title: "News | MASOK Academy",
      description: "News and updates from MASOK Academy in Leskovac: enrollment, courses, German language classes and events.",
    },
    contact: {
      title: "Contact | MASOK Academy",
      description: "Contact MASOK Academy at Stojana Ljubića 9, Leskovac. Call, email or send us a message or application online.",
    },
    privacy: {
      title: "Privacy policy | MASOK Academy",
      description: "How MASOK Academy collects, uses and protects personal data submitted through this website.",
    },
    thanks: {
      title: "Thank you | MASOK Academy",
      description: "Your message has been sent.",
    },
  },

  home: {
    title: "MASOK Academy",
    subtitle: "Your path to an internationally recognized qualification",
    lines: [
      "Vocational education according to German quality standards.",
      "Study in Leskovac – work to global standards.",
    ],
    primaryButton: { label: "View courses", page: "courses" },
    secondaryButton: { label: "Apply now", page: "applicants" },
    whyTitle: "Why MASOK Academy?",
    why: [
      { icon: "bookmark", text: "Teaching according to German quality standards" },
      { icon: "star", text: "Internationally recognized AHK certificate" },
      { icon: "article", text: "Dual model – theory and practice" },
      { icon: "language", text: "Intensive German language learning as part of the program" },
      { icon: "plusbox", text: "Practical training and professional visits to German clinical partners" },
      { icon: "handshake", text: "Direct connection with employers and employment support" },
    ],
    coursesTitle: "Courses",
    newsTitle: "Latest news",
    allNews: "All news",
    highlightTitle: "Enrollment of the first generation",
    highlightText: "Classes start in {intake}. Applications are open now.",
    highlightButton: "How to apply",
  },

  courseCards: {
    mechanic: {
      icon: "tools", title: "Surgical instrument mechanic",
      text: "A specialist in high-value precision instruments that every operating room depends on.",
    },
    assistant: {
      icon: "stethoscope", title: "Medical administrative assistant (MFA)",
      text: "A professional who bridges clinical medicine and healthcare administration – Medizinische Fachangestellte.",
    },
    technician: {
      icon: "spray", title: "Sterilization technician",
      text: "An expert in preparing and processing sterile material according to European processing standards (AEMP).",
    },
    german: {
      icon: "globe", title: "German language courses",
      text: "Open to everyone. Small groups, experienced instructors and German quality standards.",
    },
  },

  coursesPage: {
    title: "Courses",
    heading: "Our courses",
    sidebarLabel: "All courses",
  },

  courses: {
    mechanic: {
      title: "Surgical instrument mechanic",
      form: "course",
      image: "mechanic-main",
      gallery: ["mechanic-2", "mechanic-3"],
      intro: [
        "A surgical instrument mechanic is a specialist in high-value precision products that are essential in every operating room. The program trains students in the manufacture, maintenance and professional repair of surgical instruments in accordance with German quality standards.",
      ],
      blocks: [
        {
          title: "Key information",
          items: [
            ["Enrollment status", "Open – the first generation starts in {intake}"],
            ["Duration", "9 months"],
            ["Format", "Dual model – theory at MASOK Academy and practical training at a state-of-the-art training center"],
            ["Requirements", "Secondary school diploma in a technical field"],
            ["Qualification standard", "Newly adopted (2026) qualification standard “Surgical instrument mechanic”"],
            ["Language training", "Intensive German as part of the course"],
            ["Certificate", "Nationally recognized qualification + international AHK certificate"],
            ["Career prospects", "A shortage occupation in Europe with high demand for specialists, and job opportunities in manufacturing and service facilities in Serbia"],
          ],
        },
      ],
      whyTitle: "Why this course?",
      why: "Surgical instruments are high-value precision products, yet there are fewer and fewer qualified specialists in Europe who can make and repair them. This course offers a secure career in a profession with a future – along with knowledge and a certificate recognized internationally.",
    },
    assistant: {
      title: "Medical administrative assistant (MFA)",
      subtitle: "MFA – Medizinische Fachangestellte",
      form: "mfa",
      image: "mfa-main",
      gallery: ["mfa-2", "mfa-3"],
      intro: [
        "A medical administrative assistant (MFA) is a professional who bridges clinical medicine and healthcare administration. MFAs take on administrative, organizational and coordination tasks, so doctors and nurses can return to their core work: caring for patients. The model is well established in Germany, Austria and Switzerland.",
      ],
      blocks: [
        {
          title: "Key information",
          items: [
            ["Enrollment status", "Open – the first generation starts in {intake}"],
            ["Duration", "9 months"],
            ["Format", "Dual model – theory at MASOK Academy and practical training in a healthcare facility"],
            ["Requirements", "Secondary school or college diploma in a medical field"],
            ["Qualification standard", "Based on the EU MFA model (Germany, Austria, Switzerland)"],
            ["Language training", "Intensive German as part of the course"],
            // TODO(confirm): the old English page also promised a "nationally recognized qualification"; the Serbian page did not.
            ["Certificate", "Internationally recognized AHK certificate"],
            ["Career prospects", "Healthcare institutions"],
          ],
        },
      ],
      whyTitle: "Why this course?",
      why: "The MFA is a profession of the future in healthcare: it relieves the whole team, increases an institution's capacity and gives participants a clear career path, following a model established in Germany, Austria and Switzerland.",
    },
    technician: {
      title: "Sterilization technician",
      form: "course",
      image: "sterilization-main",
      gallery: ["sterilization-2", "sterilization-3"],
      intro: [
        "A sterilization technician is an expert in preparing and processing sterile materials according to European processing standards (AEMP), with a focus on documentation and quality assurance. Sterilization is one of the most important links in patient safety in any healthcare facility.",
      ],
      blocks: [
        {
          title: "Key information",
          items: [
            ["Enrollment status", "Course in preparation – you can register your interest now"],
            ["Duration", "9 months"],
            ["Format", "Dual model – theory and practice"],
            ["Requirements", "To be announced"],
            ["Qualification standard", "European processing standards (AEMP)"],
            ["Language training", "Intensive German as part of the course"],
            ["Certificate", "To be announced"],
            ["Career prospects", "Sterilization departments in healthcare institutions"],
          ],
        },
      ],
      whyTitle: "Why this course?",
      why: "Sterilization is one of the most important steps in preventing infections and providing safe healthcare. This course is for anyone who wants practical and professional knowledge for working in sterilization, covering the whole process – from receiving and preparing instruments, through cleaning, packaging and sterilization, to quality control, proper storage and documentation.",
    },
    german: {
      title: "German language courses",
      form: "course",
      image: "german-course",
      gallery: [],
      intro: [
        "Our German language courses are open to everyone. Classes follow German quality standards, in small groups, with experienced instructors.",
      ],
      blocks: [
        {
          title: "Levels",
          items: [
            "Levels A1–B2 according to the Common European Framework of Reference for Languages (CEFR)",
            "Free placement test to find the right group",
          ],
        },
        {
          title: "Modules",
          items: [
            "General German",
            "Professional German for medicine and technology",
            "Preparation for international exams (Goethe, telc, ÖSD)",
            "Courses for companies",
          ],
        },
        {
          title: "Key information",
          items: [
            ["Enrollment", "Coming soon"],
            ["Course length", "Coming soon"],
            ["Price", "On request"],
            ["Certificate", "Academy certificate for each completed level"],
          ],
        },
      ],
      whyTitle: "",
      why: "",
    },
  },

  about: {
    title: "About us",
    whoTitle: "Who we are",
    paragraphs: [
      "The International Academy for Vocational Education and Training (MASOK) in Leskovac is an educational center that develops and delivers modern vocational education and training programs in line with European and international standards. The Academy combines a modern curriculum, practical training and international certification with concrete job opportunities in healthcare and related industries.",
      "Our mission is to develop competent professionals to international standards who meet the real needs of the healthcare system and its supporting industries, while improving the quality of healthcare services in Serbia.",
      "Classes for the first generation of MASOK Academy students start in {intake}.",
    ],
    contactButton: "Contact us",
    founderTitle: "Our founder",
    founderText: "The Academy was founded by SBP Management, a Berlin-based company specializing in healthcare and vocational education projects, with many years of experience working with leading German hospital groups and university clinics.",
    moreInfo: "Learn more at",
    teamTitle: "Our team",
  },

  applicants: {
    title: "For applicants",
    overviewTitle: "Our courses at a glance",
    overview: {
      mechanic: [
        "Starts {intake}", "Duration: 9 months", "Secondary school diploma in a technical field",
        "Based on the newly adopted (2026) qualification standard", "AHK certificate",
      ],
      assistant: [
        "Starts {intake}", "Duration: 9 months", "Secondary school or college diploma in a medical field",
        "Dual model", "AHK certificate",
      ],
      technician: ["Course in preparation – register your interest"],
      german: [
        "Levels A1–B2", "Free placement test",
        "General German, professional German for medicine and technology, exam preparation (Goethe, telc, ÖSD), courses for companies",
        "Price on request", "Academy certificate for each completed level",
      ],
    },
    stepsTitle: "Steps to apply",
    steps: [
      "Online application with your basic details and a CV",
      "Online interview with the Academy team",
      "Final selection and enrollment",
    ],
    applyButton: "Apply now",
    getTitle: "What do students get?",
    get: [
      "Teaching according to German quality standards",
      "Intensive German language course",
      "Practical training in a dual model",
      "Monetary compensation",
      "Professional visits and observations with German clinical partners",
      "Internationally recognized AHK certificate",
      "Help finding a job",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do I need to know German before enrolling?", "No. Learning German is an integral part of every program."],
      ["Is the certificate recognized internationally?", "Yes, the AHK certificate is internationally recognized."],
      ["Is there practical training?", "Yes. All programs follow the dual model, and professional visits and observations at German partner institutions are also planned."],
      ["How do I apply?", "Through the online application form on this website – choose your course and send us your details and CV."],
      ["Can I take only a German course?", "Yes. Our German language courses are open to everyone, whether or not you are enrolled in one of the Academy's programs."],
      ["Does a completed German course count if I later enroll in a program?", "Yes. The level you reach is recognized and taken into account in the language training within the program."],
    ],
    formTitle: "Apply now",
    formLead: "Choose your course and send us your details – we will contact you about the next steps.",
  },

  contact: {
    title: "Contact",
    heading: "For any further information, please get in touch!",
    addressTitle: "Address",
    formTitle: "Send us a message",
  },

  partners: {
    title: "MASOK Academy",
    subtitle: "Your partner for training, business and market entry in Serbia",
    lines: [
      "MASOK Academy in Leskovac gives German companies a reliable base for training, workshops, strategy meetings and corporate programs in Serbia.",
      "Together with our experienced network in Serbia and Germany, we also support companies with market analysis, business development, market entry and operational implementation between the two countries.",
      "One point of contact. One tailored offer. Billing in euros.",
    ],
    buttons: ["Request an offer", "Talk to a consultant"],
    stats: [
      { icon: "plane", title: "Arrival", lines: ["Niš Airport – 55 km", "Approx. 45 min"] },
      { icon: "groups", title: "Capacity", lines: ["Up to 40 participants", "Flexible seating"] },
      { icon: "chat", title: "Support", lines: ["German, English", "Serbian on site"] },
      { icon: "network", title: "Network", lines: ["AHK Serbia", "Premium member"] },
    ],
    servicesTitle: "Our services",
    services: [
      {
        title: "Meetings, training & corporate programs", image: "partners-meetings", target: "meetings",
        text: "Facilities, accommodation, transfers, catering, program organization and on-site support for workshops, training programs, management meetings and team events.",
      },
      {
        title: "Serbia–Germany business consulting", image: "partners-consulting", target: "consulting",
        text: "Expert analysis, market evaluation, market-entry support and operational, logistical and organizational assistance for business activities between Serbia and Germany.",
      },
    ],
    meetingsTitle: "Meetings, training & corporate programs",
    meetingsText: [
      "MASOK Academy is a private adult education institution in Leskovac, developed according to German training and quality standards and in close cooperation with AHK Serbia. Our facilities are also available to external companies for training, workshops, management retreats and team events.",
      "Whether you are planning a one-day workshop, a multi-day training program, a management meeting or a team event, MASOK can organize the infrastructure and services you need in Southern Serbia.",
      "Our facilities accommodate groups of up to about 40 participants and can be set up for different training and workshop formats. We can organize individual services or a complete package.",
    ],
    packages: [
      {
        tag: "Package 01", title: "Rooms & training facilities", lead: "For companies that organize travel and accommodation themselves",
        items: ["Seminar and training rooms, bookable by the day or as a block", "Projector, screen, whiteboards and flipcharts", "Wi-Fi and power at every workstation", "Breakout rooms for smaller groups", "Technical training area where required", "Coffee breaks and lunch/catering on request"],
      },
      {
        tag: "Package 02", title: "Training & stay", lead: "For multi-day programs and groups travelling to Serbia",
        items: ["All services from Package 01", "Accommodation with breakfast in selected partner hotels", "Airport transfer from Niš, Belgrade or another agreed location", "Full board / regional cuisine according to the agreed program", "Local transportation where required", "Interpreting and translation support", "Evening program on request"],
      },
      {
        tag: "Package 03", title: "Team & customized programs", lead: "For strategy meetings, team building and individually designed corporate programs",
        items: ["All services from Package 02", "German- or English-speaking facilitation and program planning", "Indoor and outdoor team-building activities", "Workshops and moderated sessions", "Excursions and regional programs, e.g. Vlasina Lake, Niš Fortress and local wineries", "Photo and video documentation on request"],
      },
    ],
    priceNote: "Price: on request / tailored quotation",
    extras: [
      { title: "Facilities", items: ["Seminar rooms with flexible seating: U-shape, rows or group tables", "Projector, screen, whiteboards and flipcharts", "Technical training area", "Separate rooms for small-group work", "Break area with coffee and drinks", "Parking, step-free access, printing and copying"] },
      { title: "Additional services", items: ["Airport transfers: Niš, Belgrade, Skopje", "German–Serbian interpreting and translation", "Catering from coffee breaks to dinner", "Hotel booking with partner hotels", "Excursions, evening programs, photo and video documentation"] },
    ],
    consultingTitle: "Business & market entry consulting Serbia – Germany",
    consultingText: [
      "Planning business activities in Serbia or Germany?",
      "MASOK gives companies access to experienced consultants who support business activities between the Serbian and German markets.",
      "Before you start, our consultant can analyse your project, evaluate opportunities and challenges and give an independent assessment of the best approach. Our support ranges from an initial expert assessment to ongoing local assistance throughout the project.",
    ],
    consultingSteps: [
      ["Expert assessment", "Initial analysis of the company, project, objectives and planned market activity."],
      ["Market & feasibility evaluation", "Assessment of market potential, relevant requirements, opportunities, risks and practical feasibility."],
      ["Market entry & partner strategy", "Choosing the right entry approach and identifying potential partners, contacts and service providers."],
      ["Implementation & local support", "Operational, logistical and organizational support during implementation, within the agreed scope."],
    ],
    includesTitle: "Depending on the project, consulting may include:",
    includes: ["Initial business and project analysis", "Serbian or German market analysis", "Assessment of market potential and feasibility", "Market-entry strategy", "Identifying potential business partners and relevant contacts", "Evaluating local operational requirements", "Support in setting up local structures and business processes", "Coordination with local service providers and institutions", "Logistical and organizational support", "Preparing and coordinating meetings", "Language and intercultural support", "Ongoing project coordination during implementation"],
    includesNote: "Consulting services are defined individually according to the scope and complexity of each assignment. Price: on request.",
    whyTitle: "Why work with us?",
    why: [
      ["Local presence", "A reliable operational base in Southern Serbia"],
      ["German–Serbian expertise", "Experience and business networks in both markets"],
      ["Flexible solutions", "From a single meeting room or consulting session to complete project support"],
      ["German, English and Serbian", "Communication and on-site support in all three languages"],
    ],
    accessTitle: "Easy to reach in Southern Serbia",
    accessText: [
      "MASOK Academy is in Leskovac, about 55 km from Niš Airport (around 45 minutes by road).",
      "Depending on your program, we can coordinate airport transfers, accommodation, local transport and the complete logistics for your group.",
      "Transfers can also be arranged from Belgrade, Skopje and other agreed locations.",
    ],
    processTitle: "From inquiry to implementation",
    process: [
      ["Tell us what you need", "Send us your preferred dates, number of participants or a short description of your business project."],
      ["We evaluate your requirements", "Our team works out which services, facilities or consulting support fit best."],
      ["You receive a tailored proposal", "You get an individual offer based on the actual scope of your project."],
      ["We coordinate implementation", "One point of contact accompanies the organization and implementation of your project."],
    ],
    formTitle: "Tell us about your project",
    formLead: "Whether you are organizing a training program in Serbia, planning a management meeting or exploring a new business opportunity between Germany and Serbia, we will help you find the right solution.",
  },

  newsPage: {
    title: "News",
    heading: "News & updates from the Academy",
    all: "All",
    empty: "No news yet – check back soon.",
    back: "Back to all news",
    moreTitle: "More news",
    filterLabel: "Filter news by category",
  },

  forms: {
    name: "Full name",
    email: "Email",
    phone: "Phone number",
    company: "Company",
    course: "Course",
    courseOptions: {
      mechanic: "Surgical instrument mechanic",
      assistant: "Medical administrative assistant (MFA)",
      technician: "Sterilization technician",
      german: "German language courses",
    },
    message: "Message",
    cv: "CV",
    europass: "Europass CV",
    attachment: "Attachment",
    optional: "optional",
    fileHint: "PDF, Word or image, up to 5 MB",
    chooseFile: "Choose file",
    noFile: "No file chosen",
    removeFile: "Remove file",
    courseFormTitle: "Apply here",
    courseFormLead: "and we will contact you!",
    mfaTitle: "How to apply",
    mfaSteps: [
      { text: "Fill out the application form", button: "Application form", link: "applicationForm" },
      { text: "Download the Europass CV template and fill it in", button: "Download CV template", link: "europass" },
      { text: "Attach the completed CV and send it below" },
    ],
    interest: "What are you interested in?",
    interestOptions: {
      facilities: "Training / meeting facilities",
      stay: "Training & stay",
      team: "Team / corporate program",
      entrySerbia: "Market entry Serbia",
      entryGermany: "Market entry Germany",
      consulting: "Business consulting",
      other: "Other",
    },
    participants: "Number of participants",
    date: "Preferred date",
    project: "Tell us briefly about your project",
    consent: "I agree that MASOK Academy may process the data I submit in order to handle my request, as described in the",
    consentLink: "privacy policy",
    submit: "Send",
    sending: "Sending…",
    required: "Please fill in this field.",
    invalidEmail: "Please enter a valid email address.",
    chooseOne: "Please choose at least one option.",
    chooseCourse: "Please choose a course.",
    consentRequired: "Please accept the privacy policy to continue.",
    fileTooBig: "The file is too large. The maximum size is 5 MB.",
    fileType: "Please upload a PDF, Word document or image.",
    successTitle: "Thank you!",
    success: "Your message has been sent. We will get back to you as soon as possible.",
    error: "Sorry, your message could not be sent. Please try again or email us at",
  },

  thanks: {
    title: "Thank you!",
    text: "Your message has been sent. We will get back to you as soon as possible.",
    back: "Back to the homepage",
  },

  footer: {
    contactTitle: "Contact us",
    hoursTitle: "Business hours",
    linksTitle: "Quick links",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
    followUs: "Follow us",
  },

  notFound: {
    title: "Page not found",
    text: "Sorry, the page you are looking for doesn't exist or has moved.",
    back: "Go to the homepage",
  },
};

export default en;
export type Dict = typeof en;
