import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dratbz8bh/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
