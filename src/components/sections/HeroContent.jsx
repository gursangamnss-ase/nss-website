import Button from "@/components/ui/Button";
import { servicesData } from "@/data/servicesData";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex min-h-[100svh] flex-col justify-between px-4 sm:px-8 lg:px-12 pt-20 sm:pt-28 lg:pt-36 pb-4 sm:pb-8 lg:pb-12 text-white">
      {/* Top Headline: "Design &" on row 1 (mobile), "& Strategy" on row 2 (desktop) */}
      <div className="w-full select-none pt-2 sm:pt-4 lg:pt-6 mt-auto">
        <h1 className="flex flex-col tracking-[-0.045em] leading-[0.9] font-semibold text-[clamp(2.75rem,11.5vw,4.25rem)] sm:text-[clamp(4.5rem,10vw,8rem)] lg:text-[clamp(7.5rem,11.5vw,11.5rem)] text-white">
          {/* Row 1 */}
          <span className="flex items-baseline">
            <span>Design</span>
            <span
              className="sm:hidden font-script font-normal text-[1.2em] text-[var(--color-text-muted)] -rotate-3 ml-2 select-none inline-block leading-none"
              aria-hidden="true"
            >
              &amp;
            </span>
          </span>

          {/* Row 2 */}
          <span className="flex items-baseline -mt-[0.04em] -ml-[0.02em]">
            <span
              className="hidden sm:inline-block font-script font-normal text-[1.32em] text-[var(--color-text-muted)] -rotate-3 mr-1.5 sm:mr-3 select-none leading-none"
              aria-hidden="true"
            >
              &amp;
            </span>
            <span>Strategy</span>
          </span>
        </h1>
      </div>

      {/* Bottom Grid: Left = Sparkle + Bold ideas + Copyright, Right = Services + CTA Button */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-end pt-3 sm:pt-6 lg:pt-16 mt-auto">
        {/* Left Column (Statement & Copyright) */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-end">
          <div className="flex items-start gap-2.5 sm:gap-4 max-w-[360px] sm:max-w-[420px]">
            <span
              className="text-white text-sm sm:text-xl shrink-0 mt-0.5 leading-none"
              aria-hidden="true"
            >
              ✦
            </span>
            <p className="text-base lg:text-[18px] font-medium leading-[1.3] tracking-tight text-white">
              We turn bold ideas into standout brands and sleek websites. Let&apos;s
              bring your vision to life.
            </p>
          </div>

          <p className="mt-2 sm:mt-4 text-[11px] sm:text-sm font-medium text-white/70 tracking-tight pl-6 sm:pl-8">
            © 2026 Ignitex creative agency
          </p>
        </div>

        {/* Right Column (Services List & Pill CTA Button) */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-end">
          <ul className="space-y-1 sm:space-y-1.5 text-right w-full flex flex-col items-end">
            {servicesData.map((service, index) => (
              <li
                key={service.id || service.title}
                className="text-[14px] sm:text-lg lg:text-[22px] font-medium tracking-tight text-white flex justify-end items-baseline gap-1.5 sm:gap-2"
              >
                <span className="font-script text-[15px] sm:text-xl lg:text-[24px] font-normal text-white/90">
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
            className="mt-3 sm:mt-6"
          >
            Let&apos;s work together
          </Button>
        </div>
      </div>
    </div>
  );
}
