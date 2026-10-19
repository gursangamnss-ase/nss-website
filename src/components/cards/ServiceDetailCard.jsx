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
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-7 lg:rounded-3xl lg:p-8 ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col items-stretch gap-6 md:flex-row lg:gap-8"
        >
          {/* Info */}
          <div className="flex flex-1 flex-col justify-between">
            {/* Icon */}
            <div>
              {IconComponent ? (
                <div className="text-white">
                  <IconComponent className="size-7 sm:size-8" strokeWidth={1.5} />
                </div>
              ) : null}
            </div>

            {/* Description */}
            <p className="text-[16px] leading-[1.38] text-[var(--color-text-muted)] sm:text-[17px] lg:text-[18px]">
              {description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-6">
              {features.map((feature) => (
                <ServiceFeatureTag key={feature} label={feature} />
              ))}
            </div>

            {/* Duration */}
            {duration ? (
              <div className="flex items-center gap-2 pt-2 text-[14px] font-medium text-[var(--color-text-muted)] sm:text-[16px]">
                <Clock className="size-4 shrink-0 text-white/70" />
                <span>{duration}</span>
              </div>
            ) : null}
          </div>

          {/* Image */}
          <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-xl border border-white/10 sm:h-[390px] md:w-[320px] lg:h-[430px] lg:w-[360px] lg:rounded-2xl">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 360px, 400px"
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
