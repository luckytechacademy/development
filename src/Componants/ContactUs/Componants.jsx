
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Componants() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // animation duration & trigger only once
    }, []);

    return (
        <div className="col welcome-section" data-aos="fade-up">
            <h1>Contact Us</h1>
            <p>
               If you have any questions, suggestions, or feedback,
                we’d love to hear from you! Our team is always ready
                 to help and guide you. You can reach out to us anytime 
                 through email or phone. We aim to respond as quickly as
                  possible and ensure that your queries are resolved efficiently. 
                  Let’s stay connected — your thoughts matter to us!
            </p>
        </div>
    );
}

export default Componants;