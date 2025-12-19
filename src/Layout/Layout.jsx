import React from "react";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import { Outlet } from "react-router";
import useApps from "../Hooks/useApps";
import Spinner from "../Pages/Spinner";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const { loading } = useApps();
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default Layout;
