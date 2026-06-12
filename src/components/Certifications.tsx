export default function Certifications() {
  const certs = [
    {
      title: "AWS Academy Cloud Foundations",
      description: "AWS global infrastructure, EC2, S3, VPC, security, and pricing models.",
      url: "https://www.credly.com/go/Ic8oGkOu",
    },
    {
      title: "Quality Assurance Fundamentals",
      description: "QA principles, test planning, test case design, defect lifecycle, TestRail.",
      url: "https://10pearlsuniversity.org/view-certificate/?cid=10PUC-31856360c1dbdbdb245b14b441e8ed20b67f420c6a9b2cab433044417",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
          Credentials
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Certifications
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {certs.map((cert) => (
          <a
            key={cert.title}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-zinc-200 bg-white p-6 card-hover dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/50">
              <svg className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-zinc-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 transition-colors">
              {cert.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {cert.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
