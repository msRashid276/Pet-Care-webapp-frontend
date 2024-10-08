import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 pt-5">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            PetCare
          </span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="relative max-sm:hidden">
            <input
              className="bg-gray-100 px-7 py-2 pr-2 lg:pr-12  outline-none rounded-sm placeholder:text-sm placeholder:text-neutral-500"
              type="text"
              placeholder="What are you looking for?"
            />
            <FiSearch
              size={24}
              className="absolute top-1/2 -translate-y-1/2 right-3 font-thin"
            />
          </div>
          <button
            data-collapse-toggle="navbar-sticky"
            onClick={toggleMenu}
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class={`items-center justify-betwe w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul class="flex flex-col w-full items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="#"
                class="block py-2 px-3  text-gray-800 hover:text-gray-900 rounded md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3  text-gray-800 hover:text-gray-900 rounded md:p-0"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3  text-gray-800 hover:text-gray-900 rounded md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3  text-gray-800 hover:text-gray-900 rounded md:p-0"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div className='h-20 w-full flex lg:justify-evenly items-center pt-5'>
    //     <div className='lg:basis-1/3 md:basis-1/5'>
    //         <h4 className='text-xl font-bold text-center'>PetCare</h4>
    //     </div>
    //     <div className='flex items-center justify-between lg:basis-1/3 md:basis-2/5'>
    //         <p>Home</p>
    //         <p>Contact</p>
    //         <p>About</p>
    //         <p>Sign Up</p>
    //     </div>
    //     <div className='lg:basis-1/3 md:basis-2/5 justify-center flex'>
    //         <div className='relative'>
    //              <input className='bg-gray-100 px-7 py-2 pr-2 lg:pr-12  outline-none rounded-sm placeholder:text-sm placeholder:text-neutral-500' type="text" placeholder='What are you looking for?'/>
    //              <FiSearch size={24}  className='absolute top-1/2 -translate-y-1/2 right-3 font-thin'/>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Header;
