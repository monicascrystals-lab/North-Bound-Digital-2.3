// CHANGE SERVICES HERE
const services = [
  {
    title: "WEBSITE DESIGN",
    shortDescription:
      "Professional, mobile-friendly websites built for your business, from a simple one-page site to a fully custom 10-page build.",
    includedItems: [
      "Up to 3, 6 or 10 pages depending on your package",
      "Responsive design on mobile, tablet and desktop",
      "Contact forms, WhatsApp and click-to-call buttons",
      "SSL, Google Search Console and sitemap setup",
      "Revision rounds and post-launch support included",
    ],
    priceKey: "packages",
    packageLink: { label: "View Packages", href: "#packages" },
    icon: "layers",
  },
  {
    title: "WEBSITE REDESIGN",
    shortDescription:
      "Give an outdated website a fresh, modern look while keeping the content and brand your customers already know.",
    includedItems: [
      "Improved visual design",
      "Mobile-friendly layout",
      "Clearer navigation",
      "Stronger calls-to-action",
      "Performance improvements",
    ],
    priceDetails: [
      "Larger redesigns follow Business and Professional package pricing.",
      "Pricing is confirmed after a scope assessment.",
    ],
    priceNote:
      "Content supplied by the client. Content migration beyond the agreed pages is quoted separately.",
    icon: "refresh",
  },
  {
    title: "SEO & LAUNCH SETUP",
    shortDescription:
      "Help search engines find your website and get it connected, secure and live.",
    availableSeparately: true,
    priceLine: "Included in website development packages",
    priceNote:
      "Already included in all website packages. Domain registration and hosting provider fees are charged separately where applicable.",
    icon: "search",
  },
  {
    title: "WEBSITE CARE & UPDATES",
    shortDescription:
      "Keep your website secure, up to date and running smoothly after launch.",
    availableSeparately: true,
    pricingOptions: [
      {
        name: "Website Care",
        priceKey: "care",
        recurring: true,
        includedItems: [
          "Website backups",
          "Basic technical maintenance",
          "Minor bug fixes",
          "Link and form checks",
          "Troubleshooting support",
          "Minor content updates within an agreed monthly allowance",
          "Ongoing technical support",
        ],
      },
      {
        name: "Managed Hosting",
        priceKey: "hosting",
        recurring: true,
        includedItems: [
          "Website hosting",
          "SSL certificate management",
          "Basic uptime monitoring",
          "Hosting-related technical support",
        ],
      },
    ],
    priceNote:
      "Post-launch support in your website package covers technical fixes only. A care plan continues your support after it ends.",
    icon: "support",
  },
  {
    title: "LOGO & BRANDING",
    shortDescription:
      "Clean, professional logo concepts designed to give your business a stronger visual identity.",
    availableSeparately: true,
    pricingOptions: [
      {
        name: "Logo design",
        optionalKey: "logo",
        description: "Starting from the central optional-service price.",
        includedItems: [
          "Custom scope and deliverables confirmed by quotation",
          "Website-ready files",
        ],
      },
    ],
    icon: "spark",
  },
];

export default services;
