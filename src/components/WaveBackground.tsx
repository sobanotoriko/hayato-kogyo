'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import getConfig from 'next/config';

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
  // next.config.jsからbasePath情報を取得
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig?.basePath || '';

  // SVG画像のパスを選択（basePathを追加）
  const getSvgPath = () => {
    switch (waveType) {
      case 'left': return `${basePath}/images/bg-left.svg`;
      case 'right': return `${basePath}/images/bg-right.svg`;
      case 'wave': default: return `${basePath}/images/wave.svg`;
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
