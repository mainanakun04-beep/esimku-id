import type { NavLink } from "@/types";

/**
 * Single source of truth for brand identity, external links and contact info.
 * Change values here — never hardcode them inside components.
 */
export const siteConfig = {
  name: "eSIMku.id",
  tagline: "Internet untuk iPhone Inter tanpa registrasi IMEI.",
  description:
    "Solusi internet untuk iPhone inter yang IMEI-nya diblokir di Indonesia. Aktif dalam hitungan menit menggunakan eSIM roaming — tanpa bongkar perangkat, tanpa registrasi IMEI.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://esimku.id",

  /** Contact & marketplace — replace with your real accounts */
  contact: {
    /** International format without "+" or spaces, e.g. 6281234567890 */
    whatsappNumber: "6285941346558",
    shopeeUrl: "https://shopee.co.id/esimku.id",
    instagramUrl: "https://instagram.com/esimku.id",
    tiktokUrl: "https://tiktok.com/@esimku.id",
    facebookUrl: "https://facebook.com/esimku.id",
  },

  /**
   * QRIS payment image placed in /public.
   * Replace /images/qris.png with your own static QRIS.
   */
  payment: {
    qrisImage: "/images/qris.png",
    merchantName: "eSIMku.id",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Paket", href: "#paket" },
  { label: "Tutorial", href: "#tutorial" },
  { label: "FAQ", href: "#faq" },
];
