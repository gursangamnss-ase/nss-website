"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Clock } from "lucide-react";
import ServiceFeatureTag from "@/components/ui/ServiceFeatureTag";

export default function ServiceDetailCard({ service, className = "" }) {
  if (!service) return null;

  const {
    id,
    title,
    description,
    features = [],
    duration,
    image,
    imageAlt,
    icon: IconComponent,
  } = service;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7 lg:rounded-3xl lg:p-8 backdrop-blur-xl ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col items-stretch gap-6 md:flex-row lg:gap-8 justify-between"
        >
          {/* Info */}
          <div className="flex flex-1 flex-col justify-between gap-5 sm:gap-6 min-[1200px]:gap-0 p-0.5 sm:p-1 min-[1200px]:p-0">
            {/* Top group: Icon, Description, Features */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Icon */}
              {IconComponent ? (
                <div className="text-white">
                  <IconComponent className="size-6 sm:size-7 lg:size-8" strokeWidth={1.5} />
                </div>
              ) : null}

              {/* Description */}
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.4] text-[var(--color-text-muted)] tracking-tight">
                {description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-6 sm:gap-y-3 pt-1">
                {features.map((feature) => (
                  <ServiceFeatureTag key={feature} label={feature} />
                ))}
              </div>
            </div>

            {/* Duration */}
            {duration ? (
              <div className="flex items-center gap-2 pt-3 sm:pt-4 text-[13px] sm:text-[15px] font-medium text-[var(--color-text-muted)]">
                <Clock className="size-4 shrink-0 text-white/70" />
                <span>{duration}</span>
              </div>
            ) : null}
          </div>

          {/* Image */}
          <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-[360px] sm:aspect-auto md:h-[330px] md:w-[360px] lg:h-[340px] lg:w-[420px] min-[1200px]:h-[420px] min-[1200px]:w-[360px] lg:rounded-2xl">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 450px, 400px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
