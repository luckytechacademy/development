import Card from "../Card";
import Highlight from "../Highlight";
import Code from "../Code";
function IntermediateSection() {
  return (
    <>
      <div className="animate-fadeIn">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 border-b-4 border-purple-600 pb-3">
          Part 2: Intermediate Concepts
        </h2>

        <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">The DOM (Document Object Model)</h3>

        <Card highlight>
          <p className="text-gray-700 leading-relaxed mb-3">
            The DOM is a programming interface that represents HTML documents as a <Highlight>tree structure</Highlight>. Each HTML element becomes a node that JavaScript can access and manipulate.
          </p>
          <p className="font-semibold text-gray-800 mb-2">Common DOM Operations:</p>
          <ol className="list-disc list-inside text-gray-700 space-y-1 ml-4 "  style={{ listStyle: "none" }}>
            <li>Selecting elements: <Code>querySelector</Code>, <Code>getElementById</Code></li>
            <li>Modifying content: <Code>innerHTML</Code>, <Code>textContent</Code></li>
            <li>Changing styles and attributes</li>
            <li>Adding/removing elements dynamically</li>
          </ol>
        </Card>

        <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">CSS Box Model</h3>

        <Card>
          <p className="text-gray-700 leading-relaxed mb-3">Every HTML element is treated as a rectangular box with four areas:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4"  style={{ listStyle: "none" }}>
            <li><strong>Content</strong> - The actual content of the element</li>
            <li><strong>Padding</strong> - Space between content and border</li>
            <li><strong>Border</strong> - The edge surrounding the padding</li>
            <li><strong>Margin</strong> - Space outside the border</li>
          </ul>
        </Card>

        <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">Responsive Design</h3>

        <Card title="Mobile-First Approach" highlight>
          <p className="text-gray-700 leading-relaxed">
            Designing for mobile devices first, then progressively enhancing for larger screens.
          </p>
        </Card>

        <Card title="Media Queries">
          <p className="text-gray-700 leading-relaxed">
            CSS rules that apply styles based on device characteristics like screen width, height, or orientation.
          </p>
        </Card>

        <Card title="Flexible Layouts">
          <p className="text-gray-700 leading-relaxed">
            Using relative units (%, em, rem, vw, vh) instead of fixed pixels allows content to adapt to different screen sizes.
          </p>
        </Card>

        <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">CSS Flexbox and Grid</h3>

        <Card title="Flexbox">
          <p className="text-gray-700 leading-relaxed">
            A <Highlight>one-dimensional layout system</Highlight> perfect for distributing space along a single axis (row or column).
          </p>
        </Card>

        <Card title="CSS Grid">
          <p className="text-gray-700 leading-relaxed">
            A <Highlight>two-dimensional layout system</Highlight> that works with rows and columns simultaneously. Ideal for complex page layouts.
          </p>
        </Card>

        <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">JavaScript ES6+ Features</h3>

        <Card>
          <ul className="list-none list-inside text-gray-700 space-y-2 ml-4"  style={{ listStyle: "none" }}>
            <li><strong>Arrow Functions</strong> - Concise syntax for writing functions</li>
            <li><strong>Destructuring</strong> - Extract values from arrays or objects</li>
            <li><strong>Spread/Rest Operators</strong> - Expand or collect elements</li>
            <li><strong>Template Literals</strong> - String interpolation with backticks</li>
            <li><strong>Modules</strong> - Import/export functionality across files</li>
            <li><strong>Promises</strong> - Handle asynchronous operations</li>
            <li><strong>Async/Await</strong> - Syntactic sugar for working with promises</li>
          </ul>
      </Card>
    </div >

        </>
    )
}
export default IntermediateSection;