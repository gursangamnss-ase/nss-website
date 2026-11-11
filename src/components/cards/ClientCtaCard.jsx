"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ClientCtaCard({
  text = "Join us now",
  href = "#contact",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`group relative flex h-[130px] sm:h-[140px] items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-[6px] px-5 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:scale-[1.02] ${className}`}
    >
      {/* Dual layer vertical text roll on hover */}
      <span className="relative inline-flex flex-col h-[1.3em] overflow-hidden text-sm sm:text-[15px] font-medium tracking-tight text-white">
        <span className="block origin-center transition-all duration-450 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full group-hover:scale-80 group-hover:opacity-0">
          {text}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 block origin-center translate-y-full scale-120 opacity-0 transition-all duration-450 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
        >
          {text}
        </span>
      </span>

      {/* Circle badge with arrow shoot-through and shrink scale */}
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-[var(--color-primary)] shadow-sm transition-transform duration-450 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:scale-85">
        <ArrowRight
          size={14}
          strokeWidth={2.5}
          className="transition-all duration-450 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:translate-x-4 group-hover:opacity-0"
        />
        <ArrowRight
          size={14}
          strokeWidth={2.5}
          aria-hidden="true"
          className="absolute -translate-x-4 opacity-0 transition-all duration-450 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:translate-x-0 group-hover:opacity-100"
        />
      </span>
    </Link>
  );
}
