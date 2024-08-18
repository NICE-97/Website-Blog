import React from "react";

function Laptops() {
  return (
    <div className="container flex mx-auto mt-5">
      <div className="bg-white sm:w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">LAPTOPS</h3>
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
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="absolute bottom-5 left-5">
                <div className="bg-orange-500 text-sm al w-14 text-center text-white rounded-md">
                  APPLE
                </div>
                <h3 className="text-white font-bold">
                  11 of Best Laptops Evaluated Based on Budget
                </h3>
                <p className="text-gray-300">by John Doe August 02, 2021</p>
              </div>
            </div>
          </div>
          <div>
            <div className="container mx-auto grid grid-cols-8 gap-2 hover:text-orange-500">
              <div className="overflow-hidden scaleimg bg-red-500 col-span-2 md:col-span-3">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="p-2 col-start-3 col-span-8 md:col-start-4 md:col-span-8">
                <h3 className="font-bold text-sm">
                  Apple Watch Series 5 is the Best One Yet By Consumer
                </h3>
                <p className="text-sm text-gray-400">August 02, 2021</p>
              </div>
            </div>
            <div className="container mx-auto grid grid-cols-8 gap-2 hover:text-orange-500 mt-2">
              <div className="overflow-hidden scaleimg bg-red-500 col-span-2 md:col-span-3">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="p-2 col-start-3 col-span-8 md:col-start-4 md:col-span-8">
                <h3 className="font-bold text-sm">
                  Here’s What People Think of iOS 13 New Dark Mode
                </h3>
                <p className="text-sm text-gray-400">August 02, 2021</p>
              </div>
            </div>
            <div className="container mx-auto grid grid-cols-8 gap-2 hover:text-orange-500 mt-2">
              <div className="overflow-hidden scaleimg bg-red-500 col-span-2 md:col-span-3">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="p-2 col-start-3 col-span-8 md:col-start-4 md:col-span-8">
                <h3 className="font-bold text-sm">
                  18 Practices for Building Responsive Web Applications
                </h3>
                <p className="text-sm text-gray-400">August 02, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laptops;
