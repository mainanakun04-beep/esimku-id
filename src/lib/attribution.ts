// src/lib/attribution.ts
// Menangkap "dari mana" pengunjung datang (jejak sepatu) lalu menyimpannya di browser.
// File ini TIDAK membuat link WhatsApp — itu tetap tugas whatsapp.ts.
// Di sini cuma menyimpan jejak dan menyediakan token "ref" untuk ditempel ke pesan.

type Attribution = {
  firstSource: string;
  firstContent: string;
  lastSource: string;
  campaign: string;
};

const KEYS = {
  firstSource: "esim_first_source",
  firstContent: "esim_first_content",
  firstCampaign: "esim_first_campaign",
  lastSource: "esim_last_source",
  firstTs: "esim_first_ts",
} as const;

// Ubah nama panjang jadi kode pendek. Yang tak dikenal -> huruf besar apa adanya.
const SOURCE_MAP: Record<string, string> = {
  tiktok: "TT", tt: "TT",
  instagram: "IG", ig: "IG",
  facebook: "FB", fb: "FB",
  youtube: "YT", yt: "YT",
  web: "WEB", website: "WEB",
};

function normalizeSource(raw: string | null): string {
  if (!raw) return "";
  const key = raw.trim().toLowerCase();
  return SOURCE_MAP[key] ?? key.toUpperCase();
}

/** Panggil sekali saat halaman pertama kebuka. Menyimpan jejak & membersihkan URL. */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);

  const source = normalizeSource(params.get("utm_source") || params.get("ref"));
  const content = params.get("utm_content") || params.get("content_id") || "";
  const campaign = params.get("utm_campaign") || "";

  if (source) {
    // First touch: hanya diisi kalau masih kosong (jangan pernah ditimpa)
    if (!localStorage.getItem(KEYS.firstSource)) {
      localStorage.setItem(KEYS.firstSource, source);
      if (content) localStorage.setItem(KEYS.firstContent, content);
      if (campaign) localStorage.setItem(KEYS.firstCampaign, campaign);
      localStorage.setItem(KEYS.firstTs, new Date().toISOString());
    }
    // Last touch: selalu diperbarui
    localStorage.setItem(KEYS.lastSource, source);
  }

  // Bersihkan URL: buang query string biar tamu lihat alamat rapi
  if (window.location.search) {
    window.history.replaceState(
      {},
      "",
      window.location.pathname + window.location.hash
    );
  }
}

/** Baca jejak yang tersimpan. Aman dipanggil di server (balikannya kosong). */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") {
    return { firstSource: "", firstContent: "", lastSource: "", campaign: "" };
  }
  return {
    firstSource: localStorage.getItem(KEYS.firstSource) || "",
    firstContent: localStorage.getItem(KEYS.firstContent) || "",
    lastSource: localStorage.getItem(KEYS.lastSource) || "",
    campaign: localStorage.getItem(KEYS.firstCampaign) || "",
  };
}

/** Token ref untuk ditempel ke pesan, mis. "TT" atau "TT-C0712-03". */
export function getRefToken(): string {
  const { firstSource, firstContent } = getAttribution();
  const src = firstSource || "WEB";
  return firstContent ? `${src}-${firstContent}` : src;
}

/** Tempelkan token ref ke akhir sebuah pesan WhatsApp. */
export function appendRef(message: string): string {
  return `${message}\n(ref: ${getRefToken()})`;
}