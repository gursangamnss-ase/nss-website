import Image from "next/image";
import Link from "next/link";
import { enquiryData } from "@/data/enquiryData";
import EnquiryForm from "@/components/forms/EnquiryForm";

export default function EnquirySection() {
  const { videoSrc, badge, heading, form, info } = enquiryData;

  return (
    <section className="relative overflow-hidden bg-[#05080c] text-white py-24 sm:py-32 lg:py-36">
      {/* Background Video & Dark Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          {/* Pre-title Badge */}
          <div className="inline-flex items-center gap-2 text-sm sm:text-base text-white font-semibold tracking-wide mb-4">
            <svg
              viewBox="0 0 64 64"
              className="w-4 h-4 fill-white shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z"
              />
            </svg>
            <span>{badge}</span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl sm:text-7xl lg:text-[86px] font-bold leading-[1.08] tracking-tight text-white">
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

          {/* Right Column: Info & Discovery CTA (Bold & Increased Font) */}
          <div className="w-full lg:w-[420px] flex flex-col justify-between py-2 sm:py-3 gap-10">
            {/* Top: How do we connect */}
            <div className="space-y-5">
              <p className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {info.title}
              </p>
              <ul className="space-y-4">
                {info.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base sm:text-lg font-semibold text-white/95 leading-relaxed"
                  >
                    <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-2.5" />
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
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                    {info.teamLeader.name}
                  </p>
                  <p className="text-sm sm:text-[15px] font-medium text-[#dadadb]">
                    {info.teamLeader.role}
                  </p>
                </div>
              </div>

              {/* Book a Discovery Call Button */}
              <Link
                href={info.cta.link}
                className="group inline-flex items-center justify-between gap-4 bg-white hover:bg-neutral-100 !text-[#05080c] pl-6 pr-1 py-1 rounded-full font-medium text-[15px] transition-all shadow-md w-fit active:scale-95 h-[44px]"
              >
                <span className="!text-[#05080c] font-medium whitespace-nowrap">
                  {info.cta.text}
                </span>
                <span className="w-9 h-9 rounded-full bg-[#05080c] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg
                    viewBox="0 0 15 12"
                    className="w-3.5 h-3 fill-none stroke-current"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1.5 6H14m0 0L9 1m5 5-5 5" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
