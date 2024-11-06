import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div className="flex flex-col bg-white h-screen w-full">

        <Header />
     
      <div className="flex-1 mt-[80px]"> 
        <Outlet />
      </div>
        <Footer />


        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
     
    </div>
  );
};

export default Layout;
