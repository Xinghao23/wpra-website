// src/components/Home.js
import React from 'react';
import backgroundVideo from '../video/BackgroundVideo.mp4';
import { Link } from 'react-router-dom';
import FloatingButton from '../components/FloatingButton';

// Import sponsor logos
import Anotek from "../img/anotek.png";
import Polymere from "../img/Polymershapes.png";
import Proto from "../img/Proto_Logo.png";
import SolidWorks from "../img/SolidWorksLogo.png";
import AuntieEmily from "../img/AuntieEmily.png";
import Polymaker from "../img/PolymakerLogo.png";

function Home() {
  return (
    <div className="home-container">
      <video autoPlay muted loop className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="overlay"></div> {/* Overlay layer */}
      <div className="content">
        <h1 className="main-heading">Western Pacific Robotics Academy Society</h1>
        <p className="introduction-text">In today's ever-changing world, the next generation must be equipped with benefits of STEM education such as logic building, 
          problem-solving, interpreting essential information, and acquiring and reviewing evidence to make sound judgments. 
          We play a part in imparting those skills to your children by the help of skilled instructors and updated course content.</p>
        <Link to="/programs" className="learn-more-btn">Get Started</Link>
        {/* New Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat">
              <h2 className="stat-number">100+</h2>
              <p className="stat-label">Tournaments Attended</p>
            </div>
            <div className="stat">
              <h2 className="stat-number">100+</h2>
              <p className="stat-label">Awards Won</p>
            </div>
            <div className="stat">
              <h2 className="stat-number">70+</h2>
              <p className="stat-label">Number of Students</p>
            </div>
            <div className="stat">
              <h2 className="stat-number">16+</h2>
              <p className="stat-label">Number of Teams</p>
            </div>
          </div>
        </section>
      </div>
      <FloatingButton />
      {/* New Section for YouTube Video Embed */}
      <section className="youtube-section">
        <h2 className="youtube-title">Wondering what a large scale competition is like?</h2>
        <div className="youtube-video">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/I1xfAxlaTgo?si=Q2WjEmDQIZyoKVwZ" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
      </section>
      {/* Sponsor Grid Layout */}
      <section className="sponsor-section">
      <h2 className="sponsorship-title-main">Our Valued Sponsors</h2>
       <div className="sponsor-grid-home">
          <div className="sponsor-card-home">
            <a href="https://www.anotekanodizing.com" target="_blank" rel="noopener noreferrer">
              <img src={Anotek} alt="Anotek Sponsor" className="sponsor-logo-home" />
            </a>
        </div>
        <div className="sponsor-card-home">
          <a href="https://www.polymershapes.com" target="_blank" rel="noopener noreferrer">
            <img src={Polymere} alt="PolymereShapes Sponsor" className="sponsor-logo-home" />
          </a>
        </div>
        <div className="sponsor-card-home">
          <a href="https://www.polymaker.com" target="_blank" rel="noopener noreferrer">
            <img src={Polymaker} alt="Polymaker Sponsor" className="sponsor-logo-home" />
          </a>
        </div>
        <div className="sponsor-card-home">
          <a href="https://auntieemily.com/" target="_blank" rel="noopener noreferrer">
            <img src={AuntieEmily} alt="AuntieEmily Sponsor" className="sponsor-logo-home" />
          </a>
        </div>
        <div className="sponsor-card-home">
          <a href="https://www.solidworks.com" target="_blank" rel="noopener noreferrer">
            <img src={SolidWorks} alt="SolidWorks Sponsor" className="sponsor-logo-home" />
          </a>
        </div>
        <div className="sponsor-card-home">
          <a href="https://www.protocase.com" target="_blank" rel="noopener noreferrer">
            <img src={Proto} alt="Proto Sponsor" className="sponsor-logo-home" />
          </a>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
