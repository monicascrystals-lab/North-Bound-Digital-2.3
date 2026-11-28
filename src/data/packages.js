const essentialFeatures = [
  "Up to 3 total website pages",
  "Professional responsive design",
  "Contact/enquiry form",
  "Click-to-call, email and WhatsApp buttons",
  "Social media links",
  "Domain connection and SSL/HTTPS setup",
  "Google Search Console and XML sitemap submission",
  "Basic on-page SEO",
  "Basic performance optimisation",
  "1 revision round",
  "Website launch",
  "14 days post-launch technical support",
];

const businessFeatures = [
  "Up to 6 total website pages",
  "Enhanced custom responsive design",
  "Portfolio, gallery or service showcase",
  "Multiple enquiry forms where required",
  "Click-to-call, email and WhatsApp buttons",
  "Social media links",
  "Conversion-focused calls-to-action",
  "Domain connection and SSL/HTTPS setup",
  "Google Search Console and XML sitemap submission",
  "Google Analytics setup",
  "Enhanced on-page SEO",
  "Up to 2 basic third-party integrations",
  "Subtle animations and interactions",
  "Enhanced performance optimisation",
  "2 revision rounds",
  "Website launch",
  "30 days post-launch technical support",
];

const professionalFeatures = [
  "Up to 10 total website pages",
  "Fully customised responsive design",
  "Advanced content and service showcase sections",
  "Advanced enquiry forms",
  "Click-to-call, email and WhatsApp buttons",
  "Social media links",
  "Conversion-focused calls-to-action",
  "Advanced animations and interactions",
  "Blog or CMS functionality within agreed scope",
  "Third-party integrations subject to technical assessment",
  "Domain connection and SSL/HTTPS setup",
  "Google Search Console and XML sitemap submission",
  "Google Analytics setup",
  "Advanced SEO foundations and structured data where appropriate",
  "Enhanced accessibility optimisation",
  "Advanced performance optimisation",
  "Priority project support",
  "3 revision rounds",
  "Website launch",
  "60 days post-launch technical support",
];

const packageDefinitions = [
  {
    name: "Essential",
    description: "Get your business online. A professional website that helps customers find your business, understand your services and contact you directly.",
    pages: "Up to 3 total pages",
    highlights: [
      "Up to 3 total website pages",
      "Professional responsive design",
      "Basic on-page SEO",
      "14 days post-launch technical support",
    ],
    features: essentialFeatures,
    includesHeading: "Included features",
  },
  {
    name: "Business",
    description: "Turn visitors into customers. A customised, conversion-focused website designed to build credibility, showcase your services and generate more enquiries.",
    pages: "Up to 6 total pages",
    badge: "Recommended",
    highlights: [
      "Up to 6 total website pages",
      "Enhanced custom design",
      "Google Analytics setup",
      "30 days post-launch technical support",
    ],
    features: businessFeatures,
    includesHeading: "Included features",
  },
  {
    name: "Professional",
    description: "Stand out from your competition. A premium, highly customised digital presence built around your business goals, brand and operational requirements.",
    pages: "Up to 10 total pages",
    highlights: [
      "Up to 10 total website pages",
      "Fully customised website design",
      "Advanced content and interactions",
      "60 days post-launch technical support",
    ],
    features: professionalFeatures,
    includesHeading: "Included features",
  },
];

export const pricing = {
  currencies: [
    { code: "USD", label: "United States / USD — US Dollar", symbol: "$", market: "United States" },
    { code: "GBP", label: "United Kingdom / GBP — British Pound", symbol: "£", market: "United Kingdom" },
    { code: "AUD", label: "Australia / AUD — Australian Dollar", symbol: "A$", market: "Australia" },
    { code: "CAD", label: "Canada / CAD — Canadian Dollar", symbol: "C$", market: "Canada" },
    { code: "EUR", label: "Europe / EUR — Euro", symbol: "€", market: "Europe" },
    { code: "NZD", label: "New Zealand / NZD — New Zealand Dollar", symbol: "NZ$", market: "New Zealand" },
    { code: "ZAR", label: "South Africa / ZAR — South African Rand", symbol: "R", market: "South Africa" },
  ],
  packages: {
    Essential: { USD: 599, GBP: 449, AUD: 899, CAD: 799, EUR: 549, NZD: 999, ZAR: 7999 },
    Business: { USD: 1199, GBP: 899, AUD: 1799, CAD: 1599, EUR: 1099, NZD: 1999, ZAR: 14999 },
    Professional: { USD: 1999, GBP: 1499, AUD: 2999, CAD: 2599, EUR: 1849, NZD: 3299, ZAR: 24999 },
  },
  optionalServices: {
    additionalPage: { USD: 125, GBP: 95, AUD: 190, CAD: 170, EUR: 115, NZD: 210, ZAR: 1650 },
    copywriting: { USD: 75, GBP: 55, AUD: 115, CAD: 100, EUR: 70, NZD: 125, ZAR: 1000 },
    logo: { USD: 150, GBP: 115, AUD: 225, CAD: 200, EUR: 140, NZD: 250, ZAR: 2000 },
    booking: { USD: 250, GBP: 190, AUD: 375, CAD: 335, EUR: 230, NZD: 420, ZAR: 3300 },
    googleBusiness: { USD: 99, GBP: 75, AUD: 150, CAD: 135, EUR: 90, NZD: 165, ZAR: 1300 },
  },
  monthlyServices: {
    hosting: { USD: 15, GBP: 12, AUD: 23, CAD: 20, EUR: 14, NZD: 25, ZAR: 199 },
    care: { USD: 49, GBP: 39, AUD: 75, CAD: 65, EUR: 45, NZD: 85, ZAR: 649 },
    seo: { USD: 199, GBP: 149, AUD: 299, CAD: 269, EUR: 185, NZD: 329, ZAR: 2499 },
  },
};

const packages = packageDefinitions.map((definition) => ({
  ...definition,
  prices: pricing.packages[definition.name],
}));

export const currencies = pricing.currencies;
export function formatPrice(amount, currency) {
  return `${currency.symbol}${amount.toLocaleString("en-US")}`;
}

export default packages;
