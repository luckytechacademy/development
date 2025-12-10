



function Bca() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Animated Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
              BCA Theory
            </h1>
            <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600 text-lg font-medium">Basic → Advanced</p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-8">
          
          {/* Card 1: Basics */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100 hover:border-blue-300">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💻</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Part 1: Basics of Computer & Programming
                </h2>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-blue-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-blue-700">Computer Basics:</strong>
                    <span className="text-gray-700"> Hardware, Software, OS, Input/Output devices</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-blue-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-blue-700">Number System:</strong>
                    <span className="text-gray-700"> Decimal, Binary, Octal, Hexadecimal conversions</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-blue-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-blue-700">Computer Networks:</strong>
                    <span className="text-gray-700"> LAN, WAN, MAN, Topologies, Network Devices</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-blue-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-blue-700">Operating System Basics:</strong>
                    <span className="text-gray-700"> Process, Thread, Kernel, Scheduling</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-blue-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-blue-700">MS Office:</strong>
                    <span className="text-gray-700"> Word, PowerPoint, Excel basics</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Programming */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-indigo-100 hover:border-indigo-300">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚙️</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Part 2: Programming Fundamentals
                </h2>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-indigo-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-indigo-700">C Programming:</strong>
                    <span className="text-gray-700"> Variables, Data Types, Loops, Functions, Arrays, Pointers</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-indigo-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-indigo-700">Object-Oriented Concepts:</strong>
                    <span className="text-gray-700"> Class, Object, Inheritance, Polymorphism</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-indigo-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-indigo-700">Java Basics:</strong>
                    <span className="text-gray-700"> JVM, Data Types, Constructors, Exception Handling</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-indigo-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-indigo-700">Data Structures:</strong>
                    <span className="text-gray-700"> Stack, Queue, LinkedList, Trees, Graphs</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-indigo-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-indigo-700">Algorithms:</strong>
                    <span className="text-gray-700"> Searching & Sorting Algorithms (Bubble, Merge, Quick Sort)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Database */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-purple-100 hover:border-purple-300">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🗄️</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Part 3: Database Management System
                </h2>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-purple-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-purple-700">Database Concepts:</strong>
                    <span className="text-gray-700"> Tables, Keys, Relationships</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-purple-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-purple-700">SQL Queries:</strong>
                    <span className="text-gray-700"> SELECT, UPDATE, DELETE, JOIN, GROUP BY, HAVING</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-purple-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-purple-700">Normalization:</strong>
                    <span className="text-gray-700"> 1NF, 2NF, 3NF, BCNF</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-purple-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-purple-700">Transactions:</strong>
                    <span className="text-gray-700"> ACID Properties, Deadlock, Concurrency</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: Web Development */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-pink-100 hover:border-pink-300">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🌐</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Part 4: Web Development
                </h2>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-pink-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-pink-700">HTML & CSS:</strong>
                    <span className="text-gray-700"> Tags, Forms, Flexbox, Grid, Animations</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-pink-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-pink-700">JavaScript:</strong>
                    <span className="text-gray-700"> ES6+, DOM, Events, Promises, Async/Await</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-pink-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-pink-700">React Basics:</strong>
                    <span className="text-gray-700"> Components, Props, State, Hooks</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-pink-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-pink-700">Backend Basics:</strong>
                    <span className="text-gray-700"> Node.js, Express.js, REST APIs</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 5: Advanced */}
          <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-orange-100 hover:border-orange-300">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-lg p-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Part 5: Advanced Concepts
                </h2>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-orange-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-orange-700">Machine Learning Basics:</strong>
                    <span className="text-gray-700"> Supervised, Unsupervised Learning</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-orange-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-orange-700">Cloud Computing:</strong>
                    <span className="text-gray-700"> SaaS, PaaS, IaaS, AWS/Azure/GCP basics</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-orange-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-orange-700">Cyber Security:</strong>
                    <span className="text-gray-700"> Encryption, Firewall, Threat Types</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-orange-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-orange-700">Software Engineering:</strong>
                    <span className="text-gray-700"> SDLC, Agile, Waterfall, UML</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200">
                  <span className="text-orange-500 font-bold mt-1">▸</span>
                  <div>
                    <strong className="text-orange-700">Mobile Development:</strong>
                    <span className="text-gray-700"> Android basics (Kotlin/Java)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          <p>Complete BCA Curriculum • From Fundamentals to Advanced Topics</p>
        </div>
      </div>
    </div>
  );
}

export default Bca;