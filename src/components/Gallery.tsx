"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Shot } from "@/content/projects";

/** Case study screens. Click one to open it large; arrows step through, Esc or the backdrop closes. */
const span = (shot: Shot) => (shot.wide ? "col-span-2 md:col-span-6" : shot.phone ? "col-span-1 md:col-span-2" : "col-span-2 md:col-span-3");

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
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-6 md:gap-x-5">
        {shots.map((shot, index) => (
          <figure key={shot.src} className={span(shot)}>
            <button
              type="button"
              onClick={() => show(index)}
              aria-label={`Enlarge: ${shot.alt}`}
              className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-[12px] border rule ${shot.phone ? "p-3 md:p-5" : ""}`}
              style={{ background: frame }}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={2000}
                height={1500}
                sizes={shot.wide ? "(max-width: 1040px) 100vw, 1040px" : shot.phone ? "(max-width: 768px) 50vw, 340px" : "(max-width: 768px) 100vw, 520px"}
                // Phones share one screen shape so a row of them lines up top and bottom.
                className={`w-full transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.015] ${shot.phone ? "aspect-[0.465] rounded-[20px] object-cover object-top" : "h-auto"}`}
              />
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
            <div className="relative w-fit max-w-full overflow-hidden rounded-[12px]" style={{ background: frame }}>
              <Image src={current.src} alt={current.alt} width={2000} height={1500} sizes="100vw" loading="eager" className="block h-auto max-h-[82vh] w-auto max-w-[min(100%,1400px)]" />
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
