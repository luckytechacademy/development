import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './Welcome.css'
export function Welcome() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animation duration & trigger only once
  }, []);

  return (
    <div className="col welcome-section" data-aos="fade-up">
      <h1>Welcome to Lucky Tech Academy</h1>
      <p>
        Welcome to Lucky Tech Academy! We provide you with the latest technology training
        and practical skills to help you build a successful career. With expert trainers
        and industry-focused courses, you can learn web development, programming, designing,
        and much more — step by step through real-world projects and hands-on experience.
      </p>
    </div>
  );
}

export function Learning() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      once: false, // false = animation repeat hoga har baar jab scroll karein
      offset: 200, // kitna scroll hone par trigger ho
    });
  }, []);

  return (
    <section className="learning-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Text Column */}
          <div className="col-md-6 text-col" data-aos="fade-right">
            <h1 className="learning-title">Learning Community</h1>
            <p className="learning-text">
              You will be exposed to questions from easy to hard levels during the
              course through in-class sessions and assignments. Our major focus is
              on developing strong problem-solving skills, understanding algorithms,
              and building solid programming fundamentals. By the end of the course,
              you’ll have completed substantial hands-on coding experience.
            </p>
            <button className="explore-btn" data-aos="zoom-in" data-aos-delay="300">
              Start Learning
            </button>
          </div>

          {/* Right Image Column */}
          <div className="col-md-6 image-col" data-aos="fade-left">
            <img
              src="src/assets/images/cources/coding-isometric-06-768x732.png"
              alt="Learning"
              className="learning-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export function SkillsKnowledge() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      once: false, // false = animation repeat hoga har baar jab scroll karein
      offset: 200, // kitna scroll hone par trigger ho
    });
  }, []);

  return (
    <section className="learning-section">
      <div className="container">
        <div className="row align-items-center">
              {/* Left Image Column */}
          <div className="col-md-6 image-col" data-aos="fade-left">
            <img
              src="src/assets/images/cources/coding-isometric-07-768x902.png"
              alt="Skills & Knowledge"
              className="learning-image"
            />
          </div>
          {/* Right Text Column */}
          <div className="col-md-6 text-col" data-aos="fade-right">
            <h1 className="learning-title">Skills & Knowledge</h1>
            <p className="learning-text">
              The Java Programming Language serves as the base of many large-scale business applications.
              In addition, the portability inherent feature in Java is useful for programming a wide variety
              of portable electronics like smartphones (Android) to embedded systems .On the basis of Java,
              desktop applications such as media player, antivirus can be created.
            </p>
            <button className="explore-btn" data-aos="zoom-in" data-aos-delay="300">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function  Training() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in ms
      once: false, // false = animation repeat hoga har baar jab scroll karein
      offset: 200, // kitna scroll hone par trigger ho
    });
  }, []);

  return (
    <section className="learning-section">
      <div className="container">
        <div className="row align-items-center">
              {/* Left Image Column */}
          {/* Right Text Column */}
          <div className="col-md-6 text-col" data-aos="fade-right">
            <h1 className="learning-title">Get Training From Experts</h1>
            <p className="learning-text">
             Our team of trainers are industry-experts possessing more than a decade
              experience in training. Mentors coaching for Coding in Kasganj not only help 
              students in accomplishing live projects, but also provide session with placement assistance.
            </p>
            <button className="explore-btn" data-aos="zoom-in" data-aos-delay="300">
              Start Learning
            </button>
          </div>
          <div className="col-md-6 image-col" data-aos="fade-left">
            <img
              src="src/assets/images/cources/coding-isometric-08-768x768.png"
              alt="Get Training From Experts"
              className="learning-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FreeDemo() {

  return (
    <section className="Free-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Right Text Column */}
          <div className="col-md-6 text-col">
            <h1 className="learning-title">We Offer Everyone FREE Demo Class !</h1>
            <ul>
              <li>Flexible batch timings</li>
              <li>Small batch size</li>
              <li>Latest technology</li>
              <li>Industry experts</li>
            </ul>
            <button className="explore-btn">
             Book Your Free Demo
            </button>
          </div>
          {/* Left Text Column */}
          <div className="col-md-6 image-col" data-aos="fade-left">
            <img
              src="src/assets/images/cources/coding-isometric-09-768x693.png"
              alt="Get Training From Experts"
              className="learning-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
