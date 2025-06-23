import getConfig from 'next/config';

/**
 * Next.jsのbasePath設定値を取得します
 */
export function getBasePath() {
  const { publicRuntimeConfig } = getConfig();
  return publicRuntimeConfig?.basePath || '';
}

/**
 * 画像やその他静的ファイル用のパスを生成します
 * basePath設定を考慮した正しいパスを返します
 */
export function getImagePath(path: string) {
  const basePath = getBasePath();
  
  // パスが既にbasePathで始まっている場合はそのまま返す
  if (path.startsWith(basePath)) {
    return path;
  }
  
  // パスの先頭が / で始まる場合
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  
  // それ以外の場合
  return `${basePath}/${path}`;
}
