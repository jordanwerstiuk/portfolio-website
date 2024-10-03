import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import "./HomeSection.css";
import "../App.css";

function HomeSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    `${process.env.PUBLIC_URL}/images/ubc_image.jpg`,
    // `${process.env.PUBLIC_URL}/images/ubc_engphys.jpg`,
    // `${process.env.PUBLIC_URL}/images/lathe_photo.jpg`
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7500);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div 
      className="home-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
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
