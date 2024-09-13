import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import PersonalProjects from "./components/pages/PersonalProjects";
import ClassProjects from "./components/pages/ClassProjects";
import WorkshopCourses from "./components/pages/WorkshopCourses";
import About from "./components/pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Calculator from "./components/pages/projects/Calculator";
import Website from "./components/pages/projects/Website";
import MachineShop from "./components/pages/projects/MachineShop";
import SeaLevels from "./components/pages/projects/SeaLevels";
import RobotComp from "./components/pages/projects/robotcomp/RobotComp";
import PCBDesign from "./components/pages/projects/PCBDesign";
import MotorControl from "./components/pages/projects/MotorControl";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/personalprojects" element={<PersonalProjects />} />
          <Route path="/workshopcourses" element={<WorkshopCourses />} />
          <Route path="/classprojects" element={<ClassProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/website" element={<Website />} />
          <Route path="/machineshop" element={<MachineShop />} />
          <Route path="/motorcontrol" element={<MotorControl />} />
          <Route path="/pcbdesign" element={<PCBDesign />} />
          <Route path="/robotcomp" element={<RobotComp />} />
          <Route path="/sealevels" element={<SeaLevels />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
