"use client";

import { motion, useReducedMotion } from "motion/react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CareerBenefitCard from "@/components/ui/CareerBenefitCard";
import Badge from "@/components/ui/Badge";

import careerLifeData from "@/data/careerLifeData";

export default function CareerLifeSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <Section
            spacing="xl"
            background="dark"
            className="
                relative
                overflow-hidden
            "
        >
            {/* =========================================
                BACKGROUND
            ========================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                "
                aria-hidden="true"
            >
                <div
                    className="
                        absolute
                        left-[-180px]
                        top-[20%]
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-white/[0.025]
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        right-[-180px]
                        bottom-[-100px]
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-white/[0.02]
                        blur-3xl
                    "
                />
            </div>

            <Container
                size="2xl"
                className="relative z-10"
            >
                {/* =========================================
                    HEADER
                ========================================== */}
                <div
                    className="
                        flex
                        justify-center
                        text-center
                    "
                >
                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    y: 30,
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
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            w-full
                            max-w-[1200px]
                        "
                    >
                        {/* =========================================
                            BADGE
                        ========================================== */}
                        <div className="flex justify-center">
                            <Badge
                                text="Life at NetSquare Softwares"
                                color="#ffffff"
                                className="
                                    text-sm
                                    font-medium
                                    tracking-[-0.01em]
                                "
                            />
                        </div>

                        {/* =========================================
                            MAIN TITLE
                        ========================================== */}
                        <h2
                            className="
                                mt-8
                                text-[clamp(2.5rem,6.5vw,4.5rem)]
                                font-medium
                                leading-[0.85]
                                tracking-[-0.055em]
                                text-white
                            "
                        >
                            Life at NetSquare

                            <span
                                className="
                                    ml-2
                                    mt-8
                                    inline-block
                                    font-script
                                    text-[clamp(2.5rem,6.5vw,4.5rem)]
                                    font-normal
                                    leading-[0.75]
                                    tracking-[-0.02em]
                                    text-white/90
                                "
                            >
                                Softwares
                            </span>
                        </h2>
                    </motion.div>
                </div>

                {/* =========================================
                    LIFE CARDS
                ========================================== */}
                <div
                    className="
                        mt-14
                        grid
                        grid-cols-1
                        gap-5

                        md:grid-cols-2

                        xl:grid-cols-3

                        sm:mt-16
                        lg:mt-20
                    "
                >
                    {careerLifeData.map((item) => (
                        <CareerBenefitCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            variant="dark"
                        />
                    ))}
                </div>
            </Container>
        </Section>
    );
}