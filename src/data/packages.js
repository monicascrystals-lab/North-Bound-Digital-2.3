// CHANGE PACKAGE FEATURES HERE
const starterFeatures = [
  "Up to 3 pages",
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
  "Up to 5 pages",
  "More customised professional design",
  "Additional content sections",
  "Improved page layouts",
  "Basic portfolio or gallery functionality",
  "More space for services and company information",
  "2 revision rounds",
  "30 days post-launch technical support",
];

const businessAdditions = [
  "Up to 6 pages",
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
  "2 revision rounds",
  "60 days post-launch technical support",
];

const professionalAdditions = [
  "Up to 10 pages",
  "Fully customised website design",
  "Advanced animations and interactions",
  "Advanced enquiry forms",
  "Advanced content sections",
  "Blog or CMS functionality where required",
  "Advanced integrations within the agreed project scope",
  "Advanced SEO foundations",
  "Structured data / schema setup where appropriate",
  "Advanced performance optimisation",
  "Enhanced accessibility optimisation",
  "Priority project support",
  "3 revision rounds",
  "90 days post-launch technical support",
];

function replacePackageTerms(features, additions) {
  const sharedFeatures = features.filter(
    (feature) =>
      !/^Up to \d+ pages$/.test(feature) &&
      !/^\d+ revision round/.test(feature) &&
      !/^\d+ days post-launch technical support$/.test(feature),
  );
  return [...sharedFeatures, ...additions];
}

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
    pages: "Up to 3 pages",
    highlights: [
      "Professional responsive design",
      "Contact/enquiry form",
      "Basic on-page SEO",
      "14 days post-launch technical support",
    ],
    features: starterFeatures,
    supportPeriod: "14 days post-launch technical support",
  },
  {
    name: "Essential",
    description:
      "A complete professional website for small businesses that need more space to showcase their services and build credibility.",
    pages: "Up to 5 pages",
    highlights: [
      "Everything included in Starter",
      "More customised professional design",
      "Basic portfolio or gallery functionality",
      "30 days post-launch technical support",
    ],
    features: replacePackageTerms(starterFeatures, essentialAdditions),
    supportPeriod: "30 days post-launch technical support",
  },
  {
    name: "Business",
    description:
      "A more advanced website for growing businesses that want stronger design, lead generation, analytics and additional functionality.",
    pages: "Up to 6 pages",
    badge: "Most Popular",
    highlights: [
      "Everything included in Essential",
      "Enhanced custom design",
      "Google Analytics setup",
      "Multiple enquiry/contact forms where required",
    ],
    features: replacePackageTerms(
      replacePackageTerms(starterFeatures, essentialAdditions),
      businessAdditions,
    ),
    supportPeriod: "60 days post-launch technical support",
  },
  {
    name: "Professional",
    description:
      "A highly customised website for businesses that require a larger, more advanced and distinctive online presence.",
    pages: "Up to 10 pages",
    highlights: [
      "Everything included in Business",
      "Fully customised website design",
      "Blog or CMS functionality where required",
      "90 days post-launch technical support",
    ],
    features: replacePackageTerms(
      replacePackageTerms(
        replacePackageTerms(starterFeatures, essentialAdditions),
        businessAdditions,
      ),
      professionalAdditions,
    ),
    supportPeriod: "90 days post-launch technical support",
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
