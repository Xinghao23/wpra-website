import React from 'react';

import { Link } from 'react-router-dom'; // Import Link from React Router

// Social media icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Contact Information */}
          <div className="contact-section">
            <h2>
              <Link to="/contact" className="footer-link">
                Contact Us
              </Link>
            </h2>
            <p>
              <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" />
              <span>Call us: (236) 868-2296</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>Email: info@orionwpra.ca</span>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="social-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a href="https://www.facebook.com/OrionWPRA/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
              </a>
              <a href="https://www.instagram.com/orion_wpra/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faInstagram} className="icon instagram" />
              </a>
              <a href="https://www.linkedin.com/company/orionwpra/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Robotics Club. All rights reserved.</p>
          <p>Designed by Western Pacific Robotics Academy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
