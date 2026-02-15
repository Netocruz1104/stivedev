import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_PAGES === "true" ? "/stivedev" : undefined,
  assetPrefix: process.env.GITHUB_PAGES === "true" ? "/stivedev/" : undefined,
};

export default nextConfig;
