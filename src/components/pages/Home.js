import React from "react";
import "../../App.css";
import HomeSection from "../HomeSection";
import FeaturedProjects from "../FeaturedProjects";
import DesignTeams from "../DesignTeams";

function Home() {
  return (
    <>
      <HomeSection />
      <FeaturedProjects />
      <DesignTeams />
    </>
  );
}

export default Home;
