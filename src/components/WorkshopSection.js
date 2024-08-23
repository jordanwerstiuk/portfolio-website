import React from "react";
import { Button } from "./Button";
import "./HomeSection.css";
import "../App.css";

function WorkshopSection() {
  return (
    <div className="workshopcourses">
      <h1>WORKSHOP COURSES</h1>
      <div className="home-btns-row4">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--huge"
          to="/machineshop"
        >
          MACHINE SHOP - CELL PHONE HOLDER
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--huge"
          to="/pcbdesign"
        >
          PCB DESIGN - SIGNAL GENERATOR
        </Button>
      </div>
    </div>
  );
}

export default WorkshopSection;
