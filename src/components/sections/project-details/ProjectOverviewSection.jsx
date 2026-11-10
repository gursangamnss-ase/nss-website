import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function ProjectOverviewSection({ overview }) {
  const { badge, description, meta, liveSiteUrl, liveSiteLabel } = overview;

  return (
    <section className="bg-white py-12 sm:py-16">
      <Container size="2xl">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-12">
          {/* Left Column: Badge */}
          <div className="shrink-0">
            <Badge text={badge} className="text-sm font-medium text-neutral-800" />
          </div>

          {/* Right Column: Narrative, Metadata & CTA pushed to the right */}
          <div className="w-full lg:w-[62%] xl:w-[65%] space-y-10">
            {/* Overview Narrative */}
            <p className="text-lg sm:text-xl font-medium text-neutral-700 leading-relaxed">
              {description}
            </p>

            {/* Metadata Key-Value Rows spanning full right column */}
            <div className="w-full border-t border-[var(--color-border-light)] divide-y divide-[var(--color-border-light)]">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-4 text-sm sm:text-base font-medium"
                >
                  <span className="text-[var(--color-text-secondary)] font-medium">
                    {item.label}
                  </span>
                  <span className="text-[var(--color-primary)] font-medium text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Live Site Pill Button */}
            {liveSiteUrl && (
              <div className="pt-2">
                <Button
                  href={liveSiteUrl}
                  variant="dark"
                  size="md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {liveSiteLabel || "View live site"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
