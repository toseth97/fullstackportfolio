"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const CvDownloadMenu = () => {
  const [open, setOpen] = useState(false);

  const options = useMemo(
    () => [
      {
        label: "Standard CV (EN)",
        href: "/CV/Tobiloba_Lawal_Standard.pdf"
      },
      {
        label: "German CV (DE)",
        href: "/CV/Tobiloba_Lawal_German.pdf"
      }
    ],
    []
  );

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="cyber-chip border border-gray-800 bg-black/30 hover:border-green-400/60"
        aria-expanded={open}
      >
        Download CV
      </button>

      {open ? (
        <div
          className="absolute right-0 mt-2 w-52 rounded-xl border border-gray-800 bg-black/70 backdrop-blur-md p-2 shadow-lg z-[9999]"
          onMouseLeave={() => setOpen(false)}
          onTouchEnd={() => setOpen(false)}
        >
          {options.map((opt) => (
            <Link
              key={opt.href}
              href={opt.href}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg px-3 py-2 text-sm text-gray-200 hover:text-green-300 hover:bg-black/40 transition-colors"
            >
              {opt.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default CvDownloadMenu;

