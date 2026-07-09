import type { Product } from "@/types";

// Uplift harga normal (+15%) vs harga kode.
const NORMAL_UPLIFT = 1.15;

export type Platform = "TikTok" | "Instagram" | "Facebook" | "Referral";

export interface PromoInfo {
  code: string;
  platform: Platform;
  label: string;
}

const PROMO_CODES: Record<string, PromoInfo> = {
  TIKTOKHEMAT: { code: "TIKTOKHEMAT", platform: "TikTok", label: "TikTok" },
  IGHEMAT: { code: "IGHEMAT", platform: "Instagram", label: "Instagram" },
  FBHEMAT: { code: "FBHEMAT", platform: "Facebook", label: "Facebook" },
  TEMANHEMAT: { code: "TEMANHEMAT", platform: "Referral", label: "Referral" },
};

// Harga Normal eksplisit (samakan dengan dokumen). Fallback ke rumus +15%.
const NORMAL_PRICE_BY_CODE_PRICE: Record<number, number> = {
  24000: 28000,
  55000: 63000,
  80000: 92000,
  130000: 149000,
  215000: 245000,
  420000: 479000,
};

export function normalizeCode(input: string): string {
  return input.trim().toUpperCase().replace(/\s+/g, "");
}

export function getPromo(input: string | null | undefined): PromoInfo | null {
  if (!input) return null;
  return PROMO_CODES[normalizeCode(input)] ?? null;
}

function roundToThousand(n: number): number {
  return Math.round(n / 1000) * 1000;
}

export function getNormalPrice(product: Product): number {
  return (
    NORMAL_PRICE_BY_CODE_PRICE[product.price] ??
    roundToThousand(product.price * NORMAL_UPLIFT)
  );
}

export interface Pricing {
  normalPrice: number; // harga tampil default (tanpa kode)
  finalPrice: number; // yang dibayar
  discount: number; // normalPrice - finalPrice
  promo: PromoInfo | null;
}

export function computePricing(
  product: Product,
  rawCode?: string | null
): Pricing {
  const normalPrice = getNormalPrice(product);
  const promo = getPromo(rawCode);
  const finalPrice = promo ? product.price : normalPrice; // kode → harga kode
  return { normalPrice, finalPrice, discount: normalPrice - finalPrice, promo };
}