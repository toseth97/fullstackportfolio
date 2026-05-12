"use client";

import CertificateCard from "./CertificateCard";

export default function CertificationsPage() {
  const certifications = [
    {
      title: "eJPT (eLearnSecurity Junior Penetration Tester) (INE)",
      description:
        "Validated skills in networking, web security, and exploitation workflows.",
      subtitle: "Evidence of practical competence",
      imageSrc: "/Certificates/EJPT cert.png"
    },
    {
      title: "ISC2 Certified in Cybersecurity (CC)",
      description:
        "Foundation in information security concepts, risk thinking, and security practices.",
      subtitle: "Verified cybersecurity fundamentals",
      imageSrc: "/Certificates/Isc CC.png"
    },
    {
      title: "Google IT Support Certificate (Coursera)",
      description:
        "Help desk / IT fundamentals with troubleshooting, operating systems, and customer support workflows.",
      subtitle: "IT support & troubleshooting",
      imageSrc: "/Certificates/Google cybersecurity Cert.png"
    },
    {
      title: "Google Cybersecurity Professional Certificate (Coursera)",
      description:
        "Structured learning in security operations, incident response, and hands-on security concepts.",
      subtitle: "Cybersecurity professional track",
      imageSrc: "/Certificates/Google cybersecurity Cert.png"
    },
    {
      title: "Cisco Ethical Hacking (Cisco Netacad)",
      description:
        "Ethical hacking fundamentals aligned to safe testing, web security basics, and vulnerability understanding.",
      subtitle: "Ethical hacking",
      imageSrc: "/Certificates/Cisco Certified Ethical Hacker Path.png"
    },
    {
      title: "Web Security Fundamental (Tryhackme)",
      description:
        "Web security concepts and hands-on learning through structured tasks and challenges.",
      subtitle: "TryHackMe web security",
      imageSrc: "/Certificates/Web Security Fundermental.png"
    },
    {
      title: "Cisco Junior Cybersecurity Analyst (Cisco Netacad)",
      description:
        "SOC-oriented fundamentals including monitoring, alert triage, and incident workflow awareness.",
      subtitle: "Junior cybersecurity analysis",
      imageSrc: "/Certificates/ISOIEC.png"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen py-16">
      <div className="w-11/12 lg:w-9/12">
        <div className="mb-10">
          <p className="text-xs tracking-widest text-cyber-muted">/03 certifications</p>
          <h1 className="title_text text-green-400 text-3xl lg:text-5xl">
            Verified Hands-on Skills
          </h1>
          <p className="mt-4 text-sm lg:text-base text-gray-300 max-w-2xl">
            Click a button to view the certificate image stored in
            <span className="text-gray-200"> /public/Certificates</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((c) => (
            <CertificateCard
              key={c.title}
              title={c.title}
              description={c.description}
              imageSrc={c.imageSrc}
              subtitle={c.subtitle}
            />
          ))}
        </div>

        <div className="mt-8 border border-gray-800 bg-black/20 rounded-2xl p-6">
          <h2 className="title_text text-green-200 text-xl">Learning posture</h2>
          <p className="mt-4 text-sm text-gray-300 max-w-3xl">
            Continuous focus on SQL injection (SQLi) and API security, informed
            by hands-on labs and applied to real support/security operations.
          </p>
        </div>
      </div>
    </div>
  );
}


