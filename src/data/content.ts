import type { TrustItem, FaqItem, Testimonial, Tutorial } from "@/types";

export const trustItems: TrustItem[] = [
  {
    icon: "Zap",
    title: "Praktis",
    description: "Tanpa bongkar perangkat. Cukup scan QR, lalu tunggu jaringan muncul.",
  },
  {
    icon: "Timer",
    title: "Cepat",
    description: "Pasang cukup scan QR. Jaringan aktif dalam 15–30 menit.",
  },
  {
    icon: "ShieldCheck",
    title: "Aman",
    description: "Teknologi eSIM standar internasional. Tanpa jailbreak.",
  },
  {
    icon: "BadgeCheck",
    title: "Tanpa Registrasi IMEI",
    description: "Cukup pakai eSIM roaming — tanpa perlu proses registrasi IMEI.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Apakah bisa telepon, SMS, dan terima OTP bank?",
    answer:
      "Perlu diketahui: eSIM ini internet saja. Tidak bisa telepon atau SMS lewat sinyal, dan tidak bisa menerima OTP dari bank. Tapi WhatsApp jalan normal (termasuk telepon WA), dan bisa dipakai hotspot.",
  },
  {
    question: "Kalau eSIM-nya tidak bisa aktif, gimana?",
    answer:
      "Kamu tidak menanggung risiko apa pun. Kami dampingi sampai berhasil lewat WhatsApp. Kalau HP kamu sudah lolos cek kompatibilitas (tidak simlock & mendukung eSIM) tapi tetap tidak bisa aktif, uang kembali 100%.",
  },
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
    question: "Setelah scan QR kok jaringan belum muncul?",
    answer:
      "Itu normal. Pastikan Data Roaming sudah dinyalakan (Pengaturan → Seluler → eSIM → Roaming Data: ON), lalu tunggu 15–30 menit sampai jaringan muncul. Jangan hapus eSIM-nya. Kalau setelah 30 menit masih kendala, chat kami — dipandu sampai jalan.",
  },
  {
    question: "Apakah bisa hotspot?",
    answer:
      "Bisa. eSIM roaming bisa dipakai internetan dan hotspot untuk berbagi koneksi ke perangkat lain.",
  },
  {
    question: "Berapa lama sampai internet bisa dipakai?",
    answer:
      "Pemasangan eSIM sendiri cepat — cukup scan QR. Setelah itu, jaringan biasanya menyala dalam 15–30 menit. Pastikan Roaming Data aktif dan jangan hapus eSIM-nya selama menunggu. Kalau lewat 30 menit belum juga jalan, chat kami — kami dampingi sampai nyala.",
  },
  {
    question: "Bagaimana cara kerja eSIM?",
    answer:
      "eSIM bekerja seperti voucher paket data. Setelah QR discan dan Data Roaming dinyalakan, jaringan muncul dalam 15–30 menit dan internet bisa dipakai. Jika masa aktif habis, cukup scan QR baru untuk mengaktifkan kembali.",
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
 * Foto testimoni asli ada di /public/testimonials (format .jpeg).
 * Versi ini menampilkan foto saja, tanpa nama & caption.
 */
export const testimonials: Testimonial[] = [
  { id: "t1", name: "", image: "/testimonials/testi-1.jpeg", caption: "" },
  { id: "t2", name: "", image: "/testimonials/testi-2.jpeg", caption: "" },
  { id: "t3", name: "", image: "/testimonials/testi-3.jpeg", caption: "" },
  { id: "t4", name: "", image: "/testimonials/testi-4.jpeg", caption: "" },
  { id: "t5", name: "", image: "/testimonials/testi-5.jpeg", caption: "" },
  { id: "t6", name: "", image: "/testimonials/testi-6.jpeg", caption: "" },
];

/**
 * Video tutorial asli ada di /public/tutorials (format .mp4).
 * videoUrl dipakai untuk memutar video langsung di halaman.
 */
export const tutorials: Tutorial[] = [
  {
    id: "tut1",
    title: "Cara Scan QR eSIM",
    description: "Langkah aktivasi eSIM lewat QR Code, mudah diikuti.",
    thumbnail: "/tutorials/tutorial-1.mp4",
    videoUrl: "/tutorials/tutorial-1.mp4",
  },
  {
    id: "tut2",
    title: "Cara Pasang eSIM Manual (Kode)",
    description: "Aktivasi eSIM secara manual pakai kode aktivasi.",
    thumbnail: "/tutorials/tutorial-2.mp4",
    videoUrl: "/tutorials/tutorial-2.mp4",
  },
];