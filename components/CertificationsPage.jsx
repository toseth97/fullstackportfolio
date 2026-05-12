export default function CertificationsPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-16">
      <div className="w-11/12 lg:w-9/12">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-cyber-muted">/03 certifications</p>
          <h1 className="title_text text-green-400 text-3xl lg:text-5xl">Verified Hands-on Skills</h1>
          <p className="mt-4 text-sm lg:text-base text-gray-300 max-w-2xl">
            Evidence of practical competence in networking, web security, exploitation, and risk thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="cyber-panel border border-gray-800 bg-black/30 rounded-2xl p-6">
            <h2 className="title_text text-green-200 text-xl">eJPT (eLearnSecurity Junior Penetration Tester)</h2>
            <p className="mt-3 text-sm text-gray-300">
              Validated skills in networking, web security, and exploitation workflows.
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>Network pivoting & traffic routing during assessments</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>ARP spoofing + controlled target observation</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>Metasploit framework exploitation methodology</span>
              </li>
            </ul>
          </div>

          <div className="cyber-panel border border-gray-800 bg-black/30 rounded-2xl p-6">
            <h2 className="title_text text-green-200 text-xl">Security Risk Engineering</h2>
            <p className="mt-3 text-sm text-gray-300">
              Built a custom Risk Register and Assessment framework grounded in ISO 27001 principles.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-800 bg-black/20 rounded-xl p-4">
                <p className="text-xs text-cyber-muted">Core outcome</p>
                <p className="mt-2 text-sm text-gray-200">Quantified threats → prioritized controls</p>
              </div>
              <div className="border border-gray-800 bg-black/20 rounded-xl p-4">
                <p className="text-xs text-cyber-muted">Method</p>
                <p className="mt-2 text-sm text-gray-200">Excel risk scoring + structured narratives</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border border-gray-800 bg-black/20 rounded-2xl p-6">
          <h2 className="title_text text-green-200 text-xl">Learning posture</h2>
          <p className="mt-4 text-sm text-gray-300 max-w-3xl">
            Continuous focus on SQL injection (SQLi) and API security, informed by PortSwigger labs and applied to
            real support/security operations.
          </p>
        </div>
      </div>
    </div>
  );
}

