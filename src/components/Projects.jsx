import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card"
          >
            <div className="project-image">
                <img
                src={project.image}
                alt={project.title}
                className="image"
              />
              <img
                src={project.imagedesktop}
                alt={project.title}
                className="imagedesktop"
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-pill"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}