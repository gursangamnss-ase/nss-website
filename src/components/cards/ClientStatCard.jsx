"use client";

import CountUp from "@/components/ui/CounterUp";

export default function ClientStatCard({
  count = "86+",
  label = "Trusted clients",
  className = "",
}) {
  // Parse target number from count string (e.g. "86+" -> 86)
  const targetNumber = parseInt(count.replace(/\D/g, ""), 10) || 86;
  const suffix = count.replace(/\d/g, "") || "+";

  return (
    <div
      className={`group relative flex h-[130px] flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:h-[140px] ${className}`}
    >
      <div className="flex items-baseline justify-center">
        <span className="font-script text-[54px] font-normal leading-[0.75] tracking-[-0.03em] text-white sm:text-[64px] lg:text-[72px]">
          <CountUp to={targetNumber} from={0} duration={1.6} />
        </span>
        <span className="font-script text-[42px] font-normal leading-[0.75] tracking-[-0.03em] text-white sm:text-[50px] lg:text-[58px]">
          {suffix}
        </span>
      </div>
      <p className="mt-2.5 text-xs font-normal tracking-wide text-[var(--color-text-muted)] sm:text-[13px]">
        {label}
      </p>
    </div>
  );
}
