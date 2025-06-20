import type { Metadata } from 'next';
import './globals.css';
import './water-effects.css';
import './navigation.css';

export const metadata: Metadata = {
  title: '隼仁工業 | 水道工事・設備工事のプロフェッショナル',
  description: '長野県を中心に水道工事・ボイラー交換・給排水設備工事などを手がける隼仁工業の公式サイトです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans text-gray-800 bg-white">
        {children}
      </body>
    </html>
  );
}
