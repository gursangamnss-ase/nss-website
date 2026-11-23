"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ServiceTabItem from "@/components/ui/ServiceTabItem";
import Badge from "@/components/ui/Badge";

import CareerHiringProcessDetailCard from "@/components/cards/CareerHiringProcessDetailCard";

import { careerHiringProcessData } from "@/data/careerHiringProcessData";

export default function CareerHiringProcessSection() {
    const [activeStepIndex, setActiveStepIndex] = useState(0);
    const detailCardRef = useRef(null);

    const shouldReduceMotion = useReducedMotion();

    const activeStep = careerHiringProcessData[activeStepIndex];

    const handleStepClick = (index) => {
        setActiveStepIndex(index);
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
            id="hiring-process"
            spacing="xl"
            background="dark"
            className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-32"
        >
            {/* =========================================
                BACKGROUND
            ========================================== */}
            <div
                className="pointer-events-none absolute inset-0 overflow-hidden"
                aria-hidden="true"
            >
                {/* Main background */}
                <div
                    className="absolute inset-0 bg-[var(--color-primary)]"
                />

                {/* Background image texture */}
                <div className="absolute inset-0">
                    <Image
                        src="/career/career-black-bg.webp"
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover object-center opacity-75"
                    />
                </div>

                {/* Left subtle glow */}
                <div
                    className="absolute left-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-3xl"
                />

                {/* Right subtle glow */}
                <div
                    className="absolute bottom-[-200px] right-[-150px] h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-3xl"
                />
            </div>

            <Container
                size="2xl"
                className="px-5 sm:px-8 lg:px-12 relative z-10"
            >
                {/* =========================================
                    HEADER - Exact grid alignment matching ServicesSection (Image 2)
                ========================================== */}
                <div
                    className="grid grid-cols-1 gap-y-6 min-[1200px]:grid-cols-12 min-[1200px]:gap-x-12 mb-8 sm:mb-12 min-[1200px]:mb-16"
                >
                    {/* =========================================
                        LEFT — BADGE
                    ========================================== */}
                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                      opacity: 0,
                                      x: -25,
                                  }
                        }
                        whileInView={
                            shouldReduceMotion
                                ? {}
                                : {
                                      opacity: 1,
                                      x: 0,
                                  }
                        }
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-start pt-2 min-[1200px]:col-span-4"
                    >
                        <Badge
                            text="What we craft"
                            disabled
                            color="var(--color-text-muted)"
                            className="text-xs font-medium tracking-wide sm:text-sm text-[var(--color-text-muted)]"
                        />
                    </motion.div>

                    {/* =========================================
                        RIGHT — MAIN HEADING (Aligned with cards)
                    ========================================== */}
                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                      opacity: 0,
                                      x: 25,
                                  }
                        }
                        whileInView={
                            shouldReduceMotion
                                ? {}
                                : {
                                      opacity: 1,
                                      x: 0,
                                  }
                        }
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.65,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="min-[1200px]:col-span-8"
                    >
                        <h2 className="text-[clamp(2.5rem,5.5vw,5.25rem)] font-medium leading-[1.06] tracking-[-0.04em] text-white">
                            Our Hiring{" "}
                            <span
                                className="font-script inline-block text-[1.14em] font-normal leading-[0.8] tracking-[-0.02em]"
                            >
                                Process
                            </span>
                        </h2>
                    </motion.div>
                </div>

                {/* =========================================
                    MAIN CONTENT: Tablet (<1200px) = 2-col tabs grid on top, full-width card on bottom; Desktop (>=1200px) = 2 columns side-by-side
                ========================================== */}
                <div
                    className="grid grid-cols-1 min-[1200px]:grid-cols-12 gap-8 min-[1200px]:gap-x-12 xl:gap-x-16 items-start"
                >
                    {/* =========================================
                        STEPS (min-[1200px]:col-span-4)
                    ========================================== */}
                    <div className="min-[1200px]:col-span-4 flex flex-col justify-between h-full">
                        {/* Tabs grid: 1 col on mobile, 2 cols on tablet/1024px, 1 col on desktop */}
                        <div className="grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-1 gap-x-8 lg:gap-x-12 gap-y-1 sm:gap-y-2 min-[1200px]:gap-y-0 min-[1200px]:flex min-[1200px]:flex-col min-[1200px]:justify-between">
                            {careerHiringProcessData.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={
                                        shouldReduceMotion
                                            ? false
                                            : {
                                                  opacity: 0,
                                                  y: 20,
                                              }
                                    }
                                    whileInView={
                                        shouldReduceMotion
                                            ? {}
                                            : {
                                                  opacity: 1,
                                                  y: 0,
                                              }
                                    }
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: Math.min(index * 0.08, 0.45),
                                        ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                    className="flex-1 w-full"
                                >
                                    <ServiceTabItem
                                        number={step.number}
                                        title={step.title}
                                        isActive={
                                            activeStepIndex === index
                                        }
                                        onClick={() =>
                                            handleStepClick(index)
                                        }
                                        className="h-full"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* =========================================
                        DETAIL (min-[1200px]:col-span-8 aligned with heading)
                    ========================================== */}
                    <div ref={detailCardRef} className="min-[1200px]:col-span-8 w-full min-w-0 scroll-mt-6">
                        <AnimatePresence mode="wait">
                            <CareerHiringProcessDetailCard
                                key={activeStep.id}
                                step={activeStep}
                            />
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </Section>
    );
}