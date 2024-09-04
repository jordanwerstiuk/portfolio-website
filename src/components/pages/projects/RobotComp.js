import React from "react";
import "./RobotComp.css";

function RobotComp() {
  return (
    <div>
      <div className="robotcomp-container-title">
        <h1 className="robotcomp-h1">ROBOT COMPETITION 2024</h1>
      </div>
      <div className="robotcomp-container-main">
      <h5 className="date-text">
          May-August 2024
        </h5>
        <div className="content-wrapper">
          <div className="text-content">
            <h6 className="robotcomp-text">I machined a phone stand!!</h6>
          </div>
          <div className="image-content">
            <img src="/images/holder_unfolded.jpg" alt="Code image" className="robotcomp-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RobotComp;
