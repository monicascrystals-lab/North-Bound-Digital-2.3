function PlaceholderSection({ id, kicker, title, note, contact = false }) {
  return (
    <section
      className={`placeholder-section${contact ? " contact-section" : ""}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="section-inner">
        <p className="section-kicker">{kicker}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <p className="section-note">{note}</p>
      </div>
    </section>
  );
}

export default PlaceholderSection;
