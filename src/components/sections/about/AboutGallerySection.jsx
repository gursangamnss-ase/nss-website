"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { aboutData } from "@/data/aboutData";

export default function AboutGallerySection() {
  const { gallery } = aboutData;
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progress across the dedicated pinned scroll track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scale down from 2.25 (centered on workspace photo) to 1.0 (full complete 3x3 grid)
  const rawScale = useTransform(scrollYProgress, [0, 0.85, 1], [2.25, 1, 1]);

  // Smooth spring response matching Framer reference physics
  const scale = useSpring(rawScale, {
    stiffness: 300,
    damping: 35,
    mass: 0.8,
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[175vh] sm:h-[200vh] bg-[var(--color-primary)]"
    >
      <h2 className="sr-only">Studio Gallery and Workspace</h2>

      {/* Sticky Fullscreen Viewport Pin */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[var(--color-primary)]">
        {/* Full-bleed edge-to-edge 100% width grid with no black side margins, matching Image 2 */}
        <motion.div
          style={{
            scale: shouldReduceMotion ? 1 : scale,
            willChange: "transform",
            transformOrigin: "center center",
          }}
          className="w-full px-2.5 sm:px-3 lg:px-4 grid grid-cols-3 gap-2.5 sm:gap-3 shrink-0"
        >
          {gallery.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[16/7.2] overflow-hidden rounded-[10px] sm:rounded-[16px] bg-neutral-900 shadow-sm"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1200px) 33vw, 50vw"
                priority
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
