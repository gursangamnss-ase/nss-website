import Badge from "@/components/ui/Badge";
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
                  <span className="text-neutral-500 font-medium">
                    {item.label}
                  </span>
                  <span className="text-[#05080c] font-medium text-right">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Live Site Pill Button */}
            {liveSiteUrl && (
              <div className="pt-2">
                <a
                  href={liveSiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-black pl-6 pr-2 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors shadow-sm group"
                >
                  <span>{liveSiteLabel || "View live site"}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:translate-x-0.5">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
