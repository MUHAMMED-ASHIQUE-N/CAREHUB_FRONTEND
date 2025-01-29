import React from 'react'

//assets 
import dividingImg from "../../assets/assets_frontend/section-img.png"
const SectionHeading = (props) => {
  return (
    <div className='flex flex-col items-center text-center gap-4'>
      <h1 className='text-2xl md:text-4xl  font-roboto font-bold '>{props.heading} </h1>

   {  props.show && <img src={dividingImg} alt=""  className='w-[70px]' />}
      <p className='text-gray-600 md:px-28 xl:px-96 leading-7' >{props.paragrah} </p>

    </div>
  )
}

export default SectionHeading
