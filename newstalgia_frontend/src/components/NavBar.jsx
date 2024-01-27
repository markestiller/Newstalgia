import React from "react";
import hamtaro from "../assets/hamtaro.png";
import notepad from "../assets/notepad.png";

const NavBar = () => {
  return (
    <div className="bg-gray-800 text-white w-1/12 p-4 z-5">
      <ul>
        <li className="mb-2">
          <a href="#">
            <img src={notepad} className="w-8 h-12" alt="Notepad" />
          </a>
        </li>
        <li className="mb-2">
          <a href="#">
            <img src={hamtaro} className="w-8 h-12" alt="Hamtaro" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
