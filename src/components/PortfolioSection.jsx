import SectionHeading from "./SectionHeading.jsx";

function PortfolioSection() {
  return (
    <section
      className="portfolio-section section-pad"
      id="portfolio"
      aria-labelledby="portfolio-title"
    >
      <div className="content-width">
        <SectionHeading
          headingId="portfolio-title"
          kicker="Selected work"
          title="Good work speaks for itself."
          description="A thoughtful website starts with a clear picture of where you want your business to go."
        />
        <div className="portfolio-empty">
          <span className="portfolio-mark" aria-hidden="true">N</span>
          <div>
            <p className="portfolio-label">Northbound Digital portfolio</p>
            <h3>New projects are on the way.</h3>
            <p>
              Get in touch to talk through your idea and what a website could
              do for your business.
            </p>
          </div>
          <a className="text-link" href="#contact">
            Start a conversation <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
