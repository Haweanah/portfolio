import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
    >
      <h2 className="experience-heading">
        Experience
      </h2>

      <div className="experience-grid">
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className="experience-card"
          >
            <span className="experience-period">
              {experience.period}
            </span>

            <h3>{experience.role}</h3>

            <h4>{experience.company}</h4>

            <p>{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}