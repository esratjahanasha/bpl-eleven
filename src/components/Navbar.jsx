import React from "react";
import logo from "../assets/logo.png";
import dollar from "../assets/dollar-1.png";
const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-[60px] h-[60px]" src={logo} alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <span className="mr-1 font-medium">{availableBalance}</span>
        <span className="mr-1 font-medium">Coin</span>
        <img src={dollar} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
