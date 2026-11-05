import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import CountUp from "@/components/ui/CounterUp";
import { aboutData } from "@/data/aboutData";

export default function AboutVisionSection() {
  const { vision } = aboutData;

  return (
    <section className="relative bg-[var(--color-surface)] py-20 sm:py-28 lg:py-36 text-[var(--color-primary)] overflow-hidden">
      <Container size="2xl">
        {/* Upper Row:
            Left Column (4 cols): Badge at top
            Right Column (8 cols): Display Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start mb-8 sm:mb-8 lg:mb-8">
          {/* Left Column: Badge */}
          <div className="lg:col-span-4 pt-2">
            <Badge
              text={vision.badge}
              disabled
              color="var(--color-primary)"
              className="font-medium text-xs sm:text-sm tracking-wide"
            />
          </div>

          {/* Right Column: Display Heading matching exact line break in Image 1 */}
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(2.75rem,6.8vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.04em] text-[var(--color-primary)]">
              {vision.headingPrefix}{" "}
              <span className="font-script text-[1.28em] font-normal leading-none inline-block align-baseline -rotate-2 mx-1">
                {vision.headingScript}
              </span>{" "}
              into
              <br />
              reality
            </h2>
          </div>
        </div>

        {/* Lower Row:
            Left Column (4 cols): Founder Photo Card (aligned horizontally with Our mission/Our goal)
            Right Column (8 cols): 2-Column Mission & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch">
          {/* Left Column: Founder Photo Card */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative rounded-[20px] sm:rounded-[24px] overflow-hidden flex-1 min-h-[380px] sm:min-h-[400px] lg:min-h-[430px] p-7 sm:p-9 flex flex-col justify-end text-white shadow-sm group">
              <Image
                src={vision.founderQuote.image}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Gradient Overlay for Text Contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <p className="text-lg sm:text-[19px] font-medium leading-snug tracking-tight mb-4 text-white">
                  {vision.founderQuote.quote}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 font-normal">
                  <span className="font-semibold text-white">{vision.founderQuote.author}</span>
                  {" "}
                  {vision.founderQuote.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 2-Column Mission & Goals */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 h-full">
              {/* Mission Subcolumn */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[var(--color-primary)] mb-3">
                    {vision.mission.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-medium leading-relaxed">
                    To empower brands through bold design, strategic thinking, and{" "}
                    <strong className="font-semibold text-[var(--color-primary)]">
                      digital experiences
                    </strong>{" "}
                    that inspire action and create lasting impact. To help{" "}
                    <strong className="font-semibold text-[var(--color-primary)]">
                      businesses
                    </strong>{" "}
                    stand out through thoughtful branding and{" "}
                    <strong className="font-semibold text-[var(--color-primary)]">
                      high-performance digital solutions
                    </strong>{" "}
                    rooted in creativity and clarity.
                  </p>

                  <div className="mt-7 sm:mt-8">
                    <Link
                      href={vision.mission.ctaLink}
                      className="group inline-flex items-center justify-between gap-5 rounded-full bg-[var(--color-primary)] pl-6 pr-1.5 py-1.5 text-sm font-medium text-white hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] shadow-sm"
                    >
                      <span>{vision.mission.ctaText}</span>
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[var(--color-primary)] transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-3 w-3 fill-none stroke-current"
                          strokeWidth="2.2"
                          viewBox="0 0 15 12"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M1.5 6H14m0 0L9 1m5 5-5 5"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Copyright Line */}
                <div className="mt-10 sm:mt-14">
                  <p className="text-xs text-[var(--color-text-secondary)] font-normal tracking-wide">
                    {vision.goals.copyright}
                  </p>
                </div>
              </div>

              {/* Goals Subcolumn with clean dot bullets */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[var(--color-primary)] mb-3">
                  {vision.goals.title}
                </h3>
                <ul className="space-y-2">
                  {vision.goals.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm sm:text-base font-medium text-[var(--color-text-secondary)] leading-relaxed"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-secondary)] shrink-0 mt-2"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bento Row: 4 Metric Counter Cards matching Image 1 */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-[10px]">
          {vision.metrics.map((metric, idx) => {
            const isDark = metric.isRating;

            return (
              <div
                key={metric.id}
                className={`rounded-[16px] p-7 sm:p-8 flex flex-col justify-between min-h-[300px] sm:min-h-[320px] transition-all duration-300 hover:shadow-md ${
                  isDark
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-white text-[var(--color-primary)] border border-neutral-100/90 shadow-sm"
                }`}
              >
                {/* Top header of metric card */}
                {isDark ? (
                  <div>
                    {/* Avatars Stack + Pill Badge */}
                    <div className="flex items-center">
                      <div className="flex items-center -space-x-2">
                        {metric.avatars.map((av, avIdx) => (
                          <div
                            key={avIdx}
                            className="relative h-8 w-8 rounded-[10px] border-2 border-[var(--color-primary)] overflow-hidden"
                          >
                            <Image
                              src={av}
                              alt=""
                              aria-hidden="true"
                              fill
                              sizes="32px"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="ml-1.5 px-2 py-0.5 rounded-[10px] bg-[#f5f5f5] text-[var(--color-primary)] text-xs font-semibold border-2 border-[var(--color-primary)] flex items-center justify-center">
                        {metric.clientCount || "72+"}
                      </div>
                    </div>

                    {/* 5 White Stars & Label */}
                    <div className="mt-4">
                      <div
                        className="flex items-center gap-0.5 text-white text-xs tracking-widest"
                        aria-label="5 stars rating"
                      >
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-[#aaa9ad] mt-2">
                        {metric.label}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm sm:text-base font-medium text-[var(--color-primary)] tracking-tight">
                    {metric.label}
                  </p>
                )}

                {/* Bottom Row: Counter Number (Left) + LG Description (Right) */}
                <div className="flex items-end justify-between gap-3 pt-6">
                  <div className="flex items-baseline shrink-0">
                    <span className="text-[52px] sm:text-[58px] lg:text-[60px] font-medium tracking-tight leading-none text-current">
                      <CountUp to={metric.value} from={0} duration={1.8} delay={idx * 0.1} />
                    </span>
                    <span className="font-script text-[50px] sm:text-[56px] lg:text-[62px] font-normal leading-none ml-0.5 text-current">
                      {metric.suffix}
                    </span>
                  </div>

                  <p
                    className={`text-right text-base sm:text-lg font-medium leading-[1.2] max-w-[145px] ${
                      isDark ? "text-[#aaa9ad]" : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
