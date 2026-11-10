import Image from "next/image";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
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
            <Badge
              text={badge}
              color="var(--color-primary)"
              className="text-xs sm:text-sm font-medium mb-4 sm:mb-5"
            />

            {/* Display Heading */}
            <h2 className="text-[44px] sm:text-[60px] md:text-[68px] lg:text-[84px] font-medium tracking-[-0.04em] leading-[1.08] text-[var(--color-primary)]">
              {headline.start}{" "}
              <span className="font-script font-normal italic tracking-normal">
                {headline.script}
              </span>
              <br />
              {headline.end}
            </h2>

            {/* Action CTA Button */}
            <Button
              href={cta.href}
              variant="dark"
              size="md"
              className="mt-7 sm:mt-9 lg:mt-11"
            >
              {cta.label}
            </Button>
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

