
import EchoText from "./reactbits/EchoText";


const principles = [
  {
    number: "01",
    title: "Look credible",
    description:
      "Build a professional online presence that makes your business feel established and trustworthy from the first click.",
  },
  {
    number: "02",
    title: "Be understood",
    description:
      "Clear website structure and messaging that helps visitors quickly understand what your business offers.",
  },
  {
    number: "03",
    title: "Move people forward",
    description:
      "Guide visitors towards meaningful actions such as contacting you, requesting a quote or booking your service.",
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
        <div className="about-layout section-heading">
          <p className="section-kicker">Design with direction</p>

          <h2 id="about-title" className="about-title">
  <EchoText text="North is the direction of your business" />
</h2>
          
          <p className="section-description">
            Professional websites built to move your business forward, strengthen your online
            presence, and turn visitors into customers.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
