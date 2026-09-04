import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-up">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 intro-col">
            <div className="intro">
              <h4>Hello 👋 I&apos;m</h4>
              <h1>Sowmya Oleti</h1>

              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "JavaScript Developer",
                  2000,
                ]}
                wrapper="h2"
                repeat={Infinity}
              />

              <p>
                Frontend Developer with 3 years of experience building responsive,
                user-focused web applications used by real customers and business teams.
                I build polished interfaces with React, JavaScript, HTML, CSS, Bootstrap,
                and modern workflow tools that turn ideas into intuitive experiences.
              </p>

              <div className="buttons">
                <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noreferrer">
                  Download Resume
                </a>

                <a href="#projects" className="btn btn-outline-light">
                  View Projects
                </a>
              </div>

              <div className="social-icons">
                <a href="https://github.com/OletiSowmya62" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/sowmyaoleti/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                  <FaLinkedin />
                </a>

                <a href="mailto:sowmyaoleti62@gmail.com" aria-label="Email me">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 hero-visual">
            <div className="profile-frame">
              <div className="profile-ring"></div>
              <div className="floating-badge badge-one">
                <span>3+</span>
                Years Experience
              </div>
              <div className="floating-badge badge-two">
                <span>8+</span>
                UI Projects
              </div>
              <img src="/profile.jpg" alt="Sowmya Oleti" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;