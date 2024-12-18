import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-50 top-0 start-0 border-b border-gray-200 pt-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 ">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            PetCare
          </span>
        </div>

        {/* Search and Menu Icon */}
        <div className="flex md:order-2 space-x-3">
          <div className="flex justify-center items-center space-x-8">
            <div className="relative hidden lg:block">
              <input
                className="bg-gray-100 px-7 py-2 pr-2 lg:pr-12 outline-none rounded-sm placeholder:text-sm placeholder:text-neutral-500"
                type="text"
                placeholder="What are you looking for?"
              />
              <FiSearch
                size={24}
                className="absolute top-1/2 -translate-y-1/2 right-3 font-thin"
              />
            </div>
            <div className="">
              <MdFavoriteBorder size={24} />
            </div>
            <div className="">
              <Link to="cart"><FaCartPlus color="black" size={24} /></Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-center w-full p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/user/home"
                className="block py-2 px-3 text-gray-800 hover:text-gray-900 rounded md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="block py-2 px-3 text-gray-800 hover:text-gray-900 rounded md:p-0"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:text-gray-900 rounded md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <Link
                to="/user/register"
                className="block py-2 px-3 text-gray-800 hover:text-gray-900 rounded md:p-0"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
