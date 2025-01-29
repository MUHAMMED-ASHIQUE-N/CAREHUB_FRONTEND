import React from 'react'

import appointment_img from '../../assets/assets_frontend/appointment_img.png'
const Banner = () => {
  return (
    <div className='flex bg-primaryColor  md:rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      <div className='flex-1 py-8 sm:py-10 md:py16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-2xl lg:text-5xl font-semibold text-white'>
            <p>Book Appointment</p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
        </div>
        <button
            className="relative mt-6 overflow-hidden bg-white text-black py-3 px-8 rounded-full font-roboto transition-all duration-500 
  before:absolute before:inset-0 before:bg-buttonColor before:scale-x-0 before:origin-center 
  hover:before:scale-x-100 hover:text-white font-semibold tracking-wide before:transition-transform before:duration-500 
   before:z-0 z-10"
          >
            <span className="relative z-10">Create account</span>
          </button>
      </div>

      <div className='hidden  md:block md:w-1/2 lg:w-[370px] relative'>
            <img className='w-full absolute bottom-0 right-0 max-w-md' src={appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
