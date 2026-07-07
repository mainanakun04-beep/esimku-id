import { siteConfig } from "@/config/site";
import type { Product } from "@/types";

/** Build a wa.me link with a pre-filled, URL-encoded message. */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}

/** Generic "I want to ask" opener used by header/hero buttons. */
export function generalWhatsAppLink(): string {
  return buildWhatsAppLink(
    "Halo eSIMku.id, saya mau tanya soal eSIM untuk iPhone inter."
  );
}

export interface OrderDetails {
  name: string;
  whatsapp: string;
  device: string;
  product: Product;
}

/** Order confirmation message sent after the QRIS step. */
export function buildOrderMessage({
  name,
  whatsapp,
  device,
  product,
}: OrderDetails): string {
  return [
    "Halo eSIMku.id, saya sudah melakukan pembayaran QRIS. Mohon aktivasi eSIM saya:",
    "",
    `Nama: ${name}`,
    `WhatsApp: ${whatsapp}`,
    `Perangkat: ${device}`,
    `Paket: ${product.name}`,
    `Harga: Rp${product.price.toLocaleString("id-ID")}`,
    "",
    "Bukti pembayaran saya lampirkan di chat ini. Terima kasih.",
  ].join("\n");
}
