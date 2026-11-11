"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function ClientLogoCard({
  name,
  logo,
  width = 130,
  height = 30,
  className = "",
  imgClassName = "",
  interval = 3,
  logos = null,
}) {
  const logoList =
    logos && logos.length > 0
      ? logos
      : [{ name, logo, width, height, imgClassName }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (logoList.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logoList.length);
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [logoList.length, interval, isPaused]);

  const currentLogo = logoList[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`group relative flex h-[130px] sm:h-[140px] items-center justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-[6px] px-6 py-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:scale-[1.02] ${className}`}
      title={currentLogo?.name}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={`${currentLogo?.logo}-${currentIndex}`}
          initial={{ y: "100%", scale: 0.7, opacity: 0, originY: 1 }}
          animate={{ y: "0%", scale: 1, opacity: 1, originY: 0.5 }}
          exit={{ y: "-100%", scale: 0.7, opacity: 0, originY: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.44, 0, 0.56, 1],
          }}
          className="relative flex h-full w-full items-center justify-center"
        >
          <Image
            src={currentLogo.logo}
            alt={currentLogo.name ? `${currentLogo.name} logo` : "Client logo"}
            width={currentLogo.width || 130}
            height={currentLogo.height || 30}
            style={{ width: "auto", height: "auto" }}
            className={`max-h-7 sm:max-h-8 w-auto object-contain brightness-0 invert opacity-75 transition-opacity duration-300 group-hover:opacity-100 ${
              currentLogo.imgClassName || ""
            }`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
