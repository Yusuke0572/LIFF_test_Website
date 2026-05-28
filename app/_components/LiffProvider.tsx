'use client'; // LIFFはブラウザ専用のためクライアントコンポーネントとして定義

import { useEffect } from 'react';

// LIFF SDKを初期化するプロバイダー。layout.tsxでアプリ全体をラップして使用する
export default function LiffProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initLiff = async () => {
      // SSRを避けるため動的インポートで読み込む
      const liff = (await import('@line/liff')).default;
      // LIFF IDは.env.localおよびVercelの環境変数から取得
      await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! });
    };
    initLiff().catch(console.error);
  }, []);

  return <>{children}</>;
}
