
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Footer() {
    return (
        <>
            <div className="container-fluite ">
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: "#45526e" }}
                >
                    <div className="container p-4 pb-0">
                        <section>
                            <div className="row">
                                {/* Company Info */}
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 fw-bold">
                                        Institute name
                                    </h6>
                                    <p>
                                        Lucky Tech Academy In Kasganj
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                {/* Products */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 fw-bold">Online Courses</h6>
                                    <p>
                                        <a className="text-white text-decoration-none" href="#!">Advanced Graphic Design</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none" href="#!">UI/UX Design Mastery</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none" href="#!">Product Design</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none" href="#!">Web Development</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                {/* Useful Links */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 fw-bold">
                                       Offline Courses
                                    </h6>
                                    <p>
                                        <a className="text-white text-decoration-none" href="#!">Visual Design Mastery</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none" href="#!">Advanced Graphic Design</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none" href="#!">UI/UX Design Mastery</a>
                                    </p>
                                    <p>
                                        <a className="text-white text-decoration-none" href="#!">Digital Marketing</a>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                {/* Contact */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 fw-bold">Contact</h6>
                                    <p>
                                        <i className="bi bi-house-fill me-3"></i>
                                          Sukhendra Sadan, Roadways Bus Stand, Kasganj, Uttar Pradesh
                                    </p>
                                    <p>
                                        <i className="bi bi-envelope-fill me-3"></i>
                                        info @luckytechacademy.in <br/>
                                            luckytechacademy@gmail.com
                                    </p>
                                    <p>
                                        <i className="bi bi-telephone-fill me-3"></i>
                                          <span class="country-code">+91 </span>
                                       8630873796
                                    </p>
                                    <p>
                                        <i className="bi bi-printer-fill me-3"></i>
                                        <span class="country-code">+91 </span>
                                       8630873796
                                    </p>
                                </div>
                            </div>
                        </section>

                        <hr className="my-3" />

                        {/* Copyright & Social */}
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    <div className="p-3">
                                        © 2020 Copyright:{' '}
                                        <a className="text-white text-decoration-none" href="">
                                            luckytechacademy@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="col-md-5 col-lg-4 text-center text-md-end">
                                    <a
                                        className="btn btn-outline-light btn-floating m-1 rounded-circle"
                                        href="#!"
                                        role="button"
                                        style={{ width: '40px', height: '40px', padding: '10px' }}
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </a>

                                    <a
                                        className="btn btn-outline-light btn-floating m-1 rounded-circle"
                                        href="#!"
                                        role="button"
                                        style={{ width: '40px', height: '40px', padding: '10px' }}
                                    >
                                        <i className="bi bi-twitter"></i>
                                    </a>

                                    <a
                                        className="btn btn-outline-light btn-floating m-1 rounded-circle"
                                        href="#!"
                                        role="button"
                                        style={{ width: '40px', height: '40px', padding: '10px' }}
                                    >
                                        <i className="bi bi-google"></i>
                                    </a>

                                    <a
                                        className="btn btn-outline-light btn-floating m-1 rounded-circle"
                                        href="#!"
                                        role="button"
                                        style={{ width: '40px', height: '40px', padding: '10px' }}
                                    >
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;