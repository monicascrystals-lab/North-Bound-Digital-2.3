import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import brightspark1 from "../assets/portfolio/brightspark/brightspark-1.png";
import brightspark2 from "../assets/portfolio/brightspark/brightspark-2.png";
import brightspark3 from "../assets/portfolio/brightspark/brightspark-3.png";
import brightspark4 from "../assets/portfolio/brightspark/brightspark-4.png";
import brightspark5 from "../assets/portfolio/brightspark/brightspark-5.png";
import brightspark6 from "../assets/portfolio/brightspark/brightspark-6.png";

import stillnsage1 from "../assets/portfolio/stillandsage/stillnsage-1.png";
import stillnsage2 from "../assets/portfolio/stillandsage/stillnsage-2.png";
import stillnsage3 from "../assets/portfolio/stillandsage/stillnsage-3.png";
import stillnsage4 from "../assets/portfolio/stillandsage/stillnsage-4.png";
import stillnsage5 from "../assets/portfolio/stillandsage/stillnsage-5.png";
import stillnsage6 from "../assets/portfolio/stillandsage/stillnsage-6.png";
import stillnsage7 from "../assets/portfolio/stillandsage/stillnsage-7.png";
import stillnsage8 from "../assets/portfolio/stillandsage/stillnsage-8.png";
import stillnsage9 from "../assets/portfolio/stillandsage/stillnsage-9.png";
import stillnsage10 from "../assets/portfolio/stillandsage/stillnsage-10.png";
import stillnsage11 from "../assets/portfolio/stillandsage/stillnsage-11.png";

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

const stillAndSageProject = {
  title: "Still & Sage Wellness Studio",
  type: "Essential Package • Concept Project",
  images: [
    stillnsage1,
    stillnsage2,
    stillnsage3,
    stillnsage4,
    stillnsage5,
    stillnsage6,
    stillnsage7,
    stillnsage8,
    stillnsage9,
    stillnsage10,
    stillnsage11,
  ],
};

function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(null);
  const openerRef = useRef(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!activeProject) {
      openerRef.current?.focus();
      return undefined;
    }

    const appRoot = document.getElementById("root");
    appRoot?.setAttribute("inert", "");
    appRoot?.setAttribute("aria-hidden", "true");
    closeButtonRef.current?.focus();

    return () => {
      appRoot?.removeAttribute("inert");
      appRoot?.removeAttribute("aria-hidden");
    };
  }, [activeProject]);

  function openProject(project, event) {
    openerRef.current = event.currentTarget;
    setActiveProject(project);
  }

  function closeProject() {
    setActiveProject(null);
  }

  function handleModalKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeProject();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = Array.from(
      modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? [],
    );

    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }

    const firstFocusable = focusable[0];
    const lastFocusable = focusable[focusable.length - 1];

    if (
      event.shiftKey
        ? document.activeElement === firstFocusable
        : document.activeElement === lastFocusable
    ) {
      event.preventDefault();
      (event.shiftKey ? lastFocusable : firstFocusable).focus();
    }
  }
  
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
  onClick={(event) => openProject(brightSparkProject, event)}
>
  View Project
</button>
  </div>
</div>

<div className="portfolio-card">
  <img
    src={stillAndSageProject.images[0]}
    alt="Still & Sage Wellness Studio website preview"
    className="portfolio-cover"
  />

  <div className="portfolio-card-content">
    <p className="portfolio-label">{stillAndSageProject.type}</p>
    <h3>{stillAndSageProject.title}</h3>

    <p>
      A calm, multi-page wellness website concept with refined branding,
      responsive design and interactive React elements.
    </p>

    <button
      type="button"
      className="portfolio-view-button"
      onClick={(event) => openProject(stillAndSageProject, event)}
    >
      View Project
    </button>
  </div>
</div>

        </div>
      </div>

      {activeProject &&
        createPortal(
          <div
            ref={modalRef}
            className="portfolio-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
            onKeyDown={handleModalKeyDown}
          >
            <div className="portfolio-modal-content">
              <button
                ref={closeButtonRef}
                type="button"
                className="portfolio-modal-close"
                aria-label="Close project preview"
                onClick={closeProject}
              >
                ×
              </button>

              <h3 id="portfolio-modal-title">{activeProject.title}</h3>

              <div className="portfolio-modal-gallery">
                {activeProject.images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${activeProject.title} website screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}

export default PortfolioSection;
