import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ['rickandmortyapi.com'],
  },
};

export default nextConfig;
