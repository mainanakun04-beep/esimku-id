import type { TrustItem, FaqItem, Testimonial, Tutorial } from "@/types";

export const trustItems: TrustItem[] = [
  {
    icon: "Zap",
    title: "Praktis",
    description: "Tanpa bongkar perangkat. Cukup scan QR, langsung terhubung.",
  },
  {
    icon: "Timer",
    title: "Cepat",
    description: "Aktivasi hanya butuh 1–5 menit lewat QR Code.",
  },
  {
    icon: "ShieldCheck",
    title: "Aman",
    description: "Teknologi eSIM standar internasional. Tanpa jailbreak.",
  },
  {
    icon: "BadgeCheck",
    title: "Tanpa Registrasi IMEI",
    description: "Lewati biaya registrasi IMEI yang mahal dan rumit.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Apakah eSIM aman?",
    answer:
      "Ya. eSIM memakai teknologi standar internasional dan diaktifkan tanpa membongkar perangkat.",
  },
  {
    question: "Apakah perlu jailbreak?",
    answer: "Tidak. Tidak perlu jailbreak sama sekali.",
  },
  {
    question: "Apakah perlu registrasi IMEI?",
    answer:
      "Tidak. Justru itu keunggulannya — kamu bisa internetan tanpa registrasi IMEI.",
  },
  {
    question: "Apakah bisa hotspot?",
    answer: "Bisa. eSIM roaming mendukung hotspot untuk berbagi internet.",
  },
  {
    question: "Berapa lama aktivasi?",
    answer: "Sekitar 1–5 menit setelah kamu scan QR Code.",
  },
  {
    question: "Bagaimana cara kerja eSIM?",
    answer:
      "eSIM bekerja seperti voucher paket data. Saat QR diaktifkan, internet langsung bisa digunakan. Jika masa aktif habis, cukup scan QR baru untuk mengaktifkan kembali.",
  },
  {
    question: "Bagaimana cara cek apakah HP saya simlock?",
    answer:
      "Buka Pengaturan → Umum → Mengenai, lalu scroll ke bawah dan cek bagian Kunci Operator. Jika tertulis \u201CTidak ada pembatasan SIM\u201D, berarti perangkatmu bukan simlock.",
  },
  {
    question: "Apakah HP simlock bisa menggunakan eSIM?",
    answer:
      "Tidak. Perangkat simlock dikunci operator tertentu sehingga tidak bisa memakai SIM atau eSIM lain.",
  },
  {
    question: "Apa itu simlock?",
    answer:
      "Perangkat yang dikunci oleh operator tertentu sehingga tidak dapat menggunakan SIM atau eSIM lain.",
  },
];

/**
 * Replace image paths with real WhatsApp screenshots inside /public/testimonials.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Rian — Pedagang iPhone",
    image: "/testimonials/testi-1.png",
    caption: "Langsung bisa internetan, customer happy.",
  },
  {
    id: "t2",
    name: "Dewi",
    image: "/testimonials/testi-2.png",
    caption: "Nggak perlu bayar IMEI, hemat banget.",
  },
  {
    id: "t3",
    name: "Bagas",
    image: "/testimonials/testi-3.png",
    caption: "Aktivasi cepat, tinggal scan QR.",
  },
  {
    id: "t4",
    name: "Sinta",
    image: "/testimonials/testi-4.png",
    caption: "Bisa hotspot juga, mantap.",
  },
];

/**
 * Replace videoUrl with your TikTok/YouTube links and thumbnails
 * inside /public/tutorials.
 */
export const tutorials: Tutorial[] = [
  {
    id: "tut1",
    title: "Cara Cek SIM Lock",
    description: "Pastikan iPhone kamu bukan simlock sebelum pakai eSIM.",
    thumbnail: "/tutorials/tutorial-1.png",
    videoUrl: "https://www.tiktok.com/@esimku.id",
  },
  {
    id: "tut2",
    title: "Cara Scan QR eSIM",
    description: "Langkah aktivasi eSIM lewat QR Code dalam hitungan menit.",
    thumbnail: "/tutorials/tutorial-2.png",
    videoUrl: "https://www.tiktok.com/@esimku.id",
  },
  {
    id: "tut3",
    title: "Cara Aktifkan Data Roaming",
    description: "Setting agar eSIM langsung dapat sinyal internet.",
    thumbnail: "/tutorials/tutorial-3.png",
    videoUrl: "https://www.tiktok.com/@esimku.id",
  },
  {
    id: "tut4",
    title: "Cara Hotspot dari eSIM",
    description: "Bagikan internet ke perangkat lain lewat hotspot.",
    thumbnail: "/tutorials/tutorial-4.png",
    videoUrl: "https://www.tiktok.com/@esimku.id",
  },
];
