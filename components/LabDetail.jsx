import Link from "next/link";

export default function LabDetail({ content }) {
  if (!content) return null;

  const { id, title, type, summary, highlights, keywords, tags, timeline, stack, outcome } = content;

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-16">
      <div className="w-11/12 lg:w-9/12">
        <div className="mb-8">
          <Link href="/labs" className="text-xs text-gray-300 hover:text-green-300">
            ← Back to Labs
          </Link>

          <div className="mt-3 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs tracking-widest text-cyber-muted">{String(type).toUpperCase()} • #{id}</p>
              <h1 className="title_text text-green-400 text-3xl lg:text-5xl mt-2">{title}</h1>
              <p className="mt-4 text-sm lg:text-base text-gray-300 max-w-3xl">{summary}</p>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-black/30 text-green-300 font-mono">
                {String(id)}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 cyber-panel border border-gray-800 bg-black/30 rounded-2xl p-6">
            <h2 className="title_text text-green-200 text-xl">Core Highlights</h2>
            <ul className="mt-4 space-y-3">
              {(highlights || []).map((h, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-gray-200">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {timeline?.length ? (
              <div className="mt-8">
                <h3 className="title_text text-green-200 text-lg">Timeline</h3>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {timeline.map((t) => (
                    <div key={t.label} className="border border-gray-800 bg-black/20 rounded-xl p-4">
                      <p className="text-xs text-cyber-muted">{t.label}</p>
                      <p className="mt-2 text-sm text-gray-200">{t.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="cyber-panel border border-gray-800 bg-black/30 rounded-2xl p-6 h-fit">
            <h2 className="title_text text-green-200 text-xl">Keywords & Stack</h2>

            <div className="mt-4">
              <p className="text-xs tracking-widest text-cyber-muted">KEYWORDS</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(keywords || []).map((k) => (
                  <span key={k} className="text-[11px] px-2 py-1 rounded-full border border-gray-700 text-gray-200">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs tracking-widest text-cyber-muted">TAGS</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {(tags || []).map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-gray-700 text-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {stack?.length ? (
              <div className="mt-6">
                <p className="text-xs tracking-widest text-cyber-muted">TOOLS / TECH</p>
                <div className="mt-2 space-y-2">
                  {stack.map((s) => (
                    <div key={s} className="text-sm text-gray-200 border border-gray-800 bg-black/20 rounded-xl px-3 py-2">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {outcome ? (
              <div className="mt-6">
                <p className="text-xs tracking-widest text-cyber-muted">OUTCOME</p>
                <p className="mt-2 text-sm text-gray-200">{outcome}</p>
              </div>
            ) : null}

            <div className="mt-7">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-3 px-4 text-sm rounded-xl border border-green-400/60 text-green-300 bg-green-400/10 hover:bg-green-400/20 transition-colors"
              >
                Discuss a SOC / IT Support opportunity
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

