import React from 'react'
import LoginPoster from './LoginPoster'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate("")
    return (

        <div className='flex justify-center items-center h-[90vh] mt-[4.5rem] mx-auto xl:w-[85%] '>
            <div className="flex flex-col md:flex-row  w-full">
            
                <LoginPoster />
                
            
              <div className="md:w-3/5 flex flex-col justify-center items-center border  border-gray-500  rounded-r-md md:rounded-l-0 md:rounded-r-md p-8 shadow-2xl">
                  <h2 className="text-2xl font-semibold mb-6">Create account</h2>
            
                  <form className="w-full ">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="" className='text-gray-700 text-sm'> First name</label>
                      <input type="text"  className="border py-2 pl-2 pr-2 rounded-md w-full" />
                    </div>
                    <div>
                        <label htmlFor="" className='text-gray-700 text-sm'>Last name</label>
                      <input type="text" className="border py-2  pl-2 pr-2 rounded-md w-full" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="" className='text-gray-700 text-sm'>Email</label>
                  <input type="email"  className="border py-2  pl-2 pr-2 rounded-md w-full" />
                    </div>
                  <div>
                      <label htmlFor="" className='text-gray-700 text-sm'>Phone No</label>
                      <input type="text" className="border py-2  pl-2 pr-2 rounded-md w-full" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="" className='text-gray-700 text-sm'>Password</label>
                      <input type="password" className="border py-2  pl-2 pr-2 rounded-md w-full" />
                    </div>
                  <div>
                      <label htmlFor="" className='text-gray-700 text-sm'>Conform password</label>
                      <input type="password"  className="border py-2  pl-2 pr-2 rounded-md w-full" />
                  </div>
                </div>

                <div className="flex flex-col mt-4 text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" /> Remember me
                  </label>
                  <label className="flex items-center mt-2">
                    <input type="checkbox" className="mr-2" /> I agree to all the Terms and Privacy policy
                  </label>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-2 md:gap-4 text-white '>
                <button className="w-full bg-[#0F70DA] py-2 rounded-md mt-4">Create account</button>
                <button className="w-full bg-[#2D3748] text-xs  py-2 rounded-md md:mt-4 flex justify-center items-center">
                  <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                  Sign in with Google
                </button>
            </div>
            <p className="text-center mt-4 text-sm">
              Don't have an account? <a onClick={()=>navigate("/login")} className="text-[#0F70DA] cursor-pointer">Login</a>
            </p>
                  </form>
              </div>
            </div>
        </div>
    
  )
}

export default Signup