// src/components/Award.jsbicycle presta schrader valve adapter bike pumps adatper football pumps
import React from 'react';
import backgroundVideo from '../video/awardsVideo.mp4';
import FloatingButton from '../components/FloatingButton';

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
  ],
  "WPRA V5RC High Stakes Fall Qualifier": [
    { title: 'Tournament Champion', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Tournament Finalist', team: "886U", members: ['Andre, Daniel, Justin, Kendrick'] },
    { title: 'Tournament Finalist', team: "886W", members: ['Aaron, Ethan, Thomas'] },
    { title: 'Robot Skills Champion', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Innovate Award', team: "886U", members: ['Andre, Daniel, Justin, Kendrick'] },
    { title: 'Amaze Award', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Build Award', team: "886W", members: ['Aaron, Ethan, Thomas'] },
    // ... add more awards for this season as needed
  ],
  "PYRS Salish Fall Qualifier": [
    { title: 'Tournament Champion', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Tournament Finalist', team: "886Z", members: ['Evan, Julianne, Sharon'] },
    { title: 'Tournament Finalist', team: "886W", members: ['Aaron, Ethan, Thomas'] },
    { title: 'Robot Skills Champion', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Amaze Award', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Build Award', team: "886W", members: ['Aaron, Ethan, Thomas'] },
    // ... add more awards for this season as needed
  ],
  "PYRS Heritage Woods Qualifier": [
    { title: 'Excellence Award', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Tournament Champion', team: "886Y", members: ['Alan, Ariel, Mo'] },
    // ... add more awards for this season as needed
  ],
  "Gord Trousdell Qualifier Middle School": [
    { title: 'Excellence Award', team: "886R", members: ['Eddie, Laurence, Tina'] },
    { title: 'Tournament Finalist', team: "886R", members: ['Eddie, Laurence, Tina'] },
    { title: 'Innovate Award', team: "886T", members: ['Ariel, Claire, Moses'] },
    // ... add more awards for this season as needed
  ],
  "Gord Trousdell Qualifier High School": [
    { title: 'Excellence Award', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Tournament Champion', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Robot Skills Champion', team: "886S", members: ['Aaron, Braden, Jimmy, Victoria'] },
    { title: 'Robot Skills 2nd Place', team: "886Y", members: ['Alan, Ariel, Mo'] },
    { title: 'Create Award', team: "886Z", members: ['Evan, Julianne, Sharon'] },
    { title: 'Judges Award', team: "886W", members: ['Aaron, Ethan, Thomas'] },
    // ... add more awards for this season as needed
  ],

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
    ],
    "PYRS BC Season Opener": [
      { title: 'Tournament Champion', team: "886N", members: ['Alan, Braden'] },
      { title: 'Tournament Finalist', team: "604X", members: ['Alan, Ethan, Victoria'] },
      // ... add more awards for this season as needed
    ],
    "WPRA Halloween VRC Qualifier": [
      { title: 'Tournament Finalist', team: "604X", members: ['Alan, Ethan, Victoria'] },
      { title: 'Design Award', team: "604X", members: ['Alan, Ethan, Victoria'] },
      // ... add more awards for this season as needed
    ],
    "PYRS BC VRC Fall Qualifer": [
      { title: 'Excellence Award', team: "604X", members: ['Alan, Ethan, Victoria'] },
      { title: 'Tournament Finalist', team: "604X", members: ['Alan, Ethan, Victoria'] },
      { title: 'Judges Award', team: "886W", members: ['Aaron, Charles, Eddie, Thomas'] },
      // ... add more awards for this season as needed
    ],
    "RoboPlanet Long Weekend Special": [
      { title: 'Tournament Champion', team: "886W", members: ['Aaron, Charles, Eddie, Thomas'] },
      // ... add more awards for this season as needed
    ],
    "PYRS VRC Fall Qualifier Collingwood School": [
      { title: 'Excellence Award', team: "886W", members: ['Aaron, Charles, Eddie, Thomas'] },
      { title: 'Tournament Champion', team: "886N", members: ['Alan, Braden'] },
      { title: 'Tournament Finalist', team: "604X", members: ['Alan, Ethan, Victoria'] },
      { title: 'Create Award', team: "77174B", members: ['Alan, Allan, Oscar'] },
      { title: 'Judges Award', team: "604Y", members: ['Alyssa, Laurence, Moses, Julianne'] },
      // ... add more awards for this season as needed
    ],
    "PYRS VRC Heritage Woods Qualifer": [
      { title: 'Excellence Award', team: "886Y", members: ['Barry, Cooper'] },
      { title: 'Tournament Champion', team: "886N", members: ['Alan, Braden'] },
      { title: 'Robot Skills Champion', team: "886Y", members: ['Barry, Cooper'] },
      { title: 'Tournament Finalist', team: "886Y", members: ['Barry, Cooper'] },
      { title: 'Amaze Award', team: "604X", members: ['Alan, Ethan, Victoria'] },
      { title: 'Build Award', team: "886N", members: ['Alan, Braden'] },
      // ... add more awards for this season as needed
    ],
    "Gord Trousdell Ten Ton Robotics VRC Middle School": [
      { title: 'Touranment Champion', team: "886W", members: ['Aaron, Charles, Eddie, Thomas'] },
      { title: 'Design Award', team: "886W", members: ['Aaron, Charles, Eddie, Thomas'] },
      // ... add more awards for this season as needed
    ],
    "WPRA Christmas VRC Qualifier": [
      { title: 'Excellence Award', team: "886W", members: ['Aaron, Charles, Eddie, Thomas'] },
      { title: 'Create Award', team: "77174B", members: ['Alan, Allan, Oscar'] },
      // ... add more awards for this season as needed
    ],
    "WPRA New Year VRC Qualifier": [
      { title: 'Excellence Award', team: "77174B", members: ['Alan, Allan, Oscar']  },
      { title: 'Tournament Champion', team: "77174B", members: ['Alan, Allan, Oscar'] },
      { title: 'Tournament Champion', team: "886N", members: ['Alan, Braden'] },
      { title: 'Tournament Finalist', team: "886Z", members: ['Evan, Hubert, Jun, William, Sharon'] },
      { title: 'Design Award', team: "886N", members: ['Alan, Braden'] },
      { title: 'Build Award', team: "604Y", members: ['Alyssa, Laurence, Moses, Julianne'] },
      // ... add more awards for this season as needed
    ],
    "Ignite the Northwest VRC Signature Event": [
      { title: 'Sportsmanship Award', team: "886N", members: ['Alan, Braden'] },
      // ... add more awards for this season as needed
    ],
    "PYRS BC VRC Winter Qualifier": [
      { title: 'Tournament Champion', team: "886Y", members: ['Alan, Barry, Cooper'] },
      { title: 'Tournament Finalist', team: "77174B", members: ['Alan, Allan, Oscar'] },
      { title: 'Think Award', team: "77174B", members: ['Alan, Allan, Oscar'] },
      { title: 'Judges Award', team: "886Y", members: ['Alan, Barry, Cooper'] },
      // ... add more awards for this season as needed
    ],
    "Ten Ton Robotics Last Chance": [
      { title: 'Sportsmanship Award', team: "886V", members: ['Aaron, Claire, Daniel, Messi'] },
      // ... add more awards for this season as needed
    ],
    "WPRA Last Stan VRC Qualifier": [
      { title: 'Excellence Award', team: "886W", members: ['Aaron, Chares, Eddie, Thomas'] },
      { title: 'Tournament Champion', team: "886W", members: ['Aaron, Chares, Eddie, Thomas'] },
      { title: 'Tournament Champion', team: "604X", members: ['Alan, Ethan, Victoria'] },
      { title: 'Robot Skills Champion', team: "886W", members: ['Aaron, Chares, Eddie, Thomas'] },
      { title: 'Build Award', team: "604X", members: ['Alan, Ethan, Victoria'] },
      // ... add more awards for this season as needed
    ],
    "PYRS BC Mainland HS VRC Championship": [
      { title: 'Amaze Award', team: "886Y", members: ['Alan, Barry, Cooper'] },
      { title: 'Build Award', team: "77174B", members: ['Alan, Allan, Oscar'] },
      // ... add more awards for this season as needed
    ],
    "PYRS BC Mainland MS VRC Championship": [
      { title: 'Tournament Champion', team: "886W", members: ['Aaron, Chares, Eddie, Thomas'] },
      // ... add more awards for this season as needed
    ],
    "2024 VEX Robotics World Championship": [
      { title: 'Division Finalist', team: "886Y", members: ['Alan, Cooper, Ethan, Jimmy, Jun'] },
      // ... add more awards for this season as needed
    ],
  }


const AwardsPage = () => {
  return (
    <div className="awards-container">
      <video className="background-video-awards" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlayAwards"></div>
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
      <FloatingButton />
    </div>
  );
};

export default AwardsPage;