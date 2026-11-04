"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import RatingStars from "@/components/ui/RatingStars";
import { proofData } from "@/data/proofData";

export default function ProofSection() {
  const { badge, titlePrefix, titleScript, titleSuffix, cards } = proofData;

  return (
    <Section
      id="proof"
      spacing="none"
      background="light"
      className="bg-[#f5f5f5] py-20 sm:py-28 lg:py-32 text-[#05080c] select-none"
    >
      <Container size="2xl">
        {/* Header Area */}
        <div className="relative mb-12 sm:mb-14 lg:mb-16">
          {/* Badge: Top-Left */}
          <div className="flex justify-start mb-6 lg:mb-0 lg:absolute lg:top-1 lg:left-0">
            <Badge
              text={badge}
              disabled
              color="#05080c"
              className="text-xs sm:text-[13px] font-medium tracking-wide text-[#05080c]"
            />
          </div>

          {/* Main Title: Center Aligned */}
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#05080c]">
              <span className="block">{titlePrefix}</span>
              <span className="block">
                <span className="font-script font-normal text-[1.16em] tracking-normal inline-block pr-1.5">
                  {titleScript}
                </span>
                {titleSuffix}
              </span>
            </h2>
          </div>
        </div>

        {/* 4 Cards Grid - Matches Image 1 Dimensions & Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-5 items-stretch">
          {/* Card 1: Studio Mellow Case Study */}
          <div className="bg-white rounded-[16px] p-5 sm:p-5 lg:p-6 flex flex-col justify-between border border-[#e8e8e8] shadow-[0_2px_10px_rgba(0,0,0,0.03)] min-h-[420px] sm:min-h-[440px] lg:min-h-[455px] transition-transform duration-300 hover:-translate-y-1">
            <div>
              <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-semibold text-[#05080c] leading-[1.3] tracking-[-0.02em]">
                {cards.card1.title}
              </h3>
              <p className="mt-2 text-[12.5px] sm:text-[13px] text-[#5b5b5b] leading-[1.5]">
                {cards.card1.description}
              </p>
            </div>

            <div className="mt-5">
              {/* Stats Row */}
              <div className="flex items-start gap-7 pt-1">
                {cards.card1.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] text-[#05080c] leading-none">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-[11px] sm:text-[11.5px] text-[#5b5b5b] leading-tight max-w-[95px]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider & Author */}
              <div className="border-t border-[#ededed] mt-5 pt-3.5 flex items-center justify-between">
                <div>
                  <h4 className="text-[13.5px] sm:text-[14px] font-semibold text-[#05080c]">
                    {cards.card1.author.name}
                  </h4>
                  <p className="text-[11px] text-[#71717a] mt-0.5">
                    {cards.card1.author.role}
                  </p>
                </div>
                <div className="relative size-11 rounded-[10px] overflow-hidden shrink-0 border border-black/5">
                  <Image
                    src={cards.card1.author.avatar}
                    alt={cards.card1.author.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Client Trust & Webestica Showreel (Dark Card with Framed Inset Border) */}
          <div className="bg-[#080b11] text-white rounded-[20px] p-2 sm:p-2.5 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.18)] min-h-[420px] sm:min-h-[440px] lg:min-h-[455px] flex flex-col transition-transform duration-300 hover:-translate-y-1">
            <div className="rounded-[12px] border border-white/10 p-4 sm:p-5 flex flex-col justify-between h-full">
              {/* Top Rating & Avatar Group */}
              <div>
                <div className="flex items-center -space-x-2.5">
                  {cards.card2.avatars.map((av, idx) => (
                    <div
                      key={idx}
                      className="relative size-[38px] rounded-[10px] border-2 border-[#080b11] overflow-hidden shrink-0"
                    >
                      <Image
                        src={av}
                        alt="Client avatar"
                        fill
                        sizes="38px"
                        className="object-cover object-center"
                      />
                    </div>
                  ))}
                  <div className="relative w-[44px] h-[38px] rounded-[10px] bg-[#f5f5f5] text-[#05080c] font-semibold text-[14px] flex items-center justify-center border-2 border-[#080b11] shrink-0 tracking-tight">
                    {cards.card2.clientCount}
                  </div>
                </div>

                {/* Stars & Label */}
                <div className="mt-4">
                  <RatingStars rating={5} variant="light" size={14} />
                  <p className="mt-2 text-[13px] text-[#bababa] font-normal">
                    {cards.card2.ratingText}
                  </p>
                </div>
              </div>

              {/* Bottom Coming Soon & Showreel */}
              <div className="mt-4">
                <span className="text-[11px] text-[#aaa9ad] font-normal">
                  {cards.card2.comingSoonTag}
                </span>
                <h4 className="text-[15px] sm:text-[16px] font-semibold text-white mt-1 leading-snug">
                  {cards.card2.headline}
                </h4>

                {/* Showreel Thumbnail */}
                <div className="relative w-full aspect-[16/9] rounded-[10px] overflow-hidden mt-2.5 group cursor-pointer border border-white/10">
                  <Image
                    src={cards.card2.showreelImage}
                    alt="Webestica Showreel"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/10" />
                  <span className="absolute inset-0 m-auto w-max h-max px-3.5 py-1 rounded-full bg-white text-black text-[11px] font-semibold shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                    {cards.card2.showreelButtonText}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Digital Campaign (Full Photo Card) */}
          <div className="relative rounded-[16px] overflow-hidden flex flex-col justify-end p-5 sm:p-5 lg:p-6 border border-black/5 shadow-[0_2px_10px_rgba(0,0,0,0.06)] min-h-[420px] sm:min-h-[440px] lg:min-h-[455px] group transition-transform duration-300 hover:-translate-y-1">
            <Image
              src={cards.card3.image}
              alt={cards.card3.title}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay for text readability */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-semibold text-white leading-[1.3] tracking-[-0.02em]">
                {cards.card3.title}
              </h3>
              <p className="mt-2 text-[12.5px] sm:text-[13px] text-white/80 leading-[1.45] font-normal">
                {cards.card3.description}
              </p>
            </div>
          </div>

          {/* Card 4: Funding / BoldCraft Case Study */}
          <div className="bg-white rounded-[16px] p-5 sm:p-5 lg:p-6 flex flex-col justify-between border border-[#e8e8e8] shadow-[0_2px_10px_rgba(0,0,0,0.03)] min-h-[420px] sm:min-h-[440px] lg:min-h-[455px] transition-transform duration-300 hover:-translate-y-1">
            <div>
              <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] font-semibold text-[#05080c] leading-[1.3] tracking-[-0.02em]">
                {cards.card4.title}
              </h3>
              <p className="mt-2 text-[12.5px] sm:text-[13px] text-[#5b5b5b] leading-[1.5]">
                {cards.card4.description}
              </p>
            </div>

            <div className="mt-5">
              {/* Stat */}
              <div className="pt-1">
                <span className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] text-[#05080c] leading-none block">
                  {cards.card4.stat.value}
                </span>
                <span className="mt-1 text-[11px] sm:text-[11.5px] text-[#5b5b5b] leading-tight block">
                  {cards.card4.stat.label}
                </span>
              </div>

              {/* Divider & Company */}
              <div className="border-t border-[#ededed] mt-5 pt-3.5 flex items-center justify-between">
                <div>
                  <h4 className="text-[13.5px] sm:text-[14px] font-semibold text-[#05080c]">
                    {cards.card4.client.name}
                  </h4>
                  <p className="text-[11px] text-[#71717a] mt-0.5">
                    {cards.card4.client.tagline}
                  </p>
                </div>
                {/* BoldCraft Logo Emblem matching Image 1 */}
                <div className="size-11 rounded-[10px] bg-black flex items-center justify-center text-white shrink-0 shadow-sm p-2.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-white"
                  >
                    <path d="M12 2L2 12h4v8h12v-8h4L12 2zm-1 16H8v-5l3-3v8zm4 0h-3V7.5l3 3V18z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
