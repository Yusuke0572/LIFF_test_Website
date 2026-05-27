const projects = [
  {
    tag: "研修",
    title: "製造業向けChatGPT活用研修",
    description:
      "50名規模の製造業向けにChatGPT入門から業務プロンプト設計まで一日研修を実施。参加後アンケートで満足度4.7/5.0を達成。",
    tools: ["ChatGPT", "プロンプト設計", "ワークショップ"],
  },
  {
    tag: "受託開発",
    title: "AI搭載業務管理ダッシュボード",
    description:
      "Next.js + Claude APIを使ったタスク自動サマリー機能を持つ業務管理ツールを開発。要件定義からリリースまでディレクション担当。",
    tools: ["Next.js", "Claude API", "TypeScript"],
  },
  {
    tag: "情報発信",
    title: "AI活用ノウハウのSNS発信",
    description:
      "「つまづき→発見」をテーマに、週3〜5回のペースでX・Facebookに投稿。フォロワー数5,000人超、高エンゲージメントを維持。",
    tools: ["X", "Facebook", "コンテンツ設計"],
  },
  {
    tag: "研修",
    title: "小売チェーン向けAI業務改善プログラム",
    description:
      "全国15店舗のスタッフを対象にAI活用研修を設計・実施。業務マニュアル作成時間を平均40%削減する成果を達成。",
    tools: ["ChatGPT", "Notion AI", "業務フロー設計"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3 text-center">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          実績・プロジェクト
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-500/50 transition-colors"
            >
              <div>
                <span className="text-xs font-medium text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-zinc-500 bg-zinc-800 px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
