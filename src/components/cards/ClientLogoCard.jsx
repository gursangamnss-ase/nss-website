"use client";

import Image from "next/image";

export default function ClientLogoCard({
  name,
  logo,
  width = 130,
  height = 30,
  className = "",
}) {
  return (
    <div
      className={`group relative flex h-[130px] items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] sm:h-[140px] ${className}`}
      title={name}
    >
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src={logo}
          alt={name}
          width={width}
          height={height}
          style={{ width: "auto", height: "auto" }}
          className="max-h-7 w-auto object-contain opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:brightness-125 sm:max-h-8"
        />
      </div>
    </div>
  );
}
