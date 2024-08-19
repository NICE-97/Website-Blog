import React, { useState } from "react";
import DataService from "../data/DataService";

function ServiceForYou() {
  const [service, setService] = useState(DataService);
  return (
    <div className="container mx-auto mt-5">
      <div className="bg-white p-5">
        <div className="flex justify-between  text-sm">
          <h3 className="font-bold uppercase">Service For You</h3>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2  h-1 w-20 "></div>
          <div className="bg-gray-200 my-2  h-1 w-full "></div>
        </div>
        <div className="w-full mt-3">
          <div className="overflow-hidden scaleimg h-60">
            <img
              className="w-full h-full object-cover object-center"
              src="https://media.istockphoto.com/photos/always-accessible-customer-service-picture-id1257155821?b=1&k=20&m=1257155821&s=170667a&w=0&h=whMMEdegSGK60rUd7FcS54eBBy0Zmu3MG2t1Z0pTuB4="
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 w-full">
          {service.map((items, index) => {
            return (
              <div key={index} className="flex hover:text-orange-500 mt-3">
                <div className="overflow-hidden scaleimg w-32 lg:h-20 xl:h-24">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={items.image}
                    alt=""
                  />
                </div>
                <div className="px-2">
                  <h3 className="font-bold text-sm">{items.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{items.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceForYou;
