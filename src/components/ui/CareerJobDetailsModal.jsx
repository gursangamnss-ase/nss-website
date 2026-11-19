"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function CareerJobDetailsModal({
    job,
    onClose,
}) {
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (!job) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = previousOverflow;
        };
    }, [job, onClose]);

    if (!job) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-3 backdrop-blur-md sm:p-5 lg:p-8"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <motion.div
                initial={
                    shouldReduceMotion
                        ? false
                        : {
                              opacity: 0,
                              y: 28,
                              scale: 0.97,
                          }
                }
                animate={
                    shouldReduceMotion
                        ? {}
                        : {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                          }
                }
                transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.3)]"
                role="dialog"
                aria-modal="true"
                aria-labelledby="career-job-title"
            >
                {/* =========================================
                    CLOSE BUTTON
                ========================================== */}

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close job details"
                    className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:border-white sm:right-6 sm:top-6"
                >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />

                        <path
                            d="M18 6L6 18"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                {/* =========================================
                    SCROLLABLE CONTENT
                ========================================== */}

                <div
                    className="max-h-[92vh] overflow-y-auto overscroll-contain"
                >
                    {/* =========================================
                        HERO IMAGE
                    ========================================== */}

                    <div
                        className="relative h-[230px] w-full overflow-hidden bg-[#111] sm:h-[290px] lg:h-[340px]"
                    >
                        <Image
                            src={job.image}
                            alt={`${job.title} at NetSquare Softwares`}
                            fill
                            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 896px"
                            className="object-cover"
                        />

                        {/* DARK GRADIENT */}

                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10"
                        />

                        {/* CATEGORY */}

                        <div
                            className="absolute bottom-6 left-6 z-10 sm:bottom-8 sm:left-8"
                        >
                            <span
                                className="inline-flex items-center rounded-full border border-white/25 bg-black/35 px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.1em] text-white backdrop-blur-md"
                            >
                                {job.category}
                            </span>
                        </div>
                    </div>

                    {/* =========================================
                        MAIN CONTENT
                    ========================================== */}

                    <div
                        className="px-6 pb-8 pt-7 sm:px-9 sm:pb-10 sm:pt-8 lg:px-10 lg:pb-12"
                    >
                        {/* =====================================
                            HEADER
                        ====================================== */}

                        <div
                            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
                        >
                            {/* TITLE */}

                            <div className="max-w-[680px]">
                                <h2
                                    id="career-job-title"
                                    className="text-[clamp(2.2rem,5vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-black"
                                >
                                    {job.title}
                                </h2>

                                {/* META */}

                                <div
                                    className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-black/55"
                                >
                                    {/* LOCATION */}

                                    <div
                                        className="flex items-center gap-2"
                                    >
                                        <LocationIcon />

                                        <span>
                                            {job.location}
                                        </span>
                                    </div>

                                    {/* DIVIDER */}

                                    <span
                                        className="hidden h-4 w-px bg-black/15 sm:block"
                                        aria-hidden="true"
                                    />

                                    {/* TYPE */}

                                    <div
                                        className="flex items-center gap-2"
                                    >
                                        <BriefcaseIcon />

                                        <span>
                                            {job.type}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* JOB ICON */}

                            <div
                                className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-[20px] bg-black text-white lg:flex"
                            >
                                <CareerJobIcon type={job.icon} />
                            </div>
                        </div>

                        {/* DIVIDER */}

                        <div
                            className="my-8 h-px bg-black/[0.09] sm:my-9"
                        />

                        {/* =====================================
                            ABOUT THE ROLE
                        ====================================== */}

                        <section>
                            <SectionHeading>
                                About the role
                            </SectionHeading>

                            <p
                                className="mt-3 max-w-[760px] text-[15px] leading-7 text-black/60 sm:text-base sm:leading-8"
                            >
                                {job.description}
                            </p>
                        </section>

                        {/* =====================================
                            RESPONSIBILITIES
                        ====================================== */}

                        <section className="mt-9">
                            <SectionHeading>
                                Responsibilities
                            </SectionHeading>

                            <ul
                                className="mt-4 grid gap-3 lg:grid-cols-2 lg:gap-x-10"
                            >
                                {job.responsibilities.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-[15px] leading-7 text-black/60"
                                    >
                                        <span
                                            className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                                        />

                                        <span>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* =====================================
                            REQUIREMENTS
                        ====================================== */}

                        <section className="mt-9">
                            <SectionHeading>
                                Requirements
                            </SectionHeading>

                            <ul
                                className="mt-4 grid gap-3 lg:grid-cols-2 lg:gap-x-10"
                            >
                                {job.requirements.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-[15px] leading-7 text-black/60"
                                    >
                                        <span
                                            className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                                        />

                                        <span>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* =====================================
                            CTA
                        ====================================== */}

                        <div
                            className="mt-10 rounded-[20px] bg-[#f5f5f5] p-5 sm:mt-12 sm:p-6"
                        >
                            <div
                                className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div>
                                    <p
                                        className="text-sm font-semibold text-black"
                                    >
                                        Interested in this role?
                                    </p>

                                    <p
                                        className="mt-1 text-xs leading-5 text-black/50"
                                    >
                                        Take the next step and join our team.
                                    </p>
                                </div>

                                <a
                                    href="#application"
                                    onClick={() => {
                                        onClose();
                                        if (typeof window !== "undefined") {
                                            window.dispatchEvent(
                                                new CustomEvent("nss:apply-job", {
                                                    detail: { jobTitle: job.title, jobId: job.id },
                                                })
                                            );
                                        }
                                    }}
                                    className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1c1c1c] hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                                >
                                    Apply for this position

                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M5 12H19"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M13 6L19 12L13 18"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}


/* =========================================
   SECTION HEADING
========================================= */

function SectionHeading({ children }) {
    return (
        <h3
            className="text-[17px] font-semibold tracking-[-0.025em] text-black sm:text-lg"
        >
            {children}
        </h3>
    );
}


/* =========================================
   JOB ICON
========================================= */

function CareerJobIcon({ type }) {
    const common = {
        width: 26,
        height: 26,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "text-current",
        "aria-hidden": "true",
    };

    if (type === "desktop") {
        return (
            <svg {...common}>
                <rect
                    x="3"
                    y="4"
                    width="18"
                    height="12"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />

                <path
                    d="M8 20H16"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                />

                <path
                    d="M12 16V20"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />
            </svg>
        );
    }

    if (type === "server") {
        return (
            <svg {...common}>
                <rect
                    x="4"
                    y="3"
                    width="16"
                    height="5"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />

                <rect
                    x="4"
                    y="10"
                    width="16"
                    height="5"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />

                <rect
                    x="4"
                    y="17"
                    width="16"
                    height="4"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />

                <circle
                    cx="8"
                    cy="5.5"
                    r="0.8"
                    fill="currentColor"
                />

                <circle
                    cx="8"
                    cy="12.5"
                    r="0.8"
                    fill="currentColor"
                />

                <circle
                    cx="8"
                    cy="19"
                    r="0.8"
                    fill="currentColor"
                />
            </svg>
        );
    }

    if (type === "chip") {
        return (
            <svg {...common}>
                <rect
                    x="7"
                    y="7"
                    width="10"
                    height="10"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                />

                <path
                    d="M9 1V4M12 1V4M15 1V4M9 20V23M12 20V23M15 20V23M20 9H23M20 12H23M20 15H23M1 9H4M1 12H4M1 15H4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    if (type === "design") {
        return (
            <svg {...common}>
                <path
                    d="M5 18.5L6.2 14.2L15.8 4.6C16.6 3.8 17.9 3.8 18.7 4.6L19.4 5.3C20.2 6.1 20.2 7.4 19.4 8.2L9.8 17.8L5 18.5Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                />

                <path
                    d="M14 6.5L17.5 10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                />

                <path
                    d="M5 22H19"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                />
            </svg>
        );
    }

    return (
        <svg {...common}>
            <path
                d="M8 4L4 8L8 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M16 4L20 8L16 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M14 3L10 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}


/* =========================================
   LOCATION ICON
========================================= */

function LocationIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M20 10C20 15.5 12 21 12 21C12 21 4 15.5 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
                stroke="currentColor"
                strokeWidth="1.6"
            />

            <circle
                cx="12"
                cy="10"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.6"
            />
        </svg>
    );
}


/* =========================================
   BRIEFCASE ICON
========================================= */

function BriefcaseIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <rect
                x="3"
                y="6"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
            />

            <path
                d="M8 6V4C8 3.45 8.45 3 9 3H15C15.55 3 16 3.45 16 4V6"
                stroke="currentColor"
                strokeWidth="1.6"
            />

            <path
                d="M3 11H21"
                stroke="currentColor"
                strokeWidth="1.6"
            />
        </svg>
    );
}