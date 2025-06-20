/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ 静的出力設定 ← これ最上段でOK！
  output: 'export',

  // 画像最適化の設定
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },

  // サーバーコンポーネントの最適化
  serverExternalPackages: [],
};

module.exports = nextConfig;
