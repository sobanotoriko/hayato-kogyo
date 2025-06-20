/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/hayato-kogyo/',   // ← ここだけ残す
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  serverExternalPackages: [],
};

module.exports = nextConfig;
