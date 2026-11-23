import React from "react";
import Image from "next/image";

export function IndiaFlag({
  className = "h-4 w-[23px] rounded-[2px] shadow-sm inline-block shrink-0 object-cover",
  alt = "India Flag",
}) {
  return (
    <Image
      src="/images/flags/india.png"
      alt={alt}
      width={23}
      height={16}
      className={className}
      unoptimized
    />
  );
}

export function CanadaFlag({
  className = "h-4 w-[23px] rounded-[2px] shadow-sm inline-block shrink-0 object-cover",
  alt = "Canada Flag",
}) {
  return (
    <Image
      src="/images/flags/canada.png"
      alt={alt}
      width={23}
      height={16}
      className={className}
      unoptimized
    />
  );
}
