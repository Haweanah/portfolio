import { skills } from "../data/skills";

export default function Skills() {
    const labels = {
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    ai: "AI & Data",
  };
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-grid">

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-card">

            
              <h3>{labels[category]}</h3>
            

            <div className="skill-tags">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}