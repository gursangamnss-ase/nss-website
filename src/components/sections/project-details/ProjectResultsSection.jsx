"use client";

import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";
import CountUp from "@/components/ui/CounterUp";

export default function ProjectResultsSection({ results }) {
  if (!results) return null;
  const { badge, description, stats } = results;

  return (
    <section className="bg-white py-12 sm:py-16">
      <Container size="2xl">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-12">
          {/* Left Column: Badge */}
          <div className="shrink-0">
            <Badge
              text={badge || "The Result"}
              className="text-sm font-medium text-neutral-800"
            />
          </div>

          {/* Right Column: Narrative & Metrics Grid */}
          <div className="w-full lg:w-[62%] xl:w-[65%] space-y-8">
            <p className="text-base sm:text-lg font-medium text-neutral-700 leading-relaxed">
              {description}
            </p>

            {stats && stats.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 w-full">
                {stats.map((stat, idx) => {
                  const targetNumber = parseFloat(stat.count) || 0;

                  return (
                    <div
                      key={stat.label}
                      className="rounded-[20px] bg-[var(--color-surface)] p-6 sm:p-8 border border-neutral-100/60 flex flex-col justify-between shadow-sm"
                    >
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#05080c] tracking-tight mb-3 flex items-baseline">
                        <span>
                          <CountUp
                            to={targetNumber}
                            from={0}
                            duration={1.8}
                            delay={idx * 0.15}
                          />
                        </span>
                        {stat.symbol && (
                          <span className="font-normal text-neutral-600 ml-0.5">
                            {stat.symbol}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-neutral-600 leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
