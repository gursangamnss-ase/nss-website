"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CareerJobCard from "@/components/ui/CareerJobCard";
import CareerJobDetailsModal from "@/components/ui/CareerJobDetailsModal";
import careerJobsData, { careerJobsHeader } from "@/data/careerJobsData";

const INITIAL_COUNT = 4;

export default function CareerJobOpeningsSection() {
    const header = careerJobsHeader || {
        badge: "Job Openings",
        titleLine1: "Current",
        ampersand: "/images/letterImage.svg",
        titleLine2: "Opportunities",
        yearTag: "Open Positions 2026",
        description:
            "Join our multidisciplinary team of engineers, designers, and innovators building next-generation digital products. We offer high-ownership projects, modern toolchains, and accelerated career progression.",
    };

    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [selectedJob, setSelectedJob] = useState(null);

    const visibleJobs = careerJobsData.slice(0, visibleCount);
    const hasMore = visibleCount < careerJobsData.length;

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 4, careerJobsData.length));
    };

    return (
        <>
            <Section
                id="openings"
                spacing="none"
                background="white"
                className="bg-white text-[var(--color-primary)] py-20 sm:py-28 lg:pt-36 lg:pb-28 overflow-hidden"
            >
                <Container size="2xl" className="px-5 sm:px-8 lg:px-12 relative z-10">
                    {/* Pre-title Badge: Left on mobile/tablet (<lg), Right on desktop (>=lg) matching CreativeCollabsSection */}
                    <div className="flex justify-start lg:justify-end pb-4 sm:pb-6 md:pb-8">
                        <Badge
                            text={header.badge}
                            disabled
                            color="var(--color-primary)"
                            className="text-xs font-medium tracking-wide sm:text-sm text-[var(--color-primary)]"
                        />
                    </div>

                    {/* Mobile & Tablet Heading (< lg: 0 - 1023px) - Stacked with inline Ampersand */}
                    <div className="flex lg:hidden flex-col items-start gap-1 sm:gap-2">
                        {/* Line 1: Current & */}
                        <div className="inline-flex items-center gap-2 sm:gap-3">
                            <h2 className="text-[48px] sm:text-[58px] md:text-[68px] font-semibold leading-[0.85] tracking-[-0.04em] text-[var(--color-primary)] select-none">
                                {header.titleLine1}
                            </h2>
                            <div className="w-[38px] sm:w-[50px] md:w-[60px] aspect-[1.1] select-none shrink-0">
                                <Image
                                    src={header.ampersand}
                                    alt=""
                                    aria-hidden="true"
                                    width={64}
                                    height={70}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Line 2: Opportunities */}
                        <div className="w-full">
                            <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-semibold leading-[0.85] tracking-[-0.04em] text-[var(--color-primary)] select-none">
                                {header.titleLine2}
                            </h2>
                        </div>
                    </div>

                    {/* Desktop & Laptop Heading (>= lg: 1024px+) - Staggered layout matching CreativeCollabsSection exactly */}
                    <div className="hidden lg:flex flex-row items-start lg:gap-20 xl:gap-28 relative">
                        {/* Left: Current + Script Ampersand overlapping */}
                        <div className="relative inline-flex items-center shrink-0">
                            <h2 className="text-[clamp(5.3rem,8.33vw,7.5rem)] font-semibold leading-[0.8] tracking-[-0.04em] text-[var(--color-primary)] select-none">
                                {header.titleLine1}
                            </h2>

                            {/* Script Ampersand SVG overlapping between Current and Opportunities */}
                            <div className="absolute left-[88%] -top-2 lg:-top-4 w-[150px] lg:w-[190px] xl:w-[260px] 2xl:w-[310px] aspect-[1.1] pointer-events-none select-none z-10">
                                <Image
                                    src={header.ampersand}
                                    alt=""
                                    aria-hidden="true"
                                    width={342}
                                    height={348}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Right: Opportunities pushed down to align on line 2 under the ampersand */}
                        <div className="pt-20 lg:pt-28 xl:pt-36 2xl:pt-44 w-full">
                            <h2 className="text-[clamp(5.3rem,8.33vw,7.5rem)] font-semibold leading-[0.8] tracking-[-0.04em] text-[var(--color-primary)] select-none whitespace-nowrap ml-7 xl:ml-20">
                                {header.titleLine2}
                            </h2>
                        </div>
                    </div>

                    {/* Lower Narrative & Year Tag - Responsive layout eliminating text collisions at 1024px */}
                    <div className="mt-10 sm:mt-14 lg:mt-20 flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-10 xl:gap-24 2xl:gap-36">
                        <div className="shrink-0 lg:w-auto lg:min-w-[240px] xl:min-w-[270px]">
                            <h3 className="text-xl sm:text-2xl lg:text-[24px] xl:text-[28px] font-medium tracking-[-0.03em] text-[var(--color-primary)] whitespace-nowrap">
                                {header.yearTag}
                            </h3>
                        </div>

                        <div className="flex-1 max-w-[820px]">
                            <p className="text-base sm:text-lg lg:text-[17px] xl:text-lg font-normal leading-[1.45] tracking-[-0.015em] text-[var(--color-text-secondary)]">
                                {header.description}
                            </p>
                        </div>
                    </div>

                    {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols at 1024px, 4 cols on desktop */}
                    <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-6 xl:gap-7">
                        {visibleJobs.map((job) => (
                            <CareerJobCard
                                key={job.id}
                                job={job}
                                onViewDetails={setSelectedJob}
                            />
                        ))}
                    </div>

                    {/* Load More Button (matching ProjectsGrid) */}
                    {hasMore && (
                        <div className="flex justify-center pt-12 sm:pt-16">
                            <Button
                                type="button"
                                variant="dark"
                                size="md"
                                onClick={handleLoadMore}
                                aria-label="Load more positions"
                            >
                                Load More Positions
                            </Button>
                        </div>
                    )}
                </Container>
            </Section>

            {/* Job Details Modal */}
            <CareerJobDetailsModal
                job={selectedJob}
                onClose={() => setSelectedJob(null)}
            />
        </>
    );
}
