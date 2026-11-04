"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "motion/react";

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const target = Number(direction === "down" ? from : to) || 0;
  const start = Number(direction === "down" ? to : from) || 0;

  const getDecimalPlaces = (num) => {
    if (num === undefined || num === null) return 0;
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals, 10) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (val) => {
      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: maxDecimals,
        maximumFractionDigits: maxDecimals,
      };

      const formattedNumber = Intl.NumberFormat("en-US", options).format(val);
      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  const [displayValue, setDisplayValue] = useState(() => formatValue(start));

  useEffect(() => {
    if (!isInView || !startWhen) return;

    let animationFrameId;
    let timeoutId;

    const isReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isReducedMotion) {
      animationFrameId = requestAnimationFrame(() => {
        setDisplayValue(formatValue(target));
        if (typeof onEnd === "function") onEnd();
      });
      return () => cancelAnimationFrame(animationFrameId);
    }

    const startAnimation = () => {
      if (typeof onStart === "function") onStart();
      const startTime = performance.now();
      const durationMs = Math.max(duration * 1000, 100);

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        // Cubic ease-out: smooth deceleration from start to target
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = start + (target - start) * easeOut;

        setDisplayValue(formatValue(current));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayValue(formatValue(target));
          if (typeof onEnd === "function") onEnd();
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    if (delay > 0) {
      timeoutId = setTimeout(startAnimation, delay * 1000);
    } else {
      startAnimation();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, startWhen, start, target, duration, delay, formatValue, onStart, onEnd]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}

// Named alias for backwards compatibility
export { CountUp as CounterUp };
