import React from "react";
import useApps from "../Hooks/useApps";
import downloadImage from "../assets/icon-downloads.png";
import ratingAvg from "../assets/icon-ratings.png";
import { Link } from "react-router";

const HomeApps = () => {
  const { apps } = useApps();

  const sortData = apps.slice(0, 8);

  return (
    <div className="w-[calc(100%-80px)] mx-auto">
      <div className="text-center mt-15 mb-10">
        <h1 className="text-4xl font-bold pb-4">Trending Apps</h1>
        <h1 className=" mx-auto mt-2 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-3 gap-5 px-3 ">
        {sortData.map((app) => (
          <div
            key={app.id}
            className="card hover:-translate-y-3 transition-all hover:shadow-[#652EE3]  w-60 bg-white shadow-xl mx-auto "
          >
            <figure>
              <img
                className="w-60 p-3 rounded-2xl"
                src={app.image}
                alt="app Image"
              />
            </figure>
            <div className="">
              <h2 className="font-semibold text-lg text-center">{app.title}</h2>
              <div>
                <div className="flex justify-between mx-3 py-3">
                  <div className="flex items-center gap-1 px-1.5 rounded-lg bg-emerald-100">
                    <img className="w-5 h-5" src={downloadImage} alt="" />
                    <span>{app.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1 px-1.5 rounded-lg bg-orange-200">
                    <img className="w-5 h-5" src={ratingAvg} alt="" />
                    <span>{app.ratingAvg}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-20 mt-10 flex justify-center ">
        <Link
          className="btn px-15 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white "
          to="/apps"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default HomeApps;
