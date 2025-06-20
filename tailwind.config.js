/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRDで指定されている水色・白・青系統のカラーパレット
        primary: {
          light: '#E3F2FD', // 明るい水色
          DEFAULT: '#2196F3', // 標準的な水色
          dark: '#1565C0', // 濃い青色
        },
        secondary: {
          light: '#F5F5F5', // 明るい灰色（ほぼ白）
          DEFAULT: '#ECEFF1', // 標準的な灰色
          dark: '#455A64', // 濃い灰色
        },
      },
      fontFamily: {
        // 読みやすいシンプルなフォント
        sans: [
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Noto Sans JP"',
          'sans-serif',
        ],
      },
      spacing: {
        // 余白の設定
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      animation: {
        // フェードインアニメーション
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
