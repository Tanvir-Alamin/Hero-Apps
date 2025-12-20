import React from "react";
import err404 from "../assets/space-404.gif";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="w-[calc(100%-80px)] mx-auto">
      <div className=" flex justify-center">
        <img className="w-120 my-10 mx-auto" src={err404} alt="" />
      </div>
      <div className=" flex justify-center my-8">
        <Link
          className="btn mx-auto px-15 skeleton bg-[#632EE3] text-white "
          to="/home"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
