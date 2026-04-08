import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const siteUrl = "https://www.discoverventures.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Discover Ventures | Your Long-term Fundraising Partner",
    template: "%s | Discover Ventures",
  },
  description:
    "Discover Ventures is a top-ranked investment bank in India offering fundraising advisory, investor access, and a skin-in-the-game approach for startups and growth-stage companies.",
  keywords: [
    "fundraising advisory",
    "investment bank India",
    "startup fundraising",
    "venture capital India",
    "investor access",
    "Series A funding",
    "growth capital",
    "Discover Ventures",
    "Dexter Capital",
  ],
  authors: [{ name: "Discover Ventures" }],
  creator: "Discover Ventures",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Discover Ventures",
    title: "Discover Ventures | Your Long-term Fundraising Partner",
    description:
      "Top-ranked investment bank in India. Fundraising advisory, investor access, and a skin-in-the-game approach for startups and growth-stage companies.",
    images: [
      {
        url: "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/hero%20image.png",
        width: 1200,
        height: 630,
        alt: "Discover Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Ventures | Your Long-term Fundraising Partner",
    description:
      "Top-ranked investment bank in India. Fundraising advisory, investor access, and a skin-in-the-game approach.",
    images: [
      "https://qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com/home%20page/hero%20image.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
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
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
