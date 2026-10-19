"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Badge from "@/components/ui/Badge";
import BrandStoriesCard from "@/components/cards/BrandStoriesCard";
import { brandStoriesData } from "@/data/brandStoriesData";

export default function BrandStoriesSection() {
  const { badge, steps } = brandStoriesData;
  const sectionRef = useRef(null);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Desktop horizontal split:
  // Starts centered (translated inward by ~246px) and glides outward to the sides as user scrolls
  const leftX = useTransform(scrollYProgress, [0, 0.10, 0.25], [246, 246, 0]);
  const rightX = useTransform(scrollYProgress, [0, 0.10, 0.25], [-246, -246, 0]);

  return (
    <section
      ref={sectionRef}
      id="brand-stories"
      className="relative bg-[#f5f5f5] text-[#05080c] pt-20 sm:pt-28 lg:pt-32 pb-24 sm:pb-36 lg:pb-44"
    >
      {/* Pre-title Badge - Centered */}
      <div className="flex justify-center mb-10 sm:mb-14 px-4">
        <Badge
          text={badge}
          disabled
          color="#05080c"
          className="font-medium text-xs sm:text-sm tracking-wide"
        />
      </div>

      {/* ============================================================== */}
      {/* MOBILE / TABLET LAYOUT (< lg): Unified title + vertical stack  */}
      {/* ============================================================== */}
      <div className="lg:hidden px-5 sm:px-8 max-w-[540px] mx-auto">
        <h2 className="text-center text-[clamp(2.25rem,6.5vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.04em] text-[#05080c] mb-12 sm:mb-16">
          Your ideas transform <br />
          into{" "}
          <span className="font-script text-[1.25em] font-normal leading-none inline-block align-baseline">
            Brand
          </span>{" "}
          stories
        </h2>

        <div className="flex flex-col items-center gap-7 sm:gap-9">
          {steps.map((step) => (
            <BrandStoriesCard key={step.id} {...step} />
          ))}
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP LAYOUT (>= lg): 3-column split sticky scroll           */}
      {/* ============================================================== */}
      <div className="hidden lg:block max-w-[1400px] mx-auto px-8 xl:px-12">
        <div className="relative flex justify-center items-start gap-10 xl:gap-14 min-h-[2400px]">
          {/* Left Sticky Column: "Your ideas into Brand" */}
          <motion.div
            style={{ x: leftX }}
            className="sticky top-[30vh] w-[340px] xl:w-[380px] shrink-0 flex flex-col items-end text-right select-none pointer-events-none z-10"
          >
            <div className="flex flex-col items-end">
              <span className="text-[clamp(2.75rem,3.8vw,4.25rem)] font-medium tracking-[-0.04em] text-[#05080c] leading-[1.12]">
                Your ideas
              </span>
              <div className="flex items-baseline justify-end gap-2.5 mt-1.5">
                <span className="text-[clamp(2.75rem,3.8vw,4.25rem)] font-medium tracking-[-0.04em] text-[#05080c] leading-[1.12]">
                  into
                </span>
                <span className="font-script text-[clamp(3.5rem,4.8vw,5.25rem)] font-normal text-[#05080c] leading-none">
                  Brand
                </span>
              </div>
            </div>
          </motion.div>

          {/* Center Column: Spacer + 3 Scrolling Cards */}
          <div className="w-[420px] xl:w-[440px] shrink-0 flex flex-col items-center z-20">
            {/* Top spacer so the centered titles have clear space before cards scroll up */}
            <div className="h-[520px] xl:h-[580px] w-full" aria-hidden="true" />

            {/* Cards Stack */}
            <div className="flex flex-col items-center gap-12 xl:gap-16 w-full">
              {steps.map((step) => (
                <BrandStoriesCard
                  key={step.id}
                  {...step}
                  className="w-full"
                />
              ))}
            </div>

            {/* Bottom spacer for comfortable scroll out */}
            <div className="h-[260px] w-full" aria-hidden="true" />
          </div>

          {/* Right Sticky Column: "transform stories" */}
          <motion.div
            style={{ x: rightX }}
            className="sticky top-[30vh] w-[340px] xl:w-[380px] shrink-0 flex flex-col items-start text-left select-none pointer-events-none z-10"
          >
            <div className="flex flex-col items-start">
              <span className="text-[clamp(2.75rem,3.8vw,4.25rem)] font-medium tracking-[-0.04em] text-[#05080c] leading-[1.12]">
                transform
              </span>
              <div className="flex items-baseline justify-start mt-1.5">
                <span className="text-[clamp(2.75rem,3.8vw,4.25rem)] font-medium tracking-[-0.04em] text-[#05080c] leading-[1.12]">
                  stories
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
