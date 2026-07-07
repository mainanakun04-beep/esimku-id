import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CheckoutFlow } from "@/components/checkout/checkout-flow";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Selesaikan pesanan eSIM roaming untuk iPhone inter kamu.",
};

export default function CheckoutPage() {
  return (
    <section className="min-h-dvh bg-light pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#paket"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-dark"
        >
          <ArrowLeft className="size-4" />
          Kembali ke paket
        </Link>

        <Suspense fallback={<CheckoutFallback />}>
          <CheckoutFlow />
        </Suspense>
      </div>
    </section>
  );
}

function CheckoutFallback() {
  return (
    <div className="flex h-64 items-center justify-center text-sm text-neutral-400">
      Memuat checkout…
    </div>
  );
}
