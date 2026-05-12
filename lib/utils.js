export const labs = [
  {
    id: 1,
    type: "lab",
    title: "Hacker101: Micro-CMS v1 Exploitation",
    image: "/images/ff-card-sm.png",
    summary:
      "Captured all flags by chaining SQLi, XSS (stored/reflected), and IDOR weaknesses into a clean exploitation narrative.",
    tags: ["SQLi", "XSS", "IDOR", "Web Security"],
    keywords: ["SQLi", "XSS", "IDOR", "Session hijacking"],
    stack: ["Burp Suite", "SQL injection techniques", "XSS payload crafting", "Auth bypass logic"],
    highlights: [
      "SQL Injection (SQLi): bypass authentication and extract database information.",
      "XSS (Stored & Reflected): demonstrate impact by executing scripts to model session compromise.",
      "IDOR: discover unauthorized hidden pages via parameter manipulation and access control testing."
    ],
    timeline: [
      { label: "Assessment", value: "Recon + request mapping (flows, parameters, state)" },
      { label: "Exploitation", value: "SQLi → XSS pivot → IDOR verification" }
    ],
    outcome:
      "Flag completion with a repeatable report structure: vulnerability evidence, exploit chain, and mitigation guidance."
  },
  {
    id: 2,
    type: "lab",
    title: "eJPT Lab Mastery (Network Pivoting & Exploitation)",
    image: "/images/ticket-card-sm.png",
    summary:
      "Validated hands-on exploitation methodology: ARP spoofing, network pivoting, and Metasploit-based targeting.",
    tags: ["eJPT", "Pivoting", "Metasploit", "ARP Spoofing"],
    keywords: ["Pivoting", "ARP spoofing", "Metasploit"],
    stack: ["Kali/Ubuntu tooling", "Routing/pivot workflows", "Metasploit framework"],
    highlights: [
      "Network pivoting: route around segmented networks to reach internal targets.",
      "ARP spoofing: intercept and analyze traffic for controlled observation.",
      "Metasploit exploitation: execute module-driven exploitation with verification loops."
    ],
    outcome: "A practical mental model for moving from access to impact safely during lab assessments."
  },
  {
    id: 3,
    type: "infra",
    title: "Secure AI Gateway Deployment (2026)",
    image: "/images/ff-lg.png",
    summary:
      "Restored executive access to ChatGPT/Claude after domain-level blocks—without breaking isolation boundaries.",
    tags: ["Windows Server", "RDS", "GPO", "AI Security"],
    keywords: ["RDS", "GPO", "Network isolation"],
    stack: ["Windows Server 2019", "Remote Desktop Services (RDS)", "Group Policy (GPO)"],
    highlights: [
      "Deployed a hardened Windows Server 2019 instance for remote management access.",
      "Implemented GPO-driven policies to preserve strict separation from the primary domain.",
      "Enabled business continuity for AI-driven productivity workflows."
    ],
    timeline: [
      { label: "Goal", value: "Work continuity after domain-level restrictions" },
      { label: "Design", value: "Isolated gateway + controlled access paths" }
    ],
    outcome:
      "Operationally secure AI access with an approach that aligns support delivery with security-first controls."
  },
  {
    id: 4,
    type: "infra",
    title: "Full Disk Encryption (FDE) Rollout",
    image: "/images/passport.jpeg",
    summary:
      "Secured endpoints against physical data theft by implementing BitLocker and TPM readiness with modern management controls.",
    tags: ["BitLocker", "Intune", "TPM", "Endpoint Security"],
    keywords: ["BitLocker", "TPM", "Encryption"],
    stack: ["BitLocker", "Intune", "TPM management"],
    highlights: [
      "Managed BitLocker enablement and compliance across endpoints.",
      "Used Intune policies to standardize encryption state and reporting.",
      "Verified TPM prerequisites to reduce rollout failures and ensure recoverability."
    ],
    outcome: "Improved endpoint confidentiality posture with measurable policy coverage."
  },
  {
    id: 5,
    type: "infra",
    title: "Enterprise Email Migration (Aava Brands)",
    image: "/images/ticket-lg-login.png",
    summary:
      "Executed domain-wide migration to Microsoft 365 for unified communication and safer identity-bound access.",
    tags: ["Microsoft 365", "Exchange Online", "DNS", "Migration"],
    keywords: ["Exchange Online", "DNS", "Cutover stability"],
    stack: ["Microsoft 365", "Exchange Online", "DNS management"],
    highlights: [
      "Planned and executed migration across domains with careful DNS orchestration.",
      "Implemented cutover strategies to reduce downtime and support escalation risk.",
      "Aligned identities and user access patterns to security-first expectations."
    ],
    outcome: "Unified comms platform with stable operations and secure access."
  },
  {
    id: 6,
    type: "security",
    title: "Information Security Risk Register (ISO 27001 Principles)",
    image: "/images/ecommerce-lg.png",
    summary:
      "Built a professional-grade risk assessment framework using Excel and ISO 27001-aligned thinking to prioritize controls.",
    tags: ["Risk Management", "ISO 27001", "Excel"],
    keywords: ["Risk Register", "ISO 27001"],
    stack: ["Excel (advanced formulas)", "ISO 27001 principles"],
    highlights: [
      "Quantified business risks and translated them into a roadmap of mitigations.",
      "Structured risk entries for clarity: asset, threat, vulnerability, likelihood, impact.",
      "Provided decision-ready outputs for control implementation planning."
    ],
    outcome:
      "A repeatable risk tool that connects security analysis to operational decisions."
  }
];

export const portfolio = labs;

