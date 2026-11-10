"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import Container from "@/components/layout/Container";

function ImageLightboxModal({ image, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!image) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, handleKeyDown]);

  if (!image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox preview"
      onClick={onClose}
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/85 p-4 sm:p-8 md:p-12 backdrop-blur-sm cursor-zoom-out"
    >
      {/* Top-Right Floating Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close enlarged image view"
        className="fixed top-5 right-5 z-[510] flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
      >
        <span className="text-xl leading-none">✕</span>
      </button>

      {/* Centered Enlarged Image Container */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] max-w-[92vw] overflow-hidden rounded-[20px] sm:rounded-3xl bg-neutral-900 shadow-2xl cursor-default"
      >
        <Image
          src={image.src}
          alt={image.alt || "Enlarged project visual"}
          width={1800}
          height={1200}
          priority
          sizes="(max-width: 1024px) 92vw, 1400px"
          className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain select-none block"
        />
      </motion.div>
    </motion.div>
  );
}

export function ProjectShowcaseBanner({ image, alt = "Project showcase" }) {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`View enlarged ${alt}`}
          className="group relative aspect-[16/9] md:aspect-[21/9] min-h-[380px] sm:min-h-[500px] lg:min-h-[620px] w-full overflow-hidden bg-neutral-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] cursor-zoom-in block text-left"
        >
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
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 pointer-events-none" />
        </button>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <ImageLightboxModal
            image={{ src: image, alt }}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export function ProjectGalleryGrid({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

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
              <button
                key={img + idx}
                type="button"
                onClick={() =>
                  setSelectedImage({
                    src: img,
                    alt: `Project gallery image ${idx + 1}`,
                  })
                }
                aria-label={`View enlarged project gallery image ${idx + 1}`}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-[24px] sm:rounded-3xl bg-neutral-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] cursor-zoom-in text-left block"
              >
                <Image
                  src={img}
                  alt={`Project gallery image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15 pointer-events-none" />
              </button>
            ))}
          </div>

          {/* Bottom Row: 1 Full-Width Image */}
          {bottomImage && (
            <button
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: bottomImage,
                  alt: "Project gallery showcase",
                })
              }
              aria-label="View enlarged project gallery showcase image"
              className="group relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-[24px] sm:rounded-3xl bg-neutral-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] cursor-zoom-in text-left block"
            >
              <Image
                src={bottomImage}
                alt="Project gallery showcase"
                fill
                sizes="100vw"
                className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15 pointer-events-none" />
            </button>
          )}
        </div>
      </Container>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageLightboxModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
