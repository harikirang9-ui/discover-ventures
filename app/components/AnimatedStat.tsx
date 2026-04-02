"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
  fadeOnly?: boolean;
}

function parseValue(value: string): {
  prefix: string;
  number: number;
  suffix: string;
} {
  const match = value.match(/^([^\d]*?)([\d.]+)([^\d]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

export default function AnimatedStat({ value, label, fadeOnly = false }: AnimatedStatProps) {
  const { number } = parseValue(value);
  const isCountable = !fadeOnly && number > 0;

  const [display, setDisplay] = useState(isCountable ? "0" : value);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setVisible(true);

          if (!isCountable) return;

          const { prefix, number: num, suffix } = parseValue(value);
          const duration = 1500;
          const steps = 60;
          const increment = num / steps;
          const stepDuration = duration / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            current = Math.min(current + increment, num);
            const formatted = Number.isInteger(num)
              ? Math.round(current).toString()
              : current.toFixed(1);
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (step >= steps) {
              clearInterval(timer);
              setDisplay(value);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, isCountable]);

  return (
    <div
      ref={ref}
      className={`text-center md:px-6 lg:px-10 transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <p className="font-serif font-semibold text-navy-dark text-3xl md:text-4xl lg:text-[40px] lg:leading-[53px]">
        {display}
      </p>
      <p className="font-serif text-navy-dark text-base md:text-xl lg:text-[22px] lg:leading-[42px] mt-1">
        {label}
      </p>
    </div>
  );
}
