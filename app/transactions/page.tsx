import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import TransactionsGrid from "./TransactionsGrid";
import { transactions } from "./data";

export const metadata: Metadata = {
  title: "Transactions",
  description:
    "Explore 90+ successful fundraising transactions worth $600Mn+ completed by Discover Ventures across sectors including agritech, logistics, fintech, and more.",
  alternates: {
    canonical: "https://www.discoverventures.in/transactions",
  },
  openGraph: {
    title: "Transactions | Discover Ventures",
    description:
      "Explore 90+ successful fundraising transactions worth $600Mn+ completed by Discover Ventures.",
    url: "https://www.discoverventures.in/transactions",
  },
};

export default function TransactionsPage() {
  return (
    <div className="bg-navy min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <section className="bg-navy">
        <Navbar active="transactions" />
      </section>

      {/* Page Heading */}
      <div className="px-6 md:px-16 lg:px-28 pt-2 md:pt-3 lg:pt-4 pb-6 md:pb-8">
        <FadeIn>
          <h1 className="font-serif text-white text-3xl md:text-4xl lg:text-[50px] lg:leading-[53px]">
            Transactions
          </h1>
        </FadeIn>
      </div>

      {/* Filters + Grid */}
      <TransactionsGrid transactions={transactions} />

      {/* Footer */}
      <Footer variant="inner" />
    </div>
  );
}
