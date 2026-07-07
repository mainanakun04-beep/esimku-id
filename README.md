# eSIMku.id

Landing page & ordering website for selling eSIM roaming packages for
international iPhones in Indonesia. Built with **Next.js 16 (App Router)**,
**TypeScript**, **Tailwind CSS v4**, **shadcn/ui**, **Framer Motion**,
**Lucide React**, **React Hook Form**, and **Zod**.

## Flow

```
Landing → Paket → Checkout (form) → QRIS → Konfirmasi → WhatsApp
```

The checkout is intentionally lightweight: the customer picks a package, fills
in Name / WhatsApp / Device, pays with a static QRIS, then sends a pre-filled
confirmation message to your WhatsApp. You (admin) activate the eSIM manually.
No payment gateway or database is required for the MVP.

## Getting started

Requirements: **Node.js 18.18+** (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000

Other scripts:

```bash
npm run build      # production build
npm run start      # run the production build
npm run typecheck  # TypeScript check
npm run lint       # lint
```

## Customize (edit these first)

Everything that changes over time lives in config/data files — never edit the
components to change content.

| What | File |
| --- | --- |
| WhatsApp number, Shopee/IG/TikTok links, merchant name | `src/config/site.ts` |
| Navbar menu items | `src/config/site.ts` (`navLinks`) |
| Packages & prices | `src/data/products.ts` |
| Trust cards, FAQ, testimonials, tutorials | `src/data/content.ts` |
| Colors, fonts, shadows | `src/app/globals.css` (`@theme`) |
| Logo (navbar/footer) | `public/logo.png` &nbsp;·&nbsp; favicon `src/app/icon.png` |

### WhatsApp number

In `src/config/site.ts`, set `contact.whatsappNumber` in international format
without `+` or spaces. Already set to `6285941346558` (0859-4134-6558).

### QRIS image

Replace `public/images/qris.png` with your own **static QRIS** image (keep the
same filename), or change the path in `siteConfig.payment.qrisImage`.

### Testimonials & tutorial thumbnails

Drop real WhatsApp screenshots in `public/testimonials/` and tutorial
thumbnails in `public/tutorials/`, then point to them in `src/data/content.ts`.
The placeholder images shipped here are only examples.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx          # fonts, metadata, navbar + footer
│  ├─ page.tsx            # homepage (assembles sections)
│  ├─ globals.css         # Tailwind v4 theme / design tokens
│  ├─ icon.png            # favicon (SIM-card mark)
│  └─ checkout/page.tsx   # checkout route
├─ components/
│  ├─ ui/                 # shadcn primitives (button, card, input, ...)
│  ├─ layout/             # navbar, footer
│  ├─ sections/           # hero, trust, products, tutorial, testimonials, faq, cta
│  ├─ shared/             # reusable: slider, product-card, section-heading, motion
│  └─ checkout/           # checkout flow, step indicator
├─ config/site.ts         # brand + links (single source of truth)
├─ data/                  # products + content data
├─ lib/                   # utils, currency format, whatsapp links, zod schema
└─ types/                 # shared TypeScript types
```

## Design system

| Token | Value |
| --- | --- |
| Primary (brand blue) | `#1DA5EF` |
| Dark | `#111827` |
| Light background | `#F9FAFB` |
| Heading font | Poppins |
| Body font | Inter |

Defined once in `src/app/globals.css` under `@theme`. Change them there and the
whole site updates.

## Deploy

Deploys cleanly to **Vercel** (recommended): push to a Git repo and import it.
Set `NEXT_PUBLIC_SITE_URL` to your domain in the project's environment
variables (see `.env.example`).
