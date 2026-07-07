"use client";

import { motion } from "framer-motion";

/**
 * Self-contained iPhone mockup illustration (pure SVG/CSS).
 * No external image asset is required.
 */
export function PhoneMockup() {
  return (
    <div className="relative">
      {/* Floating QR chip */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-16 z-10 rounded-2xl border border-neutral-200 bg-white p-3 shadow-soft"
      >
        <QrGlyph className="size-16" />
        <p className="mt-1 text-center text-[10px] font-medium text-neutral-500">
          Scan &amp; aktif
        </p>
      </motion.div>

      {/* Floating signal chip */}
      <motion.div
        aria-hidden
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 bottom-24 z-10 flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-3 py-2 shadow-soft"
      >
        <span className="flex size-2.5 rounded-full bg-primary" />
        <span className="text-xs font-semibold text-dark">Terhubung</span>
      </motion.div>

      {/* Phone body */}
      <div className="relative h-[520px] w-[260px] rounded-[3rem] border-[10px] border-dark bg-dark shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-dark" />

        {/* Screen */}
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2.3rem] bg-linear-to-b from-primary/90 to-primary">
          <div className="flex flex-col items-center gap-5 px-6 text-center text-white">
            <div className="rounded-3xl bg-white p-4 shadow-lg">
              <QrGlyph className="size-28 text-dark" />
            </div>
            <div>
              <p className="font-heading text-lg font-bold">eSIM aktif</p>
              <p className="mt-1 text-sm text-white/80">
                Indonesia • Roaming
              </p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <span className="flex size-2 rounded-full bg-white" />
              Internet berjalan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QrGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="QR Code"
    >
      {/* Finder patterns */}
      <path d="M0 0h30v30H0z M8 8v14h14V8z" fillRule="evenodd" />
      <path d="M70 0h30v30H70z M78 8v14h14V8z" fillRule="evenodd" />
      <path d="M0 70h30v30H0z M8 78v14h14V78z" fillRule="evenodd" />
      {/* Data blocks */}
      <path d="M40 0h8v8h-8z M56 0h8v8h-8z M40 12h8v8h-8z" />
      <path d="M40 40h8v8h-8z M52 40h8v8h-8z M64 40h8v8h-8z M76 40h8v8h-8z M88 40h8v8h-8z" />
      <path d="M40 52h8v8h-8z M64 52h8v8h-8z M88 52h8v8h-8z" />
      <path d="M0 40h8v8H0z M12 40h8v8h-8z M24 40h8v8h-8z" />
      <path d="M40 64h8v8h-8z M52 64h8v8h-8z M76 64h8v8h-8z" />
      <path d="M40 76h8v8h-8z M56 76h8v8h-8z M40 88h8v8h-8z M64 88h8v8h-8z M88 88h8v8h-8z M76 76h8v8h-8z" />
    </svg>
  );
}
