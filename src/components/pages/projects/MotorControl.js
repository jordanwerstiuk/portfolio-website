import React from "react";
import "./MotorControl.css";

function MotorControl() {
  return (
    <div>
      <div className="motorcontrol-container-title">
        <h1 className="motorcontrol-h1">MOTOR CONTROL CIRCUIT</h1>
      </div>
      <div className="motorcontrol-container-main">
        <img src="/images/mc_left.jpg" alt="Counter -> D-latch -> DAC schematic part 1" className="mc-left-image" />
        <img src="/images/mc_right.jpg" alt="Counter -> D-latch -> DAC schematic part 2" className="mc-right-image" />
        <h5 className="mc-date-text">
          November-December 2023
          <br />
          Affiliated with: ENPH 259
        </h5>
        <h6 className="intro-text">
          The motor control circuit was the final project and cornerstone of our Experimental Techniques class,
          which taught me about key concepts behind digital and analog circuits. The labs leading up to the final project each
          equipped me with the knowledge of a new part of the larger circuit which made up the final project; a circuit designed to actively control the speed of a motor.
          The electrical signals had to carefully pass through all the wiring to create an adjustable signal compatible with the motor.
          I have divided the project into sections, with my own brief explanations of how they work. Pictured below is the completed project (unfortunately I do not have a video).
        </h6>
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/images/fullfinishedcircuit.jpg" alt="Completed project full view" className="motorcontrol-image-left" />
          </div>
          <div className="image-content">
            <img src="/images/finishedcircuit.jpg" alt="Completed project top view" className="motorcontrol-image-right" />
          </div>
        </div>
        <h6 className="motorcontrol-text">
          This page gives an good overview of the project, however there of course was much more analysis and testing done as part of the project which I won't delve into here.
          Additionally, as in any non-trivial project, I had to troubleshoot various issues while working on it, which I won't bore you with here either.
        </h6> 
        <h4 className="motorcontrol-headers">
         1. A phototransistor sends pulses which indicate the speed of the motor.   
        </h4>
        <h6 className="motorcontrol-text">
          Rigidly attached to the motor is a disk with 10 evenly spaced holes placed at about 90% of the radius' distance from the disk's centre.
          A light emitting diode shines light at the disk, however the light only goes through to the phototransistor when a hole on the disk passes by the diode. 
          Everytime a hole passes by, the phototransistor sends a signal which is delivered as the CLOCK pulses to the counter. 
          Therefore, the speed of the motor is proportional to the rate of holes passing by, meaning we can tell what the relative speed is based on it.
          With this, the circuit now has it's key feedback input which it will use to eventually increase or descrease the power delivered to the motor.
        </h6>
        <h4 className="motorcontrol-headers">
         2. An 8-bit counter keeps track of how many pulses it receives from the phototransistor. 
        </h4> 
        <h6 className="motorcontrol-text">
          This step is fairly straight forward. Using a dual 4-bit counter, an 8-bit counter can easily be constructed
          by connecting the most significant bit of the first 4-bit counter to the least significant bit of the second.
          The clock signal is delivered from the phototransistor, and we are now able to count how many holes on the disk have passed by.
        </h6>
        <h4 className="motorcontrol-headers">
         3. A D-latch stores the last recorded value in the counter. 
        </h4>
        <h6 className="motorcontrol-text">
          With the help of a D-latch IC, this step also becomes simple. I connected the 8 corresponding bits from the counter to the D-latch.
          However, there are still two very important - and more interesting - pieces missing for this part of the circuit, which will be introduced in the next step.
        </h6>
        <h4 className="motorcontrol-headers">
         4. Reset and latch signals periodically reset the counter and latch the output. 
        </h4>
        <h6 className="motorcontrol-text">
          To create the both these signals, we will start with a square wave from a function generator.
          We will put the square wave through a Schmitt-Trigger inverter twice, simply to remove possible noise from the wavegen. This becomes our latch signal.
          For the reset signal, a capacitor is used to create a delay, since the reset cannot happen at the same time as the latching.
          <br />
          <br />
          Since capacitors take time to charge and discharge, the gradual change in voltage occurs, as observed in the image above.
          The capacitor C2 starts uncharged, acting as a short circuit, causing point 2 to be at 0V. 
          As it charges, it causes more and more of a voltage drop, until it is fully charged and acts as an open circuit. 
          Then, no current flows through the capacitor, and points 1 and 2 are at the same voltage. 
          After going through the next inverter (shown below), the voltage only changes from high to low or low to high at specific values (hysteresis), which are both between 1V and 2V. 
          Since the capacitor takes time to charge/discharge, these values aren't reached instantly (as they would be without the capacitor), and instead take time to reach. 
          The time that it takes is the delay.
        </h6> 
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/images/RESETdiagram.jpg" alt="Reset/latch signal schematic" className="mc-image-left3" />
          </div>
          <div className="image-content">
            <img src="/images/smalldelay.png" alt="Delay on oscilloscope" className="mc-image-right4" />
          </div>
        </div>
        <h6 className="motorcontrol-text">
          The next part of the circuit transitions the reset signal from a delayed square wave to a delayed pulse.
          Let's start by considering when the square wave is low, and the capacitor C3 is discharged. 
          In this case, since the square wave is providing 0V, there is no current flowing, and the output is also at 0V. 
          Now, when the square wave changes to 5V, C3 will charge, allowing some current through, and causing a positive voltage at point 4 (after C3). 
          However, C3 quickly fully charges, and then acts as an open circuit, allowing no current through. 
          Since there is no current flowing, there is no voltage drop across the resistor R5, meaning point 4 is once again at 0V. 
          It stays at 0V until the square wave changes from high to low, which gives C3 the chance to discharge. 
          It does this quickly, causing a negative voltage at point 4, and then everything returns to 0V once again.
        </h6>
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/images/resetpulses.png" alt="Pulse on oscilloscope" className="limage-left5" />
          </div>
          <div className="image-content">
            <img src="/images/labeledpoints.jpg" alt="Reset/latch breadboard" className="limage-right6" />
          </div>
        </div>
        <h4 className="motorcontrol-headers">
         5. The value is converted from digital to an analog signal. 
        </h4>
        <h6 className="motorcontrol-text">
          A digital signal is no good for powering a motor. Luckily, we have these handy resistor ladders that can convert it to analog.
          Essentially, the less significant the bit, the more resistors it has to go through, which have the proper relative resistances
          to result in halfing the voltage for each subsequent bit. 
        </h6> 
        <h4 className="motorcontrol-headers">
         6. The error signal amplifier adjusts the signal based on the setpoint voltage. 
        </h4>
        <h6 className="motorcontrol-text">
          With the equation derived below, we can see what the error signal amplifier does, and how exactly it works. 
          Since R<sub>10</sub>=10kΩ and R<sub>9</sub> is at most 10kΩ , V<sub>+</sub> can range anywhere from 0−2.5V, and the same for V<sub>-</sub>. 
          The DAC will output a V<sub>in</sub> that reflects the speed of the motor, and can range anywhere from 0V (not moving), 
          to 5V (motor is spinning fast enough that the counter reaches 255 right before the reset pulse, and all 8 bits going through the DAC are high). 
          Although, since the max setpoint voltage is 2.5V, the DAC output will be limited to this as well, and therefore the counter will only be able to count to a maximum of half of 255 before the reset pulse.
        </h6>
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/images/labelledvoltages.jpg" alt="Error signal amplifier annotated schematic" className="motorcontrol-image-left" />
          </div>
          <div className="image-content">
            <img src="/images/ESAcalculations.jpg" alt="Error signal amplifier V_out calculation" className="motorcontrol-image-right" />
          </div>
        </div>
        <h6 className="motorcontrol-text">
          From the equation above, if this V<sub>in</sub> value and V<sub>-</sub> value (which I will call the setpoint) are the same, then the equation simplifies to V<sub>out</sub> is equal to the setpoint, 
          which is always what the circuit is trying to reach. At this point, the error signal amplifier has no work to do. 
          However, if V<sub>in</sub> is not the same as the setpoint, the integrator comes into play. If V<sub>in</sub> is too large, 
          then we can tell that the last two terms of the equation will be positive, and result in a lower V<sub>out</sub> to reduce the motor speed. 
          The opposite is true for when the motor is spinning too slowly and causing a too small V<sub>in</sub>.
        </h6>
        <h4 className="motorcontrol-headers">
          7. The current is increased, and the motor spins.
        </h4>
        <h6 className="motorcontrol-text">
          As is clear from the schematic below, the BJT at the bottom connects the motor to GND through a mere 10Ω resistor, allowing for a large current
          to power the motor when the rest of the circuit delivers current to its base. And with that we are finished! Thank you for reading at least part of this long page. 
        </h6>
        <div className="content-wrapper">
          <div className="image-content">
            <img src="/images/motorcontrolschematic.png" alt="BJT and motor schematic" className="bimage-left7" />
          </div>
          <div className="image-content">
            <img src="/images/motorcontrolcircuit.jpg" alt="BJT and motor breadboard" className="bimage-right8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotorControl;
