const categories = [
  {
    title: "AI ツール",
    items: ["ChatGPT", "Claude", "Gemini", "GitHub Copilot", "Cursor", "Notion AI"],
  },
  {
    title: "研修・教育",
    items: ["プロンプトエンジニアリング", "業務フロー設計", "ワークショップ設計", "資料作成"],
  },
  {
    title: "開発・ディレクション",
    items: ["Next.js", "TypeScript", "React", "AIディレクション", "コードレビュー", "要件定義"],
  },
  {
    title: "情報発信",
    items: ["X (Twitter)", "Facebook", "コンテンツ設計", "体験談ライティング"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3 text-center">
          Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          できること
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              <h3 className="text-white font-semibold mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
