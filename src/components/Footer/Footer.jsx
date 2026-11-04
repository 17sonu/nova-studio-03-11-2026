import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
import "./Footer.css";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Projects", "projects"],
  ["Experience", "experience"],
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

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner section-wrap">
        <div className="footer-top">
          <a
            href="#home"
            className="footer-brand"
            onClick={(event) => scrollToSection(event, "home")}
          >
            NOVA <span>Studio.</span>
          </a>

          <p>
            Building what comes next.
            <br />
            One thoughtful interaction at a time.
          </p>

          <a
            className="back-top"
            href="#home"
            onClick={(event) => scrollToSection(event, "home")}
          >
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="footer-bottom">
          <div className="footer-nav">
            {links.map(([name, id]) => (
              <a
                href={`#${id}`}
                key={id}
                onClick={(event) => scrollToSection(event, id)}
              >
                {name}
              </a>
            ))}
          </div>

          <div className="social-links">
            <a
              href="https://github.com/17sonu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>

          <span className="copyright">
            © 2026 NOVA STUDIO. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}