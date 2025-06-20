/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ これOK！
  basePath: '/hayato-kogyo', // ✅ 追加！
  assetPrefix: '/hayato-kogyo/', // ✅ 追加！

  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  serverExternalPackages: [],
};

module.exports = nextConfig;
