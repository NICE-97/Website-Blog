import React from "react";

function Travel() {
  return (
    <div className="container flex mx-auto mt-5">
      <div className="bg-white sm:w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">TRAVEL</h3>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div className="p-4 grid grid-cols-2 gap-2 justify-center">
          <div className="hover:text-orange-500">
            <div className="relative overflow-hidden scaleimg">
              <img
                className="object-cover object-center"
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                PEOPLE
              </div>
            </div>
            <h3 className="font-bold text-xs">
              Top 10 Snowboarding Resorts For Beginners
            </h3>
            <p className="text-gray-300 text-xs">July 31, 2021</p>
          </div>
          <div className="hover:text-orange-500">
            <div className="relative overflow-hidden scaleimg">
              <img
                className="object-cover object-center"
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                TRAVEL
              </div>
            </div>
            <h3 className="font-bold text-xs">
              Why It’s Better to Travel with Friends
            </h3>
            <p className="text-gray-300 text-xs">July 31, 2021</p>
          </div>
          <div className="hover:text-orange-500">
            <div className="relative overflow-hidden scaleimg">
              <img
                className="object-cover object-center"
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                PEOPLE
              </div>
            </div>
            <h3 className="font-bold text-xs">
              The 5 Best Beach Destinations in The World
            </h3>
            <p className="text-gray-300 text-xs">July 31, 2021</p>
          </div>
          <div className="hover:text-orange-500">
            <div className="relative overflow-hidden scaleimg">
              <img
                className="object-cover object-center"
                src="https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHRyYXZlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                TRAVEL
              </div>
            </div>
            <h3 className="font-bold text-xs">
              5 Online Bike Rental Apps with Bikes for Traveller
            </h3>
            <p className="text-gray-300 text-xs">July 31, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
