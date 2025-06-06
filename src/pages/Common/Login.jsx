
import React from 'react'
import LoginPoster from '../../components/Common/LoginPoster'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Navbar from '../../components/Common/Navbar'
import CircularIndeterminate from '../../components/Layout/CircularIndeterminate'
const Login = () => {

  const {login,loading } = useContext(AuthContext);

  const navigate = useNavigate()


const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = async (data) => {
 try {
   await login(data.email, data.password);
 } catch (error) {
  console.log(error);
 } 
}

if (loading) {
  return <CircularIndeterminate />;
}
  return (

    <div>
      <Navbar/>
      <div className='mx-auto w-[90%] md:w-[95%] xl:w-[85%]'>
         <div className='flex justify-center items-center h-[89vh] mt-[4.5rem] mx-auto xl:w-[85%] '>
              <div className="flex flex-col md:flex-row  w-full">

                  <LoginPoster />
      
                <div className="md:w-3/5 flex flex-col justify-center items-center border  border-gray-500  rounded-r-md md:rounded-l-0 md:rounded-r-md p-8 shadow-2xl">
                    <h2 className="text-2xl font-semibold mb-6">Login Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className=" w-full md:max-w-[400px] ">
              <div>
                  <div className="grid grid-cols-1  gap-4">
                      <div>
                          <label htmlFor="" className='text-gray-700 text-sm'> Email /  Phone No</label>
                        <input type="email"  {...register("email", { required: "Email is required" })} className="border py-2 pl-2 pr-2 rounded-md w-full" />
                        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      
                      </div>
                      <div>
                          <label htmlFor="" className='text-gray-700 text-sm'>Password</label>
                        <input type="password"  {...register("password", { required:  "Password is required" })} className="border py-2  pl-2 pr-2 rounded-md w-full" />
                        {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
                      </div>
                  </div>
      
      
      
              </div>
              <div className='flex flex-col  gap-2 mt-4 text-white '>
                  <button type='submit'className="w-full bg-[#0F70DA] py-2 rounded-md">login</button>
                  <button className="w-full bg-[#2D3748] text-xs  py-3 rounded-md  flex justify-center items-center">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" className="mr-2" />
                    Sign in with Google
                  </button>
              </div>
              <div className='flex justify-between mt-1'>
              <label className="flex items-center  text-sm">
                      <input type="checkbox" className="mr-2" /> Remember me
                    </label>
                  <p className=" text-sm">
                    Don't have an account? <a onClick={()=>navigate("/signup")} className="text-[#0F70DA] cursor-pointer">SingUp</a>
                  </p>
              </div>
                    </form>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Login
