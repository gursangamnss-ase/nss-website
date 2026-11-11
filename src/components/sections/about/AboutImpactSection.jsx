"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { aboutData } from "@/data/aboutData";
import { trustedClientsData } from "@/data/trustedClientsData";

export default function AboutImpactSection() {
  const { impact } = aboutData;
  const allLogos = trustedClientsData.cards
    .filter((c) => c.type === "logo")
    .flatMap((c) => c.logos || [c]);
  const uniqueLogos = Array.from(
    new Map(allLogos.map((c) => [c.logo, c])).values()
  );
  const marqueeLogos = [...uniqueLogos, ...uniqueLogos];

  const bannerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progress of banner entering and exiting the viewport
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  // Smoothly zoom out from 1.25 to 1.0 as the user scrolls
  const rawScale = useTransform(scrollYProgress, [0, 1], [1.25, 1.0]);
  const scale = useSpring(rawScale, {
    stiffness: 400,
    damping: 50,
    mass: 0.8,
  });

  return (
    <section className="relative bg-white pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-32 overflow-hidden">
      <Container size="2xl">
        {/* Top Header Row: Badge, Impact Statement, Join Us CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-24">
          {/* Badge */}
          <div className="flex items-start pt-2 lg:col-span-4">
            <Badge
              text={impact.badge}
              disabled
              color="var(--color-primary)"
              className="font-medium text-xs sm:text-sm tracking-wide"
            />
          </div>

          {/* Statement & Action */}
          <div className="lg:col-span-8 flex flex-col items-start gap-8 sm:gap-10">
            <h2 className="sr-only">{impact.badge}</h2>
            <p className="text-indent-custom text-[24px] sm:text-[30px] lg:text-[38px] font-medium leading-[1.15] tracking-[-0.035em] text-[var(--color-primary)]">
              Together, we build impactful experiences,
              <br className="hidden md:inline" /> lasting{" "}
              <span className="text-[var(--color-text-secondary)] font-normal">
                relationships, and digital solutions that move
                <br className="hidden md:inline" /> businesses forward.
              </span>
            </p>

            <Button
              href={impact.cta.href}
              variant="dark"
              size="md"
            >
              {impact.cta.text}
            </Button>
          </div>
        </div>
      </Container>

      {/* Full-width Client Logo Cards Marquee Carousel */}
      <Container size="full" className="p-0 mb-16 sm:mb-24">
        <div className="relative w-full overflow-hidden">
          {/* Subtle side fade gradients */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Continuous Right-to-Left Infinite Marquee */}
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {/* First Track */}
            <div className="flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4">
              {marqueeLogos.map((client, idx) => (
                <div
                  key={`track-1-${client.id}-${idx}`}
                  className="relative flex h-[105px] w-[145px] sm:h-[120px] sm:w-[165px] lg:h-[130px] lg:w-[185px] shrink-0 items-center justify-center rounded-[16px] sm:rounded-[20px] bg-[var(--color-surface)] px-6 py-4 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className={`max-h-7 sm:max-h-8 w-auto object-contain brightness-0 opacity-90 transition-opacity duration-300 hover:opacity-100 ${client.imgClassName || ""}`}
                  />
                </div>
              ))}
            </div>

            {/* Seamless Duplicate Track */}
            <div
              className="flex shrink-0 items-center gap-3 sm:gap-4 pr-3 sm:pr-4"
              aria-hidden="true"
            >
              {marqueeLogos.map((client, idx) => (
                <div
                  key={`track-2-${client.id}-${idx}`}
                  className="relative flex h-[105px] w-[145px] sm:h-[120px] sm:w-[165px] lg:h-[130px] lg:w-[185px] shrink-0 items-center justify-center rounded-[16px] sm:rounded-[20px] bg-[var(--color-surface)] px-6 py-4 transition-transform duration-300 hover:scale-[1.02]"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className={`max-h-7 sm:max-h-8 w-auto object-contain brightness-0 opacity-90 transition-opacity duration-300 hover:opacity-100 ${client.imgClassName || ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Wide Studio Banner Photo */}
      <Container size="full" className="p-0">
        <div
          ref={bannerRef}
          className="relative w-full aspect-[16/7] sm:aspect-[21/9] overflow-hidden bg-[var(--color-surface)]"
        >
          <motion.div
            style={{
              scale: shouldReduceMotion ? 1 : scale,
              willChange: "transform",
            }}
            className="relative h-full w-full origin-center"
          >
            <Image
              src={impact.studioBanner.src}
              alt={impact.studioBanner.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

