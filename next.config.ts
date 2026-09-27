import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS ? "/yancietroy-portfolio" : "";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
