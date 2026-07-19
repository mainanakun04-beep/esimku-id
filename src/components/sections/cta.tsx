import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/motion";
import { Button } from "@/components/ui/button";
import { generalWhatsAppLink } from "@/lib/whatsapp";

export function Cta() {
  const whatsapp = generalWhatsAppLink();

  return (
    <section className="bg-light py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-dark px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Siap internetan tanpa registrasi IMEI?
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Pilih paketmu sekarang, jaringan aktif dalam 15–30 menit.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#paket">
                    Lihat Paket
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    Chat WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}