import { Reveal } from "@/components/shared/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Slider } from "@/components/shared/slider";
import { ProductCard } from "@/components/shared/product-card";
import { products } from "@/data/products";

export function Products() {
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
      </div>
    </section>
  );
}
