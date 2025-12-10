
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function WelcomeOurTeam() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // animation duration & trigger only once
    }, []);

    return (
        <div className="col welcome-section" data-aos="fade-up">
            <h1>Meet to Our Team</h1>
            <p>
                We are a team of passionate and creative professionals
                who believe in teamwork, innovation, and excellence. Each member
                of our team brings unique skills, fresh ideas, and a shared vision
                to achieve great results. We love turning challenges into opportunities
                and transforming ideas into impactful solutions. Together, we strive to
                build experiences that inspire, connect, and make a difference.
            </p>
        </div>
    );
}

export default WelcomeOurTeam;