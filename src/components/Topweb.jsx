import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa6";

function Topweb() {
  return (
    <div className="bg-black hidden md:flex">
      <div className="container bg-black text-white flex justify-between mx-auto">
        <ul className="flex font-medium">
          <li className="my-1 mx-3">
            <a href="">Home</a>
          </li>
          <li className="my-1 mx-3">
            <a href="">About Us</a>
          </li>
          <li className="my-1 mx-3">
            <a href="">Privacy Policy</a>
          </li>
          <li className="my-1 mx-3">
            <a href="">Contact Us</a>
          </li>
        </ul>
        <div className="flex">
          <FaFacebook className="m-2" />
          <FaTwitter className="m-2" />
          <FaYoutube className="m-2" />
          <FaPinterest className="m-2" />
        </div>
      </div>
    </div>
  );
}

export default Topweb;
