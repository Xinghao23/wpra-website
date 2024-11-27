// src/components/FloatingButton.js
import React from 'react';
import { Link } from 'react-router-dom';



const FloatingButton = () => {
  return (
    <Link to="/contact">
    <div className="floating-button-container">
      <button className="floating-button">Free Trial Booking</button>
    </div>
    </Link>
  );
};

export default FloatingButton;
