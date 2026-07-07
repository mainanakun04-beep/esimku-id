import Image from "next/image";
import { Reveal } from "@/components/shared/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Slider } from "@/components/shared/slider";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimoni"
            title="Kata mereka yang sudah aktif"
            subtitle="Screenshot asli dari pelanggan eSIMku.id."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Slider>
            {testimonials.map((testi) => (
              <div
                key={testi.id}
                className="w-[240px] shrink-0 snap-start sm:w-[260px]"
              >
                <Card className="h-full overflow-hidden p-0">
                  <div className="relative aspect-[9/16] w-full bg-neutral-100">
                    <Image
                      src={testi.image}
                      alt={`Testimoni ${testi.name}`}
                      fill
                      sizes="260px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-dark">{testi.name}</p>
                    {testi.caption ? (
                      <p className="mt-0.5 text-sm text-neutral-500">
                        {testi.caption}
                      </p>
                    ) : null}
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </Reveal>
      </div>
    </section>
  );
}