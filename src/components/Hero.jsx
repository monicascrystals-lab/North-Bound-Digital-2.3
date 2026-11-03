import ProjectThumbnails from "./ProjectThumbnails.jsx";

const backgroundVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260723_145606_ab143199-b593-4941-bb1b-9afca215416b.mp4";

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex="-1"
        src={backgroundVideo}
      />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow reveal">NORTHBOUND DIGITAL</p>
          <h1 className="reveal reveal-delay" id="hero-title">
            Websites Built To Move Your Business Forward.
          </h1>
          <p className="hero-description reveal reveal-late">
            Professional, modern websites designed to help businesses stand
            out, build trust and turn visitors into customers.
          </p>
          <div className="hero-actions reveal reveal-late">
            <a className="button button-primary" href="#portfolio">
              View My Work
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#contact">
              Request a Website
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
      <ProjectThumbnails />
      <a className="scroll-cue" href="#about">
        Scroll to explore
      </a>
    </section>
  );
}

export default Hero;
