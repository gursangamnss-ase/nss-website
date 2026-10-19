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
      spacing="none"
      background="transparent"
      className="pb-20 sm:pb-28 lg:pb-36 pt-0"
    >
      <Container size="2xl" className="px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:gap-3 lg:grid-cols-6 items-start">
          {/* Badge */}
          <div className="flex items-start pt-2 lg:col-span-2">
            <Badge
              text={header.badge}
              disabled
              color="#aaa9ad"
              className="text-xs font-medium tracking-wide sm:text-sm"
            />
          </div>

          {/* Heading */}
          <div className="lg:col-span-4">
            <p className="text-indent-custom text-[24px] sm:text-[30px] lg:text-[38px] font-medium leading-[1.12] tracking-[-0.04em] text-[var(--color-text-muted)]">
              <span className="text-white">
                Together, we build impactful experiences,
              </span>
              <br />
              lasting relationships, and digital solutions that move businesses
              forward.
            </p>
          </div>
        </div>

        {/* Clients grid */}
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
