"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Container from "@/components/layout/Container";

export function ProjectShowcaseBanner({ image, alt = "Project showcase" }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Extracted directly from Framer source:
  // __framer__transformTargets: scale transforms from 1.2 to 1.02
  const rawScale = useTransform(scrollYProgress, [0, 1], [1.2, 1.02]);

  // Framer spring physics: stiffness: 500, damping: 60, mass: 1, bounce: 0
  const scale = useSpring(rawScale, {
    stiffness: 500,
    damping: 60,
    mass: 1,
  });

  if (!image) return null;

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white"
    >
      <Container size="full">
        <div className="relative aspect-[16/9] md:aspect-[21/9] min-h-[380px] sm:min-h-[500px] lg:min-h-[620px] w-full overflow-hidden bg-neutral-900 shadow-sm">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.2,
              ease: [0.44, 0, 0.56, 1],
            }}
            style={{
              scale,
              willChange: "transform, opacity",
            }}
            className="relative h-full w-full origin-center"
          >
            <Image
              src={image}
              alt={alt}
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

export function ProjectGalleryGrid({ images = [] }) {
  if (!images || images.length === 0) return null;

  const topImages = images.slice(0, 2);
  const bottomImage = images[2] || images[0];

  return (
    <section className="bg-white py-8 sm:py-14">
      <Container size="2xl">
        <div className="space-y-6 sm:space-y-8">
          {/* Top Row: 2 Side-by-Side Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {topImages.map((img, idx) => (
              <div
                key={img + idx}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] sm:rounded-3xl bg-neutral-900 shadow-sm"
              >
                <Image
                  src={img}
                  alt={`Project gallery image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Bottom Row: 1 Full-Width Image */}
          {bottomImage && (
            <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[24px] sm:rounded-3xl bg-neutral-900 shadow-sm">
              <Image
                src={bottomImage}
                alt="Project gallery showcase"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
