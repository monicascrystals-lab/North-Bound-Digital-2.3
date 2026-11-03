function SectionHeading({
  headingId,
  kicker,
  title,
  description,
  centered = false,
}) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      <p className="section-kicker">{kicker}</p>
      <h2 id={headingId}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionHeading;
