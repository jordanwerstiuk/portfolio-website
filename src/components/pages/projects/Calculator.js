import React from "react";
import "./Calculator.css";

function Calculator() {
  return (
    <div>
      <div className="calculator-container-title">
        <h1 className="calculator-h1">STM32 CALCULATOR</h1>
      </div>
      <div className="calculator-container-main">
        <h5 className="date-text">
          April 2024 - Present
        </h5>
        <div className="content-wrapper">
          <div className="text-content">
            <h6 className="calculator-text">I machined a phone stand!!</h6>
          </div>
          <div className="image-content">
            <img src="/images/holder_unfolded.jpg" alt="Code image" className="calculator-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
