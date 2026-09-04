import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghchart.rshah.org"
      },
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app"
      },
      {
        protocol: "https",
        hostname: "streak-stats.demolab.com"
      }
    ]
  }
};

export default nextConfig;
