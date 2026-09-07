import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 82, 88, 92],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
