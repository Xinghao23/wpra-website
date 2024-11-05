// src/components/Home.js
import React from 'react';
import backgroundVideo from '../video/BackgroundVideo.mp4';
import { Link } from 'react-router-dom';
import FloatingButton from '../components/FloatingButton';

function Home() {
  return (
    <div className = "home-container">
      <video autoPlay muted loop className="background-video">
        <source src= {backgroundVideo} type="video/mp4" />
      </video>
      <div className="overlay"></div> {/* Overlay layer */}
      <div className="content">
        <h1 className = "main-heading">Western Pacific Robotics Academy</h1>
        <p className = "introduction-text">In today's ever-changing world, the next generation must be equipped with benefits of STEM education such as logic building, 
          problem-solving, interpreting essential information, and acquiring and reviewing evidence to make sound judgments. 
          We play a part in imparting those skills to your children by the help of skilled instructors and updated course content.</p>
          <Link to="/programs" className="learn-more-btn">Get Started</Link>
      </div>
      <FloatingButton />
       {/* New Section for YouTube Video Embed */}
       <section className="youtube-section">
        <h2 className="youtube-title">Watch Our Introduction Video</h2>
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
    </div>
  );
}

export default Home;
