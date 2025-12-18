import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
