import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/shared/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Slider } from "@/components/shared/slider";
import { ProductCard } from "@/components/shared/product-card";
import { generalWhatsAppLink } from "@/lib/whatsapp";
import { products } from "@/data/products";

export function Products() {
  const whatsapp = generalWhatsAppLink();

  return (
    <section id="paket" className="scroll-mt-20 bg-light py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Paket"
            title="Pilih paket internet kamu"
            subtitle="Semua paket khusus untuk iPhone inter. Sekali beli, langsung aktif."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Slider>
            {products.map((product) => (
              <div
                key={product.id}
                className="w-[280px] shrink-0 snap-start sm:w-[300px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </Reveal>

        {/* Strip garansi — penutup penenang setelah lihat harga */}
        <Reveal delay={0.15} className="mt-10">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <ShieldCheck className="size-5 text-emerald-600" />
              </span>
              <div>
                <p className="font-heading text-base font-bold text-emerald-800">
                  Semua paket dijamin: Aktif atau Uang Kembali
                </p>
                <p className="mt-0.5 text-sm text-emerald-700">
                  Belum yakin HP kamu cocok? Chat dulu — kami cek gratis sebelum
                  kamu bayar.
                </p>
              </div>
            </div>
            
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Cek HP saya gratis
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}