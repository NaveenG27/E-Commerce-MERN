import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you! We’ll get back to you soon.");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Header Section */}
      <header className="contact-header text-center">
        <h1>Let's Connect!</h1>
        <p>We're here to answer all your questions. Choose the best way to reach us below.</p>
      </header>

      {/* Contact Info Cards */}
      <section className="contact-details">
        <div className="contact-card">
          <i className="fas fa-envelope icon"></i>
          <h2>Email Support</h2>
          <p>The fastest way to get answers for non-urgent inquiries.</p>
          <a href="mailto:support@eshopee.com" className="contact-link">
            support@eshopee.com
          </a>
        </div>

        <div className="contact-card">
          <i className="fas fa-phone-alt icon"></i>
          <h2>Give Us a Call</h2>
          <p>Available Mon–Fri, 9:00 AM – 5:00 PM IST.</p>
          <a href="tel:+919876543210" className="contact-link">
            +91 98765 43210
          </a>
        </div>

        <div className="contact-card">
          <i className="fas fa-map-marker-alt icon"></i>
          <h2>Our Location</h2>
          <p>Stop by for an in-person consultation (by appointment).</p>
          <address>
            123 Business Blvd.
            <br />
            Coimbatore, Tamil Nadu
          </address>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-submit-btn ">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
