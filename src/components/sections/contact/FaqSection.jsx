import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";
import FaqAccordion from "./FaqAccordion";
import { contactData } from "@/data/contactData";

export default function FaqSection({
  items,
  badgeText,
  headingLightText,
  headingScriptText,
  headingEndText,
  layout = "stacked",
} = {}) {
  const { faq } = contactData;
  const displayItems = items || faq.items;
  const badge = badgeText || faq.badge;
  const headingLight = headingLightText || faq.headingLight;
  const headingScript = headingScriptText || faq.headingScript;
  const headingEnd = headingEndText || faq.headingEnd;

  const isSplit = layout === "split";

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <Container size="2xl" className="relative z-10">
        {isSplit ? (
          /* 2 Parallel Columns (matching Image 1) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Badge + Heading */}
            <div className="lg:col-span-5 flex flex-col items-start gap-5 sm:gap-6">
              <Badge
                text={badge}
                disabled
                color="var(--color-primary)"
                className="text-xs sm:text-sm font-medium tracking-wide"
              />
              <h2 className="text-[clamp(2.75rem,5.5vw,4.75rem)] font-medium tracking-[-0.035em] text-[var(--color-primary)] leading-[1.08]">
                {headingLight}{" "}
                <span className="font-script text-[1.22em] font-normal italic tracking-normal inline-block align-baseline -rotate-1 mx-1">
                  {headingScript}
                </span>
                <br />
                {headingEnd}
              </h2>
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-7">
              <FaqAccordion items={displayItems} className="w-full max-w-none" />
            </div>
          </div>
        ) : (
          /* Centered Top-Bottom (Stacked Layout for Contact Page matching Image 2) */
          <>
            <div className="text-center mb-14 sm:mb-18 space-y-4">
              <Badge
                text={badge}
                disabled
                color="var(--color-primary)"
                className="text-sm font-medium text-neutral-800"
              />
              <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-tight text-[var(--color-primary)] leading-[1.08]">
                {headingLight}{" "}
                <br className="hidden sm:inline" />
                <span className="font-script font-normal italic tracking-normal">
                  {headingScript}
                </span>{" "}
                {headingEnd}
              </h2>
            </div>

            <FaqAccordion items={displayItems} />
          </>
        )}
      </Container>
    </section>
  );
}
