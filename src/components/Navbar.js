import React, { useState, scrollToBottom } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
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

  //window.addEventListener("resize", showButton);

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
    </>
  );
}

export default Navbar;
