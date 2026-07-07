import * as Icons from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/motion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/section-heading";
import { trustItems } from "@/data/content";

/** Resolve a lucide icon by name from the data layer. */
function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = (Icons as unknown as Record<string, Icons.LucideIcon>)[name];
  return Cmp ? <Cmp className={className} /> : null;
}

export function Trust() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Kenapa eSIMku.id"
            title="Solusi paling praktis untuk iPhone inter"
            subtitle="Empat alasan kenapa ribuan pengguna iPhone inter memilih eSIM roaming."
          />
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <RevealItem key={item.title}>
              <Card className="flex h-full flex-col gap-4 p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon name={item.icon} className="size-6 text-primary" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
