"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ autoRaf: false, anchors: true });
    const onTick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
      gsap.from("[data-hero-line]", {
        yPercent: 18,
        duration: 1.1,
        stagger: 0.08,
        ease: "power4.out",
      });
      gsap.utils.toArray<HTMLElement>("[data-project-card]").forEach((card) => {
        const image = card.querySelector("[data-project-image]");
        gsap.fromTo(image, { scale: 0.9 }, {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top 90%", end: "bottom 20%", scrub: true },
        });
      });
      gsap.from("[data-word]", {
        opacity: 0.12,
        stagger: 0.08,
        scrollTrigger: { trigger: "[data-statement]", start: "top 75%", end: "bottom 55%", scrub: 0.5 },
      });
    });

    return () => {
      context.revert();
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return children;
}
