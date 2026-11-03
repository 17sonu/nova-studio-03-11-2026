import { useEffect, useState } from "react";

export default function useActiveSection(ids = []) {
  const [active, setActive] = useState(ids[0] || "");
  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActive(current.target.id);
    }, { rootMargin: "-30% 0px -30% 0px", threshold: [0.1, 0.35, 0.6] });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids.join("|")]);
  return active;
}
