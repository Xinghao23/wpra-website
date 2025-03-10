// src/components/About.js
import React from 'react';
import FloatingButton from '../components/FloatingButton';
import IntroToVEX from "../img/DSC_0960.JPG";
import EarlyLearningRobotics from "../img/EarlyLearning.JPG";
import ThreeDModeling from "../img/3DModeling.JPG";
import RegularSeason from "../img/DSC_0471.JPG";
import EarlySeason from "../img/earlySeason.JPG";
import IntroProgramming from "../img/DSC_0342.JPG";
import RoboticsProgramming from "../img/DSC_0345.JPG";
import IntermidateProgramming from "../img/DSC_0352.JPG";
import AMC from "../img/AMC.jpg";
import MPM from "../img/MPM.jpg";
import ComputerProgramming from "../img/computingProgramming.jpg";
import MathClub from "../img/MathClub.png";
import BCNumAssess from "../img/BCNumAssessment.jpg";
import Science from "../img/Science.jpg";
import French from "../img/french.jpg";
import Mandarin from "../img/mandrian.jpg";
import Spanish from "../img/spanish.jpg";
import English from "../img/english.jpg";
import NovelStudy from "../img/novel.jpg";
import SocialStudies from "../img/socialStudies.jpg";

const Programs = () => {
  // Programs Section
  const roboticsPrograms = [
    { 
      id: 1, 
      title: 'Early Learning Robotics', 
      subtitle: 'For ages 8-12',
      description: 'Introduces kids (ages 8-10) to robotics using the VEX EXP platform. Through fun, hands-on activities like robot soccer and treasure hunts, students design, build, and code robots, developing teamwork, problem-solving, and STEM skills in a creative, supportive environment.',
      imageUrl: EarlyLearningRobotics, 
    },
    { 
      id: 2, 
      title: 'Intro to VEX Robotics', 
      subtitle: 'For ages 10-18',
      description: 'Students will learn the fundamentals of building and programming robots. They will design and construct a robot with a chassis, lift mechanism, and object manipulation system, then learn to program it for various tasks, combining hands-on creativity with core STEM concepts.',
      imageUrl: IntroToVEX,
    },
    { 
      id: 3, 
      title: 'Early Season', 
      subtitle: 'For ages 12-18',
      description: 'Early Season runs from May to August, focusing on the new released VEX Robotics game in competitive robotics. Students will design, build, and refine their robots, culminating in an opportunity to test their creations at a competition in August.', 
      imageUrl: EarlySeason, 
    },
    { 
      id: 4, 
      title: 'Regular Season',  
      subtitle: 'For ages 12-18',
      description: 'Regular Season runs from September to March, emphasizing teamwork and competitive robotics. Students collaborate in teams to design and program robots, participating in 10+ competitions with the goal of qualifying for Provincials in March.', 
      imageUrl: RegularSeason, 
    },
    { 
      id: 5, 
      title: '3D Modeling & Printing', 
      subtitle: 'For ages 10-16',
      description: '3D Modeling & Printing is a project-based program where students learn the basics of 3D design using Onshape. They will explore Computer-Aided Design (CAD) techniques to create projects like keychains, bottle holders, and various student-inspired designs, bringing their ideas to life through 3D printing.', 
      imageUrl: ThreeDModeling, 
    },
    { 
      id: 6, 
      title: 'Robotics Programming',
      subtitle: 'For ages 12-18', 
      description: 'Robotics Programming focuses on embedded programming using C++, where students learn to implement control algorithms such as PID control, bang-bang control, and motion control. Through hands-on coding, they’ll optimize robot performance for tasks like precise movement, object manipulation, and environmental navigation, gaining a deep understanding of robotics systems and programming logic.',
      imageUrl: RoboticsProgramming,
    },
    { 
      id: 7, 
      title: 'Programming - Intro', 
      subtitle: 'For ages 12-15',
      description: 'Introduces students to the fundamentals of coding using Python, a beginner-friendly yet powerful language. Students will learn key concepts such as variables, loops, functions, and conditionals, applying their skills to fun projects like simple games, calculators, and data visualizations.', 
      imageUrl: IntroProgramming, 
    },
    { 
      id: 8, 
      title: 'Programming - Intermidate', 
      subtitle: 'For ages 15-18',
      description: 'Teaches the foundations of C++, a versatile language widely used in software and robotics. Students will explore concepts like syntax, loops, arrays, and object-oriented programming, building practical projects such as number guessers, mini-games, and basic simulations.', 
      imageUrl: IntermidateProgramming, 
    },
  ];

  // Academic Programs Section
  const academicPrograms = [
    { 
      id: 9, 
      title: 'Math - MPM', 
      subtitle: 'For ages 15-18',
      description: 'Explore mathematical concepts through engaging exercises that sharpen problem-solving skills and critical thinking.', 
      imageUrl: MPM, 
    },
    { 
      id: 10, 
      title: 'A+ Math Club', 
      subtitle: 'For ages 15-18',
      description: 'Prepare for competitive math challenges and develop a strong foundation in advanced mathematics.', 
      imageUrl: MathClub, 
    },
    { 
      id: 11, 
      title: 'Computer Programming', 
      subtitle: 'For ages 15-18',
      description: 'Learn advanced programming techniques to build your own projects and tackle coding challenges.', 
      imageUrl: ComputerProgramming, 
    },
    { 
      id: 12, 
      title: 'AMC', 
      subtitle: 'For ages 15-18',
      description: 'Train for the AMC (American Mathematics Competitions) with focused practice sessions and mock tests.', 
      imageUrl: AMC, 
    },
    { 
      id: 13, 
      title: 'BC Numeracy Assessment', 
      subtitle: 'For ages 15-18',
      description: 'Strengthen numeracy skills to excel in the BC Numeracy Assessment.', 
      imageUrl: BCNumAssess, 
    },
    { 
      id: 14, 
      title: 'Science', 
      subtitle: 'For ages 15-18',
      description: 'Delve into the exciting world of science through hands-on experiments and collaborative projects.', 
      imageUrl: Science, 
    },
    { 
      id: 15, 
      title: 'French', 
      subtitle: 'For ages 15-18',
      description: 'Develop fluency in French with immersive lessons focused on conversation, grammar, and culture.', 
      imageUrl: French, 
    },
    { 
      id: 16, 
      title: 'Mandarin', 
      subtitle: 'For ages 15-18',
      description: 'Learn Mandarin through interactive lessons that emphasize speaking, writing, and cultural understanding.', 
      imageUrl: Mandarin, 
    },
    { 
      id: 17, 
      title: 'Spanish', 
      subtitle: 'For ages 15-18',
      description: 'Master the basics of Spanish with lessons that blend vocabulary, conversation, and grammar.', 
      imageUrl: Spanish, 
    },
    { 
      id: 18, 
      title: 'English', 
      subtitle: 'For ages 15-18',
      description: 'Improve reading, writing, and communication skills in English through guided practice and feedback.', 
      imageUrl: English, 
    },
    { 
      id: 19, 
      title: 'Novel Study', 
      subtitle: 'For ages 15-18',
      description: 'Engage in detailed analysis and discussion of classic and modern novels.', 
      imageUrl: NovelStudy, 
    },
    { 
      id: 20, 
      title: 'Social Studies', 
      subtitle: 'For ages 15-18',
      description: 'Discover the history, geography, and cultures of the world through interactive learning.', 
      imageUrl: SocialStudies, 
    },
  ];

  return (
    <div className="programs-container">
      <h1 className="programs-title">Our Robotics Programs</h1>
      <div className="programs-grid">
        {roboticsPrograms.map(program => (
          <div className="program-card" key={program.id}>
            <img src={program.imageUrl} alt={program.title} className="program-image" />
            <h2>{program.title}</h2>
            <p className="program-subtitle"><em>{program.subtitle}</em></p>
            <p>{program.description}</p>
          </div>
        ))}
      </div>

      <h1 className="programs-title">Our Academic Programs x Zhuge Academy</h1>
      <div className="programs-grid">
        {academicPrograms.map(program => (
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
