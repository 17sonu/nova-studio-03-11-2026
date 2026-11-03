import { ArrowUpRight } from "lucide-react";
import "./About.css";

const facts = [
  ["01+", "Years exploring"],
  ["02", "Projects shipped"],
  ["12+", "Tools mastered"],
];

export default function About() {
  return (
    <section className="about section-wrap section-space" id="about">
      <div className="section-kicker reveal">02 — A LITTLE ABOUT US</div>
      <div className="about-grid">
        <div className="about-heading reveal">
          <h2>
            Curiosity is
            <br />
            our <span>compass.</span>
          </h2>
          <p>
            NOVA Studio is a technology-driven creative studio focused on
            building practical, intelligent and scalable digital solutions.
          </p>
        </div>
        <div className="about-content reveal">
          <p className="about-intro">
            We bring together software engineering, machine learning and IoT
            development to solve real-world problems through technology. From
            developing modern web applications to creating intelligent systems
            and connected devices, we focus on transforming concepts into
            products that make a difference.
          </p>
          <p className="about-secondary">
            Our approach combines technical expertise, creative thinking and a
            commitment to continuous innovation.
          </p>
          <a className="text-link" href="#experience">
            More about our journey <ArrowUpRight size={15} />
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
