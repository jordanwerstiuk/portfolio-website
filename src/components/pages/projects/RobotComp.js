import React, { useState, useEffect } from "react";
import "./RobotComp.css";

function RobotComp() {
  const [visibility, setVisibility] = useState({
    introtext1: false,
    introtext2: false,
    introtext3: false,
  });

  // Define the scroll thresholds for each element
  const thresholds = {
    introtext1: 525,
    introtext2: 760,
    introtext3: 995,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update the visibility based on scroll thresholds
      setVisibility({
        introtext1: scrollY > thresholds.introtext1,
        introtext2: scrollY > thresholds.introtext2,
        introtext3: scrollY > thresholds.introtext3,
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
          This is the first line of intro text.
        </h6>
        <h6 className={`robotcomp-text ${!visibility.introtext2 ? "hidden" : ""}`}>
          This is the second line of intro text.
        </h6>
        <h6 className={`robotcomp-text ${!visibility.introtext3 ? "hidden" : ""}`}>
          This is the third line of intro text.
        </h6>
      </div>
    </div>
  );
}

export default RobotComp;
