let timelineElements = [
    {
      id: 1,
      title: "PCB Design",
      description:
        "Our team used two PCBs: an H-bridge and a tape sensing circuit, which I designed in KiCad. In this section I mainly discuss the considerations that went into creating them.",
      icon: "pcb",
      content:
        "PCB Design content"
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
        "Countertop Navigation content"
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