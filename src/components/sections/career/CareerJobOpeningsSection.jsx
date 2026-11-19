"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import CareerJobCard from "@/components/ui/CareerJobCard";
import CareerJobDetailsModal from "@/components/ui/CareerJobDetailsModal";
import Badge from "@/components/ui/Badge";

import careerJobsData from "@/data/careerJobsData";

export default function CareerJobOpeningsSection() {
    const shouldReduceMotion = useReducedMotion();

    const carouselRef = useRef(null);
    const autoPlayRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedJob, setSelectedJob] = useState(null);

    /* =========================================
       SCROLL CAROUSEL
    ========================================== */

    const scrollCarousel = useCallback((direction) => {
        const container = carouselRef.current;

        if (!container) return;

        const card = container.querySelector("[data-job-card]");

        if (!card) return;

        const cardWidth = card.getBoundingClientRect().width;
        const gap = 20;

        const amount = cardWidth + gap;

        if (direction === "next") {
            const maxScroll =
                container.scrollWidth - container.clientWidth;

            if (container.scrollLeft >= maxScroll - 10) {
                container.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });

                return;
            }

            container.scrollBy({
                left: amount,
                behavior: "smooth",
            });
        } else {
            if (container.scrollLeft <= 10) {
                container.scrollTo({
                    left:
                        container.scrollWidth -
                        container.clientWidth,
                    behavior: "smooth",
                });

                return;
            }

            container.scrollBy({
                left: -amount,
                behavior: "smooth",
            });
        }
    }, []);

    /* =========================================
       UPDATE ACTIVE DOT
    ========================================== */

    const handleScroll = useCallback(() => {
        const container = carouselRef.current;

        if (!container) return;

        const card = container.querySelector("[data-job-card]");

        if (!card) return;

        const cardWidth = card.getBoundingClientRect().width;
        const gap = 20;

        const index = Math.round(
            container.scrollLeft / (cardWidth + gap)
        );

        setActiveIndex(
            Math.min(
                Math.max(index, 0),
                careerJobsData.length - 1
            )
        );
    }, []);

    /* =========================================
       AUTO PLAY
    ========================================== */

    const startAutoPlay = useCallback(() => {
        if (shouldReduceMotion) return;

        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }

        autoPlayRef.current = setInterval(() => {
            scrollCarousel("next");
        }, 4000);
    }, [scrollCarousel, shouldReduceMotion]);

    /* =========================================
       INITIAL AUTO PLAY
    ========================================== */

    useEffect(() => {
        startAutoPlay();

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [startAutoPlay]);

    /* =========================================
       PAUSE / RESUME AUTO PLAY
    ========================================== */

    const pauseAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    const resumeAutoPlay = () => {
        startAutoPlay();
    };

    /* =========================================
       GO TO SPECIFIC SLIDE
    ========================================== */

    const goToSlide = (index) => {
        const container = carouselRef.current;

        if (!container) return;

        const card = container.querySelector("[data-job-card]");

        if (!card) return;

        const cardWidth = card.getBoundingClientRect().width;
        const gap = 20;

        container.scrollTo({
            left: index * (cardWidth + gap),
            behavior: "smooth",
        });
    };

    return (
        <>
            <Section
                id="openings"
                spacing="xl"
                background="white"
                className="
                    relative
                    overflow-hidden
                "
            >
                {/* =========================================
                    BACKGROUND DECORATION
                ========================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                    "
                    aria-hidden="true"
                >
                    {/* Top-right rings */}
                    <div
                        className="
                            absolute
                            right-[-160px]
                            top-[-180px]
                            h-[420px]
                            w-[420px]
                            rounded-full
                            border
                            border-black/[0.06]
                        "
                    />

                    <div
                        className="
                            absolute
                            right-[-100px]
                            top-[-120px]
                            h-[340px]
                            w-[340px]
                            rounded-full
                            border
                            border-black/[0.05]
                        "
                    />

                    {/* Bottom-left soft glow */}
                    <div
                        className="
                            absolute
                            bottom-[-220px]
                            left-[-120px]
                            h-[400px]
                            w-[400px]
                            rounded-full
                            bg-black/[0.025]
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

                    <div className="flex justify-center text-center">
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
                            {/* =================================
                                BADGE
                            ================================== */}

                            <div className="flex justify-center">
                                <Badge
                                    text="Job Openings"
                                    color="#05080c"
                                    className="
                                        text-sm
                                        font-medium
                                        tracking-[-0.01em]
                                    "
                                />
                            </div>

                            {/* =================================
                                MAIN TITLE
                            ================================== */}

                            <h2 className="text-[clamp(2.5rem,6.5vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.04em] text-[var(--color-primary)]">
                                Current

                                <span
                                    className="
                                        ml-2
                                        inline-block
                                        font-script
                                        text-[clamp(2.5rem,6.5vw,4.5rem)]
                                        font-normal
                                        leading-[0.75]
                                        tracking-[-0.02em]
                                        text-black
                                    "
                                >
                                    Opportunities
                                </span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* =========================================
                        CAROUSEL
                    ========================================== */}

                    <div
                        className="
                            relative
                            mt-14

                            sm:mt-16

                            lg:mt-20
                        "
                    >
                        {/* =================================
                            PREVIOUS BUTTON
                        ================================== */}

                        <CarouselArrow
                            direction="left"
                            onClick={() => {
                                pauseAutoPlay();
                                scrollCarousel("prev");
                                resumeAutoPlay();
                            }}
                            className="
                                left-[-22px]

                                xl:left-[-58px]
                            "
                        />

                        {/* =================================
                            NEXT BUTTON
                        ================================== */}

                        <CarouselArrow
                            direction="right"
                            onClick={() => {
                                pauseAutoPlay();
                                scrollCarousel("next");
                                resumeAutoPlay();
                            }}
                            className="
                                right-[-22px]

                                xl:right-[-58px]
                            "
                        />

                        {/* =================================
                            CAROUSEL TRACK
                        ================================== */}

                        <div
                            ref={carouselRef}
                            onScroll={handleScroll}
                            onMouseEnter={pauseAutoPlay}
                            onMouseLeave={resumeAutoPlay}
                            className="
                                flex
                                gap-5
                                overflow-x-auto
                                scroll-smooth
                                snap-x
                                snap-mandatory
                                pb-8

                                [scrollbar-width:none]
                                [&::-webkit-scrollbar]:hidden
                            "
                        >
                            {careerJobsData.map((job) => (
                                <div
                                    key={job.id}
                                    data-job-card
                                    className="
                                        w-[88vw]
                                        shrink-0
                                        snap-start

                                        sm:w-[calc(50%-10px)]

                                        lg:w-[calc(25%-15px)]
                                    "
                                >
                                    <CareerJobCard
                                        job={job}
                                        onViewDetails={setSelectedJob}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* =================================
                            CAROUSEL DOTS
                        ================================== */}

                        <div
                            className="
                                mt-5
                                flex
                                items-center
                                justify-center
                                gap-2
                            "
                        >
                            {careerJobsData.map((job, index) => (
                                <button
                                    key={job.id}
                                    type="button"
                                    aria-label={`Go to ${job.title}`}
                                    onClick={() => {
                                        pauseAutoPlay();
                                        goToSlide(index);
                                        resumeAutoPlay();
                                    }}
                                    className={`
                                        h-2.5
                                        rounded-full
                                        transition-all
                                        duration-300

                                        ${activeIndex === index
                                            ? "w-5 bg-black"
                                            : "w-2.5 bg-black/15 hover:bg-black/30"
                                        }
                                    `}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            {/* =========================================
                JOB DETAILS MODAL
            ========================================== */}

            <CareerJobDetailsModal
                job={selectedJob}
                onClose={() => setSelectedJob(null)}
            />
        </>
    );
}


/* =========================================
   CAROUSEL ARROW
========================================= */

function CarouselArrow({
    direction,
    onClick,
    className = "",
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={
                direction === "left"
                    ? "Previous jobs"
                    : "Next jobs"
            }
            className={`
                absolute
                top-1/2
                z-20
                hidden
                h-12
                w-12
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                bg-white
                text-black
                shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                transition-all
                duration-300

                hover:bg-black
                hover:text-white

                lg:flex

                ${className}
            `}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                {direction === "left" ? (
                    <>
                        <path
                            d="M19 12H5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />

                        <path
                            d="M11 6L5 12L11 18"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </>
                ) : (
                    <>
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
                    </>
                )}
            </svg>
        </button>
    );
}