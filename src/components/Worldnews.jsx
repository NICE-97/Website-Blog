import React, { useState }  from "react";
import DataWorldNews from '../data/DataWorldNews'

function Worldnews() {
  const [worldNews, setWorldNews] = useState(DataWorldNews);
  return (
    <div className="container flex mx-auto">
      <div className="bg-white mt-5 ">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">WORLD NEWS</h3>
          <a href="">View all</a>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div className="grid justify-center justify-items-center p-4 md:grid-cols-2 md:grid-cols-2 gap-2">
          <div className="relative w-full overflow-hidden scaleimg">
            <img
              className="w-full md:h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="absolute bottom-5 left-5">
              <div className="bg-orange-500 text-sm al w-14 text-center text-white rounded-md">
                HEALTY
              </div>
              <h3 className="text-white font-bold">
                How to Get COVID-19 Related Alerts on Your Phone
              </h3>
              <p className="text-gray-300">by John Doe -July 31, 2021</p>
            </div>
          </div>
          <div className="grid gap-2">
            {worldNews.map((items, index) => {
              return(
                <div key={index} className="container mx-auto grid grid-cols-8 gap-2 hover:text-orange-500">
                  <div className="overflow-hidden scaleimg bg-red-500 col-span-2 md:col-span-3">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={items.image}
                      alt=""
                    />
                  </div>
                  <div className="p-2 col-start-3 col-span-8 md:col-start-4 md:col-span-8">
                    <h3 className="font-bold text-sm">
                      {items.title}
                    </h3>
                    <p className="text-sm text-gray-400">{items.date}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Worldnews;
