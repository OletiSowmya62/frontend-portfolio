import "../styles/Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience" data-aos="fade-left">
      <div className="container">
        <div className="section-heading">
          <h2>Experience</h2>
          <p>Turning business requirements into usable and polished user experiences.</p>
        </div>

        <div className="experience-card">
          <div className="experience-header">
            <h3>Frontend Developer</h3>
            <span className="badge">3 Years</span>
          </div>

          <h5>Tata Consultancy Services (TCS)</h5>
          <p className="role-meta">TPG Telecom | Hyderabad</p>

          <ul>
            <li>Developed responsive web interfaces using HTML5, CSS3, JavaScript, Bootstrap, and jQuery.</li>
            <li>Worked on production telecom applications using Siebel Open UI.</li>
            <li>Converted Figma designs and HLD documents into responsive UI screens.</li>
            <li>Built reusable UI components and customized enterprise applications.</li>
            <li>Integrated frontend screens with backend APIs for data-driven experiences.</li>
            <li>Used Git for version control and Jira for Agile sprint planning and delivery.</li>
            <li>Resolved production defects and implemented UI enhancements to improve usability.</li>
            <li>Collaborated closely with business analysts, QA engineers, and developers to deliver user-focused outcomes.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;