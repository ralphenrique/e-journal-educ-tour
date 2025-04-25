import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ['mdx','ts','tsx'],
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    viewTransition: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);