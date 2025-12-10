function Networking() {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        .gradient-bg {
          background: linear-gradient(135deg, #e0f2fe 0%, #e0e7ff 100%);
          min-height: 100vh;
        }
        
        .header-gradient {
          background: linear-gradient(90deg, #3b82f6 0%, #6366f1 100%);
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
              Computer Networking Theory
            </h1>
            <div className="mx-auto mb-3" style={{width: '120px', height: '4px', background: 'linear-gradient(90deg, #3b82f6, #6366f1)', borderRadius: '10px'}}></div>
            <p className="lead text-secondary">Basic → Advanced</p>
          </div>

          {/* Cards */}
          <div className="row g-4">
            
            {/* Card 1: Network Fundamentals */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #3b82f6, #2563eb)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🌐</span>
                    Part 1: Network Fundamentals
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Network Types:</strong>
                    <span className="text-secondary"> LAN, MAN, WAN, PAN, WLAN</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Network Topologies:</strong>
                    <span className="text-secondary"> Bus, Star, Ring, Mesh, Tree, Hybrid</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Transmission Media:</strong>
                    <span className="text-secondary"> Twisted Pair, Coaxial Cable, Fiber Optic, Wireless</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Network Devices:</strong>
                    <span className="text-secondary"> Hub, Switch, Router, Bridge, Gateway, Modem</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="text-primary fw-bold me-2">▸</span>
                    <strong className="text-primary">Network Models:</strong>
                    <span className="text-secondary"> Client-Server, Peer-to-Peer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: OSI & TCP/IP */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #6366f1, #4f46e5)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">📚</span>
                    Part 2: OSI & TCP/IP Models
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="text-indigo fw-bold me-2">▸</span>
                    <strong style={{color: '#6366f1'}}>OSI Model Layers:</strong>
                    <span className="text-secondary"> Physical, Data Link, Network, Transport, Session, Presentation, Application</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-indigo fw-bold me-2">▸</span>
                    <strong style={{color: '#6366f1'}}>TCP/IP Model:</strong>
                    <span className="text-secondary"> Network Access, Internet, Transport, Application Layer</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-indigo fw-bold me-2">▸</span>
                    <strong style={{color: '#6366f1'}}>Protocols:</strong>
                    <span className="text-secondary"> HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-indigo fw-bold me-2">▸</span>
                    <strong style={{color: '#6366f1'}}>Data Encapsulation:</strong>
                    <span className="text-secondary"> Segments, Packets, Frames, Bits</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="text-indigo fw-bold me-2">▸</span>
                    <strong style={{color: '#6366f1'}}>Port Numbers:</strong>
                    <span className="text-secondary"> Well-known ports (0-1023), Registered (1024-49151)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: IP Addressing */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #a855f7, #9333ea)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🔢</span>
                    Part 3: IP Addressing & Subnetting
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#a855f7'}}>▸</span>
                    <strong style={{color: '#9333ea'}}>IPv4 Addressing:</strong>
                    <span className="text-secondary"> Classes (A, B, C, D, E), Public vs Private IPs</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#a855f7'}}>▸</span>
                    <strong style={{color: '#9333ea'}}>Subnetting:</strong>
                    <span className="text-secondary"> Subnet Mask, CIDR Notation, VLSM</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#a855f7'}}>▸</span>
                    <strong style={{color: '#9333ea'}}>IPv6 Addressing:</strong>
                    <span className="text-secondary"> 128-bit address, Hexadecimal notation, Types</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#a855f7'}}>▸</span>
                    <strong style={{color: '#9333ea'}}>NAT & PAT:</strong>
                    <span className="text-secondary"> Static NAT, Dynamic NAT, Port Address Translation</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#a855f7'}}>▸</span>
                    <strong style={{color: '#9333ea'}}>Special IPs:</strong>
                    <span className="text-secondary"> Loopback, Broadcast, Multicast, APIPA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Routing & Switching */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #ec4899, #db2777)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🔀</span>
                    Part 4: Routing & Switching
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Routing Concepts:</strong>
                    <span className="text-secondary"> Static vs Dynamic Routing, Routing Tables, Metrics</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Routing Protocols:</strong>
                    <span className="text-secondary"> RIP, OSPF, EIGRP, BGP</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Switching Concepts:</strong>
                    <span className="text-secondary"> MAC Address Table, Switching Methods, VLANs</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Spanning Tree Protocol:</strong>
                    <span className="text-secondary"> STP, RSTP, Loop Prevention</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#ec4899'}}>▸</span>
                    <strong style={{color: '#db2777'}}>Inter-VLAN Routing:</strong>
                    <span className="text-secondary"> Router on a Stick, Layer 3 Switching</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Network Security */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #ef4444, #dc2626)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🔒</span>
                    Part 5: Network Security
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Security Threats:</strong>
                    <span className="text-secondary"> Malware, Phishing, DoS/DDoS, Man-in-the-Middle</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Firewalls:</strong>
                    <span className="text-secondary"> Packet Filtering, Stateful Inspection, Application Layer</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">VPN & Encryption:</strong>
                    <span className="text-secondary"> IPSec, SSL/TLS, Symmetric & Asymmetric Encryption</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Authentication:</strong>
                    <span className="text-secondary"> AAA, RADIUS, TACACS+</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="text-danger fw-bold me-2">▸</span>
                    <strong className="text-danger">Access Control Lists:</strong>
                    <span className="text-secondary"> Standard ACL, Extended ACL, Named ACL</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Wireless Networking */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #14b8a6, #0d9488)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">📡</span>
                    Part 6: Wireless Networking
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Wi-Fi Standards:</strong>
                    <span className="text-secondary"> 802.11a/b/g/n/ac/ax, Frequencies (2.4GHz, 5GHz, 6GHz)</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Wireless Security:</strong>
                    <span className="text-secondary"> WEP, WPA, WPA2, WPA3, Encryption Methods</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Access Points:</strong>
                    <span className="text-secondary"> SSID, Channels, Roaming, Mesh Networks</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Bluetooth & NFC:</strong>
                    <span className="text-secondary"> Pairing, Profiles, Short-range Communication</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#14b8a6'}}>▸</span>
                    <strong style={{color: '#0d9488'}}>Cellular Networks:</strong>
                    <span className="text-secondary"> 3G, 4G LTE, 5G Technologies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 7: Advanced Networking */}
            <div className="col-12">
              <div className="card shadow card-hover border-0">
                <div className="card-header text-white py-3" style={{background: 'linear-gradient(90deg, #f97316, #ea580c)'}}>
                  <h2 className="h4 mb-0">
                    <span className="me-2">🚀</span>
                    Part 7: Advanced Networking
                  </h2>
                </div>
                <div className="card-body p-4">
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Cloud Networking:</strong>
                    <span className="text-secondary"> Virtual Networks, Load Balancers, CDN</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>SDN & NFV:</strong>
                    <span className="text-secondary"> Software-Defined Networking, Network Function Virtualization</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>IoT Networking:</strong>
                    <span className="text-secondary"> MQTT, CoAP, LoRaWAN, Zigbee</span>
                  </div>
                  <div className="topic-item mb-3">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Quality of Service:</strong>
                    <span className="text-secondary"> Traffic Shaping, Prioritization, Bandwidth Management</span>
                  </div>
                  <div className="topic-item mb-0">
                    <span className="fw-bold me-2" style={{color: '#f97316'}}>▸</span>
                    <strong style={{color: '#ea580c'}}>Network Monitoring:</strong>
                    <span className="text-secondary"> SNMP, NetFlow, Syslog, Packet Analysis</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-5">
            <p className="text-muted">
              <small>📚 Complete Networking Curriculum • Basic to Advanced</small>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Networking;