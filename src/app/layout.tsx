import type { Metadata } from 'next';
import './globals.css';
import './water-effects.css';
import './navigation.css';

export const metadata: Metadata = {
  title: '業務用エアコン工事・建築金物加工の隼仁工業｜白馬村・全国対応',
  description: '白馬村の隼仁工業は、業務用エアコン工事、機械室・ボイラー交換工事、鉄骨階段・手すり・フェンス施工、建築金物加工など建設業を全国対応で承ります。安心・安全な設備工事のプロフェッショナル。',
  alternates: {
    canonical: 'https://sobanotoriko.github.io/hayato-kogyo/'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="font-sans text-gray-800 bg-white">
        {children}
      </body>
    </html>
  );
}
