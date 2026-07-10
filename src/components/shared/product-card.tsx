"use client";

import Link from "next/link";
import { Wifi, CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatIDR, formatData, formatValidity } from "@/lib/format";
import { getNormalPrice } from "@/lib/pricing";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const normalPrice = getNormalPrice(product);
  const hasCodePrice = product.price < normalPrice;

  return (
    <Card
      className={cn(
        "flex h-full w-full flex-col gap-6 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md",
        product.featured && "border-primary/40 ring-1 ring-primary/20"
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-heading text-lg font-semibold text-dark">
            {product.name}
          </p>
          <p className="mt-1 text-sm text-neutral-400">Indonesia • eSIM roaming</p>
        </div>
        {product.badge ? (
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="flex items-center gap-5 text-sm text-neutral-600">
        <span className="inline-flex items-center gap-1.5">
          <Wifi className="size-4 text-primary" />
          {formatData(product.dataGB)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-4 text-primary" />
          {formatValidity(product.validityDays)}
        </span>
      </div>

      <div className="mt-auto">
        <p className="font-heading text-3xl font-bold text-dark">
          {formatIDR(normalPrice)}
        </p>
        {hasCodePrice ? (
          <p className="mt-1 text-xs font-medium text-emerald-600">
            {formatIDR(product.price)} pakai kode dari TikTok/IG
          </p>
        ) : (
          <p className="text-xs text-neutral-400">Harga sekali beli</p>
        )}
      </div>

      <Button asChild className="w-full" variant={product.featured ? "primary" : "secondary"}>
        <Link href={`/checkout?product=${product.id}`}>
          Pilih Paket
          <ArrowRight className="size-4" />
        </Link>
      </Button>
    </Card>
  );
}