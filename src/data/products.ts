import type { Product } from "@/types";

/**
 * Product catalogue. Prices are in IDR as plain integers.
 * Source: business price list. Update quantities/prices here only.
 */
export const products: Product[] = [
  {
    id: "id-1gb-7d",
    name: "Indonesia 1GB 7 Hari",
    dataGB: 1,
    validityDays: 7,
    price: 24000,
  },
  {
    id: "id-3gb-15d",
    name: "Indonesia 3GB 15 Hari",
    dataGB: 3,
    validityDays: 15,
    price: 55000,
  },
  {
    id: "id-5gb-30d",
    name: "Indonesia 5GB 30 Hari",
    dataGB: 5,
    validityDays: 30,
    price: 80000,
    badge: "Terlaris",
    featured: true,
  },
  {
    id: "id-10gb-30d",
    name: "Indonesia 10GB 30 Hari",
    dataGB: 10,
    validityDays: 30,
    price: 130000,
  },
  {
    id: "id-20gb-30d",
    name: "Indonesia 20GB 30 Hari",
    dataGB: 20,
    validityDays: 30,
    price: 215000,
  },
  {
    id: "id-50gb-30d",
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
