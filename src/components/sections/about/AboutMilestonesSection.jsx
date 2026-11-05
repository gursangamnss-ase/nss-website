import Image from "next/image";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import { aboutData } from "@/data/aboutData";

export default function AboutMilestonesSection() {
  const { milestones } = aboutData;

  return (
    <section className="relative bg-white py-20 sm:py-28 lg:py-36 text-[var(--color-primary)] overflow-hidden">
      {/* Decorative Background Watermark Vector */}
      <div
        className="pointer-events-none absolute -top-12 sm:-top-16 lg:-top-24 -left-32 sm:-left-40 lg:-left-48 w-[580px] sm:w-[720px] lg:w-[860px] h-auto select-none opacity-90 z-0"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Badge & Section Heading */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <Badge
              text={milestones.badge}
              disabled
              color="var(--color-primary)"
              className="font-medium text-xs sm:text-sm tracking-wide mb-4"
            />

            <h2 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[1.1] tracking-[-0.04em] text-[var(--color-primary)]">
              {milestones.headingPrefix}{" "}
              <span className="font-script text-[1.25em] font-normal leading-none inline-block align-baseline -rotate-2 mx-1">
                {milestones.headingScript}
              </span>{" "}
              <br />
              {milestones.headingSuffix}
            </h2>
          </div>

          {/* Right Column: Copyright & Awards List */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-sm sm:text-base text-[var(--color-primary)] font-normal tracking-tight mb-6 sm:mb-8">
              {milestones.copyright}
            </p>

            <div className="flex flex-col">
              {milestones.awards.map((award, index) => (
                <div
                  key={award.id}
                  className="group flex items-center justify-between py-6 sm:py-8 border-b border-[var(--color-border)] transition-colors hover:border-[var(--color-primary)]/40"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    {/* Award Logo */}
                    <div className="relative h-8 w-24 sm:w-32 shrink-0 flex items-center">
                      <Image
                        src={award.logo}
                        alt={award.title}
                        width={140}
                        height={32}
                        className="max-h-8 w-auto object-contain"
                      />
                    </div>

                    {/* Award Title */}
                    <h3 className="text-sm sm:text-base lg:text-lg font-medium text-[var(--color-primary)] tracking-tight group-hover:text-black transition-colors">
                      {award.title}
                    </h3>
                  </div>

                  {/* Award Year */}
                  <span className="text-sm sm:text-base font-semibold text-[var(--color-text-secondary)] tracking-tight ml-4">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

