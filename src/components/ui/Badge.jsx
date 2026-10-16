"use client"
import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';

const variants = {
  primary: { color: 'var(--color-primary)', shineColor: '#ffffff' },
  secondary: { color: '#b5b5b5', shineColor: '#ffffff' },
};

const ShinyText = ({
  text,
  variant = 'primary',
  icon = <Sparkles size={16} fill="currentColor" strokeWidth={1} />,
  disabled = false,
  speed = 2,
  className = '',
  color,
  shineColor,
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = 'left',
  delay = 0
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const directionRef = useRef(direction === 'left' ? 1 : -1);

  const animationDuration = speed * 1000;
  const delayDuration = delay * 1000;

  // variant supplies defaults; explicit color/shineColor props always win
  const resolvedColor = color ?? variants[variant].color;
  const resolvedShineColor = shineColor ?? variants[variant].shineColor;

  useAnimationFrame(time => {
    if (disabled || isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;

    elapsedRef.current += deltaTime;

    if (yoyo) {
      const cycleDuration = animationDuration + delayDuration;
      const fullCycle = cycleDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        const p = (cycleTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else if (cycleTime < cycleDuration) {
        progress.set(directionRef.current === 1 ? 100 : 0);
      } else if (cycleTime < cycleDuration + animationDuration) {
        const reverseTime = cycleTime - cycleDuration;
        const p = 100 - (reverseTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else {
        progress.set(directionRef.current === 1 ? 0 : 100);
      }
    } else {
      const cycleDuration = animationDuration + delayDuration;
      const cycleTime = elapsedRef.current % cycleDuration;

      if (cycleTime < animationDuration) {
        const p = (cycleTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else {
        progress.set(directionRef.current === 1 ? 100 : 0);
      }
    }
  });

  useEffect(() => {
    directionRef.current = direction === 'left' ? 1 : -1;
    elapsedRef.current = 0;
    progress.set(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  const backgroundPosition = useTransform(progress, p => `${150 - p * 2}% center`);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientStyle = {
    backgroundImage: `linear-gradient(${spread}deg, ${resolvedColor} 0%, ${resolvedColor} 35%, ${resolvedShineColor} 50%, ${resolvedColor} 65%, ${resolvedColor} 100%)`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <span className="inline-flex items-center gap-2">
      {icon && (
        <span className="flex items-center justify-center" style={{ color: resolvedColor }}>
          {icon}
        </span>
      )}

      <motion.span
        className={`inline-block ${className}`}
        style={{ ...gradientStyle, backgroundPosition }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </motion.span>
    </span>
  );
};

export default ShinyText;



// import { typography } from "@/components/styles";
// import { Sparkles } from "lucide-react";

// const variants = {
//     primary: "text-primary",
//     secondary: "text-white",
// };

// export default function Badge({
//     children,
//     icon = <Sparkles size={16} fill="currentColor" strokeWidth={1} />,
//     variant = "primary",
//     className = "",
// }) {
//     return (
//         <div
//             className={`inline-flex items-center gap-2 ${variants[variant]} ${className}`}
//         >
//             <span className="flex items-center justify-center">
//                 {icon}
//             </span>

//             <span>{children}</span>
//         </div>
//     );
// }
