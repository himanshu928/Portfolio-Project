import "../Styles/Projects.css";
import tictactoe from "../assets/tictactoe8090.png";
import calculator from "../assets/calculator8090.png";
import portfolio from "../assets/project1.png";
import finance from "../assets/finance-dashboard.png"

const projectsData = [
  {
    id: 1,
    title: "Finance Dashboard (Full Stack)",
    description:
      "Full stack finance dashboard to manage financial data and transactions. Developed REST APIs using Node.js and Express. Created responsive and clean UI using Tailwind CSS",
    image: finance,
    tech: ["Tailwind CSS", "Node.js", "Express", "PostgreSQL", "React", "JWT"],
    github: "https://github.com/himanshu928/Finance-Dashboard",
    live: "https://calulator8090.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Personal portfolio website built using HTML, CSS, and React. Showcases my projects and skills. It is responsive and visually appealing. and easy to navigate.",
    image: portfolio,
    tech: ["HTML", "CSS", "React"],
    github: "https://github.com/himanshu928/Portfolio-",
    live: "https://portfolio8090.netlify.app/",
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript.",
    image: tictactoe,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/himanshu928/Tic-tac-toe-game",
    live: "https://tictactoe8090.netlify.app/",
  },
  {
    id: 4,
    title: "Calculator App",
    description:
      "A simple calculator application built with HTML, CSS & JavaScript. It performs basic arithmetic operations.",
    image: calculator,
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/himanshu928/Calculator-Project",
    live: "https://calulator8090.netlify.app/",
  },
 
];

const Projects = ({ project }) => {
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <img src={project.image} alt={project.title} loading="lazy"/>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" className="first-link">
                  GitHub
                </a>
                <a href={project.live} target="_blank" className="live-link">
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
