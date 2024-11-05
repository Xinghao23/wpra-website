// src/components/Award.jsbicycle presta schrader valve adapter bike pumps adatper football pumps
import React from 'react';
import backgroundVideo from '../video/awardsVideo.mp4';

const awardsDataHighStakes1 = {
  "Minnesota Signature Event": [
    { title: 'Build Award', team: "886W", members: ['Aaron', 'Ethan', 'Thomas'] },
  ],
"WPRA Early Season Summer Qualifier": [
    { title: 'Excellence Award', team: "886W", members: ['Aaron, Ethan, Thomas'] },
    { title: 'Tournament Champion', team: "886W", members: ['Aaron, Ethan, Thomas'] },
    { title: 'Tournament Finalist', team: "77174B", members: ['Alan, Allan, Oscar, Wilson'] },
    { title: 'Create Award', team: "886S", members: ['Aaron, Braden, Jimmy, Victoria'] },
   { title: 'Judges Award', team: "886U", members: ['Andre, Justin, Kendrick'] },
  ],
  "WPRA V5RC High Stakes Season Opener": [
    { title: 'Tournament Champion', team: "886W", members: ['Aaron, Ethan, Thomas'] },
    { title: 'Excellence Award', team: "886W", members: ['Aaron, Ethan, Thomas'] },
    { title: 'Robot Skills Champion', team: "886W", members: ['Aaron, Ethan, Thomas'] },
    { title: 'Tournament Finalist', team: "886R", members: ['Eddie, Laurence, Tina'] },
    { title: 'Design Award', team: "886R", members: ['Eddie, Laurence, Tina'] },
    { title: 'Innovative Award', team: "886Z", members: ['Evan, Julianne, Sharon'] },
    { title: 'Create Award', team: "77174B", members: ['Alan, Allan, Oscar, Wilson'] },
    { title: 'Judges Award', team: "886Y", members: ['Alan, Ariel, Mo'] },
    // ... add more awards for this season as needed
  ],
  "WPRA V5RC High Stakes Halloween Qualifier": [
    { title: 'Tournament Champion', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Tournament Finalist', team: "886S", members: ['Aaron, Braden, Jimmy, Victoria'] },
    { title: 'Design Award', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Innovate Award', team: "886R", members: ['Eddie, Laurence, Tina'] },
    { title: 'Judges Award', team: "886S", members: ['Aaron, Braden, Jimmy, Victoria'] },
    // ... add more awards for this season as needed
  ],
  "PYRS Season Opener Qualifier": [
    { title: 'Tournament Champion', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Tournament Champion', team: "886R", members: ['Eddie, Laurence, Tina'] },
    { title: 'Build Award', team: "886R", members: ['Eddie, Laurence, Tina'] },
    // ... add more awards for this season as needed
  ]

  // Add more awards here as needed
}

const awardsDataOverUnder1 = {
  "WPRA Early Season Summer Qualifier": [
      { title: 'Design Award', team: "886N", members: ['Alan', 'Braden'] },
      { title: 'Create Award', team: "886A", members: ['Eddie', 'Simone', 'Oscar'] },
    ],
    "WPRA Season Opener Qualifier": [
      { title: 'Build Award', team: "886Z", members: ['Evan', 'Hubert', 'Jun', 'William', 'Sharon'] },
      // ... add more awards for this season as needed
    ]
  
    // Add more awards here as needed
  }
const awardsDataOverUnder = [
  { title: 'WPRA Early Season Summer Qualifier Design Award', team: "886N", description: 'Alan, Braden'},
  { title: 'WPRA Early Season Summer Qualifier Create Award', team: "886A", description: 'Eddie, Simone, Oscar'},
  { title: 'WPRA Season Opener Qualifier Build Award', team: "886Z", description: 'Evan, Hubert, Jun, William, Sharon'},
  { title: 'PYRS BC Season Opener Tournament Champion', team: "886N", description: 'Alan, Braden'},
  { title: 'PYRS BC Season Opener Amaze Award', team: "604X", description: 'Alan, Ethan, Victoria'},
  { title: 'WPRA Halloween VRC Qualifier Tournament Finalist', team: "604X", description: 'Alan, Ethan, Victoria'},
  { title: 'WPRA Halloween VRC Qualifier Design Award', team: "604X", description: 'Alan, Ethan, Victoria'},
  { title: 'PYRS BC VRC Fall Qualifer Excellence Award', team: "604X", description: 'Alan, Ethan, Victoria'},
  { title: 'PYRS BC VRC Fall Qualifer Tournament Finalist', team: "604X", description: 'Alan, Ethan, Victoria'},
  { title: 'PYRS BC VRC Fall Qualifer Judges Award', team: "886W", description: 'Aaron, Chares, Eddie, Thomas'},
  { title: 'RoboPlanet Long Weekend Special Tournament Champion', team: "886W", description: 'Aaron, Chares, Eddie, Thomas'},
  { title: 'PYRS VRC Fall Qualifier Collingwood School Excellence Award', team: "886W", description: 'Aaron, Chares, Eddie, Thomas'},
  { title: 'PYRS VRC Fall Qualifier Collingwood School Tournament Champion', team: "886N", description: 'Alan, Braden'},
  { title: 'PYRS VRC Fall Qualifier Collingwood School Tournament Finalist', team: "604X", description: 'Alan, Ethan, Victoria'},
  { title: 'PYRS VRC Fall Qualifier Collingwood School Create Award', team: "77174B", description: 'Alan, Allan, Oscar'},
  { title: 'PYRS VRC Fall Qualifier Collingwood School Judges Award', team: "604Y", description: 'Alyssa, Laurence, Moses, Julianne'},
  { title: 'PYRS VRC Heritage Woods Qualifer Excellence Award', team: "886Y", description: 'Barry, Cooper'},
  { title: 'PYRS VRC Heritage Woods Qualifer Tournament Champion', team: "886N", description: 'Alan, Braden'},
  { title: 'PYRS VRC Heritage Woods Qualifer Robot Skills Champion', team: "886Y", description: 'Barry, Cooper'},
  { title: 'PYRS VRC Heritage Woods Qualifer Tournament Finalist', team: "886Y", description: 'Barry, Cooper'},
  { title: 'PYRS VRC Heritage Woods Qualifer Amaze Award', team: "604X", description: 'Alan, Ethan, Victoria'},
  { title: 'PYRS VRC Heritage Woods Qualifer Build Award', team: "886N", description: 'Alan, Braden'},
  { title: 'Gord Trousdell Ten Ton Robotics VRC Middle School Tournament Champions', team: "886W", description: 'Aaron, Chares, Eddie, Thomas'},
  { title: 'Gord Trousdell Ten Ton Robotics VRC Middle School Design Award', team: "886W", description: 'Aaron, Chares, Eddie, Thomas'},
  { title: 'WPRA Christmas VRC Qualifier Excellence Award', team: "886W", description: 'Aaron, Chares, Eddie, Thomas'},
  { title: 'WPRA Christmas VRC Qualifier Create Award', team: "77174B", description: 'Alan, Allan, Oscar'},
  { title: 'WPRA New Year VRC Qualifier Excellence Award', team: "77174B", description: 'Alan, Allan, Oscar'},
  { title: 'WPRA New Year VRC Qualifier Tournament Champion', team: "77174B", description: 'Alan, Allan, Oscar'},
  { title: 'WPRA New Year VRC Qualifier Tournament Champion', team: "886N", description: 'Alan, Braden'},
  { title: 'WPRA New Year VRC Qualifier Tournament Finalist', team: "886Z", description: 'Evan, Hubert, Jun, William, Sharon'},
  { title: 'WPRA New Year VRC Qualifier Design Award', team: "886N", description: 'Alan, Braden'},
  { title: 'WPRA New Year VRC Qualifier Build Award', team: "604Y", description: 'Alyssa, Laurence, Moses, Julianne'},
  { title: 'Ignite the Northwest VRC Signature Event Sportsmanship Award', team: "886N", description: 'Alan, Braden'},
  { title: 'PYRS BC VRC Winter Qualifier Tournament Champion', team: "886Y", description: 'Alan, Barry, Cooper'},
  { title: 'PYRS BC VRC Winter Qualifier Tournament Finalist', team: "77174B", description: 'Alan, Allan, Oscar'},
  { title: 'PYRS BC VRC Winter Qualifier Think Award', team: "77174B", description: 'Alan, Allan, Oscar'},
  { title: 'PYRS BC VRC Winter Qualifier Judges Award', team: "886Y", description: 'Alan, Barry, Cooper'},
  { title: 'Ten Ton Robotics Last Chance Tournament Champion', team: "886V", description: 'Aaron, Daniel, Messi, Claire'},
  { title: 'WPRA Last Stan VRC Qualifier Excellence Award', team: "886W", description: 'Aaron, Chares, Eddie, Thomas'},
  { title: 'WPRA Last Stan VRC Qualifier Tournament Champion', team: "886W", description: 'Aaron, Chares, Eddie, Thomas'},
  { title: 'WPRA Last Stan VRC Qualifier Tournament Champion', team: "604X", description: 'Alan, Ethan, Victoria'},
  { title: 'WPRA Last Stan VRC Qualifier Robot SKills Champion', team: "886W", description: 'Aaron, Chares, Eddie, Thomas'},
  { title: 'WPRA Last Stan VRC Qualifier Build Award', team: "604X", description: 'Alan, Ethan, Victoria'},
  { title: 'PYRS BC Mainland HS VRC Championship Amaze Award', team: "886Y", description: 'Alan, Barry, Cooper'},
  { title: 'PYRS BC Mainland HS VRC Championship Build Award', team: "77174B", description: 'Alan, Allan, Oscar'},
  { title: 'PYRS BC Mainland MS VRC Championship Tournament Champion', team: "886W", description: 'Aaron, Chares, Eddie, Thomas'},
  { title: '2024 VEX Robotics World Championship Division Finalist', team: "886Y", description: 'Alan, Cooper, Ethan, Jimmy, Jun'},

  // Add more awards here as needed
];

const AwardsPage = () => {
  return (
    <div className="awards-container">
      <video className="background-video-awards" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="awards-content">
        <h1 className="awards-title">Our Awards</h1>
        
        {/* First Box for High Stakes Season */}
        <div className="award-box">
          <h2>VEX VRC High Stakes Season</h2>
          {Object.entries(awardsDataHighStakes1).map(([season, awards], idx) => (
            <div key={idx}>
              <h3>{season}</h3>
              <ul>
                {awards.map((award, index) => (
                  <li key={index}>
                    <strong>{award.title} ({award.team}):</strong> {award.members.join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Second Box for Over Under Season */}
        <div className="award-box">
          <h2>VEX VRC Over Under Season</h2>
          {Object.entries(awardsDataOverUnder1).map(([season, awards], idx) => (
            <div key={idx}>
              <h3>{season}</h3>
              <ul>
                {awards.map((award, index) => (
                  <li key={index}>
                    <strong>{award.title} ({award.team}):</strong> {award.members.join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsPage;