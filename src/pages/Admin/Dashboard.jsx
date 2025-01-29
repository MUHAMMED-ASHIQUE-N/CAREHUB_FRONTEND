import React from "react";
import Navbar_admin from "../../components/Admin,Doctor,Pharmacy/Navbar_admin";
import Sidebar from "../../components/Admin,Doctor,Pharmacy/Sidebar";
import doctor_icon from "../../assets/assets_admin/doctor_icon.svg";
import appointments_icon from "../../assets/assets_admin/appointments_icon.svg";
import Patients_icon from "../../assets/assets_admin/patients_icon.svg";
import list_icon from "../../assets/assets_admin/list_icon.svg";
import patient_image from "../../assets/assets_frontend/doc1.png";
import cancel_icon from "../../assets/assets_admin/cancel_icon.svg";

const StatsCard = ({ icon, value, label }) => (
  <div className="flex items-center p-4 bg-white rounded-md shadow-md">
    <div className="rounded-xl">
      <img src={icon} alt={`${label} Icon`} className="w-12 h-12" />
    </div>
    <div className="ml-4">
      <h2 className="text-xl font-bold">{value}</h2>
      <p className="text-gray-500">{label}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const appointments = Array(20).fill({
    name: "Richard James",
    date: "24th July, 2024",
    image: patient_image,
  });

  return (
    <div className="flex flex-col h-screen">
      <Navbar_admin />
      <div className="flex flex-1">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1 md:p-4 bg-gray-50">
          <div className="py-2 px-5 w-full max-w-4xl mx-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <StatsCard icon={doctor_icon} value={14} label="Doctors" />
              <StatsCard icon={appointments_icon} value={2} label="Appointments" />
              <StatsCard icon={Patients_icon} value={5} label="Patients" />
            </div>

            {/* Latest Appointments */}
            <div className="p-4 bg-white shadow-lg rounded-lg h-[45vh] md:h-[65vh] overflow-y-scroll scrollbar-hide">
              <h3 className="text-lg font-semibold mb-4 flex gap-3 items-center">
                <img src={list_icon} alt="List Icon" />
                Latest Appointment
              </h3>
              <div className="space-y-3">
                {appointments.map((appointment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 transition bg-gray-50 rounded-lg shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-white rounded-full">
                        <img
                          src={appointment.image}
                          alt={appointment.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{appointment.name}</p>
                        <p className="text-xs text-gray-500">Booking on {appointment.date}</p>
                      </div>
                    </div>
                    <button className="rounded-full w-10 h-10 hover:bg-red-200" aria-label="Cancel appointment">
                      <img src={cancel_icon} alt="Cancel Icon" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;