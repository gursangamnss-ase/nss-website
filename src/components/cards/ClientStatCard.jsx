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
      className={`relative flex h-[130px] sm:h-[140px] flex-col items-center justify-center bg-transparent px-4 py-4 text-center select-none ${className}`}
    >
      <div className="flex items-baseline justify-center">
        <span className="font-script text-[60px] sm:text-[72px] lg:text-[84px] font-normal leading-[0.7] tracking-[-0.04em] text-white">
          <CountUp to={targetNumber} from={0} duration={1.6} />
        </span>
        <span className="font-script text-[48px] sm:text-[58px] lg:text-[68px] font-normal leading-[0.7] tracking-[-0.04em] text-white">
          {suffix}
        </span>
      </div>
      <p className="mt-3 text-[13px] sm:text-[14px] font-normal tracking-normal text-[#AAA9AD]">
        {label}
      </p>
    </div>
  );
}
