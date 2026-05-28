'use client'; // LIFFはブラウザ専用のためクライアントコンポーネントとして定義

import { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

// LIFF SDKを初期化し、訪問ログをSupabaseに記録するプロバイダー
export default function LiffProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const initLiff = async () => {
      // SSRを避けるため動的インポートで読み込む
      const liff = (await import('@line/liff')).default;
      // LIFF IDは.env.localおよびVercelの環境変数から取得
      await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! });

      // LINE内で開いている場合のみプロフィールを取得してログを記録
      if (supabase && liff.isInClient() && liff.isLoggedIn()) {
        const profile = await liff.getProfile();
        await supabase.from('liff_visits').insert({
          user_id: profile.userId,
          display_name: profile.displayName,
        });
      }
    };
    initLiff().catch(console.error);
  }, []);

  return <>{children}</>;
}
