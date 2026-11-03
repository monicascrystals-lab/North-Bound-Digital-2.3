import ParticleText from './reactbits/ParticleText';
import { useState } from "react";
import services from "../data/services.js";
import SectionHeading from "./SectionHeading.jsx";

const iconPaths = {
  page: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
  refresh: <><path d="M20 7v5h-5M4 17v-5h5" /><path d="M5.6 9a7 7 0 0 1 11.6-2L20 12M4 12l2.8 5a7 7 0 0 0 11.6-2" /></>,
  devices: <><rect x="3" y="4" width="14" height="11" rx="1.5" /><path d="M7 20h6M10 15v5" /><rect x="18" y="8" width="4" height="10" rx="1" /></>,
  search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5M8 11h5M10.5 8.5v5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M4 13h3v6H6a2 2 0 0 1-2-2v-4ZM20 13h-3v6h1a2 2 0 0 0 2-2v-4ZM12 20h3" /></>,
  edit: <><path d="m14 5 5 5M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" /><path d="M13 20h7" /></>,
  spark: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></>,
};

function ServiceIcon({ name }) {
  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {iconPaths[name]}
      </svg>
    </span>
  );
}

function ServicesSection() {
  const [expandedServices, setExpandedServices] = useState([]);

  function toggleService(title) {
    setExpandedServices((expanded) =>
      expanded.includes(title)
        ? expanded.filter((item) => item !== title)
        : [...expanded, title],
    );
  }

  return (
    <section
      className="services-section section-pad"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="content-width">
        <SectionHeading
          headingId="services-title"
          kicker="What we do"
          title={
  <ParticleText
    text="Our Services"
    color="#15324A"
    highlightColor="#2A9D8F"
    intro="gather"
    trigger="mount"
    gatherDuration={1600}
    stagger={420}
    scatter={190}
    particleSize={2.2}
    density={4}
    weight={800}
  />
}
          description="Professional digital services designed to help your business build a strong, credible and effective online presence."
        />
        <div className="service-grid">
          {services.map((service, index) => {
            const expanded = expandedServices.includes(service.title);
            const detailsId = `service-details-${index}`;

            return (
              <article
                className={`service-card${expanded ? " expanded" : ""}`}
                key={service.title}
              >
                <ServiceIcon name={service.icon} />
                <h3>{service.title}</h3>
                <p className="service-summary">{service.shortDescription}</p>
                <div
                  className="service-details"
                  id={detailsId}
                  aria-hidden={!expanded}
                  inert={!expanded}
                >
                  <div className="service-details-inner">
                    <p>{service.fullDescription}</p>
                    {service.includedItems.length > 0 && (
                      <ul className="check-list compact-list">
                        {service.includedItems.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {service.includedMessage && (
                      <p className="service-included-message">
                        {service.includedMessage}
                      </p>
                    )}
                    {(service.priceZA || service.pricingOptions) && (
                      <div className="service-pricing">
                        <span className="service-pricing-availability">
                          Available separately; no website package required.
                        </span>
                        {service.pricingOptions ? (
                          <ul className="service-pricing-options">
                            {service.pricingOptions.map((option) => (
                              <li key={option.name}>
                                <div className="service-pricing-option">
                                  <span>{option.name}</span>
                                  <span>
                                    Starting from {option.priceZA} /{" "}
                                    {option.priceInternational}
                                  </span>
                                </div>
                                {option.description && (
                                  <p>{option.description}</p>
                                )}
                                {option.includedItems && (
                                  <ul className="service-pricing-inclusions">
                                    {option.includedItems.map((item) => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <>
                            <span className="service-pricing-label">
                              Starting from
                            </span>
                            <strong>
                              {service.priceZA} / {service.priceInternational}
                            </strong>
                          </>
                        )}
                        {service.priceNote && (
                          <p className="service-pricing-note">
                            {service.priceNote}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <button
                  className="expand-link"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={detailsId}
                  onClick={() => toggleService(service.title)}
                >
                  {expanded ? "Show less" : "Learn more"}
                  <span className="expand-chevron" aria-hidden="true">⌄</span>
                </button>
              </article>
            );
          })}
        </div>
        <div className="services-cta">
          <div>
            <h3>Need Something More Specific?</h3>
            <p>
              Every business is different. If you need a custom website feature
              or service, let’s shape a solution around your requirements.
            </p>
          </div>
          <a className="button button-primary" href="#contact">
            Discuss Your Project <span aria-hidden="true">→</span>
          </a>
        </div>
        <p className="services-pricing-disclaimer">
          Prices shown are starting prices. Final pricing may vary depending on
          project scope, requirements and third-party costs.
        </p>
      </div>
    </section>
  );
}

export default ServicesSection;
