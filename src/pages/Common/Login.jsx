import React from "react";
import Navbar from "../../components/Common/Navbar";
import SignIn from "../../components/Common/SingIn";


const Login = () => {
  return (
    <div>
      <Navbar />
      <div className=" mx-auto w-[90%] md:w-[95%] xl:w-[85%]  ">
        <div>
          <SignIn/>
        </div>
      </div>
    </div>
  );
};

export default Login;
