import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";

export default function ProjectFeedbackSection({ feedback }) {
  if (!feedback) return null;
  const { badge, quote, author, role } = feedback;

  return (
    <section className="bg-white py-12 sm:py-18">
      <Container size="2xl">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-8 lg:gap-12">
          {/* Left Column: Badge */}
          <div className="shrink-0">
            <Badge
              text={badge || "Client feedback"}
              className="text-sm font-medium text-neutral-800"
            />
          </div>

          {/* Right Column: Quote & Author Card */}
          <div className="w-full lg:w-[62%] xl:w-[65%] space-y-8">
            <blockquote className="text-lg lg:text-xl font-medium text-[var(--color-primary)] leading-snug tracking-tight">
              &ldquo;{quote}&rdquo;
            </blockquote>

            <div className="pt-2">
              <div className="text-base font-medium">
                <span className="font-semibold text-[var(--color-primary)]">{author}</span>
                {role && (
                  <span className="text-[var(--color-text-secondary)] ml-1.5 font-medium">
                    , {role}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
