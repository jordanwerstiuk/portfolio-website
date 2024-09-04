import React from "react";
import "./MotorControl.css";

function MotorControl() {
  return (
    <div>
      <div className="motorcontrol-container-title">
        <h1 className="motorcontrol-h1">MOTOR CONTROL CIRCUIT</h1>
      </div>
      <div className="motorcontrol-container-main">
        <h5 className="date-text">
          November-December 2023
        </h5>
        <div className="content-wrapper">
          <div className="text-content">
            <h6 className="motorcontrol-text">I machined a phone stand!!</h6>
          </div>
          <div className="image-content">
            <img src="/images/holder_unfolded.jpg" alt="Code image" className="motorcontrol-image" />
          </div>
        </div>      
      </div>
    </div>
  );
}

export default MotorControl;
