import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qxjcpjrbfbjxwtjd.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
