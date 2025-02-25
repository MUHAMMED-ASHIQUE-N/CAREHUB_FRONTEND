import React, { useState } from "react";
import LoginPoster from "./LoginPoster";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
       await axios.post(`http://localhost:7070/api/user/Register`, data);  
   
      navigate('/login')
           
    } catch (error) {
      setError(error.response?.data?.message || "signup failed");
    }
  };
  const password = watch("password");

  return (
    <div className="flex justify-center items-center h-[90vh] mt-[4.5rem] mx-auto xl:w-[85%]">
      <div className="flex flex-col md:flex-row w-full">
        <LoginPoster />

        <div className="md:w-3/5 flex flex-col justify-center items-center border border-gray-500 rounded-r-md md:rounded-l-0 md:rounded-r-md p-8 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-6">Create account</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="" className="text-gray-700 text-sm">
                    First name
                  </label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    className="border py-2 pl-2 pr-2 rounded-md w-full"
                  />
                  {errors.firstName && (
                    <span className="text-sm text-red-700 rounded-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="text-gray-700 text-sm">
                    Last name
                  </label>
                  <input
                    type="text"
                    {...register("secondName")}
                    className="border py-2 pl-2 pr-2 rounded-md w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="" className="text-gray-700 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email Required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid Email",
                      },
                    })}
                    className="border py-2 pl-2 pr-2 rounded-md w-full"
                  />
                  {errors.email && (
                    <span className="text-sm text-red-700 rounded-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="text-gray-700 text-sm">
                    Phone No
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber", {
                      required: "Phone Number Required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Invalid Phone Number",
                      },
                    })}
                    className="border py-2 pl-2 pr-2 rounded-md w-full"
                  />
                  {errors.phoneNumber && (
                    <span className="text-sm text-red-700 rounded-sm">
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="" className="text-gray-700 text-sm">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password should contain at least one uppercase, one lowercase, a number, and a special character",
                      },
                    })}
                    className={`${
                      errors.password ? "border-red-800 border-2" : ""
                    } border py-2 pl-2 pr-2 rounded-md w-full`}
                  />
                  {errors.password && (
                    <span className="text-xs text-red-700 rounded-sm">
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="text-gray-700 text-sm">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className="border py-2 pl-2 pr-2 rounded-md w-full"
                  />
                  {errors.confirmPassword && (
                    <span className="text-xs text-red-700 rounded-sm">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col mt-4 text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("RememberMe")}
                    className="mr-2"
                  />{" "}
                  Remember me
                </label>
                <label className="flex items-center mt-2">
                  <input type="checkbox" className="mr-2" /> I agree to all the
                  Terms and Privacy policy
                </label>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-white">
              <button
                type="submit"
                className="w-full bg-[#0F70DA] py-2 rounded-md mt-4"
              >
                Create account
              </button>
              <button
                type="button"
                className="w-full bg-[#2D3748] text-xs py-2 rounded-md md:mt-4 flex justify-center items-center"
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="Google"
                  className="mr-2"
                />
                Sign in with Google
              </button>
            </div>
            <p className="text-center mt-4 text-sm">
              Don't have an account?{" "}
              <a
                onClick={() => navigate("/login")}
                className="text-[#0F70DA] cursor-pointer"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
