import "bootstrap/dist/css/bootstrap.min.css";

export default function AndroidApp() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-dark text-white text-center py-5" style={{ background: "linear-gradient(135deg, #1c1c1c, #343a40)" }}>
        <h1 className="fw-bold display-4">Android App Development</h1>
        <p className="lead text-light">Master Android From Basics to Advanced</p>
        <button className="btn btn-warning btn-lg mt-3 fw-semibold shadow">Start Learning</button>
      </div>

      <div className="container py-5">
        {/* Section Heading Component */}
        {sectionHeading("Basics")}        
        {cardGrid([
          { title: "What is Android?", text: "Android is an open-source OS by Google used worldwide.", icon: "bi-android" },
          { title: "Android Studio Setup", text: "Install Android Studio, SDKs, and tools.", icon: "bi-gear" },
          { title: "First Project", text: "Create your first Android app in minutes.", icon: "bi-lightning" },
        ])}

        {sectionHeading("Intermediate")}
        {cardGrid([
          { title: "Activities & Intents", text: "Navigate between screens with ease.", icon: "bi-layers" },
          { title: "RecyclerView", text: "Create efficient scrolling lists.", icon: "bi-list-task" },
          { title: "Fragments", text: "Build modular & flexible UIs.", icon: "bi-grid-1x2" },
        ])}

        {sectionHeading("Advanced")}
        {cardGrid([
          { title: "MVVM Architecture", text: "Build clean and scalable applications.", icon: "bi-diagram-3" },
          { title: "Room Database", text: "Store local data efficiently.", icon: "bi-archive" },
          { title: "API Integration", text: "Fetch data using Retrofit & APIs.", icon: "bi-cloud-download" },
        ])}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <p className="mb-0">© 2025 Android Learning Hub | All Rights Reserved</p>
      </footer>
    </>
  );
}

// Reusable Components
function sectionHeading(title) {
  return (
    <div className="text-center my-5">
      <h2 className="fw-bold mb-2 text-warning">{title}</h2>
      <div className="mx-auto" style={{ width: "80px", height: "4px", background: "#ffc107", borderRadius: "5px" }}></div>
    </div>
  );
}

function cardGrid(cards) {
  return (
    <div className="row g-4">
      {cards.map((card, index) => (
        <div className="col-md-4" key={index}>
          <div className="card shadow-lg h-100 border-0 rounded-4 hover-card" style={{ transition: "0.3s" }}>
            <div className="card-body p-4 text-center">
              <i className={`bi ${card.icon} display-4 text-warning mb-3`}></i>
              <h5 className="card-title fw-bold">{card.title}</h5>
              <p className="card-text text-muted">{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}