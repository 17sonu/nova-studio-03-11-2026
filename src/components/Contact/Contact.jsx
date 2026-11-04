import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };
  return (
    <section className="contact section-wrap section-space" id="contact">
      <div className="contact-panel reveal">
        <div className="section-kicker">06 — YOUR TURN</div>
        <div className="contact-grid">
          <div className="contact-copy">
            <h2>
              Have a spark
              <br />
              of an <span>idea?</span>
            </h2>
            <p>
              Let's turn it into something meaningful. Tell us what you're
              imagining and we'll take it from there.
            </p>
            <a href="mailto:1717sonu@gmail.com" className="contact-email">
              1717sonu@gmail.com <ArrowUpRight size={16} />
            </a>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>
                Name
                <input required name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label>
              Subject
              <input
                required
                name="subject"
                placeholder="What is this about?"
              />
            </label>
            <label>
              Message
              <textarea
                required
                name="message"
                rows="4"
                placeholder="A little about your project..."
              />
            </label>
            <button className="button-primary" type="submit">
              Send message <Send size={15} />
            </button>
            {submitted && (
              <div className="form-success">
                <CheckCircle2 size={16} /> Demo message submitted.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
