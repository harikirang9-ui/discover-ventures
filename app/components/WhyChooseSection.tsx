"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

function FadeInCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const cards = [
  {
    title: "Fundraising Advisory",
    description:
      "We help you build a compelling equity story, positioning your business correctly for the relevant investors, and ensuring the best valuation and terms for you",
    image:
      "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Fundraising%20Advisory.png",
  },
  {
    title: "Investor Access",
    description:
      "We introduce you to the relevant VC funds, family offices, and institutional investors. No cold outreach, but credible and warm connections",
    image:
      "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Investor%20Access.png",
  },
  {
    title: "A Skin-in-the-Game Approach",
    description:
      "We don\u2019t just facilitate capital raises; we invest from our own balance sheet alongside institutional investors",
    image:
      "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/A%20Skin-in-the-Game%20Approach.png",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-navy py-16 md:py-20 lg:py-24 px-6 md:px-16 lg:px-28">
      <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* Left sticky title */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center mb-10 lg:mb-0">
          <FadeInCard>
            <h2 className="font-serif text-white text-3xl md:text-4xl lg:text-[50px] lg:leading-[58px]">
              Why choose
              <br />
              <span className="text-blue-cyan">Discover Ventures?</span>
            </h2>
          </FadeInCard>
        </div>

        {/* Right scrolling cards */}
        <div className="flex flex-col gap-8">
          {cards.map((card, i) => (
            <FadeInCard key={card.title} delay={i * 150}>
              <div className="bg-[#0d2a6b] rounded overflow-hidden border border-white/10">
                <div className="relative h-[240px] md:h-[280px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-serif font-semibold text-white text-lg md:text-xl lg:text-2xl mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-base lg:text-[18px] leading-7">
                    {card.description}
                  </p>
                </div>
              </div>
            </FadeInCard>
          ))}
        </div>
      </div>
    </section>
  );
}
