import StudioImageCard from "@/components/cards/StudioImageCard";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";

const studioRatings = [
  {
    image: "/images/clutch.svg",
    imageAlt: "Clutch",
    rating: 4.9,
    stars: 5,
    reviews: 250,
  },
  {
    image: "/images/designrush.svg",
    imageAlt: "DesignRush",
    rating: 4,
    stars: 4,
    reviews: 186,
  },
];

export default function InsideStudioSection() {
  return (
    <Section
      id="about-us"
      spacing="none"
      className="bg-[var(--color-background-soft)] py-14 sm:py-20 lg:py-28"
    >
      <Container size="full" className="px-5 sm:px-8 lg:px-10">
        <div className="hidden grid-cols-3 items-center text-sm font-medium md:grid lg:text-base">
          <Badge
            text="Inside the Studio"
            disabled
            color="var(--color-primary)"
            className="font-medium"
          />
          <p className="text-center text-[var(--color-text-secondary)]">(©19-26)</p>
          <p className="text-right text-[var(--color-primary)]">(21.0278° N, 105.8342° E)</p>
        </div>

        <div className="mx-auto max-w-[1100px] md:mt-24 lg:mt-28">
          <h2 className="text-center text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.16] tracking-[-0.04em] text-[var(--color-primary)]">
            Driven by
            <br className="hidden md:inline" />{" "}
            <span className="font-script inline-block text-[1.16em] font-normal leading-[0.8] tracking-[-0.02em]">
              Innovation,
            </span>{" "}
            powered by creativity. We
            <br className="hidden md:inline" />{" "}
            combine strategy, design and
            <br className="hidden md:inline" />{" "}
            technology to build
            <br className="hidden md:inline" />{" "}
            impactful{" "}
            <span className="font-script inline-block text-[1.16em] font-normal leading-[0.8] tracking-[-0.02em]">
              Digital
            </span>{" "}
            experience that
            <br className="hidden md:inline" />{" "}
            help businesses grow, connect and
            <br className="hidden md:inline" />{" "}
            thrive
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-165 items-center justify-center gap-4 sm:mt-16 sm:gap-8">
          {studioRatings.map((item, index) => (
            <div
              key={item.imageAlt}
              className={`min-w-0 ${
                index === 1
                  ? "border-l border-[var(--color-border)] pl-4 sm:pl-8"
                  : ""
              }`}
            >
              <Rating
                {...item}
                boxSize="h-10 w-10 sm:h-15 sm:w-15"
                sizes="60px"
                className="gap-2 sm:gap-5 [&_p]:text-[9px] sm:[&_p]:text-sm [&_svg]:size-3 sm:[&_svg]:size-[18px]"
              />
            </div>
          ))}
        </div>

        <StudioImageCard
          image="/images/studio-team.avif"
          imageAlt="Studio team gathered in sunlight"
          avatar="/images/team-lead-avatar.avif"
          title="Discuss your projects"
          subtitle="Speak with the team lead"
          className="mx-auto mt-14 max-w-[640px] sm:mt-20"
        />

        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center text-center sm:mt-20">
          <p className="text-sm leading-[1.35] text-[var(--color-text-secondary)] sm:text-base">
            We’re more than a technology company — we’re{" "}
            <strong className="font-semibold text-[var(--color-primary)]">
              innovators
            </strong>
            , creators, problem-solvers. Blending bold creativity with strategy and technical
            experiences that stand out in a{" "}
            <strong className="font-semibold text-[var(--color-primary)]">
              crowded digital
            </strong>{" "}
            world.
          </p>

          <Button
            href="#featured-projects"
            variant="dark"
            className="mt-6 text-xs font-semibold sm:text-sm"
          >
            View our work
          </Button>
        </div>
      </Container>
    </Section>
  );
}
