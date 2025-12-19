import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import downloadImage from "../assets/icon-downloads.png";
import ratingAvg from "../assets/icon-ratings.png";
import { Link } from "react-router";
import Spinner from "./Spinner";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const trim = search.trim("").toLowerCase();
  const SearchedData = trim
    ? apps.filter((data) => data.title.toLowerCase().includes(trim))
    : apps;
  const NoApp = apps.filter((data) => data.title.toLowerCase()).includes(!trim);

  if (loading) {
    return <Spinner></Spinner>;
  } else
    return (
      <div className="mb-25">
        <div>
          <div className="w-[calc(100%-80px)] mx-auto">
            <div className="text-center mt-15 mb-10">
              <h1 className="text-4xl font-bold pb-4">Our All Applications</h1>
              <h1 className=" mx-auto mt-2 text-[#627382]">
                Explore All Apps on the Market developed by us. We code for
                Millions
              </h1>
            </div>
            <div className="flex  justify-between w-[calc(100%-80px)] mx-auto py-6">
              <div className="text-2xl font-semibold">
                {`(${SearchedData.length})`} Apps Found
              </div>
              <div>
                <label className="input bg-white border-blue-600">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input
                    value={search}
                    type="search"
                    required
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                  />
                </label>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-3 gap-5 px-3 ">
              {SearchedData.map((app) => (
                <div
                  key={app.id}
                  className="card hover:-translate-y-3 transition-all hover:shadow-[#652EE3]  w-60 bg-white shadow-xl mx-auto "
                >
                  <Link to="/details" state={app}>
                    <figure>
                      <img
                        className="w-60 p-3 rounded-2xl"
                        src={app.image}
                        alt="app Image"
                      />
                    </figure>
                    <div className="">
                      <h2 className="font-semibold text-lg text-center">
                        {app.title}
                      </h2>
                      <div>
                        <div className="flex justify-between mx-3 py-3">
                          <div className="flex items-center gap-1 px-1.5 rounded-lg bg-emerald-100">
                            <img
                              className="w-5 h-5"
                              src={downloadImage}
                              alt=""
                            />
                            <span>{app.downloads}</span>
                          </div>
                          <div className="flex items-center gap-1 px-1.5 rounded-lg bg-orange-200">
                            <img className="w-5 h-5" src={ratingAvg} alt="" />
                            <span>{app.ratingAvg}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Apps;
