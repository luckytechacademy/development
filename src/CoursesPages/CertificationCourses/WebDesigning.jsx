
function WebDesigning(){
    return(
        <>
       <div className="container py-5">

      {/* Page Heading */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">Web Designing Certification Course</h1>
        <p className="lead text-muted">Basic to Advanced Complete Theory (Stylish Bootstrap Version)</p>
      </div>

      {/* OS Section */}
      <div className="card shadow-lg mb-5 border-0 rounded-4">
        <div className="card-header bg-primary text-white rounded-top-4">
          <h2 className="h3 mb-0">Web Designing Certification Course</h2>
        </div>
        <div className="card-body p-4">
          {/* Accordion */}
          <div className="accordion" id="osAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#osBasic">
                  🔹Introduction to WEB
                </button>
              </h2>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#osAdvanced">
                  🔹2 HTML
                </button>
              </h2>
              <div id="osAdvanced" className="accordion-collapse collapse" data-bs-parent="#osAccordion">
                <div className="accordion-body">
                  <ul>
                    <li> HTML Basics</li>
                    <li> HTML5 Introduction</li>
                    <li> HTML5 Syntax</li>
                    <li> HTML5 New Elements</li>
                    <li>HTML5 Drag/Drop</li>
                    <li> HTML5 Video</li>
                    <li> HTML5 Audio</li>
                    <li> HTML5 Input Types</li>
                    <li>HTML5 Form Elements</li>
                    <li>HTML5 Form Attributes</li>
                    <li>New attributes for </li>
                    <li>HTML5 App Cache</li>
                    <li>HTML5 Web Workers</li>
                    <li> HTML Media</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* css */}
      <div className="card shadow-lg mb-5 border-0 rounded-4">
        <div className="card-header bg-success text-white rounded-top-4">
          <h2 className="h3 mb-0">CSS</h2>
        </div>
        <div className="card-body p-4">
          {/* Accordion */}
          <div className="accordion" id="netAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#netBasic">
                CSS
                </button>
              </h2>
              <div id="netBasic" className="accordion-collapse collapse show" data-bs-parent="#netAccordion">
                <div className="accordion-body">
                  <ul>
                   <li> Introduction of CSS3</li>
                   <li> Borders</li>
                   <li>CSS3 Backgrounds</li>
                   <li> CSS3 Text Effects</li>
                   <li>CSS3 Fonts</li>
                   <li>CSS3 2D Transforms</li>
                   <li>CSS3 3D Transforms</li>
                   <li>CSS3 Transitions</li>
                   <li> CSS3 Animations</li>
                   <li>CSS3 Multiple Columns</li>
                   <li>CSS3 User Interface</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* javascript section */}
        <div className="card shadow-lg mb-5 border-0 rounded-4">
        <div className="card-header bg-success text-white rounded-top-4">
          <h2 className="h3 mb-0">JavaScript</h2>
        </div>
        <div className="card-body p-4">
          {/* Accordion */}
          <div className="accordion" id="netAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#netBasic">
                JavaScript
                </button>
              </h2>
              <div id="netBasic" className="accordion-collapse collapse show" data-bs-parent="#netAccordion">
                <div className="accordion-body">
                  <ul>
                   <li> Introduction to java script</li>
                   <li> Document object model</li>
                   <li>Conditional statements</li>
                   <li>Loops</li>
                   <li> Window object Document object Arrays</li>
                   <li>Advanced JavaScript</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Bootstrap Section*/}
        <div className="card shadow-lg mb-5 border-0 rounded-4">
        <div className="card-header bg-success text-white rounded-top-4">
          <h2 className="h3 mb-0">Bootstrap</h2>
        </div>
        <div className="card-body p-4">
          {/* Accordion */}
          <div className="accordion" id="netAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#netBasic">
               Bootstrap
                </button>
              </h2>
              <div id="netBasic" className="accordion-collapse collapse show" data-bs-parent="#netAccordion">
                <div className="accordion-body">
                  <ul>
                   <li>  Introduction of Bootstrap</li>
                   <li>Bootstrap Grid System</li>
                   <li>Bootstrap Typography</li>
                   <li>Bootstrap Tables</li>
                   <li> Bootstrap Forms</li>
                   <li>Bootstrap Buttons</li>
                   <li> Bootstrap Images</li>
                   <li> Bootstrap Helper Classes</li>
                   <li>Bootstrap Responsive utilities</li>
                   <li>Bootstrap Print Classes</li>
                   <li>Bootstrap Dropdowns</li>
                   <li>Bootstrap Button groups</li>
                   <li>Bootstrap Input Groups</li>
                   <li>Bootstrap Navigation Elements</li>
                   <li> Bootstrap Navbar</li>
                   <li>Bootstrap Pagination</li>
                   <li>Bootstrap Badges</li>
                   <li> Bootstrap Alerts</li>
                   <li>Bootstrap Progress bars</li>
                   <li>Bootstrap Media Object</li>
                   <li>Bootstrap List Group</li>
                   <li>Bootstrap Panels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
        </>
    )
}
export default WebDesigning;