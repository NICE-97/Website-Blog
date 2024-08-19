import React, { useState } from "react";
import DataMegspotBlog from "../data/DataMegspotBlog";
import { IoIosChatbubbles } from "react-icons/io";

function Megspotblog() {
  const [dataMegspotBlog, setDataMegspotBlog] = useState(DataMegspotBlog);
  return (
    <div className="container flex mx-auto mt-5">
      <div className="bg-white sm:w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h1 className="font-bold text-xl">Megspot Blog</h1>
          <p className="text-gray-400 grid content-center">132 Stories</p>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div>
          {dataMegspotBlog.map((items, index) => {
            return (
              <div
                key={index}
                className="p-4 grid gap-3 grid-cols-1 justify-center"
              >
                <div className="hover:text-orange-500 container mx-auto grid md:grid-cols-8 gap-2 grid-cols-1">
                  <div className="relative overflow-hidden scaleimg col-span-1 col-span-2 md:col-span-3  xl:col-span-2  bg-red-300 ">
                    <img
                      className="object-cover object-center w-full  h-full "
                      src={items.image}
                      alt=""
                    />
                    <div className="bg-orange-500 w-auto px-2 py-1 text-center text-white text-sm absolute bottom-0">
                      {items.type}
                    </div>
                  </div>
                  <div className="md:col-start-4 md:col-span-8 px-2 xl:col-start-3 col-span-1 col-span-2">
                    <h3 className="font-semibold text-sm text-black ">
                      {items.subject}
                    </h3>
                    <h1 className="text-sm sm:text-base md:text-xl font-semibold">
                      {items.title}
                    </h1>
                    <h2 className="font-semibold text-gray-600 mt-2">
                      By {items.name}
                    </h2>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                      {items.title}
                    </p>
                    <div className="mt-3 flex justify-between">
                      <div>
                        <a className="text-orange-500 font-semibold" href="">
                          View Story
                        </a>
                      </div>
                      <div className="text-2xl text-orange-500 flex">
                        <IoIosChatbubbles />
                        <span className="text-base text-black font-semibold">
                          {items.comment}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
        <div className="container flex justify-center mx-auto mb-5">
          <div className="flex border border-gray-300 rounded-l-md rounded-r-md">
            <div className="bg-orange-500 px-3 py-1 rounded-l-md  hover:bg-red-300">
              <button className="text-white">1</button>
            </div>
            <div className="px-3 py-1  hover:bg-red-300">
              <button className="text-black">2</button>
            </div>
            <div className="px-3 py-1 hover:bg-red-300">
              <button className="text-black">3</button>
            </div>
            <div className="px-3 py-1 hover:bg-red-300">
              <button className="text-black">4</button>
            </div>
            <div className="px-3 py-1 hover:bg-red-300">
              <button className="text-black">5</button>
            </div>
            <div className="px-3 py-1 hover:bg-red-300">
              <button className="text-black">6</button>
            </div>
            <div className="px-3 hidden sm:block py-1 hover:bg-red-300">
              <button className="text-black">7</button>
            </div>
            <div className="px-3 hidden sm:block py-1 hover:bg-red-300">
              <button className="text-black">8</button>
            </div>
            <div className="px-3 hidden sm:block py-1 hover:bg-red-300">
              <button className="text-black">9</button>
            </div>
            <div className="bg-orange-500 px-3 py-1 hover:bg-red-300 rounded-r-md">
              <button className="text-white">Next Page</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Megspotblog;
