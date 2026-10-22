"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ImageCard from "@/components/cards/ImageCard";
import { teamData } from "@/data/teamData";

export default function TeamSection() {
  const {
    badge,
    titlePrefix,
    titleScript,
    titleSuffix,
    statement,
    ctaText,
    ctaLink = "#contact",
    copyright,
    members = [],
  } = teamData;

  return (
    <Section
      id="talent"
      spacing="none"
      background="dark"
      className="relative overflow-hidden bg-[#05080c] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 lg:pb-28 text-white select-none"
    >
      {/* Background Image with Natural Office Contrast Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/team/team-section-bg.jpg"
          alt="Team section background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Subtle gradient overlay to match Framer's natural office view */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/85"
          aria-hidden="true"
        />
      </div>

      <Container size="2xl" className="relative z-10 px-5 sm:px-8 lg:px-12">
        {/* Top Header Row: Main Heading on Left, Badge on Right */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-20 sm:pb-32 lg:pb-44 xl:pb-52">
          {/* Main Title: We're your Creative (line 1), partners (line 2) */}
          <h2 className="text-[46px] sm:text-[60px] md:text-[74px] lg:text-[84px] xl:text-[92px] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
            <span className="block">
              {titlePrefix}{" "}
              <span className="font-script font-normal text-[1.12em] tracking-normal inline-block pr-2">
                {titleScript}
              </span>
            </span>
            <span className="block">
              {titleSuffix}
            </span>
          </h2>

          {/* Badge: Talent with purpose */}
          <div className="self-start lg:self-auto shrink-0 pt-2">
            <Badge
              text={badge}
              disabled
              color="#ffffff"
              className="text-xs sm:text-sm font-medium tracking-wide text-white"
            />
          </div>
        </div>

        {/* Bottom Content Row: Left Statement + CTA, Right Team Cards */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-14">
          {/* Left Column: Statement, Button, Copyright */}
          <div className="flex flex-col gap-6 sm:gap-7 max-w-md lg:max-w-[440px] pb-1 sm:pb-2">
            {/* Statement */}
            <p className="text-lg sm:text-xl lg:text-[22px] font-normal leading-[1.4] text-white/95">
              {statement}
            </p>

            {/* Bottom Actions Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
              <a href={ctaLink} className="inline-block">
                <Button variant="light" showArrow={true} className="w-auto">
                  {ctaText}
                </Button>
              </a>

              <span className="text-xs sm:text-sm text-[#bababa] tracking-tight">
                {copyright}
              </span>
            </div>
          </div>

          {/* Right Column: Compact Team Member Cards */}
          <div className="flex items-center gap-4 sm:gap-5 shrink-0 self-start lg:self-auto">
            {members.map((member) => (
              <ImageCard
                key={member.id}
                image={member.image}
                alt={member.name}
                name={member.name}
                role={member.role}
                className="w-[170px] sm:w-[220px] md:w-[250px] lg:w-[270px] h-[250px] sm:h-[320px] md:h-[360px] lg:h-[390px] rounded-[16px]"
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
