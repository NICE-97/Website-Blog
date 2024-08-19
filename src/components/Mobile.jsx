import React, { useState } from "react";
import DataMobile from "../data/DataMobile";

function Mobile() {
  const [dataMobile, setDataMobile] = useState(DataMobile);
  return (
    <div className="container flex mx-auto mt-5">
      <div className="bg-white sm:w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">MOBILE</h3>
          <a className="hover:text-orange-500" href="">
            View all
          </a>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div>
          {dataMobile.map((items, index) => {
            return (
              <div
                key={index}
                className="p-4 grid gap-3 grid-cols-1 justify-center"
              >
                <div className="hover:text-orange-500 container mx-auto grid grid-cols-8 gap-2">
                  <div className="relative overflow-hidden scaleimg col-span-3 bg-red-300 xl:col-span-2">
                    <img
                      className="object-cover object-center w-full  h-full"
                      src={items.image}
                      alt=""
                    />
                    <div className="bg-orange-500 px-2 text-center text-white absolute bottom-0">
                      {items.type}
                    </div>
                  </div>
                  <div className="col-start-4 col-span-6 px-2 xl:col-start-3">
                    <h3 className="font-bold text-md md:text-lg lg:text-xl">
                      {items.title}
                    </h3>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">
                      {items.info}
                    </p>
                    <p className="text-gray-400 mt-2 text-sm lg:text-base">
                      by <span className="text-orange-500">{items.name} </span>
                      {items.date}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mobile;
