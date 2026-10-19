"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProjectsData } from "@/data/featuredProjectsData";

export default function FeaturedProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to Echo Studio (02 / 04)
  const touchStartX = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredProjectsData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === featuredProjectsData.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  const currentProject = featuredProjectsData[currentIndex];

  return (
    <section
      id="featured-projects"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[100vh] sm:h-[100vh] lg:h-[100vh] overflow-hidden bg-[#05080c] select-none"
    >
      {/* Background Images with cross-fade */}
      {featuredProjectsData.map((project, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={project.image}
              alt={project.alt}
              fill
              priority={idx === 1 || idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark tint overlay for text contrast */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/45" />
          </div>
        );
      })}

      {/* Progressive Bottom Blur Effect (Frosted glass gradient matching Framer) */}
      <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 lg:h-80 pointer-events-none z-15 overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-[1px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px] [mask-image:linear-gradient(to_bottom,transparent_20%,black_45%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_20%,black_45%)]" />
        <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_bottom,transparent_40%,black_65%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_40%,black_65%)]" />
        <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:linear-gradient(to_bottom,transparent_60%,black_85%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_60%,black_85%)]" />
        <div className="absolute inset-0 backdrop-blur-[14px] [mask-image:linear-gradient(to_bottom,transparent_75%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_75%,black_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex h-full flex-col justify-between p-6 sm:p-10 lg:p-16">
        {/* Top-Left Project Heading */}
        <div className="flex flex-col items-start pt-2 sm:pt-4">
          <h2
            key={`title1-${currentIndex}`}
            className="text-[clamp(3.5rem,7.5vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.04em] text-white"
          >
            {currentProject.titleLine1}
          </h2>
          <h2
            key={`title2-${currentIndex}`}
            className="font-script text-[clamp(4.25rem,8.5vw,8.5rem)] font-normal leading-[0.85] tracking-[-0.02em] text-white mt-2 sm:-mt-5 lg:mt-5 ml-6"
          >
            {currentProject.titleLine2}
          </h2>
        </div>

        {/* Bottom Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-4 w-full">
          {/* Left: Category Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {currentProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-black/25 px-4 py-1.5 text-xs sm:text-sm font-normal text-white backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Center: Pagination & Navigation Arrows */}
          <div className="flex items-center gap-5 sm:gap-6 self-start sm:self-center">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous project"
              className="text-white/70 hover:text-white transition-all text-xl leading-none cursor-pointer hover:scale-115 active:scale-90 p-1"
            >
              ←
            </button>

            <div className="text-sm tracking-wider tabular-nums">
              <span className="font-semibold text-white">
                {currentProject.number}
              </span>
              <span className="text-white/40 mx-1.5">/</span>
              <span className="text-white/60">04</span>
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next project"
              className="text-white/70 hover:text-white transition-all text-xl leading-none cursor-pointer hover:scale-115 active:scale-90 p-1"
            >
              →
            </button>
          </div>

          {/* Right: View project CTA */}
          <div className="flex sm:justify-end">
            <Link
              href={currentProject.href}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#05080c] transition-all duration-300 hover:bg-white/95 hover:shadow-lg hover:gap-3.5"
            >
              <span>View project</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#05080c] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <svg
                  className="h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 10 10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 5h8m-3-3 3 3-3 3"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
