import Button from "@/components/ui/Button";
import { servicesData } from "@/data/servicesData";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex w-full flex-col justify-between px-5 sm:px-10 lg:px-16 xl:px-20 pt-[68px] sm:pt-36 lg:pt-40 xl:pt-44 pb-5 sm:pb-16 lg:pb-24 min-h-[100svh] text-white">
      {/* Top Headline + Mobile Statement Block */}
      <div className="w-full select-none mt-auto">
        <h1 className="flex flex-col tracking-[-0.04em] leading-[0.88] sm:leading-[0.92] font-semibold text-[clamp(4.15rem,13.8vw,3.95rem)] sm:text-[clamp(5.5rem,11.5vw,9rem)] lg:text-[clamp(8.5rem,13.5vw,12.5rem)]">
          {/* Row 1: Build */}
          <span className="flex items-baseline">
            <span className="bg-[linear-gradient(280deg,#bababa_0%,#ffffff_100%)] bg-clip-text text-transparent">
              Build
            </span>
            <span
              className="sm:hidden font-script font-normal text-[1.28em] text-[#aaa9ad] -rotate-3 ml-2.5 select-none inline-block leading-none"
              aria-hidden="true"
            >
              &amp;
            </span>
          </span>

          {/* Row 2: & Automate */}
          <span className="flex items-baseline -mt-1 sm:-mt-3 lg:-mt-6 xl:-mt-8 -ml-[0.02em]">
            <span
              className="hidden sm:inline-block font-script font-normal text-[1.38em] text-[#aaa9ad] -rotate-3 mr-2 sm:mr-3 lg:mr-4 select-none leading-none shrink-0"
              aria-hidden="true"
            >
              &amp;
            </span>
            <span className="bg-[linear-gradient(280deg,#bababa_0%,#ffffff_100%)] bg-clip-text text-transparent">
              Automate
            </span>
          </span>
        </h1>

        {/* Mobile-only Statement & Copyright: Sits directly under Automate matching Image 1 */}
        <div className="sm:hidden mt-6 flex flex-col gap-2">
          <p className="text-base font-medium leading-[1.3] tracking-[-0.015em] text-white">
            <span
              className="inline-flex items-center justify-center align-middle mr-2.5 select-none shrink-0 -mt-0.5"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 64 64"
                fill="currentColor"
                className="w-4 h-4 text-white"
              >
                <path d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z" />
              </svg>
            </span>
            We turn bold ideas into standout brands and sleek Web App. Let&apos;s
            bring your vision to life.
          </p>

          <p className="text-xs font-normal leading-[1.2] text-white/70 tracking-[-0.015em]">
            © Netsquare Softwares, 2026.
          </p>
        </div>
      </div>

      {/* Bottom Row / Services Block */}
      <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 sm:gap-10 lg:gap-8 mt-8">
        {/* Desktop & Tablet Left Column (Statement, CTA Button, Copyright) */}
        <div className="hidden sm:flex w-full max-w-[380px] lg:max-w-[420px] flex-col gap-4 sm:gap-5 lg:gap-6">
          <p className="text-[18px] lg:text-[20px] font-medium leading-[1.25] tracking-[-0.02em] text-white">
            <span
              className="inline-flex items-center justify-center align-middle mr-4 select-none shrink-0 -mt-1"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 64 64"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z" />
              </svg>
            </span>
            We turn bold ideas into standout brands and sleek Web App. Let&apos;s
            bring your vision to life.
          </p>

          {/* Desktop-only CTA Button (lg+: 1024px and up): Positioned between text and copyright */}
          <div className="hidden lg:block pt-0.5">
            <Button
              href="/contact"
              variant="light"
              size="md"
            >
              Let&apos;s work together
            </Button>
          </div>

          <p className="text-[15px] lg:text-[16px] font-medium leading-[1.2] text-white/70 tracking-[-0.02em]">
            © Netsquare Softwares, 2026.
          </p>
        </div>

        {/* Right Column (Services List & Mobile-only Pill CTA Button) */}
        <div className="w-full max-w-[320px] sm:max-w-[380px] ml-auto flex flex-col items-end">
          <ul className="space-y-1.5 sm:space-y-2 lg:space-y-2.5 w-full flex flex-col items-end text-right">
            {servicesData.map((service, index) => (
              <li
                key={service.id || service.title}
                className="text-base sm:text-xl lg:text-[24px] font-medium tracking-[-0.02em] leading-tight text-white flex items-baseline justify-end gap-2 sm:gap-2.5"
              >
                <span className="font-script text-[17px] sm:text-2xl lg:text-[24px] font-normal text-white">
                  {service.number || `(${String(index + 1).padStart(2, "0")})`}
                </span>
                <span>{service.title}</span>
              </li>
            ))}
          </ul>

          {/* Tablet & Mobile CTA (below lg / 1024px: shows on services right side) */}
          <div className="mt-3 sm:mt-6 lg:hidden">
            <Button
              href="#contact"
              variant="light"
              size="sm"
              className="!py-1.5 !pl-4 !pr-1.5 text-xs sm:hidden"
            >
              Let&apos;s work together
            </Button>
            <div className="hidden sm:block">
              <Button
                href="#contact"
                variant="light"
                size="md"
              >
                Let&apos;s work together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
