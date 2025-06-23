/** @type {import('next').NextConfig} */
const basePath = '/hayato-kogyo';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath + '/',
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  serverExternalPackages: [],
  publicRuntimeConfig: {
    basePath
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
