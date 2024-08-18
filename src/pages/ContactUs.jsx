import React from 'react'
import Contact from '../components/Contact'
import Followus from '../components/Followus'
import ServiceForYou from '../components/ServiceForYou'
import Supporter from '../components/Supporter'

function ContactUs() {
  return (
    <>
        <div className='container mx-auto'>
            <div className='grid grid-cols-9 gap-5'>
                <div className='grid col-span-9 lg:col-span-6'>
                    <Contact/>
                    <Supporter/>
                </div>
                <div className='hidden lg:block grid col-span-3'>
                    <Followus/>
                    <ServiceForYou/>
                </div>
                <div className='lg:hidden grid col-span-9'>
                    <Followus/>
                    <ServiceForYou/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactUs
