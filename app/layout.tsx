import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LiffProvider from "./_components/LiffProvider"; // LIFF SDK初期化のためのプロバイダー

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yusuke | AI Instructor & Developer",
  description:
    "AI研修講師・AIディレクション受託開発・AI情報発信。ChatGPT・Gemini・Copilot・Claudeを活用した業務改善のプロフェッショナル。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {/* LIFFProviderでラップしてアプリ全体でLIFF SDKを使えるようにする */}
        <LiffProvider>{children}</LiffProvider>
      </body>
    </html>
  );
}
