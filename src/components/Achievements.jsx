import "../styles/Achievements.css";
import { FaAward, FaStar, FaTrophy } from "react-icons/fa";

const achievements = [
  {
    icon: <FaAward />,
    title: "Applause Award",
    description:
      "Recognized for delivering high-quality work and consistently contributing to project success.",
  },
  {
    icon: <FaStar />,
    title: "Star Team Award (3 Times)",
    description:
      "Part of a high-performing team recognized three times for collaboration and timely project delivery.",
  },
  {
    icon: <FaTrophy />,
    title: "Best Team Award",
    description:
      "Contributed to a team recognized for excellence in project execution and customer satisfaction.",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements" data-aos="fade-up">
      <div className="container">
        <div className="section-heading">
          <h2>Achievements</h2>
          <p>Recognition earned through teamwork, quality execution, and consistent delivery.</p>
        </div>

        <div className="row">
          {achievements.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="achievement-card text-center">
                <div className="icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;