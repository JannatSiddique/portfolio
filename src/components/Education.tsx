export default function Education() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          Education
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Academic Background
        </h2>
      </div>
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 card-hover dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/50">
              <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Bachelor of Software Engineering
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                Jinnah University for Women
              </p>
            </div>
          </div>
          <span className="mt-3 inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 sm:mt-0 dark:bg-indigo-950/50 dark:text-indigo-300">
            Jan 2021 – Dec 2024
          </span>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-100 pt-6 dark:border-zinc-800">
          {["OOP", "DBMS", "Algorithms", "Operating Systems", "Data Structures", "Software Engineering", "Web Engineering"].map((course) => (
            <span key={course} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
