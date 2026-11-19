"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function CareerHiringProcessDetailCard({
    step,
}) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.article
            initial={
                shouldReduceMotion
                    ? false
                    : {
                          opacity: 0,
                          y: 20,
                      }
            }
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-1 gap-5 rounded-[22px] border border-white/15 bg-white/[0.025] p-5 sm:p-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:p-7"
        >
            {/* =========================================
                LEFT CONTENT
            ========================================== */}
            <div className="flex min-w-0 flex-col">

                {/* ICON */}
                <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04]"
                >
                    <Image
                        src={step.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="h-5 w-5 object-contain"
                        aria-hidden="true"
                    />
                </div>

                {/* TITLE */}
                <h3
                    className="mt-4 text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl"
                >
                    {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                    className="mt-2 max-w-[480px] text-sm leading-6 text-white/60 sm:text-base sm:leading-7"
                >
                    {step.description}
                </p>

                {/* POINTS */}
                <ul
                    className="mt-5 space-y-2.5"
                >
                    {step.points.map((point) => (
                        <li
                            key={point}
                            className="flex gap-2.5 text-sm leading-5 text-white/80 sm:text-sm sm:leading-6"
                        >
                            <span
                                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                            />

                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {/* DURATION */}
                <div
                    className="mt-auto flex items-center gap-2.5 pt-6 text-xs text-white/55 sm:text-sm"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="1.6"
                        />

                        <path
                            d="M12 7V12L15 14"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <span>{step.duration}</span>
                </div>
            </div>

            {/* =========================================
                IMAGE
            ========================================== */}
            <div
                className="relative min-h-[210px] overflow-hidden rounded-[18px] border border-white/10 bg-white/5 sm:min-h-[230px] lg:min-h-[280px]"
            >
                <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(max-width: 1023px) 90vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />

                {/* IMAGE OVERLAY */}
                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                    aria-hidden="true"
                />
            </div>
        </motion.article>
    );
}