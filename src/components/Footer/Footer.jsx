import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";
import "./Footer.css";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Projects", "projects"],
  ["Experience", "experience"],
];
export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner section-wrap">
        <div className="footer-top">
          <a href="" className="footer-brand">
            NOVA <span>Studio.</span>
          </a>
          <p>
            Building what comes next.
            <br />
            One thoughtful interaction at a time.
          </p>
          <a className="back-top" href="">
            Back to top <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="footer-bottom">
          <div className="footer-nav">
            {links.map(([name, id]) => (
              <a href={`#${id}`} key={id}>
                {name}
              </a>
            ))}
          </div>
          <div className="social-links">
            <a href="https://github.com" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
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
