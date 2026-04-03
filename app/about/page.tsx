import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";

export default function AboutPage() {
  return (
    <div className="bg-navy overflow-x-hidden">
      {/* Navbar */}
      <section className="bg-navy">
        <Navbar active="about" />
      </section>

      {/* Page Heading */}
      <div className="px-6 md:px-16 lg:px-28 pt-2 md:pt-3 lg:pt-4 pb-6 md:pb-8">
        <FadeIn>
          <h1 className="font-serif text-white text-3xl md:text-4xl lg:text-[50px] lg:leading-[53px]">
            About Us
          </h1>
        </FadeIn>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 lg:px-28 pb-12 md:pb-16 lg:pb-20">
        <FadeIn delay={150}>
          <p className="text-white/90 text-[18px] leading-relaxed mb-6">
            Discover Ventures is an investment bank specialising in raising the first institutional round for visionary founders seeking long-term growth and success. We not only advise you but also bet on you by investing from our own balance sheet. This skin-in-the-game approach makes us more committed and invested in every founder and every deal.
          </p>
        </FadeIn>
        <FadeIn delay={300}>
          <p className="text-white/90 text-[18px] leading-relaxed">
            Backed by the institutional pedigree of Dexter Capital Advisors, Discover Ventures brings founders a strategic combination of deep investor relationships, transaction integrity, and long-term partnership. We don&apos;t just close your first round; we stay in your corner for every one that follows.
          </p>
        </FadeIn>
      </div>

      {/* Image — full width, edge to edge */}
      <FadeIn delay={450}>
        <div className="pb-0">
          <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1]">
            <Image
              src="https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/leadership/about%20is.png"
              alt="About Discover Ventures"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </FadeIn>

      {/* Footer */}
      <Footer variant="inner" />
    </div>
  );
}
