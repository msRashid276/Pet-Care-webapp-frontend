import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col bg-white h-screen w-screen overflow-hidden">
     
        <Header />
        <div className="flex-grow">
            <div>{<Outlet />}</div>
        </div>
        <Footer />
     
    </div>
  );
};

export default Layout;
