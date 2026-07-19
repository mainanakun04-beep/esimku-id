import { Info, ShieldCheck } from "lucide-react";
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
            subtitle="Semua paket khusus untuk iPhone inter. Sekali beli, aktif hari itu juga."
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

        {/* Disclosure wajib — muncul tepat setelah pembeli melihat harga */}
        <Reveal delay={0.12} className="mt-8">
          <div className="mx-auto flex max-w-3xl items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
            <Info className="mt-0.5 size-5 shrink-0 text-amber-600" />
            <p className="text-sm leading-relaxed text-amber-900">
              Perlu diketahui: eSIM ini internet saja. Tidak bisa telepon atau SMS lewat sinyal, dan tidak bisa menerima OTP dari bank. Tapi WhatsApp jalan normal (termasuk telepon WA), dan bisa dipakai hotspot.
            </p>
          </div>
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
                  Uang kembali 100% kalau lolos cek kompatibilitas
                </p>
                <p className="mt-0.5 text-sm text-emerald-700">
                  Syaratnya: HP tidak simlock dan mendukung eSIM. Belum yakin?
                  Kami cek dulu kompatibilitas HP kamu, gratis.
                </p>
              </div>
            </div>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">
              Cek HP saya gratis
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}