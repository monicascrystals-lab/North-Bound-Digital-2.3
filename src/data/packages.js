// CHANGE PACKAGE FEATURES HERE
const essentialFeatures = [
  "Professional responsive design across mobile, tablet and desktop",
  "Contact/enquiry form",
  "Click-to-call, email and WhatsApp buttons",
  "Social media links",
  "Launch setup: domain connection, SSL/HTTPS, Google Search Console and XML sitemap submission",
  "Basic on-page SEO, including page titles, meta descriptions and headings",
  "Basic performance optimisation",
  "1 revision round",
  "Website launch",
  "14 days post-launch technical support",
];

const businessFeatures = [
  "Enhanced custom design with improved page layouts and additional content sections",
  "Fully responsive across mobile, tablet and desktop",
  "Portfolio, gallery or service showcase sections",
  "Contact/enquiry forms (multiple where required), plus click-to-call, email and WhatsApp buttons",
  "Social media links",
  "Conversion-focused calls-to-action",
  "Launch setup: domain connection, SSL/HTTPS, Google Search Console and XML sitemap submission",
  "Google Analytics setup",
  "Enhanced on-page SEO, including page titles, meta descriptions, headings and image descriptions",
  "Basic third-party integrations (up to 2, e.g. Google Maps or a booking link)",
  "Subtle animations and interactions",
  "Enhanced performance optimisation",
  "2 revision rounds",
  "Website launch",
  "30 days post-launch technical support",
];

const professionalFeatures = [
  "Fully customised website design",
  "Fully responsive across mobile, tablet and desktop",
  "Advanced content sections and portfolio/gallery or service showcase",
  "Advanced enquiry forms, plus click-to-call, email and WhatsApp buttons",
  "Social media links",
  "Conversion-focused calls-to-action",
  "Advanced animations and interactions",
  "Blog or CMS functionality where required",
  "Advanced integrations within the agreed project scope (up to 4)",
  "Launch setup: domain connection, SSL/HTTPS, Google Search Console and XML sitemap submission",
  "Google Analytics setup",
  "Advanced SEO foundations, including structured data/schema setup where appropriate",
  "Enhanced accessibility optimisation",
  "Advanced performance optimisation",
  "Priority project support",
  "3 revision rounds",
  "Website launch",
  "60 days post-launch technical support",
];

// CHANGE PACKAGE PRICES HERE
const packagePrices = {
  Essential: {
    ZAR: 3500,
    USD: 950,
    GBP: 795,
    EUR: 900,
    AUD: 1450,
    NZD: 1550,
    CAD: 1250,
  },
  Business: {
    ZAR: 6900,
    USD: 1850,
    GBP: 1550,
    EUR: 1750,
    AUD: 2800,
    NZD: 3000,
    CAD: 2450,
  },
  Professional: {
    ZAR: 12500,
    USD: 3500,
    GBP: 2950,
    EUR: 3300,
    AUD: 5250,
    NZD: 5650,
    CAD: 4650,
  },
};

const packageDefinitions = [
  {
    name: "Essential",
    description:
      "A simple, professional website for businesses that need a strong online presence without unnecessary complexity.",
    pages: "Up to 3 total pages",
    highlights: [
      "Professional responsive design",
      "Contact/enquiry form",
      "Basic on-page SEO",
      "14 days post-launch technical support",
    ],
    features: essentialFeatures,
    includesHeading: "Included features",
  },
  {
    name: "Business",
    description:
      "A more advanced website for growing businesses that need stronger design, analytics and lead generation.",
    pages: "Up to 6 total pages",
    badge: "Most Popular",
    highlights: [
      "Enhanced custom design",
      "Google Analytics setup",
      "Multiple enquiry/contact forms where required",
      "30 days post-launch technical support",
    ],
    features: businessFeatures,
    includesHeading: "Included features",
  },
  {
    name: "Professional",
    description:
      "A highly customised website for businesses that need a larger, more advanced and distinctive online presence.",
    pages: "Up to 10 total pages",
    highlights: [
      "Fully customised website design",
      "Blog or CMS functionality where required",
      "Advanced integrations within the agreed project scope",
      "60 days post-launch technical support",
    ],
    features: professionalFeatures,
    includesHeading: "Included features",
  },
];

const packages = packageDefinitions.map((definition) => ({
  ...definition,
  prices: packagePrices[definition.name],
}));

export const currencies = [
  { code: "ZAR", label: "South Africa — ZAR (R)", symbol: "R" },
  { code: "USD", label: "United States / International — USD ($)", symbol: "US$" },
  { code: "GBP", label: "United Kingdom — GBP (£)", symbol: "£" },
  { code: "EUR", label: "European Union — EUR (€)", symbol: "€" },
  { code: "AUD", label: "Australia — AUD (A$)", symbol: "A$" },
  { code: "NZD", label: "New Zealand — NZD (NZ$)", symbol: "NZ$" },
  { code: "CAD", label: "Canada — CAD (C$)", symbol: "C$" },
];

export default packages;
