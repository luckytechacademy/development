
import Card from "../Card";
import Highlight from "../Highlight";
function ArchitectureSection() {
    return (
        <>
            <div className="animate-fadeIn">
    <h2 className="text-3xl font-bold text-purple-700 mb-6 border-b-4 border-purple-600 pb-3">
       Part 4: Architecture & Patterns
     </h2>

     <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">Design Patterns</h3>

     <Card highlight>
       <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4"  style={{ listStyle: "none" }}>
         <li><strong>MVC</strong> - Model-View-Controller pattern</li>
         <li><strong>Observer Pattern</strong> - Subscribe to events and notifications</li>
         <li><strong>Factory Pattern</strong> - Create objects without specifying classes</li>
         <li><strong>Singleton Pattern</strong> - Ensure only one instance exists</li>
         <li><strong>Module Pattern</strong> - Encapsulate related code</li>
       </ul>
     </Card>

     <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">Modern Architecture</h3>

     <Card title="Server-Side Rendering (SSR)">
       <p className="text-gray-700 leading-relaxed">
         Rendering pages on the server for each request, improving initial load time and SEO.
       </p>
     </Card>

     <Card title="Static Site Generation (SSG)">
       <p className="text-gray-700 leading-relaxed">
         Pre-rendering pages at build time, creating static HTML files for exceptional performance.
       </p>
     </Card>

     <Card title="Progressive Web Apps (PWAs)">
       <p className="text-gray-700 leading-relaxed">
         Combine the best of web and native apps with offline functionality, push notifications, and installability.
       </p>
     </Card>

     <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">Web Performance Metrics</h3>

     <Card highlight>
       <h4 className="text-lg font-bold text-gray-700 mb-3">Core Web Vitals</h4>
       <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
         <li><strong>LCP</strong> - Largest Contentful Paint (loading performance)</li>
         <li><strong>FID</strong> - First Input Delay (interactivity)</li>
         <li><strong>CLS</strong> - Cumulative Layout Shift (visual stability)</li>
       </ul>
       <h4 className="text-lg font-bold text-gray-700 mb-3">Other Metrics</h4>
       <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4"  style={{ listStyle: "none" }}>
         <li><strong>TTFB</strong> - Time to First Byte</li>
         <li><strong>FCP</strong> - First Contentful Paint</li>
         <li><strong>TTI</strong> - Time to Interactive</li>
       </ul>
     </Card>

     <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">CI/CD Pipeline</h3>

     <Card>
       <p className="text-gray-700 leading-relaxed mb-2">
         <Highlight>Continuous Integration/Continuous Deployment</Highlight> - Automated pipelines that test, build, and deploy code changes, ensuring rapid and reliable releases.
       </p>
       <p className="text-gray-700 leading-relaxed">
         <strong>Tools:</strong> GitHub Actions, GitLab CI, Jenkins, CircleCI
       </p>
     </Card>

     <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">Web Accessibility (a11y)</h3>

     <Card>
       <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4"  style={{ listStyle: "none" }}>
         <li><strong>WCAG Guidelines</strong> - Web Content Accessibility Guidelines</li>
         <li><strong>Semantic HTML</strong> - Use appropriate elements</li>
         <li><strong>ARIA</strong> - Accessible Rich Internet Applications attributes</li>
         <li><strong>Keyboard Navigation</strong> - Ensure all functionality is keyboard accessible</li>
         <li><strong>Screen Reader Support</strong> - Test with assistive technologies</li>
       </ul>
     </Card>
   </div>
        </>
    )
}
export default ArchitectureSection;