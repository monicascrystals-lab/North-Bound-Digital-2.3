import { useState } from "react";
import packages, { currencies, formatPrice, pricing } from "../data/packages.js";
import SectionHeading from "./SectionHeading.jsx";

const packageFormOptions = {
  Essential: "Essential website (up to 3 pages)",
  Business: "Business website (up to 6 pages)",
  Professional: "Professional website (up to 10 pages)",
};

function PackageCard({ details, currency, onChoose }) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `features-${details.name.toLowerCase()}`;

  return (
    <article
      className={`package-card${details.badge ? " featured" : ""}`}
    >
      {details.badge && <span className="package-badge">{details.badge}</span>}
      <div className="package-card-content">
        <p className="package-name">{details.name}</p>
        <p className="package-description">{details.description}</p>
        <p className="package-price">
          {formatPrice(
            details.prices[currency.code],
            currency,
          )}
          <span> starting price</span>
        </p>
        <p className="package-pages">{details.pages}</p>
        <ul className="package-highlights">
          {details.highlights.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <button
          className="button button-primary package-choose"
          type="button"
          onClick={() => onChoose(
            packageFormOptions[details.name],
            details.name,
            formatPrice(details.prices[currency.code], currency),
            currency.code,
          )}
        >
          Choose {details.name} <span aria-hidden="true">→</span>
        </button>
        <button
          className="package-expand"
          type="button"
          aria-expanded={expanded}
          aria-controls={detailsId}
          onClick={() => setExpanded((open) => !open)}
        >
          {expanded ? "Show Less" : "View Everything Included"}
          <span className={`expand-chevron${expanded ? " turned" : ""}`} aria-hidden="true">
            ⌄
          </span>
        </button>
        <div
          className={`package-details${expanded ? " expanded" : ""}`}
          id={detailsId}
          aria-hidden={!expanded}
          inert={!expanded}
        >
          <div className="package-details-inner">
            <p className="package-includes-label">{details.includesHeading}</p>
            <ul className="check-list">
              {details.features.map((feature, index) => (
                <li key={`${details.name}-${index}`}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function PackageSection({
  onChoosePackage,
  currencyCode,
  onCurrencyChange,
}) {
  const currency = currencies.find((item) => item.code === currencyCode) ?? currencies[0];

  return (
    <section
      className="packages-section section-pad"
      id="packages"
      aria-labelledby="packages-title"
    >
      <div className="content-width packages-content">
        <SectionHeading
          headingId="packages-title"
          kicker="Ways to work together"
          title="Website Packages"
          description="Professional website packages designed for businesses at every stage. Choose the option that best fits your needs, or contact me for a custom solution."
        />
        <div className="currency-control">
          <label htmlFor="currency-select">Select your currency</label>
          <select
            id="currency-select"
            value={currencyCode}
            onChange={(event) => onCurrencyChange(event.target.value)}
          >
            {currencies.map((option) => (
              <option value={option.code} key={option.code}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="package-grid">
          {packages.map((details) => (
            <PackageCard
              key={details.name}
              details={details}
              currency={currency}
              onChoose={onChoosePackage}
            />
          ))}
        </div>
        <p className="package-support-note">
          Package page limits refer to total individual pages, not sections.
          Complex integrations, custom application development and extensive
          CMS functionality are quoted separately if they exceed the agreed scope.
        </p>
        <div className="pricing-notes">
          <p>
            Prices shown are starting prices. Final pricing may vary depending
            on project requirements, functionality, content, integrations and
            additional features.
          </p>
          <p>
            A 50% deposit is required before work begins. The remaining 50% is
            payable before the website is launched or handed over.
          </p>
        </div>
        <div className="custom-quote">
          <div>
            <p className="section-kicker">Custom solution</p>
            <h3>Need something more complex?</h3>
            <p>
              Request a custom quote for advanced integrations, custom
              applications, extensive CMS functionality or services beyond the listed packages.
            </p>
          </div>
          <button
            type="button"
            className="button button-primary"
            onClick={() => onChoosePackage(
              "Custom quote / complex project",
              "Custom",
              "Custom quotation",
              currency.code,
            )}
          >
            Request a Custom Quote <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="pricing-subsections">
          <section className="optional-services" aria-labelledby="optional-services-title">
            <p className="section-kicker">Add to your package</p>
            <h3 id="optional-services-title">Optional Website Services</h3>
            <div className="pricing-service-grid">
              {[
                ["Additional website page", "additionalPage", "Starting from"],
                ["Website copywriting", "copywriting", "Starting from"],
                ["Logo design", "logo", "Starting from"],
                ["Booking system integration", "booking", "Starting from"],
                ["Google Business Profile setup", "googleBusiness", "Starting from"],
                ["Advanced integrations", null, "Custom quotation"],
              ].map(([name, key, prefix]) => (
                <article className="pricing-service-card" key={name}>
                  <h4>{name}</h4>
                  <p>
                    {key
                      ? `${prefix} ${formatPrice(pricing.optionalServices[key][currency.code], currency)}${key === "copywriting" ? " per page" : ""}`
                      : prefix}
                  </p>
                </article>
              ))}
            </div>
            <p className="pricing-exclusions">
              Third-party subscriptions, premium assets, booking software licences
              and external service fees are excluded unless explicitly included in a quotation.
            </p>
          </section>

          <section className="recurring-services" aria-labelledby="recurring-services-title">
            <p className="section-kicker">Monthly website care</p>
            <h3 id="recurring-services-title">Recurring Website Services</h3>
            <p className="recurring-intro">
              These optional services are billed monthly and are not included in
              one-time development packages unless explicitly agreed.
            </p>
            <div className="pricing-service-grid monthly-grid">
              <article className="pricing-service-card">
                <h4>Managed Hosting</h4>
                <p className="care-price">
                  From {formatPrice(pricing.monthlyServices.hosting[currency.code], currency)} / month
                </p>
                <ul className="check-list compact-list">
                  <li>Website hosting</li>
                  <li>SSL certificate management</li>
                  <li>Basic uptime monitoring</li>
                  <li>Hosting-related technical support</li>
                </ul>
              </article>
              <article className="pricing-service-card care-featured">
                <span className="service-recommended">Recommended</span>
                <h4>Website Care</h4>
                <p className="care-price">
                  From {formatPrice(pricing.monthlyServices.care[currency.code], currency)} / month
                </p>
                <ul className="check-list compact-list">
                  <li>Everything in Managed Hosting</li>
                  <li>Applicable software and security updates</li>
                  <li>Website backups and recovery support</li>
                  <li>Routine health checks</li>
                  <li>Minor content updates within an agreed monthly allowance</li>
                  <li>Ongoing technical support</li>
                </ul>
              </article>
              <article className="pricing-service-card">
                <h4>Ongoing SEO</h4>
                <p className="care-price">
                  From {formatPrice(pricing.monthlyServices.seo[currency.code], currency)} / month
                </p>
                <p>
                  Ongoing optimisation, technical improvements, content
                  recommendations and performance monitoring within an agreed scope.
                  No specific search rankings or results are guaranteed.
                </p>
              </article>
            </div>
            <p className="pricing-exclusions">
              Support is limited to a reasonable monthly allowance agreed before
              work begins. Extensive updates, new pages, redesigns and additional
              functionality are quoted separately. Monthly billing terms apply.
            </p>
          </section>

          <section className="pricing-faq" aria-labelledby="pricing-faq-title">
            <p className="section-kicker">Before you enquire</p>
            <h3 id="pricing-faq-title">Pricing Information</h3>
            <div className="faq-grid">
              {[
                ["Prices and quotations", "All advertised prices are starting prices. USD is the default; fixed regional prices are available via the currency selector. Final quotations depend on requirements, functionality and complexity."],
                ["Payment terms", "A 50% deposit is required before development begins. The remaining 50% is payable before public launch."],
                ["Domains and hosting", "Domain registration and renewal are billed separately. Hosting is separate unless included in a written quotation. SSL/HTTPS setup is included in development packages."],
                ["Client responsibilities", "Clients provide their own content, branding and images unless additional services are purchased, plus access to domains and relevant third-party services."],
                ["Revisions and support", "Each package includes its stated revision rounds. Additional revisions and out-of-scope changes are quoted separately. Included support covers defects in the original agreed scope."],
                ["Ownership and SEO", "After full payment, clients retain ownership of their website and domain, subject to third-party licences. SEO work does not guarantee rankings. Third-party platforms remain subject to their own terms and fees."],
                ["Taxes", "Advertised prices exclude applicable taxes unless stated in the final quotation or invoice under the relevant tax requirements for the client and market."],
              ].map(([title, text]) => (
                <article className="faq-item" key={title}>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

      </div>
    </section>
  );
}

export default PackageSection;
