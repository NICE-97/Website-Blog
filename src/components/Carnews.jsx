import React from "react";

function Carnews() {
  return (
    <div className="container flex mx-auto mt-5">
      <div className="bg-white sm:w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">CAR NEWS</h3>
          <a className="hover:text-orange-500" href="">
            View all
          </a>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div className="p-4 grid grid-cols-1 gap-2 justify-center">
        <div className="w-full overflow-hidden scaleimg">
            <div className="relative ">
                <img
                    className="w-full object-cover object-center h-52 sm:h-60 md:h-80 lg:h-96"
                    src="https://images.unsplash.com/photo-1518987048-93e29699e79a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
                <div className="absolute bottom-5 left-5">
                    <div className="bg-orange-500 text-sm  w-14 text-center text-white rounded-md">
                    BMW
                    </div>
                    <h3 className="text-white font-bold">
                    What’s in the Most Recent Upgrade Package
                    </h3>
                    <p className="text-gray-300">by John Doe July 31, 2021</p>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="hover:text-orange-500">
                    <div className="relative overflow-hidden scaleimg">
                    <img
                        className="object-cover object-center w-full h-24 sm:h-32 md:h-40 lg:h-48"
                        src="https://images.unsplash.com/photo-1537984822441-cff330075342?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                    BMW
                    </div>
                    </div>
                    <h3 className="font-bold text-xs md:text-base">
                    The Best Xbox 360 Co-Op Offline Split-Screen Games
                    </h3>
                    <p className="text-gray-300 text-xs md:text-base">
                        July 31, 2021
                    </p>
                </div>
                <div className="hover:text-orange-500">
                    <div className="relative overflow-hidden scaleimg">
                    <img
                        className="object-cover object-center w-full h-24 sm:h-32 md:h-40 lg:h-48"
                        src="https://images.unsplash.com/photo-1616455165195-239de2592faa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                    BMW
                    </div>
                    </div>
                    <h3 className="font-bold text-xs md:text-base">
                    The Best Xbox 360 Co-Op Offline Split-Screen Games
                    </h3>
                    <p className="text-gray-300 text-xs md:text-base">
                        July 31, 2021
                    </p>
                </div>
                <div className="hover:text-orange-500">
                    <div className="relative overflow-hidden scaleimg">
                    <img
                        className="object-cover object-center w-full h-24 sm:h-32 md:h-40 lg:h-48"
                        src="https://images.unsplash.com/photo-1504366130991-154787072d46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJtd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt=""
                    />
                    <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                    BMW
                    </div>
                    </div>
                    <h3 className="font-bold text-xs md:text-base">
                    The Best Xbox 360 Co-Op Offline Split-Screen Games
                    </h3>
                    <p className="text-gray-300 text-xs md:text-base">
                        July 31, 2021
                    </p>
                </div>
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default Carnews;
