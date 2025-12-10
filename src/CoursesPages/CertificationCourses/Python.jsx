import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { motion } from "framer-motion";

export default function Python() {
  return (
    <div className="container py-5">
      <motion.h1 
        className="text-center text-primary mb-5 fw-bold display-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}>
        Python (Basic → Advanced)
      </motion.h1>

      <div className="row g-4">
        {/* Card Component */}
        {[ 
          {title: "Introduction to Python", content: "Python is a high-level, interpreted programming language used for automation, AI, web development, data science, and more."},
          {title: "Python Basics", content: "Variables, data types, input/output, operators, syntax, indentation basics."},
          {title: "Control Flow", content: "if-else, loops, break, continue, pass, conditional logic."},
          {title: "Functions", content: "def, lambda, return values, arguments, scope (local/global)."},
          {title: "Data Structures", content: "List, Tuple, Set, Dictionary – their operations and uses."},
          {title: "Object-Oriented Programming", content: "Class, objects, constructor, inheritance, polymorphism, encapsulation."},
          {title: "Modules & Packages", content: "import, pip, custom modules, virtual environments."},
          {title: "File Handling", content: "open, read, write, modes, with-as, handling structured data."},
          {title: "Exception Handling", content: "try-except-finally, raising errors, custom exceptions."},
          {title: "Advanced Python", content: "Decorators, generators, iterators, comprehensions, map/filter/reduce."},
          {title: "Popular Libraries", content: "NumPy, Pandas, Matplotlib, Django, Flask, TensorFlow, PyTorch."}
        ].map((section, index) => (

          <motion.div 
            key={index}
            className="col-md-6 col-lg-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="card shadow-lg border-0 h-100 rounded-4">
              <div className="card-body p-4">
                <h4 className="text-success fw-bold mb-2">{section.title}</h4>
                <p className="text-secondary">{section.content}</p>
              </div>
            </div>
          </motion.div>

        ))}
      </div>

      <motion.div 
        className="mt-5 p-4 bg-light rounded-4 shadow-sm border-start border-4 border-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="fw-bold text-primary">Conclusion</h3>
        <p className="text-secondary mb-0">
          Python is one of the most powerful and beginner-friendly languages. Once you learn the basics and advanced concepts, you can build automation tools, websites, games, AI models, and much more.
        </p>
      </motion.div>
    </div>
  );
}