import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollAnimations.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  useEffect(() => {
    const elements = gsap.utils.toArray(".reveal");
    const animations = elements.map((element) => gsap.fromTo(element,
      { autoAlpha: 0, y: 34, scale: .985 },
      { autoAlpha: 1, y: 0, scale: 1, duration: .8, ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 88%", end: "bottom 12%", toggleActions: "play reverse play reverse" } }
    ));
    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, []);
  return null;
}
