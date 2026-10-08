"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface Slide {
  src: string;
  alt: string;
  /** Fill the frame (cropping) instead of fitting inside it */
  bleed?: boolean;
}

const interval = 3200;

/** Crossfades through a project's screens while the card is on screen. Stops for reduced motion. */
export function ProjectPreview({ slides, background, tone }: { slides: readonly Slide[]; background: string; tone: string }) {
  const frame = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const node = frame.current;
    if (!node || slides.length < 2) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [slides.length]);

  useEffect(() => {
    if (!visible || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), interval);
    return () => window.clearInterval(timer);
  }, [visible, paused, slides.length]);

  return (
    <div
      ref={frame}
      className="relative aspect-[16/10] overflow-hidden rounded-[9px]"
      style={{ background }}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== active}
          className="absolute inset-0 transition-[opacity,transform] duration-700 ease-[var(--ease-out)] group-hover:scale-[1.03]"
          style={{ opacity: index === active ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 510px"
            className={slide.bleed ? "object-cover" : "object-contain p-3 md:p-4"}
          />
        </div>
      ))}

      {slides.length > 1 && (
        <div className="absolute inset-x-3 bottom-2.5 flex gap-1" aria-hidden="true">
          {slides.map((slide, index) => (
            <span
              key={slide.src}
              className="h-[3px] flex-1 rounded-full transition-opacity duration-500"
              style={{ background: tone, opacity: index === active ? 0.9 : 0.28 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
