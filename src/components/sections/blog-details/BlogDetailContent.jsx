import Container from "@/components/layout/Container";

export default function BlogDetailContent({ post }) {
  const {
    introHeading,
    introText,
    sections = [],
    takeawayHeading,
    takeawayText,
  } = post;

  return (
    <article className="bg-white pb-16 sm:pb-24">
      <Container size="2xl">
        <div className="mx-auto max-w-4xl lg:max-w-[1020px] px-2 sm:px-4 space-y-10 sm:space-y-12">
          {/* Introduction Block */}
          {(introHeading || introText) && (
            <div className="space-y-4">
              {introHeading && (
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#05080c]">
                  {introHeading}
                </h2>
              )}
              {introText && (
                <p className="text-base sm:text-lg font-normal sm:font-medium text-neutral-700 leading-relaxed">
                  {introText}
                </p>
              )}
            </div>
          )}

          {/* Body Sections */}
          {sections.map((section, idx) => (
            <div key={section.heading || idx} className="space-y-4 pt-2">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#05080c]">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs?.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-base sm:text-lg font-normal sm:font-medium text-neutral-700 leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}

          {/* Takeaway / Conclusion Block */}
          {(takeawayHeading || takeawayText) && (
            <div className="space-y-4 pt-6">
              {takeawayHeading && (
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#05080c]">
                  {takeawayHeading}
                </h2>
              )}
              {takeawayText && (
                <p className="text-base sm:text-lg font-normal sm:font-medium text-neutral-700 leading-relaxed">
                  {takeawayText}
                </p>
              )}
            </div>
          )}
        </div>
      </Container>
    </article>
  );
}

