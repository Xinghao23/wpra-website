// src/components/Award.jsbicycle presta schrader valve adapter bike pumps adatper football pumps
import React from 'react';
import backgroundVideo from '../video/awardsVideo.mp4';

const awardsDataHighStakes = [
  { title: 'Minnesota Signature Event Build Award', team: "886W", description: 'Aaron, Ethan, Thomas'  },
  { title: 'WPRA V5RC High Stakes Early Season Qualifier Excellence Award', team: "886W", description: 'Aaron, Ethan, Thomas'  },
  { title: 'WPRA V5RC High Stakes Early Season Qualifier Tournament Champion', team: "886W", description: 'Aaron, Ethan, Thomas'  },
  { title: 'WPRA V5RC High Stakes Early Season Qualifier Tournament Finalist', team: "77174B", description: 'Alan, Allan, Oscar, Wilson'  },
  { title: 'WPRA V5RC High Stakes Early Season Qualifier Create Award', team: "886S", description: 'Aaron, Braden, Jimmy, Victoria'  },
  { title: 'WPRA V5RC High Stakes Early Season Qualifier Judges Award', team: "886U", description: 'Andre, Justin, Kendrick'  },
  { title: 'WPRA V5RC High Stakes Season Opener Tournament Champion', team: "886W", description: 'Aaron, Ethan, Thomas'  },
  { title: 'WPRA V5RC High Stakes Season Opener Excellence Award', team: "886W", description: 'Aaron, Ethan, Thomas'  },
  { title: 'WPRA V5RC High Stakes Season Opener Robot Skills Champion', team: "886W", description: 'Aaron, Ethan, Thomas'  },
  { title: 'WPRA V5RC High Stakes Season Opener Tournament Finalist', team: "886R", description: 'Eddie, Laurence, Tina'  },
  { title: 'WPRA V5RC High Stakes Season Opener Design Award', team: "886R", description: 'Eddie, Laurence, Tina'  },
  { title: 'WPRA V5RC High Stakes Season Opener Innovative', team: "886Z", description: 'Evan, Julianne, Sharon'  },
  { title: 'WPRA V5RC High Stakes Season Opener Create Award', team: "77174B", description: 'Alan, Allan, Oscar, Wilson'  },
  { title: 'WPRA V5RC High Stakes Season Opener Judges Award', team: "886Y", description: 'Alan, Ariel, Mo'  },
  { title: 'WPRA V5RC High Stakes Halloween Qualifier Tournament Champion', team: "886Y", description: 'Alan, Ariel, Mo'  },
  { title: 'WPRA V5RC High Stakes Halloween Qualifier Tournament Finalist', team: "886S", description: 'Eddie, Laurence, Tina'  },
  { title: 'WPRA V5RC High Stakes Halloween Qualifier Design Award', team: "886Y", description: 'Alan, Ariel, Mo'  },
  { title: 'WPRA V5RC High Stakes Halloween Qualifier Innovate Award', team: "886R", description: 'Eddie, Laurence, Tina'  },
  { title: 'WPRA V5RC High Stakes Halloween Qualifier Judges Award', team: "886S", description: 'Aaron, Braden, Jimmy, Victoria'  },

  // Add more awards here as needed
];
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
        <div className="awards-column">
          {/* Box 1 */}
          <div className="award-box">
            <h2>VEX VRC High Stakes Season</h2>
            <ul>
              {awardsDataHighStakes.map((award, idx) => (
                <li key={idx}>
                  <strong>{award.title} ({award.team}):</strong> {award.description}
                </li>
              ))}
            </ul>
          </div>
          {/* Box 2 */}
          <div className="award-box">
            <h2>VEX VRC Over Under Season</h2>
            <ul>
              {awardsDataOverUnder.map((award, idx) => (
                <li key={idx}>
                  <strong>{award.title} ({award.team}):</strong> {award.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsPage;