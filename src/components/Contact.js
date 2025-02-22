// Let's Connect Section
import React from 'react';
import '../styles/contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-description">
        Have a project in mind or just want to discuss blockchain solutions? Let's contact!
      </p>
      <div className="contact-container">
        <a href="https://www.linkedin.com/in/yourprofile" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>
        <a href="https://github.com/yourgithub" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>
        <a href="mailto:youremail@example.com" className="contact-card">
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>
        <a href="https://twitter.com/yourtwitter" className="contact-card" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="contact-icon" />
          <span>Twitter</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;