import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("message", message);

    // FormSubmit required hidden fields
    formData.append("_captcha", "false"); // disable captcha
    formData.append("_template", "table"); // beautiful email table format
    formData.append("_subject", "New Contact Form Submission");

    try {
      const response = await fetch("https://formsubmit.co/rajpushendra4224@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <>
    <section className="contact-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          
          <div className="col-md-6" data-aos="fade-up">
            <div className="card shadow-lg p-4 rounded-4 border-0">
              <h3 className="text-center fw-bold mb-3 text-primary">Contact Us</h3>

              {status === "success" && (
                <div className="alert alert-success fw-semibold text-center">
                  Your message has been sent successfully!
                </div>
              )}

              {status === "error" && (
                <div className="alert alert-danger fw-semibold text-center">
                  Failed to send message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                
                <div className="mb-2">
                  <label className="form-label small fw-semibold">Full Name</label>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-primary text-white">
                      <i className="bi bi-person-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label small fw-semibold">Email</label>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-primary text-white">
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label className="form-label small fw-semibold">Phone Number</label>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-primary text-white">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone Number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold">Message</label>
                  <textarea
                    className="form-control form-control-sm"
                    rows="3"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-1 fw-semibold rounded-pill shadow-sm"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send"} <i className="bi bi-send ms-1"></i>
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    </>
  );
}

export default ContactForm;
