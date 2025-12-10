
import Card from "../Card";
import Highlight from "../Highlight";
import Code from "../Code";

function FoundationSection() {
  return (
    <>
      <div className="animate-fadeIn">

        <h2 className="text-3xl font-bold text-purple-700 mb-6 border-b-4 border-purple-600 pb-3">
          Part 1: Foundational Concepts
        </h2>

        <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">
          How the Web Works
        </h3>

        <Card title="Client-Server Architecture" highlight>
          <p className="text-gray-700 leading-relaxed">
            The web operates on a <Highlight>request-response model</Highlight>. When you type a URL,
            your browser (client) sends an HTTP request to a server, which processes it and sends
            back a response containing the requested resources.
          </p>
        </Card>

        <Card title="DNS (Domain Name System)">
          <p className="text-gray-700 leading-relaxed">
            DNS translates human-readable domain names (like google.com) into IP addresses.
            It acts like the internet’s phone book.
          </p>
        </Card>

        <Card title="HTTP/HTTPS Protocol">
          <p className="text-gray-700 leading-relaxed mb-3">
            HTTP is the main protocol of the web. HTTPS adds SSL/TLS encryption for security.
          </p>
          <p className="font-semibold text-gray-800 mb-2">Common HTTP Methods:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4"  style={{ listStyle: "none" }}>
            <li><Code>GET</Code> - Retrieve data</li>
            <li><Code>POST</Code> - Submit data</li>
            <li><Code>PUT</Code> - Update data</li>
            <li><Code>DELETE</Code> - Remove data</li>
          </ul>
        </Card>

        <h3 className="text-2xl font-bold text-indigo-600 mt-8 mb-4">
          Core Web Technologies
        </h3>

        <Card title="HTML (HyperText Markup Language)" highlight>
          <p className="text-gray-700 leading-relaxed">
            HTML provides the <Highlight>structure and semantic meaning</Highlight> of web content.
            HTML5 introduced semantic elements such as header, nav, article, and footer.
          </p>
        </Card>

        <Card title="CSS (Cascading Style Sheets)">
          <p className="text-gray-700 leading-relaxed">
            CSS controls the visual appearance.  
            Cascading means styles can be inherited or overridden using specificity.
          </p>
        </Card>

        <Card title="JavaScript">
          <p className="text-gray-700 leading-relaxed">
            JavaScript adds <Highlight>interactivity and dynamic behavior</Highlight> to websites.
            It manipulates the DOM, handles events, interacts with APIs, and more.
          </p>
        </Card>

      </div>
    </>
  );
}

export default FoundationSection;
