// CHANGE SERVICES HERE
const services = [
  {
    title: "One-Page Business Websites",
    shortDescription:
      "A focused website that presents your business, services, contact details and call-to-action clearly.",
    fullDescription:
      "Ideal for smaller businesses, startups, personal brands or campaigns that need a simple but professional online presence.",
    includedItems: [
      "Responsive design",
      "Contact information",
      "Clear calls-to-action",
      "Mobile optimisation",
      "Basic SEO structure",
    ],
    priceZA: "R3,500",
    priceInternational: "US$950",
    icon: "page",
  },
  {
    title: "Multi-Page Business Websites",
    shortDescription:
      "Professional websites with dedicated pages for your business, services, portfolio and contact information.",
    fullDescription:
      "Ideal for businesses that need more space to explain their services, build trust and provide customers with detailed information.",
    includedItems: [
      "Home page",
      "About page",
      "Services pages",
      "Portfolio or gallery",
      "Contact page",
      "Additional custom pages",
    ],
    priceZA: "R5,500",
    priceInternational: "US$1,450",
    icon: "layers",
  },
  {
    title: "Website Redesigns",
    shortDescription:
      "Modernise an existing website with improved design, structure, performance and mobile responsiveness.",
    fullDescription:
      "Refresh an outdated website while keeping the important content and business identity already in place.",
    includedItems: [
      "Improved visual design",
      "Better mobile layout",
      "Clearer navigation",
      "Stronger calls-to-action",
      "Improved user experience",
      "Performance improvements",
    ],
    priceZA: "R3,500",
    priceInternational: "US$650",
    icon: "refresh",
  },
  {
    title: "Mobile-Friendly Website Design",
    shortDescription:
      "Websites designed to work smoothly across mobile phones, tablets, laptops and desktops.",
    fullDescription:
      "Responsive layouts help visitors get a professional experience regardless of the device they are using.",
    includedItems: [],
    includedMessage: "Included with website projects",
    priceZA: "R1,500",
    priceInternational: "US$150",
    priceNote: "For standalone responsive optimisation of an existing website.",
    icon: "devices",
  },
  {
    title: "Basic SEO Setup",
    shortDescription:
      "A strong technical SEO foundation to help search engines understand your website.",
    fullDescription: "Includes basic on-page SEO setup such as:",
    includedItems: [
      "Page titles",
      "Meta descriptions",
      "Proper heading structure",
      "Image alt text",
      "Clean page structure",
      "Sitemap setup",
      "Google Search Console setup where required",
    ],
    priceZA: "R1,500",
    priceInternational: "US$150",
    icon: "search",
  },
  {
    title: "Domain & Hosting Setup",
    shortDescription:
      "Help getting your website connected to your domain and published online.",
    fullDescription: "Setup can include:",
    includedItems: [
      "Domain connection",
      "DNS setup",
      "Hosting configuration",
      "SSL / HTTPS setup",
      "Website deployment",
      "Basic launch checks",
    ],
    priceZA: "R1,500",
    priceInternational: "US$150",
    priceNote:
      "Domain registration and hosting provider fees are charged separately where applicable.",
    icon: "globe",
  },
  {
    title: "Website Maintenance & Support",
    shortDescription:
      "Ongoing help to keep your website updated, secure and running smoothly.",
    fullDescription:
      "Maintenance can be quoted separately or included in a Website Care plan.",
    includedItems: [
      "Small content changes",
      "Image updates",
      "Contact-detail changes",
      "Website backups",
      "Basic technical maintenance",
      "General support",
    ],
    priceZA: "R750/month",
    priceInternational: "US$75/month",
    icon: "support",
  },
  {
    title: "Content & Image Updates",
    shortDescription:
      "Keep your website accurate and current as your business changes.",
    fullDescription: "Update website content to reflect your latest information:",
    includedItems: [
      "Updating service information",
      "Replacing images",
      "Changing prices",
      "Updating staff or company information",
      "Adding new sections or content",
      "Updating contact details",
    ],
    priceZA: "R500",
    priceInternational: "US$50",
    priceNote: "Larger content updates are quoted according to scope.",
    icon: "edit",
  },
  {
    title: "Logo Design & Redesign",
    shortDescription:
      "Clean, professional logo concepts designed to give your business a stronger visual identity.",
    fullDescription: "Logo work can include:",
    includedItems: [
      "New logo concepts",
      "Existing logo refinement",
      "Simplified logo variations",
      "Colour direction",
      "Typography direction",
      "Website-ready logo files",
    ],
    pricingOptions: [
      {
        name: "Logo Refresh",
        priceZA: "R1,500",
        priceInternational: "US$150",
      },
      {
        name: "Logo Redesign",
        priceZA: "R2,500",
        priceInternational: "US$250",
      },
      {
        name: "New Custom Logo",
        priceZA: "R3,000",
        priceInternational: "US$300",
      },
      {
        name: "Logo + Mini Brand Kit",
        priceZA: "R5,500",
        priceInternational: "US$550",
        description: "May include:",
        includedItems: [
          "Primary logo",
          "Secondary logo",
          "Icon/favicon",
          "Colour palette",
          "Typography recommendations",
          "Black and white logo versions",
          "Transparent PNG, JPG and SVG/vector files",
          "Basic brand usage guide",
        ],
      },
      {
        name: "Premium Mini Brand Kit",
        priceZA: "R7,500",
        priceInternational: "US$750",
        description: "May additionally include:",
        includedItems: [
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
