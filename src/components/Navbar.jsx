import "./../styles/Navbar.css";
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect, useState } from "react";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        theme === "dark" ? "navbar-dark" : "navbar-light"
      }`}
      style={{
        background: theme === "dark" ? "rgba(6, 18, 31, 0.72)" : "rgba(255, 255, 255, 0.75)",
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="#home">
          Sowmya Oleti
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "home" ? "active-link" : ""}`} href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "about" ? "active-link" : ""}`} href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "skills" ? "active-link" : ""}`} href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "experience" ? "active-link" : ""}`} href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "projects" ? "active-link" : ""}`} href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "achievements" ? "active-link" : ""}`} href="#achievements">
                Achievements
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "contact" ? "active-link" : ""}`} href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <button className="btn theme-toggle ms-3" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;