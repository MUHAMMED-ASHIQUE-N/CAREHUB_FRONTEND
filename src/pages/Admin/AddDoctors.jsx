import React, { useRef } from 'react';
import Navbar_admin from '../../components/Admin,Doctor,Pharmacy/Navbar_admin';
import Sidebar from '../../components/Admin,Doctor,Pharmacy/Sidebar';
import upload_Icon from '../../assets/assets_admin/upload_area.svg';

const AddDoctors = () => {
  const fileInputRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar_admin />
      <div className="flex flex-row">
        <div className="flex-shrink-0 ">
          <Sidebar />
        </div>
        <div className="flex-1 w-full p-3 md:p-0  bg-gray-100">
          <div className="md:p-6 bg-gray-100 w-full overflow-y-auto h-[89vh] scrollbar-hide ">
            <h1 className="text-2xl font-bold mb-6">Add Doctor</h1>

            <div className="bg-white p-6  md:max-w-6xl mx-auto  rounded-lg shadow-md">
              <div className="mb-6">
                <div className="mt-2 flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                  <div className="flex items-center justify-center cursor-pointer" onClick={handleIconClick}>
                    <img src={upload_Icon} alt="Upload Icon" className="w-16 h-16" />
                  </div>
                  <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      console.log('Selected file:', e.target.files[0]);
                    }
                  }} />
                  <label className="block text-gray-700 text-center sm:text-left">Upload doctor <br /> picture</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700">Doctor name</label>
                  <input type="text" className="w-full p-2 border rounded mt-2" placeholder="Name" />
                </div>
                <div>
                  <label className="block text-gray-700">Speciality</label>
                  <select className="w-full p-2 border rounded mt-2">
                    <option value="General physician">General physician</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700">Doctor Email</label>
                  <input type="email" className="w-full p-2 border rounded mt-2" placeholder="Email" />
                </div>
                <div>
                  <label className="block text-gray-700">Degree</label>
                  <input type="text" className="w-full p-2 border rounded mt-2" placeholder="Degree" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700">Set Password</label>
                  <input type="password" className="w-full p-2 border rounded mt-2" placeholder="Password" />
                </div>
                <div>
                  <label className="block text-gray-700">Fees</label>
                  <input type="number" className="w-full p-2 border rounded mt-2" placeholder="Doctor fees" />
                </div>
                <div>
                  <label className="block text-gray-700">Experience</label>
                  <input type="text" className="w-full p-2 border rounded mt-2" placeholder="1 Year" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">About Doctor</label>
                <textarea className="w-full p-2 border rounded mt-2" rows="4" placeholder="About Doctor"></textarea>
              </div>

              <button className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
