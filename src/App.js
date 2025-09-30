import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./App.css";
import kbtfiesta from "./images/kbtfiesta.png";
import kesarkottage from "./images/kesarkottage.png";
import oaklores from "./images/oaklores.png";
import turanandtarub from "./images/turanandtarub.png";
import gulbashan from "./images/gulbashan.jpeg";

// Developer image
const devImage = gulbashan;

// Technology logos
const techLogos = [
  { name: "C#", img: "https://cdn.worldvectorlogo.com/logos/c--4.svg" },
  { name: "VBA", img: "https://cdn-icons-png.flaticon.com/512/5968/5968389.png" },
  { name: "SQL", img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
  { name: ".NET Core", img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg" },
  { name: "Azure", img: "http://svgrepo.com/show/353467/azure-icon.svg" },
  { name: "Angular", img: "https://angular.io/assets/images/logos/angular/angular.svg" },
  { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
];

// Services
const services = [
  { name: "Web Development", desc: "Build stunning websites", img: "https://img.icons8.com/color/96/web.png" },
  { name: "Android Development", desc: "Create Android apps", img: "https://img.icons8.com/color/96/android.png" },
  { name: "iOS Development", desc: "Develop iOS apps", img: "https://img.icons8.com/color/96/ios-logo.png" },
  { name: "Ecommerce Development", desc: "Online store solutions", img: "https://img.icons8.com/color/96/ecommerce.png" },
  { name: "Plugin Development", desc: "Custom plugin solutions", img: "https://img.icons8.com/color/96/plugin.png" },
];

// Projects
const projects = [
  {
    title: "KBT fiesta - UAE Marketplace",
    img: kbtfiesta,
    link: "https://kbtfiesta.com",
    tech: ["https://cdn.worldvectorlogo.com/logos/react-2.svg", "https://angular.io/assets/images/logos/angular/angular.svg"],
  },
  {
    title: "KesarKottage",
    img: kesarkottage,
    link: "https://kesarkottage.com",
    tech: ["https://cdn.worldvectorlogo.com/logos/javascript.svg", "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"],
  },
  {
    title: "Oaklores",
    img: oaklores,
    link: "https://oaklores.com",
    tech: ["https://cdn.worldvectorlogo.com/logos/dot-net.svg"],
  },
  {
    title: "Turan and Tarub",
    img: turanandtarub,
    link: "https://turanandtarub.com",
    tech: ["https://cdn.worldvectorlogo.com/logos/sql.svg"],
  },
];

// Experience
const experiences = [
  {
    title: "Full Stack Developer",
    company: "Motherson Technology Services",
    logo: "https://awsmp-logos.s3.amazonaws.com/ee4cdebe-751d-4dc3-90e6-fce4fc1e4137/395dec9b69c18788ed5bde91a3d3686d.png",
    duration: "Jun 2023 - Present",
    description: "Working on React projects and modern web apps.",
  },
  {
    title: "Software Developer",
    company: "Tech Mahindra",
    logo: "https://iconape.com/wp-content/png_logo_vector/tech-mahindra-new-logo.png",
    duration: "Apr 2022 - Jun 2023",
    description: "Worked on web automation and reporting tools.",
  },
  {
    title: "Software Developer",
    company: "Cargo Flash Infotech",
    logo: "https://tiaca.glueup.com/resources/public/images/logo/400x200/727f7c82-c417-41ba-8e70-36c0485f454a.png",
    duration: "Sep 2020 - Apr 2022",
    description: "Worked on web automation and reporting tools.",
  },
];

function App() {
  const sliderRef = useRef(null);

  const scrollProjects = (direction) => {
    const width = sliderRef.current.clientWidth;
    if (direction === "left") {
      sliderRef.current.scrollBy({ left: -width / 3, behavior: "smooth" });
    } else {
      sliderRef.current.scrollBy({ left: width / 3, behavior: "smooth" });
    }
  };

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Gulbashan</div>
        <nav className="nav">
          <span onClick={() => scrollTo("hero")}>Home</span>
          <span onClick={() => scrollTo("about")}>About</span>
          <span onClick={() => scrollTo("projects")}>Projects</span>
          <span onClick={() => scrollTo("technologies")}>Technologies</span>
          <span onClick={() => scrollTo("services")}>Services</span>
          <span onClick={() => scrollTo("contact")}>Contact</span>
          <button className="hire-button" onClick={() => scrollTo("contact")}>Hire Me</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-left">
          <h2>Hello, I'm Gulbashan</h2>
          <span className="typed-text">
            <Typewriter
              words={["FullStack Developer", "Cloud Enthusiast", "Application Developer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <button className="hire-button">Hire Me</button>
        </div>
        <div className="hero-right">
          <img src={devImage} alt="Developer" className="dev-img" />
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>I am a passionate developer with experience in building web, mobile, and desktop applications. Skilled in React, Angular, .NET, SQL, and more.</p>
      </section>

      {/* Experience */}
      <section className="experience" id="experience">
        <h2>Work Experience</h2>
        <div className="experience-cards">
          {experiences.map((exp, idx) => (
            <div className="experience-card" key={idx}>
              <img src={exp.logo} alt={exp.company} className="exp-logo" />
              <div className="exp-content">
                <h3>{exp.title}</h3>
                <span>{exp.company} | {exp.duration}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-slider-wrapper">
          <button className="slider-btn left" onClick={() => scrollProjects("left")}>&lt;</button>
          <div className="project-slider" ref={sliderRef}>
            {projects.map((p, idx) => (
              <div className="project-card" key={idx}>
                <img src={p.img} alt={p.title} />
                <h3>{p.title}</h3>
                <div className="tech-used">
                  {p.tech.map((t, i) => <img key={i} src={t} alt="tech" />)}
                </div>
                <a href={p.link} className="project-link">View Project</a>
              </div>
            ))}
          </div>
          <button className="slider-btn right" onClick={() => scrollProjects("right")}>&gt;</button>
        </div>
      </section>

      {/* Technologies */}
      <section className="technologies-section" id="technologies">
        <h2>Technologies</h2>
        <div className="tech-logos">
          {techLogos.map((tech, idx) => (
            <div className="tech-logo" key={idx}>
              <img src={tech.img} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <h2>Services</h2>
        <div className="service-cards">
          {services.map((s, idx) => (
            <div className="service-card" key={idx}>
              <img src={s.img} alt={s.name} />
              <span>{s.name}</span>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">© 2025 Gulbashan</footer>
    </div>
  );
}

export default App;
