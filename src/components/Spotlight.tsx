"use client";

import type { PointerEvent, ReactNode } from "react";

/** Card wrapper that lights up softly under the pointer. Mouse only; touch gets the plain card. */
export function Spotlight({ children, className = "", color }: { children: ReactNode; className?: string; color: string }) {
  const track = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - box.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - box.top}px`);
  };

  return (
    <article onPointerMove={track} className={`spotlight ${className}`} style={{ "--spot": color } as React.CSSProperties}>
      {children}
    </article>
  );
}
