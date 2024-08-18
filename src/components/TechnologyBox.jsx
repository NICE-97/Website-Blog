import React, { useState } from 'react'
import DataTechnology from '../data/DataTechnology';

function TechnologyBox() {
  const [ data, setData1] = useState(DataTechnology)
 

  const boxStyle = 'relative overflow-hidden scaleimg  rounded-md';
  return (
    <div className='container mx-auto'>
        <div className='bg-white mt-5 rounded-md p-5 grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[250px]'>
            {data.map((items, index) => {
                return (
                  <div key={index} className={`${boxStyle} ${index === 0 ? 'col-span-2 md:col-span-2' : '' } ${index === 1 ? 'row-span-2 md:row-span-2' : ''}`} >
                        <img
                            className="h-full object-cover object-center w-full"
                            src={items.imag}
                            alt=""
                        />
                        <div className="absolute bottom-2 left-2 pr-2">
                            <div className="bg-orange-500 text-xs w-24 text-center text-white rounded-md">
                            {items.technology}
                            </div>
                            <h3 className="text-white font-bold xl:text-sm mt-2">
                            {items.titel}
                            </h3>
                            <p className='text-white'>{items.lorems}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TechnologyBox
