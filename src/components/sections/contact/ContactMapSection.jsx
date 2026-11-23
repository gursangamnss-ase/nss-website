"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import { contactData } from "@/data/contactData";
import { IndiaFlag, CanadaFlag } from "@/components/ui/FlagIcons";

export default function ContactMapSection({ className = "" }) {
  const offices = contactData.offices || [
    {
      id: "mohali",
      name: "Mohali HQ",
      tag: "Registered Office",
      company: "NetSquare Software Pvt Ltd",
      address:
        "D-234, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar (Mohali), Punjab 140307",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=30.71333,76.69558&hl=en&z=15&output=embed&iwloc=near",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=30.71333,76.69558",
    },
    {
      id: "calgary",
      name: "Calgary Branch",
      tag: "Branch Office",
      company: "NetSquare Softwares Canada",
      address: "190 Corner Springs Landing Northeast Calgary, AB T3N 2Y1",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=51.1634,-113.9231&hl=en&z=15&output=embed&iwloc=near",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=51.1634,-113.9231",
    },
  ];

  const [activeOfficeId, setActiveOfficeId] = useState(offices[0].id);
  const activeOffice =
    offices.find((o) => o.id === activeOfficeId) || offices[0];

  return (
    <div className={`w-full ${className}`}>
      {/* Office Tab Selector & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="relative inline-flex items-center p-1 sm:p-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] w-fit">
          {offices.map((office) => {
            const isActive = office.id === activeOfficeId;
            return (
              <button
                key={office.id}
                type="button"
                onClick={() => setActiveOfficeId(office.id)}
                className={`relative group z-10 inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-tight overflow-hidden transition-colors duration-300 cursor-pointer select-none active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] ${
                  isActive
                    ? "text-white"
                    : "text-neutral-700 hover:text-black"
                }`}
              >
                {/* Active Sliding Background Pill with Spring Motion */}
                {isActive && (
                  <motion.div
                    layoutId="activeOfficePill"
                    className="absolute inset-0 rounded-full bg-[var(--color-primary)] shadow-[0_2px_10px_rgba(0,0,0,0.18)]"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}

                {/* Status Dot */}
                <span className="relative z-10 flex h-2 w-2 items-center justify-center shrink-0">
                  {isActive ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white shadow-sm" />
                    </>
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 group-hover:bg-neutral-600 transition-colors" />
                  )}
                </span>

                {/* NSS Signature Dual-Layer Vertical Text Roll Animation */}
                <span className="relative z-10 flex items-center gap-1.5 leading-tight font-medium overflow-hidden">
                  {office.id === "mohali" ? (
                    <IndiaFlag className="h-3 w-4.5 rounded-[1px] shrink-0" />
                  ) : (
                    <CanadaFlag className="h-3 w-4.5 rounded-[1px] shrink-0" />
                  )}
                  <span className="relative flex items-center overflow-hidden">
                    <span className="inline-block transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] origin-center translate-y-0 scale-100 opacity-100 group-hover:-translate-y-[160%] group-hover:scale-[0.8] group-hover:opacity-0 whitespace-nowrap">
                      {office.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center transition-all duration-[450ms] ease-[cubic-bezier(0.44,0,0.56,1)] origin-center translate-y-[160%] scale-[1.2] opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 pointer-events-none whitespace-nowrap"
                    >
                      {office.name}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-normal">
          Interactive studio locator · Mohali HQ &amp; Calgary Branch
        </p>
      </div>

      {/* Map Frame Container */}
      <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-neutral-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.05)] bg-[var(--color-surface)]">
        <iframe
          key={activeOffice.id}
          src={activeOffice.mapEmbedUrl}
          title={`${activeOffice.name} Google Map`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute -top-[60px] left-0 w-full h-[calc(100%+60px)] grayscale-[12%] contrast-[1.03] transition-opacity duration-500"
        />

        {/* Floating Address & Directions Overlay Card */}
        <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 max-w-[calc(100%-2rem)] sm:max-w-sm rounded-[20px] bg-white/95 backdrop-blur-md p-4 sm:p-5 border border-white/60 shadow-lg text-[var(--color-primary)] z-10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-700 uppercase tracking-wider flex items-center gap-1.5">
              {activeOffice.id === "mohali" ? (
                <IndiaFlag className="h-2.5 w-3.5 rounded-[1px] shrink-0" />
              ) : (
                <CanadaFlag className="h-2.5 w-3.5 rounded-[1px] shrink-0" />
              )}
              {activeOffice.tag}
            </span>
            <span className="text-xs text-neutral-500">
              {activeOffice.company}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal mb-3.5">
            {activeOffice.address}
          </p>

          <Button
            href={activeOffice.directionsUrl}
            target="_blank"
            variant="dark"
            size="xs"
            showArrow={true}
            className="!text-xs font-semibold !pl-3.5 !pr-1 !py-1"
          >
            Get Directions
          </Button>
        </div>
      </div>
    </div>
  );
}
