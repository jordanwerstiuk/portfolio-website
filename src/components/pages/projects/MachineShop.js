import React from "react";
import "./MachineShop.css";

function MachineShop() {
  return (
    <div>
      <div className="machineshop-container-title">
        <h1 className="machineshop-h1">MACHINE SHOP - CELL PHONE HOLDER</h1>
      </div>
      <div className="machineshop-container-main">
        <h5 className="ms-date-text">
          January-April 2024
          <br />
          Affiliated with: Department of Physics & Astronomy, UBC
        </h5>
        <div className="content-wrapper">
          <div className="text-content">
            <h6 className="machineshop-text">
              Through the student machine shop course,
              I learned how to use various tools and machines, all while creating a neat contraption for holding a phone.
              I received plenty of guidance and insight into various practices while machining the stand, with an emphasis on safety.
              <br />
              <br />
              Even though it has been a number of months since I completed the course, I got so used to the machines that I feel I could easily go right back to using them.
              I found this course very enjoyable and satisfying, despite simple tasks sometimes feeling like they are taking a long time. Once you're in the zone, the feeling of mastering the machine is great.
            </h6>
          </div>
          <div className="image-content">
            <img src="/images/mill_photo.jpg" alt="Mill in action" className="machineshop-image" />
          </div>
        </div>

        <div className="content-wrapper">
          <div className="image-content">
            <img src="/images/machineshop_certificate.png" alt="Course certificate" className="machineshop-image-two" />
          </div>
          <div className="text-content">
            <h6 className="machineshop-text">
              <br />
              <br />
              The entire course gives me a greater appreciation for rapid prototyping and industrial machining, since it is evident how much time they save once you have made something on your own from scratch.
              It took 35 hours to make one phone stand! To be fair, much of the time was instructional, and I expect I could complete it again in under half the time.
              <br />
              <br />
              I learned to use the mill, lathe, grinder, bandsaw, and waterjet cutter (not mentioned on the certificate).
              It is unclear whether or not these skills will come in handy later on, but I am very happy to have done this course!
              For more information on the course, click&nbsp;
              <a href="https://courses.cpe.ubc.ca/browse/ubcv/faculty-of-science/phys-and-astr/technical-services/courses/phas-sms"
              className="link">
                here.
              </a>
            </h6>
          </div>
        </div>
        <h6 className="machineshop-text-bottom">
              Here's the finished project! I machined all the individual parts with accuracy, and as such it can properly fold into a nice compact form.
        </h6>
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/images/holder_unfolded.jpg" alt="Phone stand unfolded" className="machineshop-image-three" />
          </div>
          <div className="image-content">
            <img src="/images/holder_folded.jpg" alt="Phone stand folded" className="machineshop-image-four" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineShop;