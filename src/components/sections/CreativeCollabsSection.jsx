"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import { creativeCollabsData } from "@/data/creativeCollabsData";

export default function CreativeCollabsSection() {
  const { header, gallery } = creativeCollabsData;
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <Section
      id="creative-collabs"
      spacing="none"
      background="white"
      className="bg-white text-[#05080c] py-20 sm:py-28 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <Container size="2xl" className="px-5 sm:px-8 lg:px-12">
        {/* Pre-title Badge: Left on mobile/tablet (<lg), Right on laptop/desktop (>=lg) */}
        <div className="flex justify-start lg:justify-end pb-4 sm:pb-6 md:pb-8">
          <Badge
            text={header.badge}
            disabled
            color="#05080c"
            className="text-xs font-medium tracking-wide sm:text-sm text-[#05080c]"
          />
        </div>

        {/* Mobile & Tablet Heading (< lg: 0 - 1023px) - Stacked with inline Ampersand */}
        <div className="flex lg:hidden flex-col items-start gap-1 sm:gap-2">
          {/* Line 1: Ideas & */}
          <div className="inline-flex items-center gap-2 sm:gap-3">
            <h2 className="text-[46px] sm:text-[60px] md:text-[68px] font-semibold leading-[0.85] tracking-[-0.04em] text-[#05080c] select-none">
              {header.titleLine1}
            </h2>
            <div className="w-[42px] sm:w-[56px] md:w-[64px] aspect-[1.1] select-none shrink-0">
              <Image
                src={header.ampersand}
                alt="&"
                width={64}
                height={70}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Line 2: Execution */}
          <div>
            <h2 className="text-[46px] sm:text-[60px] md:text-[68px] font-semibold leading-[0.85] tracking-[-0.04em] text-[#05080c] select-none">
              {header.titleLine2}
            </h2>
          </div>
        </div>

        {/* Desktop & Laptop Heading (>= lg: 1024px+) - Staggered layout */}
        <div className="hidden lg:flex flex-row items-start lg:gap-28 xl:gap-47 2xl:gap-50 relative">
          {/* Left: Ideas + Script Ampersand overlapping */}
          <div className="relative inline-flex items-center shrink-0">
            <h2 className="text-[clamp(5.2rem,8.5vw,9.5rem)] font-semibold leading-[0.8] tracking-[-0.04em] text-[#05080c] select-none">
              {header.titleLine1}
            </h2>

            {/* Script Ampersand SVG overlapping between Ideas and Execution */}
            <div className="absolute left-[88%] -top-2 lg:-top-4 w-[150px] lg:w-[190px] xl:w-[260px] 2xl:w-[310px] aspect-[1.1] pointer-events-none select-none z-10">
              <Image
                src={header.ampersand}
                alt="&"
                width={342}
                height={348}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right: Execution pushed down to align on line 2 */}
          <div className="pt-20 lg:pt-28 xl:pt-36 2xl:pt-44 w-full">
            <h2 className="text-[clamp(5.5rem,12vw,14rem)] font-semibold leading-[0.8] tracking-[-0.04em] text-[#05080c] select-none">
              {header.titleLine2}
            </h2>
          </div>
        </div>

        {/* Lower Content: (@2K26) on left/top + Narrative & Back Catalog */}
        <div className="mt-10 sm:mt-14 lg:mt-20 flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 xl:gap-40">
          {/* Left: Year tag */}
          <div className="shrink-0 lg:w-[20%] xl:w-[22%]">
            <h3 className="text-xl sm:text-2xl lg:text-[28px] font-medium tracking-[-0.03em] text-[#05080c] whitespace-nowrap">
              {header.yearTag}
            </h3>
          </div>

          {/* Right: Narrative Description and Catalog Gallery */}
          <div className="flex-1 flex flex-col items-start w-full">
            {/* Paragraph with bold accents */}
            <p className="text-base sm:text-lg lg:text-xl font-normal leading-[1.38] tracking-[-0.015em] text-[#5b5b5b]">
              {header.description.lead}
              <span className="font-medium text-[#05080c]">
                {header.description.highlight1}
              </span>
              {header.description.middle}
              <span className="font-medium text-[#05080c]">
                {header.description.highlight2}
              </span>
              {header.description.end}
            </p>

            {/* The Back Catalog Badge */}
            <div className="mt-8 sm:mt-10 lg:mt-12 mb-3">
              <Badge
                text={header.catalogBadge}
                disabled
                color="#05080c"
                className="text-xs font-medium tracking-wide sm:text-sm text-[#05080c]"
              />
            </div>

            {/* Gallery Thumbnails List: 4 cols on mobile/tablet, 6 cols on laptop/desktop */}
            <div className="w-full grid grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 md:gap-3">
              {gallery.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  title={`View ${item.title}`}
                  className="group relative aspect-square w-full overflow-hidden rounded-[12px] sm:rounded-[14px] md:rounded-[16px] bg-[#dadadb] focus:outline-none focus:ring-2 focus:ring-[#05080c]/20 cursor-zoom-in"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Lightbox Modal matching Image 2 */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-[2px] transition-opacity duration-300 cursor-pointer"
        >
          <div
            onClick={() => setSelectedImage(null)}
            className="relative aspect-square w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] overflow-hidden rounded-[20px] sm:rounded-[24px] shadow-2xl transition-transform duration-300 ease-out hover:scale-[1.01]"
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.alt}
              fill
              priority
              className="object-cover select-none"
              sizes="(max-width: 640px) 340px, (max-width: 768px) 420px, 460px"
            />
          </div>
        </div>
      )}
    </Section>
  );
}
