"use client";

import { useState, useCallback } from "react";
import TransactionCard, { Transaction } from "../components/TransactionCard";
import TransactionFilters from "../components/TransactionFilters";
import FadeIn from "../components/FadeIn";

export default function TransactionsGrid({ transactions }: { transactions: Transaction[] }) {
  const [filtered, setFiltered] = useState<Transaction[]>(transactions);

  const handleFilter = useCallback(
    (filters: { years: string[]; sectors: string[]; series: string[] }) => {
      let result = transactions;

      if (filters.years.length > 0) {
        result = result.filter((t) => filters.years.some((y) => t.year.includes(y)));
      }
      if (filters.sectors.length > 0) {
        result = result.filter((t) => filters.sectors.includes(t.sector));
      }
      if (filters.series.length > 0) {
        result = result.filter((t) => filters.series.includes(t.round));
      }

      setFiltered(result);
    },
    [transactions]
  );

  return (
    <>
      {/* Filters */}
      <div className="px-6 md:px-16 lg:px-28 pb-8 md:pb-10">
        <TransactionFilters transactions={transactions} onFilter={handleFilter} />
      </div>

      {/* Cards Grid */}
      <div className="px-6 md:px-16 lg:px-28 pb-16 md:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t, i) => (
            <FadeIn key={i} delay={(i % 3) * 100} className="h-full">
              <TransactionCard data={t} />
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-white/60 text-center text-base py-12">
            No transactions match the selected filters.
          </p>
        )}
      </div>
    </>
  );
}
