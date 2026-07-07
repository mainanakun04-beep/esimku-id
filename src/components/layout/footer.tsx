import Link from "next/link";
import Image from "next/image";
import { Instagram, ShoppingBag, MessageCircle, Music2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generalWhatsAppLink } from "@/lib/whatsapp";

const socials = [
  { label: "Instagram", href: siteConfig.contact.instagramUrl, icon: Instagram },
  { label: "TikTok", href: siteConfig.contact.tiktokUrl, icon: Music2 },
  { label: "WhatsApp", href: generalWhatsAppLink(), icon: MessageCircle },
  { label: "Shopee", href: siteConfig.contact.shopeeUrl, icon: ShoppingBag },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-sm">
            <Link href="/#home" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={900}
                height={291}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-3 text-sm text-neutral-500">{siteConfig.tagline}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-neutral-100 pt-6 text-sm text-neutral-400 sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. Semua hak dilindungi.
          </p>
          <p>Internet untuk iPhone inter tanpa ribet.</p>
        </div>
      </div>
    </footer>
  );
}
