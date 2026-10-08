"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Shot } from "@/content/projects";

/** Case study screens. Click one to open it large; arrows step through, Esc or the backdrop closes. */
export function Gallery({ shots, frame }: { shots: readonly Shot[]; frame: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  const show = (index: number) => {
    setOpen(index);
    dialog.current?.showModal();
  };
  const step = useCallback((by: number) => setOpen((index) => (index === null ? index : (index + by + shots.length) % shots.length)), [shots.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const current = open === null ? null : shots[open];

  return (
    <>
      <div className="mt-8 grid gap-x-5 gap-y-10 md:grid-cols-2">
        {shots.map((shot, index) => (
          <figure key={shot.src} className={shot.wide ? "md:col-span-2" : undefined}>
            <button
              type="button"
              onClick={() => show(index)}
              aria-label={`Enlarge: ${shot.alt}`}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[12px] border rule"
              style={{ background: frame }}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={2000}
                height={1500}
                sizes={shot.wide ? "(max-width: 1040px) 100vw, 1040px" : "(max-width: 768px) 100vw, 520px"}
                className="h-auto w-full transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.015]"
              />
              {shot.overlay && (
                <div className="absolute bottom-[6%] left-1/2 h-[68%] w-[46%] -translate-x-1/2">
                  <Image src={shot.overlay} alt="" fill sizes="300px" className="object-contain object-bottom" />
                </div>
              )}
            </button>
            <figcaption className="mt-3 max-w-[60ch] text-[0.95rem] text-[var(--ink-2)]">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onClick={(event) => event.target === event.currentTarget && dialog.current?.close()}
        aria-label={current?.alt}
        className="lightbox"
      >
        {current && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 md:p-8" onClick={(event) => event.target === event.currentTarget && dialog.current?.close()}>
            {/* The frame shrinks to the image so overlays line up with the scene, not the empty space beside it. */}
            <div className="relative w-fit max-w-full overflow-hidden rounded-[12px]" style={{ background: frame }}>
              <Image src={current.src} alt={current.alt} width={2000} height={1500} sizes="100vw" loading="eager" className="block h-auto max-h-[82vh] w-auto max-w-[min(100%,1400px)]" />
              {current.overlay && (
                <div className="absolute bottom-[6%] left-1/2 h-[68%] w-[46%] -translate-x-1/2">
                  <Image src={current.overlay} alt="" fill sizes="600px" className="object-contain object-bottom" />
                </div>
              )}
            </div>
            <div className="flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-3">
              <p className="max-w-[70ch] text-[0.95rem] text-[var(--ink-2)]">{current.caption}</p>
              <div className="label flex items-center gap-2 text-[var(--ink-3)]">
                {shots.length > 1 && (
                  <>
                    <button type="button" onClick={() => step(-1)} className="button button-line px-3" aria-label="Previous screen">←</button>
                    <span>{(open ?? 0) + 1} / {shots.length}</span>
                    <button type="button" onClick={() => step(1)} className="button button-line px-3" aria-label="Next screen">→</button>
                  </>
                )}
                <button type="button" onClick={() => dialog.current?.close()} className="button button-line ml-2 px-3" aria-label="Close">Esc</button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
