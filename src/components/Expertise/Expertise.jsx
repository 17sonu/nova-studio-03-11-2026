import {
  Code2,
  BrainCircuit,
  Cpu,
  PanelsTopLeft,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

import "./Expertise.css";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web & Application Development",
    text: "We design and develop modern, responsive and scalable websites and web applications tailored to business needs.",
    tags: ["Web Apps", "Full-Stack", "Business Software", "API Integration"],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    text: "We develop intelligent software using machine learning and AI to automate processes, analyze data and solve complex problems.",
    tags: ["Machine Learning", "Predictive Analytics", "AI Integration", "Automation"],
  },
  {
    number: "03",
    icon: Cpu,
    title: "IoT & Embedded Systems",
    text: "We design connected systems that bridge hardware and software, enabling devices to communicate, collect data and perform intelligent operations.",
    tags: ["IoT Solutions", "Embedded Systems", "Sensors", "Hardware Integration"],
  },
  {
    number: "04",
    icon: PanelsTopLeft,
    title: "UI/UX & Digital Design",
    text: "We create intuitive interfaces and thoughtful digital experiences that combine usability, aesthetics and functionality.",
    tags: ["UI/UX Design", "Prototyping", "Interface Design", "Digital Experiences"],
  },
  {
    number: "05",
    icon: Workflow,
    title: "Custom Software & Automation",
    text: "We build customized software and automated workflows that simplify operations, improve efficiency and address specific business challenges.",
    tags: ["Custom Software", "Workflow Automation", "System Integration", "Management Systems"],
  },
];

export default function Expertise() {
  return (
    <section className="expertise section-wrap section-space" id="expertise">
      <div className="section-kicker reveal">03 — WHAT WE DO</div>
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
              <span>{number} / 05</span>
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
