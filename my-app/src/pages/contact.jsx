import React, { useState } from "react";
import "../css/contact.css";

function Contact() {
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("✅ Thank you! Your message has been sent.");
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Any questions or remarks? Just write us a message!
          </p>
        </div>

        <div className="contact-form">
          <form id="contactForm" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              placeholder="Enter a valid email address"
              required
            />
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              required
            />
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="send-btn">
              Submit
            </button>
            {formMessage && (
              <p style={{ color: "green", marginTop: "0.5rem" }}>
                {formMessage}
              </p>
            )}
          </form>
        </div>

 <div className="info-grid">
  <div className="info-card">
    <div className="info-icon">📍</div>
    <h3 className="info-title">Our Location</h3>
    <p className="info-text">
      Based in Pakistan, we connect food lovers everywhere with flavors and 
      recipes from across the globe.
    </p>
  </div>

  <div className="info-card">
    <div className="info-icon">📧</div>
    <h3 className="info-title">Email Us</h3>
    <p className="info-text">
      Have questions or suggestions? Reach out anytime at  
      <strong> support@flavorfind.com</strong>.
    </p>
  </div>

  <div className="info-card">
    <div className="info-icon">📞</div>
    <h3 className="info-title">Call Us</h3>
    <p className="info-text">
      We’re happy to chat about food, recipes, or collaborations.  
      Call us at <strong>+92 300 1234567</strong>.
    </p>
  </div>
</div>


        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.9080123456!2d67.0012345!3d24.8607345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjYiTiA2N8KwMDAnMDIuNiJF!5e0!3m2!1sen!2s!4v1692029142345"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
