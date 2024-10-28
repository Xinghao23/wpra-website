// src/components/Award.jsbicycle presta schrader valve adapter bike pumps adatper football pumps
import React from 'react';
import backgroundVideo from '../video/awardsVideo.mp4';

const awardsData = [
  { title: 'Best Innovation Award', year: 2022, description: 'Awarded for outstanding innovation in technology.' },
  { title: 'Community Impact Award', year: 2021, description: 'Recognized for positive contributions to the community.' },
  { title: 'Excellence in Design', year: 2020, description: 'Honored for exceptional design standards in projects.' },
  // Add more awards here as needed
];

const AwardsPage = () => {
  return (
    <div className="awards-container">
      <video className="background-video-awards" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div> {/* Overlay layer */}
      <div className="awards-content">
        <h1 className="awards-title">Our Awards</h1>
        <div className="awards-grid">
          {awardsData.map((award, index) => (
            <div key={index} className="award-card">
              <h2>{award.title}</h2>
              <p><strong>Year:</strong> {award.year}</p>
              <p>{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsPage;