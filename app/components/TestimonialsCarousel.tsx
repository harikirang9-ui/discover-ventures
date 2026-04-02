"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

const testimonials = [
  {
    logo: "/images/mom-logo.png",
    highlight: "\u201CTheir industry network is very wide\u201D",
    quote:
      "\u201CThis being our maiden fund raise, the Dexter team guided us through the journey with deep expertise - everything from our pitch deck, financial projections etc was patiently refined and crafted. Their industry network is very wide, and their team goes the extra mile to ensure no stone is left unturned. Special mention to Gaurav Goyal who led our round, and Devendra who is always founder first.\u201D",
    name: "Pratik Bhagchandka",
    title: "CEO & Founder, MOM (Meal of the Moment)",
    image: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Pratik%20Bhagchandka.png",
  },
  {
    logo: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/transactions/DeHaat.png",
    highlight: "\u201CTook end-to-end ownership of the fundraise process\u201D",
    quoteLines: 4,
    quote:
      "\u201CDexter might be an investment bank to help founders and entrepreneurs raise growth capital. To me, it is a core team member or partner who learns one\u2019s requirements and puts in the best effort in all aspects. It\u2019s a team, or should I say lever, to keep pushing you unless you don\u2019t get money in your account. What I liked most was that Dexter takes complete ownership of the end-to-end process and, more importantly, a contact point to call anytime whenever you, as an entrepreneur, are worried about the deal. You can treat them as your founding team member to lead the process on your behalf, and you can focus on your operations or core work for your venture. And yes, at the end, I want to say that Devendra Agrawal makes a true friend of a true entrepreneur.\u201D",
    name: "Shashank Kumar",
    title: "Founder, DeHaat",
    image: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Shashank%20Kumar.png",
  },
  {
    logo: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/transactions/Easebuzz.png",
    highlight: "\u201CHelped us get multiple offers\u201D",
    quote:
      "\u201CFrom the very beginning, the Dexter team understood our vision, helped refine our pitch, and connected us with the right investors. Their strategic insights and hands-on approach were key in securing multiple offers. This approach ensured that we have the space to choose the right investment partner for Easebuzz. I highly recommend them to any founder looking to navigate the fundraising journey with confidence!\u201D",
    name: "Rai Rohit Prasad",
    title: "CEO & MD, Easebuzz",
    image: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Rai%20Rohit%20Prasad.png",
  },
  {
    logo: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/transactions/pickrr.svg",
    highlight: "\u201CHonored founders\u2019 interests\u201D",
    quote:
      "\u201CI found the Dexter team to be extremely professional in their approach. What really stood out to me was their deep engagement throughout the fundraise process, from the term sheet stage through to the funding close, and not just until the term sheet stage. The Dexter team played an important role during negotiation and ensured that the preferences of both founders and investors were seamlessly factored in.\u201D",
    name: "Rhitiman Mujumder",
    title: "Co-founder, Pickrr",
    image: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Rhitiman%20Mujumder.png",
  },
  {
    logo: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/transactions/Beyond%20Appliances.webp",
    highlight: "\u201CDeep understanding of the ecosystem\u201D",
    quote:
      "\u201CA big thank you to Dexter Capital for their unwavering support during our fundraising journey. They guided us through some tough roadblocks through their deep understanding of the ecosystem. Their expertise and steady advice made all the difference in closing the deal successfully. Truly grateful for their partnership and highly recommend them to anyone looking for solid fundraising support!\u201D",
    name: "Eshwar K Vikas",
    title: "Co-founder, Beyond Appliances",
    image: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Eshwar%20K%20Vikas.png",
  },
  {
    logo: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/transactions/The%20Bear%20House.jpg",
    highlight: "\u201CThey understood our vision\u201D",
    quote:
      "\u201CDexter Capital was the exclusive advisor to The Bear House on the transaction. We are incredibly grateful to Dexter Capital for their exceptional guidance and unwavering support in successfully closing our maiden institutional funding round. The Dexter team demonstrated professionalism, commitment, and a deep understanding of our vision, ensuring a seamless process from start to finish. We highly recommend them to any company looking for a trusted investment banking partner.\u201D",
    name: "Harsh Somaiya",
    title: "Co-founder, The Bear House",
    image: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Harsh%20Somaiya.png",
  },
];


function TestimonialModal({
  t,
  onClose,
}: {
  t: (typeof testimonials)[number];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white relative max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-navy-dark hover:text-black transition-colors"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <p className="font-semibold text-navy-dark text-lg md:text-xl mb-1">
          {t.name}
        </p>
        <p className="text-navy-dark text-sm md:text-base mb-6">
          {t.title}
        </p>
        <blockquote className="font-serif font-normal text-[#333] text-[18px] leading-7 md:leading-8">
          {t.quote}
        </blockquote>
      </div>
    </div>
  );
}

function TestimonialCard({
  t,
  onReadMore,
}: {
  t: (typeof testimonials)[number];
  onReadMore: () => void;
}) {
  return (
    <div className="border border-[#8d8d9f] bg-white flex flex-col lg:flex-row overflow-hidden h-full">
      {/* Mobile: Image left + Logo right row */}
      {t.image && (
        <div className="flex lg:hidden items-center justify-between p-4 sm:p-6">
          <div className="relative w-[120px] h-[140px] sm:w-[150px] sm:h-[170px] bg-blue-accent shrink-0">
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="object-cover"
            />
          </div>
          {t.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.logo}
              alt="Logo"
              className="max-w-28 max-h-14 w-auto h-auto object-contain"
            />
          )}
        </div>
      )}

      {/* Quote Content */}
      <div className="flex-1 px-4 pb-6 sm:px-6 sm:pb-8 md:p-12 lg:py-14 lg:pl-14 lg:pr-6 flex flex-col justify-start">
        {/* Logo - desktop only */}
        <div className="hidden lg:flex h-16 mb-8 items-center">
          {t.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.logo}
              alt="Logo"
              className="max-w-36 max-h-16 w-auto h-auto object-contain"
            />
          )}
        </div>
        {t.highlight && (
          <p className="font-serif font-semibold text-navy-dark text-[18px] md:text-[22px] leading-tight mb-4">
            {t.highlight}
          </p>
        )}
        <div className="flex-1 mb-2">
          <blockquote
            className="font-serif font-normal text-[#333] text-[16px] md:text-[18px] leading-6 md:leading-8 inline"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: t.quoteLines ?? 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {t.quote}
          </blockquote>
        </div>
        <button
          onClick={onReadMore}
          className="text-[#1BAFF5] font-semibold text-sm self-start mb-6 hover:underline"
        >
          Read more
        </button>
        <div>
          <p className="font-semibold text-navy-dark text-lg md:text-xl lg:text-1xl">
            {t.name}
          </p>
          <p className="text-navy-dark text-sm md:text-base lg:text-xl">
            {t.title}
          </p>
        </div>
      </div>

      {/* Desktop: Image on right */}
      {t.image && (
        <div className="hidden lg:flex relative lg:w-[395px] lg:h-auto shrink-0 items-center justify-center p-8">
          <div className="relative lg:w-[320px] lg:h-[360px] bg-blue-accent">
            <Image
              src={t.image}
              alt={t.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTo = (index: number) => {
    setCurrent(index);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (card) {
      track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    }
  };

  const prev = () =>
    scrollTo(current === 0 ? testimonials.length - 1 : current - 1);
  const next = () =>
    scrollTo(current === testimonials.length - 1 ? 0 : current + 1);

  // Swipe/drag support (touch + mouse)
  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);

  const handleStart = useCallback((x: number) => {
    startX.current = x;
    endX.current = x;
    isDragging.current = true;
  }, []);

  const handleMove = useCallback((x: number) => {
    if (isDragging.current) endX.current = x;
  }, []);

  const handleEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = startX.current - endX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  }, [current]);

  return (
    <div>
      {/* Sliding track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-hidden scroll-smooth cursor-grab active:cursor-grabbing select-none items-stretch"
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
        onMouseDown={(e) => { e.preventDefault(); handleStart(e.clientX); }}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="min-w-[85%] lg:min-w-[88%] transition-transform duration-500 flex"
          >
            <TestimonialCard t={t} onReadMore={() => setModalIndex(i)} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-3 h-3 bg-navy-dark"
                  : "w-2.5 h-2.5 bg-navy-dark/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-navy-dark/40 flex items-center justify-center hover:border-navy-dark transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-navy-dark"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-navy-dark/40 flex items-center justify-center hover:border-navy-dark transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-navy-dark"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalIndex !== null && (
        <TestimonialModal
          t={testimonials[modalIndex]}
          onClose={() => setModalIndex(null)}
        />
      )}
    </div>
  );
}
