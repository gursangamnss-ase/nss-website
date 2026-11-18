import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";
import { privacyPolicyData } from "@/data/privacyPolicyData";

export const metadata = {
  title: privacyPolicyData.metadata.title,
  description: privacyPolicyData.metadata.description,
  openGraph: {
    title: privacyPolicyData.metadata.title,
    description: privacyPolicyData.metadata.description,
    url: `${privacyPolicyData.metadata.website}/privacy-policy`,
    siteName: privacyPolicyData.metadata.company,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const { metadata: meta, contactInfo, sections } = privacyPolicyData;

  return (
    <div className="flex min-h-screen flex-col bg-white text-[var(--color-primary)]">
      {/* Navigation header with dark theme controls for white background */}
      <Navbar isHome={false} activePath="/privacy-policy" />

      <main id="main-content" className="flex-1">
        {/* Header Hero Banner */}
        <section className="relative overflow-hidden bg-white pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20">
          <Container size="2xl">
            {/* Top Metadata Row (matching InsideStudioSection pattern) */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-6 sm:mb-8 text-[var(--color-text-secondary)]">
              <Badge
                text="Legal & Compliance"
                disabled
                color="var(--color-primary)"
                className="font-medium text-xs sm:text-sm"
              />
              <span className="hidden sm:inline font-mono">
                {contactInfo.registeredOffice.coordinates}
              </span>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-[clamp(2.75rem,5.5vw,4.75rem)] font-medium leading-[1.1] tracking-[-0.035em] text-[var(--color-primary)]">
                Privacy{" "}
                <span className="font-script inline-block text-[1.18em] font-normal leading-[0.8] tracking-[-0.02em] -rotate-2">
                  Policy
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[var(--color-text-secondary)]">
                {contactInfo.tagline} We are committed to transparent data practices, confidentiality, and safeguarding your information across all web, mobile, and enterprise AI engineering services.
              </p>

              {/* Monochromatic Policy Meta Chips */}
              <div className="mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[var(--color-primary)] font-medium">
                <span className="rounded-full border border-black/[0.08] bg-[#f8f7f5] px-3.5 py-1.5 shadow-2xs">
                  Company: <strong className="font-semibold">{meta.company}</strong>
                </span>
                <span className="rounded-full border border-black/[0.08] bg-[#f8f7f5] px-3.5 py-1.5 shadow-2xs">
                  Effective: <strong className="font-semibold">{meta.effectiveDate}</strong>
                </span>
                <span className="rounded-full border border-black/[0.08] bg-[#f8f7f5] px-3.5 py-1.5 shadow-2xs">
                  Last Updated: <strong className="font-semibold">{meta.lastUpdated}</strong>
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* Content Section with Sticky Table of Contents on Desktop */}
        <section className="py-12 sm:py-16 lg:py-24">
          <Container size="2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
              {/* Left Column: Sticky Table of Contents Sidebar */}
              <aside className="lg:col-span-4 hidden lg:block sticky top-28 self-start max-h-[calc(100vh-140px)] overflow-y-auto pr-3">
                <div className="rounded-2xl border border-black/[0.08] bg-[#f8f7f5] p-6">
                  <h2 className="text-xs font-semibold tracking-wider uppercase text-[var(--color-text-secondary)] mb-4">
                    Table of Contents
                  </h2>

                  <nav aria-label="Privacy Policy Sections">
                    <ol className="space-y-1.5 text-xs xl:text-sm">
                      {sections.map((sec) => (
                        <li key={sec.id}>
                          <a
                            href={`#${sec.id}`}
                            className="group flex items-baseline gap-2 rounded-lg px-2.5 py-1.5 text-[var(--color-text-secondary)] transition-colors hover:bg-white hover:text-[var(--color-primary)]"
                          >
                            <span className="font-mono text-neutral-400 text-xs shrink-0 group-hover:text-neutral-900 transition-colors">
                              {String(sec.number).padStart(2, "0")}.
                            </span>
                            <span className="leading-snug font-normal group-hover:font-medium">
                              {sec.title}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>

                  {/* Sidebar Contact Helper */}
                  <div className="mt-6 pt-5 border-t border-black/[0.07] flex flex-col gap-1 text-xs">
                    <span className="text-neutral-500 font-medium">Have privacy questions?</span>
                    <a
                      href={`mailto:${contactInfo.email}?subject=Privacy%20Inquiry`}
                      className="font-medium text-[var(--color-primary)] hover:underline truncate"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </aside>

              {/* Right Column: Complete Privacy Policy Sections */}
              <div className="lg:col-span-8 flex flex-col gap-12 sm:gap-16">
                {sections.map((section) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 border-b border-black/[0.08] pb-12 sm:pb-16 last:border-b-0"
                  >
                    {/* Section Number & Heading */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white font-mono text-xs font-semibold px-2 py-0.5">
                        {String(section.number).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-medium tracking-tight text-[var(--color-primary)]">
                        {section.title}
                      </h2>
                    </div>

                    {/* Section Introductory Paragraphs */}
                    {section.paragraphs && section.paragraphs.length > 0 && (
                      <div className="space-y-4 text-[15px] sm:text-base leading-[1.7] text-[var(--color-text-secondary)]">
                        {section.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    )}

                    {/* List Items */}
                    {section.listItems && section.listItems.length > 0 && (
                      <ul className="mt-4 space-y-2 text-[15px] sm:text-base text-[var(--color-text-secondary)] pl-5 list-disc marker:text-neutral-900">
                        {section.listItems.map((item, iIdx) => (
                          <li key={iIdx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Flat Items (e.g. Sections 10, 11, 14, 18) */}
                    {section.items && section.items.length > 0 && (
                      <ul className="mt-4 space-y-2 text-[15px] sm:text-base text-[var(--color-text-secondary)] pl-5 list-disc marker:text-neutral-900">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Subsections (e.g. Sections 3, 4, 5, 6, 7, 8, 9, 12, 17) */}
                    {section.subsections && section.subsections.length > 0 && (
                      <div className="mt-7 space-y-6">
                        {section.subsections.map((sub) => (
                          <div
                            key={sub.id}
                            id={sub.id}
                            className="rounded-xl border border-black/[0.06] bg-[#f8f7f5] p-5 sm:p-6"
                          >
                            <h3 className="text-base sm:text-lg font-medium tracking-tight text-[var(--color-primary)] mb-3 flex items-baseline gap-2">
                              <span className="font-mono text-xs text-neutral-400">
                                {sub.number}
                              </span>
                              {sub.title}
                            </h3>

                            {sub.paragraphs && (
                              <div className="space-y-3 text-sm sm:text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                                {sub.paragraphs.map((sp, spIdx) => (
                                  <p key={spIdx}>{sp}</p>
                                ))}
                              </div>
                            )}

                            {sub.intro && (
                              <p className="text-sm sm:text-[15px] text-[var(--color-text-secondary)] leading-relaxed mb-3">
                                {sub.intro}
                              </p>
                            )}

                            {sub.items && sub.items.length > 0 && (
                              <ul className="space-y-2 text-sm sm:text-[15px] text-[var(--color-text-secondary)] pl-5 list-disc marker:text-neutral-900">
                                {sub.items.map((subItem, sIdx) => (
                                  <li key={sIdx} className="leading-relaxed">
                                    {subItem}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {sub.closing && (
                              <p className="mt-3.5 text-sm sm:text-[15px] text-[var(--color-text-secondary)] leading-relaxed">
                                {sub.closing}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Closing Paragraphs */}
                    {section.closingParagraphs && section.closingParagraphs.length > 0 && (
                      <div className="mt-5 space-y-3 text-[15px] sm:text-base leading-[1.7] text-[var(--color-text-secondary)]">
                        {section.closingParagraphs.map((cp, cpIdx) => (
                          <p key={cpIdx}>{cp}</p>
                        ))}
                      </div>
                    )}

                    {/* Section 19: Dedicated Contact & Redressal Card */}
                    {section.isContactCard && (
                      <div className="mt-6 rounded-2xl border border-black/[0.08] bg-[#f8f7f5] p-6 sm:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                          {/* Registered Office (India) */}
                          <div className="flex flex-col gap-2">
                            <span className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-500">
                              Headquarters
                            </span>
                            <h4 className="text-base sm:text-lg font-medium text-[var(--color-primary)]">
                              {contactInfo.registeredOffice.title}
                            </h4>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                              {contactInfo.registeredOffice.address}
                            </p>
                            <span className="text-xs font-mono text-neutral-400 mt-1">
                              {contactInfo.registeredOffice.coordinates}
                            </span>
                          </div>

                          {/* Branch Office (Canada) */}
                          <div className="flex flex-col gap-2">
                            <span className="text-xs font-mono font-medium uppercase tracking-wider text-neutral-500">
                              International Office
                            </span>
                            <h4 className="text-base sm:text-lg font-medium text-[var(--color-primary)]">
                              {contactInfo.branchOffice.title}
                            </h4>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                              {contactInfo.branchOffice.address}
                            </p>
                          </div>
                        </div>

                        {/* Communication Channels */}
                        <div className="mt-8 pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-neutral-500">
                              Privacy Inquiries & Complaints
                            </span>
                            <a
                              href={`mailto:${contactInfo.email}?subject=Privacy%20Request`}
                              className="text-base sm:text-lg font-medium text-[var(--color-primary)] hover:underline"
                            >
                              {contactInfo.email}
                            </a>
                            <span className="text-xs text-neutral-400">
                              Please use subject line &quot;Privacy Request&quot; or &quot;Privacy Complaint&quot;
                            </span>
                          </div>

                          <div className="flex flex-col sm:items-end gap-1">
                            <span className="text-xs text-neutral-500">Direct Telephone</span>
                            <a
                              href={`tel:${contactInfo.phoneTel}`}
                              className="text-base sm:text-lg font-medium text-[var(--color-primary)] hover:underline"
                            >
                              {contactInfo.phone}
                            </a>
                            <span className="text-xs text-neutral-400">
                              {contactInfo.company}
                            </span>
                          </div>
                        </div>

                        {/* Signature Tagline */}
                        <div className="mt-6 pt-4 border-t border-black/[0.06] text-center">
                          <p className="text-sm font-medium text-[var(--color-primary)]">
                            {contactInfo.company} —{" "}
                            <span className="font-script text-[1.2em] font-normal leading-none inline-block">
                              Building
                            </span>{" "}
                            Digital Solutions. Protecting Your Information.
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Dark Footer */}
      <Footer />
    </div>
  );
}
