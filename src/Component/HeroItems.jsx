import React from "react";
import playStore from "../assets/playStore.png";
import appleStore from "../assets/appleStore.png";
import hero from "../assets/hero.png";
import { Link } from "react-router";

const HeroItems = () => {
  return (
    <div>
      <div className=" text-center mt-15">
        <div className="text-5xl font-bold pb-4">We Build </div>
        <div className="text-5xl font-bold">
          <span className="font-extrabold text-[#9F62F2]"> Productive</span>{" "}
          Apps
        </div>
        <p className=" mx-auto mt-5 text-[#627382]">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="my-10">
          <Link target="_blank"
            to="https://play.google.com/store/games?hl=en"
            className="btn py-7 px-8 text-xl mx-3 hover:skeleton hover-3d "
          >
            <img className="w-8" src={playStore} alt="play store icon" />
            Google Play
          </Link>
          <Link  target="_blank"
            to="https://apps.apple.com/us/iphone/apps"
            className="btn py-7 px-8 text-xl mx-3 hover:skeleton hover-3d "
          >
            <img className="w-8" src={appleStore} alt="apple store icon" />
            App Store
          </Link>
        </div>
        <img className="mx-auto " src={hero} alt="" />
        <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white h-80">
          <h1 className="font-semibold text-3xl pt-12">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex justify-evenly mt-10 pb-40">
            <div>
              <h1>Total Downloads</h1>
              <h1 className="font-extrabold text-6xl my-4">29.6M</h1>
              <h1>21% more than last month</h1>
            </div>
            <div>
              <h1>Total Reviews</h1>
              <h1 className="font-extrabold text-6xl my-4">906K</h1>
              <h1>46% more than last month</h1>
            </div>
            <div>
              <h1>Active Apps</h1>
              <h1 className="font-extrabold text-6xl my-4">132+</h1>
              <h1>31 more will Launch</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroItems;
