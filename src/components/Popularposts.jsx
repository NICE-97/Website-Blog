import React from "react";

function Popularposts() {
  return (
    <div className="container flex mt-5 bg-white">
      <div className="w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">POPULAR POSTS</h3>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1  w-full"></div>
        </div>
        <div className="px-4 w-full">
          <div className="overflow-hidden scaleimg h-52 sm:h-60 md:h-80 lg:h-40">
            <img
              className="w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvbXB1dGVyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 p-4 w-full">
          <div className="flex hover:text-orange-500">
            <div className="overflow-hidden scaleimg w-32 h-full">
              <img
                className="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1558126319-c9feecbf57ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="p-2">
              <h3 className="font-bold text-sm">
                Apple Watch Series 5 is the Best One Yet By Consumer
              </h3>
              <p className="text-sm text-gray-400">August 02, 2021</p>
            </div>
          </div>
          <div className="flex mt-3 hover:text-orange-500">
            <div className="overflow-hidden scaleimg w-32 h-full">
              <img
                className="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1512012029568-5acf2f99223e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="p-2">
              <h3 className="font-bold text-sm">
                Apple Watch Series 5 is the Best One Yet By Consumer
              </h3>
              <p className="text-sm text-gray-400">July 31, 2021</p>
            </div>
          </div>
          <div className="flex mt-3 hover:text-orange-500">
            <div className="overflow-hidden scaleimg w-32 h-full">
              <img
                className="w-full h-full object-cover object-center"
                src="https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="p-2">
              <h3 className="font-bold text-sm">
                Here’s What People Think of iOS 13 New Dark Mode
              </h3>
              <p className="text-sm text-gray-400">August 08, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popularposts;
