import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Cpu,
  Palette,
  Rocket,
} from "lucide-react";
import "./Experience.css";

const technologyGroups = [
  {
    number: "01",
    category: "Frontend",
    icon: Code2,
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    number: "02",
    category: "Backend",
    icon: Server,
    technologies: ["Node.js", "Express.js"],
  },
  {
    number: "03",
    category: "Database",
    icon: Database,
    technologies: ["MongoDB", "MySQL"],
  },
  {
    number: "04",
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    technologies: ["Python", "TensorFlow", "Scikit-learn"],
  },
  {
    number: "05",
    category: "IoT & Embedded Systems",
    icon: Cpu,
    technologies: ["Arduino", "ESP32", "Raspberry Pi"],
  },
  {
    number: "06",
    category: "Design",
    icon: Palette,
    technologies: ["Figma", "Adobe Tools"],
  },
  {
    number: "07",
    category: "Deployment & Tools",
    icon: Rocket,
    technologies: ["Git", "GitHub", "Vercel"],
  },
];

const marqueeWords = [
  "BUILD",
  "INNOVATE",
  "DESIGN",
  "DEVELOP",
  "CONNECT",
  "AUTOMATE",
  "EVOLVE",
];

function MarqueeTrack() {
  return (
    <div className="tech-marquee reveal" aria-label={marqueeWords.join(" • ")}>
      <div className="tech-marquee-track">
        {[0, 1].map((copy) => (
          <div
            className="tech-marquee-group"
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {marqueeWords.map((word) => (
              <span className="tech-marquee-word" key={word}>
                {word}
                <span className="tech-marquee-dot">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      className="experience section-wrap section-space"
      id="experience"
    >
      <div className="section-kicker reveal">
        05 — TECHNOLOGIES USED
      </div>

      <div className="section-heading reveal">
        <h2>
          Tools behind
          <br />
          <span>the ideas.</span>
        </h2>

        <p>
          A versatile technology stack that helps us turn concepts
          into functional products, intelligent systems and
          connected experiences.
        </p>
      </div>

      <div className="technology-timeline">
        {technologyGroups.map(
          ({ number, category, icon: Icon, technologies }) => (
            <article className="technology-item reveal" key={category}>
              <div className="technology-marker">
                <span>{number}</span>
              </div>

              <div className="technology-content">
                <div className="technology-item-heading">
                  <Icon size={21} strokeWidth={1.7} />
                  <h3>{category}</h3>
                </div>

                <div className="technology-tags">
                  {technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          )
        )}
      </div>

      <MarqueeTrack />
    </section>
  );
}