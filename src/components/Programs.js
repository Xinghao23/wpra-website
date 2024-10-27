// src/components/About.js
import React from 'react';
import programA from "../img/IntroToVEX.jpg";

const Programs = () => {
  // Sample programs data
  const programs = [
    { id: 1, title: 'Program A', description: 'Description of Program A.', imageUrl: programA, },
    { id: 2, title: 'Program B', description: 'Description of Program B.' , imageUrl: programA,},
    { id: 3, title: 'Program C', description: 'Description of Program C.', imageUrl: programA, },
    { id: 4, title: 'Program D', description: 'Description of Program D.', imageUrl: programA, },
  ];

  return (
    <div className="programs-container">
      <h1>Our Programs</h1>
      <div className="programs-grid">
        {programs.map(program => (
          <div className="program-card" key={program.id}>
            <img src={program.imageUrl} alt={program.title} className="program-image" />
            <h2>{program.title}</h2>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;