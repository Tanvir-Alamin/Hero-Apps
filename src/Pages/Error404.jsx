import React from "react";
import err404 from "../assets/error-404.png";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <img className="" src={err404} alt="" />
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
