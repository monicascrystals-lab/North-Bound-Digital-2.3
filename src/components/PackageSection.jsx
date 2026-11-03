import { useState } from "react";
import packages, { currencies } from "../data/packages.js";
import SectionHeading from "./SectionHeading.jsx";

function formatPrice(amount, symbol) {
  return `${symbol}${amount.toLocaleString("en-US")}`;
}

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
            currency.symbol,
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
          onClick={() => onChoose(`${details.name} Package`)}
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
            <p className="package-includes-label">Everything included</p>
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

function PackageSection({ onChoosePackage }) {
  const [currencyCode, setCurrencyCode] = useState("ZAR");
  const currency =
    currencies.find((item) => item.code === currencyCode) ?? currencies[0];

  return (
    <section
      className="packages-section section-pad"
      id="packages"
      aria-labelledby="packages-title"
    >
      <div className="content-width">
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
            onChange={(event) => setCurrencyCode(event.target.value)}
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
        <div className="domain-note">
          <div>
            <p className="domain-note-label">Domain information</p>
            <p>
              <strong>South Africa:</strong> Domain connection is included.
              First-year .co.za domain registration may be included where
              specified.
            </p>
          </div>
          <div>
            <p>
              <strong>International:</strong> Domain connection is included.
              Registration costs vary by extension, including .com, .co.uk,
              .com.au, .co.nz and .ca. Domain registration is not automatically
              included in every package.
            </p>
          </div>
        </div>
        <div className="care-card">
          <div>
            <p className="section-kicker">Optional ongoing support</p>
            <h3>Website Care &amp; Hosting</h3>
            <p>
              Optional ongoing hosting and website care to help keep your
              website secure, maintained and running smoothly.
            </p>
          </div>
          <div className="care-details">
            <p className="care-price">
              {currency.code === "ZAR"
                ? "From R250/month"
                : "Plans available — pricing depends on website requirements"}
            </p>
            <p className="care-includes">
              Can include website hosting, SSL monitoring, website backups,
              basic technical maintenance, small content updates and general
              support.
            </p>
          </div>
        </div>
        <div className="custom-quote">
          <div>
            <h3>Need Something Different?</h3>
            <p>
              If your website requires ecommerce, booking systems, payment
              processing, advanced integrations or custom functionality, I can
              create a custom solution for your business.
            </p>
          </div>
          <button
            className="button button-secondary-dark"
            type="button"
            onClick={() => onChoosePackage("Custom Website")}
          >
            Request a Custom Quote <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PackageSection;
