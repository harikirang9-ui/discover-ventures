"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PartnershipCardProps {
  name: string;
  subtitle: string;
  image: string;
}

export default function PartnershipCard({
  name,
  subtitle,
  image,
}: PartnershipCardProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-dark-teal h-[400px] md:h-[450px] lg:h-[510px] relative overflow-hidden group transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-dark-teal p-4 md:p-5">
        <p className="font-serif font-semibold text-white text-xl md:text-2xl lg:text-[28px]">
          {name}
        </p>
        <p className="text-white text-sm md:text-base lg:text-xl mt-1 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
