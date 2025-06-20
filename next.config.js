/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hayato-kogyo',        // ← 追加①
  assetPrefix: '/hayato-kogyo/',    // ← 追加②
  trailingSlash: true,              // ← 追加③
  images: {
    domains: [],
    formats: ['image/avif','image/webp'],
  },
  serverExternalPackages: [],
};

module.exports = nextConfig;
