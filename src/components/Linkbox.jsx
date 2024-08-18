import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Linkbox() {
  return (
    <div>
      <div className="container flex mx-auto justify-between bg-white rounded-md p-2 mt-5 hidden md:flex">
        <div className="flex">
          <h2 className="text-orange-500">TRENDING</h2>
          <a href="" className="content-center text-orange-500">
            <FaAngleRight />
          </a>
          <h3>Apple Watch Series 5 is the Best One Yet By Consumer</h3>
        </div>
        <div className="flex">
          <a href="" className="content-center bg-gray-200 mx-2 p-1 rounded-md">
            <FaAngleLeft />
          </a>
          <a href="" className="content-center bg-gray-200 mx-2 p-1 rounded-md">
            <FaAngleRight />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Linkbox;
