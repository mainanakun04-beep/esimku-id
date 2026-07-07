import { Reveal } from "@/components/shared/motion";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/content";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering ditanyakan"
            subtitle="Belum ketemu jawabannya? Chat kami di WhatsApp."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
