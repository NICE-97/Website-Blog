import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Followus() {
  return (
    <div className="container flex mt-5 bg-white">
      <div className="w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">FOLLOW US</h3>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1  w-full"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3">
          <div className=" flex">
            <div className="iconfacebookbg p-2  text-white rounded-tl-md rounded-bl-md content-center justify-center">
              <a href="">
                <FaFacebook />
              </a>
            </div>
            <div className="bg-sky-700 text-white w-full px-2 py-2 rounded-tr-md rounded-br-md text-center">
              <a href="">Facebook</a>
            </div>
          </div>
          <div className=" flex">
            <div className="bg-sky-300 p-2 text-white rounded-tl-md rounded-bl-md content-center justify-center">
              <a href="">
                <FaTwitter />
              </a>
            </div>
            <div className="bg-sky-400 text-white w-full px-2 py-2 rounded-tr-md rounded-br-md text-center">
              <a href="">Twitter</a>
            </div>
          </div>
          <div className=" flex">
            <div className="bg-red-500 p-2 text-white rounded-tl-md rounded-bl-md content-center justify-center">
              <a href="">
                <FaYoutube />
              </a>
            </div>
            <div className="bg-red-600 text-white w-full px-2 py-2 rounded-tr-md rounded-br-md text-center">
              <a href="">Youtube</a>
            </div>
          </div>
          <div className=" flex">
            <div className="s-4 p-2 text-white rounded-tl-md rounded-bl-md content-center justify-center">
              <a href="">
                <FaInstagram />
              </a>
            </div>
            <div className="s-4  text-white w-full px-2 py-2 rounded-tr-md rounded-br-md text-center">
              <a href="">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Followus;
