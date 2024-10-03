import React, { useState, useEffect } from "react";
import "./RobotComp.css";
import Modal from "./Modal";

import { ReactComponent as MCUIcon } from "./mcu_icon.svg";
import { ReactComponent as PCBIcon } from "./pcb_icon.svg";

import timelineElements from "./timelineElements";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css"

function RobotComp() {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  const [visibility, setVisibility] = useState({
    introtext1: false,
    introtext2: false,
    introtext3: false,
    introtext4: false,
  });

  // Define the scroll thresholds for each element
  const thresholds = {
    introtext1: 525,
    introtext2: 710,
    introtext3: 2200,
    introtext4: 2400,
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update the visibility based on scroll thresholds
      setVisibility({
        introtext1: scrollY > thresholds.introtext1,
        introtext2: scrollY > thresholds.introtext2,
        introtext3: scrollY > thresholds.introtext3,
        introtext4: scrollY > thresholds.introtext4,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let PCBIconStyles = {background: "#31da35"};
  let MCUIconStyles = {background: "#FFA500"};

  return (
    <div>
      <div className="robotcomp-container-title">
        <h1 className="robotcomp-h1">ROBOT COMPETITION 2024</h1>
      </div>
      <div className="robotcomp-container-main">
        <h6 className={`robotcomp-text ${!visibility.introtext1 ? "hidden" : ""}`}>
          The Robot Competition is a staple of the UBC Engineering Physics program.
          <br /><br />
          This year, for the first time ever, teams had to make two robots to work alongside each other.
          In conjunction, they would attempt to assemble various meals consisting of 3D-printed food items, and serve them on a plate.
        </h6>
        <h6 className={`robotcomp-text ${!visibility.introtext2 ? "hidden" : ""}`}>
          The amount of knowledge and learning to be gained from this project was extraordinary, however on top of this,
          <br />
          my team and I had our eyes set on the lofty goal of winning the competition. 
        </h6>
        <div className="robotcomp-video-container">
          <video autoPlay muted loop controls className="background-video">
            <source src="/images/robot_action_shot.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-cover">
        </div>
        <h6 className={`robotcomp-text ${!visibility.introtext3 ? "hidden" : ""}`}>
          <br /><br /><br /><br />
          We found ourselves in the finals, after having won all of our previous matchups. 
          <br />
          The finals were neck and neck, with both teams churning out deluxe burgers.
          <br />
          Ultimately, we came second in an exhilirating final matchup.
        </h6>
        <h6 className={`robotcomp-text ${!visibility.introtext4 ? "hidden" : ""}`}>
          For the rest of this page, I will cover my various contributions to our robots.
          I began doing much of the electrical and circuitry work, and later on was the sole firmware developer.
          I'll take you through the most interesting parts of that journey.
          <br /><br />
          Click on any of the sections below to read about them.
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </h6>

        <VerticalTimeline>  
          {timelineElements.map((element) => {
            const isPCBIcon = element.icon === "pcb";

            return (
              <VerticalTimelineElement onTimelineElementClick={() => {
                setShowModal(true);
                setSelectedElement(element);
                }}
                className="timeline-button"
                key={element.key}
                iconStyle={isPCBIcon ? PCBIconStyles : MCUIconStyles}
                icon={isPCBIcon ? <PCBIcon /> : <MCUIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <p id="description">
                  {element.description}
                </p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
        {showModal && selectedElement && (
          <Modal
            title={selectedElement.title}
            content={selectedElement.content}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default RobotComp;