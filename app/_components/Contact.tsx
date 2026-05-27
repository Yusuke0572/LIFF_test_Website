export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          お気軽にご相談を
        </h2>
        <p className="text-zinc-400 mb-10 leading-relaxed">
          研修のご依頼・受託開発のご相談・コラボレーションのお声がけなど、
          なんでもお気軽にどうぞ。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@example.com"
            className="px-8 py-3.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            メールで問い合わせる
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
          >
            X (Twitter) で連絡
          </a>
        </div>
      </div>
    </section>
  );
}
