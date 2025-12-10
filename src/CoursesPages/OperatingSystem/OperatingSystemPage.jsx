export default function OperatingSystemPage() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center drop-shadow-lg">Operating System (Basic → Advanced)</h1>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3">
        <h2 className="text-2xl font-semibold text-purple-600 text-center">1. Introduction to Operating Systems</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>OS is a system software that works as an interface between user and hardware.</li>
          <li>Without OS, computer hardware cannot be used effectively.</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3">
        <h2 className="text-2xl font-semibold text-purple-600">2. Functions of Operating System</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Process Management</li>
          <li>Memory Management</li>
          <li>File System Management</li>
          <li>I/O Device Management</li>
          <li>Security & Protection</li>
          <li>Error Handling</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3">
        <h2 className="text-2xl font-semibold text-purple-600">3. Types of Operating Systems</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Batch Operating System</li>
          <li>Time-Sharing OS</li>
          <li>Distributed OS</li>
          <li>Real-Time OS (RTOS)</li>
          <li>Multi-tasking / Multi-processing OS</li>
          <li>Mobile OS (Android, iOS)</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3">
        <h2 className="text-2xl font-semibold text-purple-600">4. Process Management</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Process: a running program</li>
          <li>Process States: New → Ready → Running → Waiting → Terminated</li>
          <li>CPU Scheduling Algorithms: FCFS, SJF, Priority, Round Robin, Multilevel Queue</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3">
        <h2 className="text-2xl font-semibold text-purple-600">5. Threads</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Lightweight units of a process</li>
          <li>User-level & Kernel-level threads</li>
          <li>Faster execution & better CPU utilization</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3">
        <h2 className="text-2xl font-semibold text-purple-600">6. Memory Management</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Contiguous Memory Allocation</li>
          <li>Paging (Frames & Pages)</li>
          <li>Segmentation</li>
          <li>Virtual Memory (Demand Paging, Thrashing)</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3">
        <h2 className="text-2xl font-semibold text-purple-600">7. Deadlocks</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait</li>
          <li>Handling: Prevention, Avoidance (Banker's Algorithm), Detection & Recovery</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3">
        <h2 className="text-2xl font-semibold text-purple-600">8. File System</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>File organization & directories</li>
          <li>Allocation: Contiguous, Linked, Indexed</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3">
        <h2 className="text-2xl font-semibold text-purple-600">9. I/O Management</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Interrupts</li>
          <li>Device Drivers</li>
          <li>DMA (Direct Memory Access)</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3">
        <h2 className="text-2xl font-semibold text-purple-600">10. Security & Protection</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>User Authentication</li>
          <li>Access Control</li>
          <li>Encryption & Firewalls</li>
        </ul>
      </section>

      <section className="bg-white shadow-lg rounded-2xl p-5 border border-purple-100 hover:shadow-xl transition-all duration-300 space-y-3 pb-10">
        <h2 className="text-2xl font-semibold text-purple-600">11. Modern OS Concepts</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Virtualization</li>
          <li>Containerization (Docker)</li>
          <li>Cloud Operating Concepts</li>
        </ul>
      </section>
    </div>
  );
}
