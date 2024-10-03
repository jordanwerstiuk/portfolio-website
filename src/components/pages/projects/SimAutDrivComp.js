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
            <video muted controls className="path-following-video">
                <source src="/images/simplepathfollowing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <br />Rather than show the code, I'll explain the algorithm.
            The overarching concept might be what you expect; the robot sees a frame, locates where the path is by scanning for blue pixels, and then adjusts its motion to align better with where the blue pixels are. 
            Since it is using ROS, the robot is able to subscribe to the image topic, to which the camera on the robot publishes frames. 
            Once the algorithm has access to the current frame, it extracts the blue channel out of a single row of pixels, giving an array of values ranging from 0-255. 
            The OpenCV window came in very handy at this point, as I could see the exact RGB values of any pixel than I hovered my cursor over. 
            Since the environment for this scenario is very simple, it was easy to distinguish from pixels on the path versus others through a single threshold value on the blue channel. 
            <br /><br />Looping through the pixels on the selected row, I counted the total number of path pixels seen, as well as kept track of the x-coordinate of the first one. 
            Using those two pieces of information, I could find the x-coordinate of the centre of the path, by adding half of the path pixel count to the x-coordinate of the first path pixel. 
            Since the camera publishes images with a width of 800 pixels, a path centre with x-coordinate 400 would be exactly in the middle, meaning the robot was on track (most likely). 
            I subtracted half of the width from the centre value, giving the distance from the path centre to the middle of the frame. 
            <br /><br />From there, I could adjust the robots motion in any way I wanted using the distance value. 
            I started by adjusting the z-axis angular velocity (turning left or right) proportionally to the distance. 
            By making it proportional and not a fixed value, the robot would steer harder the farther it was from the path, and it wouldn't overcorrect when it was just barely off the path. 
            <br /><br />While testing, I noticed that it could move faster on the straightaways, but sometimes approached the sharp corners with a bit too much speed and briefly lost track of the path. 
            To me, the natural fix was to make the x- axis linear velocity (forward) also proportional to the distance. 
            I implemented this, setting a maximum speed which gets multiplied by a factor that decreases as the distance value increases. 
            I also set a minimum speed so that the robot wouldn't come a complete halt when the path is fully off the frame. 
            It took some value tweaking to find the right proportionality constants among other things, but the robot now drives pretty well!
            <br /><br />One other thing I want to point out about the algorithm now that I have explained it: 
            At first I was using a row of pixels just 10% above the bottom of the frame, but I eventually raised it 30% above the bottom which improved performance. 
            This basically let the robot "look ahead" and turn somewhat preemptively before corners, allowing it to approach them with greater speed. 
            What improvements would you try if you had access to the code!?
        </h6>
      </div>
    </div>
  );
}

export default SimAutDrivComp;