/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hayato-kogyo',
  assetPrefix: '/hayato-kogyo/',

  // ← これを追加！
  trailingSlash: true,

  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  serverExternalPackages: [],
};

module.exports = nextConfig;
