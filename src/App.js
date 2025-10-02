import React, { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import emailjs from '@emailjs/browser';
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
  { name: "Azure", img: "https://logos-world.net/wp-content/uploads/2021/02/Microsoft-Azure-Emblem.png" },
  { name: "Angular", img: "https://angular.io/assets/images/logos/angular/angular.svg" },
  { name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
];

// Services
const services = [
  { name: "Web Development", desc: "Build stunning websites", img: "https://img.icons8.com/color/96/web.png" },
  { name: "Android Development", desc: "Create Android apps", img: "https://images.vexels.com/media/users/3/139556/isolated/svg/1718a076e29822051df8bcf8b5ce1124.svg" },
  { name: "iOS Development", desc: "Develop iOS apps", img: "https://img.icons8.com/color/96/ios-logo.png" },
  { name: "Ecommerce Development", desc: "Online store solutions", img: "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg" },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message).'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // EmailJS configuration - you'll need to set up your EmailJS account
      // 1. Go to https://www.emailjs.com/ and create a free account
      // 2. Add Gmail service and create a template
      // 3. Replace these values with your actual EmailJS credentials
      
const serviceId = 'service_1ow9tzj'; // Replace with your Service ID
const templateId = 'template_tf4fqti'; // Replace with your Template ID  
const publicKey = 'tFQVL7m73zqFrnHp-'; // Replace with your Public Key
      
      // Template parameters that will be sent to your email template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        to_email: 'gulapsakhan415@gmail.com',
        reply_to: formData.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      if (result.text !== 'OK') {
        throw new Error('Failed to send email');
      }
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Fallback to mailto if EmailJS fails
      const emailSubject = `Portfolio Contact from ${formData.name}`;
      const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

---
Sent from Portfolio Contact Form
      `.trim();
      
      const mailtoLink = `mailto:gulapsakhan415@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      setSubmitStatus({
        type: 'error',
        message: (
          <div>
            EmailJS is not configured yet. <br/>
            <a 
              href={mailtoLink}
              style={{color: '#00ffff', textDecoration: 'underline'}}
              onClick={() => {
                // Reset form after opening mailto
                setTimeout(() => {
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                  });
                }, 1000);
              }}
            >
              Click here to send email via your default email client
            </a>
            <br/>
            Or contact me directly at gulapsakhan415@gmail.com
          </div>
        )
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Gulbashan</div>
        
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <span onClick={() => scrollTo("hero")}>Home</span>
          <span onClick={() => scrollTo("about")}>About</span>
          <span onClick={() => scrollTo("projects")}>Projects</span>
          <span onClick={() => scrollTo("technologies")}>Technologies</span>
          <span onClick={() => scrollTo("services")}>Services</span>
          <span onClick={() => scrollTo("contact")}>Contact</span>
          <button className="hire-button" onClick={() => scrollTo("contact")}>Hire Me</button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <span onClick={() => scrollTo("hero")}>Home</span>
          <span onClick={() => scrollTo("about")}>About</span>
          <span onClick={() => scrollTo("projects")}>Projects</span>
          <span onClick={() => scrollTo("technologies")}>Technologies</span>
          <span onClick={() => scrollTo("services")}>Services</span>
          <span onClick={() => scrollTo("contact")}>Contact</span>
          <button className="hire-button mobile-hire-btn" onClick={() => scrollTo("contact")}>Hire Me</button>
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
                <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Name *" 
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email *" 
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input 
            type="tel" 
            name="phone"
            placeholder="Phone Number (Optional)" 
            value={formData.phone}
            onChange={handleInputChange}
          />
          <textarea 
            name="message"
            placeholder="Message *" 
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          
          {submitStatus.message && (
            <div className={`form-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        
        <div className="contact-info">
          <p>Or reach me directly at: <a href="mailto:gulapsakhan415@gmail.com">gulapsakhan415@gmail.com</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">© 2025 Gulbashan</footer>
    </div>
  );
}

export default App;
