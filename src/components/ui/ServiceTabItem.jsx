"use client";

import { ChevronRight } from "lucide-react";

export default function ServiceTabItem({
  number,
  title,
  isActive = false,
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex w-full items-center justify-between border-b py-5 text-left transition-all duration-300 sm:py-6 lg:py-7.5 ${isActive
        ? "border-white/50"
        : "border-white/15 hover:border-white/35"
        } ${className}`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`font-script text-[28px] leading-none tracking-wide transition-all duration-300 sm:text-[32px] lg:text-[34px] shrink-0 ${isActive
            ? "text-white opacity-100"
            : "text-[var(--color-text-muted)] opacity-60 group-hover:opacity-85"
            }`}
        >
          {number}
        </span>
        <span
          className={`text-[18px] -translate-y-1.5 font-medium leading-tight tracking-[-0.025em] transition-all duration-300 sm:text-[21px] lg:text-[28px] whitespace-nowrap ${isActive
            ? "text-white opacity-100"
            : "text-[var(--color-text-muted)] opacity-60 group-hover:opacity-85"
            }`}
        >
          {title}
        </span>
      </div>

      <span
        aria-hidden="true"
        className={`flex size-8.5 -translate-y-1.5 shrink-0 items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300 sm:size-9 lg:size-10 ${isActive
          ? "scale-100 bg-white/10 border border-white/20 text-white opacity-100"
          : "scale-75 bg-transparent border border-transparent text-transparent opacity-0 pointer-events-none"
          }`}
      >
        <ChevronRight className="size-4 sm:size-4.5" strokeWidth={1.75} />
      </span>
    </button>
  );
}
