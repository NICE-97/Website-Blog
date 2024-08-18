import React, { useState } from 'react'
import DataFuture from '../data/DataFuture'

function Future() {
  const [future, setFuture] = useState(DataFuture)

  return (
    <div className="container flex mx-auto mt-5">
      <div className="bg-white sm:w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold uppercase">future</h3>
          <a href="">View all</a>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div className="p-4 grid lg:grid-cols-1 gap-2 justify-center justify-items-center ">
          <div className="w-full overflow-hidden scaleimg">
            <div className="relative ">
              <img
                className="w-full h-64 sm:h-56 md:h-64 object-cover object-center"
                src="https://images.unsplash.com/photo-1519774097905-a937f6c552e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhciUyMGZ1dHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="absolute bottom-5 left-5">
                <div className="bg-orange-500 text-sm  w-20 text-center text-white rounded-md">
                  GADGETS
                </div>
                <h3 className="text-white font-bold">
                    AI Assists Doctors In Interpreting Skin Conditions
                </h3>
                <p className="text-gray-300">July 31, 2021</p>
              </div>
            </div>
          </div>
        <div className='grid gap-5'>
            {future.map((items, index)=>{
                return(
                    <div key={index} className={`container mx-auto grid grid-cols-8  hover:text-orange-500 ${index === 0 ? 'mt-3' : ''}`}>
                        <div className="overflow-hidden scaleimg bg-red-500 col-span-2 md:col-span-3">
                            <img
                            className="w-full h-full object-cover object-center"
                            src={items.imag}
                            alt=""
                            />
                        </div>
                        <div className="p-2 col-start-3 col-span-5 md:col-start-4 md:col-span-4">
                            <h3 className="font-bold text-sm">
                            Start a Digital Marketing Website for your Service
                            </h3>
                            <p className="text-sm text-gray-400">July 31, 2021</p>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Future
