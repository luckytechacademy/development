
function OperatingSystem_Networking() {
  return (
    <div className="container py-5">

      {/* Page Heading */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Operating System & Networking</h1>
        <p className="lead text-muted">Basic to Advanced Complete Theory (Stylish Bootstrap Version)</p>
      </div>

      {/* OS Section */}
      <div className="card shadow-lg mb-5 border-0 rounded-4">
        <div className="card-header bg-primary text-white rounded-top-4">
          <h2 className="h3 mb-0">Operating System (OS)</h2>
        </div>
        <div className="card-body p-4">
          <p className="text-muted mb-4">
            An Operating System (OS) is system software that manages hardware, software resources,
            and provides common services for computer programs.
          </p>

          {/* Accordion */}
          <div className="accordion" id="osAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#osBasic">
                  🔹 OS Basics
                </button>
              </h2>
              <div id="osBasic" className="accordion-collapse collapse show" data-bs-parent="#osAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>Definition, Functions, Components</li>
                    <li>Types of OS (Batch, Time-sharing, Distributed, Embedded)</li>
                    <li>System Calls & Kernel</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#osAdvanced">
                  🔹 Advanced OS Concepts
                </button>
              </h2>
              <div id="osAdvanced" className="accordion-collapse collapse" data-bs-parent="#osAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>Process Scheduling Algorithms</li>
                    <li>Deadlock Detection & Avoidance</li>
                    <li>Memory Management (Paging, Segmentation, Virtual Memory)</li>
                    <li>File Systems & I/O Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Networking Section */}
      <div className="card shadow-lg mb-5 border-0 rounded-4">
        <div className="card-header bg-success text-white rounded-top-4">
          <h2 className="h3 mb-0">Computer Networking</h2>
        </div>
        <div className="card-body p-4">
          <p className="text-muted mb-4">
            Networking is the practice of connecting computers to share data and resources using wired
            or wireless technologies.
          </p>

          {/* Accordion */}
          <div className="accordion" id="netAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#netBasic">
                  🌐 Networking Basics
                </button>
              </h2>
              <div id="netBasic" className="accordion-collapse collapse show" data-bs-parent="#netAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>What is Network? Types (LAN, MAN, WAN)</li>
                    <li>Topology (Bus, Star, Mesh)</li>
                    <li>Transmission Modes (Simplex, Half, Full Duplex)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#netAdvanced">
                  🌐 Advanced Networking
                </button>
              </h2>
              <div id="netAdvanced" className="accordion-collapse collapse" data-bs-parent="#netAccordion">
                <div className="accordion-body">
                  <ul>
                    <li>OSI & TCP/IP Model (All Layers)</li>
                    <li>IP Addressing, Subnetting</li>
                    <li>Routing Protocols (RIP, OSPF, BGP)</li>
                    <li>Network Security (Firewall, Encryption, IDS/IPS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default OperatingSystem_Networking;