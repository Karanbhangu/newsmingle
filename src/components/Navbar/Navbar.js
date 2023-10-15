import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuState, changeMenuState] = useState("");
  const [dropdownState, changeDropdownState] = useState("");
  const [mobileDropdown, changeMobileDropdown] = useState("");
  const handleMenu = () => {
    if (menuState === "open") {
      changeMenuState("");
    } else {
      changeMenuState("open");
    }
  };
  const handleDropdown = () => {
    dropdownState === "open"
      ? changeDropdownState("")
      : changeDropdownState("open");
  };
  const handleMobileDropdown = ()=>{
    mobileDropdown === "open"?changeMobileDropdown(""):changeMobileDropdown("open");
  }
  const closeMenu = ()=>{
    changeMenuState("");
    changeDropdownState("");
  }
  return (
    <>
      <nav>
        <div className="lefty">
          <h1>
            <span className="blues">N</span>ews-<span className="blues">M</span>
            ingle<span className="blues">.</span>
          </h1>
        </div>
        <div className="righty">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="dropdown" onClick={handleDropdown}>
              <p className="names">
                Categories <i className="fa-solid fa-angle-down"></i>
              </p>
              <ul className={"drop-items " + dropdownState}>
                <li>
                  <Link onClick={closeMenu} to="/business">Business</Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/entertainment">Entertainment</Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/general">General</Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/health">Health</Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/science">Science</Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/sports">Sports</Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/technology">Technology</Link>
                </li>
              </ul>
            </li>

            <li>
              <a href="https://github.com/karanbhangu" target="_blank" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <div className="righty-end">
        <a href="https://github.com/karanbhangu" rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-xl"></i></a>
        <a href="mailto:birk4190@gmail.com"><i className="fa-solid fa-envelope fa-xl"></i></a>
        </div>
        <div
          className={
            menuState === "open" ? "righty-mobile open" : "righty-mobile"
          }
          onClick={handleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <div
        className={menuState === "open" ? "mobile-Menu open" : "mobile-Menu"}
      >
        <ul>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <p className="mobile-categories" onClick={handleMobileDropdown}>Categories<i className="fa-solid fa-arrow-down fa-xs"></i></p>
            <div className={"mcats "+mobileDropdown}>
              <ul>
                <li><Link onClick={closeMenu} to='/business'>Business</Link></li>
                <li><Link onClick={closeMenu} to='/entertainment'>Entertainment</Link></li>
                <li><Link onClick={closeMenu} to='/general'>General</Link></li>
                <li><Link onClick={closeMenu} to='/health'>Health</Link></li>
                <li><Link onClick={closeMenu} to='/science'>Science</Link></li>
                <li><Link onClick={closeMenu} to='/sports'>Sports</Link></li>
                <li><Link onClick={closeMenu} to='/technology'>Technology</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="mailto:birk4190@gmail.com">Contact Me</a>
          </li>
        </ul>
      </div>
    </>
  );
}
