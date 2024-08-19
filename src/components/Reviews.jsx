import React, { useState } from "react";
import DataReviews from "../data/DataReviews";

function Reviews() {
  const [dataReviews, setDataReviews] = useState(DataReviews);
  return (
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
        <div className="p-4 grid gap-2 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {dataReviews.map((items, index) => {
            return (
              <div key={index} className="hover:text-orange-500">
                <div className="relative overflow-hidden scaleimg">
                  <img
                    className="object-cover object-center"
                    src={items.image}
                    alt=""
                  />
                  <div className="bg-orange-500 w-24 text-center text-white absolute bottom-0">
                    {items.type}
                  </div>
                </div>
                <h3 className="font-bold">{items.title}</h3>
                <p className="text-gray-400 ">{items.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
