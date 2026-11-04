import { useEffect, useState } from "react";
import Preloader from "./components/Preloader/Preloader";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import Navbar from "./components/Navbar/Navbar";
import SphereCanvas from "./components/Sphere/SphereCanvas";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Expertise from "./components/Expertise/Expertise";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollAnimations from "./components/ScrollAnimations/ScrollAnimations";
import "./App.css";

const sections = [
  { id: "home" },
  { id: "about" },
  { id: "expertise" },
  { id: "projects" },
  { id: "experience" },
  { id: "contact" },
  { id: "footer" },
];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(max > 0 ? window.scrollY / max : 0);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const activationLine = window.innerHeight * 0.38;
        let currentSection = sections[0].id;

        for (const { id } of sections) {
          const element = document.getElementById(id);
          if (!element) continue;

          if (element.getBoundingClientRect().top <= activationLine) {
            currentSection = id;
          } else {
            break;
          }
        }

        const atPageBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 2;

        if (atPageBottom) currentSection = "footer";

        setActiveSection((previous) =>
          previous === currentSection ? previous : currentSection,
        );
      });
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="app-shell">
      <Preloader />
      <SmoothScroll />
      <SphereCanvas sections={sections} />
      <Navbar progress={scrollProgress} activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollAnimations />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
    </div>
  );
}
