import ZoomComponent from "./ZoomComponent";

let timelineElements = [
    {
      id: 1,
      title: "PCB Design",
      description:
        "Our team used two PCBs: an H-bridge and a tape sensing circuit, which I designed in KiCad. In this section I mainly discuss the considerations that went into creating them.",
      icon: "pcb",
      content:
        <div>
          <ZoomComponent 
            url="/images/doublehbridgeschematic.png"
            alt="Double H-bridge KiCad Schematic"
            className="bubs"
            buttonTop="26px"
            buttonLeft="700px"  
          />
          Test text........
          <div className="content-wrapper">
            <div className="image-content">
              <ZoomComponent 
                url="/images/hbridgepcbeditor.png"
                alt="Double H-bridge KiCad PCB Editor"
                className="jm-left"
                buttonTop="26px"
                buttonLeft="260px"  
              />            
            </div>
            <div className="image-content">
            <ZoomComponent 
                url="/images/hbridge3dmodel.png"
                alt="Double H-bridge KiCad 3D Viewer"
                className="gm-right"
                buttonTop="26px"
                buttonLeft="205px"  
              /> 
            </div>
          </div>
        </div>
    },
    {
      id: 2,
      title: "Power Circuits",
      description:
        "Each of our robots used two LiPo batteries, which each required their own circuit board to properly distribute power to the other components. Here I discuss my reasoning when designing them.",
      icon: "pcb",
      content:
        "Power Circuits content"
    },
    {
      id: 3,
      title: "Countertop Navigation",
      description:
        "These robots were autonomous, meaning we couldn't be there to control where they went. Instead, I programmed a numbering system to allow the robot to be able to deduce how to navigate between any two places on the countertop.",
      icon: "mcu",
      content:
        <div>
          Naturally, the first portion of the robot to be built is the base and drive train.
          As such, the corresponding firmware is where I began. The task at hand was to create a system that would allow the robot to autonomously traverse between the different food stations, which for each robot were spread along two counters. 
          While there was a centre tape line to follow (indicated in the annotated diagram below),
          we instead decided to drive along the counter, a strategy that multiple other teams transitioned to later on.
          We reasoned that moving along the wall would be much faster for traversing between two stations on the same counter.
          Before I began writing the code, I created a text file outlining the navigation approach.
          The following is mostly the same as in the file: <br /> <br />
          When driving from one food station to another, if necessary, the robot will cross over to the other counter by driving up or down (denoted U and D in the diagrams below). 
          Here it is important to mention that we chose to use mecanum wheels, which by powering the wheels in particular directions, allowed our robots to drive in any direction without having to turn beforehand. 
          This was key if we were going to be right up against the counter.
          The robot will then stop approximately halfway between the two counters, spin 180 degrees, and then continue the rest of the distance to the other counter. 
          Next, it will drive forwards or backwards (F or B) until it reaches the desired node (which is the only step if the robot is already at the desired counter). 
          Each node is denoted by a different number, and notice that not every node is a food station (there are two numbering systems, one for the top robot, and one for the bottom robot).
          <div className="content-wrapper">
            <div className="image-content">
              <img src="/images/both_counters_unannotated.png" alt="Counter node diagram unannotated" className="gm-left" />
            </div>
            <div className="image-content">
              <img src="/images/both_counters.jpg" alt="Counter node diagram annotated" className="gm-right" />
            </div>
          </div>
          <br />The numbers of any two nodes that line up vertically always differ by 10. 
          Based on whether our current node number is above or below 10, and if the destination node is the opposite, the robot must cross counters.
          For both robots, whenever we cross to the other side, we can simply add or subtract 10 to determine the node we have arrived at.<br /> <br />
          Once we are on right side, we will arrive at the destination node by counting the number of tape pieces the robot crosses as it drives along the counter. 
          This part differs slightly for the two robots, so I will address the bottom bot first, referencing the following diagram. 
          <img src="/images/bottom_counter.jpg" alt="Bottom counter node diagram" className="modal-image" />
          <br />As you can see, every node on the top side has a tape piece. 
          This makes it simple; the difference between the number of the node the bottom bot is at and the one it is travelling to is equal to the number of tape pieces it must cross. 
          On the bottom side, not every node has a tape piece. 
          This time, we can say that if the node number is greater than our current node, we must move forwards by one tape piece, and if it less than our current node, we must move backwards by one tape piece.
          There is also the serving area to consider. It doesn't have a tape piece, and is instead indicated by an IR signal. While we had a signal detection circuit and cross correlation code, 
          we chose to use an ESP32 timer and hard code the timings required to drive to the serving area. Humurously, the instructors never even installed the IR LED since no teams were actually using it. 
          <img src="/images/top_counter.jpg" alt="Top counter node diagram" className="modal-image" />
          <br />The top bot is more complicated, as the food stations on either side never line up with each other. 
          This introduces many more nodes, however both sides can be dealt with the same way. 
          We take the difference between nodes numbers, divide by two, and round up. This gives us the number of tape pieces away the desired node is. 
          For example, if we are moving from node 11 to 16, we calculate: 16 - 11 = 5, 5 / 2 = 2 (integer division), 2 + 1 = 3 (the “rounding”). 
          Therefore the third tape piece we reach in the forward direction (forward because 16 &gt; 11) marks the desired node.
          <br /><br /> The tape is counted is done with the help of the reflectance sensors, which are incorporated into one of the PCBs explained in the PCB Design section.
          Every time the reflectance sensor detects black tape, an interrupt function is triggered that increments a global variable. 
          To avoid incrementing the counter multiple times for the same piece of tape, one of the ESP32's four timers is used. 
          When we first increment the counter, we start the timer, and the next time the interrupt is called, if the timer has not reached ~500ms, we won’t increment the counter. 
          The robot will definitely have crossed the tape piece in 500ms, and definitely won’t have reached the next one in 500ms. 
          Below are a couple relevant code snippets; on the left is the tape interrupt function, and on the right are the Station objects. Each station has an node number,
          two values related to distances for the movements of the sweeper arm and elevator platform, and a final variable used for the stations on which items were passed from the top bot to the bottom bot.
          <div className="content-wrapper">
            <div className="image-content">
              <img src="/images/tape_interrupt.png" alt="Tape interrupt function" className="im-left" />
            </div>
            <div className="image-content">
              <img src="/images/stations.png" alt="Station objects" className="im-right" />
            </div>
          </div>
          <br /> Once the tape interrupt sets arrived to be true, our robot stops. At this point, if we didn't do anything, the robot would have overshot the piece of tape by over 5cm, 
          and assuming we placed the food item in the centre of the station (aligned with the tape), the sweeper would miss the item. So, we instead immediately start driving in reverse,
          which brings the robot to a stop faster, and then continue reversing (at a slower speed) until the tape is seen again. Since we reverse slower, this time it only overshoots by about 1cm, which is not an issue.
          <br /><br />Hopefully the navigation explanation made sense and came across as simple, after all simple is much better than overcomplicated, and I tried my best to avoid that.
          However, there were plenty of additional considerations and edge cases that had to be dealt with by modifying the explained system.
          I don't believe any of them were sctrictly necessary, but were improvements that drastically increased the speed at which our robot could assemble burgers.
          I'll cover some of the most important ones. 
          <br /><br />As you can see in the earlier counter diagrams, the tomato, plates, cheese, and lettuce stations are each at the edge of the counter, and with our robot aligned on the tape,
          our wheels only have a few centimetres to spare from the edge of the table. If we came at full speed, saw the tape, and tried to back up, the front wheels would most likely be dangling off the table 
          and it would get stuck. Obviously we don't want to have to just drive slower, since we're pushing ourselves to try and win the competition. So, we need to pre-emptively slow down. And, there was a fairly elegant solution,
          which was to slow down at the second-to-last piece of tape. This worked just fine, and you can see it in action at the beginning of this test run video. 
          <video muted controls className="test-run-video">
            <source src="/images/robot_test_run.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <br />I'll just mention something about the video; notice how the run ultimately ended because the robot didn't spin accurately enough.
          The timings were set values, and even after calibration, it acted differently based on which counter we were on. Sometimes it overspun, sometimes it underspun. 
          We considered a multitude of fixes, including adding another tape sensing circuit which could use the centre tape line to know when we've spun enough. 
          However, it didn't seem reliable enough and was sure to create plenty of other issues along the way. We could drive into the wall for longer to straighten the robot out, 
          but that would waste seconds every time the robot crosses counters. Ultimately, I fixed the issue with a very simple modification, which entailed starting the spin as close to 
          the other side as possible. The robot would drive 80% of the way across, spin, and then drive the last little bit. That way, if it overspun or underspun, 
          there would be very little time spent driving that could cause that error to actually lead the robot off course, since the robot would instead collide with the wall and straighten out almost immediately. 
          <br /><br />Let's jump back to the slowing down before reaching the tape on the edge of the table.
          When the bottom bot is travelling to the cheese or lettuce stations, there is no second-to-last piece of tape at which to slow down. 
          This time, the workaround was to dedicate another hardware timer to timing exactly when to slow down. 
          The timing had to be different based on which node was coming from, but once we got them all right, our robot could drive anywhere on the counter without wasting time or having to worry about falling off the table.
          <br /><br />
          Thanks for reading, and if you're interested, click&nbsp; 
          <a href="https://github.com/mcappellano/light-side">
            here
          </a> 
          &nbsp;to see the GitHub repo. <br /><br /><br /><br /><br />
        </div>
    },
    {
      id: 4,
      title: "Arm & Elevator Control",
      description:
        "As is seen in the video above, our robots swept in items with a long arm, as well as lowered/raised their internal elevator. Achieving that precision and coordination took time and testing.",
      icon: "mcu",
      content:
        "Arm & Elevator Control content"
    },
  ];
  
  export default timelineElements;