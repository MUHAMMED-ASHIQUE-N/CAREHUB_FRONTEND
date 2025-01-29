import React from 'react'
import { useInView } from 'react-intersection-observer'
const Speciality = (props) => {

 const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  return (
    <div ref={ref} className={`flex flex-col items-center gap-4 py-4 md:py-10  transform duration-1000  ease-out delay-300  transition-all  ${inView ?  "opacity-100 scale-100" :  "opacity-0 scale-150"} `}>
      <div><img src={props.image} alt="error" className='w-20 h-20' /></div>
      <h1 className='font-semibold  font-roboto'>{props.speciality}</h1>
    </div>
  )   
}

export default Speciality
