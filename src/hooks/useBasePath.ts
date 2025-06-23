import { useRouter } from 'next/router';
import getConfig from 'next/config';

export function useBasePath() {
  const { publicRuntimeConfig } = getConfig();
  const basePath = publicRuntimeConfig?.basePath || '';
  
  const getImagePath = (path: string) => {
    // パスが既にbasePath付きの場合は何もしない
    if (path.startsWith(basePath)) {
      return path;
    }
    
    // パスの先頭が / で始まる場合
    if (path.startsWith('/')) {
      return `${basePath}${path}`;
    }
    
    // それ以外の場合
    return `${basePath}/${path}`;
  };
  
  return { getImagePath };
}
