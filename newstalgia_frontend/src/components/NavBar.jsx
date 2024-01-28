import React from "react";
import hamicon from "../assets/speakicon.png";
import noteicon from "../assets/noteicon.png";
import "./NavBar.css"
import Notepad from "./Notepad";

const NavBar = () => {
  return (
    <>
      <div className="nav-items">
        <ul>
          <li className="mb-2">
            <a href="#">
              <Notepad/>
            </a>
          </li>
          <li className="mb-2">
            <a href="#">
              <img src={hamicon} className="w-25 h-25" alt="Hamtaro" />
            </a>
          </li>
      </ul>
      </div>
    </>
  );
};

export default NavBar;
