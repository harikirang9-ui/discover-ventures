import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discover Ventures | Your Long-term Fundraising Partner",
  description:
    "Discover Ventures - Top ranked investment bank in India. Fundraising advisory, investor access, and a skin-in-the-game approach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/eyu5cbq.css" />
        <link rel="icon" href="https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/favicon.png" type="image/png" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
