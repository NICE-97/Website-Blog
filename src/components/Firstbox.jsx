import React, { useState } from "react";
import DataFirstBox from "../data/DataFirstbox";

function Firstbox() {
  const [data, setData] = useState(DataFirstBox);

  return (
    <div className="container flex mx-auto">
      <div className="bg-white mt-5 w-full p-5 grid md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-2">
        {data.map((items, index) => {
          return (
            <div
              key={index}
              className={`relative overflow-hidden w-full h-full scaleimg ${
                index === 0
                  ? "lg:col-span-2 lg:row-span-2"
                  : "" || index === 1
                  ? "lg:col-span-2"
                  : ""
              }`}
            >
              <img
                className={`h-full w-full object-cover object-center  ${
                  index !== 0 ? "md:h-60" : "h-full"
                }`}
                src={items.imag}
                alt=""
              />
              <div className="absolute bottom-2 left-2">
                <h3 className="bg-orange-500 w-14  text-center text-white uppercase text-xs">
                  {items.title}
                </h3>
                <h1 className="text-white text-lg font-bold">{items.info}</h1>
                <p className="text-gray-300 text-xs">
                  by <span className="text-orange-500">{items.name}</span>{" "}
                  {items.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Firstbox;
