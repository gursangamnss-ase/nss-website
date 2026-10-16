"use client";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import ClientLogoCard from "@/components/cards/ClientLogoCard";
import ClientStatCard from "@/components/cards/ClientStatCard";
import ClientCtaCard from "@/components/cards/ClientCtaCard";
import { trustedClientsData } from "@/data/trustedClientsData";

export default function TrustedClientsSection() {
  const { header, cards } = trustedClientsData;

  return (
    <Section
      id="clients"
      background="dark"
      className="bg-[#05080c] pb-20 sm:pb-28 lg:pb-36 overflow-hidden pt-0!"
    >
      <Container size="full" className="max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Top Header: Badge + Statement Heading aligned with 6-column grid */}
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:gap-3 lg:grid-cols-6 items-start">
          {/* Left: Pre-title Badge spanning columns 1-2 */}
          <div className="flex items-start pt-2 lg:col-span-2">
            <Badge
              text={header.badge}
              disabled
              color="#aaa9ad"
              className="text-xs font-medium tracking-wide sm:text-sm"
            />
          </div>

          {/* Right: Statement Heading starting at column 3 and spanning columns 3-6 */}
          <div className="lg:col-span-4">
            <h3 className="text-[24px] sm:text-[30px] lg:text-[38px] font-medium leading-[1.12] tracking-[-0.04em] text-[var(--color-text-muted)]">
              <span className="text-white">
                Together, we build impactful experiences,
              </span>
              <br className="hidden lg:block" />{" "}
              <span>
                lasting relationships, and digital solutions that move
              </span>
              <br className="hidden lg:block" />{" "}
              <span>
                businesses forward.
              </span>
            </h3>
          </div>
        </div>

        {/* 12-Card Grid: 2 rows of 6 cards on desktop */}
        <div className="mt-16 sm:mt-24 lg:mt-28 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {cards.map((card) => {
            if (card.type === "logo") {
              return (
                <ClientLogoCard
                  key={card.id}
                  name={card.name}
                  logo={card.logo}
                  width={card.width}
                  height={card.height}
                />
              );
            }

            if (card.type === "stat") {
              return (
                <ClientStatCard
                  key={card.id}
                  count={card.count}
                  label={card.label}
                />
              );
            }

            if (card.type === "cta") {
              return (
                <ClientCtaCard
                  key={card.id}
                  text={card.text}
                  href={card.href}
                  icon={card.icon}
                />
              );
            }

            return null;
          })}
        </div>
      </Container>
    </Section>
  );
}
