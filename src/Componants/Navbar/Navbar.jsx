import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
         <a href="/"> <img src="src/assets/images/logo.png" alt="logo" /></a>
        </div>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/courses">All Courses</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <div
          className="hamburger"
          onClick={() => {
            document.querySelector(".menubar").classList.toggle("active");
          }}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>

      <div className="menubar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">All Courses</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
