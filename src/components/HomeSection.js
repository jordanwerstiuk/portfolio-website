import React from "react";
import { Button } from "./Button";
import "./HomeSection.css";
import "../App.css";

function HomeSection() {
  return (
    <div className="home-container">
      <h1>PROJECT PORTFOLIO</h1>
      <div className="home-btns-row1">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--huge"
          to="/classprojects"
        >
          CLASS PROJECTS
        </Button>
      </div>
      <div className="home-btns-row2">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--huge"
          to="/personalprojects"
        >
          PERSONAL PROJECTS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--huge"
          to="/workshopcourses"
        >
          WORKSHOP COURSES
        </Button>
      </div>
    </div>
  );
}

export default HomeSection;
