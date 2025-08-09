import React, { useRef } from "react";

import sponsorshipPackage from "../documents/WPRA Sponsorship Package.pdf"; // Import Sponsorship PDF

// Import sponsor logos
import Anotek from "../img/anotek.png";
import Polymere from "../img/Polymershapes.png";
import Proto from "../img/Proto_Logo.png";
import SolidWorks from "../img/SolidWorksLogo.png";
import AuntieEmily from "../img/AuntieEmily.png";
import Polymaker from "../img/PolymakerLogo.png";

const Sponsorship = () => {
  const contactRef = useRef(null);

  // Smooth scroll function
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sponsorship-container">
      {/* Hero Section */}
      <div className="sponsorship-hero">
        <h1 className="hero-title">Support Our Mission</h1>
        <p className="hero-subtitle">
          Your support helps us innovate, educate, and empower the next generation of engineers and problem-solvers.
        </p>
        <p className="hero-text">
          By becoming a sponsor, you contribute to cutting-edge robotics programs, advanced learning opportunities, and competitive team development. 
          Your generosity allows us to expand our reach and impact within the community.
        </p>
        <button className="partner-btn" onClick={scrollToContact}>Become a Sponsor →</button>
      </div>

      {/* Sponsor Grid Layout */}
      <h2 className="sponsorship-title">Our Valued Sponsors</h2>
      <div className="sponsor-grid">
        <div className="sponsor-card">
          <img src={Anotek} alt="Anotek Sponsor" className="sponsor-logo" />
        </div>
        <div className="sponsor-card">
          <img src={Polymere} alt="PolymereShapes Sponsor" className="sponsor-logo" />
        </div>
        <div className="sponsor-card">
          <img src={Polymaker} alt="Proto Sponsor" className="sponsor-logo" />
        </div>
        <div className="sponsor-card">
          <img src={AuntieEmily} alt="AuntieEmily Sponsor" className="sponsor-logo" />
        </div>
        <div className="sponsor-card">
          <img src={SolidWorks} alt="SolidWorks Sponsor" className="sponsor-logo" />
        </div>
        <div className="sponsor-card">
          <img src={Proto} alt="Proto Sponsor" className="sponsor-logo" />
        </div>
      </div>

      {/* Sponsorship Package PDF */}
      <div className="sponsorship-pdf">
        <h2 className="sponsorship-title">Sponsorship Package</h2>
        <iframe src={sponsorshipPackage} title="Sponsorship Package" className="pdf-viewer"></iframe>
      </div>

      {/* Contact Section */}
      <div className="sponsorship-contact" ref={contactRef}>
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-text">
          For more information about sponsorship opportunities, please contact Xing at <b>sponsorWPRA@orionwpra.ca</b>.
        </p>
        <button 
          className="contact-btn" 
          onClick={() => window.location.href = "mailto:sponsorWPRA@orionwpra.ca"}
        >
          Contact Xing →
        </button>
      </div>
    </div>
  );
};

export default Sponsorship;
