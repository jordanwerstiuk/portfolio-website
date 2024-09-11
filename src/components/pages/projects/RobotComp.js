import React, { useState, useEffect } from "react";
import "./RobotComp.css";

function RobotComp() {
  const [visibility, setVisibility] = useState({
    introtext1: false,
    introtext2: false,
  });

  // Define the scroll thresholds for each element
  const thresholds = {
    introtext1: 525,
    introtext2: 710,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update the visibility based on scroll thresholds
      setVisibility({
        introtext1: scrollY > thresholds.introtext1,
        introtext2: scrollY > thresholds.introtext2,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div>
      <div className="robotcomp-container-title">
        <h1 className="robotcomp-h1">ROBOT COMPETITION 2024</h1>
      </div>
      <div className="robotcomp-container-main">
        <h6 className={`robotcomp-text ${!visibility.introtext1 ? "hidden" : ""}`}>
          The annual Robot Competition is a staple of the UBC Engineering Physics program.
          <br />
          <br />
          This year, for the first time ever, teams had to make two robots to work alongside each other.
          In conjunction, they would attempt to assemble various meals consisting of 3D-printed food items, and serve them on a plate.
        </h6>
        <h6 className={`robotcomp-text ${!visibility.introtext2 ? "hidden" : ""}`}>
          The amount of knowledge and learning to be gained from this project was extraordinary, however on top of this,
          <br />
          my team and I had our eyes set on the lofty goal of winning the competition. 
        </h6>
        <div className="robotcomp-video-container">
          <video autoPlay muted loop controls className="background-video">
            <source src="/images/robot_action_shot.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <h6 class="robotcomp-text">
            This is some intro text over the video background.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default RobotComp;