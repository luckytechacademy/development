
import Card from "../Card";
import Highlight from "../Highlight";
import Code from "../Code";
function AdvancedSection() {
    return (
        <>
            <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-purple-700 mb-6 border-b-4 border-purple-600 pb-3">
                    Part 3: Advanced Concepts
                </h2>

                <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">Frontend Frameworks</h3>

                <Card highlight>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        <strong>React, Vue, Angular</strong> - These frameworks provide component-based architectures, virtual DOM implementations, and powerful state management.
                    </p>
                    <h4 className="text-lg font-bold text-gray-700 mt-4 mb-2">Component-Based Architecture</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">
                        Breaking UI into independent, reusable pieces that manage their own state and logic.
                    </p>
                    <h4 className="text-lg font-bold text-gray-700 mt-4 mb-2">Virtual DOM</h4>
                    <p className="text-gray-700 leading-relaxed">
                        A lightweight copy of the actual DOM kept in memory. Frameworks compare the virtual DOM with the real DOM and only update what changed, improving performance.
                    </p>
                </Card>

                <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">State Management</h3>

                <Card>
                    <p className="text-gray-700 leading-relaxed mb-2">
                        <strong>Local State vs Global State</strong> - Local state belongs to a single component, while global state is shared across multiple components.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        <strong>Tools:</strong> Redux, Vuex, Context API, Zustand
                    </p>
                </Card>

                <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">Performance Optimization</h3>

                <Card>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4"  style={{ listStyle: "none" }}>
                        <li><strong>Code Splitting</strong> - Breaking application code into smaller chunks</li>
                        <li><strong>Lazy Loading</strong> - Deferring loading of non-critical resources</li>
                        <li><strong>Caching Strategies</strong> - Using browser cache, service workers, CDNs</li>
                        <li><strong>Tree Shaking</strong> - Removing unused code during build</li>
                        <li><strong>Image Optimization</strong> - Compress and serve responsive images</li>
                    </ul>
                </Card>

                <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">Security Best Practices</h3>

                <Card highlight>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4"  style={{ listStyle: "none" }}>
                        <li><strong>XSS Prevention</strong> - Cross-Site Scripting protection</li>
                        <li><strong>CSRF Protection</strong> - Cross-Site Request Forgery tokens</li>
                        <li><strong>Content Security Policy</strong> - Control which resources can load</li>
                        <li><strong>HTTPS</strong> - Encrypt data in transit</li>
                        <li><strong>Authentication & Authorization</strong> - JWT, OAuth, secure sessions</li>
                    </ul>
                </Card>

                <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">Web APIs</h3>

                <Card>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4"  style={{ listStyle: "none" }}>
                        <li><strong>Fetch API</strong> - Modern way to make HTTP requests</li>
                        <li><strong>Local Storage/Session Storage</strong> - Store data in browser</li>
                        <li><strong>Geolocation API</strong> - Access user location</li>
                        <li><strong>Web Workers</strong> - Run scripts in background threads</li>
                        <li><strong>WebSockets</strong> - Real-time, bidirectional communication</li>
                        <li><strong>Service Workers</strong> - Enable offline functionality</li>
                    </ul>
                </Card>

                <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">Testing</h3>

                <Card>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4"  style={{ listStyle: "none" }}>
                        <li><strong>Unit Testing</strong> - Test individual components (Jest, Vitest)</li>
                        <li><strong>Integration Testing</strong> - Test how components work together</li>
                        <li><strong>E2E Testing</strong> - Test complete user flows (Cypress, Playwright)</li>
                        <li><strong>TDD</strong> - Test-Driven Development approach</li>
                    </ul>
                </Card>
            </div>
        </>
    )
}
export default AdvancedSection;