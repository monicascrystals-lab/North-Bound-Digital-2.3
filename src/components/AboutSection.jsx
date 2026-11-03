import SectionHeading from "./SectionHeading.jsx";

const principles = [
  {
    number: "01",
    title: "Clarity first",
    text: "Make it easy for visitors to understand what you do and what to do next.",
  },
  {
    number: "02",
    title: "Designed for people",
    text: "Create a considered experience across phones, tablets and desktops.",
  },
  {
    number: "03",
    title: "Built to grow",
    text: "Give your business a flexible foundation that can grow with your needs.",
  },
];

function AboutSection() {
  return (
    <section
      className="about-section section-pad"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="content-width">
        <div className="about-layout">
          <SectionHeading
            headingId="about-title"
            kicker="A little about us"
            title="Good design should take your business places."
            description="Northbound Digital creates professional websites that help businesses show up with confidence and make a stronger first impression."
          />
          <div className="about-aside">
            <p>
              Every project starts with your goals. The result is a clear,
              thoughtful website shaped around your business and the people you
              want to reach.
            </p>
            <a className="text-link" href="#services">
              Explore our services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
