import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Topcourses.css';
import { useState } from 'react';
//  make the array of objects for cards data
const ProgrammingCourses = [
  {
    id: 1,
    title: "Web Development",
    image: "src/assets/images/cources/Web development2.jpg",
    duration: "6 Months",
    eligibility: "12th Pass",
    fees: 15000,
    off: "30% OFF",
    link:"/WebDevelopment"
  },
  {
    id: 2,
    title: "Online Marketing",
    image: "src/assets/images/cources/onlinemarketing.jpeg",
    duration: "6 Months",
    eligibility: "12th Pass",
    fees: 15000,
    off: "30% OFF",
    link: "/OnlineMarketingGuide"
  },
  {
    id: 3,
    title: "DevOps",
    image: "src/assets/images/cources/Devops.png",
    duration: "12 Months",
    eligibility: "12th Pass",
    fees: 25000,
    link: "/Devops"
  },
  {
    id: 4,
    title: "Operating System",
    image: "src/assets/images/cources/operating-system.jpg",
    duration: "6 Months",
    eligibility: "12th Pass",
    fees: 15000,
    link: "/OperatingSystemPage"
  },
  {
    id: 5,
    title: "BCA",
    image: "src/assets/images/cources/bca.jpeg",
    duration: "6 Months",
    eligibility: "12th Pass",
    fees: 15000,
    off: "30% OFF",
    link: "/Bca"
  },
  {
    id: 6,
    title: "Computer Networking",
    image: "src/assets/images/cources/computer-netWorkin.jpg",
    duration: "6 Months",
    eligibility: "12th Pass",
    fees: 15000,
    off: "30% OFF",
    link: "/Networking"
  },
  {
    id: 7,
    title: "Cyber Security",
    image: "src/assets/images/cources/Cyber-security.jpg",
    duration: "6 Months",
    eligibility: "12th Pass",
    fees: 15000,
    off: "30% OFF",
    link: "/CyberSecurity"
  },
  {
    id: 8,
    title: "Cloud Computing",
    image: "src/assets/images/cources/cloud.jpg",
    duration: "6 Months",
    eligibility: "12th Pass",
    fees: 15000,
    off: "30% OFF",
    link: "/Cloud"
  },
  {
    id: 9,
    title: "Data Analytics",
    image: "src/assets/images/cources/data-analytics.jpg",
    duration: "6 Months",
    eligibility: "12th Pass",
    fees: 15000,
    off: "30% OFF",
    link: "/DataAnalitics"
  }

];
const CertificateCourses = [
  // Add certificate courses data here

  {
    id: 1,
    title: "Programming Languages",
    image: "src/assets/images/cources/python.png",
    fees:"45000",
    duration: "6 Months",
    eligibility: "12th Pass",
    link: "/Python"
  },
  {
    id: 2,
    title: "Networking & Operating System",
    image: "src/assets/images/cources/computer-netWorkin.jpg",
    fees:"45000",
    duration: "6 Months",
    eligibility: "12th Pass",
    link: "/OperatingSystem_Networking"
  },
  {
    id: 3,
    title: "Certificate Course in Web Designing",
    image: "src/assets/images/cources/webdesign.png.jpeg",
    fees:"25000",
    duration: "4 Months",
    eligibility: "12th Pass",
    link: "/WebDesigning"
  },
  {
    id: 4,
    title: "Certificate Course in Frameworks",
    image: "src/assets/images/cources/Framework-in-Programming.jpeg",
    fees:"45000",
    duration: "6 Months",
    eligibility: "12th Pass",
    link: "Slider.jsx"
  },
  {
    id: 5,
    title: "Business (Data) Analytics Course",
    image: "src/assets/images/cources/dataanylist.webp",
    fees:"65000",
    duration: "9 Months",
    eligibility: "12th Pass",
    link: "/DataAnalyst"
  },
  {
    id: 6,
    title: "Android App Development",
    image: "src/assets/images/cources/cource-6.jpg",
    fees:"30000",
    duration: "6 Months",
    eligibility: "12th Pass",
    link: "/AndroidApp"
  },
  {
    id: 7,
    title: "Graphic Designing",
    image: "src/assets/images/cources/graphic-design.jpeg",
    fees:"35000",
    duration: "12 Months",
    eligibility: "12th Pass",
    link: "/GraphicDesign"
  },
  {
    id: 8,
    title: "Data Entry & Office Automation",
    image: "src/assets/images/cources/data-entry-automation.jpeg",
    fees:"55000",
    duration: "12 Months",
    eligibility: "12th Pass",
    link: "/DataEntry_Automation"
  },
  {
    id: 9,
    title: "MS Office / Excel Advanced",
    image: "src/assets/images/cources/ms-office-advance.jpeg",
    fees:"10000",
    duration: "6 Months",
    eligibility: "10th Pass",
    link: "/Msword_Excel"

  }

];

const Web_Development_Courses = [
  { id: 1, title: "	Full Stack with Python & Django", image: "src/assets/images/cources/python.png",fees:"30000", duration: "6 Months", eligibility: "12th Pass",link: "/Python" },
  { id: 2, title: "	Full Stack Web Development with Java", image: "src/assets/images/cources/cource-4.jpg",fees:"30000", duration: "6 Months", eligibility: "12th Pass",link: "Slider.jsx" },
  { id: 3, title: "	Full Stack with React and Node JS", image: "src/assets/images/cources/React-With-Node-JS.png",fees:"45000", duration: "9 Months", eligibility: "12th Pass", link: "Slider.jsx"},
  { id: 4, title: "	Full Stack Web Development with Php", image: "src/assets/images/cources/images.png",fees:"30000", duration: "6 Months", eligibility: "12th Pass",link: "Slider.jsx" },
  { id: 5, title: "	Diploma in Web Designing Course", image: "src/assets/images/cources/Web-Master-Course.jpeg",fees:"110000", duration: "12 Months", eligibility: "12th Pass",link: "Slider.jsx" },
  { id: 6, title: "	Database Certification Course", image: "src/assets/images/cources/dbdm-large.png",fees:"45000" ,duration: "6 Months", eligibility: "12th Pass",link: "Slider.jsx" },
  { id: 7, title: "UI/UX Fundamentals", image: "src/assets/images/cources/difference-between-ui-ux.webp",fees:"55000", duration: "12 Months", eligibility: "12th Pass",link: "Slider.jsx" },
  { id: 8, title: "Ruby on Rails", image: "src/assets/images/cources/ruby-on-rails-1.jpeg", duration: "12 Months",fees:"65000", eligibility: "12th Pass", link: "Slider.jsx"},
  { id: 9, title: "RESTful API Development", image: "src/assets/images/cources/imagesAPI.png",fees:"20000", duration: "3 Months", eligibility: "10th Pass", link: "Slider.jsx"},

];
const Other_Courses = [
  { id: 1, title: "Lucky Tech Advanced Diploma Courses", image: "src/assets/images/cources/hands-typing-on-laptop-programming-600nw-2480023489.jpeg",fees:"110000", duration: "12 Months", eligibility: "12th Pass",  link: "Slider.jsx"},
  { id: 2, title: "	Diploma in Python Programming Course", image: "src/assets/images/cources/python.png", fees:"70000",duration: "12 Months", eligibility: "12th Pass",  link: "Slider.jsx"},
  { id: 3, title: "	Data Science & Machine Learning", image: "src/assets/images/cources/types-of-machine-learning.jpg.optimal.jpeg",fees:"18999", duration: "4 Months", eligibility: "10th Pass",  link: "Slider.jsx"},
  { id: 4, title: "	AWS Training", image: "src/assets/images/cources/Amazon_web_services_main_image_2_84c24de2df.png",fees:"14999", duration: "3 Months", eligibility: "12th Pass",  link: "Slider.jsx"},
  { id: 5, title: "	AZURE Training", image: "src/assets/images/cources/azure-500x281-v2.jpeg",fees:"14999",duration: "2 Months", eligibility: "10th Pass",  link: "Slider.jsx"},
  { id: 6, title: "	REDHAT Training", image: "src/assets/images/cources/Redhat-logo.webp",fees:"18999", duration: "4 Months", eligibility: "12th Pass",  link: "Slider.jsx"},
  { id: 7, title: "	2D Game Development", image: "src/assets/images/cources/2d-game-development-guide.jpeg",fees:"35000", duration: "6 Months", eligibility: "12th Pass",  link: "Slider.jsx"},
  { id: 8, title: "	AI Course", image: "src/assets/images/cources/Ai.jpeg",fees:"14999", duration: "2 Months", eligibility: "12th Pass",  link: "Slider.jsx"},
  { id: 9, title: "	Digital Marketing", image: "src/assets/images/cources/onlinemarketing.jpeg", fees:"34999",duration: "4 Months", eligibility: "12th Pass",  link: "Slider.jsx"},

];


// Top heading component
export function Topcoursers() {
  return (
    <div className="container-fluid text-center my-4">
      <div className="row">
        <div className="col">
          <h1>Top Courses</h1>
        </div>
      </div>
    </div>
  );
}


//  Containercard component (dynamic cards)
export function Containercard() {
  const [selectCatagory, setSelectCatagory] = useState("ProgrammingCourses");

  const getCourses = () => {
    if (selectCatagory === "ProgrammingCourses") return ProgrammingCourses;
    if (selectCatagory === "CertificateCourses") return CertificateCourses;
    if (selectCatagory === "Web_Development_Courses") return Web_Development_Courses;
    if (selectCatagory === "Other_Courses") return Other_Courses;

    return [];


  }
  const courses = getCourses();

  return (

    <>
  

      <div className="container-fluid text-center my-4">
        <div className="row mb-4">
          <div className="col d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-primary" onClick={() => setSelectCatagory("ProgrammingCourses")}>Programming Courses</button>
            <button className="btn btn-primary" onClick={() => setSelectCatagory("CertificateCourses")}>Certificate Courses</button>
            <button className="btn btn-primary" onClick={() => setSelectCatagory("Web_Development_Courses")}>Web_Development_Courses</button>
            <button className="btn btn-primary" onClick={()=>setSelectCatagory("Other_Courses")}>Other Courses</button>
          </div>
        </div>
        <h5>{selectCatagory}</h5>
      </div>
      <div className="container text-center container_courses">
        
        <div className="row justify-content-center">

          {/* yahan map se multiple cards generate honge */}
          {courses.map((course) => (
            <div className="col-md-4 mb-4" key={course.id}>
              <div className="card">
                <img src={course.image} alt={course.title} className="card-img-top" />
                <div className="info">
                  <div className="title">{course.title}</div>
                  <div className="subtitle">--------------------</div>
                </div>

                <div className="hover-panel">
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <i className="fas fa-graduation-cap"></i> Fees
                      <span className="badge text-bg-primary rounded-pill">
                        <del style={{ color: "red" }}>{course.fees}</del> {course.off}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <i className="fas fa-clock"></i> Duration
                      <span className="badge text-bg-primary rounded-pill">{course.duration}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <i className="fas fa-user-graduate"></i> Eligibility
                      <span className="badge text-bg-primary rounded-pill">{course.eligibility}</span>
                    </li>
                  </ul>
                  <div className="btn">
                    <a href={course.link}>View More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
     
    </>

  );
}


