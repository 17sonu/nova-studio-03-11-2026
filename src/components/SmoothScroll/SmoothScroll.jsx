
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.85,
      smoothWheel: true,
      syncTouch: false,
      anchors: true
    });

    const syncScroll = () => ScrollTrigger.update();

    lenis.on("scroll", syncScroll);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", syncScroll);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}
