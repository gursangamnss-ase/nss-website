import Image from "next/image";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/layout/Container";
import { contactData } from "@/data/contactData";

export default function ContactHeroSection() {
  const { hero } = contactData;

  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-10 sm:pb-28 sm:pt-35">
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
        <h1 className="text-center text-[clamp(2.75rem,7vw,6.5rem)] font-medium tracking-tight text-[var(--color-primary)] leading-[1.08] mb-14 sm:mb-20">
          Start{" "}
          <span className="font-script font-normal italic tracking-normal">
            Something
          </span>{" "}
          bold
        </h1>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Info & Founder Note */}
          <div className="flex flex-col justify-between space-y-10 sm:space-y-12 lg:col-span-5 lg:h-full lg:py-2">
            {/* Contact Details */}
            <div className="space-y-3">
              <Badge
                text={hero.badgeContact}
                className="text-sm font-medium text-neutral-800"
              />
              <div className="pt-1">
                <a
                  href={`tel:${hero.phone.replace(/[^0-9+]/g, "")}`}
                  className="block text-2xl sm:text-3xl font-medium text-[var(--color-primary)] hover:opacity-75 transition-opacity"
                >
                  {hero.phone}
                </a>
                <a
                  href={`mailto:${hero.email}`}
                  className="block text-2xl sm:text-3xl font-medium text-[var(--color-primary)] hover:opacity-75 transition-opacity pt-1"
                >
                  {hero.email}
                </a>
              </div>
            </div>

            {/* Visit Us */}
            <div className="space-y-3">
              <Badge
                text={hero.badgeVisit}
                className="text-sm font-medium text-neutral-800"
              />
              <div className="space-y-4 pt-1">
                <div>
                  <p className="text-base sm:text-lg font-semibold text-[var(--color-primary)]">
                    {hero.agency}
                  </p>
                  <p className="text-sm sm:text-base text-neutral-600 max-w-sm mt-1 leading-relaxed">
                    {hero.address}
                  </p>
                </div>

                {hero.canadaAddress && (
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-[var(--color-primary)]">
                      {hero.canadaAgency || "Canada Office"}
                    </p>
                    <p className="text-sm sm:text-base text-neutral-600 max-w-sm mt-1 leading-relaxed">
                      {hero.canadaAddress}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Founder Note & Avatar */}
            <div className="space-y-5 pt-4">
              <p className="text-lg sm:text-xl font-medium text-[var(--color-primary)] leading-snug max-w-md">
                {hero.founderQuote}
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-neutral-200 bg-neutral-100">
                  <Image
                    src={hero.founder.avatar}
                    alt={hero.founder.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-neutral-600">
                  <strong className="text-[var(--color-primary)] font-semibold">
                    {hero.founder.name}
                  </strong>
                  , {hero.founder.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

