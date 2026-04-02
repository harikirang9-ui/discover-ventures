"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ active }: { active?: string }) {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef<number>(0);

  const links = [
    { href: "/about", label: "About Us", key: "about" },
    { href: "/leadership", label: "Leadership", key: "leadership" },
    { href: "/transactions", label: "Transactions", key: "transactions" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY > 80);

      // Show on scroll up, hide on scroll down
      if (currentScrollY < 80) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentActive = active || null;

  return (
    <nav className="relative z-50 px-6 py-10 md:px-16 lg:px-28">
      <div
        className={`flex items-center justify-between bg-white transition-all duration-300 ${
          isSticky
            ? `fixed left-6 right-6 md:left-16 md:right-16 lg:left-28 lg:right-28 shadow-lg z-50 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 transition-all duration-300 ${isVisible ? "top-4" : "-top-24"}`
            : "px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/discover%20ventures%20logo.svg"
            alt="Discover Ventures logo"
            width={200}
            height={50}
            className="h-6 md:h-10 lg:h-10 w-auto"
            unoptimized
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`relative text-sm lg:text-base transition-colors pb-3 ${
                currentActive === link.key
                  ? "text-black font-semibold"
                  : "text-black hover:text-navy-dark"
              }`}
            >
              {link.label}
              {currentActive === link.key && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[3px] bg-blue-accent" />
              )}
            </Link>
          ))}
          <Link
            href="/#pitch"
            className="bg-blue-accent text-white font-semibold text-sm lg:text-base px-6 lg:px-6 py-2.5 hover:bg-blue-accent/90 transition-colors"
          >
            Share your pitch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col gap-1.5" aria-label="Menu">
          <span className="block w-6 h-0.5 bg-navy" />
          <span className="block w-6 h-0.5 bg-navy" />
          <span className="block w-6 h-0.5 bg-navy" />
        </button>
      </div>
    </nav>
  );
}
