import React, { useState, scrollToBottom } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true); //useState being false means it isn't displayed

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const scrollToBottom = () => {
    const contentHeight = document.documentElement.scrollHeight;
    window.scrollTo({
      top: contentHeight,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Back Button Navigation Logic
  const handleBack = () => {
    if (window.location.pathname === "/simautdrivcomp" || window.location.pathname === "/sealevels" ||
        window.location.pathname === "/robotcomp" || window.location.pathname === "/motorcontrol") {
      navigate("/classprojects");
    } else if (window.location.pathname === "/calculator" || window.location.pathname === "/website") {
      navigate("/personalprojects");
    } else if (window.location.pathname === "/pcbdesign" || window.location.pathname === "/machineshop") {
      navigate("/workshopcourses");
    } else if (window.location.pathname === "/workshopcourses" || window.location.pathname === "/classprojects" ||
               window.location.pathname === "/personalprojects") {
      navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          Jordan Werstiuk
          <a
            href="https://www.linkedin.com/in/jordanwerstiuk"
            className="navbar-logo"
          >
            LinkedIn&nbsp; <i class="fab fa-linkedin" />
          </a>
          <a href="https://github.com/jordanwerstiuk" className="navbar-logo">
            GitHub&nbsp;
            <i class="fab fa-github" />
          </a>
          <a href="https://www.engphys.ubc.ca/" className="navbar-logo">
            UBC Engineering Physics
          </a>
          {/* <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li> */}
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" onClick={scrollToBottom}>
              Contact Me
            </Button>
          )}
        </div>
      </nav>
      {window.location.pathname !== "/" && (
        <button className="back-button" onClick={handleBack}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
      )}
    </>
  );
}

export default Navbar;


/*
{
  "name": "react-portfolio-website",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/react-scroll": "^1.8.10",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-router-dom": "^6.26.2",
    "react-scripts": "^3.0.1",
    "react-scroll": "^1.9.0",
    "react-vertical-timeline-component": "^3.6.0",
    "react-zoom-pan-pinch": "^3.6.1",
    "source-map-loader": "^5.0.0",
    "three": "^0.126.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
*/
