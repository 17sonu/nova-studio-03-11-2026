import { ArrowUpRight } from "lucide-react";
import "./Experience.css";

const milestones = [
  { date: "2024 — NOW", title: "Independent Developer", place: "Freelance / Personal Studio", desc: "Designing and building digital products, interactive web experiences, and experiments for the modern web.", tags: ["React", "Three.js", "Full-stack"] },
  { date: "2022 — 2024", title: "Frontend Developer", place: "Digital Product Team", desc: "Collaborated across design and engineering to ship accessible interfaces and scalable component systems.", tags: ["JavaScript", "CSS", "Design systems"] },
  { date: "2020 — 2024", title: "B.Tech — Information Technology", place: "University", desc: "Built a foundation in computer science, software engineering, data structures, and human-centered problem solving.", tags: ["Computer science", "Engineering"] }
];

export default function Experience() {
  return (
    <section className="experience section-wrap section-space" id="experience">
      <div className="section-kicker reveal">05 — THE JOURNEY</div>
      <div className="section-heading reveal"><h2>Always in<br /><span>progress.</span></h2><p>Every chapter adds a new perspective. Here's a snapshot of the path so far.</p></div>
      <div className="timeline">
        {milestones.map((item, index) => <article className="timeline-item reveal" key={item.title}>
          <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
          <div className="timeline-date">{item.date}</div>
          <div className="timeline-body"><h3>{item.title}</h3><div className="timeline-place">{item.place}</div><p>{item.desc}</p><div className="timeline-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
        </article>)}
      </div>
    </section>
  );
}
