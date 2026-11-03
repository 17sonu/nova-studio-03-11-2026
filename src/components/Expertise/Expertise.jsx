import { Code2, Layers3, WandSparkles, ArrowUpRight } from "lucide-react";
import "./Expertise.css";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    text: "Fast, accessible, and resilient digital products built with modern frontend and backend technologies.",
    tags: ["React", "Node.js", "APIs"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "UI / UX Design",
    text: "Clear interfaces and thoughtful journeys that turn complicated workflows into natural experiences.",
    tags: ["Prototyping", "Systems", "Research"],
  },
  {
    number: "03",
    icon: WandSparkles,
    title: "Creative Development",
    text: "Experimental interactions, motion systems, and expressive web experiences that invite exploration.",
    tags: ["Three.js", "Motion", "WebGL"],
  },
];

export default function Expertise() {
  return (
    <section className="expertise section-wrap section-space" id="expertise">
      <div className="section-kicker reveal">03 — WHAT I DO</div>
      <div className="section-heading reveal">
        <h2>
          Ideas into
          <br />
          <span>experiences.</span>
        </h2>
        <p>
          A mix of craft, code, and curiosity — applied where it matters most.
        </p>
      </div>
      <div className="service-grid">
        {services.map(({ number, icon: Icon, title, text, tags }) => (
          <article className="service-card reveal" key={number}>
            <div className="service-top">
              <span>{number} / 03</span>
              <Icon size={22} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="service-tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <ArrowUpRight className="service-arrow" size={18} />
          </article>
        ))}
      </div>
    </section>
  );
}
