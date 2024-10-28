// src/components/About.js
import React from 'react';
import FloatingButton from '../components/FloatingButton';
import programA from "../img/IntroToVEX.jpg";
import programE from "../img/3dprinting.jpg"

const Programs = () => {
  // Programs 
  const programs = [
    { 
      id: 1, 
      title: 'Early Learning Robotics', 
      description: 'Follow step by step instructions using the VEX EXP robotics platform, complete labs such as robot soccer, treasure hunts, and environmental simulations that encourage students to design, build, and code robots in a structured yet creative learning environment, suitable for ages 8-10.', 
      imageUrl: programA, 
    },
    { 
      id: 2, 
      title: 'Intro to VEX Robotics', 
      description: 'Learn basic foundations of robotics with fundamental theories of building, designing, and programing. ' , 
      imageUrl: programA,
    },
    { 
      id: 3, 
      title: 'Early Season', 
      description: 'Description of Program C.', 
      imageUrl: programA, 
    },
    { 
      id: 4, 
      title: 'Regular Season',  
      description: 'Description of Program D.', 
      imageUrl: programA, 
    },
    { 
      id: 5, 
      title: '3D Modeling & Printing', 
      description: 'Description of Program A.', 
      imageUrl: programE, 
    },
    { 
      id: 6, 
      title: 'Robotics Programming', 
      description: 'Description of Program B.' , 
      imageUrl: programA,
    },
    { 
      id: 7, 
      title: 'Programming - Intro', 
      description: 'Description of Program C.', 
      imageUrl: programA, 
    },
    { 
      id: 8, 
      title: 'Programming - Intermidate', 
      description: 'Description of Program D.', 
      imageUrl: programA, 
    },
  ];

  return (
    <div className="programs-container">
      <h1 className="programs-title">Our Programs</h1>
      <div className="programs-grid">
        {programs.map(program => (
          <div className="program-card" key={program.id}>
            <img src={program.imageUrl} alt={program.title} className="program-image" />
            <h2>{program.title}</h2>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
      <FloatingButton />
    </div>
  );
};

export default Programs;