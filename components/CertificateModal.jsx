"use client";

import { useEffect } from "react";

export default function CertificateModal({
  open,
  onClose,
  imageSrc,
  title,
  subtitle
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className="relative z-[101] w-11/12 max-w-3xl rounded-2xl border border-gray-800 bg-black/80 p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={title ? `Certificate: ${title}` : "Certificate"}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            {title ? (
              <h3 className="title_text text-green-200 text-xl sm:text-2xl">
                {title}
              </h3>
            ) : null}
            {subtitle ? (
              <p className="mt-1 text-sm text-gray-300">{subtitle}</p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-700 bg-black/40 px-3 py-2 text-sm text-gray-200 hover:border-green-400/60 hover:text-green-300"
            aria-label="Close certificate"
          >
            Close
          </button>
        </div>

        <div className="mt-4 rounded-xl border border-gray-800 bg-black/30 p-2">
          {/* Use a normal img tag (not next/image) to avoid layout issues in modal */}
          <img
            src={imageSrc}
            alt={title ? `Certificate image: ${title}` : "Certificate image"}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <p className="mt-3 text-xs text-gray-400">
          Tip: Press <span className="text-gray-300">Esc</span> to close.
        </p>
      </div>
    </div>
  );
}

