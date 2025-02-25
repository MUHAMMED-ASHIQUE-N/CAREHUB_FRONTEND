import React from 'react'
import Navbar_admin from '../../components/Admin,Doctor,Pharmacy/Navbar_admin'
import Sidebar from '../../components/Admin,Doctor,Pharmacy/Sidebar'
import patient_image from "../../assets/assets_frontend/doc1.png"
import cancel_icon from "../../assets/assets_admin/cancel_icon.svg"
import { AdminMenuItems } from "../../Constants/constants";


const Appointments = () => {

    const appointments = [
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
      {
        name: " Richard James",
        date: "24th July, 2024",
        image: patient_image,
      },
    ];

  return (
    <div className="flex flex-col  h-[50vh]">
    <Navbar_admin department={"Admin"}/> {/* Navbar on top */}
    <div className="flex flex-1">
      <div className="flex-shrink-0">
        <Sidebar  menuItems={AdminMenuItems} /> {/* Sidebar on the left */}
      </div>
      <div className="flex-1 p-4 bg-gray-200 h-[88vh] overflow-y-scroll scrollbar-hide ">
      <h3 className="text-lg font-semibold mb-4 flex gap-3 items-center"> Appointments</h3>

        <div className="p-4 bg-white shadow-lg rounded-lg md:max-w-3xl">
              <div className="space-y-3">
                {appointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm 
                    
                    
                    :shadow-md transition"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-white rounded-full">
                        <img
                          src={appointment.image}
                          alt={appointment.name}
                          className="w-10 h-10 rounded-full object-fit"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{appointment.name}</p>
                        <p className="text-xs text-gray-500">Booking on {appointment.date}</p>
                      </div>
                    </div>
                    <button className="rounded-full w-10 h-10 hover:bg-red-200">
                     <img src={cancel_icon} alt="" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
        {/* Add more content to make the sidebar height adjust */}
      </div>
    </div>
  </div>
  )
}

export default Appointments
