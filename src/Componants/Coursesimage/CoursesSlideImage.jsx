
import "./CoursesSlideImage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WelcomeAllCourses() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // animation duration & trigger only once
    }, []);

    return (
        <div className="col welcome-section" data-aos="fade-up">
            <h1>Welcome To Our Courses</h1>
            <p>
                Our courses are designed to help you build real-world skills and
                achieve your career goals. From beginner to advanced levels, we offer
                a variety of programs that combine theory with practical learning. Whether
                you’re interested in web development, programming, design, or data science
                — our expert-led courses provide hands-on experience and industry-relevant
                knowledge. Learn, grow, and take the next step toward your dream career with us!
            </p>
        </div>
    );
}

export default WelcomeAllCourses;