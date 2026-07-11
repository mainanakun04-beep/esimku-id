import { z } from "zod";

export const checkoutSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Nama minimal 2 karakter." }),
  whatsapp: z
    .string()
    .trim()
    .min(9, { message: "Nomor WhatsApp tidak valid." })
    .regex(/^[0-9+\s-]+$/, {
      message: "Gunakan angka saja, contoh: 0812xxxxxxx.",
    }),
  device: z
    .string()
    .trim()
    .min(2, { message: "Tulis tipe iPhone kamu, contoh: iPhone 12." }),
  sourceReported: z
    .string()
    .min(1, { message: "Pilih dari mana kamu tahu eSIMku." }),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;