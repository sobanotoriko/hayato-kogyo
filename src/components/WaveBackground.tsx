'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { getImagePath } from '../utils/path';

interface WaveBackgroundProps {
  children: ReactNode;
  className?: string;
  waveType?: 'left' | 'right' | 'wave';
  bgColor?: string;
  id?: string;
}

export default function WaveBackground({ 
  children, 
  className = '', 
  waveType = 'wave',
  bgColor = 'bg-white',
  id
}: WaveBackgroundProps) {
  // getImagePath関数を使用してSVG画像のパスを選択
  const getSvgPath = () => {
    switch (waveType) {
      case 'left': return getImagePath('/images/bg-left.svg');
      case 'right': return getImagePath('/images/bg-right.svg');
      case 'wave': default: return getImagePath('/images/wave.svg');
    }
  };

  return (
    <section id={id} className={`relative overflow-hidden ${bgColor} ${className}`}>
      {/* 背景のSVG */}
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-none">
        <div className="absolute left-0 top-0 w-full h-full">
          <Image
            src={getSvgPath()}
            alt="背景パターン"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>
      
      {/* 実際のコンテンツ */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
