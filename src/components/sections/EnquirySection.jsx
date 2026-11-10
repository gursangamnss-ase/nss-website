import Image from "next/image";
import { enquiryData } from "@/data/enquiryData";
import EnquiryForm from "@/components/forms/EnquiryForm";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function EnquirySection() {
  const { videoSrc, badge, heading, form, info } = enquiryData;

  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] text-white py-24 sm:py-32 lg:py-36">
      {/* Background Video & Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      </div>

      <Container size="2xl" className="relative z-10 max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          {/* Pre-title Badge */}
          <Badge
            text={badge}
            color="var(--color-text-white)"
            className="text-sm sm:text-base font-medium tracking-wide mb-4 text-white"
          />

          {/* Heading */}
          <h2 className="text-5xl sm:text-7xl lg:text-[86px] font-medium leading-[1.08] tracking-tight text-white">
            {heading.line1} <br className="hidden sm:inline" />
            <span className="font-script text-[1.25em] font-normal leading-none inline-block align-baseline -rotate-2 mx-1.5">
              {heading.scriptWord}
            </span>{" "}
            {heading.line2}
          </h2>
        </div>

        {/* 2-Column Content Row: Form Card (Left) & Info / CTA (Right) */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-14">
          {/* Left Column: Form Card Component */}
          <EnquiryForm form={form} />

          {/* Right Column: Info & Discovery CTA */}
          <div className="w-full lg:w-[420px] flex flex-col justify-between py-2 sm:py-3 gap-10">
            {/* Top: How do we connect */}
            <div className="space-y-5">
              <p className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                {info.title}
              </p>
              <ul className="space-y-4">
                {info.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-base sm:text-lg font-medium text-white/95 leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-2.5" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom: Team Leader Badge & Discovery Call Button */}
            <div className="space-y-6 pt-4">
              {/* Team Leader Inline Badge */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-[12px] overflow-hidden relative shrink-0 shadow-md">
                  <Image
                    src={info.teamLeader.avatar}
                    alt={info.teamLeader.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {info.teamLeader.name}
                  </p>
                  <p className="text-sm sm:text-[15px] font-medium text-[var(--color-border)]">
                    {info.teamLeader.role}
                  </p>
                </div>
              </div>

              {/* Book a Discovery Call Button */}
              <Button
                href={info.cta.link}
                variant="light"
                size="md"
              >
                {info.cta.text}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
