import Image from "next/image";
import AnimatedStat from "./components/AnimatedStat";
import PartnershipCard from "./components/PartnershipCard";
import WhyChooseSection from "./components/WhyChooseSection";
import FadeInFromRight from "./components/FadeInFromRight";
import FadeIn from "./components/FadeIn";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Discover Ventures",
  url: "https://www.discoverventures.in",
  logo: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/discover%20ventures%20logo.svg",
  description:
    "Top-ranked investment bank in India offering fundraising advisory, investor access, and a skin-in-the-game approach for startups and growth-stage companies.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "512/10, 91Springboard, Outer Ring Road (ORR), Mahadevapura",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560048",
    addressCountry: "IN",
  },
  email: "info@discoverventures.in",
  sameAs: [
    "https://www.dextercapital.in/",
    "https://www.dexter.ventures/",
  ],
};

export default function Home() {
  return (
    <div className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ===== HERO SECTION ===== */}
      <section className="bg-navy relative overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 px-6 md:px-16 lg:px-28 pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl">
            <FadeIn>
              <h1 className="font-serif text-blue-accent text-3xl md:text-4xl lg:text-[52px] lg:leading-[53px] mb-4">
                Discover Ventures
              </h1>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="font-serif text-white text-3xl md:text-3xl lg:text-[52px] lg:leading-[62px] lg:whitespace-nowrap mb-18">
                Your long-term<br className="lg:hidden" /> fundraising partner
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <p className="font-serif text-white text-lg md:text-xl lg:text-2xl regular mb-6">
                Ready to raise capital?
              </p>
            </FadeIn>
            <FadeIn delay={450}>
              <a
                href="#pitch"
                className="inline-block bg-white text-[#233F88] text-base px-10 py-3 hover:bg-white/90 transition-colors"
              >
                Share your pitch
              </a>
            </FadeIn>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute right-0 bottom-0 md:w-[60%] lg:w-[55%] h-[70%] hidden md:block">
          <Image
            src="https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/hero%20image.png"
            alt="City skyline"
            fill
            className="object-contain object-right-bottom"
            sizes="(max-width: 768px) 0vw, 65vw"
            quality={50}
            priority
          />
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section id="about" className="bg-background py-12 md:py-16 lg:py-20 px-6 md:px-16 lg:px-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-navy-dark/30">
          {[
            { value: "Top 5", label: "Ranked IB in India", fadeOnly: true },
            { value: "70%+", label: "Deal Closure Rate", fadeOnly: true },
            { value: "$600 Mn+", label: "Transaction Value", fadeOnly: false },
            { value: "90+", label: "Transactions", fadeOnly: false },
          ].map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} fadeOnly={stat.fadeOnly} />
          ))}
        </div>
      </section>

      {/* ===== ENDURING PARTNERSHIPS ===== */}
      <section id="transactions" className="bg-white py-16 md:py-20 lg:py-24 px-6 md:px-16 lg:px-28 overflow-hidden">
        <FadeIn>
          <h2 className="font-serif text-navy-dark text-3xl md:text-4xl lg:text-[50px] lg:leading-[53px] mb-10 md:mb-14">
            Enduring Partnerships
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FadeIn delay={0}>
            <PartnershipCard
              name="Dehaat"
              subtitle="Series A, B, C, D, E and 5 acquisitions"
              image="https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Dehaat.png"
            />
          </FadeIn>
          <FadeIn delay={150}>
            <PartnershipCard
              name="FruBon"
              subtitle="Seed, Pre-Series A, Series A"
              image="https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Frubon.png"
            />
          </FadeIn>
          <FadeIn delay={300}>
            <PartnershipCard
              name="Pickrr"
              subtitle="Series A, B"
              image="https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/Pickrr.png"
            />
          </FadeIn>
        </div>
        <FadeIn>
          <a
            href="/transactions"
            className="inline-block font-medium text-navy-dark text-base underline mt-8 md:mt-12 hover:text-navy transition-colors"
          >
            View our all transactions
          </a>
        </FadeIn>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <WhyChooseSection />

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section id="insights" className="bg-background py-16 md:py-20 lg:py-24 px-6 md:px-16 lg:px-28">
        <FadeInFromRight>
          <h2 className="font-serif text-navy-dark text-3xl md:text-4xl lg:text-[50px] lg:leading-[53px] mb-10 md:mb-14">
            Testimonials
          </h2>
        </FadeInFromRight>
        <FadeInFromRight>
          <TestimonialsCarousel />
        </FadeInFromRight>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
