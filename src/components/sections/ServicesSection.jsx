"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ServiceTabItem from "@/components/ui/ServiceTabItem";
import ServiceDetailCard from "@/components/cards/ServiceDetailCard";
import { servicesData } from "@/data/servicesData";

export default function ServicesSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const detailCardRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    if (typeof window !== "undefined" && window.innerWidth <= 1024) {
      setTimeout(() => {
        if (detailCardRef.current) {
          const yOffset = -24;
          const y =
            detailCardRef.current.getBoundingClientRect().top +
            (window.scrollY || window.pageYOffset || 0) +
            yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <Section
      id="services"
      spacing="none"
      background="transparent"
      className="pt-20 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20"
    >
      <Container size="2xl" className="px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="grid grid-cols-1 gap-y-6 min-[1200px]:grid-cols-12 min-[1200px]:gap-x-12 mb-8 sm:mb-12 min-[1200px]:mb-16">
          {/* Badge */}
          <div className="flex items-start pt-2 min-[1200px]:col-span-4">
            <Badge
              text="What we craft"
              disabled
              color="var(--color-text-muted)"
              className="text-xs font-medium tracking-wide sm:text-sm"
            />
          </div>

          {/* Heading */}
          <div className="min-[1200px]:col-span-8">
            <h2 className="text-[clamp(2.5rem,5.5vw,5.25rem)] font-medium leading-[1.06] tracking-[-0.04em] text-white">
              Solutions that{" "}
              <span className="font-script inline-block text-[1.14em] font-normal leading-[0.8] tracking-[-0.02em]">
                Drive
              </span>{" "}
              results
            </h2>
          </div>
        </div>

        {/* Content Area: Tablet (<1200px) = 2x2 tabs grid + CTA on top, full-width card on bottom; Desktop (>=1200px) = 2 columns */}
        <div className="grid grid-cols-1 min-[1200px]:grid-cols-12 gap-8 min-[1200px]:gap-x-12 xl:gap-x-16 items-start">
          {/* Accordion tabs & Pricing CTA */}
          <div className="min-[1200px]:col-span-4 flex flex-col justify-between h-full">
            {/* Tabs grid: 1 col on mobile, 2 cols on tablet, 1 col on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-1 gap-x-8 lg:gap-x-12 gap-y-1 sm:gap-y-2 min-[1200px]:gap-y-0 min-[1200px]:flex min-[1200px]:flex-col min-[1200px]:justify-between">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.08, 0.45),
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="flex-1 w-full"
                >
                  <ServiceTabItem
                    number={service.number}
                    title={service.title}
                    isActive={activeTabIndex === index}
                    onClick={() => handleTabClick(index)}
                    className="h-full"
                  />
                </motion.div>
              ))}
            </div>

            {/* Pricing CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: Math.min(servicesData.length * 0.08, 0.55),
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="mt-6 sm:mt-8 min-[1200px]:mt-10"
            >
              <Button
                href="/contact"
                variant="light"
                className="w-auto px-6 py-1"
              >
                Let's Connect
              </Button>
            </motion.div>
          </div>

          {/* Service card */}
          <div ref={detailCardRef} className="min-[1200px]:col-span-8 w-full scroll-mt-6">
            <ServiceDetailCard service={servicesData[activeTabIndex]} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
