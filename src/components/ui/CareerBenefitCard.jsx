"use client";

import Image from "next/image";
import { memo } from "react";
import { motion, useReducedMotion } from "motion/react";

function CareerBenefitCard({
    icon,
    image,
    title,
    description,
    className = "",
}) {
    const shouldReduceMotion = useReducedMotion();

    const hasImage = Boolean(image);

    return (
        <motion.article
            initial={
                shouldReduceMotion
                    ? false
                    : {
                          opacity: 0,
                          y: 24,
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
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
                shouldReduceMotion
                    ? {}
                    : {
                          y: -6,
                          transition: {
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                          },
                      }
            }
            className={`
                group
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-black/[0.07]
                bg-[#fafafa]
                p-5

                shadow-[0_4px_20px_rgba(0,0,0,0.025)]

                transition-[box-shadow,background-color,border-color]
                duration-300
                ease-out

                hover:border-black/[0.12]
                hover:bg-white
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]

                sm:p-6

                ${className}
            `}
        >
            {/* SUBTLE CARD HOVER LIGHT */}
            <div
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-black/[0.025] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
            />

            <div
                className={`
                    relative
                    z-10
                    flex
                    gap-5

                    ${hasImage ? "items-center" : "items-start"}
                `}
            >
                {/* =========================================
                    IMAGE MODE
                ========================================== */}
                {hasImage && (
                    <div
                        className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-[18px] bg-[#eeeeee] sm:h-[128px] sm:w-[128px]"
                    >
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(max-width: 639px) 120px, 128px"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />

                        {/* IMAGE OVERLAY */}
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                            aria-hidden="true"
                        />
                    </div>
                )}

                {/* =========================================
                    ICON MODE
                ========================================== */}
                {!hasImage && icon && (
                    <div
                        className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-out group-hover:-translate-y-1"
                    >
                        <span
                            className="pointer-events-none absolute inset-0 rounded-2xl border border-black/[0.04] opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
                            aria-hidden="true"
                        />

                        <motion.div
                            animate={
                                shouldReduceMotion
                                    ? {}
                                    : {
                                          y: [0, -3, 0],
                                          rotate: [0, -2, 2, 0],
                                      }
                            }
                            transition={
                                shouldReduceMotion
                                    ? {}
                                    : {
                                          duration: 4,
                                          repeat: Infinity,
                                          repeatDelay: 1.5,
                                          ease: "easeInOut",
                                      }
                            }
                            className="relative z-10"
                        >
                            <Image
                                src={icon}
                                alt=""
                                width={32}
                                height={32}
                                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                                aria-hidden="true"
                            />
                        </motion.div>
                    </div>
                )}

                {/* =========================================
                    CONTENT
                ========================================== */}
                <div className="min-w-0">
                    <h3
                        className="text-lg font-semibold leading-[1.25] tracking-[-0.025em] text-[var(--color-primary)] sm:text-xl"
                    >
                        {title}
                    </h3>

                    <p
                        className="mt-2.5 text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base sm:leading-7"
                    >
                        {description}
                    </p>
                </div>
            </div>

            {/* SUBTLE BOTTOM ACCENT */}
            <div
                className="absolute bottom-0 left-6 right-6 h-[2px] origin-left scale-x-0 rounded-full bg-black opacity-60 transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
            />
        </motion.article>
    );
}

export default memo(CareerBenefitCard);