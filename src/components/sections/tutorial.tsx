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
              <div
                key={tutorial.id}
                className="w-[260px] shrink-0 snap-start sm:w-[280px]"
              >
                <Card className="h-full overflow-hidden p-0">
                  <div className="relative aspect-[9/12] w-full overflow-hidden bg-neutral-100">
                    <video
                      src={tutorial.videoUrl}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
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
              </div>
            ))}
          </Slider>
        </Reveal>
      </div>
    </section>
  );
}