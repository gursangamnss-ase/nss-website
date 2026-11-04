import Image from "next/image";
import Container from "@/components/layout/Container";
import { blogData } from "@/data/blogData";

export default function BlogHeroSection() {
  const { hero } = blogData;

  return (
    <section className="relative overflow-hidden bg-white pb-12 pt-10 sm:pb-20 sm:pt-35">
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
        <h1 className="text-center text-[clamp(2.75rem,7vw,6.5rem)] font-medium tracking-tight text-[#05080c] leading-[1.08]">
          {hero.headlineStart}{" "}
          <span className="font-script font-normal italic tracking-normal">
            {hero.headlineScript}
          </span>{" "}
          {hero.headlineEnd}
        </h1>
      </Container>
    </section>
  );
}

