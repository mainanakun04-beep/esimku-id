export interface Product {
  /** Stable identifier used in URLs and order messages */
  id: string;
  name: string;
  /** Data quota in GB */
  dataGB: number;
  /** Validity period in days */
  validityDays: number;
  /** Selling price in IDR (integer, no separators) */
  price: number;
  /** Optional marketing badge, e.g. "Terlaris" */
  badge?: string;
  /** Highlight the card visually */
  featured?: boolean;
}

export interface TrustItem {
  icon: string; // lucide icon name
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  /** Path to a WhatsApp screenshot inside /public */
  image: string;
  caption?: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  /** Thumbnail inside /public */
  thumbnail: string;
  /** External video link (TikTok / YouTube / etc.) */
  videoUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
  /** Opens in a new tab when true */
  external?: boolean;
}
