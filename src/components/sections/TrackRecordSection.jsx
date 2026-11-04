import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import TrackRecordItem from "@/components/cards/TrackRecordItem";
import { trackRecordData } from "@/data/trackRecordData";

export default function TrackRecordSection() {
  const { badge, headline, cta, stats } = trackRecordData;

  return (
    <section className="relative overflow-hidden bg-white pt-0 pb-20 sm:pb-28 lg:pb-36">
      {/* Decorative Background Watermark Vector */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-52 sm:-bottom-32 sm:-left-72 lg:-bottom-40 lg:-left-[420px] z-0 select-none opacity-90 hidden sm:block"
        aria-hidden="true"
      >
        <Image
          src="/images/counter-vector.svg"
          alt=""
          width={951}
          height={614}
          className="object-contain"
        />
      </div>

      <Container size="2xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[90px] xl:gap-[110px] items-start">
          {/* Left Column: Pre-title Badge, Main Heading, and CTA Button */}
          <div className="flex flex-col items-start">
            {/* Sparkle Icon Pre-title */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#05080c] mb-4 sm:mb-5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#05080c] shrink-0"
                aria-hidden="true"
              >
                <path d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z" />
              </svg>
              <span>{badge}</span>
            </div>

            {/* Display Heading */}
            <h2 className="text-[44px] sm:text-[60px] md:text-[68px] lg:text-[84px] font-medium tracking-[-0.04em] leading-[1.08] text-[#05080c]">
              {headline.start}{" "}
              <span className="font-script font-normal italic tracking-normal">
                {headline.script}
              </span>
              <br />
              {headline.end}
            </h2>

            {/* Action CTA Button */}
            <Link
              href={cta.href}
              className="mt-7 sm:mt-9 lg:mt-11 inline-flex items-center gap-4 rounded-full bg-[#05080c] pl-6 sm:pl-7 pr-2.5 py-2.5 text-sm sm:text-base font-medium text-white transition-all hover:bg-neutral-800 hover:scale-[1.02] group w-fit"
            >
              <span>{cta.label}</span>
              <span className="flex size-8 sm:size-9 items-center justify-center rounded-full bg-white text-[#05080c] transition-transform group-hover:translate-x-0.5">
                <svg
                  className="size-3.5 sm:size-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Right Column: Counter Metric List */}
          <div className="flex flex-col w-full">
            {stats.map((stat, idx) => (
              <TrackRecordItem key={idx} stat={stat} index={idx} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

