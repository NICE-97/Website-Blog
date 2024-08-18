import React from 'react'

function Footer() {
  return (
   <div className="footerbg">
        <footer className='container flex mx-auto w-full mt-5'>
        <div className='footerbg w-full text-white p-5 grid lg:grid-cols-3 gap-5'>
            <div>
                <div>
                    <h3 className='font-bold'>CATEGORIES</h3>
                    <div className='mt-5'>
                        <a className='flex justify-between mb-1 hover:text-orange-500' href="">Gadgats <span className='text-gray-400'>(3)</span></a>
                        <a className='flex justify-between mb-1 hover:text-orange-500' href="">Podcasts <span className='text-gray-400'>(3)</span></a>
                        <a className='flex justify-between mb-1 hover:text-orange-500' href="">Review <span className='text-gray-400'>(3)</span></a>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='font-bold'>MAIN TAGS</h3>
                    <div className='mt-2'>
                        <button className='btncolormain px-3 rounded-xl mr-2 my-2 hover:text-orange-500'>Cars</button>
                        <button className='btncolormain px-3 rounded-xl mr-2 my-2 hover:text-orange-500'>Gadgets</button>
                        <button className='btncolormain px-3 rounded-xl mr-2 my-2 hover:text-orange-500'>Games</button>
                        <button className='btncolormain px-3 rounded-xl mr-2 my-2 hover:text-orange-500'>Healthy</button>
                        <button className='btncolormain px-3 rounded-xl mr-2 my-2 hover:text-orange-500'>Poducasts</button>
                        <button className='btncolormain px-3 rounded-xl mr-2 my-2 hover:text-orange-500'>Reviews</button>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3 className='font-bold'>LATEST POSTS</h3>
                    <div className="flex mt-3 hover:text-orange-500 mt-3">
                        <div className="overflow-hidden scaleimg w-32 h-full">
                        <img
                            className="w-full h-20 lg:h-16  object-cover object-center"
                            src="https://images.unsplash.com/photo-1633114127408-af671c774b39?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        </div>
                        <div className="px-2">
                        <h3 className="font-bold text-sm">
                            11 of Best Laptops Evaluated Based on Budget
                        </h3>
                        <p className="text-sm text-gray-400">August 02, 2021</p>
                        </div>
                    </div>
                    <div className="flex mt-3 hover:text-orange-500">
                        <div className="overflow-hidden scaleimg w-32 h-full">
                        <img
                            className="w-full h-20 lg:h-16  object-cover object-center"
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        </div>
                        <div className="px-2">
                        <h3 className="font-bold text-sm">
                            Here’s What People Think of iOS 13 New Dark Mode
                        </h3>
                        <p className="text-sm text-gray-400">August 02, 2021</p>
                        </div>
                    </div>
                    <div className="flex mt-3 hover:text-orange-500">
                        <div className="overflow-hidden scaleimg w-32 h-full">
                        <img
                            className="w-full h-20 lg:h-16  object-cover object-center"
                            src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        </div>
                        <div className="px-2">
                        <h3 className="font-bold text-sm">
                            Apple Watch Series 5 is the Best One Yet By Consumer
                        </h3>
                        <p className="text-sm text-gray-400">August 02, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3 className='font-bold'>POPULAR POSTS</h3>
                    <div className="flex mt-3 hover:text-orange-500 mt-3">
                        <div className="overflow-hidden scaleimg w-32 h-full">
                        <img
                            className="w-full h-20 lg:h-16  object-cover object-center"
                            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        </div>
                        <div className="px-2">
                        <h3 className="font-bold text-sm">
                            Apple Watch Series 5 is the Best One Yet By Consumer
                        </h3>
                        <p className="text-sm text-gray-400">August 02, 2021</p>
                        </div>
                    </div>
                    <div className="flex mt-3 hover:text-orange-500">
                        <div className="overflow-hidden scaleimg w-32 h-full">
                        <img
                            className="w-full h-20 lg:h-16  object-cover object-center"
                            src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        </div>
                        <div className="px-2">
                        <h3 className="font-bold text-sm">
                            11 of Best Laptops Evaluated Based on Budget
                        </h3>
                        <p className="text-sm text-gray-400">August 02, 2021</p>
                        </div>
                    </div>
                    <div className="flex mt-3 hover:text-orange-500">
                        <div className="overflow-hidden scaleimg w-32 h-full">
                        <img
                            className="w-full h-20 lg:h-16 object-cover object-center"
                            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        </div>
                        <div className="px-2">
                        <h3 className="font-bold text-sm">
                            Here’s What People Think of iOS 13 New Dark Mode
                        </h3>
                        <p className="text-sm text-gray-400">August 02, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
   </div>
  )
}

export default Footer
