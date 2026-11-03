import { useState } from "react";

const images = [
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260723_152456_65bd59eb-4e9c-4be8-82eb-2aadd5b91e03.png&w=1920&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260723_152522_96817909-a45f-4d68-9509-f399dda97419.png&w=1920&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260723_152537_150da197-35c4-483c-bd9e-ebcf9335a640.png&w=1920&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260723_152546_2e114d2c-293d-4c42-89e5-da7eddcfbfa3.png&w=1920&q=85",
];

function ProjectThumbnails() {
  const [activeImage, setActiveImage] = useState(2);

  function showPrevious() {
    setActiveImage((active) => (active - 1 + images.length) % images.length);
  }

  function showNext() {
    setActiveImage((active) => (active + 1) % images.length);
  }

  return (
    <div className="project-controls" aria-label="Featured project images">
      <div className="project-control-top">
        <div className="project-arrows">
          <button
            className="gallery-arrow"
            type="button"
            aria-label="Previous project image"
            onClick={showPrevious}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m12 19-7-7 7-7M19 12H5" />
            </svg>
          </button>
          <button
            className="gallery-arrow"
            type="button"
            aria-label="Next project image"
            onClick={showNext}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14m-7-7 7 7-7 7" />
            </svg>
          </button>
        </div>
        <span className="project-counter" aria-live="polite">
          {String(activeImage + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")}
        </span>
      </div>
      <div className="project-thumbnails" aria-label="Choose a project image">
        {images.map((image, index) => (
          <button
            className={`project-thumbnail${index === activeImage ? " active" : ""}`}
            key={image}
            type="button"
            aria-label={`Show project image ${index + 1}`}
            aria-pressed={index === activeImage}
            onClick={() => setActiveImage(index)}
          >
            <img src={image} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectThumbnails;
