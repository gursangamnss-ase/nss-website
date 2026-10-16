import { typography } from "@/components/styles";
import Button from "@/components/ui/Button";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const services = [
  "Brand identity design",
  "Framer development",
  "UI/UX strategy",
  "Creative campaigns",
];

export default function HeroContent() {
  return (
    <div className="relative z-20 min-h-[100svh] overflow-hidden px-5 pb-6 pt-16 text-white sm:px-8 sm:pb-8">
      <h1
        className={`absolute left-[6%] top-[24%] grid w-[88%] grid-cols-[auto_1fr] items-center text-[17vw] leading-[0.84] font-semibold tracking-[-0.065em] sm:left-[3%] sm:top-[28%] sm:flex sm:w-auto sm:gap-[0.04em] sm:whitespace-nowrap sm:text-[8.4vw] min-[900px]:top-[24%] min-[900px]:grid min-[900px]:w-[76%] min-[900px]:grid-cols-[auto_1fr] min-[900px]:text-[13vw] min-[1200px]:left-[1.5%] min-[1200px]:top-[25%] min-[1200px]:w-[72%] min-[1200px]:text-[10.6vw] ${typography.fontFamily.primary}`}
      >
        <span className="min-[900px]:col-span-2">Design</span>
        <Image
          aria-hidden="true"
          src="/images/letterImage.svg"
          alt=""
          width={342}
          height={348}
          priority
          className="ml-[0.06em] h-[0.88em] w-auto max-w-none self-center min-[900px]:ml-[0.15em] min-[900px]:mr-[0.02em]"
        />
        <span className="col-span-2 sm:col-auto min-[900px]:col-span-1">
          Strategy
        </span>
      </h1>

      <div className="absolute left-[6%] top-[55%] w-[88%] sm:left-[3%] sm:top-[54%] sm:w-[56%] min-[900px]:top-auto min-[900px]:bottom-[8%] min-[900px]:w-[38%] min-[1200px]:left-[1.5%] min-[1200px]:bottom-[9%] min-[1200px]:w-[27%]">
        <div className="flex items-start gap-4">
          <Sparkles
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 shrink-0 fill-white text-white sm:h-6 sm:w-6"
            strokeWidth={1.4}
          />
          <p className="text-base leading-[1.16] font-semibold tracking-[-0.025em] sm:text-lg min-[1200px]:text-xl">
            We turn bold ideas into standout brands and sleek websites. Let&apos;s
            bring your vision to life.
          </p>
        </div>

        <p className="mt-4 text-sm font-semibold sm:text-base min-[1200px]:text-lg">
          © 2026 Ignitex creative agency
        </p>
      </div>

      <div className="absolute right-[6%] bottom-[3.5%] flex w-[88%] flex-col items-end sm:right-[3%] sm:bottom-[6%] sm:w-[54%] min-[900px]:bottom-[8%] min-[900px]:w-[48%] min-[1200px]:right-[1.5%] min-[1200px]:bottom-[9%] min-[1200px]:w-[38%]">
        <ul
          className={`w-full space-y-1 text-right text-[clamp(1rem,4.5vw,1.25rem)] leading-[1.35] font-medium tracking-[-0.035em] sm:text-[clamp(1.15rem,2.7vw,1.5rem)] min-[1200px]:text-[clamp(1.35rem,1.65vw,2rem)] ${typography.fontFamily.primary}`}
        >
          {services.map((service, index) => (
            <li key={service}>
              <span
                className={`mr-2 inline-block font-normal tracking-normal text-white/90 ${typography.fontFamily.script}`}
              >
                ({String(index + 1).padStart(2, "0")})
              </span>
              <span>{service}</span>
            </li>
          ))}
        </ul>

        <Button
          variant="light"
          className="mt-5 w-full max-w-70 text-sm sm:text-base"
        >
          Let’s work together
        </Button>
      </div>
    </div>
  );
}
