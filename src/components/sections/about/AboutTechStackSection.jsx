import Image from "next/image";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { aboutData } from "@/data/aboutData";

export default function AboutTechStackSection() {
  const data = aboutData.techStack || aboutData.milestones;
  const stacks = data?.stacks || [];

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
          className="w-full h-auto object-contain"
        />
      </div>

      <Container size="2xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Badge, Headline & Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky">
            <Badge
              text={data.badge}
              disabled
              color="var(--color-primary)"
              className="font-medium text-xs sm:text-sm tracking-wide mb-4"
            />

            <h2 className="text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[1.1] tracking-[-0.04em] text-[var(--color-primary)]">
              {data.headingPrefix}{" "}
              <span className="font-script text-[1.25em] font-normal leading-none inline-block align-baseline -rotate-2 mx-1">
                {data.headingScript}
              </span>{" "}
              <br />
              {data.headingSuffix}
            </h2>

            {data.description && (
              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] font-normal leading-relaxed mt-5 max-w-[400px]">
                {data.description}
              </p>
            )}
          </div>

          {/* Right Column: Section Tag & Interactive Tech Capsule Rows */}
          <div className="lg:col-span-7 flex flex-col">
            <p className="text-sm sm:text-base text-[var(--color-primary)] font-normal tracking-tight mb-6 sm:mb-8">
              {data.copyright}
            </p>

            <div className="flex flex-col">
              {stacks.map((stack) => (
                <div
                  key={stack.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-7 border-b border-[var(--color-border)] transition-colors hover:border-[var(--color-primary)]/40 gap-4 sm:gap-6"
                >
                  {/* Service Domain Title on the left */}
                  <div className="shrink-0 sm:w-[180px] lg:w-[200px]">
                    <h3 className="text-base sm:text-lg font-medium text-[var(--color-primary)] tracking-tight">
                      {stack.title}
                    </h3>
                  </div>

                  {/* Interactive Tech Capsules on the right with single button text roll animation */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-1 sm:justify-end">
                    {stack.techs?.map((tech) => (
                      <Button
                        key={tech}
                        variant="capsule"
                        size="xs"
                        showArrow={false}
                        className="font-medium tracking-tight"
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

