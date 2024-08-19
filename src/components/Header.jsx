import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ togglebtn }) {
  return (
    <nav className="bg-white relative shadow-md shadow-gray-300">
      <ul className="container flex mx-auto justify-between">
        <div className="font-black text-3xl  flex">
          <button onClick={togglebtn} className="mx-3 md:hidden  mt-1 ">
            <GiHamburgerMenu />
          </button>
          <a className="grid content-center" href="">
            MEGSPOT
          </a>
        </div>
        <div className="text-xs lg:text-sm font-bold flex mx-5 hidden md:flex">
          <li className="mx-2 content-center hover:text-orange-500">
            <Link to="/">HOME</Link>
          </li>
          <li className="mx-2 content-center hover:text-orange-500">
            <Link to="/features">FEATURES</Link>
          </li>
          <li className="mx-2 content-center hover:text-orange-500">
            <Link to="/megamenu">MEGA MENU</Link>
          </li>
          <li className="mx-2 content-center hover:text-orange-500">
            <Link to="/megatabs">MEGA TABS</Link>
          </li>
          <li className="mx-2 content-center hover:text-orange-500">
            <Link to="/technology">TECHNNOLOGY</Link>
          </li>
          <li className="mx-2 content-center hover:text-orange-500">
            <Link to="/contact">CONTACT US</Link>
          </li>
        </div>
        <div className="flex">
          <div className="my-4 mx-2 bg-gray-100 p-3 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer">
            <FaSearch />
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Header;

{
  /* <div className="gird content-center md:hidden">
          <button data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button> 
          </div> */
}
