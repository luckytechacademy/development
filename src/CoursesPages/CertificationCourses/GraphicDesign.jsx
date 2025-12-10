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

function GraphicDesign() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="bg-dark text-white text-center py-5"
        style={{ background: "linear-gradient(135deg, #1c1c1c, #798692ff)" }}
      >
        <h1 className="fw-bold display-4">Graphic Design</h1>
        <p className="lead text-light">
          Master Graphic Design From Basics to Advanced
        </p>
        <button className="btn btn-warning btn-lg mt-3 fw-semibold shadow">
          Start Learning
        </button>
      </div>

      <div className="container py-5">

        {/* What is Graphic Design */}
        <h1 className="text-secondary text-center">What is Graphic Design?</h1>
        <p className="text-center">
          Graphic Design is the art of combining text, images, colors, shapes,
          and layout to visually communicate a message.
        </p>

        {/* Basics */}
        {sectionHeading("Basics")}
        {cardGrid([
          {
            title: "What is Graphic Design?",
            text: "It is visual communication using text, colors, shapes, and layout.",
            icon: "bi-brush",
          },
          {
            title: "Why Use Graphic Design?",
            text: "To attract attention, communicate clearly, and build identity.",
            icon: "bi-bullseye",
          },
          {
            title: "Fields of Design",
            text: "Branding, social media, print design, UI/UX, illustration.",
            icon: "bi-grid",
          },
        ])}

        {/* Elements */}
        {sectionHeading("Elements of Design")}
        {cardGrid([
          { title: "Line", text: "Creates direction and separation.", icon: "bi-slash-lg" },
          { title: "Shape", text: "Geometric and organic forms.", icon: "bi-circle" },
          { title: "Color", text: "Defines mood and emotion.", icon: "bi-palette" },
          { title: "Texture", text: "Adds visual feel and depth.", icon: "bi-layers" },
          { title: "Space", text: "White space for clarity.", icon: "bi-bounding-box" },
          { title: "Typography", text: "Font style and arrangement.", icon: "bi-fonts" },
        ])}

        {/* Principles */}
        {sectionHeading("Principles of Design")}
        {cardGrid([
          { title: "Balance", text: "Visual stability in design.", icon: "bi-balance-scale" },
          { title: "Contrast", text: "Highlights important parts.", icon: "bi-toggle-on" },
          { title: "Hierarchy", text: "Controls the reading order.", icon: "bi-sort-up" },
          { title: "Alignment", text: "Keeps layout clean.", icon: "bi-align-start" },
          { title: "Proximity", text: "Groups related items.", icon: "bi-diagram-2" },
          { title: "Repetition", text: "Creates consistency.", icon: "bi-arrow-repeat" },
        ])}

        {/* Color Theory */}
        {sectionHeading("Color Theory")}
        {cardGrid([
          { title: "Color Wheel", text: "Primary, secondary & tertiary colors.", icon: "bi-palette-fill" },
          { title: "Color Harmony", text: "Complementary, analogous, triadic.", icon: "bi-diagram-3" },
          { title: "Color Psychology", text: "Colors create emotions.", icon: "bi-heart-fill" },
        ])}

        {/* Typography */}
        {sectionHeading("Typography")}
        {cardGrid([
          { title: "Serif Fonts", text: "Traditional & professional", icon: "bi-type" },
          { title: "Sans Serif Fonts", text: "Clean and modern", icon: "bi-type-bold" },
          { title: "Display/Script Fonts", text: "Decorative and stylish", icon: "bi-type-italic" },
        ])}

        {/* Layout */}
        {sectionHeading("Layout & Composition")}
        {cardGrid([
          { title: "Grid System", text: "Helps organize layout.", icon: "bi-table" },
          { title: "Rule of Thirds", text: "Better visual composition.", icon: "bi-view-stacked" },
          { title: "Z & F Patterns", text: "Used in website layouts.", icon: "bi-cursor" },
        ])}

        {/* Branding */}
        {sectionHeading("Branding & Identity")}
        {cardGrid([
          { title: "Logo Designing", text: "Brand's visual symbol.", icon: "bi-award" },
          { title: "Color Palette", text: "Brand identity colors.", icon: "bi-palette" },
          { title: "Typography Set", text: "Consistent font usage.", icon: "bi-type-h1" },
        ])}

        {/* Software */}
        {sectionHeading("Software Tools")}
        {cardGrid([
          { title: "Photoshop", text: "Photo editing & manipulation.", icon: "bi-image" },
          { title: "Illustrator", text: "Vector graphics & logo design.", icon: "bi-pen" },
          { title: "Figma", text: "UI/UX & digital design.", icon: "bi-phone" },
        ])}

        {/* Career */}
        {sectionHeading("Career Paths")}
        {cardGrid([
          { title: "Graphic Designer", text: "General design expert.", icon: "bi-person" },
          { title: "UI/UX Designer", text: "App & web interface designer.", icon: "bi-phone-landscape" },
          { title: "Branding Expert", text: "Logo and brand identity specialist.", icon: "bi-badge-ad" },
        ])}

      </div>

      {/* Footer */}
      <div className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 Graphic Design Course | All Rights Reserved</p>
      </div>
    </>
  );
}

export default GraphicDesign;
