import "../Styles/HeroSection.css";
import img from "../assets/myPic.jpg";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>
          Hi, I'm <span>Himanshu Sahu</span>
        </h1>

        <h2>Full Stack Developer (MERN)</h2>

        <p className="hero-description">
        Hello, I am a Full Stack Developer who loves building modern web applications.
I work with React, Tailwind CSS, Node.js, Express.js, and PostgreSQL to create responsive and scalable applications.

I am passionate about learning new technologies and building real-world projects that solve problems and improve user experience.
Currently, I am looking for opportunities to start my career as a Full Stack Developer.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn secondary">
            Contact Me
          </a>
        </div>
      </div>
        <div className="hero-right">
          <div className="hero-image">
            <img src={img} alt="Hero Image" loading="lazy" />
          </div>
        </div>
    </section>
  );
}

export default HeroSection;

