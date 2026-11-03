import { useEffect, useState } from "react";
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
  { id: "footer" }
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
    const nodes = sections.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-25% 0px -25% 0px", threshold: [0.05, 0.2, 0.4, 0.65] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
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
