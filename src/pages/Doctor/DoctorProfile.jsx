import React from 'react'
import Navbar_admin from '../../components/Admin,Doctor,Pharmacy/Navbar_admin'
import Sidebar from '../../components/Admin,Doctor,Pharmacy/Sidebar'
import { DoctorMenuItems } from '../../Constants/constants'

const DoctorProfile = () => {
  return (
       <div className="flex flex-col h-screen">
    <Navbar_admin department={"Doctor"} /> {/* Navbar on top */}
    <div className="flex flex-1">
      <div className="flex-shrink-0">
        <Sidebar  menuItems={DoctorMenuItems}/> {/* Sidebar on the left */}
      </div>
      <div className="flex-1 p-4 bg-gray-50">
        {/* Main content goes here */}
        <h1 className='font-semibold text-lg'> All Doctors</h1>
        djk
        {/* Add more content to make the sidebar height adjust */}
      </div>
    </div>        
  </div>
  )
}

export default DoctorProfile
