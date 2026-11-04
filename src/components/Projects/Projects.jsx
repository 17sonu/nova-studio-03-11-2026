import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    n: "01",
    title: "ÆRON",
    type: "E-COMMERCE / FOOTWEAR",
    desc: "A modern footwear shopping experience featuring an elegant product showcase and an interactive digital storefront.",
    stack: ["React", "JavaScript", "CSS"],
    visual: "visual-a",
  },
  {
    n: "02",
    title: "RC4 Cipher Lab",
    type: "CYBERSECURITY / CRYPTOGRAPHY",
    desc: "An implementation of the RC4 stream cipher demonstrating encryption and decryption through key-based cryptographic operations.",
    stack: ["RC4", "Cryptography", "Encryption"],
    visual: "visual-b",
  },
  {
    n: "03",
    title: "TollDesk",
    type: "TOLL PLAZA MANAGEMENT",
    desc: "A full-stack toll plaza management system combining frontend and backend components to streamline toll operations and management.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    visual: "visual-c",
  },
  {
    n: "04",
    title: "StegoVault",
    type: "DATA SECURITY / STEGANOGRAPHY",
    desc: "A digital steganography project that explores hiding confidential information within image files and retrieving embedded messages.",
    stack: ["Python", "Steganography", "Image Processing"],
    visual: "visual-a",
  },
  {
    n: "05",
    title: "MotionEye",
    type: "AI / COMPUTER VISION",
    desc: "An intelligent face detection and motion tracking system that uses computer vision to identify facial movement and automatically capture image frames when significant movement is detected.",
    stack: ["Python", "OpenCV", "Haar Cascade", "Flask"],
    visual: "visual-b",
  },
  {
    n: "06",
    title: "Accountill",
    type: "ACCOUNTING / BUSINESS SOFTWARE",
    desc: "A business-oriented software project focused on simplifying accounting, billing and everyday financial management.",
    stack: ["Web Development", "Business Software", "Management"],
    visual: "visual-c",
  },
];

const scrollToSection = (event, id) => {
  event.preventDefault();

  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Projects() {
  return (
    <section className="projects section-wrap section-space" id="projects">
      <div className="section-kicker reveal">04 — SELECTED WORK</div>

      <div className="section-heading reveal">
        <h2>
          Built with
          <br />
          <span>purpose.</span>
        </h2>

        <p>
          A collection of real-world projects, technical experiments and digital
          solutions shaped by curiosity and engineering.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row reveal" key={project.n}>
            <div className={`project-visual ${project.visual}`}>
              <div className="visual-window">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="visual-art">
                  <span>{project.n} / 06</span>
                  <b>{project.title.split(" ")[0]}</b>
                  <em>NOVA STUDIO / PROJECTS</em>
                </div>
              </div>
            </div>

            <div className="project-info">
              <div className="project-type">
                {project.type} <span>— {project.n}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="project-stack">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href="#contact"
                className="project-link"
                onClick={(event) => scrollToSection(event, "contact")}
              >
                Discuss a similar project
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
