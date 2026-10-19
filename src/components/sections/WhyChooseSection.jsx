"use client";

import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { whyChooseData } from "@/data/whyChooseData";

export default function WhyChooseSection() {
  const {
    badge,
    heading,
    costEffective,
    happyClients,
    strategicSolutions,
    builtWithBest,
    futureReady,
    alwaysOnSupport,
  } = whyChooseData;

  return (
    <section id="why-choose" className="relative bg-white py-20 sm:py-28 lg:py-36 text-[#05080c] overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <Badge
            text={badge}
            disabled
            color="#05080c"
            className="font-medium text-xs sm:text-sm tracking-wide mb-4"
          />

          <h2 className="text-[clamp(2.5rem,6.5vw,4.5rem)] font-medium leading-[1.1] tracking-[-0.04em] text-[#05080c]">
            {heading.line1Prefix}
            <span className="font-script text-[1.25em] font-normal leading-none inline-block align-baseline -rotate-2">
              {heading.line1Highlight}
            </span>{" "}
            <br />
            {heading.line2}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Left Column: 2x2 Bento Subgrid */}
          <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6">
            {/* Top Row: Card 1 (Cost-Effective) & Card 2 (Happy Clients) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {/* Card 1: Cost-Effective plans */}
              <div className="rounded-[22px] sm:rounded-[26px] bg-[#f5f5f5] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between h-[360px] sm:h-[390px]">
                {/* Top content */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-[22px] font-medium tracking-tight text-[#05080c]">
                    {costEffective.title}
                  </h3>
                  <p className="text-sm text-[#5b5b5b] mt-1.5 leading-relaxed">
                    {costEffective.description}
                  </p>
                </div>

                {/* Bottom Graphic: Wave + Floating Card */}
                <div className="relative w-full h-[220px] flex items-end justify-center mt-auto">
                  {/* Monochrome Wave Background */}
                  <div className="absolute inset-x-0 bottom-0 h-[190px] pointer-events-none z-0">
                    <Image
                      src={costEffective.waveBg}
                      alt="Wave background"
                      fill
                      className="object-cover object-bottom grayscale contrast-125 opacity-90"
                    />
                  </div>

                  {/* 3D Floating Credit Card */}
                  <div className="relative z-10 w-[285px] sm:w-[305px] h-[180px] rounded-[14px] bg-[#121417] border border-white/[0.08] shadow-[0_16px_36px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.15)] p-4 flex flex-col justify-between overflow-hidden mb-2">
                    {/* Top Row: Chip */}
                    <div className="flex items-center justify-between">
                      <div className="w-[44px] h-[31px] rounded-[5px] relative overflow-hidden">
                        <Image
                          src={costEffective.chipImage}
                          alt="EMV Chip"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Center: Shiny 3D Dollar Symbol */}
                    <div className="flex items-center justify-center my-auto">
                      <div className="relative w-14 h-20 drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
                        <Image
                          src={costEffective.dollarImage}
                          alt="Dollar Icon"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Bottom: Pause & cancel anytime (direct on card face, no pill) */}
                    <div className="flex items-center justify-center gap-2 text-[#aaa9ad] text-[13px] sm:text-[14px] font-normal tracking-tight pb-0.5">
                      <svg viewBox="0 0 64 64" className="w-3.5 h-3.5 shrink-0 fill-[#aaa9ad]" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinejoin="round" d="m1 32 25 6 6 25 6-25 25-6-25-6-6-25-6 25z" />
                      </svg>
                      <span>{costEffective.badge}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: 150+ Happy clients worldwide */}
              <div className="rounded-[22px] sm:rounded-[26px] bg-[#f5f5f5] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between h-[360px] sm:h-[390px]">
                {/* Top content: Ratings & Count */}
                <div className="flex items-start justify-between gap-2 relative z-10">
                  <div>
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-[#05080c]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[#05080c] mt-1">
                      <span className="font-semibold">{happyClients.clientCount}</span>{" "}
                      {happyClients.clientLabel}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-semibold tracking-tight text-[#05080c]">
                      {happyClients.rating}
                    </span>
                    <span className="text-xs text-[#5b5b5b] font-normal">
                      {happyClients.maxRating}
                    </span>
                  </div>
                </div>

                {/* Concentric Radar Orbits & Avatars */}
                <div className="relative w-full h-[240px] flex items-center justify-center mt-auto">
                  {/* Concentric Rings */}
                  <div className="absolute w-[290px] h-[290px] rounded-full border border-black/[0.06]" />
                  <div className="absolute w-[210px] h-[210px] rounded-full border border-black/[0.08]" />
                  <div className="absolute w-[130px] h-[130px] rounded-full border border-black/[0.1]" />

                  {/* Central Ignitex Logo */}
                  <div className="relative z-10 flex flex-col items-center">
                    <Image
                      src={happyClients.centerLogo}
                      alt="IGNITEX Logo"
                      width={100}
                      height={28}
                      className="object-contain"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>

                  {/* Orbiting Avatars */}
                  {happyClients.avatars.map((av, idx) => (
                    <div
                      key={idx}
                      className={`absolute ${av.position} z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md overflow-hidden transition-transform duration-300 hover:scale-115`}
                    >
                      <Image
                        src={av.src}
                        alt={av.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row: Card 4 (Tools), Card 5 (Future-Ready), Card 6 (Support) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {/* Card 4: Built with the best */}
              <div className="rounded-[22px] sm:rounded-[26px] bg-[#f5f5f5] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between h-[270px] sm:h-[290px]">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[#05080c]">
                    {builtWithBest.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5b5b5b] mt-1.5 leading-relaxed">
                    {builtWithBest.description}
                  </p>
                </div>

                {/* Tool Icons Cluster */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 mt-auto pt-4">
                  {builtWithBest.tools.map((tool) => (
                    <div
                      key={tool.name}
                      title={tool.name}
                      className="w-10 h-10 rounded-full bg-[#05080c] flex items-center justify-center p-2.5 shadow-sm transition-transform duration-300 hover:scale-115"
                    >
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={20}
                        height={20}
                        className="object-contain brightness-0 invert"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 5: Reliable & Future-ready (Image Card) */}
              <div className="rounded-[22px] sm:rounded-[26px] relative overflow-hidden h-[270px] sm:h-[290px] flex items-center justify-center text-center p-6">
                <Image
                  src={futureReady.image}
                  alt="Athlete running"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Centered Text */}
                <div className="relative z-10 flex flex-col items-center text-white">
                  <span className="text-xl sm:text-2xl font-semibold tracking-tight leading-tight">
                    {futureReady.line1}
                  </span>
                  <span className="font-script text-3xl sm:text-4xl font-normal leading-none mt-1">
                    {futureReady.line2Highlight}
                  </span>
                </div>
              </div>

              {/* Card 6: 24/7 Always-On support */}
              <div className="rounded-[22px] sm:rounded-[26px] bg-[#f5f5f5] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between h-[270px] sm:h-[290px]">
                <div className="relative z-10">
                  <span className="text-2xl sm:text-[28px] font-medium tracking-tight text-[#05080c]">
                    {alwaysOnSupport.tag}
                  </span>
                  <p className="text-xs sm:text-sm text-[#5b5b5b] mt-0.5 font-normal">
                    {alwaysOnSupport.title}
                  </p>
                </div>

                {/* Hands photo background in bottom-right */}
                <div className="absolute right-0 bottom-0 w-[150px] sm:w-[170px] h-[190px] pointer-events-none z-0">
                  <Image
                    src={alwaysOnSupport.handsImage}
                    alt="Team collaboration"
                    fill
                    className="object-contain object-bottom-right"
                  />
                </div>

                {/* Chat Bubbles Visual */}
                <div className="relative z-10 flex flex-col gap-2 mt-auto pt-4 max-w-[210px]">
                  {/* Bubble 1: Team Member */}
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-black/10">
                      <Image
                        src={alwaysOnSupport.avatar}
                        alt="Support Agent"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="bg-[#05080c] text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                      {alwaysOnSupport.messages[0].text}
                    </span>
                  </div>

                  {/* Bubble 2: Input Style */}
                  <div className="flex items-center justify-between bg-[#05080c] text-white text-xs px-3.5 py-2 rounded-full font-medium shadow-sm w-full">
                    <span>{alwaysOnSupport.messages[1].text}</span>
                    <span className="w-4 h-4 rounded-full border border-white/40 flex items-center justify-center text-[10px] leading-none text-white/80">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Solutions Dark Card */}
          <div className="lg:col-span-4">
            <div className="rounded-[22px] sm:rounded-[26px] bg-[#05080c] text-white p-7 sm:p-9 flex flex-col justify-between h-full min-h-[580px] lg:min-h-[700px] relative overflow-hidden">
              {/* Top Section */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-[28px] font-medium tracking-tight leading-tight text-white mb-8">
                  {strategicSolutions.title}
                </h3>

                {/* Bullet Points */}
                <ul className="flex flex-col gap-4 text-sm sm:text-[15px] text-white/80">
                  {strategicSolutions.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <span className="text-xs text-white/90">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link
                    href={strategicSolutions.ctaLink}
                    className="group inline-flex items-center justify-between gap-4 bg-white font-medium text-sm pl-5 pr-2 py-2 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 shadow-md"
                  >
                    <span className="text-[#05080c] font-medium">{strategicSolutions.ctaText}</span>
                    <span className="w-8 h-8 rounded-full bg-[#05080c] text-white flex items-center justify-center text-sm transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* 3D Chain Link Metallic Asset */}
              <div className="absolute right-[-40px] bottom-[-20px] sm:bottom-0 w-[240px] sm:w-[300px] h-[280px] sm:h-[360px] pointer-events-none opacity-90 z-0">
                <Image
                  src={strategicSolutions.chainImage}
                  alt="Strategic Chain link"
                  fill
                  className="object-contain object-bottom-right"
                />
              </div>

              {/* Bottom Footer */}
              <div className="relative z-10 pt-16">
                <p className="text-xs text-white/40 tracking-wide font-normal">
                  {strategicSolutions.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
