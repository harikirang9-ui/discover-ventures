import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import TransactionsGrid from "./TransactionsGrid";
import { transactions } from "./data";

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
