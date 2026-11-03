import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";

const contactEmail = "info@northbounddigital.co.za";
const packageOptions = [
  "Starter Package",
  "Essential Package",
  "Business Package",
  "Professional Package",
  "Website Redesign",
  "One-Page Website",
  "Ecommerce Website",
  "Custom Website",
  "Not Sure Yet",
];

function ContactSection({ selectedPackage, onPackageChange }) {
  const [formStatus, setFormStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Website enquiry from ${formData.get("name")}`;
    const message = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Website package: ${formData.get("package") || "Not selected"}`,
      "",
      "Project details:",
      formData.get("message"),
    ].join("\n");
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    setFormStatus(
      "Your email app should open with your enquiry ready to send. If it doesn't, email us directly using the address below.",
    );
    window.location.href = mailto;
  }

  return (
    <section
      className="contact-section section-pad"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="content-width">
        <div className="contact-layout">
          <div className="contact-intro">
            <SectionHeading
              headingId="contact-title"
              kicker="Your next step"
              title="Let’s move your business forward."
              description="Tell me a little about your business and what you need. We can take it from there."
            />
            <div className="contact-email-block">
              <span>Email</span>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Your name
                <input
                  autoComplete="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </label>
              <label>
                Email address
                <input
                  autoComplete="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
            </div>
            <label>
              Website Package
              <select
                name="package"
                value={selectedPackage}
                onChange={(event) => onPackageChange(event.target.value)}
              >
                <option value="">Select an option</option>
                {packageOptions.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Tell me about your project
              <textarea
                name="message"
                placeholder="What are you looking to create?"
                rows="5"
                required
              />
            </label>
            <button className="button button-primary form-submit" type="submit">
              Send an Enquiry <span aria-hidden="true">→</span>
            </button>
            <p className="form-note">
              This opens your email app so you can review and send your enquiry.
            </p>
            {formStatus && (
              <p className="form-status" role="status">
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
