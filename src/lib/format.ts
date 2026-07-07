/** Format an IDR integer as Indonesian Rupiah, e.g. 24000 -> "Rp24.000". */
export function formatIDR(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Human-readable validity label, e.g. 7 -> "7 hari". */
export function formatValidity(days: number): string {
  return `${days} hari`;
}

/** Human-readable data label, e.g. 1 -> "1 GB". */
export function formatData(gb: number): string {
  return `${gb} GB`;
}
