import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "productimages.hepsiburada.net",
      },
    ],
  },
};

export default nextConfig;
