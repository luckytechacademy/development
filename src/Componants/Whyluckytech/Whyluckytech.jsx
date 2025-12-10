import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Whyluckytech.css';
export function Whyluckytech() {
    const imagePath = "src/assets/images/cources/why-cb-1-min.jpeg";
    return (
        <>
            <div className="container-fluite text-center bs-secondary-color-rgb">
                <div className="row align-items-start whyheading">
                    <h1>Why Lucky Tech Academy ?</h1>
                </div>
                <div className="row align-items-start">
                    <div className="col">
                        <img src={imagePath} alt="" className='image' />
                    </div>
                    <div className="col feature-list">
                        <ul>
                            <li>UKIQ Certification</li>
                            <li>Placement Assistance</li>
                            <li>Expert Trainers</li>
                            <li>Easy EMI Options</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
export function ClassRoom() {
    const image1 = "src/assets/images/cources/why-cb-1-min.jpeg"
    const imageobj = {
        image0: "src/assets/images/gallery/pic5.jpg",
        image1: "src/assets/images/gallery/pic4.jpg",
        image2: "src/assets/images/gallery/class.JPG",
        image3: "src/assets/images/gallery/gallery_07.jpg",

    }
    return (
        <>
            <div className="container-fluite text-center bs-secondary-color-rgb classroom">

                <div className="row align-items-start classroomheading">

                    <h1>OUR CLASSROOM SESSIONS</h1>
                    <p>Our Classroom has a very unique approach so that any student can be learning either via a live
                        lesson, pre programmed lesson, independently or being supervised in the classroom.</p>
                    <img src={image1} alt="" srcset="" className='classroomimage' />
                </div>

                <div className="container-fluid py-3 classimage">
                    <div className="row justify-content-center g-3">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                            <img
                                src={imageobj.image0}
                                alt="Classroom"
                                className="responsive-image"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                            <img
                                src={imageobj.image1}
                                alt="Classroom"
                                className="responsive-image"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                            <img
                                src={imageobj.image2}
                                alt="Classroom"
                                className="responsive-image"
                            />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                            <img
                                src={imageobj.image3}
                                alt="Classroom"
                                className="responsive-image"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}