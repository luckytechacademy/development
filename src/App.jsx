import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componants/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import AllCourses from "./Pages/AllCourses.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import Blog from "./Pages/Blog.jsx";
import OurTeam from "./Pages/OurTeam.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Footer from "./Componants/Footer/Footer.jsx";
import WebDevelopment from "./CoursesPages/WebDevelopment/WebDevelopment.jsx";
import OnlineMarketingGuide from "./CoursesPages/OnlineMarketing/OnlineMarketingGuide.jsx";
import Devops from "./CoursesPages/Devops/Devops.jsx";
import OperatingSystemPage from "./CoursesPages/OperatingSystem/OperatingSystemPage.jsx";
import Bca from "./CoursesPages/BCA/Bca.jsx";
import Networking from "./CoursesPages/Networking/Networking.jsx";
import CyberSecurity from "./CoursesPages/CyberSecurity/CyberSecurity.jsx";
import Cloud from "./CoursesPages/Cloude/Cloud.jsx";
import DataAnalitics from "./CoursesPages/DataAnylist/DataAnalitics.jsx";
import Python from "./CoursesPages/CertificationCourses/Python.jsx";
import OperatingSystem_Networking from "./CoursesPages/CertificationCourses/OperatingSystem_Networking.jsx";
import WebDesigning from "./CoursesPages/CertificationCourses/WebDesigning.jsx";
import DataAnalyst from "./CoursesPages/CertificationCourses/DataAnalyst.jsx";
import AndroidApp from "./CoursesPages/CertificationCourses/AndroidApp.jsx";
import GraphicDesign from "./CoursesPages/CertificationCourses/GraphicDesign.jsx";
import DataEntry_Automation from "./CoursesPages/CertificationCourses/DataEntry_Automation.jsx";
import Msword_Excel from "./CoursesPages/CertificationCourses/Msword_Excel.jsx";

function App() {
  return (
    <Router>
      <Routes>

        {/* --------------------- */}
        {/* Routes with Navbar + Footer */}
        {/* --------------------- */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/courses"
          element={
            <>
              <Navbar />
              <AllCourses />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          }
        />

        <Route
          path="/blog"
          element={
            <>
              <Navbar />
              <Blog />
              <Footer />
            </>
          }
        />

        <Route
          path="/team"
          element={
            <>
              <Navbar />
              <OurTeam />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactUs />
              <Footer />
            </>
          }
        />

        <Route
          path="/WebDevelopment"
          element={
            <>
              <Navbar />
              <WebDevelopment />
              <Footer />
            </>
          }
        />

        <Route
          path="/OnlineMarketingGuide"
          element={
            <>
              <Navbar />
              <OnlineMarketingGuide />
              <Footer />
            </>
          }
        />

        <Route
          path="/Devops"
          element={
            <>
              <Navbar />
              <Devops />
              <Footer />
            </>
          }
        />

        <Route
          path="/OperatingSystemPage"
          element={
            <>
              <Navbar />
              <OperatingSystemPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/Bca"
          element={
            <>
              <Navbar />
              <Bca />
              <Footer />
            </>
          }
        />

        <Route
          path="/Networking"
          element={
            <>
              <Navbar />
              <Networking />
              <Footer />
            </>
          }
        />

        <Route
          path="/CyberSecurity"
          element={
            <>
              <Navbar />
              <CyberSecurity />
              <Footer />
            </>
          }
        />

        <Route
          path="/Cloud"
          element={
            <>
              <Navbar />
              <Cloud />
              <Footer />
            </>
          }
        />

        <Route
          path="/DataAnalitics"
          element={
            <>
              <Navbar />
              <DataAnalitics />
              <Footer />
            </>
          }
        />

        <Route
          path="/Python"
          element={
            <>
              <Navbar />
              <Python />
              <Footer />
            </>
          }
        />

        <Route
          path="/OperatingSystem_Networking"
          element={
            <>
              <Navbar />
              <OperatingSystem_Networking />
              <Footer />
            </>
          }

        />
        <Route
          path="/WebDesigning"
          element={
            <>
              <Navbar />
              <WebDesigning />
              <Footer />
            </>
          }
        />
        <Route
          path="/DataAnalyst"
          element={
            <>
              <Navbar />
              <DataAnalyst />
              <Footer />
            </>
          }
        />
        <Route
          path="/AndroidApp"
          element={
            <>
              <Navbar />
              <AndroidApp />
              <Footer />
            </>
          }
        />
        <Route
          path="/GraphicDesign"
          element={
            <>
              <Navbar />
              <GraphicDesign />
              <Footer />
            </>
          }
        />
        <Route
          path="/DataEntry_Automation"
          element={
            <>
              <Navbar />
              <DataEntry_Automation />
              <Footer />
            </>
          }
        />
        <Route
          path="/Msword_Excel"
          element={
            <>
              <Navbar />
              <Msword_Excel />
              <Footer />

            </>

          }
        />

        {/* --------------------- */}
        {/* 404 WITHOUT Navbar/Footer */}
        {/* --------------------- */}
        <Route
          path="*"
          element={
            <div
              style={{
                textAlign: "center",
                padding: "100px 20px",
                fontSize: "40px",
                fontWeight: "bold",
                color: "red",
              }}
            >
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
