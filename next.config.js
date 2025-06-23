/** @type {import('next').NextConfig} */
const BASE_PATH = '/hayato-kogyo';

const nextConfig = {
  output: 'export',      // next export モード
  basePath: BASE_PATH,   // ページのルート
  assetPrefix: BASE_PATH + '/', // 静的アセットのプレフィックス（末尾スラッシュ付き）
  trailingSlash: true,   // 全てのルートをディレクトリ構造にする
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  serverExternalPackages: [],
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
};

module.exports = nextConfig;
