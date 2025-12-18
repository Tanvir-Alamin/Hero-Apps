import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import gitLogo from "../assets/github.png";

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-[calc(100%-80px)] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 decoration-2 decoration-[#652EE3]"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 decoration-2 decoration-[#652EE3]"
                    : ""
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "underline underline-offset-4 decoration-2 decoration-[#652EE3]"
                    : ""
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost text-xl font-semibold text-[#652EE3]"
        >
          <img className="w-10" src={logo} alt="logo image" /> HERO.IO
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-2 decoration-[#652EE3]"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-2 decoration-[#652EE3]"
                  : ""
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-2 decoration-[#652EE3]"
                  : ""
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <NavLink
          to="https://github.com/Tanvir-Alamin"
          className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white"
        >
          <img src={gitLogo} alt="" /> Contribute
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
