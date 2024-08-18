import React from 'react'
import Mobiles from '../components/Mobiles'
import Followus from '../components/Followus'
import Popularposts from '../components/Popularposts'
import Travel from '../components/Travel'
import MailchimpForm from '../components/MailchimpForm'
import Comments from '../components/Comments'
import Categories from '../components/Categories'
import Maintags from '../components/Maintags'

function Megatabs() {
  return (
    <>
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-9 gap-5'>
        <div className='lg:col-start-1 lg:col-span-6'>
          <Mobiles/>
        </div>
        <div className='lg:col-start-7 lg:col-span-3'>
          <Followus/>
          <Popularposts/>
          <Travel/>
          <MailchimpForm/>
          <Comments/>
          <Categories/>
          <Maintags/>
        </div>
      </div>   
    </>
  )
}

export default Megatabs
