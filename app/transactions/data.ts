import { Transaction } from "../components/TransactionCard";

/**
 * Transaction data — edit this array to add/remove transactions.
 *
 * For bulk upload:
 * 1. Prepare your data as JSON matching the Transaction shape below
 * 2. Paste the entries into this array
 * 3. For logos, upload images to your Vercel Blob storage and use the URL
 *    e.g. "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/transactions/COMPANY.png"
 *
 * Each entry:
 * {
 *   company: "Company Name",
 *   sector: "Consumer",
 *   round: "Series A",
 *   investors: "Investor A and Investor B",
 *   year: "Dec 2025",
 *   amount: "USD 7 mn",
 *   logo: "https://...png"   // optional — leave out for placeholder
 * }
 */
export const transactions: Transaction[] = [
  {
    company: "Trufrost & Butler",
    sector: "Consumer",
    round: "Maiden Institutional",
    investors: "IvyCap Ventures and Dexter Ventures",
    year: "Dec 2025",
    amount: "USD 7 mn",
    logo: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/transactions/MOM.png",
  },
  {
    company: "Trufrost & Butler",
    sector: "Consumer",
    round: "Maiden Institutional",
    investors: "IvyCap Ventures and Dexter Ventures",
    year: "Dec 2025",
    amount: "USD 7 mn",
    logo: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/transactions/Trufrost%20%26%20Butler%20.webp",
  },
  {
    company: "Trufrost & Butler",
    sector: "Consumer",
    round: "Maiden Institutional",
    investors: "IvyCap Ventures and Dexter Ventures",
    year: "Dec 2025",
    amount: "USD 7 mn",
  },
  {
    company: "Trufrost & Butler",
    sector: "Consumer",
    round: "Series A",
    investors: "IvyCap Ventures and Dexter Ventures",
    year: "Dec 2024",
    amount: "USD 10 mn",
  },
  {
    company: "Trufrost & Butler",
    sector: "Healthcare",
    round: "Series B",
    investors: "IvyCap Ventures and Dexter Ventures",
    year: "Jun 2024",
    amount: "USD 15 mn",
  },
  {
    company: "Trufrost & Butler",
    sector: "Healthcare",
    round: "Series C",
    investors: "IvyCap Ventures and Dexter Ventures",
    year: "Mar 2023",
    amount: "USD 25 mn",
  },
];
