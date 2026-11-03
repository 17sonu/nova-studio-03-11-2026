import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy reveal">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <Sparkles size={14} /> INNOVATION • ENGINEERING • DESIGN
        </div>
        <h1>
          Building digital
          <br />
          <span>worlds</span> with
          <br />
          purpose.
        </h1>
        <p className="hero-lead">
          We are NOVA Studio — a technology and innovation studio creating
          powerful web applications, intelligent software and connected IoT
          solutions. We combine engineering, machine learning and thoughtful
          design to turn complex ideas into meaningful digital experiences.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">
            Explore our work <ArrowUpRight size={17} />
          </a>
          <a className="button-ghost" href="#contact">
            Let's connect
          </a>
        </div>
        <div className="hero-meta">
          <span className="availability-dot" /> From Concept To Code,{" "}
          <span className="meta-divider" /> From Intelligence To Innovation.
        </div>
      </div>
      <div className="hero-orbit-label">
        <span>01 / 07</span>
        <span>
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </span>
      </div>
      <div className="hero-side-note">NOVA STUDIO — EST. 2026</div>
    </section>
  );
}
