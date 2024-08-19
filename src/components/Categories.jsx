import React from "react";

function Categories() {
  return (
    <div className="container flex mx-auto mt-5 w-full">
      <div className="bg-white w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">CATEGORIES</h3>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div className="px-5 py-2 text-gray-400">
          <div className="hover:text-orange-500">
            <a className="flex justify-between mb-1" href="">
              Gadgats <span className="text-black">(3)</span>
            </a>
          </div>
          <div className="hover:text-orange-500">
            <a className="flex justify-between mb-1" href="">
              Gealthy <span className="text-black">(6)</span>
            </a>
          </div>
          <div className="hover:text-orange-500">
            <a className="flex justify-between mb-1" href="">
              Podcasts <span className="text-black">(4)</span>
            </a>
          </div>
          <div className="hover:text-orange-500">
            <a className="flex justify-between mb-1" href="">
              Review <span className="text-black">(5)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
