import Image from "next/image";
import Container from "@/components/layout/Container";

export default function BlogDetailContent({ post }) {
  const {
    quote,
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
          {/* Featured Pull Quote */}
          {quote && (
            <div className="relative border-l-4 border-[var(--color-primary)] pl-5 sm:pl-7 py-3 bg-black/[0.02] rounded-r-2xl">
              <p className="text-lg sm:text-xl font-medium italic text-[var(--color-primary)] leading-relaxed">
                “{quote}”
              </p>
            </div>
          )}

          {/* Introduction Block */}
          {(introHeading || introText) && (
            <div className="space-y-4">
              {introHeading && (
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[var(--color-primary)]">
                  {introHeading}
                </h2>
              )}
              {introText && (
                <p className="text-base sm:text-lg font-normal sm:font-medium text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
                  {introText}
                </p>
              )}
            </div>
          )}

          {/* Body Sections */}
          {sections.map((section, idx) => (
            <div key={section.heading || idx} className="space-y-5 pt-2">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--color-primary)]">
                  {section.heading}
                </h2>
              )}
              {section.subheading && (
                <h3 className="text-xl sm:text-2xl font-medium text-[var(--color-primary)]">
                  {section.subheading}
                </h3>
              )}
              {section.paragraphs?.map((p, pIdx) => {
                if (typeof p === "object" && p !== null) {
                  if (p.type === "code") {
                    return (
                      <div
                        key={pIdx}
                        className="my-5 rounded-2xl bg-neutral-950 border border-neutral-800 p-5 sm:p-6 overflow-x-auto shadow-sm"
                      >
                        {p.language && (
                          <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 pb-2 border-b border-neutral-800">
                            {p.language}
                          </div>
                        )}
                        <pre className="font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed overflow-x-auto">
                          <code>{p.content}</code>
                        </pre>
                      </div>
                    );
                  }

                  if (p.type === "image") {
                    return (
                      <div
                        key={pIdx}
                        className="my-6 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-950"
                      >
                        <div className="relative w-full aspect-[16/9]">
                          <Image
                            src={p.src}
                            alt={p.alt || ""}
                            fill
                            className="object-contain"
                          />
                        </div>
                        {p.caption && (
                          <p className="text-center text-xs sm:text-sm text-neutral-500 py-2.5 px-4 bg-neutral-50 border-t border-neutral-200">
                            {p.caption}
                          </p>
                        )}
                      </div>
                    );
                  }

                  if (p.type === "quote") {
                    return (
                      <blockquote
                        key={pIdx}
                        className="border-l-4 border-[var(--color-primary)] pl-5 sm:pl-7 py-3 my-5 bg-black/[0.02] rounded-r-2xl"
                      >
                        <p className="text-base sm:text-lg italic font-medium text-[var(--color-primary)] leading-relaxed">
                          {p.content}
                        </p>
                      </blockquote>
                    );
                  }
                }

                return (
                  <p
                    key={pIdx}
                    className="text-base sm:text-lg font-normal sm:font-medium text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line"
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          ))}

          {/* Takeaway / Conclusion Block */}
          {(takeawayHeading || takeawayText) && (
            <div className="space-y-4 pt-6">
              {takeawayHeading && (
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[var(--color-primary)]">
                  {takeawayHeading}
                </h2>
              )}
              {takeawayText && (
                <p className="text-base sm:text-lg font-normal sm:font-medium text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
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
