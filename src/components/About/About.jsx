import { ArrowUpRight } from "lucide-react";
import "./About.css";

const facts = [
  ["04+", "Years exploring"],
  ["18", "Projects shipped"],
  ["12", "Tools mastered"],
];

export default function About() {
  return (
    <section className="about section-wrap section-space" id="about">
      <div className="section-kicker reveal">02 — A LITTLE ABOUT ME</div>
      <div className="about-grid">
        <div className="about-heading reveal">
          <h2>
            Curiosity is
            <br />
            my <span>compass.</span>
          </h2>
          <p>
            Good technology should feel effortless. Great technology makes you
            feel something.
          </p>
        </div>
        <div className="about-content reveal">
          <p className="about-intro">
            I'm a multidisciplinary developer who enjoys working at the
            intersection of technology, interaction, and visual storytelling. I
            care about the details — from the first sketch to the final frame.
          </p>
          <p className="about-secondary">
            My process is grounded in experimentation, clear thinking, and a
            belief that the best experiences are built with both precision and
            personality.
          </p>
          <a className="text-link" href="#experience">
            More about my journey <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="about-stats reveal">
        {facts.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
