
import EchoText from "./reactbits/EchoText";


const principles = [
  {
    number: "01",
    title: "Look credible",
    description: "Make your business feel established from the first click.",
  },
  {
    number: "02",
    title: "Be understood",
    description: "Clear structure, clear messaging and no unnecessary confusion.",
  },
  {
    number: "03",
    title: "Move people forward",
    description: "Guide visitors towards the action that matters most.",
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
            Websites built to move your business forward, strengthen your
            presence, and put you firmly on the map.
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
