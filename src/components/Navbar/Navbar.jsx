
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

const links = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Projects", "projects"],
  ["Experience", "experience"]
];

export default function Navbar({ progress = 0, activeSection = "home" }) {
  const [open, setOpen] = useState(false);

  const liquidRef = useRef(null);
  const currentRef = useRef(0);
  const targetRef = useRef(0);
  const animationRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    targetRef.current = Math.max(0, Math.min(1, progress));

    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;
      const difference = target - current;

      if (Math.abs(difference) < 0.0005) {
        currentRef.current = target;
      } else {
        currentRef.current = current + difference * 0.09;
      }

      if (liquidRef.current) {
        liquidRef.current.style.transform =
          `scaleX(${currentRef.current})`;
      }

      if (Math.abs(targetRef.current - currentRef.current) > 0.0005) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        isAnimatingRef.current = false;
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [progress]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const close = () => setOpen(false);

  const scrollToSection = (event, id) => {
    event.preventDefault();
    close();

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <header className={`navbar-wrap ${progress > 0.015 ? "is-scrolled" : ""}`}>
      <nav className="navbar">

        <div className="navbar-liquid" ref={liquidRef} />

        <a
          className="brand"
          href=""
          onClick={"location.reload(); return false;"}
        >
          <span className="brand-mark">NS</span>
          <span>
            NOVA <span className="brand-dot">Studio.</span>
          </span>
        </a>

        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className={activeSection === id ? "active" : ""}
            >
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Let's talk <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </nav>
    </header>
  );
}
