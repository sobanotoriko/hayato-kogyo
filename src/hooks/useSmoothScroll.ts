'use client';

import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // ページ内リンクのクリックを処理する関数
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      // ハッシュを含み、同じページを示すURLかチェック
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      // まず、ハッシュリンクを処理
      if (href.startsWith('#') || href.includes('/#')) {
        e.preventDefault();
        
        // ハッシュ部分を取得
        let targetId = href.startsWith('#') ? href.substring(1) : href.split('#')[1];
        
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // ヘッダーの高さを考慮したスクロール位置を計算
          const headerHeight = 80; // ヘッダーの高さに合わせて調整
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          
          // スムーススクロールの実行
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // URLにハッシュを設定してアクティブなメニューを反映
          if (history.pushState) {
            history.pushState(null, '', '#' + targetId);
          } else {
            location.hash = '#' + targetId;
          }
          
          // アクティブ状態を更新
          updateActiveLinks();
          
          return;
        }
      }
    };
    
    // アクティブなリンクの状態を更新する関数
    const updateActiveLinks = () => {
      // 現在のURLから情報を取得
      const currentPath = window.location.pathname;
      const currentHash = window.location.hash;
      
      // すべてのナビゲーションリンクを取得
      const navLinks = document.querySelectorAll('nav a');
      
      // 各リンクに対してアクティブ状態を設定
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        
        let isActive = false;
        
        // トップページの場合
        if (currentPath === '/' || currentPath === '') {
          if (href === '/') {
            isActive = currentHash === '';
          } else if (href.includes('/#')) {
            isActive = href.split('#')[1] === currentHash.replace('#', '');
          }
        } 
        // 他のページの場合
        else {
          isActive = href === currentPath;
        }
        
        link.setAttribute('data-active', String(isActive));
      });
    };
    
    // スクロールイベントによるアクティブなセクションの更新
    const handleScroll = () => {
      if (window.location.pathname === '/' || window.location.pathname === '') {
        // すべてのセクションを取得
        const sections = document.querySelectorAll('section[id]');
        const headerHeight = 80;
        
        // 現在画面内に入っているセクションを特定
        let currentSectionId = '';
        sections.forEach(section => {
          const sectionTop = (section as HTMLElement).offsetTop - headerHeight - 100;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.id;
          }
        });
        
        // ハッシュを更新（ブラウザの履歴を変更せずに）
        if (currentSectionId && currentSectionId !== window.location.hash.replace('#', '')) {
          if (history.replaceState) {
            history.replaceState(null, '', currentSectionId ? '#' + currentSectionId : ' ');
          }
          
          // アクティブなリンクを更新
          updateActiveLinks();
        }
      }
    };
    
    // 初期化時にアクティブ状態を設定
    updateActiveLinks();
    
    // イベントリスナーの追加
    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', handleScroll);
    
    // クリーンアップ関数
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useSmoothScroll;
