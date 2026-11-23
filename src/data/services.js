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
    priceLine: "Starting from R3,500 / US$950",
    priceDetails: [
      "Essential R3,500 / US$950 · Business R6,900 / US$1,850 · Professional R12,500 / US$3,500",
    ],
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
    priceLine: "Starting from R3,500 / US$950 (up to 3 pages)",
    priceDetails: [
      "Larger redesigns follow Business and Professional package pricing.",
      "Mobile-only fix for an existing website: from R2,000 / US$400",
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
    pricingOptions: [
      {
        name: "SEO Setup",
        priceZA: "R1,500",
        priceInternational: "US$300",
        includedItems: [
          "Page titles",
          "Meta descriptions",
          "Heading structure",
          "Image alt text",
          "Sitemap setup",
          "Google Search Console setup",
        ],
        note:
          "Covers up to 5 pages; extra pages R150 / US$30 each. Does not include keyword research or ranking guarantees.",
      },
      {
        name: "Domain & Hosting Setup",
        priceZA: "R1,500",
        priceInternational: "US$300",
        includedItems: [
          "Domain connection",
          "DNS setup",
          "Hosting configuration",
          "SSL / HTTPS setup",
          "Website deployment",
          "Basic launch checks",
        ],
      },
      {
        name: "SEO + Launch Setup bundle",
        priceLine: "R2,500 / US$500",
      },
    ],
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
        name: "Website Care Plan",
        priceZA: "R750/month",
        priceInternational: "US$150/month",
        includedItems: [
          "Website backups",
          "Basic technical maintenance",
          "Minor bug fixes",
          "Link and form checks",
          "Troubleshooting support",
          "Up to 1 hour of small content updates per month",
          "Replies within 2 business days",
        ],
      },
      {
        name: "Once-off Content Update",
        priceZA: "R500",
        priceInternational: "US$100",
        includedItems: [
          "Up to 3 small changes (text, images, prices or contact details)",
        ],
        note: "Larger updates are quoted according to scope.",
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
        name: "Logo Refresh",
        priceZA: "R1,500",
        priceInternational: "US$300",
        description: "Includes:",
        includedItems: [
          "1 refined version of your existing logo",
          "1 revision round",
          "Website-ready files",
        ],
      },
      {
        name: "Logo Redesign",
        priceZA: "R2,500",
        priceInternational: "US$500",
        description: "Includes:",
        includedItems: [
          "2 new concepts based on your existing brand",
          "2 revision rounds",
          "Simplified variations",
          "Website-ready files",
        ],
      },
      {
        name: "New Custom Logo",
        priceZA: "R3,000",
        priceInternational: "US$600",
        description: "Includes:",
        includedItems: [
          "2 original concepts",
          "2 revision rounds",
          "Colour and typography direction",
          "Website-ready files",
        ],
      },
      {
        name: "Logo + Mini Brand Kit",
        priceZA: "R5,500",
        priceInternational: "US$1,100",
        description: "Includes:",
        includedItems: [
          "3 concepts",
          "2 revision rounds",
          "Primary and secondary logo",
          "Icon/favicon",
          "Colour palette",
          "Typography recommendations",
          "Black and white versions",
          "Transparent PNG, JPG and SVG files",
          "Basic brand usage guide",
        ],
      },
      {
        name: "Premium Mini Brand Kit",
        priceZA: "R8,500",
        priceInternational: "US$1,700",
        description: "Includes:",
        includedItems: [
          "3 concepts",
          "3 revision rounds",
          "Everything in the Mini Brand Kit",
          "Social media templates",
          "Social profile graphics",
          "Business card design",
          "Email signature",
          "Expanded brand guide",
        ],
      },
    ],
    icon: "spark",
  },
];

export default services;
