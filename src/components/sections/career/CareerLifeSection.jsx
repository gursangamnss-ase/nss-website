"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import careerLifeData from "@/data/careerLifeData";

export default function CareerLifeSection({
    className = "",
    id = "life-at-netsquare",
}) {
    const shouldReduceMotion = useReducedMotion();
    const header = careerLifeData.header || {
        badge: "Life at NetSquare Softwares",
        headingHighlight: "A culture where curious minds craft remarkable digital products.",
        headingRestLine1: "Built for momentum,",
        headingRestLine2: "true engineering ownership, and continuous career growth.",
    };
    const items = Array.isArray(careerLifeData) ? careerLifeData : careerLifeData.items || [];

    return (
        <Section
            id={id}
            spacing="none"
            background="dark"
            className={`relative overflow-hidden text-white py-16 sm:py-20 lg:py-28 ${className}`.replace(/\s+/g, " ").trim()}
        >
            {/* Background image & glow effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0 bg-[var(--color-primary)]" />
                <div className="absolute inset-0">
                    <Image
                        src="/career/career-black-bg.webp"
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover object-center opacity-75"
                    />
                </div>
                <div className="absolute left-[-180px] top-[20%] h-[420px] w-[420px] rounded-full bg-white/[0.02] blur-3xl" />
                <div className="absolute right-[-180px] bottom-[-100px] h-[420px] w-[420px] rounded-full bg-white/[0.015] blur-3xl" />
            </div>

            <Container size="2xl" className="px-5 sm:px-8 lg:px-12 relative z-10">
                <h2 className="sr-only">Life at NetSquare Softwares</h2>

                {/* Header - Aligned with IndustriesSection / TrustedClientsSection layout */}
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:grid-cols-2 md:gap-3 lg:grid-cols-6 items-start"
                >
                    {/* Badge */}
                    <div className="flex items-start pt-1 sm:pt-2 lg:col-span-2">
                        <Badge
                            text={header.badge}
                            disabled
                            color="var(--color-text-muted)"
                            className="text-xs font-medium tracking-wide sm:text-sm text-white/80"
                        />
                    </div>

                    {/* Heading sentence */}
                    <div className="lg:col-span-4">
                        <p className="indent-14 sm:indent-24 lg:text-indent-custom text-[27px] sm:text-[32px] lg:text-[38px] font-medium leading-[1.14] tracking-[-0.035em] text-[var(--color-text-muted)]">
                            <span className="text-white">
                                {header.headingHighlight}
                            </span>{" "}
                            {header.headingRestLine1 || "Built for momentum,"}{" "}
                            <br className="hidden sm:inline" />
                            {header.headingRestLine2 || "true engineering ownership, and continuous career growth."}
                        </p>
                    </div>
                </motion.div>

                {/* 8 Career Life Cards (4 columns x 2 rows) */}
                <div className="mt-8 sm:mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-3.5">
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                                duration: 0.5,
                                delay: shouldReduceMotion ? 0 : Math.min(idx * 0.06, 0.45),
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className="h-full"
                        >
                            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-[6px] transition-all duration-300 hover:scale-[1.01] hover:border-white/20 hover:bg-white/[0.06] cursor-pointer select-none">
                                {/* Complete Image at Top with Upper Rounded Edges & Hover Zoom */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/[0.06] bg-white/[0.02]">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-20"
                                        aria-hidden="true"
                                    />
                                </div>

                                {/* Content Below (Title with animation + Description) */}
                                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                                    <div className="flex flex-col gap-2">
                                        {/* Dual-layer vertical text roll animation on card title (matching IndustriesSection) */}
                                        <h3 className="relative inline-flex flex-col h-[1.3em] overflow-hidden text-lg sm:text-xl font-bold tracking-tight text-white">
                                            <span className="block origin-left transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full group-hover:scale-[0.85] group-hover:opacity-0 whitespace-nowrap">
                                                {item.title}
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0 block origin-left translate-y-full scale-[1.15] opacity-0 transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                                            >
                                                {item.title}
                                            </span>
                                        </h3>
                                        <p className="text-xs sm:text-[13px] leading-relaxed font-normal text-[var(--color-text-muted)]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
