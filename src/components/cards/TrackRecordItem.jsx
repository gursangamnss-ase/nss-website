"use client";

import CountUp from "@/components/ui/CounterUp";

export default function TrackRecordItem({ stat, index = 0 }) {
  const { value, symbol, isScriptSymbol = true, description } = stat;

  return (
    <div className="flex flex-row items-center justify-between gap-6 sm:gap-10 first:pt-0 pt-4 sm:pt-6 pb-6 sm:pb-8 lg:pb-9 border-b border-[#dadadb]">
      {/* Left Column: Animated Number + Symbol */}
      <div className="flex items-baseline shrink-0 select-none">
        <span className="text-[44px] sm:text-[64px] lg:text-[84px] font-medium tracking-[-0.04em] text-[#05080c] leading-none">
          <CountUp
            to={value}
            from={0}
            duration={1.8}
            delay={index * 0.12}
          />
        </span>
        {symbol && (
          <span
            className={`${
              isScriptSymbol ? "font-script" : ""
            } text-[40px] sm:text-[60px] lg:text-[76px] font-normal text-[#05080c] leading-none ml-0.5 sm:ml-1`}
          >
            {symbol}
          </span>
        )}
      </div>

      {/* Right Column: Metric Description */}
      <div className="w-[50%] sm:w-[54%] max-w-[340px]">
        <p className="text-sm sm:text-base md:text-[18px] font-medium text-[#5b5b5b] leading-snug sm:leading-relaxed text-left">
          {description}
        </p>
      </div>
    </div>
  );
}

