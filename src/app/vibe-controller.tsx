"use client";

import { useEffect } from "react";

const VIBE_SELECTOR = "[data-vibe]";

export default function VibeController() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(VIBE_SELECTOR));

    const setClosestVibe = () => {
      const viewportCenter = window.innerHeight / 2;
      const closest = sections
        .map((section) => {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;

          return {
            section,
            distance: Math.abs(sectionCenter - viewportCenter),
            visible: rect.bottom > 0 && rect.top < window.innerHeight,
          };
        })
        .filter((entry) => entry.visible)
        .sort((a, b) => a.distance - b.distance)[0];

      document.documentElement.dataset.vibe = closest?.section.dataset.vibe ?? "neutral";
    };

    setClosestVibe();
    window.addEventListener("scroll", setClosestVibe, { passive: true });
    window.addEventListener("resize", setClosestVibe);

    return () => {
      window.removeEventListener("scroll", setClosestVibe);
      window.removeEventListener("resize", setClosestVibe);
      delete document.documentElement.dataset.vibe;
    };
  }, []);

  return null;
}
