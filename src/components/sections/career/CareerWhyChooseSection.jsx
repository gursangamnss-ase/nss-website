"use client";

import { motion, useReducedMotion } from "motion/react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CareerBenefitCard from "@/components/ui/CareerBenefitCard";

import careerWhyChooseData from "@/data/careerWhyChooseData";
import Badge from "@/components/ui/Badge";

export default function CareerWhyChooseSection() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <Section
            spacing="xl"
            background="white"
            className="overflow-hidden"
        >
            <Container size="2xl">
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-12

                        lg:grid-cols-[0.78fr_1.22fr]
                        lg:gap-16

                        xl:gap-20
                    "
                >
                    {/* =========================================
                        LEFT CONTENT
                    ========================================== */}
                    <motion.div
                        initial={
                            shouldReduceMotion
                                ? false
                                : {
                                    opacity: 0,
                                    x: -30,
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
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            max-w-[520px]
                            lg:sticky
                            lg:top-24
                            lg:self-start
                        "
                    >
                        {/* LABEL */}
                        <Badge
                            text="Why work with us"
                            color="var(--color-primary)"
                            className="
                                mb-5
                                text-sm
                                font-medium
                                tracking-[-0.01em]
                            "
                        />

                        {/* HEADING */}
                        <h2
                            className="
                                text-[clamp(3.5rem,6vw,6rem)]
                                font-semibold
                                leading-[0.82]
                                tracking-[-0.055em]
                                text-[var(--color-primary)]
                            "
                        >
                            Work With

                            <span
                                className="
                                    block
                                    mt-8
                                    font-script
                                    text-[clamp(4.5rem,7vw,7rem)]
                                    font-normal
                                    leading-[0.75]
                                    tracking-[-0.02em]
                                "
                            >
                                Purpose
                            </span>
                        </h2>

                        {/* DESCRIPTION */}
                        <div className="mt-12">
                            <h3
                                className="
                                    max-w-[470px]
                                    text-xl
                                    font-semibold
                                    leading-[1.35]
                                    tracking-[-0.02em]
                                    text-[var(--color-primary)]

                                    sm:text-2xl
                                "
                            >
                                Build more than a career. Build your potential.
                            </h3>

                            <p
                                className="
                                    mt-5
                                    max-w-[500px]
                                    text-base
                                    leading-7
                                    text-[var(--color-text-secondary)]

                                    sm:text-lg
                                    sm:leading-8
                                "
                            >
                                At NetSquare Softwares, we believe the right
                                environment can turn curiosity into capability
                                and ideas into impact. Join us to learn by doing,
                                take on meaningful challenges, and grow with
                                people who believe in what they create.
                            </p>
                        </div>
                    </motion.div>

                    {/* =========================================
                    RIGHT CARDS
                    ========================================== */}
                    <div
                        className="
                        grid
                        grid-cols-1
                        gap-5
                        md:grid-cols-2
                        md:gap-5
                        lg:gap-6"
                    >
                        {careerWhyChooseData.map((item) => (
                            <CareerBenefitCard
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                className="
                                min-h-[250px]
                                px-7
                                py-7
                                sm:px-8
                                sm:py-8
                                lg:px-9
                                lg:py-9"
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}