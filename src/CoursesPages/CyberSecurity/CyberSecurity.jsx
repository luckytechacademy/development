function CyberSecurity() {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        .gradient-bg {
          background: linear-gradient(135deg, #fef3c7 0%, #fecaca 50%, #ddd6fe 100%);
          min-height: 100vh;
        }
        
        .header-gradient {
          background: linear-gradient(90deg, #dc2626 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
        }
        
        .topic-item {
          transition: transform 0.2s ease;
        }
        
        .topic-item:hover {
          transform: translateX(8px);
        }
      `}</style>

      <div className="gradient-bg py-5">
        <div className="container">
          
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-3 fw-bold header-gradient mb-3">
              Cyber Security Course
            </h1>
            <p className="lead text-secondary">Basic → Advanced</p>
          </div>

          {/* Cards */}
          <div className="row g-4">
            
            {/* Card 1: Cyber Security Basics */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #dc2626, #b91c1c)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🔐</span>
                    Part 1: Cyber Security Fundamentals
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Introduction to Cyber Security:</strong>
                    <span className="text-secondary"> CIA Triad (Confidentiality, Integrity, Availability)</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Security Threats:</strong>
                    <span className="text-secondary"> Malware, Ransomware, Trojans, Worms, Spyware</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Attack Types:</strong>
                    <span className="text-secondary"> Phishing, Social Engineering, DDoS, Man-in-the-Middle</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Security Principles:</strong>
                    <span className="text-secondary"> Defense in Depth, Least Privilege, Zero Trust</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Risk Management:</strong>
                    <span className="text-secondary"> Risk Assessment, Threat Modeling, Vulnerability Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Network Security */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #ea580c, #c2410c)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🌐</span>
                    Part 2: Network Security
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ea580c'}}>▸</span>
                    <strong style={{color: '#c2410c'}}>Firewalls:</strong>
                    <span className="text-secondary"> Packet Filtering, Stateful Inspection, Next-Gen Firewalls</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ea580c'}}>▸</span>
                    <strong style={{color: '#c2410c'}}>IDS & IPS:</strong>
                    <span className="text-secondary"> Intrusion Detection Systems, Intrusion Prevention Systems</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ea580c'}}>▸</span>
                    <strong style={{color: '#c2410c'}}>VPN Technologies:</strong>
                    <span className="text-secondary"> IPSec, SSL/TLS VPN, Site-to-Site, Remote Access</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ea580c'}}>▸</span>
                    <strong style={{color: '#c2410c'}}>Network Protocols:</strong>
                    <span className="text-secondary"> TCP/IP Security, DNS Security, HTTPS, SSH</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#ea580c'}}>▸</span>
                    <strong style={{color: '#c2410c'}}>Wireless Security:</strong>
                    <span className="text-secondary"> WPA3, EAP, Wireless Attacks, Rogue Access Points</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Cryptography */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #d97706, #b45309)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🔑</span>
                    Part 3: Cryptography & Encryption
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#d97706'}}>▸</span>
                    <strong style={{color: '#b45309'}}>Symmetric Encryption:</strong>
                    <span className="text-secondary"> AES, DES, 3DES, Blowfish, RC4</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#d97706'}}>▸</span>
                    <strong style={{color: '#b45309'}}>Asymmetric Encryption:</strong>
                    <span className="text-secondary"> RSA, ECC, Diffie-Hellman, Public Key Infrastructure</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#d97706'}}>▸</span>
                    <strong style={{color: '#b45309'}}>Hashing Algorithms:</strong>
                    <span className="text-secondary"> SHA-256, SHA-3, MD5, HMAC, Bcrypt</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#d97706'}}>▸</span>
                    <strong style={{color: '#b45309'}}>Digital Signatures:</strong>
                    <span className="text-secondary"> Certificate Authority, PKI, Digital Certificates, SSL/TLS</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#d97706'}}>▸</span>
                    <strong style={{color: '#b45309'}}>Cryptographic Attacks:</strong>
                    <span className="text-secondary"> Brute Force, Rainbow Tables, Birthday Attack, Side-Channel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Application Security */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #059669, #047857)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🛡️</span>
                    Part 4: Application Security
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#059669'}}>▸</span>
                    <strong style={{color: '#047857'}}>OWASP Top 10:</strong>
                    <span className="text-secondary"> SQL Injection, XSS, CSRF, Authentication Flaws</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#059669'}}>▸</span>
                    <strong style={{color: '#047857'}}>Web Security:</strong>
                    <span className="text-secondary"> Input Validation, Session Management, Secure Cookies</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#059669'}}>▸</span>
                    <strong style={{color: '#047857'}}>API Security:</strong>
                    <span className="text-secondary"> OAuth, JWT, Rate Limiting, API Gateways</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#059669'}}>▸</span>
                    <strong style={{color: '#047857'}}>Secure Coding:</strong>
                    <span className="text-secondary"> Code Review, Static Analysis, Dynamic Analysis, SAST/DAST</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#059669'}}>▸</span>
                    <strong style={{color: '#047857'}}>Mobile Security:</strong>
                    <span className="text-secondary"> Android/iOS Security, App Sandboxing, Secure Storage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Ethical Hacking & Penetration Testing */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90d, #0891b2, #0e7490)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🎯</span>
                    Part 5: Ethical Hacking & Penetration Testing
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#0891b2'}}>▸</span>
                    <strong style={{color: '#0e7490'}}>Reconnaissance:</strong>
                    <span className="text-secondary"> Footprinting, OSINT, Scanning, Enumeration</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#0891b2'}}>▸</span>
                    <strong style={{color: '#0e7490'}}>Vulnerability Assessment:</strong>
                    <span className="text-secondary"> Nmap, Nessus, OpenVAS, Vulnerability Scanning</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#0891b2'}}>▸</span>
                    <strong style={{color: '#0e7490'}}>Exploitation:</strong>
                    <span className="text-secondary"> Metasploit, Exploit Development, Buffer Overflow</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#0891b2'}}>▸</span>
                    <strong style={{color: '#0e7490'}}>Password Cracking:</strong>
                    <span className="text-secondary"> John the Ripper, Hashcat, Dictionary Attacks</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#0891b2'}}>▸</span>
                    <strong style={{color: '#0e7490'}}>Post-Exploitation:</strong>
                    <span className="text-secondary"> Privilege Escalation, Lateral Movement, Data Exfiltration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Security Operations */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #6366f1, #4f46e5)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">👁️</span>
                    Part 6: Security Operations & Monitoring
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#6366f1'}}>▸</span>
                    <strong style={{color: '#4f46e5'}}>SIEM Tools:</strong>
                    <span className="text-secondary"> Splunk, ELK Stack, QRadar, Log Analysis</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#6366f1'}}>▸</span>
                    <strong style={{color: '#4f46e5'}}>Incident Response:</strong>
                    <span className="text-secondary"> Incident Handling, Forensics, Containment, Recovery</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#6366f1'}}>▸</span>
                    <strong style={{color: '#4f46e5'}}>Threat Intelligence:</strong>
                    <span className="text-secondary"> IOCs, Threat Hunting, MITRE ATT&CK Framework</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#6366f1'}}>▸</span>
                    <strong style={{color: '#4f46e5'}}>SOC Operations:</strong>
                    <span className="text-secondary"> Security Monitoring, Alert Triage, Playbooks</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#6366f1'}}>▸</span>
                    <strong style={{color: '#4f46e5'}}>Digital Forensics:</strong>
                    <span className="text-secondary"> Evidence Collection, Memory Forensics, Disk Analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 7: Cloud & Advanced Security */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #8b5cf6, #7c3aed)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">☁️</span>
                    Part 7: Cloud Security & Advanced Topics
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Cloud Security:</strong>
                    <span className="text-secondary"> AWS/Azure/GCP Security, IAM, Cloud Compliance</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Container Security:</strong>
                    <span className="text-secondary"> Docker Security, Kubernetes Security, Image Scanning</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>DevSecOps:</strong>
                    <span className="text-secondary"> CI/CD Security, Security Automation, Infrastructure as Code</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Compliance & Governance:</strong>
                    <span className="text-secondary"> GDPR, HIPAA, PCI-DSS, ISO 27001, SOC 2</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#8b5cf6'}}>▸</span>
                    <strong style={{color: '#7c3aed'}}>Emerging Technologies:</strong>
                    <span className="text-secondary"> AI/ML Security, IoT Security, Blockchain Security</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 8: Security Certifications & Career */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #ec4899, #db2777)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🏆</span>
                    Part 8: Certifications & Career Path
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Entry-Level Certifications:</strong>
                    <span className="text-secondary"> CompTIA Security+, CEH, GIAC GSEC</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Intermediate Certifications:</strong>
                    <span className="text-secondary"> CISSP, CISM, OSCP, GIAC GCIH</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Advanced Certifications:</strong>
                    <span className="text-secondary"> OSEE, GXPN, CCSP, CISA</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Career Roles:</strong>
                    <span className="text-secondary"> Security Analyst, Penetration Tester, Security Architect</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Skills Development:</strong>
                    <span className="text-secondary"> Practice Labs, Bug Bounty, CTF Challenges, Open Source Projects</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-5">
            <p className="text-muted">
              <small>🔒 Complete Cyber Security Curriculum • Basic to Advanced</small>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default CyberSecurity;