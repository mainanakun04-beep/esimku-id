"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Signal, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generalWhatsAppLink } from "@/lib/whatsapp";
import { PhoneMockup } from "@/components/sections/phone-mockup";

export function Hero() {
  const whatsapp = generalWhatsAppLink();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-light pt-28 pb-16 sm:pt-32 lg:pt-40"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Signal className="size-4" />
            eSIM roaming untuk iPhone inter
          </span>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-dark sm:text-5xl lg:text-6xl">
            Internet untuk iPhone Inter{" "}
            <span className="text-primary">Tanpa Registrasi IMEI</span>
          </h1>

          <p className="max-w-xl text-lg text-neutral-500">
            Aktif dalam hitungan menit menggunakan eSIM roaming. Tanpa bongkar
            perangkat, tanpa ribet.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
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

          <div className="flex items-center gap-6 pt-2 text-sm text-neutral-500">
            <span className="inline-flex items-center gap-2">
              <Wifi className="size-4 text-primary" />
              Bisa hotspot
            </span>
            <span className="inline-flex items-center gap-2">
              <Signal className="size-4 text-primary" />
              Aktivasi 1–5 menit
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center lg:justify-end"
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
