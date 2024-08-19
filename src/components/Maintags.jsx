import React from "react";

function Maintags() {
  return (
    <div className="container flex mx-auto mt-5 w-full">
      <div className="bg-white w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">MAIN TAGS</h3>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div>
          <div className="p-2">
            <button className="bg-gray-200 px-3 rounded-xl mx-2 my-2 hover:text-orange-500">
              Cars
            </button>
            <button className="bg-gray-200 px-3 rounded-xl mx-2 my-2 hover:text-orange-500">
              Gadgets
            </button>
            <button className="bg-gray-200 px-3 rounded-xl mx-2 my-2 hover:text-orange-500">
              Games
            </button>
            <button className="bg-gray-200 px-3 rounded-xl mx-2 my-2 hover:text-orange-500">
              Healthy
            </button>
            <button className="bg-gray-200 px-3 rounded-xl mx-2 my-2 hover:text-orange-500">
              Poducasts
            </button>
            <button className="bg-gray-200 px-3 rounded-xl mx-2 my-2 hover:text-orange-500">
              Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maintags;
