import Image from "next/image";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/forms/ContactForm";
import ContactMapSection from "@/components/sections/contact/ContactMapSection";
import Container from "@/components/layout/Container";
import { contactData } from "@/data/contactData";
import { IndiaFlag, CanadaFlag } from "@/components/ui/FlagIcons";

export default function ContactHeroSection() {
  const { hero } = contactData;

  const plusIcon = (
    <span className="font-semibold text-sm leading-none select-none text-[var(--color-primary)]">
      +
    </span>
  );

  return (
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-32">
      {/* Decorative Monogram Watermark */}
      <div
        className="pointer-events-none absolute -left-12 -top-16 z-0 h-[480px] w-[460px] opacity-[0.06] select-none lg:-left-4 lg:-top-8 lg:h-[620px] lg:w-[580px]"
        aria-hidden="true"
      >
        <Image
          src="/images/letterImage.svg"
          alt=""
          fill
          sizes="(max-width: 1024px) 460px, 580px"
          className="object-contain"
          priority
        />
      </div>

      <Container size="2xl" className="relative z-10">
        {/* Main Display Headline */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-[clamp(2.75rem,7vw,6.5rem)] font-medium tracking-tight text-[var(--color-primary)] leading-[1.08]">
            Start{" "}
            <span className="font-script font-normal italic tracking-normal">
              Something
            </span>{" "}
            bold
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Explore our engineering studios, calculate location routes, or connect with our team directly.
          </p>
        </div>

        {/* 2-Column Responsive Grid (Contact Details on Left, Form on Right) */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16 pt-4">
          {/* Left Column: Direct Info & Addresses */}
          <div className="flex flex-col justify-start space-y-12 lg:col-span-6 xl:col-span-5 min-w-0">
            {/* Contact Details */}
            <div className="space-y-3.5">
              <Badge
                text={hero.badgeContact || "Contact us on"}
                icon={plusIcon}
                color="var(--color-primary)"
                className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-primary)]"
              />
              <div className="pt-1 space-y-1">
                <a
                  href={`tel:${hero.phone.replace(/[^0-9+]/g, "")}`}
                  className="block text-2xl sm:text-3xl lg:text-[28px] xl:text-[34px] font-semibold text-[var(--color-primary)] hover:opacity-75 transition-opacity whitespace-nowrap tracking-tight"
                >
                  {hero.phone}
                </a>
                <a
                  href={`mailto:${hero.email}`}
                  className="block text-xl sm:text-2xl lg:text-[22px] xl:text-[26px] font-medium text-[var(--color-primary)] hover:opacity-75 transition-opacity pt-1 break-words tracking-tight"
                >
                  {hero.email}
                </a>
              </div>
            </div>

            {/* Visit Us */}
            <div className="space-y-4">
              <Badge
                text={hero.badgeVisit || "Visit us"}
                icon={plusIcon}
                color="var(--color-primary)"
                className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--color-primary)]"
              />
              <div className="space-y-6 pt-1">
                {/* Registered Office */}
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-base sm:text-lg font-bold text-[var(--color-primary)]">
                      {hero.registeredOfficeTitle || "Registered Office"}
                    </p>
                    <IndiaFlag className="h-4 w-[23px] rounded-[2px] shadow-sm inline-block shrink-0" />
                  </div>
                  {hero.agency && (
                    <p className="text-sm font-medium text-neutral-800 mt-0.5">
                      {hero.agency}
                    </p>
                  )}
                  <p className="text-sm sm:text-base text-neutral-600 max-w-sm mt-1 leading-relaxed">
                    {hero.address}
                  </p>
                </div>

                {/* Branch Office */}
                {hero.canadaAddress && (
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-base sm:text-lg font-bold text-[var(--color-primary)]">
                        {hero.canadaAgency || "Branch Office"}
                      </p>
                      <CanadaFlag className="h-4 w-[23px] rounded-[2px] shadow-sm inline-block shrink-0" />
                    </div>
                    <p className="text-sm sm:text-base text-neutral-600 max-w-sm mt-1 leading-relaxed">
                      {hero.canadaAddress}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 xl:col-span-7 min-w-0">
            <ContactForm />
          </div>
        </div>
        {/* Option 1: Interactive Office Map Section */}
        <ContactMapSection className="mt-10 sm:mt-16" />
      </Container>
    </section>
  );
}
