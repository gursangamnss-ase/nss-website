import StudioImageCard from "@/components/cards/StudioImageCard";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Rating from "@/components/ui/Rating";

const googleRating = {
  image: "/images/google.svg",
  imageAlt: "Google",
  rating: 5.0,
  stars: 5,
  reviews: 24,
};

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
            {/* {" "} */}
            <span className="font-script inline-block text-[1.16em] font-normal leading-[0.8] tracking-[-0.02em]">
              Innovation,
            </span>{" "}
            powered by creativity. We
            {" "}
            combine strategy, design and
            {" "}
            technology to build
            {" "}
            impactful{" "}
            <span className="font-script inline-block text-[1.16em] font-normal leading-[0.8] tracking-[-0.02em]">
              Digital
            </span>{" "}
            experience that
           {" "}
            help businesses grow, connect and
            {" "}
            thrive
          </h2>
        </div>

        <div className="mx-auto mt-12 flex items-center justify-center sm:mt-16">
          <Rating
            {...googleRating}
            boxSize="h-11 w-11 sm:h-15 sm:w-15"
            sizes="60px"
            className="gap-3 sm:gap-5 [&_p]:text-xs sm:[&_p]:text-sm [&_svg]:size-3.5 sm:[&_svg]:size-[18px]"
          />
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
