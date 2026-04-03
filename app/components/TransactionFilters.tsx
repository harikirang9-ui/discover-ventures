"use client";

import { useState, useRef, useEffect } from "react";

interface FilterProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

function FilterDropdown({ label, options, selected, onChange }: FilterProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
    setOpen(false);
  };

  const isActive = selected.length > 0;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 text-base transition-colors ${
          isActive ? "text-blue-accent" : "text-white"
        }`}
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg z-20 min-w-[200px] max-h-[300px] overflow-y-auto">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => toggle(option)}
              className={`block w-full text-left px-4 py-2.5 text-base hover:bg-gray-100 transition-colors ${
                selected.includes(option) ? "text-blue-accent font-semibold" : "text-navy-dark"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TransactionFilters({
  transactions,
  onFilter,
}: {
  transactions: { sector: string; round: string; year: string }[];
  onFilter: (filters: { years: string[]; sectors: string[]; series: string[] }) => void;
}) {
  const [years, setYears] = useState<string[]>([]);
  const [sectors, setSectors] = useState<string[]>([]);
  const [series, setSeries] = useState<string[]>([]);

  const currentYear = new Date().getFullYear();
  const uniqueYears = Array.from({ length: currentYear - 2015 + 1 }, (_, i) => String(currentYear - i));
  const uniqueSectors = [...new Set(transactions.map((t) => t.sector))].sort();
  const uniqueSeries = [
    "Maiden institutional",
    "Series A",
    "Series B",
    "Series C",
    "Series D",
    "Pre Series A",
    "Seed round",
    "Strategic investment",
  ];

  useEffect(() => {
    onFilter({ years, sectors, series });
  }, [years, sectors, series, onFilter]);

  const allSelected = [
    ...years.map((v) => ({ label: v, remove: () => setYears(years.filter((y) => y !== v)) })),
    ...sectors.map((v) => ({ label: v, remove: () => setSectors(sectors.filter((s) => s !== v)) })),
    ...series.map((v) => ({ label: v, remove: () => setSeries(series.filter((s) => s !== v)) })),
  ];

  const clearAll = () => {
    setYears([]);
    setSectors([]);
    setSeries([]);
  };

  return (
    <div>
      <div className="flex items-center gap-8 md:gap-12">
        <FilterDropdown label="Year" options={uniqueYears} selected={years} onChange={setYears} />
        <FilterDropdown label="Sector" options={uniqueSectors} selected={sectors} onChange={setSectors} />
        <FilterDropdown label="Series" options={uniqueSeries} selected={series} onChange={setSeries} />
      </div>

      {allSelected.length > 0 && (
        <div className="flex items-center flex-wrap gap-2 mt-4">
          {allSelected.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-1.5 bg-white/10 text-white text-base px-3 py-1.5 rounded-full"
            >
              {item.label}
              <button onClick={item.remove} className="hover:text-red-400 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}
          <button
            onClick={clearAll}
            className="text-red-400 text-base font-semibold hover:text-red-300 transition-colors ml-2"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}
