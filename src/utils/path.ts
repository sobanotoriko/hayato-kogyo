/**
 * Next.jsのbasePath設定値を取得します
 * 環境変数NEXT_PUBLIC_BASE_PATHを使用します
 */
export function getBasePath(): string {
  // NEXT_PUBLIC_ プレフィックス付きはクライアント側でも読める
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
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
