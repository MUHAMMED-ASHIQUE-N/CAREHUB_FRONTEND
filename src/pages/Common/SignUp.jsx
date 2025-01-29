import React from 'react'
import Navbar from '../../components/Common/Navbar'
import Signup from '../../components/Common/Signup'


const SignUp = () => {
  return (
    <div>
    <Navbar />
    <div className=" mx-auto w-[90%] md:w-[95%] xl:w-[85%]  ">
      <div>
        <Signup/>
      </div>
    </div>
  </div>
  )
}

export default SignUp
