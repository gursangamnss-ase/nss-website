import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";

export default function ProjectChallengeSolution({ challenge, solution }) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container size="2xl">
        <div className="space-y-16 sm:space-y-24">
          {/* Block 1: The Challenge */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-12">
            <div className="shrink-0">
              <Badge
                text={challenge.badge}
                className="text-sm font-medium text-neutral-800"
              />
            </div>
            <div className="w-full lg:w-[62%] xl:w-[65%] space-y-6">
              <p className="text-base sm:text-base font-medium text-neutral-700 leading-relaxed">
                {challenge.description}
              </p>

              {challenge.bullets && challenge.bullets.length > 0 && (
                <ul className="space-y-3 pt-2 text-base sm:text-lg font-medium text-neutral-700">
                  {challenge.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="text-neutral-400 select-none font-bold">
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Block 2: The Solution */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-12">
            <div className="shrink-0">
              <Badge
                text={solution.badge}
                className="text-sm font-medium text-neutral-800"
              />
            </div>
            <div className="w-full lg:w-[62%] xl:w-[65%]">
              <p className="text-base sm:text-lg font-medium text-neutral-700 leading-relaxed">
                {solution.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
