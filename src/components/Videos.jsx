import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

function Videos() {
  return (
    <div className="container flex mx-auto mt-5">
      <div className="videosbg sm:w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm text-white">
          <h3 className="font-bold">VIDEOS</h3>
          <a className="hover:text-orange-500" href="">
            View all
          </a>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div className='grid grid-cols-1 gap-3 px-5 py-5 lg:grid-cols-2'>
            <div className='relative bg-red-500'>
                <div className='w-full overflow-hidden scaleimg h-full'>
                    <img className='object-cover object-center w-full h-full' src="https://images.unsplash.com/photo-1548686304-5c3be888a00b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZXNwb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className='text-white text-2xl absolute top-1/2 right-1/2'>
                    <FaPlayCircle />
                </div>
                <div className='text-white absolute left-5 bottom-5'>
                    <p className='bg-orange-500 text-sm  w-1/4 text-center text-white rounded-md'>Games</p>
                    <h2 className='font-bold'>Mortal Kombat Makes Difficulty Adjustments</h2>
                    <p className='text-gray-400'>by John Doe July 31, 2021</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div className='hover:text-orange-500 text-white'>
                    <div className='relative'>
                        <div className='w-full overflow-hidden scaleimg'>
                            <img className='object-cover object-center h-28 w-full lg:h-24 xl:h-36' src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGVzcG9ydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div className='text-white text-2xl absolute top-1/2 right-1/2'>
                            <FaPlayCircle />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h3 className='font-bold text-xs'>This Trailer Explores The Dangers Of The Open World</h3>
                        <p className='text-xs mt-1 text-gray-300'>July 31, 2021</p>
                    </div>
                </div>
                <div className='hover:text-orange-500 text-white'>
                    <div className='relative'>
                        <div className='w-full overflow-hidden scaleimg'>
                            <img className='object-cover object-center h-28 w-full lg:h-24 xl:h-36' src="https://media.istockphoto.com/photos/esports-team-winning-the-match-picture-id1129493258?b=1&k=20&m=1129493258&s=170667a&w=0&h=f0V9gTl-N8j22xzP3XmqET20eE0GCyfx4lCPCfmkrvI=" alt="" />
                        </div>
                        <div className='text-white text-2xl absolute top-1/2 right-1/2'>
                            <FaPlayCircle />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h3 className='font-bold text-xs'>This Trailer Explores The Dangers Of The Open World</h3>
                        <p className='text-xs mt-1 text-gray-300'>July 31, 2021</p>
                    </div>
                </div>
                <div className='hover:text-orange-500 text-white'>
                    <div className='relative'>
                        <div className='w-full overflow-hidden scaleimg'>
                            <img className='object-cover object-center h-28 w-full lg:h-24 xl:h-36' src="https://images.unsplash.com/photo-1587095951604-b9d924a3fda0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXNwb3J0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div className='text-white text-2xl absolute top-1/2 right-1/2'>
                            <FaPlayCircle />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h3 className='font-bold text-xs'>This Trailer Explores The Dangers Of The Open World</h3>
                        <p className='text-xs mt-1 text-gray-300'>July 31, 2021</p>
                    </div>
                </div>
                <div className='hover:text-orange-500 text-white'>
                    <div className='relative'>
                        <div className='w-full overflow-hidden scaleimg'>
                            <img className='object-cover object-center h-28 w-full lg:h-24 xl:h-36' src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                        <div className='text-white text-2xl absolute top-1/2 right-1/2'>
                            <FaPlayCircle />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h3 className='font-bold text-xs'>This Trailer Explores The Dangers Of The Open World</h3>
                        <p className='text-xs mt-1 text-gray-300'>July 31, 2021</p>
                    </div>
                </div>
            </div>
        </div>        
      </div>
    </div>
  )
}

export default Videos
