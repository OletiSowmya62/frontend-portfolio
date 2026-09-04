import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about" data-aos="fade-right">
      <div className="container">
        <div className="section-heading">
          <h2>About Me</h2>
          <p>Building clean, accessible, and high-converting web experiences with a product mindset.</p>
        </div>

        <div className="content-wrap">
          <div className="about-copy">
            <h3>Frontend Developer</h3>
            <p>
              I am a Frontend Developer with 3 years of experience at Tata Consultancy Services,
              where I worked on enterprise projects including TPG Telecom. My focus is on crafting
              responsive and user-friendly interfaces that balance design quality, performance, and
              maintainability.
            </p>
            <p>
              I enjoy turning design systems and business requirements into polished, scalable user
              experiences. From translating Figma layouts into responsive pages to improving usability
              in production workflows, I bring both technical depth and attention to detail.
            </p>

            <div className="about-feature-list">
              <div className="feature-pill">Responsive UI</div>
              <div className="feature-pill">Design Systems</div>
              <div className="feature-pill">Cross-browser QA</div>
              <div className="feature-pill">UI Performance</div>
            </div>
          </div>

          <div className="about-card">
            <h5>Experience</h5>
            <p>3 Years</p>

            <h5>Company</h5>
            <p>Tata Consultancy Services</p>

            <h5>Project</h5>
            <p>TPG Telecom</p>

            <h5>Location</h5>
            <p>Hyderabad</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;