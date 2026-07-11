// src/components/layout/attribution-capture.tsx
"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

/** Komponen tak terlihat. Tugasnya cuma memicu capture saat halaman kebuka. */
export function AttributionCapture(): null {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}