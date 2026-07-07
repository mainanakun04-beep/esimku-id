import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = ["Data", "Bayar", "Konfirmasi"] as const;

interface StepIndicatorProps {
  /** Zero-based index of the active step */
  current: number;
}

export function StepIndicator({ current }: StepIndicatorProps) {
  return (
    <ol className="flex items-center justify-center gap-2 sm:gap-4">
      {steps.map((label, index) => {
        const done = index < current;
        const active = index === current;
        return (
          <li key={label} className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex size-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                  done && "bg-primary text-white",
                  active && "bg-primary/15 text-primary ring-2 ring-primary",
                  !done && !active && "bg-neutral-100 text-neutral-400"
                )}
              >
                {done ? <Check className="size-4" /> : index + 1}
              </span>
              <span
                className={cn(
                  "hidden text-sm font-medium sm:inline",
                  active || done ? "text-dark" : "text-neutral-400"
                )}
              >
                {label}
              </span>
            </div>
            {index < steps.length - 1 ? (
              <span
                className={cn(
                  "h-px w-6 sm:w-10",
                  index < current ? "bg-primary" : "bg-neutral-200"
                )}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
