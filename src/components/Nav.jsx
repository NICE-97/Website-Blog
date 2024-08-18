import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Nav({togglebtn, show}) {
  
  return (
    <nav className='container mx-auto relative'>
        <div className={`absolute text-center w-2/5 shadow-md shadow-gray-300${show} md:hidden`}>
         <div className={`bg-white h-screen py-5 w-full px-2 `}>
            <div className="font-black text-2xl   content-center mb-4 grid content-center grid-cols-5 justify-items-stretch">
              <a className='grid col-span-4 content-center' href="">MEGSPOT</a>
              <button onClick={togglebtn} className='grid content-center text-4xl font-bold'><IoMdClose /></button>
            </div><hr/>
            <ul className="font-bold text-lg grid *:duration-300">
              <li className="content-center py-4 hover:text-white hover:bg-orange-500">
                <Link to="/">HOME</Link>
              </li><hr/>
              <li className="content-center py-4 hover:text-white hover:bg-orange-500">
                <Link to="/features">FEATURES</Link>
              </li><hr/>
              <li className="content-center py-4 hover:text-white hover:bg-orange-500">
                <Link to="/megamenu">MEGA MENU</Link>
              </li><hr/>
              <li className="content-center py-4 hover:text-white hover:bg-orange-500">
                <Link to="/megatabs">MEGA TABS</Link>
              </li><hr/>
              <li className="content-center py-4 hover:text-white hover:bg-orange-500">
                <Link to="/technology">TECHNNOLOGY</Link>
              </li><hr/>
              <li className="content-center py-4 hover:text-white hover:bg-orange-500">
                <Link to="/contact">CONTACT US</Link>
              </li><hr/>
            </ul>
         </div>
      </div>
    </nav>
  )
}

export default Nav
{/* <button onClick={show.handleToggle} className='px-5 py-2 bg-black text-white font-bold mt-5'>Click</button> */}