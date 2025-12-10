import React from "react";

export default function Msword_Excel() {
  return (
    <div className="container py-5">
      <header className="mb-5 border-bottom pb-3">
        <h1 className="fw-bold">MS Word & Excel — Basic to Advanced</h1>
        <p className="text-muted mt-2">Comprehensive theory guide covering core to advanced concepts.</p>
      </header>

      <div className="row g-4">
        {/* Word */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title h4 fw-bold mb-3">Microsoft Word</h2>

              <h5 className="fw-semibold">Basic</h5>
              <ul className="mb-3">
                <li>Document basics: create, save, page setup.</li>
                <li>Text editing, find & replace, formatting.</li>
                <li>Shortcuts: Ctrl+B, Ctrl+I, Ctrl+U etc.</li>
              </ul>

              <h5 className="fw-semibold">Intermediate</h5>
              <ul className="mb-3">
                <li>Styles, headings, TOC, layout tools.</li>
                <li>Tables, images, captions, alt text.</li>
                <li>References: citations, bibliography.</li>
              </ul>

              <h5 className="fw-semibold">Advanced</h5>
              <ul>
                <li>Mail merge with Excel data.</li>
                <li>Track changes, comments, protect docs.</li>
                <li>Macros (VBA) automation.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Excel */}
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title h4 fw-bold mb-3">Microsoft Excel</h2>

              <h5 className="fw-semibold">Basic</h5>
              <ul className="mb-3">
                <li>Cells, rows, columns, data entry.</li>
                <li>Basic formulas: SUM, AVG, COUNTIF.</li>
                <li>Shortcuts: Ctrl+Arrow, F2 edit cell.</li>
              </ul>

              <h5 className="fw-semibold">Intermediate</h5>
              <ul className="mb-3">
                <li>Tables, filtering, conditional formatting.</li>
                <li>VLOOKUP, XLOOKUP, INDEX/MATCH.</li>
                <li>Charts & data visualization.</li>
              </ul>

              <h5 className="fw-semibold">Advanced</h5>
              <ul>
                <li>PivotTables & PivotCharts.</li>
                <li>Power Query & Data Model.</li>
                <li>Macros, VBA automation.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mt-5">
        <div className="card-body">
          <h4 className="fw-bold">Practice & Exercises</h4>
          <ul className="mt-3">
            <li>Create a Word report with TOC & images.</li>
            <li>Excel budget sheet + PivotTable analysis.</li>
            <li>Record macro to auto-format headings.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}