"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Info,
  Wifi,
  CalendarDays,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { StepIndicator } from "@/components/checkout/step-indicator";
import { products, getProductById } from "@/data/products";
import { siteConfig } from "@/config/site";
import { formatIDR, formatData, formatValidity } from "@/lib/format";
import { buildOrderMessage } from "@/lib/whatsapp";
import { checkoutSchema, type CheckoutFormValues } from "@/lib/checkout-schema";
import { computePricing, type Pricing } from "@/lib/pricing";
import { getAttribution } from "@/lib/attribution";
import type { Product } from "@/types";

type Step = "form" | "payment" | "confirm";

const stepIndex: Record<Step, number> = { form: 0, payment: 1, confirm: 2 };

/* ---- Opsi & pemetaan sumber (dropdown "tau dari mana") --------------- */
const SOURCE_OPTIONS = [
  "TikTok",
  "Instagram",
  "Facebook",
  "YouTube",
  "Teman / Rekomendasi",
  "Reseller",
  "Shopee",
  "Lainnya",
] as const;

const REPORTED_MAP: Record<string, string> = {
  TikTok: "TT",
  Instagram: "IG",
  Facebook: "FB",
  YouTube: "YT",
  "Teman / Rekomendasi": "TEMAN",
  Reseller: "RS",
  Shopee: "SHOPEE",
  Lainnya: "LAIN",
};

/** Gabungkan jejak sepatu (UTM) + jawaban dropdown jadi atribusi final.
 *  Aturan: sepatu dulu, mulut belakangan. */
function buildAttributionPayload(sourceReported: string) {
  const a = getAttribution();
  const firstSource = a.firstSource || REPORTED_MAP[sourceReported] || "UNKNOWN";
  const refToken = a.firstContent ? `${firstSource}-${a.firstContent}` : firstSource;
  return {
    first_source: firstSource,
    current_source: a.lastSource || firstSource,
    content_id: a.firstContent,
    campaign: a.campaign,
    source_reported: sourceReported,
    ref_token: refToken,
  };
}

/* ---- Alamat webhook n8n (VPS Contabo, produksi) --------------------- */
const N8N_WEBHOOK_URL =
  "https://vmi3426452.contaboserver.net/webhook/lead-crm-esim";
const SPREADSHEET_ID = "1byJirWoUUJfv3WtcpeC7dD12ApQ5evyrGZMtOC_tKZk";

export function CheckoutFlow() {
  const searchParams = useSearchParams();
  const initialProduct = getProductById(searchParams.get("product") ?? "");

  const [product, setProduct] = useState<Product | undefined>(initialProduct);
  const [step, setStep] = useState<Step>("form");
  const [order, setOrder] = useState<CheckoutFormValues | null>(null);
  const [promoCode, setPromoCode] = useState<string | null>(
    searchParams.get("code")
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { name: "", whatsapp: "", device: "", sourceReported: "" },
  });

  const whatsappHref = useMemo(() => {
    if (!product || !order) return "#";
    const pricing = computePricing(product, promoCode);
    let message = buildOrderMessage({ ...order, product });
    if (pricing.promo) {
      message += `\nKode promo: ${pricing.promo.code}`;
    }
    message += `\nTotal dibayar: ${formatIDR(pricing.finalPrice)}`;
    message += `\n(ref: ${buildAttributionPayload(order.sourceReported).ref_token})`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
  }, [order, product, promoCode]);

  const onSubmit = (values: CheckoutFormValues) => {
    setOrder(values);
    setStep("payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConfirmPayment = async () => {
    if (order && product) {
      const pricing = computePricing(product, promoCode);
      const attribution = buildAttributionPayload(order.sourceReported);
      try {
        await fetch(N8N_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            spreadsheetId: SPREADSHEET_ID,
            name: order.name,
            whatsapp: order.whatsapp,
            iphone_model: order.device,
            product_id: product.id,
            promo_code: pricing.promo?.code ?? "",
            source_platform: pricing.promo?.platform ?? "Website",
            price_normal: pricing.normalPrice,
            price_paid: pricing.finalPrice,
            // --- atribusi asli (jejak sepatu + dropdown) ---
            first_source: attribution.first_source,
            current_source: attribution.current_source,
            content_id: attribution.content_id,
            campaign: attribution.campaign,
            source_reported: attribution.source_reported,
          }),
        });
      } catch (err) {
        console.error("Gagal kirim ke n8n:", err);
      }
    }
    setStep("confirm");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---- No product chosen yet: show a picker ---------------------------- */
  if (!product) {
    return <ProductPicker onSelect={setProduct} />;
  }

  const pricing = computePricing(product, promoCode);

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_360px]">
      <div className="order-2 lg:order-1">
        <StepIndicator current={stepIndex[step]} />

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {step === "form" ? (
              <StepShell key="form">
                <h2 className="font-heading text-2xl font-bold text-dark">
                  Data pemesan
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Kami hanya butuh beberapa hal untuk mengaktifkan eSIM kamu.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 flex flex-col gap-5"
                  noValidate
                >
                  <Field
                    id="name"
                    label="Nama"
                    placeholder="Nama kamu"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <Field
                    id="whatsapp"
                    label="Nomor WhatsApp"
                    placeholder="0812xxxxxxx"
                    inputMode="tel"
                    error={errors.whatsapp?.message}
                    {...register("whatsapp")}
                  />
                  <Field
                    id="device"
                    label="Tipe iPhone"
                    placeholder="Contoh: iPhone 12 Pro"
                    error={errors.device?.message}
                    {...register("device")}
                  />

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="sourceReported">Tau eSIMku dari mana?</Label>
                    <select
                      id="sourceReported"
                      className="h-11 w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-dark outline-none transition-colors focus:border-primary"
                      aria-invalid={!!errors.sourceReported}
                      {...register("sourceReported")}
                    >
                      <option value="" disabled>
                        Pilih salah satu…
                      </option>
                      {SOURCE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.sourceReported ? (
                      <p className="text-sm text-red-500">
                        {errors.sourceReported.message}
                      </p>
                    ) : null}
                  </div>

                  <Button type="submit" size="lg" className="mt-2 w-full">
                    Lanjut ke Pembayaran
                    <ArrowRight className="size-4" />
                  </Button>
                </form>
              </StepShell>
            ) : null}

            {step === "payment" ? (
              <StepShell key="payment">
                <h2 className="font-heading text-2xl font-bold text-dark">
                  Bayar dengan QRIS
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Scan kode di bawah pakai aplikasi bank / e-wallet apa pun.
                </p>

                <div className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-6">
                  <div className="relative w-full max-w-[300px] overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                    <Image
                      src={siteConfig.payment.qrisImage}
                      alt="QRIS eSIMku.id"
                      width={1135}
                      height={1600}
                      sizes="(max-width: 640px) 80vw, 300px"
                      className="h-auto w-full object-contain"
                      priority
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-neutral-500">Total pembayaran</p>
                    {pricing.discount > 0 ? (
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-base font-medium text-neutral-400 line-through">
                          {formatIDR(pricing.normalPrice)}
                        </span>
                        <span className="font-heading text-3xl font-bold text-dark">
                          {formatIDR(pricing.finalPrice)}
                        </span>
                      </div>
                    ) : (
                      <p className="font-heading text-3xl font-bold text-dark">
                        {formatIDR(pricing.finalPrice)}
                      </p>
                    )}
                    {pricing.promo ? (
                      <p className="mt-1 text-xs font-medium text-emerald-600">
                        Kode {pricing.promo.code} · Hemat{" "}
                        {formatIDR(pricing.discount)}
                      </p>
                    ) : null}
                    <p className="mt-1 text-xs text-neutral-400">
                      a.n. {siteConfig.payment.merchantName}
                    </p>
                  </div>
                </div>

                {/* Disclosure wajib — sebelum tombol konfirmasi bayar */}
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
                  <Info className="mt-0.5 size-5 shrink-0 text-amber-600" />
                  <p className="text-sm leading-relaxed text-amber-900">
                    Perlu diketahui: eSIM ini internet saja. Tidak bisa telepon atau SMS lewat sinyal, dan tidak bisa menerima OTP dari bank. Tapi WhatsApp jalan normal (termasuk telepon WA), dan bisa dipakai hotspot.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="sm:flex-1"
                    onClick={() => setStep("form")}
                  >
                    <ArrowLeft className="size-4" />
                    Kembali
                  </Button>
                  <Button
                    type="button"
                    size="lg"
                    className="sm:flex-1"
                    onClick={handleConfirmPayment}
                  >
                    Saya Sudah Bayar
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </StepShell>
            ) : null}

            {step === "confirm" ? (
              <StepShell key="confirm">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="size-7 text-primary" />
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-dark">
                  Satu langkah lagi
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                  Kirim bukti pembayaran ke WhatsApp kami. Admin akan mengirim QR
                  eSIM kamu untuk diaktifkan.
                </p>

                <Button asChild size="lg" className="mt-6 w-full">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    Konfirmasi via WhatsApp
                  </a>
                </Button>
                <Button asChild variant="ghost" className="mt-2 w-full">
                  <Link href="/">Kembali ke Beranda</Link>
                </Button>
              </StepShell>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* Order summary */}
      <div className="order-1 lg:order-2">
        <OrderSummary
          product={product}
          pricing={pricing}
          promoCode={promoCode}
          onApplyCode={setPromoCode}
          onChange={() => setProduct(undefined)}
        />
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------- */

function StepShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  ({ id, label, error, ...props }, ref) => (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} ref={ref} aria-invalid={!!error} {...props} />
      {error ? <p className="text-sm text-red-500">{error}</p> : null}
    </div>
  )
);
Field.displayName = "Field";

function OrderSummary({
  product,
  pricing,
  promoCode,
  onApplyCode,
  onChange,
}: {
  product: Product;
  pricing: Pricing;
  promoCode: string | null;
  onApplyCode: (code: string | null) => void;
  onChange: () => void;
}) {
  const [codeInput, setCodeInput] = useState(promoCode ?? "");

  const apply = () => {
    const trimmed = codeInput.trim();
    onApplyCode(trimmed.length ? trimmed : null);
  };

  return (
    <Card className="sticky top-24 flex flex-col gap-5 p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-neutral-500">Ringkasan pesanan</p>
        <button
          type="button"
          onClick={onChange}
          className="text-sm font-medium text-primary hover:underline"
        >
          Ubah
        </button>
      </div>

      <div>
        <p className="font-heading text-lg font-bold text-dark">{product.name}</p>
        <div className="mt-3 flex items-center gap-5 text-sm text-neutral-600">
          <span className="inline-flex items-center gap-1.5">
            <Wifi className="size-4 text-primary" />
            {formatData(product.dataGB)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 text-primary" />
            {formatValidity(product.validityDays)}
          </span>
        </div>
      </div>

      {/* Kode promo */}
      <div className="flex flex-col gap-2 border-t border-neutral-100 pt-4">
        <Label htmlFor="promo">Punya kode promo?</Label>
        <div className="flex gap-2">
          <Input
            id="promo"
            value={codeInput}
            onChange={(e) => setCodeInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                apply();
              }
            }}
            placeholder="mis. TIKTOKHEMAT"
            className="uppercase"
          />
          <Button type="button" variant="secondary" onClick={apply}>
            Pakai
          </Button>
        </div>
        {promoCode && pricing.promo ? (
          <p className="text-sm font-medium text-emerald-600">
            Kode {pricing.promo.code} dipakai · Hemat {formatIDR(pricing.discount)}
          </p>
        ) : promoCode && !pricing.promo ? (
          <p className="text-sm text-red-500">Kode tidak dikenal.</p>
        ) : (
          <p className="text-xs text-neutral-400">
            Dari TikTok/IG? Masukkan kodenya untuk harga khusus.
          </p>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-neutral-100 pt-4">
        <span className="text-sm text-neutral-500">Total</span>
        <div className="text-right">
          {pricing.discount > 0 ? (
            <>
              <span className="block text-sm text-neutral-400 line-through">
                {formatIDR(pricing.normalPrice)}
              </span>
              <span className="font-heading text-2xl font-bold text-dark">
                {formatIDR(pricing.finalPrice)}
              </span>
            </>
          ) : (
            <span className="font-heading text-2xl font-bold text-dark">
              {formatIDR(pricing.finalPrice)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}

function ProductPicker({ onSelect }: { onSelect: (p: Product) => void }) {
  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="font-heading text-2xl font-bold text-dark">Pilih paket dulu</h2>
      <p className="mt-1 text-sm text-neutral-500">
        Tentukan paket internet yang mau kamu beli.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        {products.map((product) => (
          <button
            key={product.id}
            type="button"
            onClick={() => onSelect(product)}
            className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-5 text-left transition-colors hover:border-primary hover:bg-primary/5"
          >
            <div>
              <p className="font-heading font-semibold text-dark">{product.name}</p>
              <p className="text-sm text-neutral-500">
                {formatData(product.dataGB)} • {formatValidity(product.validityDays)}
              </p>
            </div>
            <span className="font-heading text-lg font-bold text-dark">
              {formatIDR(product.price)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}