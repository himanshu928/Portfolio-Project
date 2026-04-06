import "../Styles/Skills.css";

const skills = [
  { name: "HTML", level: "Advanced" },
  { name: "CSS", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Git & GitHub", level: "Intermediate" },
  {name: "Taiwind CSS", level: "Intermediate"},
  {name: "Node JS", level: "Intermediate"},
  {name: "Express JS", level: "Beginner"},
  {name: "PostgreSQL", level: "Intermediate"},
  {name: "JWT Authentication", level: "Beginner"},
  {name: "VS Code", level: "Intermediate"},
  {name: "Vercel", level: "Intermediate"},
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
