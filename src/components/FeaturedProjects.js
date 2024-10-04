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
              src="images/robotfinalphoto.png"
              text="Robot Competition 2024"
              label="Class Projects"
              path="/robotcomp"
            />
            <Featured
              src="images/ubc_image.jpg"
              text="Custom Calculator"
              label="Personal Projects"
              path="/calculator"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
