import React, { useState } from "react";
import "./ContactUs.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    services: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name/Organization Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      errors.mobile = "Mobile number must be a valid 10-digit number";
    }
    if (!formData.services.trim()) {
      errors.services = "Selection of any one service is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    if (Object.keys(errors).length === 0) {
      // Form is valid, handle submission
      console.log(formData);
      // Clear form fields after submission
      setFormData({
        name: "",
        email: "",
        mobile: "",
        services: "",
        message: "",
      });
    } else {
      // Update errors state
      setErrors(errors);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="name-container">
            <div>
              <label htmlFor="name">Organization/Institute/Name :</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Organization/Institute/Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          </div>
          <div>
            <label htmlFor="email">Organization Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Organization Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="10 Digit Contact Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <span className="error">{errors.mobile}</span>}
          </div>
          <div>
            <label htmlFor="services">Services:</label>
            <select
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              required
            >
              <option value="">Select service</option>
              <option>Student Information System</option>
              <option>Online Admission System</option>
              <option>Fees Management System</option>
              <option>Online Examination System</option>
              <option>Attendance Management System</option>
              <option>Higher Education System</option>
              <option>University Management Software</option>
              <option>Institute Management Software</option>
              <option>College Management Software</option>
              <option>School Management Software</option>
              <option>Faculty Management System</option>
              <option>Learning Management System</option>
            </select>
            {errors.services && (
              <span className="error">{errors.services}</span>
            )}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="horizontal">
        <hr className="bold-hr" />
      </div>
      <div className="container">
        <div className="map-container">
          <h3>Our Location</h3>
         <iframe
          id="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.45386053729334!2d73.85471881312708!3d18.504252909073315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0128b44909f%3A0x52bd480dae08d64b!2sHira%20Baug%20Mitra%20Mandal%20Ganesh%20Temple!5e0!3m2!1sen!2sin!4v1715589288259!5m2!1sen!2sin"
          title="Google Maps - Hira Baug Mitra Mandal Ganesh Temple location"
          width="1000"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
