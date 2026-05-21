export default function ExperiencePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-16">
      <div className="w-11/12 lg:w-9/12">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-cyber-muted">/02 experience</p>
          <h1 className="title_text text-green-400 text-3xl lg:text-5xl">Professional Experience</h1>
          <p className="mt-4 text-sm lg:text-base text-gray-300 max-w-2xl">
            Security-first IT support with hands-on risk management and application security testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Professional Experience */}
          <div className="cyber-panel border border-gray-800 bg-black/30 rounded-2xl p-6">
            <h2 className="title_text text-green-200 text-xl">AAVA Brands Limited</h2>
            <div className="mt-2">
              <p className="text-sm text-gray-200">
                <span className="text-green-300 font-mono">IT Support Engineer | Security Analyst</span>{' '}
                <span className="text-gray-400">(2023 – Present)</span>
              </p>
            </div>

            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>Provided technical support and resolved system/network issues.</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>Conducted internal security checks and vulnerability assessments.</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>Built and maintained a risk register to track and mitigate organizational risks.</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>
                  Created and deployed a VM server environment allowing 5 users remote AI access.
                </span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>Managed user access, SharePoint permissions, and system security.</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>Identified web application vulnerabilities and reported remediation steps.</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>
                  Assisted in improving application security posture through responsible vulnerability reporting and remediation recommendations.
                </span>
              </li>
            </ul>
          </div>

          <div className="cyber-panel border border-gray-800 bg-black/30 rounded-2xl p-6">
            <h2 className="title_text text-green-200 text-xl">Vicmart Enterprises</h2>
            <div className="mt-2">
              <p className="text-sm text-gray-200">
                <span className="text-green-300 font-mono">IT Support Engineer</span>{' '}
                <span className="text-gray-400">(2018 – 2023)</span>
              </p>
            </div>

            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>Delivered end-user support and resolved IT tickets.</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>Assisted with security awareness and documentation.</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-200">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                <span>Managed reporting systems and network troubleshooting.</span>
              </li>
            </ul>

            {/* Forage simulations */}
            <div className="mt-8">
              <h3 className="text-green-200 text-lg font-medium">Tata Cybersecurity</h3>
              <p className="mt-1 text-sm text-gray-200">
                <span className="text-green-300 font-mono">IAM DEVELOPER</span>{' '}
                <span className="text-gray-400">Sep/Nov 2024 • Forage job simulation, Remote</span>
              </p>
              <ul className="mt-3 space-y-3">
                <li className="flex gap-3 text-sm text-gray-200">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                  <span>Collaborated with a Cybersecurity Consulting team to complete a job simulation focused on identity and access management (IAM).</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-200">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                  <span>Acquired expertise in IAM principles and cybersecurity best practices, aligning strategies with business objectives.</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-200">
                  <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                  <span>Delivered comprehensive documentation and presentations, effectively communicating complex technical concepts.</span>
                </li>
              </ul>

              <div className="mt-6">
                <h3 className="text-green-200 text-lg font-medium">Commonwealth Bank</h3>
                <p className="mt-1 text-sm text-gray-200">
                  <span className="text-green-300 font-mono">SECURITY ANALYST</span>{' '}
                  <span className="text-gray-400">Sep/Nov 2024 • Forage job simulation, Remote</span>
                </p>
                <ul className="mt-3 space-y-3">
                  <li className="flex gap-3 text-sm text-gray-200">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                    <span>Specialized in fraud detection and prevention as part of a cybersecurity generalist role, completing a job simulation for Commonwealth Bank.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-200">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                    <span>Developed data visualization dashboards using Splunk to uncover patterns in historical customer data, aiding in fraud detection.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-200">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                    <span>Responded effectively to cybersecurity incidents, notifying relevant teams and aiding in recovery efforts.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-200">
                    <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
                    <span>Designed infographics to enhance security awareness, promoting best practices for secure password management.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-6">
          <div className="cyber-panel border border-gray-800 bg-black/20 rounded-2xl p-6">
            <h2 className="title_text text-green-200 text-xl">Projects</h2>

            <div className="mt-5 space-y-6">

  <section className="border border-gray-800 bg-black/10 rounded-xl p-5">
    <h3 className="text-green-200 text-lg font-medium">Web Application Security Lab – DVWA (SQL Injection | Low Security)</h3>

    <p className="mt-2 text-sm text-gray-300">
      Conducted a structured SQL Injection assessment on DVWA in a controlled environment to understand how insecure input handling can expose database structure and sensitive user data.
    </p>

    <p className="mt-3 text-sm text-gray-300">
      <span className="text-cyber-muted">Medium write up:</span>{' '}
      <a className="text-green-300 hover:underline font-medium" href="https://medium.com/@oluwasheun9721/hands-on-sql-injection-lab-dvwa-low-security-405daa8ef78a" target="_blank" rel="noreferrer noopener">
        Lab Write-up
      </a>
    </p>

    <div className="mt-4">
      <p className="text-xs tracking-widest text-cyber-muted">Key Activities:</p>
      <ul className="mt-3 space-y-3">

        <li className="flex gap-3 text-sm text-gray-200">
          <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
          <span>
            Confirmed SQL Injection vulnerability via input manipulation and backend query behavior analysis.
          </span>
        </li>

        <li className="flex gap-3 text-sm text-gray-200">
          <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
          <span>
            Enumerated database schema using <span className="text-green-300 font-mono">information_schema</span> to identify tables and columns.
          </span>
        </li>

        <li className="flex gap-3 text-sm text-gray-200">
          <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
          <span>
            Extracted user credentials including usernames and hashed passwords from the <span className="text-green-300 font-mono">users</span> table.
          </span>
        </li>

        <li className="flex gap-3 text-sm text-gray-200">
          <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
          <span>
            Analyzed authorization structure including permissions, privilege levels, and user group relationships.
          </span>
        </li>

      </ul>
    </div>
  </section>

  <section className="border border-gray-800 bg-black/10 rounded-xl p-5">
    <h3 className="text-green-200 text-lg font-medium">Web Application Penetration Test – Micro-CMS v1</h3>
    <p className="mt-2 text-sm text-gray-300">
      Conducted a systematic security assessment of a Content Management System, successfully identifying and exploiting 4 critical vulnerabilities to capture all system flags.
    </p>

    <p className="mt-3 text-sm text-gray-300">
      <span className="text-cyber-muted">Medium write up:</span>{' '}
      <a className="text-green-300 hover:underline font-medium" href="https://medium.com/@oluwasheun9721/cracking-micro-cms-v1-a-full-4-flag-ctf-walkthrough-51d5dc094376" target="_blank" rel="noreferrer noopener">
        Lab Write-up 
      </a>
    </p>

    <div className="mt-4">
      <p className="text-xs tracking-widest text-cyber-muted">Key Vulnerabilities:</p>
      <ul className="mt-3 space-y-3">
        <li className="flex gap-3 text-sm text-gray-200">
          <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
          <span>
            <span className="text-green-300 font-mono">IDOR</span>: Bypassed authorization on the <span className="font-mono">/edit</span> route to access restricted data.
          </span>
        </li>
        <li className="flex gap-3 text-sm text-gray-200">
          <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
          <span>
            <span className="text-green-300 font-mono">Stored XSS</span>: Exploited unvalidated "Title" fields to achieve persistent script execution.
          </span>
        </li>
        <li className="flex gap-3 text-sm text-gray-200">
          <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
          <span>
            <span className="text-green-300 font-mono">SQL Injection</span>: Used boolean-based payloads (' or 1=1) to bypass database lookups and extract privileged records.
          </span>
        </li>
        <li className="flex gap-3 text-sm text-gray-200">
          <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
          <span>
            <span className="text-green-300 font-mono">Reflected XSS</span>: Leveraged improper error handling on 404 pages to execute JavaScript via the URL path.
          </span>
        </li>
      </ul>
    </div>
  </section>

  <section className="border border-gray-800 bg-black/10 rounded-xl p-5">
    <h3 className="text-green-200 text-lg font-medium">Web Application Security Assessment – AAVA Brands</h3>
    <ul className="mt-4 space-y-3">
      <li className="flex gap-3 text-sm text-gray-200">
        <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
        <span>Identified misconfigurations including debug exposure and IDOR risks.</span>
      </li>
      <li className="flex gap-3 text-sm text-gray-200">
        <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
        <span>Provided remediation aligned with OWASP Top 10.</span>
      </li>
    </ul>
  </section>

  <section className="border border-gray-800 bg-black/10 rounded-xl p-5">
    <h3 className="text-green-200 text-lg font-medium">Information Security Risk Management – AAVA Brands</h3>

    <ul className="mt-4 space-y-3">
      <li className="flex gap-3 text-sm text-gray-200">
        <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
        <span>
          <span className="text-green-300 font-mono">Risk Analysis</span>: Identified threats like credential stuffing and data breaches across critical assets such as web applications and database servers.
        </span>
      </li>
      <li className="flex gap-3 text-sm text-gray-200">
        <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
        <span>
          <span className="text-green-300 font-mono">Vulnerability Assessment</span>: Pinpointed system weaknesses including unpatched databases, lack of rate limiting, and weak password policies.
        </span>
      </li>
      <li className="flex gap-3 text-sm text-gray-200">
        <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
        <span>
          <span className="text-green-300 font-mono">Strategic Mitigation</span>: Developed a risk register calculating impact vs. likelihood and recommended controls like MFA, patch management, and IDS/IPS monitoring.
        </span>
      </li>
    </ul>
  </section>

  <section className="border border-gray-800 bg-black/10 rounded-xl p-5">
    <h3 className="text-green-200 text-lg font-medium">Secure AI Infrastructure Deployment – AAVA Brands</h3>

    <ul className="mt-4 space-y-3">
      <li className="flex gap-3 text-sm text-gray-200">
        <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
        <span>
          <span className="text-green-300 font-mono">Initiative</span>: Built an isolated Windows Server 2019 environment to bypass domain-level blocks on essential AI tools (ChatGPT, Julia, Notebooks).
        </span>
      </li>
      <li className="flex gap-3 text-sm text-gray-200">
        <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
        <span>
          <span className="text-green-300 font-mono">Access Control</span>: Configured secure remote access for senior management, providing high-productivity tools without compromising the primary DPworld domain controller.
        </span>
      </li>
      <li className="flex gap-3 text-sm text-gray-200">
        <span className="mt-1 w-2 h-2 rounded-full bg-green-400" />
        <span>
          <span className="text-green-300 font-mono">Governance</span>: Executed the project with end-to-end approval from the IT Manager, Head of IT, and General Manager.
        </span>
      </li>
    </ul>
  </section>

</div>
            

          </div>
          
        </div>
      </div>
    </div>
  );
}

