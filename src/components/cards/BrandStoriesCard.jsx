"use client";

import Image from "next/image";

export function StepStars({ step = 1, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 ${className}`}
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
            starIdx <= step ? "opacity-100" : "opacity-20"
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
      className={`w-full max-w-[430px] rounded-[16px] sm:rounded-[18px] bg-white p-[8px] sm:p-[10px] shadow-[0_2px_16px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] ${className}`}
    >
      {/* Inner bordered container matching exact Framer card frame */}
      <div className="flex h-full min-h-[410px] sm:min-h-[440px] flex-col justify-between rounded-[10px] sm:rounded-[12px] border border-[#05080c]/10 p-5 sm:p-6">
        {/* Header: Title on Left, 3-star step indicator on Right */}
        <div className="flex items-center justify-between gap-4 w-full">
          <h3 className="text-xl sm:text-[22px] font-medium tracking-tight text-[#05080c] leading-tight">
            {title}
          </h3>
          <div className="shrink-0">
            {badge !== undefined ? badge : <StepStars step={stepNumber} />}
          </div>
        </div>

        {/* Middle: Illustration Graphic */}
        <div className="my-auto py-5 sm:py-7 flex items-center justify-center min-h-[180px] sm:min-h-[210px]">
          {image && (
            <Image
              src={image}
              alt={imageAlt || title || "Step illustration"}
              width={imageWidth}
              height={imageHeight}
              className="object-contain max-h-[175px] sm:max-h-[200px] w-auto"
              style={{ width: "auto", height: "auto" }}
            />
          )}
        </div>

        {/* Footer: Description */}
        <p className="text-sm sm:text-[15px] font-normal text-[#5b5b5b] leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
}

// Named export alias for backwards compatibility
export { BrandStoriesCard as FeatureCard };