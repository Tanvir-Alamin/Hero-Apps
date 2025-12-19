import React from "react";
import { Link, useLocation } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import reviewIcon from "../assets/icon-review.png";
import ratingIcon from "../assets/icon-ratings.png";

const DetailsApp = () => {
  const location = useLocation();
  const {
    title,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    id,
    ratings,
  } = location.state;

  return (
    <div className=" w-[calc(100%-80px)] mx-auto">
      <div className="flex gap-10 mt-20  ">
        <img
          className="w-70 rounded-2xl shadow-2xl"
          src={image}
          alt="app Image"
        />
        <div>
          <h1 className="font-bold text-3xl">{title}</h1>
          <h1 className="pt-2 pb-5">
            Developed by
            <span className="text-blue-500 font-semibold "> {companyName}</span>
          </h1>
          <hr className="my-2" />
          <div className="flex gap-10">
            <div>
              <img className="w-10" src={downloadIcon} alt="" />
              <h1>Downloads</h1>
              <h1 className="text-3xl font-bold">{downloads}</h1>
            </div>
            <div>
              <img className="w-10" src={ratingIcon} alt="" />
              <h1>Average Ratings</h1>
              <h1 className="text-3xl font-bold">{ratingAvg}</h1>
            </div>
            <div>
              <img className="w-10" src={reviewIcon} alt="" />
              <h1>Total Reviews</h1>
              <h1 className="text-3xl font-bold">{reviews}</h1>
            </div>
          </div>
          <Link className="btn mt-8  bg-green-400 text-2xl font-semibold text-white">{`Install Now (${size} MB)`}</Link>
        </div>
      </div>
      <div className=" mt-20 space-y-5">
        <h1 className="text-2xl font-bold">Description</h1>
        <h1 className="text-gray-500">{description}</h1>
      </div>
    </div>
  );
};

export default DetailsApp;
