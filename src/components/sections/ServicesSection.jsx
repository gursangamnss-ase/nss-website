"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ServiceTabItem from "@/components/ui/ServiceTabItem";
import ServiceDetailCard from "@/components/cards/ServiceDetailCard";
import { servicesData } from "@/data/servicesData";


export default function ServicesSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <Section
      id="services"
      spacing="none"
      background="dark"
      className="bg-[#05080c] py-20 sm:py-28 lg:py-36"
    >
      <Container size="full" className="max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/*
          2x2 CSS Grid Layout:
          Row 1: [What we craft] (col-span-5)  &  [Solutions that Drive results] (col-span-7)
          Row 2: [Accordion Tabs] (col-span-5)  &  [Active Service Card] (col-span-7)
        */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-12 xl:gap-x-16">
          {/* Row 1 Left: Pre-title Badge aligned with top of heading */}
          <div className="flex items-start pt-2 lg:col-span-4">
            <Badge
              text="What we craft"
              disabled
              color="#aaa9ad"
              className="text-xs font-medium tracking-wide sm:text-sm"
            />
          </div>

          {/* Row 1 Right: Big Heading directly above the Card */}
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(2.5rem,5.5vw,5.25rem)] font-medium leading-[1.06] tracking-[-0.04em] text-white">
              Solutions that{" "}
              <span className="font-script inline-block text-[1.14em] font-normal leading-[0.8] tracking-[-0.02em]">
                Drive
              </span>{" "}
              results
            </h2>
          </div>

          {/* Row 2 Left: Left Accordion Section (Spans exact height of the card so top and bottom align) */}
          <div className="flex h-full flex-col justify-between lg:col-span-4">
            {servicesData.map((service, index) => (
              <ServiceTabItem
                key={service.id}
                number={service.number}
                title={service.title}
                isActive={activeTabIndex === index}
                onClick={() => setActiveTabIndex(index)}
                className="flex-1"
              />
            ))}
          </div>

          {/* Row 2 Right: Lower Card Section */}
          <div className="lg:col-span-8">
            <ServiceDetailCard service={servicesData[activeTabIndex]} />
          </div>

          {/* Row 3 Left: Pricing Button placed below the accordion bottom line */}
          <div className="lg:col-span-4 mt-2 sm:mt-4">
            <Button variant="light" className="w-auto px-6 py-1">
              See pricing
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
