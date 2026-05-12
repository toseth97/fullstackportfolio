"use client";

import { useMemo, useEffect, useState } from "react";
import { labs } from "../lib/utils";

const allTags = Array.from(new Set(labs.flatMap((l) => l.tags || []))).sort();

export default function LabsIndex() {
  const [activeTag, setActiveTag] = useState("ALL");
  const [openLabId, setOpenLabId] = useState(null);
  const isModalOpen = openLabId !== null;

  const filtered = useMemo(() => {
    if (activeTag === "ALL") return labs;
    return labs.filter((l) => (l.tags || []).includes(activeTag));
  }, [activeTag]);

  const activeLab = useMemo(() => {
    if (!isModalOpen) return null;
    return labs.find((l) => String(l.id) === String(openLabId)) || null;
  }, [isModalOpen, openLabId]);

  // Disable background scrolling while modal is open
  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isModalOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Esc to close
  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenLabId(null);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isModalOpen]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-16">
      <div className="w-11/12 lg:w-9/12">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-cyber-muted">/04 labs</p>
          <h1 className="title_text text-green-400 text-3xl lg:text-5xl">Cyber Labs & Exploits</h1>
          <p className="mt-4 text-sm lg:text-base text-gray-300 max-w-2xl">
            Hands-on work across web exploitation, defense engineering, and infrastructure security—packaged as
            repeatable learning modules.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            type="button"
            onClick={() => setActiveTag("ALL")}
            className={`px-4 py-2 rounded-full text-xs border transition-colors ${
              activeTag === "ALL"
                ? "border-green-400 text-green-300 bg-green-400/10"
                : "border-gray-700 text-gray-200 hover:text-green-300"
            }`}
          >
            ALL
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-xs border transition-colors ${
                activeTag === tag
                  ? "border-green-400 text-green-300 bg-green-400/10"
                  : "border-gray-700 text-gray-200 hover:text-green-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Fullscreen modal preview */}
        {isModalOpen && activeLab ? (
          <div className="fixed inset-0 z-[100]" aria-label="Lab preview">
            {/* backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpenLabId(null)} />

            {/* centered scrollable card */}
            <div className="relative z-[101] flex items-center justify-center min-h-screen p-4">
              <div
                className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-800 bg-black/80 p-6 sm:p-8"
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs tracking-widest text-cyber-muted">
                      {String(activeLab.type).toUpperCase()} • #{activeLab.id}
                    </p>
                    <h2 className="title_text text-green-400 text-2xl sm:text-4xl mt-2">{activeLab.title}</h2>
                    <p className="mt-4 text-sm lg:text-base text-gray-300">{activeLab.summary}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenLabId(null)}
                    className="rounded-lg border border-gray-700 bg-black/40 px-3 py-2 text-sm text-gray-200 hover:border-green-400/60 hover:text-green-300"
                    aria-label="Close lab"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-8 space-y-8">
                  <section>
                    <h3 className="title_text text-green-200 text-xl">Core Highlights</h3>
                    <ul className="mt-4 space-y-3">
                      {(activeLab.highlights || []).map((h, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-200">
                          <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {activeLab.timeline?.length ? (
                    <section>
                      <h3 className="title_text text-green-200 text-xl">Timeline</h3>
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeLab.timeline.map((t) => (
                          <div key={t.label} className="border border-gray-800 bg-black/20 rounded-xl p-4">
                            <p className="text-xs text-cyber-muted">{t.label}</p>
                            <p className="mt-2 text-sm text-gray-200">{t.value}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  ) : null}

                  <section>
                    <h3 className="title_text text-green-200 text-xl">Keywords & Stack</h3>

                    <div className="mt-6 space-y-6">
                      <div>
                        <p className="text-xs tracking-widest text-cyber-muted">KEYWORDS</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {(activeLab.keywords || []).map((k) => (
                            <span key={k} className="text-[11px] px-2 py-1 rounded-full border border-gray-700 text-gray-200">
                              {k}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs tracking-widest text-cyber-muted">TAGS</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {(activeLab.tags || []).map((t) => (
                            <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-gray-700 text-gray-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {activeLab.stack?.length ? (
                        <div>
                          <p className="text-xs tracking-widest text-cyber-muted">TOOLS / TECH</p>
                          <div className="mt-2 space-y-2">
                            {activeLab.stack.map((s) => (
                              <div
                                key={s}
                                className="text-sm text-gray-200 border border-gray-800 bg-black/20 rounded-xl px-3 py-2"
                              >
                                {s}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {activeLab.outcome ? (
                        <div>
                          <p className="text-xs tracking-widest text-cyber-muted">OUTCOME</p>
                          <p className="mt-2 text-sm text-gray-200">{activeLab.outcome}</p>
                        </div>
                      ) : null}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Grid only when modal is closed */}
        {!isModalOpen ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((lab) => (
              <div
                key={lab.id}
                role="button"
                tabIndex={0}
                onClick={() => setOpenLabId(lab.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenLabId(lab.id);
                  }
                }}
                className="group cursor-pointer"
              >
                <div className="cyber-card h-full border border-gray-800 bg-black/40 rounded-2xl p-5 hover:border-green-400/60 transition-colors overflow-hidden relative">
                  <div className="cyber-card__scan" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] tracking-widest text-cyber-muted">{String(lab.type).toUpperCase()}</p>
                      <span className="text-[11px] text-green-300/90 font-mono">#{lab.id}</span>
                    </div>

                    <h2 className="mt-3 title_text text-green-200 text-xl group-hover:text-green-400 transition-colors">
                      {lab.title}
                    </h2>

                    <p className="mt-3 text-sm text-gray-300 line-clamp-3">{lab.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {(lab.tags || []).slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-1 rounded-full border border-gray-700 text-gray-200 group-hover:border-green-400/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-xs text-gray-200">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Open preview
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {filtered.length === 0 && !isModalOpen ? (
          <div className="mt-10 text-gray-300">No labs match this tag.</div>
        ) : null}
      </div>
    </div>
  );
}

