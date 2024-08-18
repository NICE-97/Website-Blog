import React,{ useState, useEffect } from 'react'
import Carnews from '../components/Carnews'
import Categories from '../components/Categories'
import Comments from '../components/Comments'
import Consoles from '../components/Consoles'
import Firstbox from '../components/Firstbox'
import Followus from '../components/Followus'
import Gadgets from '../components/Gadgets'
import Laptops from '../components/Laptops'
import Linkbox from '../components/Linkbox'
import MailchimpForm from '../components/MailchimpForm'
import Maintags from '../components/Maintags'
import Mobile from '../components/Mobile'
import Popularposts from '../components/Popularposts'
import Reviews from '../components/Reviews'
import Travel from '../components/Travel'
import Videos from '../components/Videos'
import Worldnews from '../components/Worldnews'


function Home() {
  
  return (
    <>
        <Linkbox/>
        <Firstbox/>
        <div>
        <div className='container mx-auto grid grid-cols-9 gap-5'>
            <div className='col-span-9 lg:col-start-1 lg:col-span-6'>
                <Worldnews/>
                <Reviews/>
                <div className='grid grid-cols-1 gap-x-5 md:grid-cols-2'>
                    <Gadgets/>
                    <Laptops/>
                </div>
                
                <Mobile/>
                <Videos/>
                <Consoles/>
                <Carnews/>
            <div className='lg:hidden'>
                <Followus/>
                <Popularposts/>
                <Travel/>
                <MailchimpForm/>
                <Comments/>
                <Categories/>
                <Maintags/>
            </div>
            </div>
            <div className='lg:col-start-7 lg:col-span-3'>
            <div className='hidden lg:block'>
                <Followus/>
                <Popularposts/>
                <Travel/>
                <MailchimpForm/>
                <Comments/>
                <Categories/>
                <Maintags/>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Home
