import React from "react";
import { Button } from "./Button";
import "./HomeSection.css";
import "../App.css";

function PersonalProjSection() {
  return (
    <div className="personalprojects">
      <h1>PERSONAL PROJECTS</h1>
      <div className="home-btns-row4">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--huge"
          to="/calculator"
        >
          CUSTOM CALCULATOR
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--huge"
          to="/website"
        >
          REACT WEBSITE
        </Button>
      </div>
    </div>
  );
}

export default PersonalProjSection;
