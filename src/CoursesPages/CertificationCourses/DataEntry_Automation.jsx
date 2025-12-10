import "bootstrap/dist/css/bootstrap.min.css";

function sectionHeading(title) {
  return (
    <h2 className="fw-bold text-center my-5 text-secondary border-bottom pb-2">
      {title}
    </h2>
  );
}

function cardGrid(items) {
  return (
    <div className="row g-4">
      {items.map((item, index) => (
        <div className="col-md-4" key={index}>
          <div className="card shadow h-100 text-center p-4 border-0">
            <i className={`bi ${item.icon} display-5 text-warning mb-3`}></i>
            <h5 className="fw-bold">{item.title}</h5>
            <p className="text-muted">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DataEntry_Automation() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-dark text-white text-center py-5"
        style={{ background: "linear-gradient(135deg, #1c1c1c, #798692ff)" }}
      >
        <h1 className="fw-bold display-4">Data Entry Automation</h1>
        <p className="lead text-light">
          Learn Data Entry Automation from Basics to Advanced
        </p>
        <button className="btn btn-warning btn-lg mt-3 fw-semibold shadow">
          Start Learning
        </button>
      </div>

      <div className="container py-5">
        {/* Definition */}
        <h1 className="text-secondary text-center">
          1. What is Data Entry Automation?
        </h1>
        <p className="text-center">
          Data Entry Automation means automatically entering, processing, and managing
          data using software, scripts, RPA, OCR, or AI instead of manual typing.
        </p>

        {/* Purpose */}
        {sectionHeading("Purpose")}
        {cardGrid([
          {
            title: "Save Time",
            text: "Automation performs tasks faster than manual data entry.",
            icon: "bi-clock",
          },
          {
            title: "Reduce Errors",
            text: "Decreases human mistakes in data entry.",
            icon: "bi-bug",
          },
          {
            title: "Increase Productivity",
            text: "Employees focus on important tasks while automation works.",
            icon: "bi-graph-up-arrow",
          },
        ])}

        {/* Types */}
        {sectionHeading("Types of Data Entry Automation")}
        {cardGrid([
          {
            title: "Rule-Based Automation",
            text: "Includes Excel Macros, VBA, and basic Python scripts.",
            icon: "bi-gear",
          },
          {
            title: "RPA (Robotic Process Automation)",
            text: "Automates large-scale repetitive tasks using UiPath, BluePrism.",
            icon: "bi-robot",
          },
          {
            title: "OCR Automation",
            text: "Extracts text from scanned images and PDFs.",
            icon: "bi-file-earmark-text",
          },
          {
            title: "AI-Based Automation",
            text: "Smart extraction, form filling, validation using AI.",
            icon: "bi-cpu",
          },
        ])}

        {/* Components */}
        {sectionHeading("Components of Automation System")}
        {cardGrid([
          {
            title: "Data Sources",
            text: "PDFs, Excel, websites, emails, databases.",
            icon: "bi-folder2-open",
          },
          {
            title: "Processing Engine",
            text: "OCR, NLP, scripts, bots.",
            icon: "bi-cpu-fill",
          },
          {
            title: "Data Cleaning",
            text: "Format fixing, removing duplicates, validation.",
            icon: "bi-filter-square",
          },
          {
            title: "Storage Output",
            text: "Excel, CRM, ERP, or database systems.",
            icon: "bi-database",
          },
        ])}

        {/* Tools */}
        {sectionHeading("Tools Used")}
        {cardGrid([
          { title: "Excel / Google Sheets", text: "Basic automation.", icon: "bi-table" },
          { title: "Python", text: "Advanced scripting using pandas, OCR.", icon: "bi-code-slash" },
          { title: "UiPath / RPA", text: "Enterprise automation tools.", icon: "bi-robot" },
          { title: "OCR Tools", text: "Tesseract, Google Vision, AWS Textract.", icon: "bi-filetype-pdf" },
          { title: "AI Tools", text: "ChatGPT, Document AI, Azure Form Recognizer.", icon: "bi-lightning" },
        ])}

        {/* Workflow */}
        {sectionHeading("Automation Workflow")}
        {cardGrid([
          { title: "Input", text: "Import PDF, image, Excel, or website data.", icon: "bi-box-arrow-in-down" },
          { title: "Extraction", text: "OCR or AI extracts useful information.", icon: "bi-search" },
          { title: "Validation", text: "Rules and AI detect incorrect values.", icon: "bi-shield-check" },
          { title: "Transformation", text: "Cleans and formats data.", icon: "bi-sliders" },
          { title: "Storage", text: "Saves data to Excel or database.", icon: "bi-save" },
          { title: "Reporting", text: "Creates automated response or reports.", icon: "bi-bar-chart" },
        ])}

        {/* Career */}
        {sectionHeading("Career Opportunities")}
        {cardGrid([
          { title: "RPA Developer", text: "Builds automation bots.", icon: "bi-robot" },
          { title: "Automation Analyst", text: "Creates workflow automation.", icon: "bi-diagram-3" },
          { title: "Data Entry Specialist", text: "Works with automated systems.", icon: "bi-person-check" },
        ])}
      </div>

      {/* Footer */}
      <div className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 Data Entry Automation Course | All Rights Reserved</p>
      </div>
    </>
  );
}

export default DataEntry_Automation;