"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Header from '../components/Header';
import WaveBackground from '../components/WaveBackground';
import '../app/water-effects.css';
import { getImagePath } from '../utils/path';

export default function Home() {
  // スライダー用の状態管理
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // アコーディオン用の状態管理（上段・下段でグループ化）
  const [openAccordionGroups, setOpenAccordionGroups] = useState<boolean[]>([false, false]);
  
  // アコーディオンの開閉切り替え関数（0=上段、1=下段）
  const toggleAccordionGroup = (groupIndex: number) => {
    const newOpenAccordionGroups = [...openAccordionGroups];
    newOpenAccordionGroups[groupIndex] = !newOpenAccordionGroups[groupIndex];
    setOpenAccordionGroups(newOpenAccordionGroups);
  };

  // カードのグループインデックスを計算する関数（0-3が上段、4-7が下段）
  const getCardGroupIndex = (cardIndex: number) => {
    return cardIndex < 4 ? 0 : 1;
  };

  // 特定のカードが開いているかどうかを確認する関数
  const isCardOpen = (cardIndex: number) => {
    return openAccordionGroups[getCardGroupIndex(cardIndex)];
  };
  
  // スライダー用の画像配列
  const sliderImages = [
    { 
      src: getImagePath('/images/slide1.jpg'), 
      alt: '業務用エアコン工事・ボイラー交換工事', 
      caption: '業務用エアコン工事・ボイラー交換工事は\n<span class="font-bold text-lg">隼仁工業</span>へ' 
    },
    { 
      src: getImagePath('/images/slide2.jpg'), 
      alt: '鉄骨階段・手すり・フェンス施工', 
      caption: '長野県白馬村を拠点に、鉄骨階段・手すり施工や建築金物加工も全国対応' 
    },
    { 
      src: getImagePath('/images/slide3.jpg'), 
      alt: '建設業の設備工事', 
      caption: '機械室・ボイラー交換工事から設備メンテナンスまで' 
    },
  ];
  
  // 自動スライド切り替え
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);
  
  // スライド切り替え関数
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 事業内容のカード情報
  const serviceCards = [
    {
      title: '給排水設備工事',
      description: '住宅・宿泊施設の給排水設備の新設、改修、修理を行います。水回りのあらゆるトラブルに対応いたします。',
      icon: '💧',
    },
    {
      title: '各種配管工事',
      description: '上下水道、給湯、ガス配管など、各種配管工事に対応しております。確かな技術と豊富な経験で安心施工いたします。',
      icon: '🔧',
    },
    {
      title: '業務用エアコン設置',
      description: 'オフィス・店舗・ホテル向けの業務用エアコンの設置工事を承ります。※修理は行っておりません。',
      icon: '❄️',
    },
    {
      title: 'ホテル旅館ボイラー交換',
      description: '宿泊施設向けの大型ボイラー交換を専門に行います。省エネ機種への更新で運転コスト削減にも貢献します。',
      icon: '🏨',
    },
    {
      title: '給湯器交換',
      description: '一般家庭の給湯器の交換工事を承ります。故障時の緊急対応も可能です。',
      icon: '🔥',
    },
    {
      title: 'エコキュート設置・交換',
      description: 'ボイラーからエコキュートへの交換、またはその逆の工事も対応。最適な熱源をご提案します。',
      icon: '♻️',
    },
    {
      title: 'トイレ交換工事',
      description: '最新の節水型・洗浄機能付きトイレへの交換工事を行います。スペースに合わせた提案も可能です。',
      icon: '🚽',
    },
    {
      title: 'ユニットバス交換',
      description: '古くなったユニットバスを最新の快適なバスルームに交換いたします。防水・断熱性能も向上します。',
      icon: '🛁',
    },
  ];

  // 施工事例の情報
  const projectItems = [
    {
      title: '新節床下土間配管工事の2階への排水配管工事の土間部分',
      description: '床下空間を活かし、適切な勾配と振動・音対策を行いながら排水性能と耐久性の両立を図っています。<br/>建物全体の排水バランスに関わる重要な工程として、精度と安全性を最優先に施工しました。',
      image: getImagePath('/images/project1.jpg'),
    },
    {
      title: '新節床下土間配管工事の給水給湯排水',
      description: '設計図に基づいて正確にルートを確保し、基礎工事との干渉を避けつつ、将来的なメンテナンス性も考慮した施工を実施しています。<br/>見えない部分だからこそ丁寧に仕上げることで、安心して長く暑らせる住まいづくりを支えています。',
      image: getImagePath('/images/project2.jpg'),
    },
    {
      title: '業務用エアコン天カセタイプ取り付け工事',
      description: '室内の美観を損なわないよう天井内に本体を設置し、配管・電源・ドレン処理まで一括で対応。<br/>空調効率や風向きまで考慮した設置位置を選定し、快適で省エネな空間づくりに貢献しています。',
      image: getImagePath('/images/project3.jpg'),
    },
  ];

  return (
    <main className="min-h-screen">
      {/* ヘッダーナビゲーション */}
      <Header />

      {/* メインビジュアルスライダー */}
      <section className="relative h-screen overflow-hidden">
        {/* スライド画像 */}
        {sliderImages.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* 水のオーバーレイ効果を追加 */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/60"></div>
          </div>
        ))}
          
        {/* 波のアニメーションを追加 */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-600/30 to-transparent z-10">
          <div className="wave-effect"></div>
          <div className="wave-effect" style={{ animationDelay: '1.5s', opacity: 0.6 }}></div>
        </div>
        
        {/* コンテンツ表示 */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-2xl inline-block mx-auto water-card shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in text-white">
                業務用エアコン工事・ボイラー交換工事は<br />隼仁工業
              </h1>
              <p className="text-xl md:text-2xl mb-8 fade-in text-white">
                {sliderImages[currentSlide].caption}
              </p>
              <Link href="/#contact" className="bg-gradient-to-r from-blue-500 to-primary-600 hover:from-blue-600 hover:to-primary-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 fade-in inline-flex items-center shadow-lg hover:shadow-xl hover:scale-105 shimmer-button">
                <span className="mr-2">お問い合わせをする</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* スライダーインジケーター */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4">
            {sliderImages.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-4 w-4 rounded-full transition-all duration-300 border border-white ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/30'}`}
                aria-label={`スライド ${index + 1} に移動`}
              />
            ))}
          </div>
          
          {/* スライダーコントロールボタン */}
          <button 
            onClick={() => goToSlide((currentSlide - 1 + sliderImages.length) % sliderImages.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 z-30"
            aria-label="前のスライドへ"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => goToSlide((currentSlide + 1) % sliderImages.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 z-30"
            aria-label="次のスライドへ"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* 事業内容セクション */}
      <WaveBackground id="services" className="py-16 water-ripple" waveType="right" bgColor="bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="bg-white/95 rounded-xl py-12 px-4 shadow-md">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">事業内容</h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">長野県白馬村を拠点に、業務用エアコン工事、鉄骨階段、手すり、建築金物加工まで全国対応で承ります</p>
            <div className="water-divider"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {serviceCards.map((card, index) => (
                <div key={index} className="water-card bg-white fade-in rounded-lg shadow-md overflow-hidden accordion-item">
                  {/* アコーディオンヘッダー */}
                  <button 
                    onClick={() => toggleAccordionGroup(getCardGroupIndex(index))} 
                    className="w-full flex items-center justify-between p-4 text-left bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 transition-all duration-300"
                    aria-expanded={isCardOpen(index)}
                    aria-controls={`accordion-content-${index}`}
                  >
                    <div className="flex items-center">
                      <div className="text-2xl text-black mr-2">{card.icon}</div>
                      <h3 className="text-base font-bold text-black">{card.title}</h3>
                    </div>
                    <div className="text-blue-500">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 transform transition-transform duration-300 ${isCardOpen(index) ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {/* アコーディオンコンテンツ */}
                  <div 
                    id={`accordion-content-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isCardOpen(index) ? 'max-h-36' : 'max-h-0'}`}
                  >
                    <div className="p-4 pt-3 border-t border-blue-100 bg-white flex items-center justify-center min-h-[80px]">
                      <p className="text-gray-700 text-sm">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WaveBackground>

      {/* 施工実績セクション */}
      <WaveBackground id="projects" className="py-24 water-ripple" waveType="left" bgColor="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="bg-white/95 rounded-xl py-12 px-4 shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">業務用エアコン工事・金物加工の施工実績</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">全国対応の設備工事、鉄骨階段・手すり施工、白馬村・長野県での実績多数</p>
            <div className="water-divider"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center mt-10">
              {projectItems.map((project, index) => (
                <div key={index} className="water-card overflow-hidden rounded-xl shadow-lg fade-in bg-white hover:scale-105 transition-all duration-500">
                  <div className="relative h-64">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 text-center text-black">{project.title}</h3>
                    <p className="text-gray-600 text-center" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WaveBackground>

      {/* お問い合わせセクション */}
      <WaveBackground id="contact" className="py-0" waveType="wave" bgColor="bg-white">
        <ContactSection />
      </WaveBackground>
      
      {/* お客様の声セクション */}
      <WaveBackground id="testimonials" className="py-0" waveType="right" bgColor="bg-gray-50">
        <TestimonialsSection />
      </WaveBackground>

      {/* 会社概要セクション */}
      <WaveBackground id="company" className="py-24 pt-56 water-ripple" waveType="right" bgColor="bg-gradient-to-b from-white to-blue-50">
        <div className="water-section content-centered">
          <div className="max-w-3xl mx-auto water-card bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-4 text-primary-dark">会社概要</h2>
            <p className="text-center text-gray-700 mb-4 max-w-2xl mx-auto">隼仁工業は長野県を中心に高品質な水道工事・設備工事を提供しています</p>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">地域の皆様に支えられて、40年の実績</p>
            <div className="water-divider"></div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-6 text-center text-primary-dark border-b-2 border-blue-100 pb-2">会社概要</h3>
              <table className="w-full mb-6">
                <tbody>
                  <tr className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                    <th className="py-4 text-left w-1/3 pl-4 text-primary-dark">社名</th>
                    <td className="py-4 text-gray-700">隼仁工業株式会社</td>
                  </tr>
                  <tr className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                    <th className="py-4 text-left pl-4 text-primary-dark">設立</th>
                    <td className="py-4 text-gray-700">1985年</td>
                  </tr>
                  <tr className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                    <th className="py-4 text-left pl-4 text-primary-dark">所在地</th>
                    <td className="py-4 text-gray-700">長野県松本市　　　　</td>
                  </tr>
                  <tr className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                    <th className="py-4 text-left pl-4 text-primary-dark">事業内容</th>
                    <td className="py-4 text-gray-700">水道工事、空調設備工事、給排水工事</td>
                  </tr>
                  <tr className="border-b border-blue-100 hover:bg-blue-50 transition-colors">
                    <th className="py-4 text-left pl-4 text-primary-dark">電話番号</th>
                    <td className="py-4 flex items-center text-gray-700"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg> 026-000-0000</td>
                  </tr>
                </tbody>
              </table>
            </div> 
            <div className="mt-10 text-center">
              <Link href="/company" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block hover:scale-105">
                詳細はこちら
              </Link>
            </div>
          </div>
        </div>
      </WaveBackground>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">隼仁工業株式会社</h3>
              <p>水道工事・設備工事全国対応</p>
              <p className="mt-2">長野県白馬村北城829-17</p>
              <p>TEL: 090-4859-7375</p>
              <p>FAX: 0261-85-8050</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">事業内容</h3>
              <ul>
                <li className="mb-2">給排水設備工事</li>
                <li className="mb-2">ボイラー設置・交換</li>
                <li className="mb-2">エアコン設置工事</li>
                <li className="mb-2">空調設備メンテナンス</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">リンク</h3>
              <ul>
                <li className="mb-2"><a href="#services" className="hover:text-primary-light">事業内容</a></li>
                <li className="mb-2"><a href="#projects" className="hover:text-primary-light">施工実績</a></li>
                <li className="mb-2"><a href="#company" className="hover:text-primary-light">会社概要</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© 2025 隼仁工業株式会社 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
