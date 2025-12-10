import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Blog1.css'


export function Blog1() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animation duration & trigger only once
  }, []);

  return (
    <div className="col welcome-section" data-aos="fade-up">
      <h1>Welcome to Blog</h1>
      <p>
        Welcome to Lucky Tech Academy! We provide you with the latest technology training
        and practical skills to help you build a successful career. With expert trainers
        and industry-focused courses, you can learn web development, programming, designing,
        and much more — step by step through real-world projects and hands-on experience.
      </p>
    </div>
  );
}

export function FullStack() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      once: false, // false = animation repeat hoga har baar jab scroll karein
      offset: 300, // kitna scroll hone par trigger ho
    });
  }, []);

  return (
    <section className="learning-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Column */}
          <div className="col-md-6 image-col" data-aos="fade-left">
            <img
              src="src/assets/images/cources/full-stack-web-development.jpeg"
              alt="FullStack"
              className="Blog-image"
            />
          </div>
          {/* Right Text Column */}
          <div className="col-md-6 text-col" data-aos="fade-right">
            <h1 className="learning-title">Are Web Development and Full-Stack Same?</h1>
            <p className="learning-text">
              Which full stack web development is best? Which full stack is in demand? Is
              it good to learn full stack web development? Several businesses have started moving
              to the digital world. That is why web development has become a lucrative career in
              the present age of...
            </p>
            <button className="explore-btn" data-aos="zoom-in" data-aos-delay="200  ">
              Full-Stack
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



export function PythonFullStack() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      once: false, // false = animation repeat hoga har baar jab scroll karein
      offset: 300, // kitna scroll hone par trigger ho
    });
  }, []);

  return (
    <section className="learning-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Right Text Column */}
          <div className="col-md-6 text-col" data-aos="fade-right">
            <h1 className="learning-title">Python Programming: Uses, How to Learn? and Benefits</h1>
            <p className="learning-text">
              Learn Python Programming Language to Become a Developer One of the popular programming
              languages in the web development world is Python. This object-oriented programming
              language has dynamic semantics. Developers like to rely on Python for Rapid Application...
            </p>
            <button className="explore-btn" data-aos="zoom-in" data-aos-delay="200  ">
              Full-Stack
            </button>
          </div>
          {/* Left Image Column */}
          <div className="col-md-6 image-col" data-aos="fade-left">
            <img
              src="src/assets/images/cources/About-Python-Programming.jpeg"
              alt="FullStack"
              className="Blog-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



export function CareerullStack() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      once: false, // false = animation repeat hoga har baar jab scroll karein
      offset: 300, // kitna scroll hone par trigger ho
    });
  }, []);

  return (
    <section className="learning-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Column */}
          <div className="col-md-6 image-col" data-aos="fade-left">
            <img
              src="src/assets/images/cources/what-is-a-programming-language@2x-1280x800.png"
              alt="FullStack"
              className="Blog-image"
            />
          </div>
          {/* Right Text Column */}
          <div className="col-md-6 text-col" data-aos="fade-right">
            <h1 className="learning-title">Career in Programming</h1>
            <p className="learning-text">
              Career in Programming Join Programming Courses in Kasganj
              at Lucky Tech Academy Institute. Lucky Tech Academy is the Best Programming
              Courses Institute in Kasganj,  Join Programming Courses. ➡ Advanced Diploma in Software Programming &....
            </p>
            <button className="explore-btn" data-aos="zoom-in" data-aos-delay="200  ">
              Full-Stack
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}




export function BenefitJava() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      once: false, // false = animation repeat hoga har baar jab scroll karein
      offset: 300, // kitna scroll hone par trigger ho
    });
  }, []);

  return (
    <section className="learning-section">
      <div className="container">
        <div className="row align-items-center">
         
          {/* Left Text Column */}
          <div className="col-md-6 text-col" data-aos="fade-right">
            <h1 className="learning-title">What are the Benefits of Coding?</h1>
            <p className="learning-text">
              Career in Programming Join Programming Courses in Kasganj
              at Lucky Tech Academy Institute. Lucky Tech Academy is the Best Programming
              Courses Institute in Kasganj,  Join Programming Courses. ➡ Advanced Diploma in Software Programming &....
            </p>
            <button className="explore-btn" data-aos="zoom-in" data-aos-delay="150">
              Full-Stack
            </button>
          </div>
          {/* Right Image Column */}
          <div className="col-md-6 image-col" data-aos="fade-left">
            <img
              src="src/assets/images/cources/1_PSxOGedy1wpbsLPwOp-8OQ.jpeg"
              alt="FullStack"
              className="Blog-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



export function DifficulttJava() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      once: false, // false = animation repeat hoga har baar jab scroll karein
      offset: 300, // kitna scroll hone par trigger ho
    });
  }, []);

  return (
    <section className="learning-section">
      <div className="container">
        <div className="row align-items-center">
         {/* Right Image Column */}
          <div className="col-md-6 image-col" data-aos="fade-left">
            <img
              src="src/assets/images/cources/JUNE15.jpeg"
              alt="FullStack"
              className="Blog-image"
            />
          </div>
          {/* Left Text Column */}
          <div className="col-md-6 text-col" data-aos="fade-right">
            <h1 className="learning-title">Is Learning Java Too Difficult?</h1>
            <p className="learning-text">
              Is Learning Java Too Difficult?   Join Core Java Job oriented Course in Kasganj at
               Lucky Tech Academy Institute. Lucky Tech Academy is the Best Core Java Course Institute in 
               Kasganj, Sukhendra Sadan, Roadways Bus Stand,and nearby Location in Kasganj. Join Core Java 
               Course. ➡ Core Java Course Fees: Rs. 9999/-...
            </p>
            <button className="explore-btn" data-aos="zoom-in" data-aos-delay="150">
              Full-Stack
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}


