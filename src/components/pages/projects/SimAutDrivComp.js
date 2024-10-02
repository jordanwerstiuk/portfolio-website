import React from "react";
import "./SimAutDrivComp.css";

function SimAutDrivComp() {
  return (
    <div>
      <div className="simaut-container-title">
        <h1 className="simaut-h1">SIMULATED AUTONOMOUS DRIVING COMPETITION</h1>
      </div>
      <div className="simaut-container-main">
        <h5 className="simaut-date-text">
          Sep 2024 - Present
        </h5>
        <h6 className="simaut-text">
            <img src="/images/warningprogress.jpg" alt="Warning sign - project still in progress" className="warning-image" />
            This competition serves as the second half of one of Engineering Physics more famous classes, 
            centred around machine learning. 
            <br /><br />The competition takes place in the simulated environment, and this years' goal is to develop an autonomous "detective" car 
            that drives through the environment while obeying traffic laws and discovers the clues that solve the crime that has been committed. 
            <br /><br />Using tools such as ROS, OpenCV, TensorFlow, and more, I am really excited to be working on this project from which I am learning so much. 
            While the project is still ongoing, I'll try my best to update this page with various snippets! 
            If you really would like to see the finished AI at work, just hang tight for a few months and check back.
            <br /><br /><br /><br /><br />Here is one thing that I have worked on so far. 
            It is a simple version of the path following algorithm to be used in the competition. 
            Here is the video of a car following a path in Gazebo using my algorithm:
            <video muted controls className="power-circuit-video">
                <source src="/images/powercircuitvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <br />Rather than show the code, I'll explain the algorithm.

        </h6>
      </div>
    </div>
  );
}

export default SimAutDrivComp;