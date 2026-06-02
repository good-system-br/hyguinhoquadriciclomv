import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  devIndicators: false,
};

export default nextConfig;
