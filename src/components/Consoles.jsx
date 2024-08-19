import React from "react";

function Consoles() {
  return (
    <div className="container flex mx-auto mt-5">
      <div className="bg-white sm:w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">CONSOLES</h3>
          <a className="hover:text-orange-500" href="">
            View all
          </a>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div className="p-4 grid grid-cols-2 gap-2 justify-center">
          <div className="hover:text-orange-500">
            <div className="relative overflow-hidden scaleimg">
              <img
                className="object-cover object-center w-full h-36 md:h-56"
                src="https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8eGJveHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                CONSOLES
              </div>
            </div>
            <h3 className="font-bold text-xs">
              The Best Xbox 360 Co-Op Offline Split-Screen Games
            </h3>
            <p className="text-gray-300 text-xs">
              by <span className="text-orange-500">John Doe</span> July 31, 2021
            </p>
          </div>
          <div className="hover:text-orange-500">
            <div className="relative overflow-hidden scaleimg">
              <img
                className="object-cover object-center w-full h-36 md:h-56"
                src="https://images.unsplash.com/photo-1571716846252-df1324ce17bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHhib3h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                CONSOLES
              </div>
            </div>
            <h3 className="font-bold text-xs">
              Great Local Multiplayer Games to Play on PS5
            </h3>
            <p className="text-gray-300 text-xs">
              by <span className="text-orange-500">John Doe</span> July 31, 2021
            </p>
          </div>
          <div className="hover:text-orange-500">
            <div className="relative overflow-hidden scaleimg">
              <img
                className="object-cover object-center w-full h-36 md:h-56"
                src="https://i.pcmag.com/imagery/articles/04W0zg2PaBvY8KR7W5dgD6X-1.fit_lim.v1605025767.png"
                alt=""
              />
              <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                CONSOLES
              </div>
            </div>
            <h3 className="font-bold text-xs">
              13 PlayStation 5 Tips to Get the Most Out
            </h3>
            <p className="text-gray-300 text-xs">
              by <span className="text-orange-500">John Doe</span> July 31, 2021
            </p>
          </div>
          <div className="hover:text-orange-500">
            <div className="relative overflow-hidden scaleimg">
              <img
                className="object-cover object-center w-full h-36 md:h-56"
                src="https://images.unsplash.com/photo-1612801799890-4ba4760b6590?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHhib3h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="bg-orange-500 w-2/2 text-center text-xs px-1 text-white absolute bottom-0">
                CONSOLES
              </div>
            </div>
            <h3 className="font-bold text-xs">
              Guide to a few of Best Portable Monitors for PS5
            </h3>
            <p className="text-gray-300 text-xs">
              by <span className="text-orange-500">John Doe</span> July 31, 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consoles;
