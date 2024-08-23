import React from "react";
import Featured from "./Featured";
import "./FeaturedProjects.css";

function FeaturedProjects() {
  return (
    <div className="featuredprojects">
      <h1>FEATURED PROJECTS</h1>
      <div className="featured_container">
        <div className="featured_wrapper">
          <ul className="featured_projects">
            <Featured
              src="images/ubc_image.jpg"
              text="STM32 Calculator"
              label="Personal Projects"
              path="/calculator"
            />
            <Featured
              src="images/ubc_image.jpg"
              text="Robot Competition 2024"
              label="Class Projects"
              path="/robotcomp"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
