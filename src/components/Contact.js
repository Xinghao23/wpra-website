import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWeixin, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import wechatQR from '../img/wechat.png';

Modal.setAppElement('#root');

const ContactPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // Tracks WeChat modal visibility

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfr38EpqfWGEh_Q4ESDaZkZrOoFfwXDEkZdYpLbvY-8F0pyug/formResponse";

    const formBody = new URLSearchParams();
    formBody.append("entry.1780775277", formData.name); // Entry ID for "Name"
    formBody.append("entry.1162249089", formData.email); // Entry ID for "Email"
    formBody.append("entry.168840848", formData.message); // Entry ID for "Message"

    fetch(formUrl, {
      method: 'POST',
      body: formBody,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(() => {
        setFormSubmitted(true); // Show success message
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      })
      .catch(() => {
        alert('Your response has been submitted!');
      });

    setTimeout(() => {
      setFormSubmitted(false); // Hide the success message after 5 seconds
    }, 5000);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We're here to help! Feel free to reach out to us through any of the options below.</p>

      <div className="contact-container">
        {/* Left Column: Direct Contacts */}
        <section className="contact-direct">
          <h2>Direct Contacts</h2>
          <ul className="contact-list">
            <li>
              <a href="tel:2368682296" className="contact-link">
                <FontAwesomeIcon icon={faPhoneAlt} className="contact-icon" /> <strong>Phone:</strong> Call us at 236-868-2296
              </a>
            </li>
            <li onClick={openModal}>
              <FontAwesomeIcon icon={faWeixin} className="contact-icon" />
              <strong>WeChat:</strong> Click to view QR code
            </li>
            <li>
              <a href="https://www.linkedin.com/company/orionwpra/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon" /> <strong>LinkedIn:</strong> Visit our LinkedIn page
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/OrionWPRA/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FontAwesomeIcon icon={faFacebook} className="contact-icon" /> <strong>Facebook:</strong> Visit our Facebook page
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/orion_wpra/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FontAwesomeIcon icon={faInstagram} className="contact-icon" /> <strong>Instagram:</strong> Visit our Instagram page
              </a>
            </li>
          </ul>
        </section>

        {/* Right Column: Custom Form */}
        <section className="contact-form">
          <h2>Contact Form</h2>
          <p>Fill out the form below, and we’ll get back to you as soon as possible.</p>
          {formSubmitted ? (
            <p className="form-success">Your form has been submitted. Thank you!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          )}
        </section>
      </div>

      {/* WeChat Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="WeChat Modal">
        <div className="wechat-modal">
          <h2>WeChat</h2>
          <p>Scan the QR code below to connect on WeChat:</p>
          <img src={wechatQR} alt="WeChat QR Code" className="wechat-thumbnail" />
          <button onClick={closeModal} className="modal-close-button">Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactPage;
