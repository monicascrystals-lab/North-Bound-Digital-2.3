// CHANGE PACKAGE FEATURES HERE
const starterFeatures = [
  "Professional responsive design",
  "Mobile, tablet and desktop optimisation",
  "Contact/enquiry form",
  "Click-to-call button",
  "Email button",
  "WhatsApp button",
  "Domain connection",
  "SSL / HTTPS setup",
  "Basic on-page SEO",
  "Google Search Console setup",
  "XML sitemap submission",
  "Social media links",
  "Basic performance optimisation",
  "1 revision round",
  "Website launch",
  "14 days post-launch technical support",
];

const essentialAdditions = [
  "More customised professional design",
  "Improved page layouts",
  "Additional content sections",
  "Basic portfolio or gallery functionality",
  "More space for services and company information",
  "Revision allowance increased to 2 rounds",
  "Post-launch technical support extended to 30 days",
];

const businessAdditions = [
  "Enhanced custom design",
  "Google Analytics setup",
  "Enhanced on-page SEO",
  "SEO page titles and meta descriptions",
  "Portfolio, gallery or service showcase sections",
  "Multiple enquiry/contact forms where required",
  "Basic third-party integrations",
  "Enhanced performance optimisation",
  "More advanced animations and interactions",
  "Conversion-focused calls-to-action",
  "Post-launch technical support extended to 60 days",
];

const professionalAdditions = [
  "Fully customised website design",
  "Advanced animations and interactions",
  "Advanced enquiry forms",
  "Advanced content sections",
  "Blog or CMS functionality where required",
  "Advanced integrations within the agreed project scope",
  "Advanced SEO foundations",
  "Structured data / schema setup where appropriate",
  "Enhanced accessibility optimisation",
  "Priority project support",
  "Revision allowance increased to 3 rounds",
  "Post-launch technical support extended to 90 days",
];

// CHANGE PACKAGE PRICES HERE
const packagePrices = {
  Starter: { ZAR: 3500, USD: 950, GBP: 795, EUR: 900, AUD: 1450, NZD: 1550, CAD: 1250 },
  Essential: { ZAR: 5500, USD: 1450, GBP: 1195, EUR: 1350, AUD: 2200, NZD: 2350, CAD: 1950 },
  Business: { ZAR: 6500, USD: 1750, GBP: 1450, EUR: 1650, AUD: 2650, NZD: 2850, CAD: 2350 },
  Professional: { ZAR: 10500, USD: 2950, GBP: 2450, EUR: 2750, AUD: 4450, NZD: 4750, CAD: 3950 },
};

const packageDefinitions = [
  {
    name: "Starter",
    description:
      "A simple, professional website for businesses that need a strong online presence without unnecessary complexity.",
    pages: "Up to 3 total pages",
    highlights: [
      "Professional responsive design",
      "Contact/enquiry form",
      "Basic on-page SEO",
      "14 days post-launch technical support",
    ],
    features: starterFeatures,
    includesHeading: "Everything included",
    supportPeriod: "14 days post-launch technical support",
  },
  {
    name: "Essential",
    description:
      "A more complete professional website for small businesses that need more space to showcase their services and build credibility.",
    pages: "Up to 5 total pages",
    highlights: [
      "Everything included in Starter",
      "More customised professional design",
      "Basic portfolio or gallery functionality",
      "Post-launch technical support extended to 30 days",
    ],
    features: essentialAdditions,
    includesHeading: "Includes all Starter features, plus these upgrades",
    supportPeriod: "Post-launch technical support extended to 30 days",
  },
  {
    name: "Business",
    description:
      "A more advanced website for growing businesses that need stronger design, analytics, lead generation and additional functionality.",
    pages: "Up to 6 total pages",
    badge: "Most Popular",
    highlights: [
      "Everything included in Essential",
      "Enhanced custom design",
      "Google Analytics setup",
      "Multiple enquiry/contact forms where required",
    ],
    features: businessAdditions,
    includesHeading: "Includes all Essential features, plus these upgrades",
    supportPeriod: "Post-launch technical support extended to 60 days",
  },
  {
    name: "Professional",
    description:
      "A highly customised website for businesses that need a larger, more advanced and distinctive online presence.",
    pages: "Up to 10 total pages",
    highlights: [
      "Everything included in Business",
      "Fully customised website design",
      "Blog or CMS functionality where required",
      "Post-launch technical support extended to 90 days",
    ],
    features: professionalAdditions,
    includesHeading: "Includes all Business features, plus these upgrades",
    supportPeriod: "Post-launch technical support extended to 90 days",
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
