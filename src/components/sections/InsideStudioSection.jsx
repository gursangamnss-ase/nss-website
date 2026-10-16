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
      className="bg-[#f5f5f4] py-14 sm:py-20 lg:py-28"
    >
      <Container size="full" className="px-5 sm:px-8 lg:px-10">
        <div className="hidden grid-cols-3 items-center text-sm font-medium md:grid lg:text-base">
          <Badge
            text="Inside the Studio"
            disabled
            color="#05080c"
            className="font-medium"
          />
          <p className="text-center text-[#5b5b5b]">(©19-26)</p>
          <p className="text-right">(21.0278° N, 105.8342° E)</p>
        </div>

        <div className="mx-auto max-w-[1380px] md:mt-24 lg:mt-28">
          <h2 className="text-center text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.16] tracking-[-0.045em] text-[#05080c]">
            Driven by{" "}
            <span className="font-script inline-block text-[1.16em] font-normal leading-[0.8] tracking-[-0.02em]">
              Strategy,
            </span>{" "}
            fueled by imagination. We craft design–First solutions that help{" "}
            <span className="font-script inline-block text-[1.16em] font-normal leading-[0.8] tracking-[-0.02em]">
              Brands
            </span>{" "}
            stand out and thrive in the digital age
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-165 items-center justify-center gap-4 sm:mt-16 sm:gap-8">
          {studioRatings.map((item, index) => (
            <div
              key={item.imageAlt}
              className={`min-w-0 ${
                index === 1
                  ? "border-l border-[#dadadb] pl-4 sm:pl-8"
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
          <p className="text-sm leading-[1.35] text-[#5b5b5b] sm:text-base">
            We’re not just designers or developers — we’re{" "}
            <strong className="font-semibold text-[#05080c]">
              storytellers
            </strong>
            , problem-solvers, and{" "}
            <strong className="font-semibold text-[#05080c]">
              brand builders
            </strong>
            . Blending bold creativity with strategy, we craft experiences that
            connect, convert, and stand out in a{" "}
            <strong className="font-semibold text-[#05080c]">
              crowded digital
            </strong>{" "}
            world.
          </p>

          <Button
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
