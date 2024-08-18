import React from 'react'
import StoriesfromMegspot from '../components/StoriesfromMegspot'
import Megspotblog from '../components/Megspotblog'


function Features() {
  return (
    <div>
        <div className='container mx-auto lg:grid lg:grid-cols-8 gap-5'>
          <div className='lg:col-start-1 lg:col-span-2'>
            <StoriesfromMegspot/>
          </div>
          <div className='lg:col-start-3 lg:col-span-8'>
            <Megspotblog/>
          </div>
        </div>    
    </div>
  )
}

export default Features
