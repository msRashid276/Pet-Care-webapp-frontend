import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col bg-white h-screen w-screen">
      
        <Header />
     
      <div className="flex-1 mt-[100px]"> 
        <Outlet />
      </div>
        <Footer />
     
    </div>
  );
};

export default Layout;
