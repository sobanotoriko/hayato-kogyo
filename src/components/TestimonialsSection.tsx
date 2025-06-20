'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar?: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'T様',
      location: '長野県白馬村',
      text: '急なボイラーの故障で困っていましたが、連絡してすぐに対応していただきました。丁寧な説明と迅速な工事で、とても満足しています。今後も設備のことは隼仁工業さんにお願いするつもりです。'
    },
    {
      id: 2,
      name: 'S様',
      location: '長野県長野市',
      text: '築30年の家のトイレとユニットバスの交換工事をお願いしました。事前の打ち合わせから施工まで、非常に丁寧で安心してお任せできました。新しい設備の使い方も詳しく説明していただき感謝しています。'
    },
    {
      id: 3,
      name: 'K様',
      location: '長野県松本市',
      text: '宿泊施設の大型ボイラー交換工事をお願いしました。工期通りに完了し、新しい省エネボイラーのおかげで光熱費も削減できています。専門知識が豊富で信頼できる業者さんです。'
    },
    {
      id: 4,
      name: 'Y様',
      location: '長野県安曇野市',
      text: '2年前に給排水管の交換工事をお願いしました。その後もトラブルなく使えています。メンテナンス時の対応も良く、長く付き合っていきたい会社です。'
    },
    {
      id: 5,
      name: 'M様',
      location: '長野県小布施町',
      text: '古くなった給湯器をエコキュートに交換していただきました。電気代が大幅に節約できるようになり、快適にお湯が使えるようになりました。提案から施工まで満足のいくサービスでした。'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // 自動スライド切り替え
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);
  
  // スライドの表示数を計算（レスポンシブ対応）
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // デフォルト値
  };
  
  const [visibleCount, setVisibleCount] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    
    handleResize(); // 初期設定
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // 表示するテスティモニアルを取得
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">お客様の声</h2>
        
        <div className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(0)` }}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={testimonial.id} className="w-full sm:w-1/2 lg:w-1/3 p-3 transform transition-transform duration-500 hover:scale-105">
                  <div className="h-full bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                        {testimonial.avatar ? (
                          <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" />
                        ) : (
                          <span className="text-primary-700 text-xl font-bold">{testimonial.name[0]}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="text-gray-600 flex-grow">
                      <svg className="w-6 h-6 text-primary-300 mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.884-3.995 2.309-3.995 5.854h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.884-3.996 2.309-3.996 5.854h4v10h-10z" />
                      </svg>
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* ナビゲーションボタン */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md z-10 -ml-4 transition-all duration-300 hover:scale-110"
            onClick={() => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md z-10 -mr-4 transition-all duration-300 hover:scale-110"
            onClick={() => setActiveIndex((current) => (current + 1) % testimonials.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* インジケーター */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`mx-1 w-2 h-2 rounded-full ${index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
