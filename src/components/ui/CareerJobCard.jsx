"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function CareerJobCard({
    job,
    onViewDetails,
}) {
    const shouldReduceMotion = useReducedMotion();

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
                    }
            }
            className="
                group
                relative
                flex
                min-w-0
                flex-col
                overflow-hidden
                rounded-[26px]
                border
                border-black/[0.08]
                bg-white
                shadow-[0_8px_30px_rgba(0,0,0,0.055)]
                transition-all
                duration-500
                hover:border-black/[0.14]
                hover:shadow-[0_22px_60px_rgba(0,0,0,0.11)]
            "
        >
            {/* =========================================
                IMAGE
            ========================================== */}

            <div
                className="
                    relative
                    aspect-[1.5]
                    w-full
                    overflow-hidden
                    bg-[#f2f2f2]
                "
            >
                <Image
                    src={job.image}
                    alt={`${job.title} at NetSquare Softwares`}
                    fill
                    loading="lazy"
                    sizes="
                        (max-width: 639px) 88vw,
                        (max-width: 1023px) 44vw,
                        25vw
                    "
                    className="
                        object-cover
                        grayscale-[12%]
                        transition-transform
                        duration-700
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:scale-[1.06]
                    "
                />

                {/* IMAGE OVERLAY */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/30
                        via-black/[0.03]
                        to-transparent
                        opacity-70
                        transition-opacity
                        duration-500
                        group-hover:opacity-90
                    "
                />

                {/* TOP CATEGORY */}

                <div
                    className="
                        absolute
                        left-5
                        top-5
                        z-10
                    "
                >
                    <span
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            border
                            border-white/25
                            bg-black/35
                            px-3
                            py-1.5
                            text-[10px]
                            font-medium
                            uppercase
                            tracking-[0.08em]
                            text-white
                            backdrop-blur-md
                        "
                    >
                        {job.category}
                    </span>
                </div>
            </div>

            {/* =========================================
                FLOATING ICON
            ========================================== */}

            <div
                className="
                    relative
                    z-20
                    -mt-7
                    ml-6
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-[17px]
                    border
                    border-black/[0.08]
                    bg-white
                    text-black
                    shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:shadow-[0_16px_35px_rgba(0,0,0,0.15)]
                "
            >
                <CareerJobIcon type={job.icon} />
            </div>

            {/* =========================================
                CONTENT
            ========================================== */}

            <div
                className="
                    flex
                    flex-1
                    flex-col
                    px-6
                    pb-6
                    pt-5

                    sm:px-7
                    sm:pb-7
                "
            >
                {/* TITLE */}

                <h3
                    className="
                        max-w-[95%]
                        text-[20px]
                        font-semibold
                        leading-[1.12]
                        tracking-[-0.035em]
                        text-[var(--color-primary)]

                        sm:text-[21px]
                    "
                >
                    {job.title}
                </h3>

                {/* META */}

                <div
                    className="
                        mt-4
                        flex
                        flex-wrap
                        items-center
                        gap-x-4
                        gap-y-2
                        text-[12px]
                        font-medium
                        text-black/55
                    "
                >
                    {/* LOCATION */}

                    <div
                        className="
                            flex
                            items-center
                            gap-1.5
                        "
                    >
                        <LocationIcon />

                        <span>
                            {job.location}
                        </span>
                    </div>

                    {/* DIVIDER */}

                    <span
                        className="
                            hidden
                            h-3
                            w-px
                            bg-black/15

                            sm:block
                        "
                        aria-hidden="true"
                    />

                    {/* TYPE */}

                    <div
                        className="
                            flex
                            items-center
                            gap-1.5
                        "
                    >
                        <BriefcaseIcon />

                        <span>
                            {job.type}
                        </span>
                    </div>
                </div>

                {/* =================================
                    BOTTOM ACTION
                ================================== */}

                <div
                    className="
                        mt-6
                        border-t
                        border-black/[0.08]
                        pt-5
                    "
                >
                    <button
                        type="button"
                        onClick={() => onViewDetails(job)}
                        className="
                            group/action
                            flex
                            w-full
                            items-center
                            justify-between
                            text-left
                        "
                    >
                        {/* CTA TEXT */}

                        <span
                            className="
                                text-[13px]
                                font-semibold
                                tracking-[-0.01em]
                                text-black
                            "
                        >
                            <span
                                className="
                                    inline-block
                                    transition-transform
                                    duration-300
                                    group-hover/action:translate-x-1
                                "
                            >
                                View Details
                            </span>
                        </span>

                        {/* ARROW */}

                        <span
                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-black/10
                                bg-[#f5f5f5]
                                text-black
                                transition-all
                                duration-300

                                group-hover/action:border-black
                                group-hover/action:bg-black
                                group-hover/action:text-white
                                group-hover/action:translate-x-1
                            "
                        >
                            <ArrowIcon />
                        </span>
                    </button>
                </div>
            </div>
        </motion.article>
    );
}


/* =========================================
   JOB ICONS
========================================= */

function CareerJobIcon({ type }) {
    const common = {
        width: 25,
        height: 25,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "text-black",
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


/* =========================================
   ARROW ICON
========================================= */

function ArrowIcon() {
    return (
        <svg
            width="17"
            height="17"
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
    );
}