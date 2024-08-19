import React, { useState } from "react";
import DataTechnologyNew from "../data/DataTechnologyNew";
import DataTechnologyReview from "../data/DataTechnologyReview";
import DataLatestPosts from "../data/DataLatestPosts";

function TechnologyNew() {
  const [technoNew, setTechnoNew] = useState(DataTechnologyNew);
  const [reviews, setReviews] = useState(DataTechnologyReview);
  const [latestPosts, setLatestPosts] = useState(DataLatestPosts);

  const boxStyle = "relative overflow-hidden scaleimg";

  return (
    <div className="container mx-auto mt-5">
      <div className="bg-white px-5 py-3 ">
        <div className="flex justify-between text-sm">
          <h3 className="font-bold uppercase">Technology New</h3>
        </div>
        <div className="flex mb-5 mt-2">
          <div className="bg-orange-500 h-1 w-20 "></div>
          <div className="bg-gray-200 h-1 w-full "></div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className={boxStyle}>
            <img
              className="h-full object-cover object-center w-full"
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="absolute bottom-2 left-2 pr-2">
              <div className="bg-orange-500 text-xs w-24 text-center text-white rounded-md uppercase">
                technology
              </div>
              <h3 className="text-white font-bold xl:text-sm mt-2">
                When Artists And Machine Intelligence Come Together
              </h3>
              <p className="text-white">July 31, 2021</p>
            </div>
          </div>
          <div>
            {technoNew.map((items, index) => {
              return (
                <div
                  key={index}
                  className={`flex hover:text-orange-500 ${
                    index !== 0 ? "mt-2" : ""
                  }`}
                >
                  <div className="overflow-hidden scaleimg h-full w-2/5">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={items.imag}
                      alt=""
                    />
                  </div>
                  <div className="ml-3 w-3/5">
                    <div className="text-base font-bold">{items.title}</div>
                    <p className="text-xs text-gray-400 mt-2">
                      August 08, 2021
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container flex mx-auto mt-5">
        <div className="bg-white w-full">
          <div className="flex justify-between mx-5 mt-2 text-sm">
            <h3 className="font-bold">REVIEWS</h3>
            <a className="hover:text-orange-500" href="">
              View all
            </a>
          </div>
          <div className="flex">
            <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
            <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
          </div>
          <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-5 justify-center">
            {reviews.map((items, index) => {
              return (
                <div key={index} className="hover:text-orange-500">
                  <div className="relative overflow-hidden scaleimg">
                    <img
                      className="object-cover object-center w-full h-40 md:h-48 lg:h-40 xl:h-56"
                      src={items.imag}
                      alt=""
                    />
                    <div className="bg-orange-500 text-sm px-2 text-center text-white absolute bottom-0">
                      {items.technology}
                    </div>
                  </div>
                  <h3 className="font-bold text-sm">{items.title}</h3>
                  <p className="text-gray-400 ">{items.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container flex mx-auto mt-5">
        <div className="bg-white w-full">
          <div className="flex justify-between mx-5 mt-2 text-sm">
            <h3 className="font-bold">LATEST POSTS</h3>
            <a className="hover:text-orange-500" href="">
              View all
            </a>
          </div>
          <div className="flex">
            <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
            <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
          </div>
          <div className="p-4 grid gap-3 grid-cols-1 justify-center">
            {latestPosts.map((items, index) => {
              return (
                <div
                  key={index}
                  className="hover:text-orange-500 container mx-auto grid grid-cols-8 gap-2"
                >
                  <div className="relative overflow-hidden scaleimg col-span-3 bg-red-300 xl:col-span-2">
                    <img
                      className="object-cover object-center w-full  h-full md:h-44 lg:h-52"
                      src={items.imag}
                      alt=""
                    />
                    <div className="bg-orange-500 px-2 text-center text-white absolute bottom-0">
                      {items.technology}
                    </div>
                  </div>
                  <div className="col-start-4 col-span-8 px-2 xl:col-start-3">
                    <h3 className="font-bold text-md md:text-lg lg:text-xl">
                      {items.title}
                    </h3>
                    <p className="text-gray-400 mt-3 text-sm md:text-base ">
                      {items.lorems}
                    </p>
                    <p className="text-gray-400 mt-2 text-sm lg:text-base">
                      by <span className="text-orange-500">{items.name}</span>{" "}
                      {items.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyNew;
