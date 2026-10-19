import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Group project photographs served from the smzh CMS (credited on the page).
    remotePatterns: [{ protocol: "https", hostname: "cms.smzh.ch", pathname: "/uploads/**" }],
  },
  async redirects() {
    // German (Swiss) is the default language.
    return [{ source: "/", destination: "/de", permanent: false }];
  },
};

export default nextConfig;
