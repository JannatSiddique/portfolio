export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <a href="#" className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
            Jannat<span className="text-indigo-600">.</span>
          </a>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
            Associate Software Engineer
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-500">
          <a href="mailto:jannatsiddique420@gmail.com" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Email</a>
          <a href="https://linkedin.com/in/jannatsiddique" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">LinkedIn</a>
          <a href="https://github.com/jannatsiddique" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GitHub</a>
          <a href="https://www.credly.com/go/Ic8oGkOu" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Credly</a>
        </div>
      </div>
      <div className="border-t border-zinc-100 py-4 text-center text-xs text-zinc-400 dark:border-zinc-800/50 dark:text-zinc-600">
        &copy; {new Date().getFullYear()} Jannat Siddique. All rights reserved.
      </div>
    </footer>
  );
}
