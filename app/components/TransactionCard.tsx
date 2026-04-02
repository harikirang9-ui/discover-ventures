export interface Transaction {
  company: string;
  sector: string;
  round: string;
  investors: string;
  year: string;
  amount: string;
  logo?: string;
}

export default function TransactionCard({ data }: { data: Transaction }) {
  return (
    <div className="relative">
      {/* White box with logo, overlapping into the SVG curved area */}
      <div className="relative z-10">
        {/* SVG curved divider */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/transactions/top.svg"
          alt=""
          className="w-full block"
        />

        {/* Logo overlay — centered inside the white SVG area */}
        <div className="absolute inset-0 flex items-start justify-center z-20" style={{ top: '10%', bottom: '30%' }}>
          <div className="flex items-center justify-center h-full">
            {data.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.logo}
                alt={data.company}
                className="max-h-[80%] max-w-[85%] object-contain"
              />
            ) : (
              <span className="text-gray-400 text-sm font-medium text-center px-4">{data.company}</span>
            )}
          </div>
        </div>
      </div>

      {/* Dark navy card — pulled up behind the SVG */}
      <div className="bg-[#05153D] -mt-8 px-7 pt-20 pb-10 space-y-6">
        {[
          { label: "Sector", value: data.sector },
          { label: "Round", value: data.round },
          { label: "Investors", value: data.investors },
          { label: "Year", value: data.year },
          { label: "Amount", value: data.amount },
        ].map((item) => (
          <div key={item.label}>
            <p className="text-[#1BAFF5] font-semibold text-lg md:text-xl">{item.label}</p>
            <p className="text-white font-light text-lg md:text-xl">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
