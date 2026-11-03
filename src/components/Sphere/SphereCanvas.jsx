import { useEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import PlasmaSphere from "./PlasmaSphere";
import "./Sphere.css";

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const smoothstep = (value) => value * value * (3 - 2 * value);
const lerp = (start, end, progress) => start + (end - start) * progress;

function getSectionProgress(element) {
  if (!element) return 0;
  const rect = element.getBoundingClientRect();
  const viewportMarker = window.innerHeight * 0.5;
  return clamp((viewportMarker - rect.top) / Math.max(rect.height, 1));
}

function getCurrentSection(sectionIds) {
  const marker = window.innerHeight * 0.5;
  const measured = sectionIds.map((id) => {
    const element = document.getElementById(id);
    if (!element) return null;
    const rect = element.getBoundingClientRect();
    return { id, rect, distance: marker < rect.top ? rect.top - marker : marker > rect.bottom ? marker - rect.bottom : 0 };
  }).filter(Boolean);

  const containing = measured.find(({ rect }) => rect.top <= marker && rect.bottom > marker);
  if (containing) return containing.id;
  measured.sort((a, b) => a.distance - b.distance);
  return measured[0]?.id || "home";
}

function createMotion(sectionIds) {
  const mobile = window.innerWidth < 700;
  const xRight = mobile ? 1.12 : 2.55;
  const xLeft = mobile ? -1.12 : -2.55;
  const mobileScale = mobile ? 0.62 : 1;
  const section = getCurrentSection(sectionIds);
  const projectProgress = getSectionProgress(document.getElementById("projects"));
  const experienceProgress = getSectionProgress(document.getElementById("experience"));

  if (section === "home") {
    return { x: mobile ? 1.15 : 2.25, y: 0.05, z: 0, scale: 1 * mobileScale, opacity: 1, tone: 0 };
  }

  if (section === "about") {
    return { x: mobile ? 0.98 : 3.05, y: mobile ? 1.2 : 1.05, z: 0, scale: 0.84 * mobileScale, opacity: 1, tone: 0.12 };
  }

  if (section === "expertise") {
    return { x: xRight, y: mobile ? 0.8 : 0.15, z: 0, scale: 0.76 * mobileScale, opacity: 1, tone: 0.82 };
  }

  if (section === "projects") {
    const travel = smoothstep(projectProgress);
    return {
      x: lerp(xRight, xLeft, travel),
      y: mobile ? 0.75 : 0.2,
      z: 0,
      scale: 0.76 * mobileScale,
      opacity: 1,
      tone: 0.22
    };
  }

  if (section === "experience") {
    const travel = smoothstep(clamp(experienceProgress / 0.68));
    const fade = 1 - smoothstep(clamp((experienceProgress - 0.82) / 0.16));
    return {
      x: lerp(xLeft, xRight, travel),
      y: mobile ? 0.7 : 0.15,
      z: 0,
      scale: 0.76 * mobileScale,
      opacity: fade,
      tone: 0.55
    };
  }

  // The sphere is deliberately gone for Contact and Footer and never returns.
  return { x: xRight, y: 0, z: 0, scale: 0.76 * mobileScale, opacity: 0, tone: 0.2 };
}

function Scene({ sections }) {
  const sectionIds = useMemo(() => sections.map((item) => item.id), [sections]);
  const initialMotion = useMemo(() => createMotion(sectionIds), [sectionIds]);
  const motion = useRef(initialMotion);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        motion.current = createMotion(sectionIds);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionIds]);

  return <>
    <ambientLight intensity={0.65} />
    <PlasmaSphere motion={motion} />
    <EffectComposer>
      <Bloom intensity={1.25} luminanceThreshold={0.18} luminanceSmoothing={0.85} mipmapBlur />
    </EffectComposer>
  </>;
}

export default function SphereCanvas({ sections }) {
  const memoSections = useMemo(() => sections, [sections]);
  return (
    <div className="sphere-stage" aria-hidden="true">
      <Canvas dpr={[1, 1.6]} camera={{ position: [0, 0, 7], fov: 45 }} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}>
        <Scene sections={memoSections} />
      </Canvas>
    </div>
  );
}
