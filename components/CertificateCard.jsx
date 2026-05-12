"use client";

import { useState } from "react";
import CertificateModal from "./CertificateModal";

export default function CertificateCard({
  title,
  description,
  imageSrc,
  subtitle
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="cyber-panel border border-gray-800 bg-black/30 rounded-2xl p-6">
      <h2 className="title_text text-green-200 text-xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm text-gray-300">{description}</p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-3 items-center">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="cyber-chip border border-gray-800 bg-black/20 hover:border-blue-300/60"
        >
          View certificate
        </button>
      </div>

      <CertificateModal
        open={open}
        onClose={() => setOpen(false)}
        imageSrc={imageSrc}
        title={title}
        subtitle={subtitle}
      />
    </div>
  );
}

