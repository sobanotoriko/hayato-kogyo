/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hayato-kogyo',
  assetPrefix: '/hayato-kogyo/',
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  serverExternalPackages: [],
  publicRuntimeConfig: {
    basePath: '/hayato-kogyo'
  },
};

module.exports = nextConfig;
