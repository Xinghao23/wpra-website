// src/components/About.js
import React from 'react';
import FloatingButton from '../components/FloatingButton';
import Xinghao from "../img/XinghaoHS.JPG";
import Nevin from "../img/NevinHS.JPG";
import Winson from "../img/WinsonHS.JPG";
import Kenny from "../img/KennyHS.JPG";
import Charles from "../img/CharlesHS.JPG";
import Sammy from "../img/SammyHS.JPG";
import Ethan from "../img/EthanHS.JPG";

const timelineData = [
    { year: "2014", names: ["Nevin"] },
    { year: "2015", names: ["Nevin"] },
    { year: "2016", names: ["Xinghao"] },
    { year: "2017", names: ["Xinghao", "Winson"] },
    { year: "2018", names: ["Kenny"] },
    { year: "2019", names: ["Kenny", "Sammy"] },
    { year: "2020", names: ["Sammy"] },
];

const people = [
    { id: 1, 
      name: "Xinghao", 
      photo: Xinghao, 
      title: "Co-Founder, Coach",
      description: "Xinghao has been involved with VEX Robotics since 2014. Xinghao is a graduate of the Robosavages, the former world champion robotics team at Gladstone Secondary. Xinghao was the VEX Robotics BC Provincial Champion in 2016 and 2017. He was the frequent winner of the Design and Tournament Champion when he competed and has qualified to the World Championship eight times. Xinghao has been a coach in VEX Robotics for 7+ years and has mentored over 50+ students each year. He was the former lead coach and coordinator at Roboplanets before founding Western Pacific Robotics Academy. He has a Mechatronics and Business Double Major at SFU. Xinghao leads our courses and student coordinating, communications, and competitive teams programming. " 

    },
    { id: 2, 
      name: "Nevin", 
      photo: Nevin, 
      title: "Co-Founder, Coach",
      description: "Nevin has been involved with VEX robotics since 2011. Nevin is a graduate of the Robosavages, the former world champion robotics team at Gladstone Secondary. Nevin was the VEX Robotics BC Provincial Champion in 2014 and 2015. He was the frequent winner of the Excellence, Design, and Tournament Champion when he competed, winning 32 awards. Nevin has been the Event Partner of local championships for 10+ years before founding Western Pacific Robotics Academy. Nevin sits on the Board of Directors of Pacific Youth Robotics Society. Nevin has a Bachelors of Commerce from UBC Sauder School of Business and successful CPA CFE exam writer. Nevin leads our competitive team mentorship, tournaments, and accounting." 

    },
    { id: 3, name: "Winson", 
      photo: Winson, 
      title: "Co-Founder, Coach",
      description: "Winson has been involved with VEX Robotics since 2015. Winson is a graduate of the Robosavages, the former world champion robotics team at Gladstone Secondary. Winson was the VEX Robotics BC Provincial Champion in 2017. He has qualified to the World Championships seven times. He is completing a Bachelor of Science in Applied Computer Science at BCIT. Winson has been a coach in VEX Robotics for 7+ years and has mentored over 60+ students each year. He was a former lead coach at Roboplanets before founding Western Pacific Robotics Academy. Winson leads our programming and competitive courses. ." 

    },
    { id: 4, 
      name: "Charles", 
      photo: Charles, 
      title: "Coach",
      description: "Charles bring a wealth of experience from participating in numerous professional robotics competitions as a former competitor at Seaquam Secondary robotics. He has hands-on expertise guiding students in achieving exceptional results in VEX IQ. He has successfully led teams to the Robotics World Championships, with his IQ team winning World Finalist in 2023. He is passionate about fostering a collaborative and innovative environment that inspires students to excel in robotics. Charles has a Bachelor’s Degree in Information Systems at Kwantlen Polytechnic University. Charles was a former coach at Roboplanets before joining Western Pacific Robotics Academy. Charles leads our introduction courses and junior teams." 

    },
    { id: 5, 
      name: "Kenny", 
      photo: Kenny, 
      title: "Coach",
      description: "Kenny is a proud graduate of the Robosavages, the former world champion robotics team at Gladstone Secondary. He achieved success as the VEX Robotics BC Provincial Champion in 2018 and 2019, frequently earning Excellence and Tournament Champion awards during his competitive career, and qualifying for the World Championship. Currently, he is pursuing a Bachelor of Applied Science in Mechatronics Engineering at Simon Fraser University, where he combines his passion for robotics with advanced technical knowledge." 

    },
    { id: 6, 
      name: "Sammy", 
      photo: Sammy, 
      title: "Coach",
      description: "Sammy is a graduate of the Robosavages, the former world champion robotics team at Gladstone Secondary. He achieved notable success as the VEX Robotics BC Provincial Champion in 2019 and 2020, frequently winning Excellence and Tournament Champion awards during his competitive career and qualifying for the World Championship. Currently, he is pursuing a Bachelor of Applied Science in Mechatronics Engineering at Simon Fraser University, where he is deepening his knowledge and passion for robotics." 

    },
    { id: 7, 
      name: "Stanley", 
      photo: Ethan, 
      title: "Coach",
      description: "Stanley is a graduate of the Robosavages, the former world champion robotics team at Gladstone Secondary. Stanley has been teaching for 4+ years in robotics, math, chess, and english. He is pursuing his Bachelor of Applied Science in Mechatronics Engineering at SFU.  " 

    },
];

const About = () => {
  return (
      <div className="container">
          {/* Timeline Section */}
          <div className="timeline-section">
              <h2>UNBEATABLE COACHES EXPERIENCE</h2>
              <h3>BC Provincial Champions:</h3>
              <div className="timeline">
                  {timelineData.map((item, index) => (
                      <div key={index} className="timeline-wrapper">
                          <div className="timeline-item">
                              <div className="timeline-year">{item.year}</div>
                          </div>
                          <div className="timeline-coach">
                              {item.names.map((name, idx) => (
                                  <div key={idx}>{name}</div>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* About Our Staff Section */}
          <div className="row">
              {people.slice(0, 3).map(person => (
                  <div key={person.id} className="person-box">
                      <img src={person.photo} alt={person.name} className="photo" />
                      <div className="name">{person.name}</div>
                      <div className="title">{person.title}</div>
                      <div className="description">{person.description}</div>
                  </div>
              ))}
          </div>
          <div className="row">
              {people.slice(3, 7).map(person => (
                  <div key={person.id} className="person-box">
                      <img src={person.photo} alt={person.name} className="photo" />
                      <div className="name">{person.name}</div>
                      <div className="title">{person.title}</div>
                      <div className="description">{person.description}</div>
                  </div>
              ))}
          </div>
          <FloatingButton />
      </div>
  );
};

export default About;
