// src/components/About.js
import React from 'react';
import FloatingButton from '../components/FloatingButton';
import programB from "../img/DSC_0960.JPG";
import programA from "../img/EarlyLearning.JPG";
import programE from "../img/3DModeling.JPG";
import programD from "../img/DSC_0471.JPG";
import programC from "../img/earlySeason.JPG";
import programG from "../img/DSC_0342.JPG";
import programF from "../img/DSC_0345.JPG";
import programH from "../img/DSC_0352.JPG";


const Programs = () => {
  // Programs 
  const programs = [
    { 
      id: 1, 
      title: 'Early Learning Robotics', 
      subtitle: 'For ages 8-12',
      description: 'Introduces kids (ages 8-10) to robotics using the VEX EXP platform. Through fun, hands-on activities like robot soccer and treasure hunts, students design, build, and code robots, developing teamwork, problem-solving, and STEM skills in a creative, supportive environment.',
      imageUrl: programA, 
    },
    { 
      id: 2, 
      title: 'Intro to VEX Robotics', 
      subtitle: 'For ages 10-18',
      description: 'Students will learn the fundamentals of building and programming robots. They will design and construct a robot with a chassis, lift mechanism, and object manipulation system, then learn to program it for various tasks, combining hands-on creativity with core STEM concepts.  ' , 
      imageUrl: programB,
    },
    { 
      id: 3, 
      title: 'Early Season', 
      subtitle: 'For ages 12-18',
      description: 'Early Season runs from May to August, focusing on the new released VEX Robotics game in competitive robotics. Students will design, build, and refine their robots, culminating in an opportunity to test their creations at a competition in August.', 
      imageUrl: programC, 
    },
    { 
      id: 4, 
      title: 'Regular Season',  
      subtitle: 'For ages 12-18',
      description: 'Regular Season runs from September to March, emphasizing teamwork and competitive robotics. Students collaborate in teams to design and program robots, participating in 10+ competitions with the goal of qualifying for Provincials in March.', 
      imageUrl: programD, 
    },
    { 
      id: 5, 
      title: '3D Modeling & Printing', 
      subtitle: 'For ages 10-16',
      description: '3D Modeling & Printing is a project-based program where students learn the basics of 3D design using Onshape. They will explore Computer-Aided Design (CAD) techniques to create projects like keychains, bottle holders, and various student-inspired designs, bringing their ideas to life through 3D printing.', 
      imageUrl: programE, 
    },
    { 
      id: 6, 
      title: 'Robotics Programming',
      subtitle: 'For ages 12-18', 
      description: 'Robotics Programming focuses on embedded programming using C++, where students learn to implement control algorithms such as PID control, bang-bang control, and motion control. Through hands-on coding, they’ll optimize robot performance for tasks like precise movement, object manipulation, and environmental navigation, gaining a deep understanding of robotics systems and programming logic.' , 
      imageUrl: programF,
    },
    { 
      id: 7, 
      title: 'Programming - Intro', 
      subtitle: 'For ages 12-15',
      description: 'Introduces students to the fundamentals of coding using Python, a beginner-friendly yet powerful language. Students will learn key concepts such as variables, loops, functions, and conditionals, applying their skills to fun projects like simple games, calculators, and data visualizations.', 
      imageUrl: programG, 
    },
    { 
      id: 8, 
      title: 'Programming - Intermidate', 
      subtitle: 'For ages 15-18',
      description: 'Teaches the foundations of C++, a versatile language widely used in software and robotics. Students will explore concepts like syntax, loops, arrays, and object-oriented programming, building practical projects such as number guessers, mini-games, and basic simulations.', 
      imageUrl: programH, 
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
            <p className="program-subtitle"><em>{program.subtitle}</em></p>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
      <FloatingButton />
    </div>
  );
};

export default Programs;