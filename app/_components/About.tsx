export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            AIを武器に、<br />現場を変える
          </h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              中小企業のAI活用支援を専門とし、ChatGPT研修から業務フロー改善まで一貫してサポート。
              「知っている」から「使いこなせる」への橋渡しを担います。
            </p>
            <p>
              AIディレクションによる受託開発では、設計指示・コードレビューを担当。
              エンジニアとビジネスサイドの橋渡し役として、プロダクトをゼロから形にします。
            </p>
            <p>
              XとFacebookで日々AI情報を発信。体験談ベースで「つまづき→発見」をそのまま伝えることで、
              現場で使えるリアルなノウハウを届けています。
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "研修実績", value: "50+", unit: "社" },
            { label: "受託開発", value: "20+", unit: "件" },
            { label: "SNSフォロワー", value: "5K+", unit: "人" },
            { label: "対応AIツール", value: "4", unit: "種" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-white">
                {item.value}
                <span className="text-lg text-indigo-400 ml-1">{item.unit}</span>
              </p>
              <p className="text-zinc-500 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
