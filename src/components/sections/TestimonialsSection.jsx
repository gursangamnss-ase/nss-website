"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import RatingStars from "@/components/ui/RatingStars";
import { testimonialsData } from "@/data/testimonialsData";

export default function TestimonialsSection() {
  const { badge, autoPlayInterval = 3000, testimonials } = testimonialsData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance every 3 seconds (resets on activeIndex change or manual interaction)
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused, autoPlayInterval, testimonials.length]);

  const activeTestimonial = testimonials[activeIndex] || testimonials[0];

  const handleAvatarClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Section
      id="testimonials"
      spacing="none"
      background="dark"
      className="relative overflow-hidden bg-[var(--color-primary)] py-16 sm:py-20 lg:py-24 text-white select-none"
    >
      <h2 className="sr-only">Client Testimonials</h2>

      {/* Background Image with Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/services/services-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>

      <Container size="2xl">
        <div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 sm:gap-10 lg:gap-16 xl:gap-[100px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Column (Desktop) / Top Section (Mobile & Tablet) */}
          <div className="flex flex-col items-start gap-4 sm:gap-5 shrink-0">
            {/* Badge */}
            <Badge
              text={badge}
              disabled
              color="var(--color-text-white)"
              className="text-xs sm:text-sm font-medium tracking-wide text-white"
            />

            {/* Avatar List */}
            <div className="flex flex-row lg:grid lg:grid-cols-3 gap-2.5 sm:gap-[10px] items-center overflow-x-auto max-w-full pb-1 no-scrollbar">
              {testimonials.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.id || index}
                    type="button"
                    onClick={() => handleAvatarClick(index)}
                    aria-label={`View review by ${item.name}`}
                    aria-pressed={isActive}
                    className={`relative size-[46px] sm:size-[54px] lg:size-[60px] shrink-0 rounded-[10px] overflow-hidden transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isActive
                        ? "border-2 border-white opacity-100 shadow-md scale-102"
                        : "border-2 border-transparent opacity-40 hover:opacity-80"
                    }`}
                  >
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="60px"
                      className={`object-cover object-center transition-all duration-300 ${
                        isActive ? "grayscale-0" : "grayscale"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (Desktop) / Bottom Content (Mobile & Tablet) */}
          <div className="flex-1 min-w-0 max-w-[760px] pt-1 sm:pt-2">
            {/* Star Rating */}
            <div className="mb-4 sm:mb-5">
              <RatingStars
                rating={activeTestimonial.rating || 5}
                variant="light"
                size={16}
              />
            </div>

            {/* Quote */}
            <div
              key={`quote-${activeIndex}`}
              className="transition-all duration-400 ease-out animate-fadeIn"
            >
              <blockquote className="text-xl sm:text-2xl md:text-[26px] lg:text-[30px] font-normal leading-[1.3] tracking-[-0.02em] text-white">
                “{activeTestimonial.quote}”
              </blockquote>

              {/* Author Details */}
              <div className="mt-5 sm:mt-6">
                <p className="text-base sm:text-[17px] font-medium text-white tracking-tight">
                  {activeTestimonial.name}
                </p>
                <p className="mt-0.5 text-xs sm:text-sm text-[var(--color-text-muted)] font-normal">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
