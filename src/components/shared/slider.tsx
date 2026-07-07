"use client";

import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SliderProps {
  children: ReactNode;
  className?: string;
  /** How far each arrow click scrolls, in pixels */
  step?: number;
}

/**
 * Horizontal, scroll-snapping slider with keyboard-accessible arrow buttons.
 * Children should be given a fixed/min width and `snap-start`.
 */
export function Slider({ children, className, step = 320 }: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className={cn(
          "no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-4 pb-4",
          className
        )}
      >
        {children}
      </div>

      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Sebelumnya"
          onClick={() => scrollBy(-1)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-dark shadow-sm transition-colors hover:bg-neutral-50"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Berikutnya"
          onClick={() => scrollBy(1)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-dark shadow-sm transition-colors hover:bg-neutral-50"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
