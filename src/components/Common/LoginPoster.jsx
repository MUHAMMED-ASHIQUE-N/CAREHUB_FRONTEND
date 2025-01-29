import React from "react";
import login_Image from "../../assets/assets_frontend/login_page_image.png";

function LoginPoster() {
    return (
        <div className="md:w-2/5 hidden  bg-[#0F70DA] rounded-l-md shadow-2xl md:flex flex-col justify-center items-center text-white p-8 relative">

          <h1 className="text-center xl:text-2xl  font-semibold mb-6 z-10">
            A doctor’s mission is not just to cure,
            but to care
          </h1>
    
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 xl:w-80 xl:h-80 bg-[#007bff] rounded-full opacity-30"></div>
    
          <img src={login_Image} alt="Doctors" className="relative z-10 max-w-xs xl:max-w-md right-5 bottom-5" />
    
          <div className="flex space-x-2 mt-4">
            <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
          </div>
        </div>
      );
}

export default LoginPoster;
