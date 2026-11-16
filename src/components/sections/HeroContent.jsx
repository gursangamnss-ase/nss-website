import Button from "@/components/ui/Button";
import { servicesData } from "@/data/servicesData";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-[100svh] flex-col justify-between px-5 sm:px-8 lg:px-12 pt-20 sm:pt-28 lg:pt-36 pb-8 sm:pb-8 lg:pb-12 text-white">
      {/* Top Headline: "Build &" on row 1 (mobile), "& Automate" on row 2 (desktop) */}
      <div className="w-full select-none pt-2 sm:pt-4 lg:pt-6 my-auto sm:my-0 sm:mt-auto">
        <h1 className="flex flex-col tracking-[-0.04em] leading-[0.88] font-semibold text-[clamp(3.85rem,17vw,5.5rem)] sm:text-[clamp(4.75rem,10.5vw,8rem)] lg:text-[clamp(7.5rem,11.5vw,11.5rem)] text-white pt-10 sm:pt-0">
          {/* Row 1 */}
          <span className="flex items-baseline">
            <span>Build</span>
            <span
              className="sm:hidden font-script font-normal text-[1.15em] text-white/75 -rotate-3 ml-2.5 sm:ml-3 select-none inline-block leading-none"
              aria-hidden="true"
            >
              &amp;
            </span>
          </span>

          {/* Row 2 */}
          <span className="flex items-baseline -mt-1 sm:-mt-[0.04em] -ml-[0.02em]">
            <span
              className="hidden sm:inline-block font-script font-normal text-[1.32em] text-[var(--color-text-muted)] -rotate-3 mr-1.5 sm:mr-3 select-none leading-none"
              aria-hidden="true"
            >
              &amp;
            </span>
            <span>Automate</span>
          </span>
        </h1>
      </div>

      {/* Bottom Grid: Left = Sparkle + Bold ideas + Copyright, Right = Services + CTA Button */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-8 lg:gap-12 items-end sm:pt-6 lg:pt-16 mt-auto">
        {/* Left Column (Statement & Copyright) */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-end">
          <p className="text-[15px] sm:text-base lg:text-[18px] font-medium leading-[1.35] tracking-tight text-white max-w-[340px] sm:max-w-[420px]">
            <span
              className="inline-flex items-center justify-center align-middle mr-4 sm:mr-5 select-none shrink-0 -mt-0.5"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 64 64"
                fill="currentColor"
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              >
                <path d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z" />
              </svg>
            </span>
            We turn bold ideas into standout brands and sleek websites. Let&apos;s
            bring your vision to life.
          </p>

          <p className="mt-2.5 sm:mt-4 text-[12px] sm:text-sm font-medium text-white/70 tracking-tight">
            © Netsquare Softwares, 2026.
          </p>
        </div>

        {/* Right Column (Services List & Pill CTA Button) */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-end">
          <ul className="space-y-1 sm:space-y-1.5 text-right w-full flex flex-col items-end">
            {servicesData.map((service, index) => (
              <li
                key={service.id || service.title}
                className="text-base sm:text-lg lg:text-[22px] font-medium tracking-tight text-white flex justify-end items-baseline gap-1.5 sm:gap-2"
              >
                <span className="font-script text-[16px] sm:text-xl lg:text-[24px] font-normal text-white/90">
                  {service.number || `(${String(index + 1).padStart(2, "0")})`}
                </span>
                <span>{service.title}</span>
              </li>
            ))}
          </ul>

          <Button
            href="#contact"
            variant="light"
            size="sm"
            className="mt-3.5 sm:mt-6"
          >
            Let&apos;s work together
          </Button>
        </div>
      </div>
    </div>
  );
}
