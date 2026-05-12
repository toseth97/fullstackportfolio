export default function ExperiencePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-16">
      <div className="w-11/12 lg:w-9/12">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-cyber-muted">/02 experience</p>
          <h1 className="title_text text-green-400 text-3xl lg:text-5xl">Security-First Support</h1>
          <p className="mt-4 text-sm lg:text-base text-gray-300 max-w-2xl">
            8+ years bridging enterprise IT operations with practical security engineering—identity, access, encryption,
            and resilient workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="cyber-panel border border-gray-800 bg-black/30 rounded-2xl p-6">
            <h2 className="title_text text-green-200 text-xl">Infrastructure & AI Integration (Aava Brands)</h2>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>
                  <span className="text-green-300 font-mono">Secure AI Gateway Deployment (2026)</span> — restored executive access
                  to ChatGPT/Claude after domain-level blocks using Windows Server 2019 + RDS + GPO, while maintaining
                  strict network isolation.
                </span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>
                  <span className="text-green-300 font-mono">Enterprise Email Migration</span> — Microsoft 365 / Exchange Online migration,
                  DNS orchestration, and cutover stability.
                </span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>
                  <span className="text-green-300 font-mono">Full Disk Encryption (FDE) Rollout</span> — BitLocker enablement,
                  Intune-managed policies, TPM readiness.
                </span>
              </li>
            </ul>
          </div>

          <div className="cyber-panel border border-gray-800 bg-black/30 rounded-2xl p-6">
            <h2 className="title_text text-green-200 text-xl">Operational Security</h2>
            <div className="mt-4 space-y-4">
              <div className="border border-gray-800 bg-black/20 rounded-xl p-4">
                <p className="text-xs text-cyber-muted">Identity & Access</p>
                <p className="mt-2 text-sm text-gray-200">Active Directory, Entra ID (Azure AD), Okta, MFA/SSO, least-privilege.</p>
              </div>
              <div className="border border-gray-800 bg-black/20 rounded-xl p-4">
                <p className="text-xs text-cyber-muted">Resilience</p>
                <p className="mt-2 text-sm text-gray-200">GPO-driven enforcement, change-safe rollouts, incident-first troubleshooting.</p>
              </div>
              <div className="border border-gray-800 bg-black/20 rounded-xl p-4">
                <p className="text-xs text-cyber-muted">Support with Telemetry</p>
                <p className="mt-2 text-sm text-gray-200">Security-aware ticket triage and reproducible diagnostics for faster SOC handoff.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border border-gray-800 bg-black/20 rounded-2xl p-6">
          <h2 className="title_text text-green-200 text-xl">What I’m targeting in Europe</h2>
          <p className="mt-4 text-sm text-gray-300 max-w-3xl">
            Mid-to-senior IT Support / SOC Analyst roles—where the expectation is to secure systems while keeping services
            reliable. I’m “hands-on” across identity, encryption, detection-minded workflows, and web/API risk.
          </p>
        </div>
      </div>
    </div>
  );
}

