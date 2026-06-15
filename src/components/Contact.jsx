import { contactInfo } from "../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <h2 className="contact-heading">
        Let's Work Together
      </h2>

      <p className="contact-text">
        Interested in collaborating, discussing a
        project, or simply saying hello? Feel free
        to reach out.
      </p>

      <div className="contact-links">
        <a
          href={`mailto:${contactInfo.email}`}
          className="contact-btn"
        >
          Send Email
        </a>

        <a
          href={contactInfo.github}
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          GitHub
        </a>

        <a
          href={contactInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}