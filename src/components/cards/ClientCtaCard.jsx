"use client";

import Link from "next/link";
import Image from "next/image";

export default function ClientCtaCard({
  text = "Join us now",
  href = "#contact",
  icon = "/images/clients/cta-arrow.svg",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`group relative flex h-[130px] items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:h-[140px] ${className}`}
    >
      <span className="text-sm font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-white sm:text-[15px]">
        {text}
      </span>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:scale-105">
        <Image
          src={icon}
          alt="Arrow"
          width={15}
          height={12}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </div>
    </Link>
  );
}
