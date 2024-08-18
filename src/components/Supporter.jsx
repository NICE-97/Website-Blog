import React from 'react'
import { IoIosMail, IoIosCall  } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";

function Supporter() {
  return (
    <div className='container mx-auto mt-5'>
        <div className='bg-white p-5 '>
            <div className="flex justify-between  text-sm">
                    <h3 className="font-bold uppercase">Service For You</h3>
            </div>
            <div className="flex">
                <div className="bg-orange-500 my-2  h-1 w-20 "></div>
                <div className="bg-gray-200 my-2  h-1 w-full "></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='text-center grid justify-items-center mt-5'>
                    <div className='w-14 h-14 text-2xl text-white bg-orange-500 grid content-center justify-items-center rounded-full '>
                        <IoIosMail />
                    </div>
                    <div className='text-lg font-bold text-orange-500 mt-2'>Email</div>
                    <div className='font-semibold'>Megspot@example.com</div>
                    <div className='font-semibold'>Megspot@example.com</div>
                    
                </div>
                <div className='text-center grid justify-items-center mt-5'>
                    <div className='w-14 h-14 text-2xl text-white bg-orange-500 grid content-center justify-items-center rounded-full '>
                        <IoIosCall />
                    </div>
                    <div className='text-lg font-bold text-orange-500 mt-2'>Phone</div>
                    <div className='font-semibold'>+66 2123 4567</div>
                    <div className='font-semibold'>+66 3212 3456</div>
                    
                </div>
                <div className='text-center grid justify-items-center mt-5'>
                    <div className='w-14 h-14 text-2xl text-white bg-orange-500 grid content-center justify-items-center rounded-full '>
                        <FaMapMarkedAlt />
                    </div>
                    <div className='text-lg font-bold text-orange-500 mt-2'>Address</div>
                    <div className='font-semibold'>2779 Rubaiyat Road, Traverse City, MI 49684California, USA</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Supporter
