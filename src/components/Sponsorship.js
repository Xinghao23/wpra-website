import React from "react";
import sponsorshipPackage from "../documents/WPRA Sponsorship Package.pdf"; // Import Sponsorship PDF

// Import sponsor logos
import Anotek from "../img/anotek.png";

const Sponsorship = () => {
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
        <button className="partner-btn">Become a Sponsor →</button>
      </div>

      {/* Sponsor Grid Layout */}
      <h2 className="sponsorship-title">Our Valued Sponsors</h2>
      <div className="sponsor-grid">
        <div className="sponsor-card">
          <img src={Anotek} alt="Anotek Sponsor" className="sponsor-logo" />
        </div>
      </div>

      {/* Sponsorship Package PDF */}
      <div className="sponsorship-pdf">
        <h2 className="sponsorship-title">Sponsorship Package</h2>
        <iframe src={sponsorshipPackage} title="Sponsorship Package" className="pdf-viewer"></iframe>
      </div>
    </div>
  );
};

export default Sponsorship;
