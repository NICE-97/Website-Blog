import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

function Lastfooter() {
  return (
    <div>
      <div className="footerbg">
        <footer className="container  mx-auto w-full">
          <div className="footerbg w-full text-white p-5">
            <div>
              <hr></hr>
            </div>
            <div className="mt-5 md:flex md:justify-between">
              <div className="grid content-center justify-items-center">
                <h1 className="font-bold text-2xl">MEGSPOT</h1>
              </div>
              <div className="grid p-5">
                <h3 className="font-bold hidden md:block ">ABOUT US</h3>
                <p className="text-sm text-center md:text-left">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's.
                </p>
              </div>
              <div className="flex justify-center md:grid md:grid-cols-5 md:gap-5 lg:gap-3 content-center justify-items-center">
                <div className="iconfooter hover:bg-blue-600 mr-2 md:mr-0 w-6 h-6 content-center text-center grid justify-items-center">
                  <FaFacebook />
                </div>
                <div className="iconfooter hover:bg-sky-500 mr-2 md:mr-0 w-6 h-6 content-center text-center grid justify-items-center">
                  <FaTwitter />
                </div>
                <div className="hover-icon-ins">
                  <div className="iconfooter mr-2 md:mr-0 w-6 h-6 content-center text-center grid justify-items-center">
                    <FaInstagram />
                  </div>
                </div>
                <div className="iconfooter hover:bg-red-500 mr-2 md:mr-0 w-6 h-6 content-center text-center grid justify-items-center">
                  <FaYoutube />
                </div>
                <div className="iconfooter hover:bg-red-500 mr-2 md:mr-0 w-6 h-6 content-center text-center grid justify-items-center">
                  <FaPinterest />
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="bg-black">
          <footer className="container  mx-auto w-full">
            <div className="bg-black w-full bg-black p-5 text-white grid grid-cols-1 justify-items-center xl:flex xl:justify-between ">
              <div className="gird content-center font-medium mt-2">
                Design By - Dew Chatchawan Ngerthaworn
              </div>
              <div className="grid justify-items-center md:flex font-medium mt-2">
                <div className="grid content-center  ">Copyright</div>
                <div className="grid content-center  ml-2  ">
                  <FaCopyright />
                </div>
                <div className="grid content-center ml-2  ">
                  2024 Clone Web Site By - Patthanawong Sangpan
                </div>
              </div>
              <div>
                <ul className="flex justify-items-center  font-medium  mt-2">
                  <li className="text-sm md:text-base mx-2">
                    <a href="">Home</a>
                  </li>
                  <li className="text-sm md:text-base mx-2">
                    <a href="">About Us</a>
                  </li>
                  <li className="text-sm md:text-base mx-2">
                    <a href="">Privacy Policy</a>
                  </li>
                  <li className="text-sm md:text-base mx-2">
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Lastfooter;
