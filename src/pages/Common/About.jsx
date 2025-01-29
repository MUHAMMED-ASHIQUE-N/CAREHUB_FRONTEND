import React from 'react'

import aboutImg from '../../assets/assets_frontend/about_image.png'
import Navbar from '../../components/Common/Navbar'
import Footer from '../../components/Common/Footer'
import ServiceCard from '../../components/Common/ServiceCard'
const About = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='mt-[4.5rem] mx-auto w-[80%] lg:w-[85%] py-5'>
        <div>
      <p className='text-center py-10 text-3xl  font-roboto text-gray-500'>About <span className='text-black font-semibold'>Us</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
       
          <img src={aboutImg} alt="" className='w-full md:max-w-[360px]' />
     
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to Carehub, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
            <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
            <h1 className='text-gray-700 font-bold text-lg'>Our Vision</h1>    
            <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>   
        </div>
      </div>

      <div className='py-5'>

      <h1 className='text-xl text-center md:text-left text-gra pb-5'>WHY <span className='font-bold'> CHOOSE US</span></h1>

      <div className='flex items-center  flex-col md:flex-row gap-5'>
        <ServiceCard title={'EFFICIENCY'} description={'Streamlined appointment scheduling that fits into your busy lifestyle.'}/>
        <ServiceCard title={'CONVENIENCE:'} description={'Access to a network of trusted healthcare professionals in your area.'}/>
        <ServiceCard title={'PERSONALIZATION:'} description={'Tailored recommendations and reminders to help you stay on top of your health.'}/>
      </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About