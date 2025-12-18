import React from "react";
import logo from "../assets/logo.png";

const Spinner = () => {
  return (
    <div className="flex gap-10 items-center justify-center h-screen  opacity-50">
      <div className="text-6xl font-extrabold text-gray-600">L</div>
      <div className="text-6xl font-extrabold text-gray-600">
        <img className="w-30 animate-spin" src={logo} alt="" />
      </div>
      <div className="text-6xl font-extrabold text-gray-600">O</div>
      <div className="text-6xl font-extrabold text-gray-600">A</div>
      <div className="text-6xl font-extrabold text-gray-600">D</div>
      <div className="text-6xl font-extrabold text-gray-600">I</div>
      <div className="text-6xl font-extrabold text-gray-600">N</div>
      <div className="text-6xl font-extrabold text-gray-600">G</div>
    </div>
  );
};

export default Spinner;
