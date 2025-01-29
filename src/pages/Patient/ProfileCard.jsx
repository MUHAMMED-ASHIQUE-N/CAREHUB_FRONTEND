import React from "react";
import Navbar from "../../components/Common/Navbar";
import Sidebar from "../../components/Admin,Doctor,Pharmacy/Sidebar";


const ProfileCard = () => {
  return (
<>
<Navbar/>
    <div className="flex justify-center items-center mt-[4.5rem] bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg w-[85%]">
        <Sidebar/>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-200 to-yellow-100 h-24 rounded-t-lg"></div>

        {/* Profile Info */}
        <div className="relative flex flex-col  p-4">
          <div className="flex gap-4">
              <div className="w-15 h-15 md:w-20 md:h-20 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-2xl">
                🎁
              </div>
              <div className="flex flex-col">
                  <h2 className="text-sm md:text-xl font-semibold mt-2">Muhammed Ashique N</h2>
                  <p className="text-gray-500 text-xs md:text-sm">Dummyemail@gmail.com</p>
              </div>
          </div>

          <button className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
            Edit
          </button>
        </div>

        {/* Details Section */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="text-gray-600 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Muhammed Ashique"
              className="w-full  bg-gray-100 p-2 rounded-md"
              disabled
            />
          </div>

          {/* Country */}
          <div>
            <label className="text-gray-600 text-sm">Country</label>
            <input
              type="text"
              placeholder="India"
              className="w-full  bg-gray-100 p-2 rounded-md"
              disabled
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-gray-600 text-sm">Gender</label>
            <input
              type="text"
              placeholder="Male"
              className="w-full  bg-gray-100 p-2 rounded-md"
              disabled
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-gray-600 text-sm">Phone No</label>
            <input
              type="text"
              placeholder="8089632186"
              className="w-full  bg-gray-100 p-2 rounded-md"
              disabled
            />
          </div>

          {/* Birthday */}
          <div>
            <label className="text-gray-600 text-sm">Birthday</label>
            <input
              type="text"
              placeholder="20 July, 2024"
              className="w-full  bg-gray-100 p-2 rounded-md"
              disabled
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-gray-600 text-sm">Address</label>
            <input
              type="text"
              placeholder="57th Cross, Richmond Circle, Church Road, London"
              className="w-full  bg-gray-100 p-2 rounded-md"
              disabled
            />
          </div>
        </div>

        {/* Email Section */}
        <div className="p-6">
          <h3 className="text-gray-800 font-semibold">My Email Address</h3>
          <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg mt-2">
            <span className="bg-blue-500 text-white p-2 rounded-full">📧</span>
            <div>
              <p className="text-gray-800">alexarawles@gmail.com</p>
              <p className="text-gray-500 text-sm">1 month ago</p>
            </div>
          </div>
          <button className="mt-4 text-blue-500 hover:underline">
            + Add Email Address
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileCard;
