import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { aboutData } from "@/data/aboutData";
import AboutHeroVideo from "./AboutHeroVideo";

export default function AboutHeroSection() {
  const { hero } = aboutData;

  return (
    <section className="relative z-20 overflow-hidden bg-white pt-25 sm:pt-30 lg:pt-35 pb-12 sm:pb-16">
      {/* Decorative Monogram Watermark Background matching reference */}
      <div
        className="pointer-events-none absolute right-[-240px] sm:right-[-160px] lg:right-[-80px] top-[-50px] sm:top-[-30px] w-[620px] sm:w-[850px] lg:w-[1020px] h-auto opacity-95 select-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/about/hero-vector.svg"
          alt=""
          width={750}
          height={1064}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      <Container size="2xl" className="relative z-10">
        {/* Main Display Heading */}
        <div className="max-w-5xl">
          <h1 className="text-[clamp(3.15rem,7.4vw,6rem)] font-medium leading-[0.90] tracking-[-0.04em] text-[var(--color-primary)]">
            {hero.headlineStart}{" "}
            <span className="font-script text-[1.28em] font-normal leading-none inline-block align-baseline -rotate-2 mx-1">
              {hero.headlineScript}
            </span>{" "}
            that
            <br />
            {hero.headlineEnd}
          </h1>
        </div>

        {/* Sub-row: Star Icon + Two-tone Description + Action Button Stack (centered on desktop, aligning under 'game') */}
        <div className="mt-6 sm:mt-8 lg:mt-10 flex justify-center">
          <div className="w-full max-w-[500px] flex flex-col gap-7 sm:gap-[15px] items-start">
            <div className="relative w-full">
              {/* 4-point Star Icon positioned at top-left of the text block */}
              <div
                className="absolute left-0 top-[2px] w-5 h-5 text-[var(--color-primary)] flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 64 64"
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinejoin="miter"
                    d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z"
                  />
                </svg>
              </div>

              {/* Two-tone Description Paragraph with first-line indent */}
              <p className="indent-9 sm:indent-10 text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.35] tracking-[-0.01em] text-[var(--color-primary)] font-medium">
                We’re a team of designers, developers, and strategists bringing bold ideas to{" "}
                <span className="text-[var(--color-text-secondary)] font-normal">
                  life with purpose, passion, and unforgettable execution.
                </span>
              </p>
            </div>

            {/* Pill CTA Button aligned directly under the left edge of the block */}
            <Link
              href={hero.cta.href}
              className="group inline-flex items-center justify-between gap-5 rounded-full bg-[var(--color-primary)] pl-6 pr-1.5 py-1.5 text-sm sm:text-base font-medium text-white hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] shadow-sm"
            >
              <span>{hero.cta.text}</span>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[var(--color-primary)] transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <svg
                  className="h-3.5 w-3.5 fill-none stroke-current"
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

        {/* Bottom Bar: Coordinates (Left) + Video Card (Right) */}
        <div className="mt-10 sm:mt-12 lg:mt-14 flex flex-col-reverse lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-10">
          <div className="text-xs sm:text-sm font-medium text-[var(--color-text-secondary)] tracking-wider">
            {hero.coordinates}
          </div>

          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <AboutHeroVideo />
          </div>
        </div>
      </Container>
    </section>
  );
}
