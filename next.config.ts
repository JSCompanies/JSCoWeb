import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://jaisellers.com/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
