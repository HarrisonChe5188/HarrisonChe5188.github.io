"use client";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} Harrison Che</div>
          <div className="flex gap-6">
            <a
              href="https://github.com/yourusername"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your-email@example.com"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
