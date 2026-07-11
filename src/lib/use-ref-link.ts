// src/lib/use-ref-link.ts
"use client";

import { useEffect, useState } from "react";
import { getRefToken } from "@/lib/attribution";

/**
 * Ambil link wa.me apa pun (buatan whatsapp.ts), lalu tempelkan "(ref: X)"
 * ke pesannya SETELAH komponen terbuka di browser.
 * Aman untuk server: sebelum terbuka, link asli dipakai apa adanya (tanpa ref).
 */
export function useRefLink(baseLink: string): string {
  const [link, setLink] = useState(baseLink);
  useEffect(() => {
    const suffix = encodeURIComponent(`\n(ref: ${getRefToken()})`);
    setLink(`${baseLink}${suffix}`);
  }, [baseLink]);
  return link;
}