"use client";

import Image from "next/image";

export function StepStars({ step = 1, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 ${className}`}
      aria-label={`Step ${step} of 3`}
    >
      {[1, 2, 3].map((starIdx) => (
        <svg
          key={starIdx}
          width="13"
          height="13"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-opacity duration-300 ${
            starIdx <= step ? "opacity-100" : "opacity-25"
          }`}
        >
          <path
            fill="#05080C"
            d="m1.563 50 39.062 9.375L50 98.438l9.375-39.063L98.438 50l-39.063-9.375L50 1.562l-9.375 39.063L1.562 50Z"
          />
        </svg>
      ))}
    </div>
  );
}

export default function BrandStoriesCard({
  title,
  description,
  image,
  imageAlt,
  imageWidth = 180,
  imageHeight = 160,
  stepNumber = 1,
  badge,
  className = "",
}) {
  return (
    <article
      className={`rounded-[24px] sm:rounded-[32px] border border-black/5 bg-white p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between h-[440px] sm:h-[480px] w-full max-w-[430px] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] ${className}`}
    >
      {/* Header: Title on Left, 3-star step indicator on Right */}
      <div className="flex items-center justify-between gap-4 w-full">
        <h3 className="text-2xl sm:text-[28px] font-medium tracking-tight text-[#05080c] leading-tight">
          {title}
        </h3>
        <div className="shrink-0">
          {badge !== undefined ? badge : <StepStars step={stepNumber} />}
        </div>
      </div>

      {/* Middle: Illustration Graphic */}
      <div className="my-auto py-6 sm:py-8 flex items-center justify-center min-h-[170px] sm:min-h-[200px]">
        {image && (
          <Image
            src={image}
            alt={imageAlt || title || "Step illustration"}
            width={imageWidth}
            height={imageHeight}
            className="object-contain max-h-[160px] sm:max-h-[185px] w-auto drop-shadow-sm"
            style={{ width: "auto", height: "auto" }}
          />
        )}
      </div>

      {/* Footer: Description */}
      <p className="text-sm sm:text-base text-[#5b5b5b] leading-relaxed">
        {description}
      </p>
    </article>
  );
}

// Named export alias for backwards compatibility
export { BrandStoriesCard as FeatureCard };