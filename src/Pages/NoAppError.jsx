import React from 'react';
import gifError from "../assets/gif.gif";
import { Link } from 'react-router';

const NoAppError = () => {
    return (
        <div>
              <div className="mb-20">
        <div className="text-center mt-15 mb-10">
          <h1 className="text-4xl font-bold pb-4">Your Installed Apps</h1>
          <h1 className=" mx-auto mt-2 text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </h1>
        </div>
        <div className="flex  justify-between w-[calc(100%-80px)] mx-auto py-6">
          <div className="text-2xl font-semibold">0 Apps Found</div>
          <select defaultValue="sorted" className="select">
            <option value={"none"}>Sort Apps</option>
            <option value={"price-asc"}>Low - High</option>
            <option value={"price-desc"}>High - Low</option>
          </select>
        </div>
        <img className="items-center w-100 mx-auto" src={gifError} alt="" />
        <div className=" flex items-center my-10 justify-center">
          <Link className="btn px-15 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
            to="/">
            Home
          </Link>
        </div>
      </div>
        </div>
    );
};

export default NoAppError;