import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Reveal } from "@/components/shared/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Slider } from "@/components/shared/slider";
import { Card } from "@/components/ui/card";
import { tutorials } from "@/data/content";

export function Tutorial() {
  return (
    <section id="tutorial" className="scroll-mt-20 bg-light py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Tutorial"
            title="Cara pakai eSIM, step by step"
            subtitle="Video singkat biar kamu bisa aktivasi sendiri tanpa bingung."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Slider>
            {tutorials.map((tutorial) => (
              <a
                key={tutorial.id}
                href={tutorial.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[260px] shrink-0 snap-start sm:w-[280px]"
              >
                <Card className="group h-full overflow-hidden p-0">
                  <div className="relative aspect-[9/12] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-dark/20 transition-colors group-hover:bg-dark/30">
                      <PlayCircle className="size-14 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-base font-semibold text-dark">
                      {tutorial.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {tutorial.description}
                    </p>
                  </div>
                </Card>
              </a>
            ))}
          </Slider>
        </Reveal>
      </div>
    </section>
  );
}
