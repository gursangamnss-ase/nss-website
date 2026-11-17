import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import { industriesData } from "@/data/industriesData";

export default function IndustriesSection() {
  const { header, industries } = industriesData;

  return (
    <Section
      id="industries"
      spacing="none"
      background="transparent"
      className="py-16 sm:py-20 lg:py-28"
    >
      <Container size="2xl" className="px-5 sm:px-8 lg:px-12">
        <h2 className="sr-only">Built for Verticals that Move</h2>

        {/* Header - Aligned with TrustedClientsSection layout */}
        <div className="grid grid-cols-1 gap-y-4 sm:gap-y-6 sm:grid-cols-2 md:gap-3 lg:grid-cols-6 items-start">
          {/* Badge */}
          <div className="flex items-start pt-1 sm:pt-2 lg:col-span-2">
            <Badge
              text={header.badge}
              disabled
              color="var(--color-text-muted)"
              className="text-xs font-medium tracking-wide sm:text-sm"
            />
          </div>

          {/* Heading sentence */}
          <div className="lg:col-span-4">
            <p className="indent-14 sm:indent-24 lg:text-indent-custom text-[27px] sm:text-[32px] lg:text-[38px] font-medium leading-[1.14] tracking-[-0.035em] text-[var(--color-text-muted)]">
              <span className="text-white">
                {header.heading.highlight}
              </span>{" "}
              <br className="hidden sm:inline" />
              {header.heading.rest}
            </p>
          </div>
        </div>

        {/* 8 Simple Industry Cards (Number, Title, Description) */}
        <div className="mt-8 sm:mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 md:gap-3.5">
          {industries.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 sm:p-6 backdrop-blur-[6px] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:scale-[1.01] min-h-[160px] sm:min-h-[175px] cursor-pointer select-none"
            >
              <span className="font-mono text-xs text-white/40 tracking-wider">
                {item.number}
              </span>

              <div className="mt-4 flex flex-col gap-2">
                {/* Dual-layer vertical text roll animation on card title (matching button animation) */}
                <h3 className="relative inline-flex flex-col h-[1.3em] overflow-hidden text-xl sm:text-2xl font-bold tracking-tight text-white">
                  <span className="block origin-left transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full group-hover:scale-[0.85] group-hover:opacity-0">
                    {item.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 block origin-left translate-y-full scale-[1.15] opacity-0 transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none"
                  >
                    {item.title}
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
