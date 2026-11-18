"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function CareerHeroSection() {
    const shouldReduceMotion = useReducedMotion();

    /*
     * Hero image entrance animation.
     * Disabled automatically when the user prefers reduced motion.
     */
    const imageInitial = shouldReduceMotion
        ? false
        : {
            opacity: 0,
            y: 40,
            scale: 0.94,
            rotate: -4,
        };

    const imageAnimate = shouldReduceMotion
        ? {}
        : {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: -2,
        };

    return (
        <Section
            spacing="none"
            background="dark"
            className="
                relative
                min-h-[720px]
                overflow-hidden
                lg:min-h-[820px]
            "
        >
            {/* =====================================================
                BACKGROUND
            ====================================================== */}
            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
            >
                {/* Main background */}
                <div className="absolute inset-0 bg-[var(--color-primary)]" />

                {/* Subtle left glow */}
                <div
                    className="
                        absolute
                        -left-32
                        top-1/4
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-white/[0.025]
                        blur-3xl
                    "
                />

                {/* Subtle bottom-right glow */}
                <div
                    className="
                        absolute
                        -right-[180px]
                        -bottom-[200px]
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-[var(--color-accent-orange)]/[0.025]
                        blur-3xl
                    "
                />
            </div>

            {/* =====================================================
                MAIN CONTAINER
            ====================================================== */}
            <Container
                size="2xl"
                className="
                    relative
                    z-10
                    flex
                    items-center
                "
            >
                <div
                    className="
                        grid
                        w-full
                        items-center
                        gap-12
                        py-24

                        lg:grid-cols-[0.92fr_1.08fr]
                        lg:gap-10
                        lg:py-28

                        xl:gap-16
                    "
                >
                    {/* =================================================
                        LEFT CONTENT
                    ================================================== */}
                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    x: -30,
                                }
                        }
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    opacity: 1,
                                    x: 0,
                                }
                        }
                        transition={{
                            duration: 0.7,
                            delay: 0.05,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            relative
                            z-20
                            max-w-[700px]
                        "
                    >
                        {/* =================================================
                            CAREERS LABEL
                        ================================================== */}
                        <Badge
                            text="CAREERS"
                            color="#ffffff"
                            className="
                                mb-5
                                text-sm
                                font-medium
                                tracking-[0.08em]
                            "
                        />

                        {/* =================================================
                            MAIN HEADING
                        ================================================== */}
                        <h1
                            className="
                                max-w-[700px]
                                text-[clamp(3.2rem,7vw,7rem)]
                                font-semibold
                                leading-[0.88]
                                tracking-[-0.055em]
                                text-white

                                sm:text-[clamp(3.8rem,7vw,7rem)]
                            "
                        >
                            Build Your

                            <span
                                className="
                                    block
                                    mt-4
                                    font-script
                                    text-[clamp(4.5rem,8vw,8rem)]
                                    font-normal
                                    leading-[0.75]
                                    tracking-[-0.02em]
                                "
                            >
                                Future
                            </span>

                        </h1>

                        {/* =================================================
                            DESCRIPTION
                        ================================================== */}
                        <p
                            className="
                                mt-8
                                max-w-[640px]
                                text-base
                                leading-7
                                text-white/65

                                sm:text-lg
                                sm:leading-8
                            "
                        >
                            At NetSquare Softwares, we believe great careers
                            are built through meaningful work, continuous
                            learning, and the freedom to bring new ideas to
                            life. Explore opportunities to learn, contribute,
                            grow, and become part of a team that&apos;s
                            building what&apos;s next.
                        </p>

                        {/* =================================================
                            CTA
                        ================================================== */}
                        <div className="mt-9">
                            <Button
                                href="#openings"
                                variant="light"
                                size="lg"
                                className="
                                    rounded-full
                                    !px-7
                                    !py-4
                                "
                            >
                                <span className="inline-flex items-center gap-2">
                                    <span>Explore Opportunities</span>

                                </span>
                            </Button>
                        </div>
                    </motion.div>

                    {/* =================================================
                        RIGHT VISUAL
                    ================================================== */}
                    <div
                        className="
                            relative
                            mx-auto
                            w-full
                            max-w-[720px]
                            lg:ml-auto
                        "
                    >
                        {/* =================================================
                            IMAGE WRAPPER
                        ================================================== */}
                        <div
                            className="
                                relative
                                mx-auto
                                aspect-[0.94]
                                w-full
                                max-w-[680px]
                                overflow-visible
                            "
                        >
                            {/* =================================================
                                MAIN IMAGE
                            ================================================== */}
                            <motion.div
                                initial={imageInitial}
                                animate={imageAnimate}
                                transition={{
                                    duration: 0.9,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            y: -4,
                                            scale: 1.015,
                                            transition: {
                                                duration: 0.35,
                                                ease: [0.22, 1, 0.36, 1],
                                            },
                                        }
                                }
                                className="
                                    group
                                    relative
                                    h-full
                                    w-full
                                    overflow-hidden
                                    rounded-[42px]
                                    border
                                    border-white/10
                                    shadow-2xl
                                    rotate-[-2deg]

                                    sm:rounded-[50px]

                                    lg:rounded-[58px]
                                "
                            >
                                <Image
                                    src="/career/career-hero-section.webp"
                                    alt="Career opportunities at NetSquare Softwares"
                                    fill
                                    priority
                                    sizes="(max-width: 639px) 90vw, (max-width: 1023px) 80vw, 50vw"

                                    className="
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                    "
                                />

                                {/* Image overlay */}
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/20
                                        via-transparent
                                        to-black/5
                                        transition-opacity
                                        duration-500
                                    "
                                    aria-hidden="true"
                                />
                            </motion.div>

                            {/* =================================================
                                TOP RIGHT FLOATING CARD
                            ================================================== */}
                            <motion.div
                                initial={
                                    shouldReduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            x: 25,
                                            y: -15,
                                        }
                                }
                                animate={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            opacity: 1,
                                            x: 0,
                                            y: 0,
                                        }
                                }
                                transition={{
                                    duration: 0.7,
                                    delay: 0.45,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            y: -5,
                                            transition: {
                                                duration: 0.25,
                                            },
                                        }
                                }
                                className="
                                    group
                                    absolute
                                    right-[-12px]
                                    top-[8%]
                                    z-20

                                    flex
                                    items-center
                                    gap-3

                                    rounded-full
                                    border
                                    border-white/20
                                    bg-black/65
                                    px-5
                                    py-3
                                    backdrop-blur-xl

                                    transition-all
                                    duration-300
                                    ease-out

                                    hover:border-white/40
                                    hover:bg-black/80
                                    hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]

                                    sm:right-[-22px]
                                    sm:px-6
                                    sm:py-4

                                    max-[480px]:right-[-4px]
                                    max-[480px]:px-4
                                    max-[480px]:py-3
                                "
                            >
                                {/* SVG PEOPLE ICON */}
                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        text-white

                                        transition-transform
                                        duration-300
                                        ease-out

                                        group-hover:scale-110
                                        group-hover:-rotate-3

                                        sm:h-10
                                        sm:w-10
                                    "
                                >
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="
                                            transition-all
                                            duration-300
                                            ease-out

                                            group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.35)]
                                        "
                                    >
                                        {/* Main person */}
                                        <path
                                            d="M16 21V19C16 16.7909 14.2091 15 12 15H6C3.79086 15 2 16.7909 2 19V21"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />

                                        <circle
                                            cx="9"
                                            cy="7"
                                            r="3"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        />

                                        {/* Second person */}
                                        <path
                                            d="M22 21V19C21.9999 17.1771 20.765 15.587 19 15.126"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M16 4.126C17.7699 4.58936 19.0083 6.18261 19.0083 8C19.0083 9.81739 17.7699 11.4106 16 11.874"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>

                                {/* CARD TEXT */}
                                <span
                                    className="
                                        max-w-[150px]
                                        text-sm
                                        font-medium
                                        leading-5
                                        text-white

                                        transition-all
                                        duration-300

                                        group-hover:tracking-[0.01em]

                                        sm:max-w-none
                                        sm:text-base

                                        max-[480px]:text-xs
                                    "
                                >
                                    Collaborative

                                    <br className="sm:hidden" />

                                    <span className="sm:ml-1">
                                        Work Culture
                                    </span>
                                </span>
                            </motion.div>

                            {/* =================================================
                                BOTTOM LEFT FLOATING CARD
                            ================================================== */}
                            <motion.div
                                initial={
                                    shouldReduceMotion
                                        ? false
                                        : {
                                            opacity: 0,
                                            x: -25,
                                            y: 15,
                                        }
                                }
                                animate={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            opacity: 1,
                                            x: 0,
                                            y: 0,
                                        }
                                }
                                transition={{
                                    duration: 0.7,
                                    delay: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={
                                    shouldReduceMotion
                                        ? {}
                                        : {
                                            y: -5,
                                            transition: {
                                                duration: 0.25,
                                            },
                                        }
                                }
                                className="
                                    group
                                    absolute
                                    bottom-[8%]
                                    left-[-10px]
                                    z-20

                                    flex
                                    items-center
                                    gap-3

                                    rounded-full
                                    border
                                    border-white/20
                                    bg-black/70
                                    px-5
                                    py-3
                                    backdrop-blur-xl

                                    transition-all
                                    duration-300
                                    ease-out

                                    hover:border-white/40
                                    hover:bg-black/80
                                    hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]

                                    sm:left-[-30px]
                                    sm:px-6
                                    sm:py-4

                                    max-[480px]:left-[-4px]
                                    max-[480px]:px-4
                                    max-[480px]:py-3
                                "
                            >
                                {/* SVG LIGHTNING ICON */}
                                <span
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        shrink-0
                                        items-center
                                        justify-center
                                        text-white

                                        transition-transform
                                        duration-300
                                        ease-out

                                        group-hover:rotate-12
                                        group-hover:scale-110
                                    "
                                    aria-hidden="true"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="
                                            transition-all
                                            duration-300
                                            ease-out

                                            group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]
                                        "
                                    >
                                        <path
                                            d="M13 2L4 14H11L10 22L20 9H13L13 2Z"
                                            stroke="currentColor"
                                            strokeWidth="1.7"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>

                                {/* CARD TEXT */}
                                <span
                                    className="
                                        text-sm
                                        font-medium
                                        text-white

                                        transition-colors
                                        duration-300

                                        sm:text-base

                                        max-[480px]:text-xs
                                    "
                                >
                                    Learn

                                    <span
                                        className="
                                            mx-1.5
                                            text-white/50
                                            transition-colors
                                            duration-300

                                            group-hover:text-white/80
                                        "
                                    >
                                        ·
                                    </span>

                                    Create

                                    <span
                                        className="
                                            mx-1.5
                                            text-white/50
                                            transition-colors
                                            duration-300

                                            group-hover:text-white/80
                                        "
                                    >
                                        ·
                                    </span>

                                    Grow
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}