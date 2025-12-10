
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Frequentlynumber.css';

export function Frequentlynumber() {
    var heading = "Best Coding Institute in Kasganj";
    return (
        <>
            <div className="container-fluid  frequently_container">
                <div className="row align-items-start heading ">
                    <div className="col">
                        <h2>{heading}</h2>
                        <p>Join Lucky Tech Academy Institute !</p>
                        <ul>
                            <li>Diploma and Certificate Courses</li>
                            <li>100% Placement Assistance</li>
                            <li>24*7 Expert Support</li>
                            <li>Online & Offline Mode</li>
                            <li>Affordable Fees</li>
                            <li>Easy EMI</li>
                            <li>Projects</li>
                            <li>Training Certification</li>
                        </ul>
                        <div className="row certificate_number text-center py-5">
                            <div className="col-md-3 col-6 number-box">
                                <h3 id="experience">1+</h3>
                                <div className="divider"></div>
                                <p>YEARS OF EXPERIENCE</p>
                            </div>

                            <div className="col-md-3 col-6 number-box">
                                <h3 id="courses">25+</h3>
                                <div className="divider"></div>
                                <p>COURSES</p>
                            </div>

                            <div className="col-md-3 col-6 number-box">
                                <h3 id="qualified-staff">10+</h3>
                                <div className="divider"></div>
                                <p>QUALIFIED STAFF</p>
                            </div>

                            <div className="col-md-3 col-6 number-box">
                                <h3 id="master-certifications">15+</h3>
                                <div className="divider"></div>
                                <p>MASTER CERTIFICATIONS</p>
                            </div>
                        </div>
                        </div>

                        <div className="col">
                            <div className=' enquire'>
                                <h3>Enquire Now</h3>
                                <h4>Contact us today, and get reply within 24 hours!</h4>

                                <form className="enquire-form">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" placeholder="Enter your name" required />

                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" placeholder="Enter your email" required />

                                    <label htmlFor="phone">Phone:</label>
                                    <input type="tel" id="phone" placeholder="Enter your phone number" required />

                                    <label htmlFor="message">Message:</label>
                                    <textarea id="message" rows="4" placeholder="Write your message..."></textarea>

                                    <button type="submit" className="submit-btn">Send Message</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </>
            )
}