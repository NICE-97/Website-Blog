import React, { useState } from 'react'

function StoriesfromMegspot() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };

  return (
    <div className="container flex mx-auto mt-5 grid md:grid-cols-2 lg:grid-cols-1 gap-5">
      <div className="bg-white w-full md:hidden">
            <div className="flex justify-between mx-5 mt-2 text-sm">
            <h3 className="font-bold ">Stories from Megspot</h3>
            </div>
            <div className="flex">
            <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
            <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
            </div>
            <div>
                <div className='px-5 my-5'>
                    <select value={selectedValue} onChange={handleSelectChange} id="small" className="block w-full p-2 text-sm text-gray-900 border border-orange-500 rounded-lg bg-gray-50">
                        <option value="">--Please choose an option--</option>
                        <option value="0">Megspot Blog</option>
                        <option value="1">Most Popular</option>
                        <option value="2">Trending Now</option>
                        <option value="3">Kitchens</option>
                        <option value="4">Laundries</option>
                        <option value="5">More Rooms</option>
                        <option value="6">Bathrooms</option>
                        <option value="7">Megspot Tours</option>
                        <option value="8">Renovating</option>
                        <option value="9">Building</option>
                        <option value="10">Architecture</option>
                        <option value="11">Interior Design</option>
                        <option value="12">Livingroom</option>
                        <option value="13">Building</option>
                        <option value="14">Storage</option>
                        <option value="15">Moving</option>
                        <option value="16">DIY</option>
                        <option value="17">Small Spaces</option>
                        <option value="18">Lifestyle</option>
                        <option value="19">Eco Living</option>
                        <option value="20">Gardens</option>
                        <option value="21">Outdoors</option>
                        <option value="22">Decorating</option>
                        <option value="23">Megspot TV</option>
                        <option value="24">Latest from NZ</option>
                    </select>
                </div> 
            </div>
      </div>
      <div className="bg-white w-full hidden md:block">
            <div>
                <div className="flex justify-between mx-5 mt-2 text-sm">
                    <h3 className="font-bold ">Stories from Megspot</h3>
                </div>
                <div className="flex">
                <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
                <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
                </div>
                <div>
                    <div className='px-5 pb-5'>
                        <ul className='stories'>
                                <a className='hover:text-orange-500 translatex' href=""><li>Most Popular</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Trending Now</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Kitchens</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Laundries</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>More Rooms</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Bathrooms</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Megspot Tours</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Renovating</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Building</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Architecture</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Interior Design</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Livingroom</li></a><hr/>
                                
                        </ul>
                    </div>
                </div>
            </div>
      </div>
      <div className="bg-white w-full hidden md:block">
            <div>
                <div className="flex justify-between mx-5 mt-2 text-sm">
                    <h3 className="font-bold ">Stories from Megspot</h3>
                </div>
                <div className="flex">
                <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
                <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
                </div>
                <div>
                    <div className='px-5 pb-5'>
                        <ul className='stories'>
                                <a className='hover:text-orange-500 translatex' href=""><li>Magspot blog</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Storage</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Moving</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>DIY</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Small Spaces</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Lifestyle</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Eco Living</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Gardens</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Outdoors</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Decorating</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Megspot TV</li></a><hr/>
                                <a className='hover:text-orange-500 translatex' href=""><li>Latest from NZ</li></a><hr/>
                                
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default StoriesfromMegspot