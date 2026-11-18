"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ServiceTabItem from "@/components/ui/ServiceTabItem";
import Badge from "@/components/ui/Badge";

import CareerHiringProcessDetailCard from "@/components/cards/CareerHiringProcessDetailCard";

import { careerHiringProcessData } from "@/data/careerHiringProcessData";

export default function CareerHiringProcessSection() {
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    const shouldReduceMotion = useReducedMotion();

    const activeStep = careerHiringProcessData[activeStepIndex];

    return (
        <Section
            id="hiring-process"
            spacing="xl"
            background="dark"
            className="
                relative
                overflow-hidden

                pt-20
                sm:pt-24
                lg:pt-32
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
                {/* Main background */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-[var(--color-primary)]
                    "
                />

                {/* Left subtle glow */}
                <div
                    className="
                        absolute
                        left-[-180px]
                        top-[10%]
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-white/[0.02]
                        blur-3xl
                    "
                />

                {/* Right subtle glow */}
                <div
                    className="
                        absolute
                        bottom-[-200px]
                        right-[-150px]
                        h-[500px]
                        w-[500px]
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
                        grid
                        grid-cols-1
                        gap-8

                        lg:grid-cols-[0.8fr_1.2fr]
                        lg:gap-16
                    "
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
                        className="
                            flex
                            items-start
                        "
                    >
                        <Badge
                            text="What we craft"
                            color="#ffffff"
                            className="
                                text-sm
                                font-medium
                                tracking-[-0.01em]
                                text-white/90
                            "
                        />
                    </motion.div>

                    {/* =========================================
                        RIGHT — MAIN HEADING
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
                    >
                       <h2 className="text-[clamp(2.5rem,5.5vw,5.25rem)] font-medium leading-[1.06] tracking-[-0.04em] text-white">
                            Our Hiring {" "}

                            <span
                                className="
                                    font-script
                                    text-[clamp(4.5rem,8vw,8rem)]
                                    font-normal
                                    leading-[0.75]
                                    tracking-[-0.02em]
                                    text-white
                                "
                            >
                                Process
                            </span>

                        </h2>
                    </motion.div>
                </div>

                {/* =========================================
                    MAIN CONTENT
                ========================================== */}
                <div
                    className="
                        mt-14
                        grid
                        grid-cols-1
                        gap-10

                        lg:mt-20
                        lg:grid-cols-[0.7fr_1.3fr]
                        lg:gap-14
                    "
                >
                    {/* =========================================
                        STEPS
                    ========================================== */}
                    <div className="flex flex-col">
                        {careerHiringProcessData.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={
                                    shouldReduceMotion
                                        ? false
                                        : {
                                              opacity: 0,
                                              y: 15,
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
                                    duration: 0.45,
                                    delay: Math.min(index * 0.06, 0.3),
                                }}
                            >
                                <ServiceTabItem
                                    number={step.number}
                                    title={step.title}
                                    isActive={
                                        activeStepIndex === index
                                    }
                                    onClick={() =>
                                        setActiveStepIndex(index)
                                    }
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* =========================================
                        DETAIL
                    ========================================== */}
                    <div className="min-w-0">
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