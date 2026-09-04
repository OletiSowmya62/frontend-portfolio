import "../styles/Projects.css";

import employee from "../assets/images/employee.png";
import weather from "../assets/images/weather.png";
import movie from "../assets/images/movie.png";
import portfolio from "../assets/images/portfolio.png";

const projects = [
  {
    title: "Employee Management System",
    image: employee,
    description:
      "A responsive employee management application with authentication, CRUD operations, search, filtering, sorting, pagination, charts, CSV export, and dark/light theme support.",
    tech: "React • Vite • Bootstrap • Axios • Chart.js • REST API",
    github: "https://github.com/OletiSowmya62/employee-management",
    demo: "https://employee-management-alpha-umber.vercel.app/",
  },
  {
    title: "Weather Dashboard",
    image: weather,
    description:
      "Weather application using OpenWeather API with city search and responsive UI.",
    tech: "React • REST API • CSS",
    github: "https://github.com/sowmyaoleti118/weather-app",
    demo: "https://weather-app.vercel.app",
  },
  {
    title: "Movie Search App",
    image: movie,
    description:
      "Search movies using TMDB API with detailed movie information and responsive layout.",
    tech: "React • API • Bootstrap",
    github: "https://github.com/sowmyaoleti118/movie-app",
    demo: "https://movie-app.vercel.app",
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "Personal portfolio built with React showcasing projects, skills, and experience.",
    tech: "React • Bootstrap • React Icons",
    github: "https://github.com/sowmyaoleti118/portfolio",
    demo: "https://yourportfolio.vercel.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="flip-up">
      <div className="container">
        <div className="section-heading">
          <h2>Projects</h2>
          <p>Selected work demonstrating UI engineering, product thinking, and polished front-end execution.</p>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index} data-aos="zoom-in">
              <div className="project-card">
                <img src={project.image} alt={project.title} className="project-img" />

                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <p className="project-tech">{project.tech}</p>

                  <div className="buttons">
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-dark">
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
