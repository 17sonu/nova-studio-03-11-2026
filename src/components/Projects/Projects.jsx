import { ArrowUpRight, Github } from "lucide-react";
import "./Projects.css";

const projects = [
  { n: "01", title: "Aether Commerce", type: "DIGITAL COMMERCE", desc: "A considered shopping experience with fluid product storytelling and a custom interaction system.", stack: ["React", "Three.js", "Stripe"], visual: "visual-a" },
  { n: "02", title: "Signal Studio", type: "BRAND EXPERIENCE", desc: "A bold digital home for a creative studio, built around expressive typography and motion.", stack: ["Next.js", "GSAP", "Framer"], visual: "visual-b" },
  { n: "03", title: "Orbit Analytics", type: "SAAS PLATFORM", desc: "A focused analytics workspace that makes complex data easier to understand and act on.", stack: ["React", "D3", "Node.js"], visual: "visual-c" }
];

export default function Projects() {
  return (
    <section className="projects section-wrap section-space" id="projects">
      <div className="section-kicker reveal">04 — SELECTED WORK</div>
      <div className="section-heading reveal"><h2>Featured<br /><span>projects.</span></h2><p>A selection of experiments and products shaped by curiosity and intention.</p></div>
      <div className="project-list">
        {projects.map((project) => <article className="project-row reveal" key={project.n}>
          <div className={`project-visual ${project.visual}`}>
            <div className="visual-window"><div className="window-dots"><i /><i /><i /></div><div className="visual-art"><span>{project.n}</span><b>{project.title.split(" ")[0]}</b><em>DESIGN / DIGITAL / SYSTEMS</em></div></div>
          </div>
          <div className="project-info"><div className="project-type">{project.type} <span>— {project.n}</span></div><h3>{project.title}</h3><p>{project.desc}</p><div className="project-stack">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact" className="project-link">Discuss a similar project <ArrowUpRight size={16} /></a></div>
        </article>)}
      </div>
    </section>
  );
}
