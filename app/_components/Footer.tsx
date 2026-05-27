export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 text-sm">
        <p>© 2026 Yusuke. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            X
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-400 transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
