import "../styles/Skills.css";

const frontend = ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "jQuery", "JSON"];
const tools = ["Git", "GitHub", "VS Code", "Jira", "Figma"];
const other = ["REST API", "Responsive Design", "Agile", "Siebel Open UI"];

function Skills() {
  return (
    <section id="skills" className="skills" data-aos="zoom-in">
      <div className="container">
        <div className="section-heading">
          <h2>Skills</h2>
          <p>Core frontend capabilities and product workflow tools I use to ship polished interfaces.</p>
        </div>

        <div className="skill-group">
          <h4>Frontend</h4>
          <div className="skill-grid">
            {frontend.map((skill) => (
              <div className="skill-card" key={skill}>{skill}</div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h4>Tools</h4>
          <div className="skill-grid">
            {tools.map((tool) => (
              <div className="skill-card" key={tool}>{tool}</div>
            ))}
          </div>
        </div>

        <div className="skill-group">
          <h4>Other</h4>
          <div className="skill-grid">
            {other.map((item) => (
              <div className="skill-card" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;