export const site = {
  name: "Webtextit",
  url: "https://webtextit.com",
  email: "hello@webtextit.com",
  description:
    "Webtextit is a software company. We design, build, and support apps, websites, custom software, ERP, CMS, and SaaS products.",
};

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export const industries = [
  "Distribution",
  "Retail",
  "Publishing",
  "Field service",
  "Clinics",
  "Membership groups",
  "Education",
  "Professional services",
] as const;

export type ProductTone = "paper" | "pine" | "ink";

export type Product = {
  slug: string;
  name: string;
  nav: string;
  short: string;
  summary: string;
  audience: string;
  includes: string[];
  fit: string[];
  tone: ProductTone;
  wide: boolean;
};

export const products: Product[] = [
  {
    slug: "apps",
    name: "Mobile and web apps",
    nav: "Apps",
    short: "Customer, staff, and field apps for phones and the browser.",
    summary:
      "Apps for the people who do the work away from a desk, and for the customers who need a simple way in. Accounts, jobs, orders, photos, and notifications live in one product, with an admin area for the team that runs it.",
    audience:
      "Teams whose work happens on a phone: technicians, drivers, sales staff, or customers who need to book, track, or approve something.",
    includes: [
      "iPhone, Android, or a web app when one shared release is the better fit",
      "Sign-in, roles, and notifications",
      "Flows that still work when the connection drops, when the job requires it",
      "An admin area for the people who assign work and check progress",
      "Help getting the app onto the stores, or onto the devices you manage",
    ],
    fit: [
      "Staff currently send updates over chat and photo albums",
      "Customers need a place to request, track, or pay",
      "The same information has to be on a phone and on an office screen",
    ],
    tone: "paper",
    wide: false,
  },
  {
    slug: "web",
    name: "Websites and web platforms",
    nav: "Web",
    short: "Marketing sites, portals, catalogs, and pages people sign in to.",
    summary:
      "Public websites and signed-in web platforms. A clear marketing site when that is the job, or a portal, catalog, or dashboard when people need to come back and do something.",
    audience:
      "Companies that need a site customers trust, or a web platform staff and partners use every week.",
    includes: [
      "Page structure, writing hierarchy, and a design that reads well on a phone",
      "Catalogs, forms, search, and signed-in areas when the site is more than a brochure",
      "A way for your team to update pages without a developer",
      "Fast pages, sensible metadata, and a setup you can host",
      "Connections to the app, ERP, or CRM you already use",
    ],
    fit: [
      "The current site is hard to update or hard to trust",
      "Customers and staff need different views of the same information",
      "A campaign, catalog, or partner portal has outgrown a template",
    ],
    tone: "paper",
    wide: false,
  },
  {
    slug: "erp",
    name: "ERP systems",
    nav: "ERP",
    short: "Inventory, purchasing, finance tasks, and reporting in one system.",
    summary:
      "An operations system for the middle of the business: what you buy, what you stock, what you sell, and what finance needs at month end. One place for the numbers, with roles so each team sees its own work.",
    audience:
      "Operators who are stitching orders, stock, and invoices together across spreadsheets and chat.",
    includes: [
      "Items, warehouses, and stock movements",
      "Purchasing, sales orders, and basic invoicing",
      "Approvals where a second person has to sign off",
      "Reports your managers can open without exporting five files",
      "A migration path from the sheets you use today",
    ],
    fit: [
      "Stock figures depend on who updated the sheet last",
      "Purchasing and finance do not share one list of orders",
      "Month end means rebuilding the same report by hand",
    ],
    tone: "pine",
    wide: true,
  },
  {
    slug: "software",
    name: "Custom software",
    nav: "Software",
    short: "Tools for a workflow no off-the-shelf product quite covers.",
    summary:
      "Software built around one workflow: approvals, scheduling, internal tools, partner portals, or the glue between systems you already pay for. The scope stays specific so the product can be finished.",
    audience:
      "Teams that have already tried a generic tool and still run the real process on the side.",
    includes: [
      "A written scope: who uses it, what it does, and what it will not do",
      "Screens for the everyday tasks, plus an admin view",
      "Permissions, an audit of important changes, and exports",
      "Integrations with the site, accounting tool, or database you already have",
      "Notes your team can use to run and hand over the system",
    ],
    fit: [
      "A process is unique enough that a template keeps getting abandoned",
      "Two or three tools almost work, and someone reconciles them by hand",
      "You want to own the software instead of renting a close match",
    ],
    tone: "paper",
    wide: false,
  },
  {
    slug: "cms",
    name: "Content management",
    nav: "CMS",
    short: "A publishing system editors can run without a developer.",
    summary:
      "A CMS shaped to your content, not a blank install with every feature turned on. Editors draft, review, and publish. Developers are needed for new types of pages, not for fixing a typo.",
    audience:
      "Editors, marketers, and site owners who publish often and are tired of waiting on a developer for ordinary updates.",
    includes: [
      "Content types that match what you actually publish",
      "Drafts, review, and a clear published state",
      "Roles for authors, editors, and admins",
      "Media handling and page previews",
      "A public site that reads from the CMS, or a CMS behind the site you already have",
    ],
    fit: [
      "Updates wait in a ticket queue for small text changes",
      "The same layout is copied by hand across dozens of pages",
      "More than one person publishes, and there is no review step",
    ],
    tone: "paper",
    wide: false,
  },
  {
    slug: "saas",
    name: "SaaS products",
    nav: "SaaS",
    short: "A product many customers use, with accounts, plans, and billing.",
    summary:
      "Software as a service: one product, many customer accounts. Sign-up, plans, billing, admin, and the screens each customer uses. Built so you can support it without a special deploy for every account.",
    audience:
      "Companies turning a service or an internal tool into a product other businesses pay for.",
    includes: [
      "Accounts, teams, and roles for each customer",
      "Plans, trials, and billing that match how you charge",
      "An admin console for your own staff",
      "Onboarding that a new customer can finish",
      "A path for changes that roll out to everyone, not one install at a time",
    ],
    fit: [
      "You sell the same service to many customers and delivery is still manual",
      "An internal tool is good enough that other companies would pay for it",
      "Billing, access, and support live in three different places",
    ],
    tone: "ink",
    wide: true,
  },
];

export type Example = {
  slug: string;
  title: string;
  productSlug: string;
  setting: string;
  summary: string;
  situation: string[];
  delivered: string[];
};

export const examples: Example[] = [
  {
    slug: "distribution-erp",
    title: "ERP for a distributor",
    productSlug: "erp",
    setting: "Distribution",
    summary:
      "Stock, purchase orders, and the month-end picture in one system, instead of a stack of spreadsheets.",
    situation: [
      "Warehouses update stock in different files",
      "Purchasing cannot see what sales already promised",
      "Finance rebuilds the same totals every month",
    ],
    delivered: [
      "Items, warehouses, and stock movements",
      "Purchase orders and sales orders with a simple approval step",
      "A month-end report managers can open themselves",
    ],
  },
  {
    slug: "editorial-cms",
    title: "CMS for a publisher",
    productSlug: "cms",
    setting: "Publishing",
    summary:
      "Editors draft, send work for review, and publish on their own. Developers are called for new page types, not for headlines.",
    situation: [
      "Small copy changes sit in a queue",
      "There is no shared way to preview a story",
      "More than one person publishes, with no review state",
    ],
    delivered: [
      "Content types for stories, pages, and authors",
      "Draft, review, and published states",
      "A public site that reads from the CMS",
    ],
  },
  {
    slug: "field-service-app",
    title: "App for a field team",
    productSlug: "apps",
    setting: "Field service",
    summary:
      "Technicians get the job, add photos, and collect a sign-off on the phone. The office sees the same job without a phone call.",
    situation: [
      "Jobs are assigned in chat",
      "Photos live on personal cameras",
      "The office calls to ask whether the visit is done",
    ],
    delivered: [
      "A job list on the phone, with status and notes",
      "Photo capture and a customer sign-off",
      "An office view of what is open, done, and blocked",
    ],
  },
  {
    slug: "membership-saas",
    title: "SaaS for a membership",
    productSlug: "saas",
    setting: "Membership",
    summary:
      "One product for many member organizations: plans, billing, and a member area, with an admin console for the operator.",
    situation: [
      "Access is granted by hand after a payment email",
      "Plans and invoices live in different tools",
      "Support cannot see what a member is allowed to do",
    ],
    delivered: [
      "Sign-up, plans, and billing",
      "A member area with roles inside each account",
      "An operator console for accounts and failed payments",
    ],
  },
  {
    slug: "clinic-scheduling",
    title: "Scheduling for a clinic",
    productSlug: "software",
    setting: "Clinics",
    summary:
      "Front-desk scheduling: appointments, staff calendars, and visit status. This is operations software, not a clinical records system.",
    situation: [
      "The book is a shared calendar plus a paper list",
      "Patients call to ask what time they have",
      "Staff double-book a room without seeing it",
    ],
    delivered: [
      "A calendar by practitioner and room",
      "Appointment requests and reminders",
      "A front-desk list of who is expected today",
    ],
  },
  {
    slug: "commerce-website",
    title: "Website for a retailer",
    productSlug: "web",
    setting: "Retail",
    summary:
      "A catalog customers can browse, orders staff can fulfill, and product updates that do not need a developer.",
    situation: [
      "Products are listed in a PDF or a social post",
      "Orders arrive by phone and get typed into a sheet",
      "Price changes take days to reach the site",
    ],
    delivered: [
      "A catalog with search and clear product pages",
      "An order flow staff can process",
      "An editor for prices, stock notes, and pages",
    ],
  },
];

export const services = [
  {
    step: "01",
    title: "Discovery",
    text: "We write down the job, the people who will use the software, and the edges of the scope. You get a plan you can read before build starts.",
  },
  {
    step: "02",
    title: "Design",
    text: "Flows and screens come before a long build. The people who will use it can react while a change is still cheap.",
  },
  {
    step: "03",
    title: "Engineering",
    text: "We build the product, the admin tools, and the connections to systems you already have. The stack follows the product.",
  },
  {
    step: "04",
    title: "Launch",
    text: "Data moves across, the team is shown how everyday tasks work, and the release is something staff can operate.",
  },
  {
    step: "05",
    title: "Care",
    text: "After launch we can stay on: fixes, small improvements, and a person to call when something changes. The shape of care is agreed up front.",
  },
] as const;

export const engagements = [
  {
    title: "A new product",
    text: "You know the work the software should take on. We shape the first release so it can ship, then leave room for what comes next.",
  },
  {
    title: "Replace the spreadsheet stack",
    text: "The process already exists. It lives in files, inboxes, and memory. We turn that into one system staff can share.",
  },
  {
    title: "Extend what you have",
    text: "A site, an accounting tool, or an old database stays. We add the app, portal, or workflow that the current setup cannot cover.",
  },
] as const;

export const principles = [
  {
    title: "Scope in writing",
    text: "What the release includes, and what it does not, is written down. Surprises get discussed, not quietly absorbed.",
  },
  {
    title: "Software staff can operate",
    text: "Everyday tasks — publishing a page, receiving stock, closing a job — should not require a developer.",
  },
  {
    title: "Care after launch",
    text: "A system that nobody can call about will stall the first time the business changes. Support is part of the offer, not an afterthought.",
  },
] as const;

export const faqs = [
  {
    question: "Do you only sell ready-made products?",
    answer:
      "No. ERP, CMS, and SaaS engagements start from a product shape we already know how to deliver. Apps, websites, and custom software are scoped to the workflow. Adjacent work — an integration, a portal, a booking tool — is in range too.",
  },
  {
    question: "Can you work with tools we already use?",
    answer:
      "Yes. Many projects connect to a current website, an accounting package, or a database. We would rather extend a system that works than replace it for the sake of a new build.",
  },
  {
    question: "Who do we talk to during the work?",
    answer:
      "You work with the people designing and building the product. There is a named contact, and decisions that change the scope stay in writing.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Care can continue as a monthly block of time, or as support for incidents and small changes. We agree that before you need it.",
  },
] as const;

export const interestOptions = [
  "Mobile or web app",
  "Website or web platform",
  "Custom software",
  "ERP",
  "CMS",
  "SaaS",
  "Not sure yet",
] as const;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getExample(slug: string) {
  return examples.find((example) => example.slug === slug);
}

export function examplesForProduct(slug: string) {
  return examples.filter((example) => example.productSlug === slug);
}

const buttonBase =
  "items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export const buttonClass = {
  primary: `inline-flex ${buttonBase} bg-ink text-paper hover:bg-pine focus-visible:outline-signal`,
  primaryDesktop: `hidden sm:inline-flex ${buttonBase} bg-ink text-paper hover:bg-pine focus-visible:outline-signal`,
  secondary: `inline-flex ${buttonBase} border border-line bg-card text-ink hover:border-ink focus-visible:outline-signal`,
  onDark: `inline-flex ${buttonBase} bg-paper text-ink hover:bg-card focus-visible:outline-paper`,
} as const;
