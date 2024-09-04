import React from "react";
import "./PCBDesign.css";

function PCBDesign() {
  return (
    <div>
      <div className="pcbdesign-container-title">
        <h1 className="pcbdesign-h1">PCB DESIGN - SIGNAL GENERATOR</h1>
      </div>
      <div className="pcbdesign-container-main">
        <h5 className="date-text">
          January-March 2024
          <br />
          Affiliated with: Department of Physics & Astronomy, UBC
        </h5>
        <div className="content-wrapper">
          <div className="text-content">
            <h6 className="pcbdesign-text">
              In this PCB Design and Prototyping workshop course, I had the opportunity of learning to design a PCB through the teaching of Mike Han, an experienced electronics engineer.
              We were given the schematic diagram of a signal generator circuit, and we had to make the schematic capture in KiCad, design the PCB, and solder the components on once the PCB arrived.
              <br />
              <br />
              At the beginning of the course, I was not familiar with the steps of creating PCBs, and by the end, I had the confidence not only to design my own, but to apply principles and knowledge that improve the quality of the design.
            </h6>
          </div>
          <div className="image-content">
            <img src="/images/final_pcb.png" alt="Finished PCB in KiCad" className="pcbdesign-image" />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/images/pcbdesign_certificate.png" alt="PCB design course certificate" className="pcbdesign-image-two" />
          </div>
          <div className="text-content">
            <h6 className="pcbdesign-text">
              For example, in my subsequent designs, I have been sure to use polygon pours connected to ground on both sides of the PCB. Some things it helps with are lower impedance, heat dissipation, and easier trace routing.
              <br />
              <br />
              This course also left me with a desire to learn a lot more about PCBs! While we made only a 2-layer PCB, I know that many modern devices, such as smartphones, use PCBs with 20 or even more layers.
              I'd be very interested in attempting to learn to design a multilayer PCB in the future, and perhaps it'll be a part of a future project.
              Additionally, we used KiCad for this course, and I would also be interested in learning to use Altium in the future.
              <br />
              <br />
              All in all, this course was the perfect gateway into the world of PCBs, and it was an extremely worthwhile use of my time.
            </h6>
          </div>
        </div>
        <h6 className="pcbdesign-text-bottom">
          Learning to hand-solder surface mount components proved to be a challenge, especially the ICs with 8 pins, but I managed to solder it all properly. With no mistakes in the design process, my PCB worked, as indicated by all of the illuminated LEDs in the photo below.
          If you want to see a couple of my newer PCB designs, check out the page on the Robot Competition 2024, where I made an H-bridge PCB of which I was very proud.
          For detailed information about the workshop course, click&nbsp;
          <a href="https://phas.ubc.ca/phas-physics-educators-sweep-2023-staff-awards"
              className="link">
                here.
          </a>
        </h6>
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/images/pcb_on2.jpg" alt="PCB plugged into power" className="pcbdesign-image-three" />
          </div>
          <div className="image-content">
            <img src="/images/pcb_aesthetic2.jpg" alt="PCB aesthetic photo" className="pcbdesign-image-four" />
          </div>
        </div>
        <h6 className="pcbdesign-text-bottom-two">
          In case you are interested, shown below are my two KiCad schematics of the parts that went into the PCB. On the left is the signal processor, and on the right is the power supply.      
        </h6>
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/images/signal_processor.png" alt="Signal processor KiCad schematic" className="pcbdesign-image-five" />
          </div>
          <div className="image-content">
            <img src="/images/power_supply.png" alt="Power supply KiCad schematic" className="pcbdesign-image-six" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PCBDesign;
