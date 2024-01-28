import React from "react";
import hamicon from "../assets/speakicon.png";
import noteicon from "../assets/noteicon.png";
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <div className="nav-items">
        <ul>
          <li className="mb-2">
            <a href="#">
              <img src={noteicon} className="w-25 h-25" alt="Notepad" />
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
