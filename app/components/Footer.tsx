import Image from "next/image";
import Link from "next/link";

export default function Footer({ variant = "home" }: { variant?: "home" | "inner" }) {
  return (
    <footer className="bg-navy text-white overflow-hidden relative">
      {/* CTA Bar */}
      <div className={`relative ${variant === "inner" ? "mt-[40px]" : "-mt-0"}`}>
        <div className={`absolute inset-x-0 top-0 h-1/2 ${variant === "inner" ? "bg-navy" : "bg-background"}`} />
        <div className="relative px-6 md:px-16 lg:px-28 py-0">
          <div className="bg-[#233F88] flex flex-col sm:flex-row items-start sm:items-center justify-between px-8 md:px-12 lg:px-16 py-6 md:py-8">
            <p className="font-serif text-white text-xl md:text-2xl lg:text-3xl mb-4 sm:mb-0">
              Ready to raise capital?
            </p>
            <Link
              href="/#pitch"
              className="bg-white text-navy-dark font-medium text-sm md:text-base px-8 md:px-10 py-3 hover:bg-white/90 transition-colors"
            >
              Share your pitch
            </Link>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="px-6 md:px-16 lg:px-28 pt-12 md:pt-16 pb-8 md:pb-10">
        <Image
          src="https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/discover%20ventures%20logo.svg"
          alt="Discover Ventures"
          width={100}
          height={40}
          className="h-8 md:h-10 w-auto brightness-0 invert"
          unoptimized
        />
      </div>

      {/* Footer Grid */}
      <div className="px-6 md:px-16 lg:px-28 pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-4">
              Contact Us
            </h4>
            <p className="font-light text-sm md:text-base leading-6 md:leading-7 mb-4">
              Address: Discover Ventures
              <br />
              512/10, 91Springboard,
              <br />
              Outer Ring Road (ORR),
              <br />
              Mahadevapura
              <br />
              Bengaluru, Karnataka
              <br />
              560048
            </p>
            <p className="font-light text-sm md:text-base">
              Email: info@discoverventures.in
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-4">Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="font-light text-sm md:text-base hover:text-blue-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="font-light text-sm md:text-base hover:text-blue-accent transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/transactions" className="font-light text-sm md:text-base hover:text-blue-accent transition-colors">
                  Transactions
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Entities */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-4">
              Other Dexter Entities
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="font-light text-sm md:text-base">
                  Dexter Capital Advisors
                </span>
              </li>
              <li>
                <span className="font-light text-sm md:text-base">
                  Dexter Ventures
                </span>
              </li>
              <li>
                <a
                  href="https://deltainvest.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light text-sm md:text-base hover:text-blue-accent transition-colors"
                >
                  Delta Advisors
                </a>
              </li>
              <li>
                <span className="font-light text-sm md:text-base">
                  Dexter Foundation
                </span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-4">
              Follow us on
            </h4>
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="w-5 h-5 md:w-6 md:h-6 invert"
            />
          </div>
        </div>
      </div>

      {/* Large Brand Name */}
      <div className="px-6 md:px-16 lg:px-28 pb-4">
        <p className="font-serif text-blue-accent text-5xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[150px] tracking-tight leading-none whitespace-nowrap overflow-hidden">
          Discover Ventures
        </p>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-6 md:px-16 lg:px-28 py-4 text-center">
        <p className="font-light text-sm">
          &copy; 2026 Discover Ventures |{" "}
          <a href="#" className="hover:text-blue-accent transition-colors">
            Disclaimer
          </a>
        </p>
      </div>
    </footer>
  );
}
