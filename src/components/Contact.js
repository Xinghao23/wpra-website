import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faWeixin, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import wechatQR from '../img/wechat.png';

Modal.setAppElement('#root');

const ContactPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState({ phone: false, wechat: false, linkedin: false, facebook: false });

  const openModal = (type) => setModalIsOpen((prevState) => ({ ...prevState, [type]: true }));
  const closeModal = (type) => setModalIsOpen((prevState) => ({ ...prevState, [type]: false }));

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
            <li onClick={() => openModal('wechat')}>
              <FontAwesomeIcon icon={faWeixin} className="contact-icon" /> <strong>WeChat:</strong> Click to view
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

        {/* Right Column: Embedded Form */}
        <section className="contact-form">
          <h2>Contact Form</h2>
          <p>Fill out the form below, and we’ll get back to you as soon as possible.</p>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfr38EpqfWGEh_Q4ESDaZkZrOoFfwXDEkZdYpLbvY-8F0pyug/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Contact Form"
          >
            Loading…
          </iframe>
        </section>
      </div>

      {/* Modals */}
      <Modal isOpen={modalIsOpen.phone} onRequestClose={() => closeModal('phone')} contentLabel="Phone Modal">
        <h2>Phone</h2>
        <p>+YOUR_PHONE_NUMBER</p>
        <button onClick={() => closeModal('phone')}>Close</button>
      </Modal>

      <Modal isOpen={modalIsOpen.wechat} onRequestClose={() => closeModal('wechat')} contentLabel="WeChat Modal">
        <h2>WeChat</h2>
        <p>Scan the QR code below to connect on WeChat:</p>
        <img src={wechatQR} alt="WeChat QR Code" className="wechat-thumbnail"  /> 
        <button onClick={() => closeModal('wechat')}>Close</button>
      </Modal>

      <Modal isOpen={modalIsOpen.linkedin} onRequestClose={() => closeModal('linkedin')} contentLabel="LinkedIn Modal">
        <h2>LinkedIn</h2>
        <p>Visit our LinkedIn profile:</p>
        <a href="https://www.linkedin.com/company/orionwpra/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                Visit our LinkedIn page
        </a>
        <button onClick={() => closeModal('linkedin')}>Close</button>
      </Modal>

      <Modal isOpen={modalIsOpen.facebook} onRequestClose={() => closeModal('facebook')} contentLabel="Facebook Modal">
        <h2>Facebook</h2>
        <p>Visit our Facebook page:</p>
        <a href="YOUR_FACEBOOK_LINK" target="_blank" rel="noopener noreferrer">
          Facebook Page
        </a>
        <button onClick={() => closeModal('facebook')}>Close</button>
      </Modal>
      <Modal isOpen={modalIsOpen.instagram} onRequestClose={() => closeModal('instagram')} contentLabel="Instagram Modal">
        <h2>Instagram</h2>
        <p>Visit our Instagram Page:</p>
        <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer">
          Instagram Page
        </a>
        <button onClick={() => closeModal('instagram')}>Close</button>
      </Modal>
    </div>
  );
};

export default ContactPage;
