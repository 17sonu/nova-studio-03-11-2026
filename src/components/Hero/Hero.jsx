import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy reveal">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          <Sparkles size={14} /> DIGITAL CRAFT • CREATIVE ENGINEERING
        </div>
        <h1>
          Building digital
          <br />
          <span>worlds</span> with
          <br />
          purpose.
        </h1>
        <p className="hero-lead">
          I turn complex ideas into intuitive, immersive digital experiences —
          where thoughtful engineering meets expressive design.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a className="button-ghost" href="#contact">
            Let's connect
          </a>
        </div>
        <div className="hero-meta">
          <span className="availability-dot" /> AVAILABLE FOR SELECT PROJECTS{" "}
          <span className="meta-divider" /> BASED IN THE DIGITAL WORLD
        </div>
      </div>
      <div className="hero-orbit-label">
        <span>01 / 07</span>
        <span>
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </span>
      </div>
      <div className="hero-side-note">CREATIVITY IN MOTION — EST. 2026</div>
    </section>
  );
}
