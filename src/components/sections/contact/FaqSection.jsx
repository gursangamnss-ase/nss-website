import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";
import FaqAccordion from "./FaqAccordion";
import { contactData } from "@/data/contactData";

export default function FaqSection() {
  const { faq } = contactData;

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container size="2xl" className="relative z-10">
        {/* Centered Heading Block */}
        <div className="text-center mb-14 sm:mb-18 space-y-4">
          <Badge
            text={faq.badge}
            className="text-sm font-medium text-neutral-800"
          />
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-tight text-[var(--color-primary)] leading-[1.08]">
            {faq.headingLight}{" "}
            <br className="hidden sm:inline" />
            <span className="font-script font-normal italic tracking-normal">
              {faq.headingScript}
            </span>{" "}
            {faq.headingEnd}
          </h2>
        </div>

        {/* Interactive Accordion */}
        <FaqAccordion items={faq.items} />
      </Container>
    </section>
  );
}
