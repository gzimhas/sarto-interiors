import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // The OG image route reads a static TTF at runtime; make sure it ships with the function.
  outputFileTracingIncludes: { "/[locale]/opengraph-image": ["./src/app/fonts/**"] },
  images: {
    formats: ["image/avif", "image/webp"],
    // Reference photographs served from the group CMS (hotel conversion, old-town house).
    remotePatterns: [{ protocol: "https", hostname: "cms.smzh.ch", pathname: "/uploads/**" }],
  },
  async redirects() {
    // German (Swiss) is the default language.
    return [{ source: "/", destination: "/de", permanent: false }];
  },
};

export default nextConfig;
