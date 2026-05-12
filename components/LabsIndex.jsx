"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { labs } from "../lib/utils";

const allTags = Array.from(new Set(labs.flatMap((l) => l.tags || []))).sort();

export default function LabsIndex() {
  const [activeTag, setActiveTag] = useState("ALL");
  const filtered = useMemo(() => {
    if (activeTag === "ALL") return labs;
    return labs.filter((l) => (l.tags || []).includes(activeTag));
  }, [activeTag]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-16">
      <div className="w-11/12 lg:w-9/12">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-cyber-muted">/04 labs</p>
          <h1 className="title_text text-green-400 text-3xl lg:text-5xl">Cyber Labs & Exploits</h1>
          <p className="mt-4 text-sm lg:text-base text-gray-300 max-w-2xl">
            Hands-on work across web exploitation, defense engineering, and infrastructure security—packaged
            as repeatable learning modules.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <button
            type="button"
            onClick={() => setActiveTag("ALL")}
            className={`px-4 py-2 rounded-full text-xs border transition-colors ${
              activeTag === "ALL" ? "border-green-400 text-green-300 bg-green-400/10" : "border-gray-700 text-gray-200 hover:text-green-300"
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
                activeTag === tag ? "border-green-400 text-green-300 bg-green-400/10" : "border-gray-700 text-gray-200 hover:text-green-300"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((lab) => (
            <Link key={lab.id} href={`/labs/${lab.id}`} className="group">
              <div className="cyber-card h-full border border-gray-800 bg-black/40 rounded-2xl p-5 hover:border-green-400/60 transition-colors overflow-hidden relative">
                <div className="cyber-card__scan" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] tracking-widest text-cyber-muted">{lab.type.toUpperCase()}</p>
                    <span className="text-[11px] text-green-300/90 font-mono">#{lab.id}</span>
                  </div>
                  <h2 className="mt-3 title_text text-green-200 text-xl group-hover:text-green-400 transition-colors">
                    {lab.title}
                  </h2>
                  <p className="mt-3 text-sm text-gray-300 line-clamp-3">{lab.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(lab.tags || []).slice(0, 4).map((t) => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded-full border border-gray-700 text-gray-200 group-hover:border-green-400/50">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-xs text-gray-200">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Open details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 text-gray-300">No labs match this tag.</div>
        ) : null}
      </div>
    </div>
  );
}

