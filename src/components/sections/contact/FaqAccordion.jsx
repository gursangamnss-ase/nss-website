"use client";

import { useState } from "react";

export default function FaqAccordion({ items, className = "" }) {
  // Store ID of open item (or null if all closed)
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-3.5 sm:space-y-4 ${className || "mx-auto max-w-4xl"}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `faq-trigger-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="rounded-2xl bg-[var(--color-surface)] border border-neutral-100/60 transition-colors"
          >
            <button
              id={triggerId}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between px-6 py-5 sm:px-8 sm:py-6 text-left cursor-pointer group focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:outline-none rounded-2xl"
            >
              <span className="text-base sm:text-lg font-medium text-[var(--color-primary)] group-hover:opacity-80 transition-opacity pr-4">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </button>

            {/* Expandable Answer Panel */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 pt-1 sm:px-8 sm:pb-7 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

