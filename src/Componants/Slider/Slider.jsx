import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Slider.css';
import img1 from '../../assets/images/rakesh/student.jpg';
import img2 from '../../assets/images/rakesh/computers.jpg';
import img3 from '../../assets/images/rakesh/website-devlopment.jpg';
import img4 from '../../assets/images/rakesh/website.jpg';

function Slider() {
  return (
    <div className="slider-section">
      <div
        id="carouselExampleCaptions"
        className="carousel slide custom-carousel"
        data-bs-ride="carousel"
        data-bs-interval="2500"  // 2.5 seconds auto slide
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active slide-right">
            <img src={img1} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={{ "font-family": "Georgia" }}>Join us to make your future successful</h5>
              <p style={{ "font-family": "Verdana, Geneva, Tahoma, sans-serif" }}>“Join us
                to unlock a world of opportunities and build a successful future. Our team is dedicated to helping you
                achieve your goals with the right support and resources. Embrace the journey to success with us and watch
                your dreams turn into reality. Let’s shape a brighter future together!”</p>
            </div>
          </div>

          <div className="carousel-item slide-top">
            <img src={img2} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>“Join us today and pave the way to a successful</h5>
              <p>Join us today and pave the way to a successful future! Our
                expert team will guide you every step of the way. Together, we'll turn your aspirations into achievements.”</p>
            </div>
          </div>

          <div className="carousel-item slide-left">
            <img src={img3} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>“Collaborating and sharing skills to drive innovation
                and excellence together.”</h5>
              <p>“Exchanging ideas and expertise to unlock our team’s full
                potential. Together, we turn knowledge into progress and success.”</p>
            </div>
          </div>

          <div className="carousel-item slide-bottom">
            <img src={img4} className="d-block w-100" alt="Slide 4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>We Are providing most populer programing language
              </h5>
              <p class="animated-fadeUp d-none d-md-block">“We offer the most popular programming languages to enhance your
                skills. Master the languages that drive today’s technology and innovation. Join us to stay ahead in the
                ever-evolving tech landscape.”</p>
            </div>
          </div>
        </div>

        {/* optional buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="social_media">
        <div>
           <a href="#"><i className="bi bi-instagram slide-in-top"></i></a>
        </div>
        <div>
           <a href="#"><i className="bi bi-whatsapp slide-in-top"></i></a>
        </div>
        <div>
           <a href="#"><i className="bi bi-linkedin slide-in-top"></i></a>
        </div>
        <div>
           <a href="#"><i className="bi bi-github slide-in-top"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Slider;
