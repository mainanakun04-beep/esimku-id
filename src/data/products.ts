import type { Product } from "@/types";

/**
 * Product catalogue. Prices are in IDR as plain integers.
 * Source: business price list. Update quantities/prices here only.
 * ID mengikuti 02_PRODUCT_MASTER (ESIM-xxx) agar cocok dengan CRM/n8n.
 */
export const products: Product[] = [
  {
    id: "ESIM-001",
    name: "Indonesia 1GB 7 Hari",
    dataGB: 1,
    validityDays: 7,
    price: 24000,
  },
  {
    id: "ESIM-002",
    name: "Indonesia 3GB 15 Hari",
    dataGB: 3,
    validityDays: 15,
    price: 55000,
  },
  {
    id: "ESIM-003",
    name: "Indonesia 5GB 30 Hari",
    dataGB: 5,
    validityDays: 30,
    price: 80000,
    badge: "Terlaris",
    featured: true,
  },
  {
    id: "ESIM-004",
    name: "Indonesia 10GB 30 Hari",
    dataGB: 10,
    validityDays: 30,
    price: 130000,
  },
  {
    id: "ESIM-005",
    name: "Indonesia 20GB 30 Hari",
    dataGB: 20,
    validityDays: 30,
    price: 215000,
  },
  {
    id: "ESIM-006",
    name: "Indonesia 50GB 30 Hari",
    dataGB: 50,
    validityDays: 30,
    price: 420000,
    badge: "Hemat",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}