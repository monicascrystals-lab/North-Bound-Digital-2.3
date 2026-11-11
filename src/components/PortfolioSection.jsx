import { useState } from "react";

import brightspark1 from "../assets/portfolio/brightspark/brightspark-1.png";
import brightspark2 from "../assets/portfolio/brightspark/brightspark-2.png";
import brightspark3 from "../assets/portfolio/brightspark/brightspark-3.png";
import brightspark4 from "../assets/portfolio/brightspark/brightspark-4.png";
import brightspark5 from "../assets/portfolio/brightspark/brightspark-5.png";
import brightspark6 from "../assets/portfolio/brightspark/brightspark-6.png";

import SectionHeading from "./SectionHeading.jsx";

const brightSparkProject = {
  title: "BrightSpark Electrical",
  type: "Starter Package • Concept Project",
  images: [
    brightspark1,
    brightspark2,
    brightspark3,
    brightspark4,
    brightspark5,
    brightspark6,
  ],
};
function PortfolioSection() {
  const [showBrightSpark, setShowBrightSpark] = useState(false);
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
<div className="portfolio-project">
  <div className="portfolio-project-info">
    <p className="portfolio-label">{brightSparkProject.type}</p>
    <h3>{brightSparkProject.title}</h3>
    <p>
      A responsive one-page website concept created for a local electrical
      services business.
    </p>
  </div>

  <div className="portfolio-card">
  <img
    src={brightSparkProject.images[0]}
    alt="BrightSpark Electrical website preview"
    className="portfolio-cover"
  />

  <div className="portfolio-card-content">
    <p className="portfolio-label">{brightSparkProject.type}</p>
    <h3>{brightSparkProject.title}</h3>

    <p>
      A responsive one-page website concept created for a local electrical
      services business.
    </p>

    <button
  type="button"
  className="portfolio-view-button"
  onClick={() => setShowBrightSpark(true)}
>
  View Project
</button>
  </div>
</div>
</div> {showBrightSpark && (
  <div className="portfolio-modal">
    <div className="portfolio-modal-content">
      <button
        type="button"
        className="portfolio-modal-close"
        onClick={() => setShowBrightSpark(false)}
      >
        ×
      </button>

      <h3>{brightSparkProject.title}</h3>

      <div className="portfolio-modal-gallery">
        {brightSparkProject.images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`BrightSpark Electrical website screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
)}

 </div>
    </section>
  );
}

export default PortfolioSection;
