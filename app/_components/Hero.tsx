export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16">
      <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
        AI Instructor &amp; Developer
      </p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
        Yusuke
      </h1>
      <p className="max-w-xl text-zinc-400 text-lg leading-relaxed mb-10">
        中小企業向けAI研修講師・AIディレクション受託開発・AI情報発信。
        <br />
        ChatGPT / Gemini / Copilot / Claude を使い倒して業務を変える。
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
        >
          実績を見る
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
        >
          お問い合わせ
        </a>
      </div>
      <div className="mt-20 animate-bounce text-zinc-600">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
