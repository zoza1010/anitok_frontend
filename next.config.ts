import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
    prependData: `@use "variables" as *;`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shikimori.one',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    // @ts-ignore
    globalNotFound: true,
  },
};

export default nextConfig;
