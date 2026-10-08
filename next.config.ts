import type { NextConfig } from "next";

// Served from the root of yancietroy.github.io, so no basePath.
const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
