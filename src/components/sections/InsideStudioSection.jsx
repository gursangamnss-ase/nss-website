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
      className="relative bg-[var(--color-background-soft)] py-14 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Background Shadow Texture (Framer exact match) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0 flex flex-col items-center justify-start overflow-hidden"
      >
        <div className="sticky top-0 z-[1] flex w-full items-center justify-center overflow-hidden aspect-square h-[360px] min-[810px]:h-[810px] min-[1200px]:h-[1200px]">
          <div className="absolute z-[1] overflow-hidden select-none aspect-square w-[350px] h-[350px] -top-[60px] -right-[60px] min-[810px]:w-[810px] min-[810px]:h-[810px] min-[810px]:-top-[130px] min-[810px]:-right-[130px] min-[1200px]:w-[1200px] min-[1200px]:h-[1200px]">
            <img
              src="/images/inside-studio-shadows.svg"
              alt=""
              className="block h-full w-full object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>

      <Container size="full" className="relative z-10 px-5 sm:px-8 lg:px-10">
        <div className="hidden grid-cols-3 items-center text-sm font-medium md:grid lg:text-base">
          <Badge
            text="Inside the Studio"
            disabled
            color="var(--color-primary)"
            className="font-medium"
          />
          <p className="text-center text-[var(--color-text-secondary)]">(©19-26)</p>
          <p className="text-right text-[var(--color-primary)]">(30.7046° N, 76.7179° E)</p>
        </div>

        <div className="mx-auto max-w-[1100px] md:mt-24 lg:mt-28">
          <h2 className="text-center text-[clamp(2.50rem,5vw,4rem)] font-medium leading-[1.2] sm:leading-[1.16] tracking-[-0.035em] text-[var(--color-primary)]">
            {/* Mobile concise version */}
            <span className="md:hidden">
              Driven by{" "}
              <span className="font-script inline-block text-[1.16em] font-normal leading-[0.8] tracking-[-0.02em]">
                Innovation,
              </span>{" "}
              we craft powerful{" "}
              <span className="font-script inline-block text-[1.16em] font-normal leading-[0.8] tracking-[-0.02em]">
                Digital
              </span>{" "}
              solutions that scale your business.
            </span>

            {/* Desktop full version */}
            <span className="hidden md:inline">
              Driven by{" "}
              <span className="font-script inline-block text-[1.16em] font-normal leading-[0.8] tracking-[-0.02em]">
                Innovation,
              </span>{" "}
              we blend strategy, design and technology to create impactful{" "}
              <span className="font-script inline-block text-[1.16em] font-normal leading-[0.8] tracking-[-0.02em]">
                Digital
              </span>{" "}
              experiences that help businesses grow.
            </span>
          </h2>
        </div>

        <div className="mx-auto my-8 flex items-center justify-center sm:mt-16">
          <Rating
            {...googleRating}
            boxSize="h-11 w-11 sm:h-15 sm:w-15"
            sizes="60px"
            className="gap-3 sm:gap-5 [&_p]:text-xs sm:[&_p]:text-sm [&_svg]:size-3.5 sm:[&_svg]:size-[18px]"
          />
        </div>

        <StudioImageCard
          image="/images/company-team-studio.png"
          imageAlt="Studio team gathered in sunlight"
          avatar="/brand/avatar-6.webp"
          title="Discuss your projects"
          subtitle="Speak with the team lead"
          className="mx-auto max-w-[640px] sm:mt-20"
        />

        <div className="mx-auto mt-8 sm:mt-14 flex max-w-xl sm:max-w-2xl flex-col items-center text-center">
          <p className="text-[16px] sm:text-[18px] lg:text-xl font-normal leading-[1.55] sm:leading-[1.6] text-neutral-600 tracking-normal max-w-[440px] sm:max-w-xl">
            We’re not just designers or developers we’re{" "}
            <strong className="font-semibold text-neutral-900">
              storytellers
            </strong>
            , problem-solvers, and{" "}
            <strong className="font-semibold text-neutral-900">
              brand builders
            </strong>
            . Blending bold creativity with strategy, we craft experiences that connect,
            convert, and stand out in a{" "}
            <strong className="font-semibold text-neutral-900">
              crowded digital
            </strong>{" "}
            world.
          </p>

          <Button
            href="#featured-projects"
            variant="dark"
            className="mt-6 sm:mt-8 text-xs font-semibold sm:text-sm"
          >
            View our work
          </Button>
        </div>
      </Container>
    </Section>
  );
}
