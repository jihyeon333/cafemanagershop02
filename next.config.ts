import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      $: path.resolve(__dirname, "src"), // Alias $ -> src folder
    };
    return config;
  },
};

export default nextConfig;
