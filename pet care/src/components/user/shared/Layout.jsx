import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col bg-white h-screen w-screen overflow-hidden">
      <div className="flex-1">
        <Header />
            <div>{<Outlet />}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
