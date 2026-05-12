"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const lines = [
  "booting mission control...",
  "loading security-first profile...",
  "enabling identity-aware workflows (AD/Entra/Okta)...",
  "arming web defense: SQLi • XSS • IDOR",
  "activating endpoint encryption posture: BitLocker • TPM",
  "scanning infrastructure resilience signals...",
  "ready for EU SOC / IT Support roles."
];

export default function HomePageControl() {
  const [lineIndex, setLineIndex] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setLineIndex(lines.length - 1);
      return;
    }

    const id = window.setInterval(() => {
      setLineIndex((prev) => Math.min(prev + 1, lines.length - 1));
    }, 520);

    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* HUD background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040606] to-black" />
        <div className="absolute inset-0 opacity-60">
          <div className="h-full w-full hud-grid" />
        </div>
        <div className="absolute inset-0 hud-scanlines" />
        <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-cyber-glow" />
        <div className="absolute right-[-6rem] top-48 h-96 w-96 rounded-full bg-cyber-glow-purple" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Top Console */}
        <header className="w-11/12 lg:w-9/12 mt-8">
          <div className="cyber-panel border border-gray-800/80 bg-black/40 rounded-2xl p-5">
            <div className="flex items-start justify-between gap-4 flex-col lg:flex-row">
              <div>
                <p className="text-xs tracking-widest text-cyber-muted">/00 mission control</p>
                <h1 className="title_text text-green-400 text-2xl sm:text-3xl lg:text-5xl mt-2">
                  TOBILObA LAWAL
                </h1>
                <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
                  <span className="text-blue-300">Junior Penetration Tester</span> •{' '}
                  <span className="text-green-300">Cybersecurity Analyst</span> •{' '}
                  <span className="text-purple-300">IT End User Support</span>
                </p>
              </div>

              <div className="w-full lg:w-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="border border-gray-800 bg-black/30 rounded-xl p-3">
                    <p className="text-[11px] text-cyber-muted tracking-widest">LOCATION</p>
                    <p className="mt-1 text-sm text-gray-200">Lagos, Nigeria</p>
                  </div>
                  <div className="border border-gray-800 bg-black/30 rounded-xl p-3">
                    <p className="text-[11px] text-cyber-muted tracking-widest">PHONE</p>
                    <p className="mt-1 text-sm text-gray-200">+234 812 027 2000 • +234 806 386 0181</p>
                  </div>
                  <div className="sm:col-span-2 border border-gray-800 bg-black/30 rounded-xl p-3">
                    <p className="text-[11px] text-cyber-muted tracking-widest">EMAIL</p>
                    <p className="mt-1 text-sm text-gray-200">oluwasheun9721@gmail.com</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/tobiloba-lawal-1097a6132/"
                    target="_blank"
                    rel="noreferrer"
                    className="cyber-chip border border-gray-800 bg-black/30 hover:border-green-400/60"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="cyber-chip border border-gray-800 bg-black/30 hover:border-green-400/60"
                    onClick={(e) => e.preventDefault()}
                    title="Add Medium URL"
                  >
                    Medium
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Console + Summary */}
        <main className="w-11/12 lg:w-9/12 mt-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Terminal */}
            <section className="lg:col-span-2 cyber-panel border border-gray-800/80 bg-black/35 rounded-2xl p-6 overflow-hidden">
              <div className="flex items-center justify-between">
                <p className="text-xs tracking-widest text-cyber-muted">/console</p>
                <span className="text-[11px] text-green-300/90 font-mono">SOC_READY: true</span>
              </div>

              <div className="mt-4 bg-black/30 border border-gray-800 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex flex-col gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />
                    <span className="h-2 w-2 rounded-full bg-green-400/30" />
                  </div>

                  <pre className="text-sm text-green-200/90 font-mono leading-6">
                    <span className="text-blue-300">$</span> tobiloba-lawal@mission-control:~$ ./run
                    {"\n"}
                    {lines.slice(0, lineIndex + 1).map((l, idx) => (
                      <span key={idx} className="block">
                        <span className={idx % 2 === 0 ? "text-green-200" : "text-cyber-blue"}>{l}</span>
                      </span>
                    ))}
                    {"\n"}
                    <span className="text-cyber-muted">{lineIndex < lines.length - 1 ? "[working...]" : "[ok]"}</span>
                  </pre>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-gray-800 bg-black/20 rounded-xl p-4">
                  <p className="text-xs text-cyber-muted tracking-widest">FOCUS</p>
                  <p className="mt-2 text-sm text-gray-200">Security-first IT delivery</p>
                </div>
                <div className="border border-gray-800 bg-black/20 rounded-xl p-4">
                  <p className="text-xs text-cyber-muted tracking-widest">ASSESS</p>
                  <p className="mt-2 text-sm text-gray-200">SQLi • XSS • IDOR</p>
                </div>
                <div className="border border-gray-800 bg-black/20 rounded-xl p-4">
                  <p className="text-xs text-cyber-muted tracking-widest">HARDEN</p>
                  <p className="mt-2 text-sm text-gray-200">BitLocker • Intune • TPM</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/labs"
                  className="w-full sm:w-auto cyber-btn border border-green-400/60 bg-green-400/10 hover:bg-green-400/20"
                >
                  Explore Labs
                </Link>
                <Link
                  href="/experience"
                  className="w-full sm:w-auto cyber-btn border border-gray-800/80 bg-black/20 hover:border-purple-400/60"
                >
                  Security-First Experience
                </Link>
                <Link
                  href="/certifications"
                  className="w-full sm:w-auto cyber-btn border border-gray-800/80 bg-black/20 hover:border-blue-300/60"
                >
                  Verified Certs
                </Link>
              </div>
            </section>

            {/* Quick resume */}
            <aside className="cyber-panel border border-gray-800/80 bg-black/30 rounded-2xl p-6 lg:sticky lg:top-24">
              <p className="text-xs tracking-widest text-cyber-muted">/summary</p>
              <h2 className="title_text text-green-200 text-2xl mt-2">Professional Summary</h2>
              <p className="mt-4 text-sm text-gray-200 leading-relaxed">
                Cybersecurity-focused IT Support Engineer & Junior Penetration Tester with hands-on experience in system administration,
                network security, application security, vulnerability assessment, and risk mitigation.
              </p>

              <div className="mt-5">
                <p className="text-xs tracking-widest text-cyber-muted">Core Skills</p>
                <div className="mt-3 space-y-2">
                  {["IT Support & Troubleshooting", "Network & System Admin", "Penetration Testing (PTES)", "Web App Security (XSS, SQLi, IDOR)", "Risk Management"].map(
                    (s) => (
                      <div key={s} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        <p className="text-sm text-gray-200">{s}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs tracking-widest text-cyber-muted">Ready for Europe</p>
                <p className="mt-3 text-sm text-gray-200">
                  Built to bridge enterprise reliability with defensive thinking—so SOC handoffs are fast and remediation stays disciplined.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex w-full items-center justify-center py-3 px-4 rounded-xl border border-green-400/60 bg-green-400/10 hover:bg-green-400/20 text-sm text-green-200"
                >
                  Contact for SOC / IT Support
                </Link>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

