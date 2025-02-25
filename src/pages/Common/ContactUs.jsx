import React from 'react'
import Contact_image from '../../assets/assets_frontend/contact_image.png'
import Navbar from '../../components/Common/Navbar'
import Footer from '../../components/Common/Footer'
import { useNavigate } from 'react-router-dom'

const ContactUs = () => {

  const navigate = useNavigate()
  return (
    <div>

      <div className='py-[2.5rem]'>
      <Navbar/>
      </div>

      <div className='text-center text-2xl text-gray-500 pt-20'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='py-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm mx-auto w-[80%]'>
        <img src={Contact_image} alt=""  className='w-full md:max-w-[360px]'/>
        <div className='flex flex- flex-col gap-5 justify-center items-start'>
          <p className=' font-semibold text-lg text-gray-600' >OUR OFFICE</p>
          <p className='text-gray-500'>00000 Willms Station <br />
          Suite 000, Washington, USA</p>
          <p className='text-gray-500'>Tel: (000) 000-0000 <br />
          Email: greatstackdev@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button
                className="relative overflow-hidden bg-white border text-black hover:text-white font-bold border-black py-4 px-8 rounded-md font-roboto transition-all duration-500 
  before:absolute before:inset-0 before:bg-[#213555] before:scale-x-0 before:origin-center 
  hover:before:scale-x-100 before:transition-transform before:duration-500 
   before:z-0 z-40"
              >
                <span  onClick={() => navigate("/doctors")} className="relative z-10">Get Appointment</span>
              </button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs



