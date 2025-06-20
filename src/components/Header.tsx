'use client';

import Link from 'next/link';
import Image from 'next/image';
import useSmoothScroll from '../hooks/useSmoothScroll';

export default function Header() {
  // スムーススクロール機能を適用
  useSmoothScroll();
  
  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="flex justify-between items-center w-full px-4">
        <div className="flex items-center ml-4">
          <Link href="/" className="flex items-center group">
            <div className="w-28 h-28 overflow-hidden transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <Image src="/images/logo.png" alt="隼仁工業ロゴ" width={112} height={112} style={{ objectFit: 'contain' }} />
            </div>
            <span className="text-primary-dark text-2xl font-bold ml-3">隼仁工業</span>
          </Link>
        </div>
        <nav className="pr-4">
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className="text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary-500 pb-1 active:text-primary-700"
                data-active={typeof window !== 'undefined' && window.location.pathname === '/' && window.location.hash === ''}
              >
                トップ
              </Link>
            </li>
            <li>
              <Link 
                href="/#services" 
                className="text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary-500 pb-1 active:text-primary-700"
                data-active={typeof window !== 'undefined' && window.location.hash === '#services'}
              >
                業務内容
              </Link>
            </li>
            <li>
              <Link 
                href="/#projects" 
                className="text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary-500 pb-1 active:text-primary-700"
                data-active={typeof window !== 'undefined' && window.location.hash === '#projects'}
              >
                実績紹介
              </Link>
            </li>
            <li>
              <Link 
                href="/#contact" 
                className="text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary-500 pb-1 active:text-primary-700"
                data-active={typeof window !== 'undefined' && window.location.hash === '#contact'}
              >
                お問い合わせ
              </Link>
            </li>
            <li>
              <Link 
                href="/#testimonials" 
                className="text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary-500 pb-1 active:text-primary-700"
                data-active={typeof window !== 'undefined' && window.location.hash === '#testimonials'}
              >
                お客様の声
              </Link>
            </li>
            <li>
              <Link 
                href="/company" 
                className="text-gray-600 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary-500 pb-1 active:text-primary-700"
                data-active={typeof window !== 'undefined' && window.location.pathname === '/company'}
              >
                会社概要
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
