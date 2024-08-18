import React from "react";

function Gadgets() {
  return (
    <div className="container flex mx-auto mt-5">
      <div className="bg-white sm:w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">GADGETS</h3>
          <a href="">View all</a>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div className="p-4 grid lg:grid-cols-1 gap-2 justify-center justify-items-center ">
          <div className="w-full overflow-hidden scaleimg">
            <div className="relative ">
              <img
                className="w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="absolute bottom-5 left-5">
                <div className="bg-orange-500 text-sm  w-20 text-center text-white rounded-md">
                  GADGETS
                </div>
                <h3 className="text-white font-bold">
                  6 Wealth Building Alternatives Without Buying Stocks
                </h3>
                <p className="text-gray-300">by John Doe July 31, 2021</p>
              </div>
            </div>
          </div>
          <div>
            <div className="container mx-auto grid grid-cols-8 gap-2 hover:text-orange-500">
              <div className="overflow-hidden scaleimg bg-red-500 col-span-2 md:col-span-3">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="p-2 col-start-3 col-span-8 md:col-start-4 md:col-span-8">
                <h3 className="font-bold text-sm">
                  Start a Digital Marketing Website for your Service
                </h3>
                <p className="text-sm text-gray-400">July 31, 2021</p>
              </div>
            </div>
            <div className="container mx-auto grid grid-cols-8 gap-2 hover:text-orange-500 mt-2">
              <div className="overflow-hidden scaleimg bg-red-500 col-span-2 md:col-span-3">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="p-2 col-start-3 col-span-8 md:col-start-4 md:col-span-8">
                <h3 className="font-bold text-sm">
                  Part-time Trading on Forex as an Alternative Income
                </h3>
                <p className="text-sm text-gray-400">July 31, 2021</p>
              </div>
            </div>
            <div className="container mx-auto grid grid-cols-8 gap-2 hover:text-orange-500 mt-2">
              <div className="overflow-hidden scaleimg bg-red-500 col-span-2 md:col-span-3">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1633113088092-3460c3c9b13f?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MzB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="p-2 col-start-3 col-span-8 md:col-start-4 md:col-span-8">
                <h3 className="font-bold text-sm">
                  Catch the Best iPhone X Deals Plus Your Favorite gadgets
                </h3>
                <p className="text-sm text-gray-400">July 31, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gadgets;
