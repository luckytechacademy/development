
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Topcoursers, Containercard } from "../Componants/Topcourses/Topcoursers.jsx";
import React from "react";
import WelcomeAllCourses from '../Componants/Coursesimage/CoursesSlideImage.jsx';
function AllCourses() {
    return (
        <>
          <WelcomeAllCourses/>
            <Topcoursers />
            <Containercard />
          
        </>
    )
}

export default AllCourses;
