import { certificates } from "../data/certificates";

export default function Certificates() {
  return (
    <section
      id="certifications"
      className="certificates-section"
    >
      <h2 className="certificates-heading">
        Certifications
      </h2>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article
            key={certificate.id}
            className="certificate-card"
          >
            <span className="certificate-year">
              {certificate.year}
            </span>

            <h3>{certificate.title}</h3>

            <p>{certificate.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}