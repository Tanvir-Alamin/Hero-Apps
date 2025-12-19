import { Heading1 } from "lucide-react";
import React, { useState } from "react";
import downloadImage from "../assets/icon-downloads.png";
import ratingAvg from "../assets/icon-ratings.png";
import gifError from "../assets/gif.gif";
import { Link } from "react-router";

const Installation = () => {
  const [installedApp, setInstalledApp] = useState(
    JSON.parse(localStorage.getItem("installed")) || []
  );
  const [sorted, setSorted] = useState("none");
  const sortedItem = () => {
    if (sorted == "price-asc") {
      return [...installedApp].sort((a, b) => a.size - b.size);
    } else if (sorted == "price-desc") {
      return [...installedApp].sort((a, b) => b.size - a.size);
    } else return installedApp;
  };
  const handleRemove = (id) => {
    const filterData = installedApp.find((p) => p.id == id);
    setInstalledApp(
      JSON.stringify(localStorage.removeItem("installed", filterData)) || []
    );
  };

  if (installedApp.length == 0)
    return (
      <div className="mb-50">
        <div className="text-center mt-15 mb-10">
          <h1 className="text-4xl font-bold pb-4">No Installed Apps</h1>
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
          <Link
            className="btn px-15 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white "
            to="/"
          >
            Home
          </Link>
        </div>
      </div>
    );
  else
    return (
      <div className="w-[calc(100%-80px)] mx-auto">
        <div className="text-center mt-15 mb-10">
          <h1 className="text-4xl font-bold pb-4">Your Installed Apps</h1>
          <h1 className=" mx-auto mt-2 text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </h1>
        </div>
        <div className="flex  justify-between w-[calc(100%-80px)] mx-auto py-6">
          <div className="text-2xl font-semibold">
            {`(${sortedItem().length})`} Apps Found
          </div>
          <select
            onChange={(e) => setSorted(e.target.value)}
            defaultValue="sorted"
            className="select"
          >
            <option value={"none"}>Sort Apps</option>
            <option value={"price-asc"}>Low - High</option>
            <option value={"price-desc"}>High - Low</option>
          </select>
        </div>
        {sortedItem().map((data) => (
          <div
            key={data.id}
            className="card py-2 w-[calc(100%-80px)] mx-auto items-center card-side bg-white shadow-lg my-10 px-5"
          >
            <figure>
              <img
                className="w-17 h-17 rounded-2xl"
                src={data.image}
                alt="img"
              />
            </figure>
            <div className=" flex justify-between  w-full items-center ">
              <div className="flex flex-col">
                <h2 className="  mx-3 px-1 card-title">{data.title}</h2>
                <div className="flex justify-between mx-3 py-3">
                  <div className="flex items-center gap-1 px-1 rounded-lg">
                    <img className="w-3 h-3" src={downloadImage} alt="" />
                    <span className="text-sm">{data.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1 px-1 rounded-lg">
                    <img className="w-3 h-3" src={ratingAvg} alt="" />
                    <span className="text-sm">{data.ratingAvg}</span>
                  </div>
                  <div>
                    <p className="text-sm"> {data.size} MB</p>
                  </div>
                </div>
              </div>

              <div onClick={() => handleRemove(data.id)} className=" ">
                <button className="btn btn-primary bg-emerald-500 text-white font-bold">
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Installation;
