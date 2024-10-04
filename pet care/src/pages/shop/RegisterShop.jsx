import { useFormik } from "formik";
import React, { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const RegisterShop = () => {
  
  const [file, setFile] = useState();
  const handleImageChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };


  return (
    <div className="bg-gray-900 w-full min-h-screen text-white py-10">
      <h1 className="text-center text-2xl font-bold pb-10">Add New PetShop</h1>

      <form action="">
        <div className="grid grid-cols-1 gap-5 px-10 overflow-hidden">
          <div className="">
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label className="relative" htmlFor="fileInput">
              <span className="w-16 h-16 md:w-24 md:h-24 cursor-pointer p-3 flex items-center justify-center border rounded-md border-gray-600">
                <MdOutlineAddPhotoAlternate />
              </span>
            </label>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg p-2 w-full hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Name"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Description"
            />
          </div>
          <div className="flex justify-center gap-2">
            <div class="relative w-full">
              <input
                type="text"
                id="Opening hours"
                aria-describedby="outlined_success_help"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=""
                value="Mon-Sun: 9.00 AM - 9.00 PM"
              />
              <label
                for="Opening hours"
                class="absolute text-sm text-gray-300 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Opening hours
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Street Address"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-2 ">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="City"
            />
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="State/Province"
            />
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Postal Code"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Country"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-2">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Email"
            />
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Mobile"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-2">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Twitter"
            />
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Instagram"
            />
          </div>

          <div className="flex justify-center items-center py-4">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              RegisterShop
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterShop;
