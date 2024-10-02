import React from "react";
import { Button } from "./Button";
import "./HomeSection.css";
import "../App.css";

function ClassProjSection() {
  return (
    <div className="classprojects">
      <h1>CLASS PROJECTS</h1>
      <div className="home-btns-row2">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--huge"
          to="/robotcomp"
        >
          ROBOT COMPETITION 2024
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn-simaut"
          to="/simautdrivcomp"
        >
          SIMULATED AUTONOMOUS DRIVING COMPETITION
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--huge"
          to="/motorcontrol"
        >
          MOTOR CONTROL CIRCUIT
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--huge"
          to="/sealevels"
        >
          SEA LEVELS SOFTWARE
        </Button>
      </div>
    </div>
  );
}

export default ClassProjSection;
